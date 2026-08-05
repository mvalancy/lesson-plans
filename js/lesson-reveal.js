/* Scroll-driven lesson page: reveals sections as they enter the viewport and
   tracks reading progress. Decorative — all content is visible without JS. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');

  document.documentElement.classList.add('js');

  if (reduced || !('IntersectionObserver' in window)) {
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
  }

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

  var slides = document.querySelectorAll('.slide');

  /* "You are here": light up the timing chip of the section mid-viewport. */
  if (slides.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var chip = e.target.querySelector('.chip');
        if (chip) chip.classList.toggle('active', e.isIntersecting);
      });
    }, { rootMargin: '-35% 0px -45% 0px' });
    slides.forEach(function (s) { spy.observe(s); });
  }

  /* 15-minute demo timer: click to start/pause, double-click to reset.
     Counts up in overtime (+m:ss) so rehearsals show the real damage. */
  if (slides.length) {
    var DURATION = 15 * 60;
    var remaining = DURATION, running = false, lastTs = null;

    var timer = document.createElement('button');
    timer.type = 'button';
    timer.className = 'demo-timer';
    timer.title = 'Click to start or pause · double-click to reset';
    timer.setAttribute('aria-label', 'Lesson countdown timer');
    document.body.appendChild(timer);

    function fmt(s) {
      var over = s < 0;
      s = Math.abs(Math.floor(s));
      var m = Math.floor(s / 60), sec = s % 60;
      return (over ? '+' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
    }

    function render() {
      timer.innerHTML = '<span class="dot" aria-hidden="true"></span>' + fmt(remaining);
      timer.classList.toggle('running', running);
      timer.classList.toggle('warn', remaining <= 300 && remaining > 120);
      timer.classList.toggle('crit', remaining <= 120);
    }

    function tick(ts) {
      if (!running) return;
      if (lastTs !== null) remaining -= (ts - lastTs) / 1000;
      lastTs = ts;
      render();
      requestAnimationFrame(tick);
    }

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
