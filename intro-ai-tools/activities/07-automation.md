# Activity ideas: Module 7 — Automation with AI Assistants

Part of the [activity idea library](../ACTIVITY_CONCEPTS.md) — brainstorming
material, not finished lesson plans. Scaffold tags, floor/stretch notes, and the
three pillars (agency · ownership · humanization) are defined in the top-level map.

> **Deepening this file:** each module file is independent so a research agent can
> go deep on one lesson at a time. When adding ideas: keep the entry format, verify
> every link is live, mark inventions as *(adapted)*, and prefer activities with a
> low floor, a high ceiling, and a workplace or community tie-in.


- **Build a custom GPT / Claude Project for one job task** `[assist→solo]` — Narrow-purpose
  assistant (customer-reply drafter, notes summarizer) via instructions, no code. Floor:
  plain-instruction bot. Stretch: add file knowledge, test edge cases. [WashU Build Your Own GPTs](https://careers.washu.edu/classes/build-your-own-gpts/), [Duke 60-min GPT workshop](https://entrepreneurship.duke.edu/event/your-ai-co-founder-build-your-custom-gpt-partner-60-minutes-10-16-2025/), [jon-ai lesson](https://jon-ai.com/class/en/building-a-simple-custom-gpt-for-a-specific-task.html)
- **"Let's build some bots" group workshop** `[assist groups]` — Brainstorm a use case,
  define guardrails, build, contribute to a shared class bot collection. Mixed-skill
  groups by design. (Format from the EDUCAUSE Annual Conference 2025 workshop "Let's
  Build Some Bots" — session listing at events.educause.edu; EDUCAUSE blocks automated
  link checks, so the exact URL is unverified.)
- **Claude Project as personal knowledge assistant** `[show→assist]` — Upload 2–3 real
  docs (syllabus, resume, notes) + instructions; test answers with vs. without the
  knowledge base. [LSE educator guide](https://info.lse.ac.uk/staff/divisions/Eden-Centre/Assets-EC/Documents/Claude-Guides-Dec-2025/Guide-Claude-Projects-for-LSE-Educators.pdf), [Northeastern student guide](https://learning.northeastern.edu/ai-student-guides-claude-project-to-answer-questions-about-class)
- **Zapier guided build: form → doc → PDF → email** `[assist]` — The exact intake-to-
  document pipeline from a real course; stretch adds conditional logic and a second
  branch. [No Code University "Zap into Automation"](https://nocodeuniversity.net/courses/zap-into-automation/)
- **Zapier micro-build menu** `[assist]` — Choose one: starred Gmail→Todoist, Forms→
  Airtable, weather→daily SMS, Airtable→email alert; each 3–11 minutes, each a different
  trigger/action shape. [No Code MBA Zapier track](https://www.nocode.mba/tracks/zapier)
- **Make.com first scenario: Sheet watch → Slack ping** `[assist]` — New-row-in-sheet
  fires a channel notification; stretch adds a value filter. [Make.com tutorial](https://help.make.com/create-your-first-scenario)
- **n8n first workflow: scheduled fetch → email digest** `[assist]` — Official beginner
  path with hosted practice endpoints (no API keys needed). Stretch: add a transformation
  step. [n8n Essentials](https://learn.n8n.io/courses/course-v1:n8n+N8N101+2026H2/about), [n8n first-workflow docs](https://docs.n8n.io/try-it-out/tutorial-first-workflow/)
- **n8n micro-build: Gmail attachment → cloud storage** `[assist]` — Auto-file invoices/
  receipts; the "easy second win" for early finishers.
- **Map your workflow, then automate one step** `[show→solo]` — Paper-map one recurring
  task "as if explaining to a new hire"; tag each step Draft-able / Watch-able / Flag-able /
  Not-automatable; build only one low-risk step. "Automation doesn't fix a broken
  process — it produces bad output faster." [SmarterX AI Academy](https://academy.smarterx.ai/ai-academy-blog/ai-for-it-breaking-down-workflow)
- **AI workflow audit worksheet** `[solo]` — Structured worksheet: which tasks in a
  workflow can be reassigned to AI (repeatability, rule-clarity) and the prompts it would
  take. Real enterprise-training artifact. [Section AI worksheet](https://www.sectionai.com/resource/ai-workflow-audit-worksheet)
- **"Automate vs. keep human" card sort** `[assist]` — Sort ~15 task cards (meeting
  summary, hiring decision, refund, medical advice…) into automate / AI-assists-human-
  approves / fully human; debate edge cases. [ProductTalk framework](https://www.producttalk.org/how-to-choose-which-tasks-to-automate-with-ai/)
- **AI scheduling assistant trial** `[show→solo]` — Auto-block recurring habits around
  commitments; watch what happens when a conflict forces a reschedule. [Reclaim.ai](https://reclaim.ai/), [Zapier roundup](https://zapier.com/blog/best-ai-scheduling/)
- **Email auto-draft setup + quality audit** `[assist]` *(adapted)* — Generate 5–10 draft
  replies; grade each against "would I actually send this?"; stretch: custom tone
  instructions to improve drafts. [Zapier AI email assistants](https://zapier.com/blog/best-ai-email-assistant/)
- **Business process → workflow diagram** `[assist→solo]` — Formalize a process
  (onboarding, reimbursement) into triggers/actions/conditions *before* touching a tool —
  the first deliverable of a real Coursera course. Pairs perfectly with the Mermaid seed
  activity. [Coursera: Operationalizing No-Code AI with Zapier](https://www.coursera.org/learn/operationalizing-no-code-ai-with-zapier-automation-and-plans)
- **Write an agent spec** `[solo, stretch tier]` — Role, autonomous permissions,
  human-approval gates, and fallback behavior for a hypothetical inbox-triage or
  scheduling agent; novices discuss a filled-in example instead. [Coursera module 3](https://www.coursera.org/learn/operationalizing-no-code-ai-with-zapier-automation-and-plans)
- **Browser-agent live demo + debrief** `[show]` — Instructor-only demo of a computer-use/
  browser agent doing a multi-step task, narrating failure points; class discusses use
  boundaries. [Microsoft AI Agents for Beginners](https://microsoft.github.io/ai-agents-for-beginners/15-browser-use/)
- **Voice assistant warm-up** `[show]` — Scripted Siri/Alexa requests; extract the
  trigger→action structure underlying the response. [WeTeachCS AI literacy lessons](https://weteachcs.org/catalogue/advancing-ai-literacy-lessons/)
- **Resume/cover-letter tailoring GPT + detection-risk discussion** `[assist→solo]`
  *(adapted)* — Build a GPT on your own resume that tailors cover letters to pasted job
  descriptions; then discuss recruiters rejecting detectable AI boilerplate — draft
  generator, not final author. [Coursera guide](https://www.coursera.org/articles/chatgpt-cover-letters), [Zapier guide](https://zapier.com/blog/how-to-use-chatgpt-to-write-a-cover-letter/)
- 🌟 **Ship a real website: GitHub → AI-written page → Cloudflare Pages** `[show→solo]`
  *(instructor-seeded)* — The course site itself is Cloudflare Pages serving a public
  repo: demo with the literal page they're reading. Students create a GitHub account
  ("a social media profile for code" — with an AI-drafted profile README), have AI write
  a single-page site, deploy, and walk out with a real URL. Floor: personal/small-business
  landing page from a template prompt. Stretch: hang a real project off it. Feeds the
  capstone showcase.

