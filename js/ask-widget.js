/* "Try it yourself" widget: talks to /api/ask, which proxies a real small
   (1.5B) model with a per-visitor rate limit. Progressive enhancement —
   the surrounding page has no dependency on this working. */
(function () {
  'use strict';

  var root = document.querySelector('.ask-widget');
  if (!root) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var form = root.querySelector('.ask-form');
  var input = root.querySelector('input');
  var button = form.querySelector('button');
  var log = root.querySelector('.ask-log');
  var empty = root.querySelector('.ask-empty');
  var status = root.querySelector('.ask-status');
  var meterSegments = root.querySelectorAll('.ask-meter i');
  var sparks = root.querySelectorAll('.spark');
  var MAX_TURNS = 6;
  var LIMIT = meterSegments.length || 6;

  function setMeter(remaining) {
    if (typeof remaining !== 'number' || isNaN(remaining)) return;
    var used = LIMIT - remaining;
    meterSegments.forEach(function (seg, i) {
      seg.classList.toggle('used', i < used);
    });
  }

  function addBubble(cls, text) {
    var b = document.createElement('div');
    b.className = 'ask-bubble ' + cls;
    b.textContent = text;
    return b;
  }

  function typewrite(el, text, done) {
    if (reduced || text.length > 400) {
      el.textContent = text;
      if (done) done();
      return;
    }
    var i = 0;
    var cursor = document.createElement('span');
    cursor.className = 'cursor';
    el.textContent = '';
    el.appendChild(cursor);
    var step = function () {
      if (i < text.length) {
        cursor.insertAdjacentText('beforebegin', text.charAt(i));
        i++;
        setTimeout(step, 12 + Math.random() * 16);
      } else {
        cursor.remove();
        if (done) done();
      }
    };
    step();
  }

  function ask(question) {
    if (!question) return;
    if (empty) { empty.remove(); empty = null; }

    input.value = '';
    setBusy(true);

    var turn = document.createElement('div');
    turn.className = 'ask-turn';
    turn.appendChild(addBubble('q', question));
    var thinking = document.createElement('div');
    thinking.className = 'ask-thinking';
    thinking.innerHTML = '<i></i><i></i><i></i>';
    turn.appendChild(thinking);
    log.appendChild(turn);
    while (log.children.length > MAX_TURNS) log.removeChild(log.firstChild);
    log.scrollTop = log.scrollHeight;

    fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: question })
    })
      .then(function (res) {
        var remaining = parseInt(res.headers.get('X-RateLimit-Remaining'), 10);
        setMeter(remaining);
        // Not every failure is JSON: an edge error or a gateway HTML page can
        // land here, and blindly calling res.json() turns that into a useless
        // "Unexpected token '<'" for the visitor. Read text, then try to parse.
        return res.text().then(function (raw) {
          var data = null;
          try { data = JSON.parse(raw); } catch (e) { /* not JSON */ }

          if (!res.ok || !data) {
            var err = new Error(
              (data && data.error) || describeStatus(res.status)
            );
            err.status = res.status;
            err.code = (data && data.code) || 'http_' + res.status;
            err.retryAfter = res.headers.get('Retry-After');
            throw err;
          }
          return data;
        });
      })
      .then(function (data) {
        thinking.remove();
        var a = addBubble('a', '');
        turn.appendChild(a);
        typewrite(a, data.reply, function () {
          log.scrollTop = log.scrollHeight;
        });
      })
      .catch(function (err) {
        thinking.remove();
        var msg = err.message || 'Something went wrong.';
        // No network/response at all (offline, DNS, connection dropped).
        if (typeof err.status === 'undefined') {
          msg = 'Could not reach the demo — check your connection and try again.';
          err.code = 'network_error';
        }
        var bubble = addBubble('a err', msg);
        if (err.code) {
          var tag = document.createElement('span');
          tag.className = 'err-code';
          tag.textContent = err.code;
          bubble.appendChild(tag);
        }
        turn.appendChild(bubble);
        console.warn('[ask-widget]', err.code, err.status || '', msg);
        if (err.status === 429) {
          var wait = parseInt(err.retryAfter, 10) || 20;
          startCooldown(wait);
        }
      })
      .finally(function () {
        log.scrollTop = log.scrollHeight;
        setBusy(false);
      });
  }

  // Fallback wording when the server couldn't give us a JSON error of its own.
  function describeStatus(status) {
    if (status === 429) return 'Too many questions at once — give it a few seconds.';
    if (status === 502 || status === 503) return 'The demo model is unavailable right now. Try again shortly.';
    if (status === 504) return 'The model took too long to answer. Try a shorter question.';
    if (status >= 500) return 'The demo hit a server error (' + status + '). Try again shortly.';
    if (status === 413) return 'That question is too long.';
    if (status >= 400) return 'That request was rejected (' + status + ').';
    return 'Unexpected response from the demo (' + status + ').';
  }

  function setBusy(busy) {
    input.disabled = busy;
    button.disabled = busy;
    sparks.forEach(function (s) { s.disabled = busy; });
    if (!busy) input.focus();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    ask(input.value.trim());
  });

  sparks.forEach(function (s) {
    s.addEventListener('click', function () {
      if (s.disabled) return;
      ask(s.textContent.trim());
    });
  });

  function startCooldown(seconds) {
    setBusy(true);
    var tick = function () {
      if (seconds <= 0) {
        status.textContent = '';
        setBusy(false);
        return;
      }
      status.textContent = 'Rate limit hit — try again in ' + seconds + 's.';
      seconds--;
      setTimeout(tick, 1000);
    };
    tick();
  }
})();
