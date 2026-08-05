# AGENTS.md

Guidance for AI agents (and humans) working in this repo.

## What this is

A public, static lesson-plan site for **CSCI 40: Introduction to AI Tools** at
Monterey Peninsula College (MPC), served by Cloudflare Pages directly from this
repo at **lessons.mattvalancy.com**. Author: Matthew Valancy.

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
  footer disclaimer ("independent instructor site") stays.

## Conventions

- Root-relative URLs everywhere (`/css/style.css`, `/lessons/01-what-is-ai.html`)
  — preview with `python3 -m http.server`, not `file://`.
- One stylesheet: `css/style.css`. Design tokens (colors, spacing) are CSS
  custom properties at the top of the file. Accent color is a deep maroon.
- Each lesson page follows the same section order: header (session/date) →
  overview → learning objectives → agenda (6:00–9:10 PM, lecture then lab) →
  materials → homework. Keep that skeleton when editing.
- Nav and footer are duplicated across pages (no templating). If you change
  them, change them on every page.
- Tone: clean, plain-language, welcoming to non-programmers. The course
  audience is general students with no coding background.

## Course facts (from the approved course outline)

- 1 unit, 10 in-person Thursday evening sessions (6:00–9:10 PM), Fall 2026:
  Sep 24 – Dec 3, no class Nov 26 (Thanksgiving).
- 8 modules: What is AI · Generative AI for Everyday Productivity · AI Images,
  Audio & Video · Spreadsheets & Data · Research & Information Gathering ·
  Ethics, Bias & Responsible AI · Automation with AI Assistants · Capstone.
- Outcomes: (1) use AI tools for writing, research, data analysis, and creative
  expression; (2) evaluate AI outputs for accuracy, bias, and ethics.
- Recommended text: *Elements of AI* (free, elementsofai.com).
