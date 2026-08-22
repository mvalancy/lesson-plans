/* Decorative node-graph animation for hero sections — the site's visual
   identity, and the only graph left on the page, so it has to carry depth and
   life on its own.

   Shape of the thing:
     - two node populations at different depths (far: small, dim, slow;
       near: larger, brighter, faster) with a few pixels of parallax between
       them from pointer drift and scroll;
     - signal pulses that travel along an edge, land on a node, make it flare,
       and sometimes chain onward — a small nervous system thinking, not a
       screensaver;
     - one shared animation loop for every canvas, paused when the tab is
       hidden or the canvas is off screen.

   Colours are read from the stylesheet's design tokens (--accent-rgb,
   --signal-rgb, --ink-soft-rgb) on the canvas element itself, so a theme flip
   in CSS flips the animation too and nothing has to be duplicated here.

   Purely visual — the page works without it. It allocates its buffers once and
   nothing per frame, and batches drawing into a couple of dozen canvas calls,
   so it stays cheap on a mid-range phone. */
(function () {
  'use strict';

  var canvases = document.querySelectorAll('.hero-canvas');
  if (!canvases.length) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- shared helpers ---------- */

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
  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

  /* Drawing is batched into buckets keyed by colour and a quantised alpha, so
     a frame costs a couple of dozen canvas calls rather than one per edge and
     one per node. Six alpha steps is far finer than the eye can resolve at the
     alphas this thing draws at (0.02 – 0.6). */
  var COLOURS = 3;              // 0 ink · 1 accent · 2 signal
  var STEPS = 16;               // alpha quantisation steps — fine enough that
                                // a node's slow breath never reads as stepped
  var BUCKETS = COLOURS * STEPS;
  var SEG_CAP = 128;            // segments held per bucket
  var DOT_CAP = 64;             // circles held per bucket

  var FAR = 0, NEAR = 1;

  /* ---------- global input state, read by every instance ---------- */

  var pointerTX = 0, pointerTY = 0;    // pointer as −1 … 1 of the viewport
  var scrollY = window.pageYOffset || 0;

  if (!reduced) {
    window.addEventListener('pointermove', function (e) {
      var w = window.innerWidth || 1, h = window.innerHeight || 1;
      pointerTX = clamp((e.clientX / w) * 2 - 1, -1, 1);
      pointerTY = clamp((e.clientY / h) * 2 - 1, -1, 1);
    }, { passive: true });

    window.addEventListener('scroll', function () {
      scrollY = window.pageYOffset || 0;
    }, { passive: true });
  }

  /* ---------- one simulation per canvas ---------- */

  function build(canvas) {
    var ctx = canvas.getContext('2d');
    if (!ctx) return null;

    var dark = !!(canvas.closest && canvas.closest('.deck'));

    /* Character per context. The hub and course heroes are the front door and
       can be denser and livelier; a lesson header sits directly behind a
       headline, so it runs calmer and dimmer. Readability wins every time. */
    var calm = !(canvas.closest && canvas.closest('.hero'));

    var PALETTE = [
      tokenRGB(canvas, '--ink-soft-rgb', dark ? [166, 173, 184] : [86, 91, 102]),
      tokenRGB(canvas, '--accent-rgb', dark ? [212, 80, 107] : [125, 35, 53]),
      tokenRGB(canvas, '--signal-rgb', dark ? [242, 177, 63] : [176, 106, 16])
    ];

    /* The mini-lesson header stacks two .hero-canvas elements in one section.
       Each runs its own simulation, so the budget is split between siblings —
       otherwise that one header comes out at twice everyone else's density,
       and twice the cost, behind the largest headline on the site. */
    var share = 1;
    if (canvas.parentElement) {
      var sibs = canvas.parentElement.querySelectorAll('.hero-canvas');
      if (sibs.length > 1) share = sibs.length;
    }

    var GAIN = (dark ? 1.7 : 1) * (calm ? 0.86 : 1);
    // px² per node — the dark deck carries a denser field before it reads as
    // clutter, the way a starfield does
    var DENSITY = (calm ? 7000 : 5400) * share * (dark ? 0.78 : 1);
    var MAX_NODES = Math.round((calm ? 130 : 170) / share);
    var MIN_NODES = Math.round((calm ? 26 : 40) / share);
    var PULSE_GAP_MIN = (calm ? 1.5 : 0.75) * share;   // seconds between spawns
    var PULSE_GAP_MAX = (calm ? 3.2 : 1.9) * share;
    var CHAIN_CHANCE = calm ? 0.3 : 0.5;     // a landed pulse firing onward
    var MAX_PULSES = calm ? 8 : 14;

    /* Per-layer depth cues. Everything that says "far away" is set here:
       smaller, dimmer, slower, shorter reach, less parallax. */
    var LINK = [104, 152];                   // px — edge appears under this
    var SPEED = [0.42, 1];                   // drift multiplier
    var DIM = [0.5, 1.12];                   // alpha multiplier
    var LINE_W = [0.7, 1];
    var PAR_X = [2.2, 7.5];                  // px of pointer parallax
    var PAR_SCROLL = [0.012, 0.045];         // px per px scrolled

    var EDGE_MAX_A = 0.38 * GAIN * DIM[NEAR];
    var DOT_MAX_A = 0.95 * GAIN * DIM[NEAR];

    /* Colour strings and alphas for every bucket, built once. */
    var edgeStyle = new Array(BUCKETS), dotStyle = new Array(BUCKETS);
    for (var b = 0; b < BUCKETS; b++) {
      var mid = (b % STEPS) + 0.5;
      var col = PALETTE[(b / STEPS) | 0];
      edgeStyle[b] = rgba(col, +(EDGE_MAX_A * mid / STEPS).toFixed(4));
      dotStyle[b] = rgba(col, +(DOT_MAX_A * mid / STEPS).toFixed(4));
    }

    /* Batch buffers — allocated once, refilled in place every frame. */
    var segBuf = new Float32Array(BUCKETS * SEG_CAP * 4);
    var segLen = new Uint16Array(BUCKETS);
    var dotBuf = new Float32Array(BUCKETS * DOT_CAP * 3);
    var dotLen = new Uint16Array(BUCKETS);

    /* Nodes, in typed arrays and grouped by layer: [0, farN) is the far layer,
       [farN, N) the near one, so an edge pass walks one contiguous range. */
    var N = 0, farN = 0;
    var nx, ny, nvx, nvy, nr, nph, nrate, nfire, nkind;

    /* Pulses live in a fixed pool; nothing is allocated once the page is up. */
    var pa = new Int32Array(MAX_PULSES), pb = new Int32Array(MAX_PULSES);
    var pt = new Float32Array(MAX_PULSES), pspd = new Float32Array(MAX_PULSES);
    var pcol = new Uint8Array(MAX_PULSES), pdepth = new Uint8Array(MAX_PULSES);
    var plive = new Uint8Array(MAX_PULSES);

    var W = 0, H = 0, docTop = 0;
    var parX = 0, parY = 0;               // smoothed pointer, per instance
    var pulseTimer = rand(0.2, 1.2);

    function alloc(n) {
      nx = new Float32Array(n); ny = new Float32Array(n);
      nvx = new Float32Array(n); nvy = new Float32Array(n);
      nr = new Float32Array(n); nph = new Float32Array(n);
      nrate = new Float32Array(n); nfire = new Float32Array(n);
      nkind = new Uint8Array(n);
    }

    function seed() {
      var target = Math.round((W * H) / DENSITY);
      N = clamp(target, MIN_NODES, MAX_NODES);
      farN = Math.round(N * 0.55);
      alloc(N);
      for (var i = 0; i < N; i++) {
        var far = i < farN;
        var roll = Math.random();
        nx[i] = rand(0, W);
        ny[i] = rand(0, H);
        nvx[i] = rand(-9, 9) * SPEED[far ? FAR : NEAR];
        nvy[i] = rand(-9, 9) * SPEED[far ? FAR : NEAR];
        nr[i] = far ? rand(0.9, 1.8) : rand(1.7, 3.1);
        nph[i] = rand(0, Math.PI * 2);
        nrate[i] = far ? rand(0.35, 0.8) : rand(0.8, 1.6);
        nfire[i] = 0;
        // the far layer is almost all plain ink; the near layer carries the
        // accent nodes and the rarer signal ones
        nkind[i] = far
          ? (roll < 0.12 ? 1 : 0)
          : (roll < 0.08 ? 2 : (roll < 0.38 ? 1 : 0));
      }
      for (var p = 0; p < MAX_PULSES; p++) plive[p] = 0;
    }

    function resize() {
      var r = canvas.getBoundingClientRect();
      if (!r.width || !r.height) return;
      var reseed = Math.abs(r.width - W) > 40 || Math.abs(r.height - H) > 40;
      W = r.width; H = r.height;
      docTop = r.top + (window.pageYOffset || 0);

      /* Cap the work: never more than 2× and never more than ~2.2M backing
         pixels, which is where a mid-range phone starts to feel it. */
      var d = Math.min(window.devicePixelRatio || 1, 2);
      var budget = 2200000;
      if (W * H * d * d > budget) d = Math.max(1, Math.sqrt(budget / (W * H)));

      canvas.width = Math.round(W * d);
      canvas.height = Math.round(H * d);
      ctx.setTransform(d, 0, 0, d, 0, 0);
      if (reseed || N === 0) seed();
    }

    /* ---------- pulses ---------- */

    function freePulse() {
      for (var i = 0; i < MAX_PULSES; i++) if (!plive[i]) return i;
      return -1;
    }

    /* Find a neighbour of `i` within its layer's link distance, skipping
       `avoid` so a chain doesn't just bounce back where it came from. */
    function neighbourOf(i, avoid) {
      var far = i < farN;
      var lo = far ? 0 : farN, hi = far ? farN : N;
      var reach = LINK[far ? FAR : NEAR], r2 = reach * reach;
      var start = lo + ((Math.random() * (hi - lo)) | 0);
      for (var k = 0; k < hi - lo; k++) {
        var j = lo + ((start - lo + k) % (hi - lo));
        if (j === i || j === avoid) continue;
        var dx = nx[j] - nx[i], dy = ny[j] - ny[i];
        if (dx * dx + dy * dy < r2) return j;
      }
      return -1;
    }

    function firePulse(from, to, depth) {
      var s = freePulse();
      if (s < 0) return;
      plive[s] = 1;
      pa[s] = from; pb[s] = to;
      pt[s] = 0;
      pdepth[s] = depth;
      var far = from < farN;
      pspd[s] = (far ? rand(0.34, 0.55) : rand(0.55, 0.95)) * (1 + depth * 0.12);
      // a signal-node pulse carries the signal hue; everything else runs
      // accent, because an ink-coloured pulse just reads as a smudge
      pcol[s] = (nkind[from] === 2 || nkind[to] === 2) ? 2 : 1;
    }

    function spawnPulse() {
      // mostly near-layer, where a pulse actually reads; occasionally deep
      for (var tries = 0; tries < 10; tries++) {
        var deep = Math.random() < 0.15;
        var lo = deep ? 0 : farN, hi = deep ? farN : N;
        if (hi <= lo) continue;
        var i = lo + ((Math.random() * (hi - lo)) | 0);
        var j = neighbourOf(i, -1);
        if (j >= 0) { firePulse(i, j, 0); return; }
      }
    }

    /* ---------- simulation ---------- */

    function step(dt) {
      for (var i = 0; i < N; i++) {
        nx[i] += nvx[i] * dt; ny[i] += nvy[i] * dt;
        if (nx[i] < -24) nx[i] = W + 24; else if (nx[i] > W + 24) nx[i] = -24;
        if (ny[i] < -24) ny[i] = H + 24; else if (ny[i] > H + 24) ny[i] = -24;
        if (nfire[i] > 0) {
          nfire[i] -= nfire[i] * dt * 2.4 + dt * 0.05;
          if (nfire[i] < 0) nfire[i] = 0;
        }
      }

      pulseTimer -= dt;
      if (pulseTimer <= 0) {
        spawnPulse();
        pulseTimer = rand(PULSE_GAP_MIN, PULSE_GAP_MAX);
      }

      for (var p = 0; p < MAX_PULSES; p++) {
        if (!plive[p]) continue;
        pt[p] += dt * pspd[p];
        if (pt[p] >= 1) {
          plive[p] = 0;
          var end = pb[p];
          nfire[end] = 1;                       // the node it landed on lights
          if (pdepth[p] < 3 && Math.random() < CHAIN_CHANCE) {
            var onward = neighbourOf(end, pa[p]);
            if (onward >= 0) firePulse(end, onward, pdepth[p] + 1);
          }
        }
      }

      // pointer drift is eased, so a flick of the mouse doesn't snap the layers
      parX += (pointerTX - parX) * Math.min(1, dt * 2.2);
      parY += (pointerTY - parY) * Math.min(1, dt * 2.2);
    }

    /* ---------- batched drawing ---------- */

    function resetBatch() {
      for (var i = 0; i < BUCKETS; i++) { segLen[i] = 0; dotLen[i] = 0; }
    }

    function addSeg(colour, alpha, x1, y1, x2, y2) {
      var s = (alpha / EDGE_MAX_A * STEPS) | 0;
      if (s < 0) return;
      if (s >= STEPS) s = STEPS - 1;
      var bkt = colour * STEPS + s;
      var n = segLen[bkt];
      if (n >= SEG_CAP) return;
      var o = (bkt * SEG_CAP + n) * 4;
      segBuf[o] = x1; segBuf[o + 1] = y1; segBuf[o + 2] = x2; segBuf[o + 3] = y2;
      segLen[bkt] = n + 1;
    }

    function addDot(colour, alpha, x, y, r) {
      var s = (alpha / DOT_MAX_A * STEPS) | 0;
      if (s < 0) return;
      if (s >= STEPS) s = STEPS - 1;
      var bkt = colour * STEPS + s;
      var n = dotLen[bkt];
      if (n >= DOT_CAP) return;
      var o = (bkt * DOT_CAP + n) * 3;
      dotBuf[o] = x; dotBuf[o + 1] = y; dotBuf[o + 2] = r;
      dotLen[bkt] = n + 1;
    }

    function flush(lineWidth) {
      var i, k, o;
      ctx.lineWidth = lineWidth;
      for (i = 0; i < BUCKETS; i++) {
        if (!segLen[i]) continue;
        ctx.strokeStyle = edgeStyle[i];
        ctx.beginPath();
        for (k = 0; k < segLen[i]; k++) {
          o = (i * SEG_CAP + k) * 4;
          ctx.moveTo(segBuf[o], segBuf[o + 1]);
          ctx.lineTo(segBuf[o + 2], segBuf[o + 3]);
        }
        ctx.stroke();
      }
      for (i = 0; i < BUCKETS; i++) {
        if (!dotLen[i]) continue;
        ctx.fillStyle = dotStyle[i];
        ctx.beginPath();
        for (k = 0; k < dotLen[i]; k++) {
          o = (i * DOT_CAP + k) * 3;
          ctx.moveTo(dotBuf[o] + dotBuf[o + 2], dotBuf[o + 1]);
          ctx.arc(dotBuf[o], dotBuf[o + 1], dotBuf[o + 2], 0, Math.PI * 2);
        }
        ctx.fill();
      }
    }

    function drawLayer(layer, t) {
      var lo = layer === FAR ? 0 : farN;
      var hi = layer === FAR ? farN : N;
      if (hi <= lo) return;

      var reach = LINK[layer], r2 = reach * reach;
      var dim = DIM[layer];
      var scrollPar = clamp((scrollY - docTop) * PAR_SCROLL[layer], -14, 14);
      var ox = parX * PAR_X[layer];
      var oy = parY * PAR_X[layer] * 0.55 + scrollPar;

      resetBatch();

      // edges, within this layer only — layers never link to each other, which
      // is most of what makes them read as separate depths
      var i, j;
      for (i = lo; i < hi; i++) {
        for (j = i + 1; j < hi; j++) {
          var dx = nx[j] - nx[i], dy = ny[j] - ny[i];
          var d2 = dx * dx + dy * dy;
          if (d2 > r2) continue;
          var near = 1 - Math.sqrt(d2) / reach;
          var a = near * 0.19 * GAIN * dim;
          var fire = nfire[i] > nfire[j] ? nfire[i] : nfire[j];
          if (fire > 0) a += fire * 0.16 * GAIN * dim;   // the edge lights too
          var colour = 0;
          if (nkind[i] === 2 || nkind[j] === 2) colour = 2;
          else if (nkind[i] === 1 || nkind[j] === 1) colour = 1;
          addSeg(colour, a, nx[i] + ox, ny[i] + oy, nx[j] + ox, ny[j] + oy);
        }
      }

      // nodes: a slow breath, plus whatever charge a pulse left behind
      for (i = lo; i < hi; i++) {
        var f = nfire[i];
        var tw = 0.72 + 0.28 * Math.sin(t * nrate[i] + nph[i]);
        var kind = nkind[i];
        var base = kind ? 0.5 : 0.34;
        var alpha = (base + f * 0.42) * GAIN * dim * tw;
        var r = nr[i] + (kind ? 0.5 : 0) + f * 1.4;
        addDot(kind, alpha, nx[i] + ox, ny[i] + oy, r);
        if (kind) {
          // a quiet halo on the coloured nodes, the way the static artwork had
          addDot(kind, 0.13 * GAIN * dim * tw, nx[i] + ox, ny[i] + oy, r + 3.2);
        }
      }

      flush(LINE_W[layer]);

      // flare rings from a node a pulse just landed on — few enough to draw
      // one at a time
      for (i = lo; i < hi; i++) {
        var fi = nfire[i];
        if (fi < 0.08) continue;
        ctx.strokeStyle = rgba(PALETTE[nkind[i] || 1], Math.min(0.5, fi * 0.34 * GAIN));
        ctx.lineWidth = LINE_W[layer];
        ctx.beginPath();
        ctx.arc(nx[i] + ox, ny[i] + oy, nr[i] + 3 + (1 - fi) * 9, 0, Math.PI * 2);
        ctx.stroke();
      }

      // travelling signals: a head with a short comet tail behind it
      for (var p = 0; p < MAX_PULSES; p++) {
        if (!plive[p]) continue;
        var from = pa[p];
        if ((from < farN) !== (layer === FAR)) continue;
        var to = pb[p];
        var ax = nx[from] + ox, ay = ny[from] + oy;
        var bx = nx[to] + ox, by = ny[to] + oy;
        var tt = clamp(pt[p], 0, 1);
        // full brightness for most of the run, easing only off each end — a
        // sine bell spends most of the flight too dim to notice
        var fade = Math.min(1, Math.min(tt, 1 - tt) * 7);
        var col = PALETTE[pcol[p]];
        var hx = ax + (bx - ax) * tt, hy = ay + (by - ay) * tt;
        var tl = Math.max(0, tt - 0.34);
        var lx = ax + (bx - ax) * tl, ly = ay + (by - ay) * tl;

        ctx.strokeStyle = rgba(col, Math.min(1, 0.42 * GAIN * dim) * fade);
        ctx.lineWidth = layer === FAR ? 1.1 : 1.8;
        ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(hx, hy); ctx.stroke();

        ctx.fillStyle = rgba(col, Math.min(1, 0.16 * GAIN * dim) * fade);
        ctx.beginPath(); ctx.arc(hx, hy, layer === FAR ? 4.5 : 7.5, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = rgba(col, Math.min(1, 0.92 * GAIN * dim) * fade);
        ctx.beginPath(); ctx.arc(hx, hy, layer === FAR ? 1.9 : 2.9, 0, Math.PI * 2); ctx.fill();
      }
    }

    function draw(t) {
      ctx.clearRect(0, 0, W, H);
      drawLayer(FAR, t);
      drawLayer(NEAR, t);
    }

    var inst = {
      canvas: canvas,
      visible: true,
      resize: resize,
      step: step,
      draw: draw,
      /* One composed still for readers who asked for no motion: settle the
         drift, land a couple of pulses so the frame has some life in it, and
         freeze two more mid-flight so the picture reads as a network. */
      still: function () {
        var s;
        for (s = 0; s < 90; s++) step(0.05);
        for (s = 0; s < 3; s++) spawnPulse();
        for (s = 0; s < MAX_PULSES; s++) if (plive[s]) pt[s] = 0.3 + s * 0.17;
        draw(1.4);
      }
    };

    resize();
    return inst;
  }

  /* ---------- one loop for every canvas on the page ---------- */

  var instances = [];
  for (var c = 0; c < canvases.length; c++) {
    var inst = build(canvases[c]);
    if (inst) instances.push(inst);
  }
  if (!instances.length) return;

  function resizeAll() { for (var i = 0; i < instances.length; i++) instances[i].resize(); }

  if (reduced) {
    for (var r = 0; r < instances.length; r++) instances[r].still();
    window.addEventListener('resize', function () {
      resizeAll();
      for (var i = 0; i < instances.length; i++) instances[i].still();
    });
    return;
  }

  var pageVisible = !document.hidden;
  var running = false;
  var last = 0;

  function anyVisible() {
    for (var i = 0; i < instances.length; i++) if (instances[i].visible) return true;
    return false;
  }

  function frame(ts) {
    if (!running) return;
    // a long gap (tab restored, dropped frames) must not teleport the graph
    var dt = last ? (ts - last) / 1000 : 0.016;
    if (!(dt > 0)) dt = 0.016;
    if (dt > 0.05) dt = 0.05;
    last = ts;
    var t = ts / 1000;
    for (var i = 0; i < instances.length; i++) {
      var it = instances[i];
      if (!it.visible) continue;
      it.step(dt);
      it.draw(t);
    }
    requestAnimationFrame(frame);
  }

  function sync() {
    var want = pageVisible && anyVisible();
    if (want === running) return;
    running = want;
    if (running) { last = 0; requestAnimationFrame(frame); }
  }

  document.addEventListener('visibilitychange', function () {
    pageVisible = !document.hidden;
    sync();
  });

  if (typeof IntersectionObserver === 'function') {
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        for (var j = 0; j < instances.length; j++) {
          if (instances[j].canvas === entries[i].target) {
            instances[j].visible = entries[i].isIntersecting;
          }
        }
      }
      sync();
    }, { rootMargin: '120px' });
    for (var o = 0; o < instances.length; o++) io.observe(instances[o].canvas);
  }

  if (typeof ResizeObserver === 'function') {
    var ro = new ResizeObserver(function () { resizeAll(); });
    for (var q = 0; q < instances.length; q++) ro.observe(instances[q].canvas);
  } else {
    window.addEventListener('resize', resizeAll);
  }

  sync();
})();
