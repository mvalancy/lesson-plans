# Activity ideas: Module 7 — Automation with AI Assistants

Part of the [activity idea library](../ACTIVITY_CONCEPTS.md). The lab should feel like
*deliberate delegation*: map the work first, automate one boring step, keep the human
judgment — and ship something real to the open web.

**Maps to job skills:** workflow automation (Zapier/Make/n8n) · process mapping ·
custom AI assistant building (Claude Projects/GPTs) · site deployment (GitHub/Cloudflare
Pages) · automation judgment — what to keep human

## Start here — the picks

### 1. Map your workflow, then automate one step `[show→solo]` · 45 min

The anti-hype automation lesson: judgment first, tooling second. "Automation doesn't fix
a broken process — it produces bad output faster."

**Run it:**
1. Instructor maps one of their own recurring tasks on the whiteboard, "as if explaining
   it to a new hire" (10 min).
2. Students paper-map a recurring task from their own life or job, then tag each step:
   *Draft-able* / *Watch-able* / *Flag-able* / *Not automatable* (15 min).
3. Build exactly one low-risk step with any tool — an AI draft template, a Zapier zap, a
   calendar rule (15 min).
4. Share-out with the question that matters: what did you deliberately *not* automate,
   and why? (5 min)

**Floor:** map a personal task (grocery run, class schedule).
**Stretch:** map a real job workflow and build a two-step automation.
**They walk away with:** a mapped process, one working automation, and a defensible line.
Source: [SmarterX AI Academy](https://academy.smarterx.ai/ai-academy-blog/ai-for-it-breaking-down-workflow)

### 2. Automate vs. keep human: the card sort `[assist]` · 25 min

The humanization pillar operationalized as a decision rubric.

**Run it:**
1. Groups sort ~15 task cards — meeting summary, hiring decision, customer refund,
   medical advice, condolence email — into *automate* / *AI assists, human approves* /
   *fully human* (10 min).
2. Compare sorts across groups and argue the disagreements — the condolence email
   always splits the room (10 min).
3. Land the framework: automate what's repeated, rule-guided, reviewable, and
   reversible; keep humans on everything touching money, health, law, or feelings
   (5 min).

**Floor:** sort with the rubric provided.
**Stretch:** champion one card you think the rubric miscategorizes.
**They walk away with:** a principled line they can state in a job interview.
Source: [ProductTalk framework](https://www.producttalk.org/how-to-choose-which-tasks-to-automate-with-ai/)

### 3. Build a custom assistant for one job task `[assist→solo]` · 40 min

From using someone else's chatbot to owning a narrow one that works for *you*.

**Run it:**
1. Instructor builds a bot live — instructions only, no code: a customer-reply drafter
   with the company's tone rules baked in (10 min).
2. Students build their own (Claude Project or custom GPT) for one real task from their
   life: meal planner around their constraints, study-guide maker, quote-request
   responder (20 min).
3. Swap seats and try to break a neighbor's bot; note what instructions were missing
   (10 min).

**Floor:** template instructions, fill in your specifics.
**Stretch:** add knowledge files; handle the edge cases your neighbor found.
**They walk away with:** a custom AI assistant they built and understand — the
tool-scoping skill ops and product teams use to spin up narrow internal assistants.
Sources: [WashU Build Your Own GPTs](https://careers.washu.edu/classes/build-your-own-gpts/), [LSE Claude Projects guide](https://info.lse.ac.uk/staff/divisions/Eden-Centre/Assets-EC/Documents/Claude-Guides-Dec-2025/Guide-Claude-Projects-for-LSE-Educators.pdf)

### 4. 🌟 Ship a real website `[show→solo]` · 50 min

Ownership made literal, and the setup for the capstone: every student leaves with a live
URL.

**Run it:**
1. The reveal: this course site is a public repo served by Cloudflare Pages — show the
   repo and the page side by side, "the page you're reading is this folder" (10 min).
2. Everyone creates a GitHub account — framed as *a social media profile for code*,
   an employer-visible professional presence — with an AI-drafted profile README
   (15 min).
3. AI writes a single-page site (personal card, small-business landing page); deploy to
   Cloudflare Pages or GitHub Pages; share your URL with the room (25 min).

**Floor:** a template-prompted landing page, deployed with step-by-step help.
**Stretch:** hang a real project off it; custom domain conversation.
**They walk away with:** a live URL they own — the artifact the capstone showcase
builds on.
*(Instructor-seeded.)*

## Full menu

| Activity | Stage | The gist | Source |
|---|---|---|---|
| **"Let's build some bots" workshop** | `assist groups` | Brainstorm a use case, define guardrails, build, contribute to a class bot collection. | EDUCAUSE 2025 workshop *(URL unverifiable — EDUCAUSE blocks checkers)* |
| **Zapier guided build** | `assist` | Form → doc template → PDF → auto-email: a real intake pipeline from a real course. Stretch: add conditional logic. | [No Code University](https://nocodeuniversity.net/courses/zap-into-automation/) |
| **Zapier micro-build menu** | `assist` | Pick one: starred Gmail→Todoist, Forms→Airtable, weather→SMS. Each 3–11 min, each a different trigger/action shape. | [No Code MBA](https://www.nocode.mba/tracks/zapier) |
| **Make.com first scenario** | `assist` | New sheet row → Slack ping; stretch: value filter. | [Make tutorial](https://help.make.com/create-your-first-scenario) |
| **n8n first workflow** | `assist` | Scheduled fetch → email digest, on hosted practice endpoints (no API keys). | [n8n Essentials](https://learn.n8n.io/courses/course-v1:n8n+N8N101+2026H2/about), [docs](https://docs.n8n.io/try-it-out/tutorial-first-workflow/) |
| **n8n micro-build** | `assist` | Gmail attachment → cloud storage; auto-filing invoices. The early-finisher's second win. | — |
| **AI workflow audit worksheet** | `solo` | Which tasks in a workflow can AI take (repeatability, rule-clarity), and what prompts would it need? | [Section AI](https://www.sectionai.com/resource/ai-workflow-audit-worksheet) |
| **Business process → diagram** | `assist→solo` | Formalize a process into triggers/actions/conditions *before* touching a tool. Pairs with the Mermaid activity. | [Coursera](https://www.coursera.org/learn/operationalizing-no-code-ai-with-zapier-automation-and-plans) |
| **AI scheduling assistant trial** | `show→solo` | Auto-block recurring habits; watch a conflict force a reschedule. | [Reclaim.ai](https://reclaim.ai/), [Zapier roundup](https://zapier.com/blog/best-ai-scheduling/) |
| **Email auto-draft audit** *(adapted)* | `assist` | Generate 5–10 draft replies; grade each: "would I actually send this?" Stretch: custom tone instructions. | [Zapier](https://zapier.com/blog/best-ai-email-assistant/) |
| **Write an agent spec** | `solo stretch` | Role, autonomous permissions, human-approval gates, fallback behavior for a hypothetical agent. | [Coursera module 3](https://www.coursera.org/learn/operationalizing-no-code-ai-with-zapier-automation-and-plans) |
| **Browser-agent demo + debrief** | `show` | Instructor-only: a computer-use agent does a multi-step web task while the class predicts failure points. | [Microsoft AI Agents for Beginners](https://microsoft.github.io/ai-agents-for-beginners/15-browser-use/) |
| **Voice assistant warm-up** | `show` | Scripted Siri/Alexa requests; extract the trigger→action structure underneath. | [WeTeachCS](https://weteachcs.org/catalogue/advancing-ai-literacy-lessons/) |
| **Cover-letter GPT + detection risk** *(adapted)* | `assist→solo` | Build a GPT on your own resume that tailors cover letters — then discuss recruiters rejecting detectable AI boilerplate. | [Coursera](https://www.coursera.org/articles/chatgpt-cover-letters), [Zapier](https://zapier.com/blog/how-to-use-chatgpt-to-write-a-cover-letter/) |

More playables for this module: the [games shelf](../ACTIVITY_GAMES.md#module-7--automation-delegation-runaway-optimization-human-in-the-loop)
(Blockly Maze, Agent Breaker, Universal Paperclips).

> **Deepening this file:** independent per-module so a research agent can go deep on one
> lesson at a time. Keep the entry format, verify every link is live, mark inventions as
> *(adapted)*, prefer low floor + high ceiling + a workplace or community tie-in.
