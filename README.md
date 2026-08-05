# lessons.mattvalancy.com

Central hub for course, study, and lesson material by
[Matthew Valancy](https://valpatel.com). The first course is
**CSCI 40: Introduction to AI Tools** (Monterey Peninsula College, Fall 2026);
the hub also links to the [Mr-Cal robot sensor calibration guide](https://cal.valpatel.com/).

Live site: **https://lessons.mattvalancy.com**

This is an independent instructor site — not an official MPC publication.

## Structure

```
index.html            Hub landing page (all courses & guides)
mpc-csci-40/               CSCI 40: Introduction to AI Tools
  index.html          Course overview + schedule
  lessons/            One page per module (8 modules, 10 sessions)
  mini-lesson/        Featured standalone 15-minute mini-lesson
  resources.html      Tools, readings, and open course materials
css/style.css         Single shared stylesheet (no framework)
```

Plain static HTML/CSS with a small vanilla-JS canvas animation (`js/hero-graph.js`)
decorating the hero sections — the site is fully functional without it. No build
step, no dependencies. Future courses get their own top-level directory
alongside `mpc-csci-40/`.

## Local preview

Pages use root-relative links, so serve the repo root rather than opening files directly:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Deployment (Cloudflare Pages)

Deployed directly from this repo:

- **Build command:** none
- **Build output directory:** `/` (repo root)
- **Custom domain:** `lessons.mattvalancy.com` (added under Pages → Custom domains,
  which creates the CNAME automatically when the zone is on Cloudflare)

Every push to `main` publishes automatically.

## License

Course content © Matthew Valancy. Feel free to learn from the structure;
please don't republish the lesson content wholesale.
