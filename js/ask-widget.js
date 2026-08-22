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
  var meter = root.querySelector('.ask-meter');
  var meterSegments = root.querySelectorAll('.ask-meter i');
  var sparks = root.querySelectorAll('.spark');
  var MAX_TURNS = 6;
  var LIMIT = meterSegments.length || 6;

  // A stable per-browser id so everyone in a room behind one NAT gets their
  // own allowance instead of sharing the building's. Not a security token —
  // it only decides which rate-limit bucket you land in.
  var clientId = (function () {
    try {
      var id = localStorage.getItem('askDemoClientId');
      if (!id || !/^[a-z0-9]{8,40}$/i.test(id)) {
        id = (Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)).slice(0, 24);
        localStorage.setItem('askDemoClientId', id);
      }
      return id;
    } catch (e) {
      // Private mode / storage blocked — fall back to per-IP limiting.
      return null;
    }
  })();

  // The meter mirrors the server's fixed 60s window: segments drain as you
  // ask and the whole allowance returns at the window boundary. The server
  // sends X-RateLimit-Reset so we can recharge on time without polling.
  var meterLit = LIMIT;
  var rechargeTimer = null;

  function paintMeter(remaining) {
    remaining = Math.max(0, Math.min(LIMIT, remaining));
    var gained = remaining > meterLit;
    var used = LIMIT - remaining;

    meterSegments.forEach(function (seg, i) {
      var wasUsed = seg.classList.contains('used');
      var nowUsed = i < used;
      if (wasUsed === nowUsed) return;

      seg.classList.toggle('used', nowUsed);
      // Glow on change: spent segments flash out, regained ones light up in
      // a left-to-right sweep so a recharge reads as a refill, not a jump.
      var cls = nowUsed ? 'pulse-off' : 'pulse-on';
      var delay = gained ? i * 70 : 0;
      setTimeout(function () {
        seg.classList.remove('pulse-on', 'pulse-off');
        void seg.offsetWidth; // restart the animation
        seg.classList.add(cls);
        setTimeout(function () { seg.classList.remove(cls); }, 700);
      }, delay);
    });

    meterLit = remaining;
    if (meter) {
      meter.setAttribute('title', remaining + ' of ' + LIMIT + ' questions left this minute');
    }
  }

  function setMeter(remaining, resetIn) {
    if (typeof remaining !== 'number' || isNaN(remaining)) return;
    paintMeter(remaining);

    // Schedule the refill for when this window actually rolls over, and
    // breathe the spent segments meanwhile so it reads as "coming back".
    if (rechargeTimer) clearTimeout(rechargeTimer);
    if (typeof resetIn === 'number' && !isNaN(resetIn) && remaining < LIMIT) {
      if (meter) meter.classList.add('recharging');
      rechargeTimer = setTimeout(function () {
        rechargeTimer = null;
        if (meter) meter.classList.remove('recharging');
        paintMeter(LIMIT);
      }, Math.max(0, resetIn) * 1000 + 250);
    } else if (meter) {
      meter.classList.remove('recharging');
    }
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
      body: JSON.stringify(
        clientId ? { message: question, clientId: clientId } : { message: question }
      )
    })
      .then(function (res) {
        var remaining = parseInt(res.headers.get('X-RateLimit-Remaining'), 10);
        var resetIn = parseInt(res.headers.get('X-RateLimit-Reset'), 10);
        setMeter(remaining, resetIn);
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
        // Show the real upstream model name in the tag when the API provides
        // it (provider prefixes like "ollama/" stripped for display).
        var nameEl = document.getElementById('ask-model-name');
        if (nameEl && data.model_name) {
          nameEl.textContent = String(data.model_name).split('/').pop();
        }
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
        // The window has rolled over — show the allowance coming back.
        paintMeter(LIMIT);
        return;
      }
      status.textContent = 'Out of questions — recharging in ' + seconds + 's.';
      seconds--;
      setTimeout(tick, 1000);
    };
    tick();
  }
})();
