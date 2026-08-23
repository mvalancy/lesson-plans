/* <ai-poll> — built-in classroom polls, the first live-class block of the
   learning system (see LEARNING_SYSTEM.md, phase 3 slice shipped early).

   Progressive enhancement: this file defines a custom element; with JS off,
   whatever fallback text sits inside <ai-poll> simply renders. Everything
   talks to /api/poll (see functions/api/poll.js for the security posture:
   anonymous voter tokens, tight validation, rate limits, 4h TTLs).

   Usage:
     <ai-poll host></ai-poll>                    teacher: create + live results
     <ai-poll></ai-poll>                         student: join with a code
     <ai-poll code="ABCDEF"></ai-poll>           student: join a known poll
     <ai-poll host question="Ready?" options="Yes|No|Almost"></ai-poll>
                                                 teacher: one-click preset

   All rendering uses textContent — student answers are never parsed as HTML. */
(function () {
  'use strict';
  if (!('customElements' in window) || customElements.get('ai-poll')) return;

  var API = '/api/poll';
  var POLL_EVERY_MS = 3000;
  var STUDENT_REFRESH_MS = 5000;

  function token(storageKey) {
    try {
      var t = localStorage.getItem(storageKey);
      if (t && /^[a-z0-9]{16,40}$/.test(t)) return t;
      var buf = new Uint8Array(16);
      crypto.getRandomValues(buf);
      t = Array.prototype.map.call(buf, function (b) {
        return (b % 36).toString(36);
      }).join('');
      localStorage.setItem(storageKey, t);
      return t;
    } catch (e) {
      return 'anon' + Math.floor(Math.random() * 1e12).toString(36);
    }
  }

  var CSS =
    ':host { display: block; font-family: system-ui, sans-serif; }' +
    '.box { border: 1px solid rgba(127,127,127,.35); border-radius: 12px;' +
    '  padding: 1rem 1.1rem; background: var(--card, transparent); color: inherit; }' +
    '.title { font-weight: 700; margin: 0 0 .6rem; font-size: 1.02em; }' +
    '.code { font-family: ui-monospace, monospace; font-size: 1.7em; letter-spacing: .18em;' +
    '  color: var(--accent, #7d2335); font-weight: 700; }' +
    '.hint { font-size: .85em; opacity: .75; margin: .35rem 0 .8rem; }' +
    'button { font: inherit; padding: .5rem .9rem; border-radius: 999px; cursor: pointer;' +
    '  border: 1px solid var(--accent, #7d2335); background: transparent; color: inherit; }' +
    'button.primary { background: var(--accent, #7d2335); color: #fff; border-color: transparent; }' +
    'button:disabled { opacity: .5; cursor: default; }' +
    '.opts { display: flex; flex-direction: column; gap: .5rem; margin: .6rem 0; }' +
    'input, textarea { font: inherit; padding: .5rem .65rem; border-radius: 8px;' +
    '  border: 1px solid rgba(127,127,127,.45); background: transparent; color: inherit; width: 100%;' +
    '  box-sizing: border-box; }' +
    '.row { display: flex; gap: .5rem; align-items: center; margin: .4rem 0; }' +
    '.bar-row { display: grid; grid-template-columns: minmax(4rem, 12rem) 1fr 2.5rem;' +
    '  gap: .6rem; align-items: center; margin: .45rem 0; font-size: .95em; }' +
    '.bar { height: 1.05rem; border-radius: 999px; background: rgba(127,127,127,.18); overflow: hidden; }' +
    '.bar > i { display: block; height: 100%; border-radius: inherit;' +
    '  background: var(--signal, #e0912c); transition: width .4s ease; min-width: 2px; }' +
    '@media (prefers-reduced-motion: reduce) { .bar > i { transition: none; } }' +
    '.answers { margin: .5rem 0 0; padding: 0; list-style: none; }' +
    '.answers li { padding: .3rem .5rem; border-left: 3px solid var(--signal, #e0912c);' +
    '  margin: .3rem 0; background: rgba(127,127,127,.08); border-radius: 0 8px 8px 0; }' +
    '.err { color: #c0392b; font-size: .9em; margin-top: .5rem; }' +
    '.total { font-size: .85em; opacity: .75; margin-top: .5rem; }';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function api(path, opts) {
    return fetch(path, opts).then(function (res) {
      return res.json().then(function (data) {
        if (!res.ok) {
          var e = new Error(data.error || ('HTTP ' + res.status));
          e.code = data.code;
          throw e;
        }
        return data;
      });
    });
  }

  var client = token('lessons_client_id');
  var voter = token('lessons_voter_id');

  var AiPoll = function () {
    return Reflect.construct(HTMLElement, [], AiPoll);
  };
  AiPoll.prototype = Object.create(HTMLElement.prototype);
  AiPoll.prototype.constructor = AiPoll;

  AiPoll.prototype.connectedCallback = function () {
    if (this._init) return;
    this._init = true;
    this._root = this.attachShadow({ mode: 'open' });
    var style = document.createElement('style');
    style.textContent = CSS;
    this._root.appendChild(style);
    this._box = el('div', 'box');
    this._root.appendChild(this._box);
    this._timer = null;

    if (this.hasAttribute('host')) this.renderCreate();
    else if (this.getAttribute('code')) this.renderJoin(this.getAttribute('code'));
    else this.renderJoin('');
  };

  AiPoll.prototype.disconnectedCallback = function () {
    if (this._timer) clearInterval(this._timer);
  };

  AiPoll.prototype.clear = function () {
    if (this._timer) { clearInterval(this._timer); this._timer = null; }
    while (this._box.firstChild) this._box.removeChild(this._box.firstChild);
  };

  AiPoll.prototype.showError = function (msg) {
    var old = this._box.querySelector('.err');
    if (old) old.remove();
    this._box.appendChild(el('p', 'err', msg));
  };

  /* ---------- teacher: create ---------- */

  AiPoll.prototype.renderCreate = function () {
    var self = this;
    this.clear();
    this._box.appendChild(el('p', 'title', 'Class poll'));

    var q = el('input');
    q.placeholder = 'Question (e.g. How confident do you feel about spreadsheets?)';
    q.value = this.getAttribute('question') || '';
    var o = el('textarea');
    o.rows = 3;
    o.placeholder = 'Options, one per line. Leave empty for open text answers.';
    var preset = this.getAttribute('options');
    if (preset) o.value = preset.split('|').join('\n');

    var go = el('button', 'primary', 'Start poll');
    go.addEventListener('click', function () {
      var options = o.value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
      go.disabled = true;
      api(API + '?client=' + client, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create',
          question: q.value,
          options: options.length ? options : null
        })
      }).then(function (data) {
        self.renderHostResults(data.code);
      }).catch(function (e) {
        go.disabled = false;
        self.showError(e.message);
      });
    });

    var wrap = el('div', 'opts');
    wrap.appendChild(q);
    wrap.appendChild(o);
    wrap.appendChild(go);
    this._box.appendChild(wrap);
  };

  AiPoll.prototype.renderHostResults = function (code) {
    var self = this;
    this.clear();
    this._box.appendChild(el('p', 'title', 'Students join with code'));
    this._box.appendChild(el('div', 'code', code));
    this._box.appendChild(el('p', 'hint',
      'Ask the room to open this page and type the code into the poll box. Results update live.'));
    var results = el('div');
    this._box.appendChild(results);
    var refresh = function () { self.fetchResults(code, results); };
    refresh();
    this._timer = setInterval(function () {
      if (document.hidden) return;
      refresh();
    }, POLL_EVERY_MS);
  };

  /* ---------- student: join + vote ---------- */

  AiPoll.prototype.renderJoin = function (prefill) {
    var self = this;
    this.clear();
    this._box.appendChild(el('p', 'title', 'Join the class poll'));
    var row = el('div', 'row');
    var input = el('input');
    input.placeholder = 'Poll code';
    input.maxLength = 6;
    input.value = (prefill || '').toUpperCase();
    input.style.textTransform = 'uppercase';
    var go = el('button', 'primary', 'Join');
    row.appendChild(input);
    row.appendChild(go);
    this._box.appendChild(row);

    var join = function () {
      var code = input.value.trim().toUpperCase();
      if (code.length !== 6) { self.showError('Codes are 6 characters.'); return; }
      go.disabled = true;
      api(API + '?code=' + encodeURIComponent(code) + '&client=' + client)
        .then(function (data) { self.renderVote(code, data); })
        .catch(function (e) { go.disabled = false; self.showError(e.message); });
    };
    go.addEventListener('click', join);
    input.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') join(); });
    if (prefill) join();
  };

  AiPoll.prototype.renderVote = function (code, data) {
    var self = this;
    this.clear();
    this._box.appendChild(el('p', 'title', data.question));

    var submit = function (payload) {
      api(API + '?client=' + client, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.assign({ action: 'vote', code: code, voter: voter }, payload))
      }).then(function () {
        self.renderStudentResults(code);
      }).catch(function (e) { self.showError(e.message); });
    };

    if (data.options) {
      var opts = el('div', 'opts');
      data.options.forEach(function (opt, i) {
        var b = el('button', null, opt);
        b.addEventListener('click', function () { submit({ choice: i }); });
        opts.appendChild(b);
      });
      this._box.appendChild(opts);
    } else {
      var t = el('input');
      t.placeholder = 'Your answer (short)';
      t.maxLength = 100;
      var b = el('button', 'primary', 'Send');
      b.addEventListener('click', function () { submit({ text: t.value }); });
      t.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') submit({ text: t.value }); });
      var wrap = el('div', 'opts');
      wrap.appendChild(t);
      wrap.appendChild(b);
      this._box.appendChild(wrap);
    }
    this._box.appendChild(el('p', 'hint', 'Anonymous. You can change your answer by voting again.'));
  };

  AiPoll.prototype.renderStudentResults = function (code) {
    var self = this;
    this.clear();
    this._box.appendChild(el('p', 'title', 'Answer recorded'));
    var results = el('div');
    this._box.appendChild(results);
    var back = el('button', null, 'Change my answer');
    back.addEventListener('click', function () {
      api(API + '?code=' + code + '&client=' + client)
        .then(function (data) { self.renderVote(code, data); })
        .catch(function (e) { self.showError(e.message); });
    });
    this._box.appendChild(back);
    var ticks = 0;
    var refresh = function () { self.fetchResults(code, results); };
    refresh();
    this._timer = setInterval(function () {
      if (document.hidden) return;
      if (++ticks > 60) { clearInterval(self._timer); self._timer = null; return; }
      refresh();
    }, STUDENT_REFRESH_MS);
  };

  /* ---------- shared results view ---------- */

  AiPoll.prototype.fetchResults = function (code, container) {
    api(API + '?code=' + encodeURIComponent(code) + '&client=' + client).then(function (data) {
      while (container.firstChild) container.removeChild(container.firstChild);
      if (data.counts) {
        var max = Math.max.apply(null, data.counts.concat(1));
        data.options.forEach(function (opt, i) {
          var row = el('div', 'bar-row');
          row.appendChild(el('span', null, opt));
          var bar = el('div', 'bar');
          var fill = document.createElement('i');
          fill.style.width = Math.round((data.counts[i] / max) * 100) + '%';
          bar.appendChild(fill);
          row.appendChild(bar);
          row.appendChild(el('span', null, String(data.counts[i])));
          container.appendChild(row);
        });
      } else if (data.answers) {
        var list = el('ul', 'answers');
        data.answers.slice(-40).reverse().forEach(function (a) {
          list.appendChild(el('li', null, a));
        });
        container.appendChild(list);
      }
      container.appendChild(el('p', 'total',
        data.total + (data.total === 1 ? ' response' : ' responses') +
        (data.truncated ? ' (showing the first 500)' : '')));
    }).catch(function () { /* transient read errors stay quiet */ });
  };

  customElements.define('ai-poll', AiPoll);
})();
