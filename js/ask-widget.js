/* "Try it yourself" widget: talks to /api/ask, which proxies a real small
   (1.5B) model with a per-visitor rate limit. Progressive enhancement —
   the surrounding page has no dependency on this working. */
(function () {
  'use strict';

  var root = document.querySelector('.ask-widget');
  if (!root) return;

  var form = root.querySelector('.ask-form');
  var input = root.querySelector('input');
  var button = form.querySelector('button');
  var log = root.querySelector('.ask-log');
  var status = root.querySelector('.ask-status');
  var MAX_TURNS = 6;

  function addTurn(question) {
    var turn = document.createElement('div');
    turn.className = 'ask-turn';
    turn.innerHTML =
      '<div class="q"></div><div class="a">thinking…</div>';
    turn.querySelector('.q').textContent = question;
    log.appendChild(turn);
    while (log.children.length > MAX_TURNS) log.removeChild(log.firstChild);
    log.scrollTop = log.scrollHeight;
    return turn.querySelector('.a');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var q = input.value.trim();
    if (!q) return;

    input.value = '';
    input.disabled = true;
    button.disabled = true;
    status.textContent = '';

    var answerEl = addTurn(q);

    fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: q })
    })
      .then(function (res) {
        return res.json().then(function (data) {
          if (!res.ok) {
            var err = new Error(data.error || 'Something went wrong.');
            err.status = res.status;
            err.retryAfter = res.headers.get('Retry-After');
            throw err;
          }
          return data;
        });
      })
      .then(function (data) {
        answerEl.textContent = data.reply;
        answerEl.classList.remove('err');
      })
      .catch(function (err) {
        answerEl.textContent = err.message;
        answerEl.classList.add('err');
        if (err.status === 429) {
          var wait = parseInt(err.retryAfter, 10) || 20;
          startCooldown(wait);
        }
      })
      .finally(function () {
        input.disabled = false;
        button.disabled = false;
        input.focus();
      });
  });

  function startCooldown(seconds) {
    button.disabled = true;
    input.disabled = true;
    var tick = function () {
      if (seconds <= 0) {
        status.textContent = '';
        input.disabled = false;
        button.disabled = false;
        return;
      }
      status.textContent = 'Rate limit hit — try again in ' + seconds + 's.';
      seconds--;
      setTimeout(tick, 1000);
    };
    tick();
  }
})();
