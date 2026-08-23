# `tools/` — maintenance scripts

Small scripts that keep the Resource Library honest. Nothing here runs in the
site; these are for whoever maintains the repo.

| Script | What it does |
|---|---|
| `check_links.sh` | Fetches every external link in `resources.html` and the activity library with a browser user agent. Fails on dead links (404/410) and on unexplained blocks. Domains that block all scripts but work in real browsers live in `link-allowlist.txt`; verify in a browser before adding one. A ready CI workflow lives at `tools/link-check.workflow.yml`; copy it to `.github/workflows/link-check.yml` through the GitHub web UI (pushing workflow files needs a token scope this repo's automation does not have) and it runs weekly plus on any push touching the library. |
| `make_thumbs.py` | Regenerates `thumbs/games/*.webp` from the game URLs in `resources.html`. Plain headless screenshots for most games; the tricky ones (canvas games that need clicks to show gameplay) have interaction recipes in `action_shot.py`. Failures get a branded placeholder. `--all` recaptures everything, a slug argument does one game. |
| `action_shot.py` | The interactive capture driver: real headless Chrome over the DevTools Protocol (navigate, click by visible text, type, screenshot), plus per-game recipes that click through menus into actual gameplay. Add a recipe here when a game's thumbnail comes out boring or blank. |

Setup for the Python tools:

```sh
python3 -m venv .venv && .venv/bin/pip install websocket-client pillow
.venv/bin/python tools/make_thumbs.py --all
```

Thumbnails are lazy-loaded (`loading="lazy"` with fixed dimensions) so the
library page stays light no matter how many games it lists. Cloudflare Pages
caches images for a while; a replaced thumbnail at the same filename can take
a few hours to refresh on the custom domain.
