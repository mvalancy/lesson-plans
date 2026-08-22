# `css/` — the single stylesheet

`style.css` is the whole design system for the hub and every course. There is
no framework, no preprocessor, and no build step.

## Design tokens

Colours, fonts, and motion are CSS custom properties declared once at the top
of the file. Change them there, never inline:

```css
:root {
  --ink: #1c1f26;        /* body text */
  --ink-soft: #565b66;   /* secondary text */
  --ink-soft-rgb: 86, 91, 102;
  --ink-faint: #8b909b;  /* metadata, table headers */
  --paper: #fbfaf7;      /* page background */
  --paper-2: #f4f1ec;    /* alternating band */
  --card: #ffffff;
  --line: #e7e2da;       /* borders, rules */
  --line-strong: #d5cec3;
  --accent: #7d2335;     /* deep maroon — the brand */
  --accent-bright: #9c2b41;
  --accent-wash: #f9eff1;
  --accent-rgb: 125, 35, 53;   /* same accent, as rgba() channels */
  --signal: #b06a10;           /* the "active node" hue */
  --signal-rgb: 176, 106, 16;
  --card-graph: url("data:image/svg+xml,…");  /* card-corner node cluster */

  --radius-sm/--radius/--radius-lg/--radius-pill
  --shadow-1/--shadow-2/--shadow-accent
  --s1 … --s8                      /* spacing ramp; --s7/--s8 set section rhythm */
  --fs-display/--fs-h1/--fs-h2/--fs-h3/--fs-lede   /* fluid clamp() type scale */

  --sans: …;  --serif: Georgia …;  --mono: ui-monospace …;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
}
```

Four of these carry rules of their own:

- **`--accent-rgb`** exists so glows and washes can be written as
  `rgba(var(--accent-rgb), 0.1)` and still flip with the theme. Every theme
  block that redefines `--accent` must redefine this too, or dark-theme glows
  come out maroon.
- **`--signal`** is the second hue: the colour of an *active node*, carried
  over from the flyer artwork (amber on paper, gold on the deck). It is
  decorative and marker-only — glowing graph nodes, the Module 5 path node,
  the current-module tick, the end of an accent hairline. **Never body text**;
  it is not contrast-safe at small sizes on white.
- **`--ease`** is the one easing curve on the site. Use it for anything that
  moves. Consistent motion is most of what "professional" means here.
- **`--card-graph`** is an inlined data-URI node cluster, declared once per
  theme, used for the motif in card corners. Because a data URI cannot read
  `currentColor`, each theme block carries its own copy — the only place in
  the file where artwork is duplicated per theme.

Everything else that draws a graph is **inline SVG with CSS classes**
(`.constellation`), so one blob of markup renders correctly in both themes:

| Class | Painted with |
|---|---|
| `.cn-e` | edge — `stroke: currentColor` |
| `.cn-n` | ordinary node — `fill: currentColor` |
| `.cn-a` / `.cn-h` | active node and its halo — `fill: var(--signal)` |

Per-element `opacity` attributes stay in the SVG: that is the depth cue, not a
colour. The generator that emits these lives outside the repo; the shapes are
seeded, so re-running it with the same seed reproduces the same artwork.

## Theming

Two themes, both driven by re-declaring those same tokens — no duplicated
rules:

| Scope | Effect |
|---|---|
| `:root` | Light "paper" theme. Hub, course pages, all lesson pages. |
| `body.deck` | Dark presentation theme. The mini-lesson only. |
| `.slide-light` | Re-flips tokens back to light *inside* the dark deck, for the war-stories interlude. |

All three redefine `--accent-rgb` alongside `--accent`.

Because the flip is token-level, a component written once renders correctly in
both themes. If you find yourself writing `body.deck .thing { color: … }` for
anything other than a genuinely theme-specific effect (a glow, a shadow),
reach for a token instead.

## Section map

The file is ordered, with comment banners between sections:

1. Tokens, reset, base typography (incl. the two-node marker above each `h2`)
2. Buttons — `.btn` / `.btn-primary` / `.btn-ghost` / `.btn-quiet`, `.btn-row`
3. `.constellation` — the shared node-graph motif
4. `.site-note` — the standing free/self-paced/unaffiliated strip
5. Header / nav (`.brand-mark`, the growing nav underline) — sticky, blurred
6. Hero (+ `hero-canvas` positioning, grid layer, masks, `rise-in`)
7. Cards — `.lesson-grid`, `.lesson-card`, `.card-meta`
8. `.module-path` — the eight modules drawn as a graph
9. `.cta-band` — the dark, graph-filled "next step" block
10. `.pillar-grid` — the course's three commitments
11. Focus / dimmed states — `card-focus`, `.badge`, `.dimmed`, `.focus-row`
12. Schedule table (+ `.table-card`)
13. Lesson pages — `.module-ticks`, objectives, agenda, materials
14. Mini-lesson deck — slides, big points, side notes, token demo, ask widget
15. Footer, responsive overrides

## The motion vocabulary

Small, consistent, and never load-bearing. Four devices, reused everywhere:

| Device | Where |
|---|---|
| `rise-in` — 14px fade-up on load, staggered by line | Hero and lesson-header text, including the CTA row. CSS only, so it never waits on JS. |
| `.reveal` — fade-up on scroll, children cascading | Every content section on every page, via `js/lesson-reveal.js`. Hidden state is gated behind `html.js`. `.module-step` carries its own stagger, since the cards are no longer siblings. |
| Accent hairline revealed on hover | `.lesson-card::before`, `.pillar::after`, `.site-footer::before`. |
| Lift on hover | `.lesson-card` (with its corner motif surfacing), `.btn`, `.module-node`. |
| Slow breathing | `.brand-mark`, the Module 5 path node, the live dot, the recharging meter. |

Everything above has a `prefers-reduced-motion: reduce` escape that sets the
final state directly. Test with motion reduced before shipping an animation.

## Conventions

- **Focus states carry meaning.** `card-focus` + `.badge` mark something
  genuinely special (Module 5, the mini-lesson's source). `.dimmed` is only
  for things that do not exist yet — never for finished modules, which would
  make a published course look abandoned.
- **Fixed heights where content animates.** `.token-demo` has a hard `height`
  precisely so the slide never reflows while text types in and cycles.
- **Respect `prefers-reduced-motion`** for every animation. The block near the
  end of the reveal section is the shared escape hatch: add new animations and
  hover transforms to it. It also resets `scroll-behavior` to `auto`.
- **Graphs are structural, not decoration.** The hero canvas, the static
  constellations, the module path, the `h2` marker, and the header's brand
  mark are all the same motif at different scales. A new component that needs
  an ornament should reach for a node and an edge before anything else.
- **Never let a backdrop SVG be caught by a `> *` rule.** `.cta-band` needs
  `> *:not(.constellation)` for its stacking context, or the artwork drops
  back into the flow and the band grows a blank half.
- **Bump the `?v=` query on the `<link>` tags when you change this file** —
  Pages caches it for 4 hours on the custom domain, so a change can silently
  fail to appear. See the root [`AGENTS.md`](../AGENTS.md).
