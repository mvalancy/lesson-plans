# The Lab Playbook — eight labs, distilled

Part of the [activity idea library](../ACTIVITY_CONCEPTS.md). The menus hold ~20 options
per module; this is the distillation — **one realistic, fun lab per module**, laid out
for a diverse room (computer novices to engineers) on lab computers with free tools.

**Design rules used throughout:**

- **One big rock.** Each lab has a single centerpiece worth 30–45 minutes. Everything
  else is warm-up, setup, or side quest. Cramming is the #1 lab killer.
- **Underfill on purpose.** Only ~70–75 minutes of a ~95-minute block is structured.
  The slack is the point: a standing **wander block** for free experimentation,
  rabbit holes, and discussion, with instructors circulating. If a scheduled block runs
  long, the wander absorbs it — nothing else gets cut short.
- **The spotlight sweep.** Every lab pauses or ends with a quick sweep of 3–4 students
  showing what they made — 30–60 seconds each, projector or walk-and-look. Instructors
  scout candidates while circulating (volunteers plus a gentle "that's great, show it?"
  tap — never a cold call). Sharing is the course's heartbeat.
- **First five minutes = a win.** Novices succeed at something immediately.
- **Side quests, not worksheets.** Early finishers get a games-shelf station
  ([ACTIVITY_GAMES.md](../ACTIVITY_GAMES.md)), never extra drills.
- **Pairs by default.** Driver/navigator seating; swap mid-lab.
- **Wifi fallback named per lab.** Something always breaks; the lab survives it.

**Accounts, staged honestly:** Lab 1 *includes* creating one free chatbot account. Labs
4–5 use one free Google account (Sheets + NotebookLM). Lab 7 creates a GitHub account as
part of the lab. Games and many Hugging Face Spaces run account-free.

---

## Lab 1 — Meet the machine *(What is AI?)*

**Big rock:** the AI tool wall. **Fun peak:** sabotaging a classifier, live.

