# `flyers/` — course hook flyers and title banners

Promotional graphics for the course, each pairing a friendly, life-applicable hook with
the program's pillars. Two formats:

- **`0N-*.png`** — full flyers, 1080×1350 (Instagram-portrait ratio)
- **`title-*.png`** — wide title banners, 1800×700, for dropping into a flyer or page
  built elsewhere

Each graphic has a self-contained `.html` (the source of truth) next to its rendered
`.png`. **Deliberately institution-neutral**: no URLs, no school branding — add your own
enrollment info when printing.

**How they're made — and why that's the point:** these are *web-code generated images* —
hand-tuned HTML/CSS screenshotted in a headless browser, no AI image models. The
aesthetic is dark technical minimalism (grid, accent bloom, mono micro-labels) using the
course site's maroon/rose accent. Making a graphic this way is itself a course lesson:
describe → code → render → judge → iterate.

| Hook | Full flyer | Title banner |
|---|---|---|
| AI is not just for cheating — learn what it's actually for | `00-not-just-for-cheating` | `title-not-just-for-cheating` |
| AI Curious? Start here — all levels welcome | `01-curious-start-here` | `title-curious-start-here` |
| Own the AI, don't rent it — local models, your hardware | `02-own-the-ai` | `title-own-the-ai` |
| Spot the fake — build the verification habit | `03-spot-the-fake` | `title-spot-the-fake` |
| Ship something real — leave with a live website you own | `04-ship-something-real` | `title-ship-something-real` |

Tone rule: **friendly, never threatening** — invitations to learn, not warnings about
being left behind.

To regenerate after editing an `.html`:
`google-chrome --headless=new --window-size=1080,1350 --hide-scrollbars --screenshot=out.png file://$(pwd)/flyer.html`
(use `--window-size=1800,700` for title banners)
