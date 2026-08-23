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
14. Resource library: `.library-layout`, the `.toc` side index, `.game-filter`
    and `.game-group`, `.data-table`
15. Mini-lesson deck — slides, big points, side notes, token demo, ask widget
16. Footer (the shared pattern below), responsive overrides
17. [Learning blocks](#learning-blocks): the reusable lesson components, the
    floor/stretch tabs, and the teacher pages' student-content frame

## The resource library

`resources.html` (site root) is the one page wide enough to need its own
layout, so it carries `class="library"` on `<body>`, which only re-declares
`--max` (66rem → 78rem). Widening the token widens the header, hero, and
footer with it, so nothing drifts out of alignment.

- **`.library-layout`** is a two-column grid: the `.toc` side index and
  `.library-body` holding the sections. Below 62rem it collapses to one
  column and the index becomes a horizontal chip row that scrolls with the
  page. It is deliberately *not* sticky there: the header's height changes
  with how the nav wraps, so a sticky offset would only be right at one
  width. The footer's per-page slot carries the same index for deep reading.
- **`.toc`** is an edge with a node per section, and `js/lesson-reveal.js`
  adds `.active` to the section you are reading. Without JS it is a list of
  anchor links, which is why the markup is written out in the HTML and never
  generated.
- **`.game-filter`** is hidden until `html.js` is set, because buttons that
  do nothing are worse than no buttons. The groups it filters are plain
  sections that read fine unfiltered.

## Learning blocks

A closed set of content blocks that read identically in every lesson. Closure is
the point: the same six components, authored the same way, on all sixteen lesson
pages. They are used most heavily by the `.teacher.html` pages, but nothing in
here is teacher-only.

| Class | What it is |
|---|---|
| `.block-warmup` | the opening game or prompt, one per session. White card, signal-coloured left rule. |
| `.block-big-idea` | the one-sentence claim of a segment. Accent wash, serif, no card. |
| `.block-activity` | the task card, with the floor/stretch tabs inside it. Accent-to-signal hairline across the top. |
| `.block-materials` | what the lesson needs. Same left-rule language as the older `.materials`. |
| `.block-teacher-note` | the calm sidebar voice. `--paper-2` fill, signal left rule, smaller text. Visually distinct from every student-facing block on purpose. |
| `.block-timing` | the session's minute-by-minute table, with a proportion bar per row. |

Every block opens with a `.block-label`: a node, the block's name in mono caps,
and an optional right-aligned `.block-time`. That node is the same motif as the
`h2` marker, one size down. A line the teacher says out loud is a `.say`
paragraph (serif, accent left rule), which reads as speech rather than as more
instructions.

`.block-timing` rows carry their share of the block as inline `--w`:

```html
<td class="t-span"><span class="t-bar" style="--w:52%"></span></td>
```

That is per-row *data*, not a design token, which is why it is inline. The
`.t-span` column is hidden below 40rem. A `tr.t-slack` row (the wander block)
draws its bar in grey and its text in italics, because unstructured time should
not look like scheduled time.

### Floor / stretch tabs

Same task, the student picks the depth, nobody is labelled. **CSS only**: two
radios, two labels, two panels, no script involved, so it works on the first
paint and with JavaScript off.

```html
<div class="tier-tabs" role="group" aria-label="Depth for this activity">
  <input class="tier-radio tier-r-floor"   type="radio" name="tier-a1" id="tier-a1-floor" checked>
  <input class="tier-radio tier-r-stretch" type="radio" name="tier-a1" id="tier-a1-stretch">
  <div class="tier-tablist">
    <label class="tier-tab tier-tab-floor"   for="tier-a1-floor">Floor</label>
    <label class="tier-tab tier-tab-stretch" for="tier-a1-stretch">Stretch</label>
  </div>
  <div class="tier-panel tier-panel-floor">…</div>
  <div class="tier-panel tier-panel-stretch">…</div>
</div>
```

Rules to keep:

- **Order is load-bearing.** Both inputs come first, then the tablist, then the
  panels. The selectors are `~` sibling combinators from the checked input.
- **`name` must be unique per card** within a page (`tier-a1`, `tier-a2`, …), or
  two activities share one radio group and toggle each other.
- The radio is visually hidden by clipping, not by `display:none`, so it stays
  focusable. The focus ring is drawn on its label instead.
- Floor is `checked` by default. It is the tier that has to be reachable
  without a click.

### The student-content frame

`.student-embed` is the placeholder `js/teacher-embed.js` fills; `.embed-frame`
is the labelled "Student facing" surface it builds. The frame is `--paper-2` with
an accent-to-signal edge, so quoted student content reads as quoted rather than
as more teacher text. `.embed-fallback` is the plain link that ships in the HTML
and stays put when the script does not run. See
[`../js/README.md`](../js/README.md#teacher-embedjs).

`.teacher-link` is the quiet cross-link in a student page's header, and
`.teacher-banner` is the one-line strip at the top of a teacher page. Both are
deliberately low contrast: a signpost for whoever is teaching, never a second
call to action for the learner.

## The site footer

One pattern, on every page, duplicated in each file (there is no templating
here, so change one and you change all of them):

```html
<footer class="site-footer">
  … constellation SVG …
  <div class="wrap">
    <div class="footer-top">
      <div class="footer-brand">…mark, one line of who and what…</div>
      <nav class="footer-nav">…the primary nav for this site…</nav>
      <!-- per-page slot -->
      <nav class="footer-page">…this page's own links…</nav>
    </div>
    <p class="footer-fine">…free/unaffiliated line and the source link…</p>
  </div>
</footer>
```

The per-page slot is the only part that changes: section anchors on the
resource library, previous/next on a lesson page, "start here" on the hub.
Everything else is identical everywhere. The footer artwork sits at 12%
opacity because text is read directly over it.

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