| Time | Activity |
|---|---|
| 0:00–0:10 | **First win: Quick, Draw!** Two rounds at [quickdraw.withgoogle.com](https://quickdraw.withgoogle.com/) — everyone draws, the AI guesses, the room laughs. No account, no typing. |
| 0:10–0:25 | **Get a key to the building.** Everyone creates one free chatbot account (their choice of the big three), then sends the playful first prompts (fusion recipe, fantastical vacation). Tech buddies circulate — account setup *is* the activity, not a delay. |
| 0:25–0:50 | **The tool wall** (big rock): three Hugging Face Spaces walked together — speech-to-text, background remover, image describer — "this is a hammer, this is a screwdriver." Then a short scavenger hunt from a curated card of 6 known-fast Spaces. Ends with the reveal: a small model on the instructor's laptop, wifi off — same tools, *your* toolbox. |
| 0:50–1:00 | **Sabotage the classifier:** Teachable Machine on the projector; the class trains thumbs-up/down by shouting examples; a volunteer poisons the data; it fails confidently. "What did it actually learn?" |
| 1:00–1:20 | **Wander block:** free experimentation — chase whatever Space or prompt caught your eye; deep-divers install LM Studio with help; games stations (Semantle, ELIZA, Real-or-Fake-Text) open. |
| 1:20–1:30 | **Spotlight sweep:** 3–4 students show the coolest thing they found — a Space, a prompt, a weird failure. |

*Realism:* lab machines may lack webcams — Teachable Machine is a projector demo for
exactly that reason; curate the Spaces card the morning of class (cold starts).
*Wifi fallback:* the local model needs no internet and becomes the whole show.

## Lab 2 — Say what you mean *(Everyday Productivity)*

**Big rock:** email triage. **Fun peak:** the prompt battle vote.

| Time | Activity |
|---|---|
| 0:00–0:10 | **Bad prompt, live:** run "write about dogs," mock the result together, fix it one ingredient at a time. |
| 0:10–0:40 | **Email triage** (big rock): three envelopes of rising difficulty — status update (together), pushback to a boss (solo + hand-edit the tone), missed-deadline apology (solo, then pair-swap: *"would you actually send this?"*). |
| 0:40–0:55 | **Start your personal agent:** memory/custom instructions — who you are, what you already know, two writing samples to teach it your voice. It grows all course. |
| 0:55–1:15 | **Wander block:** experiment — make-it-shorter on a real document, Mermaid diagrams at [mermaid.live](https://mermaid.live/), your resume, anything; discussion pods form naturally. |
| 1:15–1:30 | **Prompt battle** (fun peak + the share): teams, one challenge, persona prompts; outputs projected; the room votes; winners explain what made theirs work. |
| 1:30–1:35 | **Micro-sweep:** three students each read one line their agent now knows about their voice. |

*Realism:* free tiers rate-limit — battle entries are one submission per team.
*Wifi fallback:* triage works on paper with printed AI drafts to edit.

## Lab 3 — Make it, then doubt it *(Images, Audio, Video)*

**Big rock:** the community flyer sprint. **Fun peak:** the gallery vote.

| Time | Activity |
|---|---|
| 0:00–0:10 | **Fooled on purpose:** [Two Truths & AI](https://www.commonsense.org/games/two-truths-and-ai) — three posters, one fake, class votes, tells revealed. |
| 0:10–0:30 | **Draw a scientist, then generate one:** 60-second paper sketches, then AI generations; tally both on the whiteboard against reality. Whose defaults are whose? |
| 0:30–0:55 | **Flyer sprint** (big rock): one-sentence brief for a real or invented local business; 25 minutes in any free design tool (Canva templates = floor; Figma or an image model = stretch). |
| 0:55–1:10 | **Gallery walk + vote** (fun peak + the share): every flyer on screens, sticky-note critique, and the honest question: *"would you pay for this?"* |
| 1:10–1:30 | **Wander block:** keep polishing, try the voice-clone quiz ([Same Speaker or Not?](https://human-ai-collaboration-lab.kellogg.northwestern.edu/same-speaker-or-not)), Twin Pics, GAN Lab — or the pro pass: correct AI alt text for your flyer (the employable ten minutes). |
| 1:30–1:35 | **Micro-sweep:** two flyers that changed most since the vote, before/after. |

*Realism:* free image tiers queue under class load — three tool options so no service
takes 30 simultaneous hits. *Wifi fallback:* sketch-and-tally + a printed real-or-AI
quiz carry the session.

## Lab 4 — Numbers with receipts *(Spreadsheets & Data)*

**Big rock:** the climate arc on real data. **Fun peak:** hometown data.

| Time | Activity |
|---|---|
| 0:00–0:05 | **Warm-up game:** [Guess the Correlation](https://www.guessthecorrelation.com/), two rounds on the projector. |
| 0:05–0:20 | **First look, together:** upload Mauna Loa annual CO₂ (65 rows — the friendliest file in the course): "columns, ranges, anything odd?" Verify the AI's claims against the raw rows. |
| 0:20–0:50 | **The climate arc** (big rock): pairs pick from the [data shelf](04-spreadsheets-data.md#real-data-shelf--verified-government--open-datasets) and produce one chart plus one hand-verified statistic. Stretch pairs take the NOAA-vs-NASA baseline puzzle. |
| 0:50–1:05 | **Your county, your data** (fun peak): everyone pulls their hometown from the unemployment and median-income files; the room compares. Nothing lands like your own zip code. |
| 1:05–1:25 | **Wander block:** budget-builder start, Spurious Correlations, a second dataset, or the fact-check-the-narrative packet for teams who want the race. Discussion: what would change your mind about this data? |
| 1:25–1:35 | **Spotlight sweep:** 3–4 charts on the projector — each student states their one verified statistic. Assessment (half page, your own words) goes home. |

*Realism:* pre-download shelf files to a shared folder — government sites are slow with
30 simultaneous hits. *Wifi fallback:* same files by USB, local Sheets/Excel.

## Lab 5 — Trust, but verify *(Research & Information)*

**Big rock:** the hallucinated references lab. **Fun peak:** the tally reveal — and
breaking NotebookLM.

| Time | Activity |
|---|---|
| 0:00–0:08 | **Warm-up game:** [Spot the Troll](https://spotthetroll.org/), two profiles as a class. |
| 0:08–0:40 | **Hallucinated references** (big rock): everyone prompts for a cited mini-essay; verify every citation (Scholar + DOI): Valid / Suspicious / Fabricated; re-run source-constrained; count again. The class tally on the whiteboard is the reveal — the room's own before/after fabrication rate. |
| 0:40–0:55 | **Grounded vs. open:** same question to an open chatbot and NotebookLM loaded with course readings; click citations to the exact passage; then *try to make it answer beyond its sources* — breaking it is the fun part. |
| 0:55–1:20 | **Wander block:** lateral-reading practice at your own pace (COR exercises), privacy-policy skim of the tool you actually use, Bad News or Cranky Uncle stations; discussion pods on "what did the tally change for you?" |
| 1:20–1:30 | **Spotlight sweep:** best catch of the night — 3–4 students show their most convincing fabricated citation and how they caught it. |

*Realism:* NotebookLM uses the Google account staged in Lab 4.
*Wifi fallback:* printed citation packets (some real, some fabricated) — the
verification race works against library terminals.

## Lab 6 — People, not numbers *(Ethics & Bias)*

**Big rock:** Survival of the Best Fit with the three-round debrief. **Fun peak:** the
game itself.

| Time | Activity |
|---|---|
| 0:00–0:40 | **[Survival of the Best Fit](https://www.survivalofthebestfit.com/game/)** (big rock): play (~10 min), then the three-round debrief from the game's own resources page — *Behind the Technology* → *Fair Software* → *Steps Forward*. Close with the origin story: four students built this as a class project. |
| 0:40–1:00 | **Bias audit, your own data:** assigned prompts ("a CEO," "a nurse"…) into free image tools; tally on a shared sheet; compare to labor statistics; argue about sample size. |
| 1:00–1:25 | **Wander block — the games shelf open:** [Moderator Mayhem](https://moderatormayhem.engine.is/), [Moral Machine](https://www.moralmachine.net/), [Hidden Bias](https://pair.withgoogle.com/explorables/hidden-bias/), [How Normal Am I](https://hownormalami.eu/) *(volunteer-only — it scores your face; that discomfort is the lesson, never mandatory)*. Discussion pods form around whatever game hits hardest. |
| 1:25–1:35 | **Spotlight sweep + handoff:** 3–4 students share the moment a game changed their answer to something. The one-page AI-use policy goes home with a real template. |

*Realism:* every game is account-free browser play — the most logistics-proof lab.
*Wifi fallback:* the disclosure-ladder card sort and Four Corners debate, fully offline.

## Lab 7 — Ship it *(Automation)*

**Big rock:** ship a real website. **Fun peak:** the URL roll-call.

| Time | Activity |
|---|---|
| 0:00–0:12 | **Automate vs. keep human, fast:** card sort in groups; argue the condolence-email card; land the rubric (repeated · rule-guided · reviewable · reversible). |
| 0:12–1:00 | **Ship a real website** (big rock): the reveal — this course's site is a public repo, "the page you're reading is this folder." Create a GitHub account (*a social media profile for code*, with an AI-drafted profile README), have AI write a single-page site from a template prompt, deploy via GitHub Pages (floor) or Cloudflare Pages (stretch). Both instructors circulate hard here. |
| 1:00–1:10 | **URL roll-call** (fun peak + the share): every site on the projector, five seconds each, applause mandatory. Nobody forgets the night they got a URL. |
| 1:10–1:30 | **Wander block:** give your personal agent a real job and let a neighbor try to break it; extend your site; Agent Breaker; a 3-minute Zapier starter. Map-your-workflow goes home. |
| 1:30–1:35 | **Micro-sweep:** two best bot-breaks — what instruction was missing? |

*Realism:* GitHub email verification stalls sometimes — start accounts at 0:12 sharp;
keep 2–3 pre-made pair-up repos for stranded students. *Wifi fallback:* none honest —
this lab needs the internet; swap with Lab 6 on a bad-wifi night.
*If it feels like too much for one night (it might be):* pre-stage the GitHub account +
AI-drafted profile README in an earlier wander block (Lab 5's fits naturally), so Lab 7
is purely build-and-deploy; or let the deploy spill into the capstone kickoff's open
work time. The module is non-negotiable — the pacing is flexible.

## Labs 8–10 — The capstone arc *(flexible: 1–3 sessions)*

See [08-capstone.md](08-capstone.md) for formats and the process-weighted rubric.
**Planning note:** up to two of these three sessions may be reassigned to other topics
still being decided (guest lectures, special sessions). The arc compresses gracefully:
the minimum viable capstone is **kickoff + showcase in as little as one combined
evening** (brief approval and work time early, lightning talks late), with the
mid-point gallery walk going async (shared board, comments between sessions). Design
capstone briefs assuming two sessions; treat the third as a bonus if it survives.

- **Session 8 — kickoff:** the brief approved per student in a five-minute conversation
  (novices scoped up in confidence, engineers scoped down to finishable); the rest is
  open work time — the whole session is a wander block with two instructors circulating.
  Share moment: the "what I'm making" round — every project named aloud, 30 seconds each.
- **Session 9 — mid-point gallery walk:** work-in-progress on screens; rotating groups
  leave "one thing that works · one question · one idea" stickies. A graded milestone
  that's deliberately lower-pressure than presenting.
- **Session 10 — showcase:** lightning talks (fixed slides, fixed time — the equalizer)
  or science-fair stations, async-gallery option available. Every project with a URL
  goes on the course link wall.

---

**The through-line, said once:** every lab ends with students having made something and
having *seen each other's* — a prompt pair, drafts, a flyer, a chart with receipts, a
fabrication rate, a policy, a URL. The fun is never decoration; it's the vehicle (a race
carries verification, a vote carries critique, a sabotage carries training-data bias).
And the schedule is deliberately loose: the wander block is where a survey course
becomes personal.
