# Activity ideas: Module 2 — Generative AI for Everyday Productivity

Part of the [activity idea library](../ACTIVITY_CONCEPTS.md). The lab should feel like
*getting good at asking*: every student leaves with drafts they'd actually use, and the
reflex of iterating instead of accepting the first output.

**Maps to job skills:** prompt engineering · AI-assisted business writing · meeting
documentation · process
diagramming · professional email judgment

## Start here — the picks

### 1. Bad prompt → good prompt `[assist]` · 20 min

The foundational drill: watch a lazy prompt produce mush, then improve it one ingredient
at a time and watch the output transform.

**Run it:**
1. Run a deliberately vague prompt ("write about dogs") on the projector; enjoy how bad
   it is together (5 min).
2. Add one element per round — role, context, format, audience — re-running each time
   and comparing side by side (10 min).
3. Students pin their favorite before/after pair to a shared doc or the wall (5 min).

**Floor:** fix a provided prompt.
**Stretch:** write your own vague prompt first, then rescue it.
**They walk away with:** an iteration reflex and a personal before/after example.
Source: [UVic Libraries beginner prompt course](https://libguides.uvic.ca/Prompt_Engineering_Beginners_Course/Hands-on_activities)

### 2. Email rewrite triage `[assist→solo]` · 35 min

Three workplace emails of rising interpersonal difficulty. This is the module's
highest-stakes transferable skill: knowing where AI drafting helps and where its tone
fails.

**Run it:**
1. Email #1, routine status update — drafted together with a template prompt (10 min).
2. Email #2, pushing back on a boss's request — solo, then edit the AI's tone by hand
   (10 min).
3. Email #3, apologizing for a missed deadline — solo and unaided for the stretch tier;
   pair-swap and ask the only question that matters: "would you actually send this?"
   (15 min)

**Floor:** template prompts for all three.
**Stretch:** take the sensitive one with no template and critique where AI tone goes
wrong.
**They walk away with:** three reusable drafts and judgment about the line between
drafting help and voice.
Source: [Google Prompting Essentials](https://grow.google/prompting-essentials/)

### 3. 🌟 Make it shorter `[show→assist]` · 25–30 min

The humanization pillar as a lab: AI's best productivity trick is *compression* —
respect for the reader's time — not inflation.

**Run it:**
1. Show a bloated ten-page report. Ask who wants to read it. Name the absurdity it
   creates: one person inflates three bullets into ten pages, the recipient's AI
   compresses it back to three bullets (5 min).
2. Students define the audience and the decision the reader needs to make, then compress
   the report with AI to one page — and hand-verify every claim that survives (15 min).
3. Read the best one-pagers aloud; compare what each chose to keep (10 min).

**Floor:** a template summarization prompt.
**Stretch:** define audience and decision from scratch; cut everything that doesn't
serve them.
**They walk away with:** the habit of shipping the one-pager the reader actually wants.
*(Instructor-seeded.)*

### 4. 🌟 Mermaid: diagrams from plain English `[show→solo]` · 25 min

AI writes diagram *text*; the renderer instantly proves it right or wrong. Objective
feedback with zero code — and small models do this well, so it doubles as a
local-model demo.

**Run it:**
1. Ask AI to flowchart the instructor's morning routine in Mermaid; paste into
   [mermaid.live](https://mermaid.live/) and watch it render (5 min).
2. Students diagram their own routine or a process from their job (15 min).
3. Break-fix round: corrupt one line of syntax, watch the error, fix it — a gentle first
   taste of the edit-run-fix loop programmers live in (5 min).

**Floor:** edit labels in a provided diagram.
**Stretch:** sequence or Gantt diagrams; diagram a real system.
**They walk away with:** a real diagram for their documents, and the discovery that
"documents are text, and AI is great at text."
*(Instructor-seeded.)*

### 5. Prompt battle `[solo teams]` · 20 min

The fun closer, straight from Penn Libraries' real event: same challenge, competing
prompts, public vote.

**Run it:**
1. Teams get one creative challenge and craft a persona/system prompt (10 min).
2. Outputs go up on the projector side by side; the class votes; winning teams explain
   what made their prompt work (10 min).

**They walk away with:** visible proof that prompt specificity and persona change
everything.
Source: [Penn Libraries Prompt Battle-Off](https://www.library.upenn.edu/rdds/work/kwh-prompt-battle-off)

### 6. 🌟 Start your personal agent `[assist→solo]` · 20 min, then ongoing

The opening move of a course-long thread: an AI assistant you *develop over time* for
your own work — brainstorming, research, and drafting the task lists that hand chores to
AI so your time goes to the creative part of your job.

**Run it:**
1. Set up memory / custom instructions in your chosen assistant (ChatGPT memory, a
   Claude Project, or similar): who you are, what you already know well (so it skips
   the basics), what you're working toward (10 min).
2. Teach it your voice: paste two things you've written and ask it to describe your
   tone; correct the description until it's right (5 min).
3. Test the channel: have it draft something in your voice; grade the draft (5 min).

**Floor:** fill in a provided instructions template.
**Stretch:** maintain it all course — every module's work feeds it; by Module 7 it
becomes your custom-assistant build, and it's a ready-made capstone.
**Two guardrails (agency):** a personalized AI that only agrees with you is broken —
tell it to preserve useful disagreement; and its adaptation to you is not truth.
**They walk away with:** a career-portable collaborator that transfers more intended
meaning with less effort — and improves through shared history.
*(Instructor-seeded; works in any assistant with memory, from ChatGPT/Claude to small
open models you run yourself.)*

## Full menu

| Activity | Stage | The gist | Source |
|---|---|---|---|
| **Framework fill-in-the-blank** *(adapted)* | `show→solo` | CO-STAR / CRAFT worksheet slots; build one prompt for a workplace scenario. | [CO-STAR](https://promptary.dev/frameworks/costar/), [CRAFT](https://revolia.pro/blog/craft-prompt-framework) |
| **Prompt gallery walk** *(adapted)* | `solo→assist` | Post best prompt+output pairs; circulate, sticky-note feedback, vote. | [Gallery walk](https://ctlonline.org/gallery-walk/) |
| **Reverse prompting** *(adapted)* | `assist` | Polished output, hidden prompt — reconstruct it, then compare to the real one. | [Conestoga Guidebook](https://ecampusontario.pressbooks.pub/conestogagenaiguidebook/chapter/1-3-prompting/) |
| **AI-as-tutor prompting coach** | `solo` | Ask the AI to coach you: closed questions, won't advance until you answer. | [Conestoga Guidebook](https://ecampusontario.pressbooks.pub/conestogagenaiguidebook/chapter/1-3-prompting/) |
| **Resume bullet punch-up** | `assist` | Strengthen a weak bullet, tailor to a posting, catch AI-fabricated claims. | [Career Contessa](https://www.careercontessa.com/advice/how-to-use-chatgpt-to-write-resume/), [NUS](https://nus.edu.sg/cfg/events/details/4057) |
| **Meeting notes → summary** | `assist` | Messy transcript in (e.g., from Otter or Zoom); decisions, action items, open questions out; compare two prompt structures. | [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/make-your-meetings-more-productive-ai/), [idratherbewriting](https://idratherbewriting.com/ai/prompt-engineering-summarizing-meeting-notes.html) |
| **Brainstorm divergence drill** | `show→solo` | 15–20 unfiltered ideas, then a second prompt clusters and ranks them against constraints. | [OpenAI Academy](https://openai.com/academy/brainstorming/) |
| **Persona swap for tone** *(adapted)* | `assist` | Same message as formal exec / friendly peer / concise technical; which fits which audience? | — |
| **Prompt chaining lab** | `assist→solo` | Outline → draft → tone-edit as separate chained prompts, not one mega-prompt. | [Google Prompting Essentials](https://www.coursera.org/specializations/prompting-essentials-google) |
| **Few-shot example priming** | `assist` | Zero-shot vs. 2–3 example pairs; watch format consistency improve. | [Google Prompting Essentials](https://www.coursera.org/specializations/prompting-essentials-google) |
| **Constraint stress-test** *(adapted)* | `assist` | One new constraint per round (word count, reading level, no jargon) — how much one instruction matters. | — |
| **"How Might We" ideation** | `solo groups` | AI reframes and rapid-fires solutions for a nominated pain point. | [ITONICS](https://www.itonics-innovation.com/blog/chatgpt-prompts-for-ideation) |
| **Detection/rephrasing test** | `assist` | Your AI text → detector → "humanize" → re-check; detector unreliability and disclosure norms. | [DePaul Teaching Commons](https://resources.depaul.edu/teaching-commons/teaching-guides/technology/artificial-intelligence/Pages/assignments-activities.aspx) |
| **Jigsaw technique comparison** | `assist` | Expert groups each test one technique, reshuffle, teach each other. | [DePaul Teaching Commons](https://resources.depaul.edu/teaching-commons/teaching-guides/technology/artificial-intelligence/Pages/assignments-activities.aspx) |
| **AI icebreaker bingo** | `show` | AI-generated bingo cards; mingle to match classmates. Low-stakes first touch. | [Hooked on Innovation](https://hookedoninnovation.com/2023/11/07/12-ai-enhanced-icebreakers-to-motivate-learners/) |
| **Generative AI scavenger hunt** | `solo` | "Get the AI to admit uncertainty"; "get a citation and verify it's real." | [TpT](https://www.teacherspayteachers.com/Product/Generative-AI-SCAVENGER-HUNT-Learn-About-Using-ChatGPT-Bard-10475502) |
| **Language practice partner** *(adapted)* | `solo` | Translate a real document (menu, form, email) both directions; then a slow conversation in a language you're learning, with corrections. Judgment call: where would a mistranslation actually hurt? | — |
| **Study guide from your own notes** *(adapted)* | `solo` | Turn your messy notes from another class into a study guide + practice quiz; verify five facts against the textbook before trusting it. | — |

More playables for this module: the [games shelf](../ACTIVITY_GAMES.md#module-2--everyday-productivity-prompting-precision-concision).

> **Living document:** each module file stands alone and grows over time as new ideas
> are researched. Keep the entry format, verify every link is live, mark inventions as
> *(adapted)*, prefer low floor + high ceiling + a workplace or community tie-in.
