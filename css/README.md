# `css/` — the single stylesheet

`style.css` is the whole design system for the hub and every course. There is
no framework, no preprocessor, and no build step.

## Design tokens

Colours, fonts, and motion are CSS custom properties declared once at the top
of the file. Change them there, never inline:

```css
:root {
  --ink: #22252b;        /* body text */
  --ink-soft: #565b66;   /* secondary text */
  --paper: #fdfcfa;      /* page background */
  --card: #ffffff;
  --line: #e6e2dc;       /* borders, rules */
  --accent: #7d2335;     /* deep maroon */
  --accent-wash: #f7eef0;
  --accent-rgb: 125, 35, 53;   /* same accent, as rgba() channels */

  --sans: …;  --serif: Georgia …;  --mono: ui-monospace …;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
}
```

Two of these carry rules of their own:

- **`--accent-rgb`** exists so glows and washes can be written as
  `rgba(var(--accent-rgb), 0.1)` and still flip with the theme. Every theme
  block that redefines `--accent` must redefine this too, or dark-theme glows
  come out maroon.
- **`--ease`** is the one easing curve on the site. Use it for anything that
  moves. Consistent motion is most of what "professional" means here.

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

1. Tokens, reset, base typography (incl. the accent rule above each `h2`)
2. `.site-note` — the standing free/self-paced/unaffiliated strip
3. Header / nav (`.brand-mark`, the growing nav underline)
4. Hero (+ `hero-canvas` positioning, grid and bloom layers, `rise-in`)
5. Cards and `.pillar-grid` — the course's three commitments
6. Focus / dimmed states — `card-focus`, `.badge`, `.dimmed`, `.focus-row`
7. Schedule table
8. Lesson pages — objectives, agenda, materials
9. Mini-lesson deck — slides, big points, side notes, token demo, ask widget
10. Footer, responsive overrides

## The motion vocabulary

Small, consistent, and never load-bearing. Four devices, reused everywhere:

| Device | Where |
|---|---|
| `rise-in` — 12px fade-up on load, staggered by line | Hero and lesson-header text. CSS only, so it never waits on JS. |
| `.reveal` — fade-up on scroll, children cascading | Every content section on every page, via `js/lesson-reveal.js`. Hidden state is gated behind `html.js`. |
| Accent hairline revealed on hover | `.lesson-card::before`, `.pillar::after`, `.site-footer::before`. |
| Slow breathing | `.brand-mark`, the live dot, the recharging meter. |

Everything above has a `prefers-reduced-motion: reduce` escape that sets the
final state directly. Test with motion reduced before shipping an animation.

## Conventions

- **Focus states carry meaning.** `card-focus` + `.badge` mark something
  genuinely special (Module 5, the mini-lesson's source). `.dimmed` is only
  for things that do not exist yet — never for finished modules, which would
  make a published course look abandoned.
- **Fixed heights where content animates.** `.token-demo` has a hard `height`
  precisely so the slide never reflows while text types in and cycles.
- **Respect `prefers-reduced-motion`** for every animation.
- **Bump the `?v=` query on the `<link>` tags when you change this file** —
  Pages caches it for 4 hours on the custom domain, so a change can silently
  fail to appear. See the root [`AGENTS.md`](../AGENTS.md).
