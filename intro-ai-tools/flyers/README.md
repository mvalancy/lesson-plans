# `flyers/` — course hook flyers

Promotional flyers for the course, each pairing a life-applicable hook with the
program's pillars. Every flyer exists as a self-contained `.html` (the source of truth)
and a rendered `.png` (1080×1350, Instagram-portrait ratio).

**How they're made — and why that's the point:** these are *web-code generated images* —
hand-tuned HTML/CSS screenshotted in a headless browser, no AI image models. The
aesthetic follows the course site's design language (dark technical minimalism, mono
uppercase micro-labels, the site's maroon/rose accent). Making a flyer this way is
itself a Module 3/7 lesson: describe → code → render → judge → iterate.

| Flyer | Hook |
|---|---|
| `00-not-just-for-cheating` | AI is not just for cheating — learn what it's actually for |
| `01-become-that-someone` | AI won't take your job; someone using AI might |
| `02-own-the-ai` | Own the AI, don't rent it (local models, your hardware) |
| `03-spot-the-fake` | Deepfakes, fake citations — build the verification habit |
| `04-ship-something-real` | Leave with a live website you own |

To regenerate after editing an `.html`:
`google-chrome --headless=new --window-size=1080,1350 --hide-scrollbars --screenshot=out.png file://$(pwd)/flyer.html`
