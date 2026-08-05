# CSCI 40 — Introduction to AI Tools · Lesson Plans

Lesson plans and course companion site for **CSCI 40: Introduction to AI Tools**,
a 1-unit survey course at Monterey Peninsula College, prepared by
[Matthew Valancy](https://valpatel.com).

Live site: **https://lessons.mattvalancy.com**

This is an independent instructor site — not an official MPC publication.

## Structure

```
index.html          Course overview + schedule
lessons/            One page per module (8 modules, 10 sessions)
mini-lesson/        Sample standalone 15-minute mini-lesson
resources.html      Tools, readings, and open course materials
css/style.css       Single shared stylesheet (no framework)
```

Plain static HTML/CSS. No build step, no dependencies, no JavaScript required.

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
