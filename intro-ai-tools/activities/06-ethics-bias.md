# Activity ideas: Module 6 — Ethics, Bias, and Responsible AI

Part of the [activity idea library](../ACTIVITY_CONCEPTS.md). The heart of the course's
humanization pillar: the lab should feel like *seeing the machinery and choosing your
line* — students experience algorithmic harm in games and their own experiments, then
write down where they personally draw boundaries.

**Maps to job skills:** responsible AI use policy drafting · vendor/tool due diligence
· bias auditing · AI disclosure norms

## Start here — the picks

### 1. Survival of the Best Fit, with the three-round debrief `[show or solo]` · 40 min

The anchor activity of the whole course. Students play a hiring manager who automates
resume screening — and watch the model learn their own bias faster than they can catch
it. People become numbers, on screen, in six minutes.

**Run it:**
1. Play — projected as a class or solo on laptops (6–10 min).
2. Debrief in three rounds, following the game's own
   [resources page](https://www.survivalofthebestfit.com/resources):
   *Behind the Technology* — where exactly did bias enter? What's the black box?
   (10 min) → *Fair Software* — could better code have fixed it, and why "technology
   alone" can't (10 min) → *Steps Forward* — what would you change at the company,
   and what should policy do? (10 min)

**Floor:** play and react.
**Stretch:** open the [source repo](https://github.com/survivalofthebestfit/survivalofthebestfit)
and find the proxy variable (home address) that let bias sneak back in after names were
hidden.
**They walk away with:** the course's core cautionary tale as lived experience — the
bias-auditing habit of tracing exactly where bias entered the pipeline — plus a fun fact
for the capstone: this game was built by four students as a class project.
Source: [survivalofthebestfit.com](https://www.survivalofthebestfit.com/game/)

### 2. Image-generator bias audit `[solo→assist]` · 30 min

Students run the bias experiment themselves, so the conclusion is *their data*, not the
instructor's claim.

**Run it:**
1. Assign neutral prompts across the room: "a CEO," "a nurse," "a construction worker,"
   "a beautiful person" (5 min).
2. Each student generates several images and tallies apparent gender and skin tone into
   a shared class sheet (15 min).
3. Compare the class tally to real labor statistics; discuss what a fair output would
   even look like, and whether sample size supports the conclusions (10 min).

**Floor:** tally by eye from provided prompts.
**Stretch:** critique the methodology against the
["Stable Bias" paper](https://arxiv.org/pdf/2303.11408); design counter-bias prompts
and re-test.
**They walk away with:** an audit they personally ran — the workplace skill of testing a
tool before trusting its output in recruiting or marketing.
Source: [Rest of World investigation](https://restofworld.org/2023/ai-image-stereotypes/) *(adapted from published research)*

### 3. Write your own AI use policy `[solo + peer review]` · 40 min

Agency as an artifact: the module ends with each student owning a one-page policy — a
literal workplace deliverable.

**Run it:**
1. Read a real corporate AI policy template together; notice its moving parts (10 min).
2. Draft your own page: acceptable uses, data-handling rules, disclosure norms, and
   what to escalate to a human (20 min).
3. Pair-swap and pressure-test with scenarios: "client data into a public chatbot?"
   "AI-written performance review?" (10 min)

**Floor:** fill in a template's blanks.
**Stretch:** blank page, and justify every rule.
**They walk away with:** a written AI use policy in their own hand — the job skill of
drafting acceptable-use rules for a team, signed.
Sources: [AIHR template](https://www.aihr.com/blog/ai-policy-template/), [course-policy models](https://celt.uky.edu/ai-course-policy-examples) *(adapted)*

### 4. The disclosure ladder `[assist card-sort]` · 25 min

Replaces the binary "is AI cheating?" argument with the nuanced question professionals
actually face: what changes when you verify and disclose?

**Run it:**
1. Groups rank scenario cards from spellcheck → AI-assisted outline → AI-drafted
   section → fully AI-generated paper, most to least acceptable (10 min).
2. Re-rank with one change: the person *verified the output and disclosed the use*.
   Watch the rankings move (10 min).
3. Debrief with the research finding: perceived ethicality rises sharply with
   verification and acknowledgment (5 min).

**Floor:** rank the provided cards.
**Stretch:** write and defend a borderline scenario from your own field.
**They walk away with:** disclosure norms they can defend at work.
Source: [Frontiers study](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1621743/full) *(adapted from research)*

**Plus:** run one game from the [games shelf](../ACTIVITY_GAMES.md#module-6--ethics--bias-the-heart-of-the-shelf)
as every session's warm-up — this module's shelf (Moral Machine, How Normal Am I,
Moderator Mayhem, the PAIR fairness explorables…) is the deepest in the course.

## Full menu

| Activity | Stage | The gist | Source |
|---|---|---|---|
| **Moral Machine** | `assist groups` | MIT's self-driving-car dilemmas; vote as a team, compare your ethics profile to global data. Stretch: critique the trolley framing. | [teachwithict](https://www.teachwithict.com/moral-machine.html), [MIT](https://www.media.mit.edu/projects/moral-machine/overview/) |
| **Search-engine occupation audit** *(adapted)* | `solo pairs` | Image-search "CEO"/"nurse", screenshot page one, compare to labor-force data — the classic 2015 study, replicated. | [UW iSchool](https://ischool.uw.edu/news/2022/02/googles-ceo-image-search-gender-bias-hasnt-really-been-fixed) |
| **COMPAS fairness mini-lab** | `assist` | Compute false-positive/negative rates by race on the real dataset; "equal accuracy" hides unequal errors. Spreadsheet track + notebook track. | [Fairness book](https://afraenkel.github.io/fairness-book/content/04-compas.html), [ProPublica](https://www.propublica.org/article/how-we-analyzed-the-compas-recidivism-algorithm) |
| **Resume-screening case study** | `assist` | Published lab: a ranking algorithm re-learns bias after names are removed. Floor: pre-run outputs; stretch: modify the notebook. | [ASEE case study](https://peer.asee.org/case-study-using-synthetic-datasets-to-examine-bias-in-machine-learning-algorithms-for-resume-screening) |
| **Facial recognition role debate** | `assist` | Campus-surveillance case, assigned stakeholder roles; advanced roles cite Gender Shades. | [Online Ethics Center](https://onlineethics.org/cases/george-mason-tech-ethics/utilizing-facial-recognition-university-campus), [Gender Shades](http://gendershades.org/docs/ibm.pdf) |
| **Day of AI ethics debate** | `assist` | Four stakeholder groups (tech, government, educators, consumers) argue real scenarios; compressible to one lab. | [Day of AI](https://dayofai.org/units/ai-ethics-debate) |
| **Redesign a recommender** | `assist groups` | Map YouTube's stakeholders, then redesign its algorithm to serve them — "algorithms are opinions." | [MIT Media Lab](https://www.media.mit.edu/projects/ai-ethics-for-middle-school/overview/) |
| **Hopes & Concerns mural** | `show` | Sticky-note warm-up clustering hopes and worries — the concerns audit companies run before rollouts. | [MIT Media Lab](https://www.media.mit.edu/projects/ai-ethics-for-middle-school/overview/) |
| **AI art & artists' rights debate** *(adapted)* | `assist` | Four-corners: uncompensated training data vs. fair use vs. opt-out schemes; licensing exposure of AI marketing assets. | [Georgetown JIA](https://gjia.georgetown.edu/2024/07/10/innovation-and-artists-rights-in-the-age-of-generative-ai/), [Yale Law Journal](https://yalelawjournal.org/forum/artificial-why-copyright-is-not-the-right-policy-tool-to-deal-with-generative-ai) |
| **Data Nutrition Label critique** | `assist` | Apply "nutrition facts for datasets" to a real dataset: what was this trained on, and what are its blind spots? | [datanutrition.org](https://datanutrition.org/) |
| **AI Incident Database investigation** | `solo→assist` | Pick a real documented AI failure; present what went wrong, who was harmed, what would have prevented it. | [incidentdatabase.ai](https://incidentdatabase.ai/), [study](https://arxiv.org/pdf/2310.06269) |
| **Data Detox Kit stations** | `solo stations` | Tactical Tech's free modular privacy/security workshop; data hygiene for AI tools. | [datadetoxkit.org](https://datadetoxkit.org/) |
| **Clickwrap challenge** *(adapted)* | `solo→assist` | Five minutes inside a real AI tool's ToS: what's collected, who owns output, does it train models? | — |
| **Energy & water footprint** | `assist` | Estimate the footprint of your own week of AI queries; scale up; stretch: challenge the estimates' methodology. | [UNU](https://unu.edu/inweh/news/environmental-cost-of-AIs-Enrgy-use-carbon-water-and-land-footprints), [lesson base](https://ailiteracyshop.com/blog/ai-environmental-impact-lesson-middle-school/) |
| **Four Corners protocol** | `show` | "Companies must label AI content" → walk to a corner and defend it. Tier the statements by difficulty. | [Four corners](https://ggie.berkeley.edu/practice/four-corners/) |

> **Deepening this file:** independent per-module so a research agent can go deep on one
> lesson at a time. Keep the entry format, verify every link is live, mark inventions as
> *(adapted)*, prefer low floor + high ceiling + a workplace or community tie-in.
