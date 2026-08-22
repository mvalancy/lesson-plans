/* Decorative node-graph animation for hero sections.
   Pure canvas, no dependencies. Purely visual — the page works without it.

   Colours are read from the stylesheet's design tokens (--accent-rgb,
   --signal-rgb, --ink-soft-rgb) on the canvas element itself, so a theme flip
   in CSS flips the animation too and nothing has to be duplicated here. */
(function () {
  'use strict';

  var canvases = document.querySelectorAll('.hero-canvas');
  if (!canvases.length) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Read a "r, g, b" custom property off an element; fall back if it's absent
     (an old cached stylesheet, say) so the animation never disappears. */
  function tokenRGB(el, name, fallback) {
    var raw = getComputedStyle(el).getPropertyValue(name);
    var parts = (raw || '').split(',');
    if (parts.length !== 3) return fallback;
    var out = [];
    for (var i = 0; i < 3; i++) {
      var n = parseInt(parts[i], 10);
      if (isNaN(n)) return fallback;
      out.push(n);
    }
    return out;
  }

  function rgba(c, a) { return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')'; }
  function rand(a, b) { return a + Math.random() * (b - a); }

  function build(canvas) {
    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var dark = !!(canvas.closest && canvas.closest('.deck'));
    var ACCENT = tokenRGB(canvas, '--accent-rgb', dark ? [212, 80, 107] : [125, 35, 53]);
    var SIGNAL = tokenRGB(canvas, '--signal-rgb', dark ? [242, 177, 63] : [176, 106, 16]);
    var INK = tokenRGB(canvas, '--ink-soft-rgb', dark ? [166, 173, 184] : [86, 91, 102]);
    var GAIN = dark ? 1.7 : 1;    // stronger alphas on dark backgrounds
    var LINK_DIST = 132;          // px — edge appears under this distance

    var W = 0, H = 0, nodes = [], pulses = [];

    function seed() {
      var target = Math.max(24, Math.min(80, Math.round((W * H) / 15000)));
      nodes = [];
      for (var i = 0; i < target; i++) {
        var roll = Math.random();
        nodes.push({
          x: rand(0, W), y: rand(0, H),
          vx: rand(-8, 8), vy: rand(-8, 8),
          r: rand(1.2, 2.6),
          // a few accent nodes, and a rarer handful in the signal colour —
          // the same two-tone constellation the static SVGs use
          kind: roll < 0.07 ? 2 : (roll < 0.26 ? 1 : 0),
          tw: rand(0, Math.PI * 2)        // twinkle phase
        });
      }
      pulses = [];
    }

    function resize() {
      var r = canvas.getBoundingClientRect();
      var d = window.devicePixelRatio || 1;
      var reseed = Math.abs(r.width - W) > 40 || Math.abs(r.height - H) > 40;
      W = r.width; H = r.height;
      canvas.width = W * d; canvas.height = H * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      if (reseed || nodes.length === 0) seed();
    }

    function spawnPulse() {
      // pick a random edge currently in range and send a signal along it
      for (var tries = 0; tries < 12; tries++) {
        var a = nodes[(Math.random() * nodes.length) | 0];
        var b = nodes[(Math.random() * nodes.length) | 0];
        if (a === b) continue;
        var dx = b.x - a.x, dy = b.y - a.y;
        if (dx * dx + dy * dy < LINK_DIST * LINK_DIST) {
          pulses.push({
            a: a, b: b, t: 0, speed: rand(0.6, 1.4),
            hot: a.kind === 2 || b.kind === 2
          });
          return;
        }
      }
    }

    var last = 0, pulseTimer = 0;

    function frame(ts) {
      var dt = Math.min(0.05, (ts - last) / 1000 || 0.016);
      last = ts;
      step(dt);
      draw(ts / 1000);
      requestAnimationFrame(frame);
    }

    function step(dt) {
      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        n.x += n.vx * dt; n.y += n.vy * dt;
        if (n.x < -20) n.x = W + 20; else if (n.x > W + 20) n.x = -20;
        if (n.y < -20) n.y = H + 20; else if (n.y > H + 20) n.y = -20;
      }
      pulseTimer -= dt;
      if (pulseTimer <= 0) { spawnPulse(); pulseTimer = rand(0.35, 0.95); }
      for (var p = pulses.length - 1; p >= 0; p--) {
        pulses[p].t += dt * pulses[p].speed;
        if (pulses[p].t >= 1) pulses.splice(p, 1);
      }
    }

    function draw(t) {
      ctx.clearRect(0, 0, W, H);

      // edges
      for (var i = 0; i < nodes.length; i++) {
        for (var j = i + 1; j < nodes.length; j++) {
          var a = nodes[i], b = nodes[j];
          var dx = b.x - a.x, dy = b.y - a.y;
          var d2 = dx * dx + dy * dy;
          if (d2 > LINK_DIST * LINK_DIST) continue;
          var alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.17 * GAIN;
          var col = INK;
          if (a.kind === 2 || b.kind === 2) col = SIGNAL;
          else if (a.kind === 1 || b.kind === 1) col = ACCENT;
          ctx.strokeStyle = rgba(col, alpha);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // signal pulses traveling along edges
      for (var p = 0; p < pulses.length; p++) {
        var pl = pulses[p];
        var col2 = pl.hot ? SIGNAL : ACCENT;
        var px = pl.a.x + (pl.b.x - pl.a.x) * pl.t;
        var py = pl.a.y + (pl.b.y - pl.a.y) * pl.t;
        var fade = Math.sin(Math.PI * pl.t); // ease in/out of existence
        ctx.fillStyle = rgba(col2, Math.min(1, 0.6 * GAIN) * fade);
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = rgba(col2, 0.13 * GAIN * fade);
        ctx.beginPath();
        ctx.arc(px, py, 6.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // nodes
      for (var k = 0; k < nodes.length; k++) {
        var n = nodes[k];
        var tw = 0.75 + 0.25 * Math.sin(t * 1.3 + n.tw);
        if (n.kind) {
          var col3 = n.kind === 2 ? SIGNAL : ACCENT;
          ctx.fillStyle = rgba(col3, Math.min(1, 0.5 * GAIN) * tw);
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 0.6, 0, Math.PI * 2); ctx.fill();
          ctx.strokeStyle = rgba(col3, 0.2 * GAIN * tw);
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 3.4, 0, Math.PI * 2); ctx.stroke();
        } else {
          ctx.fillStyle = rgba(INK, Math.min(1, 0.35 * GAIN) * tw);
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
        }
      }
    }

    window.addEventListener('resize', resize);
    resize();

    if (reduced) {
      // static rendering: one composed frame, no motion
      for (var s = 0; s < 40; s++) step(0.05);
      draw(0);
    } else {
      requestAnimationFrame(frame);
    }
  }

  for (var c = 0; c < canvases.length; c++) build(canvases[c]);
})();
