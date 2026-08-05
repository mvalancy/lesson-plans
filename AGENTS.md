# AGENTS.md

Guidance for AI agents (and humans) working in this repo.

## What this is

**lessons-ai.mattvalancy.com** — a public, static hub for course/study/lesson
material by Matthew Valancy, served by Cloudflare Pages directly from this
repo (`mvalancy/lessons-csci-40-ai`). The hub landing page links each course
or guide; the first course is **CSCI 40: Introduction to AI Tools** at
Monterey Peninsula College (MPC), living under `csci40/`. External guides
(e.g. Mr-Cal at cal.valpatel.com) are linked, not mirrored.

## Hard rules

- **`ignored/` is private.** It holds source context (course outline PDF,
  personal notes) and is gitignored. Never commit it, copy its files into the
  site, or quote private details (names, phone numbers, emails, interview
  logistics) into public pages. Course-outline facts (module titles, learning
  outcomes, schedule) are fine to use.
- **This repo is public.** Everything outside `ignored/` should read as a
  polished, professional site. No TODO dumps, secrets, or personal data.
- **No build step.** Plain HTML + one CSS file, deployed from the repo root.
  Don't introduce frameworks, bundlers, or npm without being asked.
- **Don't imply official MPC affiliation.** No MPC logos or branding. The
  footer disclaimer ("independent instructor site") stays on course pages.

## Layout

- `index.html` — hub landing page (courses & guides grid, about).
- `csci40/` — the CSCI 40 course: `index.html` (overview + schedule),
  `lessons/01…08-*.html`, `mini-lesson/`, `resources.html`.
- Future courses get their own top-level directory alongside `csci40/`.
- `css/style.css` — the single shared stylesheet for hub and all courses.

## Conventions

- Root-relative URLs everywhere (`/css/style.css`, `/csci40/lessons/…`)
  — preview with `python3 -m http.server`, not `file://`.
- Design tokens (colors, spacing) are CSS custom properties at the top of
  `css/style.css`. Accent color is a deep maroon.
- Focus states: `card-focus` + `.badge` highlight the item currently being
  developed (today: the Module 5 mini-lesson — "How LLMs search,
  hallucination risks, fact-checking"); `dimmed` grays out non-focus items;
  `focus-row` highlights schedule rows. When focus shifts, move these classes.
- Each lesson page follows the same section order: header (session/date) →
  overview → learning objectives → agenda (6:00–9:10 PM, lecture then lab) →
  materials → homework. Keep that skeleton when editing.
- Nav and footer are duplicated across pages (no templating). Course pages
  carry an "All Courses" link back to the hub. If you change nav/footer,
  change them on every page.
- Tone: clean, plain-language, welcoming to non-programmers. The CSCI 40
  audience is general students with no coding background.

## Course facts (CSCI 40, from the approved course outline)

- 1 unit, 10 in-person Thursday evening sessions (6:00–9:10 PM), Fall 2026:
  Sep 24 – Dec 3, no class Nov 26 (Thanksgiving).
- 8 modules: What is AI · Generative AI for Everyday Productivity · AI Images,
  Audio & Video · Spreadsheets & Data · Research & Information Gathering ·
  Ethics, Bias & Responsible AI · Automation with AI Assistants · Capstone.
- Outcomes: (1) use AI tools for writing, research, data analysis, and creative
  expression; (2) evaluate AI outputs for accuracy, bias, and ethics.
- Recommended text: *Elements of AI* (free, elementsofai.com).
