/* Scroll-driven lesson page: section reveals, reading progress, slide rail,
   next-word-prediction demo, and the 15-minute presentation timer.
   All progressive enhancement — content is fully readable without JS. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));

  document.documentElement.classList.add('js');

  /* ---------- section reveal ---------- */
  /* deep links (#section) skip the animation so content is instantly there */
  if (reduced || location.hash || !('IntersectionObserver' in window)) {
    for (var i = 0; i < reveals.length; i++) reveals[i].classList.add('visible');
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
    /* anything already on screen (e.g. after a deep link) shows instantly */
    reveals.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('visible');
    });
  }

  /* ---------- reading progress bar ---------- */
  var bar = document.querySelector('.progress-bar');
  if (bar) {
    var onScroll = function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var p = max > 0 ? (window.scrollY / max) : 0;
      bar.style.width = (p * 100).toFixed(2) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- slide rail + scrollspy chips ---------- */
  var rail = null, railDots = [];
  if (slides.length > 1) {
    rail = document.createElement('nav');
    rail.className = 'slide-rail';
    rail.setAttribute('aria-label', 'Lesson sections');
    slides.forEach(function (s, idx) {
      var chip = s.querySelector('.chip');
      var h2 = s.querySelector('h2');
      var label = chip ? chip.textContent : (h2 ? h2.textContent : 'Section ' + (idx + 1));
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.title = label;
      dot.setAttribute('aria-label', label);
      dot.addEventListener('click', function () {
        s.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
      });
      rail.appendChild(dot);
      railDots.push(dot);
    });
    document.body.appendChild(rail);
  }

  if (slides.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var idx = slides.indexOf(e.target);
        var chip = e.target.querySelector('.chip');
        if (chip) chip.classList.toggle('active', e.isIntersecting);
        if (railDots[idx]) railDots[idx].classList.toggle('active', e.isIntersecting);
      });
    }, { rootMargin: '-35% 0px -45% 0px' });
    slides.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- side index scrollspy (.toc) ---------- */
  /* Lights the section you are reading. Without JS the same markup is a
     plain list of anchor links, which is why nothing here builds the list. */
  var toc = document.querySelector('.toc');
  if (toc) {
    var tocLinks = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
    var tocSections = tocLinks.map(function (a) {
      return document.getElementById(a.getAttribute('href').slice(1));
    });

    var setActive = function (idx) {
      tocLinks.forEach(function (a, i) {
        var on = i === idx;
        a.classList.toggle('active', on);
        if (on) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
      /* when the index is a horizontal chip row, keep the lit chip in view */
      var link = tocLinks[idx];
      if (link && toc.scrollWidth > toc.clientWidth + 4) {
        toc.scrollLeft = link.offsetLeft - (toc.clientWidth - link.offsetWidth) / 2;
      }
    };

    if ('IntersectionObserver' in window) {
      var inBand = [];
      var tocSpy = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          var idx = tocSections.indexOf(e.target);
          if (idx > -1) inBand[idx] = e.isIntersecting;
        });
        /* several sections can straddle the band; the topmost one wins */
        var first = inBand.indexOf(true);
        if (first > -1) setActive(first);
      }, { rootMargin: '-15% 0px -55% 0px' });
      tocSections.forEach(function (s) { if (s) tocSpy.observe(s); });
      /* at the top of the page nothing is in the band yet */
      setTimeout(function () {
        if (!toc.querySelector('a.active')) setActive(0);
      }, 0);
    }
  }

  /* ---------- games shelf filter ---------- */
  /* Enhancement only: the chips are hidden by CSS until html.js is set. */
  var gameFilter = document.querySelector('.game-filter');
  if (gameFilter) {
    var chips = Array.prototype.slice.call(gameFilter.querySelectorAll('[data-filter]'));
    var groups = Array.prototype.slice.call(document.querySelectorAll('.game-group'));
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var want = chip.getAttribute('data-filter');
        chips.forEach(function (c) {
          c.setAttribute('aria-pressed', c === chip ? 'true' : 'false');
        });
        groups.forEach(function (g) {
          g.hidden = !(want === 'all' || g.getAttribute('data-module') === want);
        });
      });
    });
  }

  /* ---------- next-word prediction demo ---------- */
  var demo = document.getElementById('token-demo');
  if (demo) {
    var tdText = demo.querySelector('.td-text');
    var tdCands = demo.querySelector('.td-candidates');
    var tdVerdict = demo.querySelector('.td-verdict');
    var SEQS = [
      {
        prefix: 'The first person to walk on the Moon was ',
        cands: [['Neil Armstrong', '96%'], ['Buzz Aldrin', '2%'], ['a Soviet', '1%'], ['…', '1%']],
        pick: 'Neil Armstrong.',
        ok: true,
        verdict: '✓ High probability — and true.'
      },
      {
        prefix: 'The 2019 study proving AI improves grades is by ',
        cands: [['Smith et al.', '41%'], ['Johnson & Lee', '33%'], ['Chen et al.', '19%'], ['…', '7%']],
        pick: 'Smith et al.',
        ok: false,
        verdict: '⚠ High probability — and completely made up.'
      }
    ];

    var renderCands = function (seq, winner) {
      tdCands.innerHTML = '';
      seq.cands.forEach(function (c, i) {
        var el = document.createElement('span');
        el.className = 'td-cand';
        el.textContent = c[0] + ' ' + c[1];
        if (winner && i === 0) el.classList.add('win');
        tdCands.appendChild(el);
        if (reduced) { el.classList.add('show'); }
        else { setTimeout(function () { el.classList.add('show'); }, 120 + i * 160); }
      });
    };

    var showVerdict = function (seq) {
      tdVerdict.textContent = seq.verdict;
      tdVerdict.className = 'td-verdict show ' + (seq.ok ? 'ok' : 'bad');
    };

    if (reduced) {
      var s0 = SEQS[1];
      tdText.innerHTML = s0.prefix + '<span class="td-pick">' + s0.pick + '</span>';
      renderCands(s0, true);
      showVerdict(s0);
    } else {
      var si = 0;
      var typeSeq = function () {
        var seq = SEQS[si % SEQS.length];
        si++;
        tdText.textContent = '';
        tdVerdict.className = 'td-verdict';
        tdCands.innerHTML = '';
        var ci = 0;
        var typeChar = function () {
          if (ci < seq.prefix.length) {
            tdText.textContent += seq.prefix.charAt(ci++);
            setTimeout(typeChar, 26 + Math.random() * 24);
          } else {
            renderCands(seq, false);
            setTimeout(function () {
              var first = tdCands.querySelector('.td-cand');
              if (first) first.classList.add('win');
              setTimeout(function () {
                tdText.innerHTML = seq.prefix + '<span class="td-pick">' + seq.pick + '</span>';
                showVerdict(seq);
                setTimeout(typeSeq, 3400);
              }, 700);
            }, 1100);
          }
        };
        typeChar();
      };
      typeSeq();
    }
  }

  /* ---------- 15-minute demo timer ---------- */
  if (slides.length) {
    var DURATION = 15 * 60;
    var remaining = DURATION, running = false, lastTs = null;

    var timer = document.createElement('button');
    timer.type = 'button';
    timer.className = 'demo-timer';
    timer.title = 'Click to start or pause · double-click to reset';
    timer.setAttribute('aria-label', 'Lesson countdown timer');
    document.body.appendChild(timer);

    var fmt = function (s) {
      var over = s < 0;
      s = Math.abs(Math.floor(s));
      var m = Math.floor(s / 60), sec = s % 60;
      return (over ? '+' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
    };

    var render = function () {
      timer.innerHTML = '<span class="dot" aria-hidden="true"></span>' + fmt(remaining);
      timer.classList.toggle('running', running);
      timer.classList.toggle('warn', remaining <= 300 && remaining > 120);
      timer.classList.toggle('crit', remaining <= 120);
    };

    var tick = function (ts) {
      if (!running) return;
      if (lastTs !== null) remaining -= (ts - lastTs) / 1000;
      lastTs = ts;
      render();
      requestAnimationFrame(tick);
    };

    timer.addEventListener('click', function () {
      running = !running;
      lastTs = null;
      if (running) requestAnimationFrame(tick);
      render();
    });
    timer.addEventListener('dblclick', function () {
      running = false;
      remaining = DURATION;
      render();
    });
    render();
  }
})();
