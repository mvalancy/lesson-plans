# `lessons/` — the eight module pages

One page per module. Each is a **lesson plan**, not a handout: written for
whoever is teaching to teach from, and for a self-paced learner to work
through alone.

Each module now has **two** pages at the same coordinate: the student page and
its `.teacher.html` twin. See [Teacher pages](#teacher-pages) below.

| File | Module | Sessions |
|---|---|---|
| `01-what-is-ai.html` | What is AI? Past, Present, and Future | 1 |
| `02-everyday-productivity.html` | Generative AI for Everyday Productivity | 1 |
| `03-images-audio-video.html` | Working with AI Images, Audio, and Video | 1 |
| `04-spreadsheets-data.html` | AI and Data: Spreadsheets & Visualization | 1 |
| `05-research-information.html` | AI for Research and Information Gathering | 1 |
| `06-ethics-bias.html` | Ethics, Bias, and Responsible AI | 1 |
| `07-automation.html` | Automation with AI Assistants | 1 |
| `08-capstone.html` | Capstone Showcase | 3 |

## Teacher pages

`0N-<slug>.teacher.html` sits beside every student page and is the version with
the notes in it. Parallel pages at a shared lesson coordinate, cross-linked,
never an inline toggle: the student page carries one quiet "Teaching this?
Teacher view" link in its header, and the teacher page carries a one-line banner
back. Nothing is gated. A teacher page is a public page of a free course, and
the URL convention plus the banner is enough to keep spoilers out of a student's
way.

**Fixed schema, same shape on all eight pages:**

1. **Prep** (its own surface, always first): materials, accounts to pre-stage,
   the fifteen-minutes-before checklist, the wifi fallback, and what earlier
   modules have to have happened.
2. **Goals**: the big idea plus the module's "maps to job skills" line.
3. **Session timing**: the three-hour bar, then the lab block minute by minute.
4. **Per activity, repeating**: timing · launch script · embedded student
   content · floor and stretch · anticipated wrong turns · discussion questions
   with the answers you are steering toward.
5. **Spotlight sweep prompts and the wander-block menu.**
6. **Synthesis, exit ticket, homework handoff.**

Content comes from [`../activities/lab-playbook.md`](../activities/lab-playbook.md)
and the per-module `activities/0N-*.md` files. The named routines
(driver/navigator, spotlight sweep, wander block) are linked once from the
header, to [`../activities/teaching-scaffold.md`](../activities/teaching-scaffold.md).

**Embedded student content.** Teacher pages do not duplicate the student text.
They carry placeholders that `js/teacher-embed.js` fills from the student page at
runtime:

```html
<div class="student-embed"
     data-embed-src="/intro-ai-tools/lessons/04-spreadsheets-data.html"
     data-embed-select="#agenda">
  <p class="embed-fallback"><a href="…#agenda">Open the student view</a> …</p>
</div>
```

That is why every student page's sections carry stable ids: `#overview`,
`#objectives`, `#agenda`, `#materials`, `#homework`, plus `#featured-lab` on
Module 6. **Do not rename them**, and give any new section an id. With
JavaScript off the placeholder's own link is what renders, so the page still
works.

## The page skeleton

**Every lesson page follows the same section order.** Keep it when editing —
consistency is what makes them usable as a set:

1. **Header** — module number out of eight, plus the session shape
2. **Overview** — a paragraph on why the module matters
3. **Learning objectives** — in an `.objectives` block
4. **Session agenda** — an `.agenda` list, minute-by-minute
5. **Materials** — in a `.materials` block
6. **Homework**
7. **Prev/next navigation**

Everything from Overview to Homework lives in its own
`<section class="reveal">` so `js/lesson-reveal.js` can fade it in on scroll.
The prev/next nav sits outside the reveals.

## The session rhythm

Every three-hour session follows the same shape. Agenda times are **relative
to the start of the session** (`0:00`, `1:15`, …), never wall-clock times —
the rhythm travels, a 6 PM start does not:

```mermaid
flowchart LR
    A["0:00<br/>warm-up<br/>~10 min"] --> B["0:10<br/>lecture<br/>~65 min"]
    B --> C["1:15<br/>break<br/>10 min"]
    C --> D["1:25<br/>hands-on lab<br/>~95 min"]
    D --> E["3:00<br/>wrap-up<br/>10 min"]
```

The lab is deliberately the longest block, roughly three hours of practice for
every hour of talking. People should be using the tools, not watching someone
else use them.

## Module 5 is special

`05-research-information.html` is the source of the
[mini-lesson](../mini-lesson/README.md) — a standalone 15-minute segment that
teaches on its own. It carries a badge linking to it. If you change the
module's framing of hallucination or fact-checking, check the mini-lesson
still agrees with it.

## Where the three commitments land

The course's voice (agency, ownership, humanization — see
[`../README.md`](../README.md)) is carried by specific modules rather than
sprinkled everywhere:

| Commitment | Anchored in |
|---|---|
| Agency | Module 1 — *whether*, not just how |
| Ownership | Module 8 capstone (publish and keep it), plus the Resources page's "Owning the stack" |
| Humanization | Module 2 (send less, not more), Module 6 (*Survival of the Best Fit* — systems that turn people into numbers), Module 7 (automate drudgery, not attention) |

## Conventions

- The `.site-note` (free, self-paced, unaffiliated) is the first element in
  `<body>`.
- No institutional framing: no dates, terms, unit counts, or grading. "Module
  5", never "Oct 22".
- Root-relative links only: `/intro-ai-tools/lessons/…`.
- Placeholder blocks (`.placeholder`) mark material still to be written —
  slides, worksheets. That's honest, not a TODO dump; keep them tidy.
- Section ids on the student pages are an API: the teacher pages select against
  them. Renaming one silently empties an embed (it falls back to the link).
- Teacher pages use the learning blocks from
  [`../../css/README.md`](../../css/README.md#learning-blocks), not one-off
  markup. If a teacher page needs a new kind of block, add it to that section so
  all eight get it.
