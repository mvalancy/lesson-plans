# Activity ideas: Module 5 — AI for Research and Information Gathering

Part of the [activity idea library](../ACTIVITY_CONCEPTS.md). The lab should feel like
*earned skepticism*: students catch AI fabricating with their own hands, learn the
professional fact-checker's moves, and meet the grounded tools that fabricate less.
*(This module is the source of the mini-lesson — keep the hallucination framing
consistent with it.)*

**Maps to job skills:** fact-checking and source verification · research synthesis
(NotebookLM/Perplexity) · information governance — what not to paste into public tools

## Start here — the picks

### 1. The hallucinated references lab `[assist]` · 35 min

The centerpiece. Not "AI sometimes makes things up" as a warning, but a measured
fabrication rate the class produces themselves — and then reduces.

**Run it:**
1. Everyone prompts for a short cited piece on a topic they choose ("with 5 academic
   references") (5 min).
2. Verify every citation via Google Scholar and DOI lookup; log each as Valid,
   Suspicious, or Fabricated (15 min).
3. Re-run with a source-constrained prompt ("cite only sources you can name the DOI
   for") and count again (10 min).
4. Tally the class-wide before/after rates on the board (5 min).

**Floor:** verify two references with a step-by-step checklist.
**Stretch:** test several prompt variants and quantify which cuts fabrication most.
**They walk away with:** rates instead of anecdotes — and proof that prompting changes
them without eliminating the need to check.
Source: [WAC Clearinghouse lesson](https://wacclearinghouse.org/repository/collections/continuing-experiments/august-2025/ai-literacy/understanding-avoiding-hallucinated-references/)

### 2. Lateral reading, modeled live `[show→assist]` · 25 min

The single highest-value information skill in the course, taught the way Stanford's
fact-checking research says to teach it: watch an expert *leave the page*.

**Run it:**
1. Instructor thinks aloud at an unfamiliar website: don't read down the page — open new
   tabs, search the organization, find who's behind it, find better coverage (SIFT)
   (10 min).
2. Pairs race: three sources, sixty seconds each, verdict + one reason (10 min).
3. Debrief which moves worked (5 min).

**Floor:** the ready-made Civic Online Reasoning exercises.
**Stretch:** SIFT a chatbot's *cited source* rather than a webpage.
**They walk away with:** the professional habit — verify the source, not the vibes.
Source: [Civic Online Reasoning (Stanford/DIG)](https://cor.inquirygroup.org/)

### 3. Grounded vs. open: the NotebookLM contrast `[assist]` · 25 min

The constructive answer to hallucination: tools that only answer from sources you gave
them.

**Run it:**
1. Ask the same question to ChatGPT and to NotebookLM loaded with the course
   readings; compare answers side by side (10 min).
2. Click NotebookLM's inline citations back to the exact passage; then try to force it
   to answer beyond its sources and watch it decline (10 min).
3. Debrief: when does work call for grounded, and when for open? (5 min)

**Floor:** query an instructor-preloaded notebook.
**Stretch:** curate your own source set — including rejecting one unreliable source and
saying why.
**They walk away with:** the research-synthesis habit of reaching for source-grounded AI,
not an open chatbot, for anything that has to be right.
Source: [Northeastern AI gallery](https://learning.northeastern.edu/ai-gallery-post-beyond-lectures-and-the-textbook)

### 4. Privacy policy showdown `[solo groups]` · 25 min

What actually happens to what you paste in? Students read the real terms, once, in a
structured way — and never paste blindly again.

**Run it:**
1. Each group takes one AI platform's privacy policy and three questions: what's
   collected, who owns input/output, does it train future models? (15 min)
2. Groups report into a comparison grid on the board (10 min).
3. Verdict: which platform respects users most — cite the clause.

**Floor:** highlighted excerpts.
**Stretch:** find the answers in the full document unaided.
**They walk away with:** information governance in practice — the workplace instinct
about what confidential data can and can't go into public tools.
Source: [Georgia Southern LibGuide](https://georgiasouthern.libguides.com/c.php?g=1380906&p=10211384)

## Full menu

| Activity | Stage | The gist | Source |
|---|---|---|---|
| **The Great Citation Investigation** | `assist groups` | 3 citations, 1 AI-fabricated; find the fake via databases in ~30 min. Stretch: a subtly altered real citation. | [Georgia Southern](https://georgiasouthern.libguides.com/c.php?g=1380906&p=10211384) |
| **Humans vs. AI citation showdown** | `assist→solo` | Build citations manually or via AI; peer-review to spot which were AI-made. | [Georgia Southern](https://georgiasouthern.libguides.com/c.php?g=1380906&p=10211384) |
| **The ZODIAC test** | `show→assist` | Six-criterion source evaluation + AI-content cues. Stretch: apply to a Deep Research output. | [Georgia Southern](https://georgiasouthern.libguides.com/c.php?g=1380906&p=10211384) |
| **AI tool jigsaw** | `assist` | Each group tests one tool (Elicit / Perplexity / ChatGPT / database) on the same question; class comparison chart. | [FIU Libraries](https://library.fiu.edu/AI-ACRL/lesson-plans) |
| **Human vs. AI search keywords** | `assist` | Half generate keywords manually, half via AI; test both sets live in a database. | [FIU Libraries](https://library.fiu.edu/AI-ACRL/lesson-plans) |
| **Scholarship-as-conversation** | `assist` | Real journal article vs. AI-generated "academic analysis"; flag the questionable citations. | [FIU Libraries](https://library.fiu.edu/AI-ACRL/lesson-plans) |
| **Chatbot claim triangulation** | `assist→solo` | Extract 3 claims from a chatbot answer; verify across Google, Wikipedia, and a database; refine the prompt. | [Bronx CC](https://bcc-cuny.libguides.com/AIworkshop/activities) |
| **Critique the Bot** | `show→assist` | Rubric-evaluate an instructor-generated AI text as if reviewing a colleague's draft. Stretch: improve via re-prompting. | [RPI toolkit](https://guides.lib.rpi.edu/ai-literacy/lesson-plans) |
| **Fact-Check It! jigsaw** | `assist` | Expert groups learn one verification skill each (reverse image search, quote tracing…); mixed groups fact-check a viral claim. | [News Literacy Project](https://newslit.org/news-and-research/fact-check-it/) |
| **AI or not? media quiz** | `show→solo` | K-H-W-L chart + real-vs-generated quiz + lateral-reading extension on 6 posts. | [NLP lesson plan](https://newslit.org/wp-content/uploads/2025/02/AI-or-not_Lesson-Plan.pdf) |
| **MediaWise fact vs. fiction** | `show→assist` | Video lesson + long-tail keyword search, lateral and upstream reading on sample posts. | [PBS NewsHour Classroom](https://www.pbs.org/newshour/classroom/lesson-plans/2023/02/lesson-plan-how-to-separate-fact-from-fiction-in-a-new-era-of-artificial-intelligence) |
| **CRAAP race / source bracket** *(adapted)* | `assist` | Timed competitive source evaluation; head-to-head reliability debates. | [CRAAP guides](https://libguides.nova.edu/c.php?g=1236356&p=9047251) |
| **NotebookLM "train the bot" podcast** *(adapted)* | `solo teams` | Curate credible sources → Audio Overview that teaches the class; bad sources = bad podcast, so the lesson is curation. | — |
| **Search vs. answer engine bake-off** *(adapted)* | `assist→solo` | Same question through Google, Perplexity, and a chatbot; compare steps, citations, recency handling. | — |
| **Deep Research report critique** *(adapted)* | `solo→assist` | Treat a Deep Research report like a student paper: verify 3 claims, flag the unsupported, rate trust. | — |

More playables for this module: the [games shelf](../ACTIVITY_GAMES.md#module-5--research--information-misinformation-resilience)
(Bad News, Spot the Troll, Cranky Uncle, Fakey).

> **Deepening this file:** independent per-module so a research agent can go deep on one
> lesson at a time. Keep the entry format, verify every link is live, mark inventions as
> *(adapted)*, prefer low floor + high ceiling + a workplace or community tie-in.
