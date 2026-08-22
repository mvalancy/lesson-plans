# `flyers/` — course hook flyers and title banners

Promotional graphics for the course, each pairing a friendly, life-applicable hook with
the program's pillars. Two formats:

- **`0N-*-{dark,light}-rN.png`** — full flyers, 1080×1350 (Instagram-portrait ratio)
- **`title-*-{dark,light}-rN.png`** — wide title banners, 1800×700, for dropping into a
  flyer or page built elsewhere

## Two theme variants, every design

Every flyer, title banner, and the welcome banner now ships as a matched pair:

- **`-dark-`** — screen theme. Near-black ground, faint grid, a teal glow bloom, and a
  gold/amber accent. Built for feeds, slides, and web pages.
- **`-light-`** — print theme. Near-white background, deep navy-teal ink, subtle
  low-alpha grid lines, and the same gold/amber accent (darkened for AA contrast on
  paper). Built to look good coming out of a laser printer without draining the
  cartridge — no heavy dark fills, no full-bleed color blocks.

Both variants keep the same bones: mono micro-labels (kicker, tags, footer), the
oversized numeral/mark watermark (rendered as a stroke-only outline in both themes),
and the generative network-graph motif from `graphgen.py`. Pick dark for a screen,
light for a printout or a low-ink flyer run.

**The `-rN` suffix is a cache-buster**: every visual change bumps the revision so the
PNG gets a brand-new URL (same reason the site bumps `?v=` on CSS/JS — GitHub and
browsers cache images by URL). Always link the newest revision. Current revision: **r4**
(previous `-r3` PNGs were a single dark-only theme and have been removed).

Each graphic has a self-contained `.html` (the source of truth) next to its rendered
`.png` — e.g. `02-own-the-ai-dark.html` renders to `02-own-the-ai-dark-r4.png`.
**Deliberately institution-neutral**: no URLs, no school name, no logos anywhere on
the graphics — add your own enrollment info when printing.

## The palette

Colors were derived from Monterey Peninsula College's own site stylesheet
(`mpc.edu`'s `main.css`, pulled 2026-08-22) so the graphics read as MPC-adjacent
without copying the school's literal branding:

| Role | Hex | Source |
|---|---|---|
| Deep navy-teal ink (light-theme headlines/body) | `#0f3a52` | Darkened variant of MPC's teal family (`#005c6f`/`#017c96`/`#00819c`, all present in `main.css`) — chosen for AAA contrast (11.8:1) on white |
| Teal glow (dark-theme bloom) | `#00819c` | MPC's own secondary teal, used as a decorative radial glow |
| Bright gold/amber accent (dark theme) | `#f2b13f` | Warmed, brightened version of MPC's accent orange `#d26416`, tuned for a strong glow on near-black (10:1 contrast) |
| Amber accent ink (light theme, AA-safe text) | `#a44908` | MPC's own darker accent-orange shade (`#a44908` appears directly in `main.css`), chosen because the brighter gold above fails contrast on white (1.9:1) — this passes at 5.8:1 |

MPC's literal *primary* color is actually a maroon (`#860038`) — the design brief
called for moving away from the site's previous maroon/rose accent, so that hue was
deliberately left out. What's used instead are MPC's own **secondary** teal and
accent-orange families, retuned into a two-tone gold + teal system. Nothing here
reproduces the school's logo, mark, or literal maroon branding — it's a compatible
neighbor palette, not a replica.

| Hook | Full flyer | Title banner |
|---|---|---|
| AI is not just for cheating — learn what it's actually for | `00-not-just-for-cheating-{dark,light}-r4` | `title-not-just-for-cheating-{dark,light}-r4` |
| AI Curious? Start here — all levels welcome | `01-curious-start-here-{dark,light}-r4` | `title-curious-start-here-{dark,light}-r4` |
| Own the AI, don't rent it — local models, your hardware | `02-own-the-ai-{dark,light}-r4` | `title-own-the-ai-{dark,light}-r4` |
| Spot the fake — build the verification habit | `03-spot-the-fake-{dark,light}-r4` | `title-spot-the-fake-{dark,light}-r4` |
| Ship something real — leave with a live website you own | `04-ship-something-real-{dark,light}-r4` | `title-ship-something-real-{dark,light}-r4` |
| General wide-audience welcome | — | `title-intro-ai-tools-welcome-{dark,light}-r4` |

Tone rule: **friendly, never threatening** — invitations to learn, not warnings about
being left behind.

**How they're made — and why that's the point:** these are *web-code generated images* —
hand-tuned HTML/CSS screenshotted in a headless browser, no AI image models. Making a
graphic this way is itself a course lesson: describe → code → render → judge → iterate.

## Regenerating

The generator scripts (`make_flyers.py`, `make_titles.py`, `make_mpc_title.py`,
`graphgen.py`) live outside this repo in the working scratchpad; each imports the
shared `THEMES` dict from `graphgen.py` (one `dark` and one `light` palette) so both
variants of every design come from the same token set — no copy-pasted templates.
Run each script to regenerate every `.html` + `.png` pair for that design family
(both themes, in one pass):

```
python3 make_flyers.py       # the five 1080x1350 flyers, dark + light
python3 make_titles.py       # the five 1800x700 hook title banners, dark + light
python3 make_mpc_title.py    # the welcome banner, dark + light
```

To hand-regenerate a single PNG after tweaking its `.html` directly:

```
google-chrome --headless=new --window-size=1080,1350 --hide-scrollbars --screenshot=out.png file://$(pwd)/flyer.html
```

(use `--window-size=1800,700` for title banners)
