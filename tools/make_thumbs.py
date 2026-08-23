#!/usr/bin/env python3
"""Regenerate the Resource Library game thumbnails.

  python3 tools/make_thumbs.py            # only missing thumbs
  python3 tools/make_thumbs.py --all      # recapture everything
  python3 tools/make_thumbs.py <slug>     # one specific game

Pipeline: read the game URLs out of resources.html, screenshot each with
headless Chrome, downscale to 480x300 WebP in thumbs/games/. Games listed
in tools/action_shot.py RECIPES get driven interactively first (clicked
into actual gameplay) instead of a cold landing-page shot. Anything that
fails gets a branded node-graph placeholder so the shelf never looks
broken.

Needs: google-chrome, `pip install websocket-client pillow`.
After regenerating, eyeball the changed files and run tools/check_links.sh.
"""
import os
import re
import subprocess
import sys
import tempfile

from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "thumbs", "games")
SIZE = (480, 300)

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from action_shot import RECIPES, Chrome  # noqa: E402


def slug_for(url):
    s = re.sub(r"^https?://(www\.)?", "", url).rstrip("/")
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def game_urls():
    html = open(os.path.join(ROOT, "resources.html")).read()
    urls = []
    for group in re.findall(r'<div class="game-group".*?</div>\s*(?=<div class="game-group"|</section>)',
                            html, re.S):
        urls += re.findall(r'<h4><a href="(https?://[^"]+)"', group)
    seen, out = set(), []
    for u in urls:
        if u not in seen:
            seen.add(u)
            out.append(u)
    return out


def plain_capture(url, png):
    return subprocess.run([
        "timeout", "60", "google-chrome", "--headless=new", "--disable-gpu",
        "--enable-unsafe-swiftshader", "--window-size=1280,800",
        "--hide-scrollbars", "--virtual-time-budget=10000",
        "--screenshot=" + png, url,
    ], capture_output=True).returncode == 0 and os.path.exists(png)


def recipe_capture(slug, png):
    c = Chrome()
    try:
        RECIPES[slug](c)
        c.shot(png)
        return True
    except Exception as e:
        print("  recipe failed:", e)
        return False
    finally:
        c.close()


def looks_blank(png):
    im = Image.open(png).convert("L")
    hist = im.histogram()
    peak = max(hist) / (im.size[0] * im.size[1])
    return peak > 0.985  # one tone covers ~everything


def to_webp(png, dst):
    im = Image.open(png).convert("RGB")
    w, h = im.size
    target = SIZE[0] / SIZE[1]
    if w / h > target:
        nw = int(h * target)
        im = im.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
    else:
        nh = int(w / target)
        im = im.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))
    im.resize(SIZE, Image.LANCZOS).save(dst, "WEBP", quality=68)


def placeholder(name, dst):
    im = Image.new("RGB", SIZE, "#f7f5f1")
    d = ImageDraw.Draw(im)
    pts = [(60, 220), (150, 90), (260, 180), (360, 70), (430, 200)]
    for a, b in zip(pts, pts[1:]):
        d.line([a, b], fill="#d9d2c7", width=2)
    for i, p in enumerate(pts):
        color = "#e0912c" if i == 1 else ("#7d2335" if i == 3 else "#b9b0a2")
        r = 7 if i in (1, 3) else 4
        d.ellipse([p[0] - r, p[1] - r, p[0] + r, p[1] + r], fill=color)
    label = name[:22]
    d.text((SIZE[0] // 2, SIZE[1] // 2), label, fill="#22252b", anchor="mm")
    im.save(dst, "WEBP", quality=80)


def main():
    only = None
    force = "--all" in sys.argv
    args = [a for a in sys.argv[1:] if a != "--all"]
    if args:
        only = args[0]

    os.makedirs(OUT, exist_ok=True)
    urls = game_urls()
    print(f"{len(urls)} unique game urls in resources.html")
    for url in urls:
        slug = slug_for(url)
        if only and slug != only:
            continue
        dst = os.path.join(OUT, slug + ".webp")
        if os.path.exists(dst) and not force and not only:
            continue
        print(slug)
        png = tempfile.mktemp(suffix=".png")
        ok = recipe_capture(slug, png) if slug in RECIPES else plain_capture(url, png)
        if ok and not looks_blank(png):
            to_webp(png, dst)
            print("  ok", os.path.getsize(dst), "bytes")
        else:
            placeholder(slug.split("-")[0].title(), dst)
            print("  placeholder (blank or failed; add a recipe in action_shot.py?)")
        if os.path.exists(png):
            os.unlink(png)


if __name__ == "__main__":
    main()
