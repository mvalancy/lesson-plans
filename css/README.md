# `css/` — the single stylesheet

`style.css` is the whole design system for the hub and every course. There is
no framework, no preprocessor, and no build step.

## Design tokens

Colours and spacing are CSS custom properties declared once at the top of the
file. Change them there, never inline:

```css
:root {
  --ink: #22252b;        /* body text */
  --ink-soft: #565b66;   /* secondary text */
  --paper: #fdfcfa;      /* page background */
  --card: #ffffff;
  --line: #e6e2dc;       /* borders, rules */
  --accent: #7d2335;     /* deep maroon */
  --accent-wash: #f7eef0;
}
```

## Theming

Two themes, both driven by re-declaring those same tokens — no duplicated
rules:

| Scope | Effect |
|---|---|
| `:root` | Light "paper" theme. Hub, course pages, all lesson pages. |
| `body.deck` | Dark presentation theme. The mini-lesson only. |
| `.slide-light` | Re-flips tokens back to light *inside* the dark deck, for the war-stories interlude. |

Because the flip is token-level, a component written once renders correctly in
both themes. If you find yourself writing `body.deck .thing { color: … }` for
anything other than a genuinely theme-specific effect (a glow, a shadow),
reach for a token instead.

## Section map

The file is ordered, with comment banners between sections:

1. Tokens, reset, base typography
2. Interview-context notice bar
3. Header / nav
4. Hero (+ `hero-canvas` positioning)
5. Focus / dimmed states — `card-focus`, `.badge`, `.dimmed`, `.focus-row`
6. Schedule table
7. Lesson pages — objectives, agenda, materials
8. Mini-lesson deck — slides, big points, side notes, token demo, ask widget
9. Footer, responsive overrides

## Conventions

- **Focus states carry meaning.** `card-focus` + `.badge` mark the thing
  currently being developed; `.dimmed` greys the rest. When focus moves, move
  the classes — don't delete the dimmed styling.
- **Fixed heights where content animates.** `.token-demo` has a hard `height`
  precisely so the slide never reflows while text types in and cycles.
- **Respect `prefers-reduced-motion`** for every animation.
- **Bump the `?v=` query on the `<link>` tags when you change this file** —
  Pages caches it for 4 hours on the custom domain, so a change can silently
  fail to appear. See the root [`AGENTS.md`](../AGENTS.md).
