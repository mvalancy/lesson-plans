# `js/` — client-side behaviour

Three small, dependency-free scripts. **All of them are progressive
enhancement**: every page must remain readable and usable with JavaScript
disabled. Nothing here fetches a framework, and there is no build step.

| File | Used by | Purpose |
|---|---|---|
| `hero-graph.js` | hub + course + mini-lesson heroes | Animated node-graph canvas behind hero sections |
| `lesson-reveal.js` | **every page** | Scroll reveal everywhere; on the mini-lesson also progress bar, slide rail, timing chips, next-word demo, 15-minute timer |
| `ask-widget.js` | mini-lesson | The live small-model terminal that calls `/api/ask` |

## `hero-graph.js`

Draws drifting nodes, proximity edges, and travelling signal pulses on any
`<canvas class="hero-canvas">`. Detects a dark container (`body.deck`) and
raises its alpha gain so it reads on both themes. Renders a single static
frame under `prefers-reduced-motion`.

## `lesson-reveal.js`

Loaded on every page, but almost all of it is opt-in: each feature guards on
the element it needs, so on an ordinary content page the script does exactly
one thing — reveal `.reveal` sections. The slide rail needs `.slide`
elements, the progress bar needs `.progress-bar`, the timer needs slides, the
next-word demo needs `#token-demo`. None of those exist outside the
mini-lesson, so nothing else runs there.

- **Section reveal** on scroll via `IntersectionObserver`. Used site-wide:
  content blocks inside `<main>` are wrapped in `<section class="reveal">`.
  The hidden state is gated behind `html.js`, so no-JS readers see all
  content. Deep links (`#the-fix`) skip the animation, so a mid-talk refresh
  never lands you on a blank section.
- **Reading progress bar** and a **slide rail** of clickable dots.
- **Scrollspy** that lights the current section's timing chip.
- **Next-word prediction demo** — types a true completion (Moon landing) then a
  confident fabricated citation, with probability chips. This is the lesson's
  central idea as an animation.
- **15-minute countdown timer** — click to start/pause, double-click to reset.
  Amber under 5 minutes, red under 2, counts up in overtime so rehearsals show
  the real damage.

## `ask-widget.js`

Front-end for the live model demo. See [`../functions/README.md`](../functions/README.md)
for the server side.

```mermaid
sequenceDiagram
    participant U as Visitor
    participant W as ask-widget.js
    participant F as /api/ask
    U->>W: types a question (or clicks a spark)
    W->>W: show question bubble + thinking dots
    W->>F: POST { message, clientId }
    F-->>W: { reply } + X-RateLimit-* headers
    W->>W: drain meter, schedule recharge
    W->>U: typewriter-reveal the answer
```

Behaviours worth knowing before editing:

- **Never call `res.json()` directly.** It reads the body as text and *then*
  attempts `JSON.parse`. An edge or gateway error can return HTML, and parsing
  that blindly is what once showed visitors
  `Unexpected token '<', "<!DOCTYPE"... is not valid JSON`.
- **Errors render a message plus the server's `code`**, and log to the console,
  so a failure during a demo is diagnosable at a glance.
- **`clientId`** is a random value kept in `localStorage` so each browser gets
  its own rate-limit allowance rather than sharing one per-IP bucket with an
  entire classroom. Falls back to per-IP when storage is blocked.
- **The meter recharges.** The server returns `X-RateLimit-Reset`; spent
  segments breathe until the window rolls over, then light back up.

## Conventions

- ES5-flavoured, no transpiler, no modules — these are plain `<script defer>`
  includes.
- Guard on the element existing (`if (!root) return;`) so one script can be
  loaded on pages that don't use it.
- Honour `prefers-reduced-motion` for anything that animates.
- **Bump the `?v=` query on the `<script>` tag when you change a file here** —
  Pages caches these for 4 hours on the custom domain. See the root
  [`AGENTS.md`](../AGENTS.md).
