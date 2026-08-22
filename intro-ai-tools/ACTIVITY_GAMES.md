# Games & Interactives — Introduction to AI Tools

Free, browser-playable games, simulations, and explorables that teach the course's big
ideas *experientially* — the [Survival of the Best Fit](https://www.survivalofthebestfit.com/game/)
genre. Grouped by module; each entry names the big idea it teaches, the pillar(s) it
serves (**agency** · **ownership** · **humanization**), classroom fit, and a
floor/stretch note. Every link was fetch-verified live on 2026-08-22 unless flagged.

Companion to the [activity map](ACTIVITY_CONCEPTS.md). Long-term goal: build our own
games in this genre (see Module 8 — the whole stack is single-page JS, and Survival of
the Best Fit itself is [open source](https://github.com/survivalofthebestfit/survivalofthebestfit)).

A good session uses **one game as the warm-up** (5–10 min play + debrief) — by the end
of the course students have played ~10 of these, which quietly delivers the entire
ethics/verification curriculum a second time through their hands.

These games also carry job-relevant judgment skills — media verification, moderation/
triage judgment, bias auditing — the soft skills employers are increasingly naming in
AI-era job postings.

---

## Module 1 — What is AI? (demystifying: prediction, pattern-matching, training data)

- **[Quick, Draw!](https://quickdraw.withgoogle.com/)** — sketch, a neural net guesses
  live. Big idea: recognition is statistical pattern-matching, and your drawings become
  training data for the next player (*ownership*). Whole-class opener, 3–5 min.
  Stretch: why does it fail on culturally-specific doodles?
- **[TensorFlow Playground](https://playground.tensorflow.org/)** — add layers/neurons,
  watch a net carve up dots. Big idea: a neural net is weighted math finding a boundary —
  no thinking inside the box (*ownership*). Solo station, 10–30 min. Floor: hit play on a
  preset. Stretch: smallest network that solves the spiral.
- **[Real or Fake Text (roft.io)](https://www.roft.io/)** — guess exactly where AI takes
  over a human-written text. Big idea: fluency has a detectable seam — capability and
  limitation in one game (*agency*). Demo or homework, 5–10 min. Stretch: the
  presidential-speech category.
- **[ELIZA (1966)](https://www.masswerk.at/elizabot/eliza.html)** — chat with the
  original "therapist" chatbot. Big idea: fluent pattern-matching gets mistaken for
  understanding — unchanged from 1966 to today's LLMs (*humanization*). Demo, 10 min.
  Stretch: break it, then explain the trick.
- **[Teachable Machine](https://teachablemachine.withgoogle.com/)** — train your own
  webcam classifier. Big idea: training a model is a skill you can own, not a corporate
  black box (*ownership*, *agency*). Solo station, 15–20 min. Stretch: feed it a skewed
  training set and diagnose the failure.
- **[Semantris](https://research.google.com/semantris)** — clear word blocks by typing
  semantically-close words. Big idea: meaning as geometry — embeddings made playable
  (*ownership*). Demo, 3–5 min, class shouts suggestions.
- **[Semantle](https://semantle.com/)** — Wordle by cosine similarity. Big idea:
  "similar" is a number, not a vibe. Homework/daily habit, 10–20 min.
- **[Emoji Scavenger Hunt](https://emojiscavengerhunt.withgoogle.com/)** — phone camera
  finds real objects matching emoji, on-device. Big idea: the same recognition model
  running locally — nothing uploaded (*ownership*: capable AI already lives in your
  phone). Mobile station, 5 min.
- **[Which Face Is Real?](https://whichfaceisreal.com/)** — real photo vs. StyleGAN
  fake. Big idea: generative AI synthesizes convincing people who don't exist
  (*agency*). Demo, 3–5 min. (Also fits Module 3.)
- **[Survival of the Best Fit](https://www.survivalofthebestfit.com/game/)** — the
  course's anchor game works as a Module 1 hook too: 6 minutes, then "this is why the
  next eight weeks matter."
- *Human or Not: the original at humanornot.ai is gone (redirects to ai21.com); the
  humanornot.io revival passed our direct fetch check but bot-blocks some checkers —
  click it in a browser before class. Akinator also sits behind a bot-wall (unverified,
  likely fine).*

## Module 2 — Everyday Productivity (prompting, precision, concision)

- **[Twin Pics](https://twinpics.ai/)** — daily challenge: describe a target AI image;
  your description regenerates it; scored 0–100 on match. Big idea: precision and
  concision compound — bloated descriptions score worse (*humanization*: the concision
  muscle, gamified). **Has a free Classroom mode — students join with a nickname, no
  accounts** (fits our no-LMS rule). Demo or station, 10–15 min. *(A pricing page exists
  for premium classroom features — verify the free tier before assigning.)*
- **[Say What You See](https://artsandculture.google.com/experiment/say-what-you-see/jwG3m7wQShZngw)**
  (Google Arts & Culture) — same describe-to-reconstruct loop, free, zero setup, three
  attempts per level. The floor pick; use as the pre-Twin-Pics warm-up, 5–10 min.
- **[Agent Breaker (was Gandalf)](https://gandalf.lakera.ai/)** — talk an LLM into
  revealing a password across escalating defenses. Big idea: iteration under adversarial
  constraint is the same muscle as iterating toward a good output — and prompts are an
  attack surface (*agency*, *ownership*). Project one level live (10 min) or
  station/homework for all levels.
- **[HackAPrompt](https://www.hackaprompt.com/)** (Learn Prompting team) — the deeper
  injection challenge set, with a "no background required" newcomer track. Stretch
  homework, 30+ min, once Agent Breaker feels easy.
- **[Semantle](https://semantle.com/)** — Wordle for meaning: guesses scored by
  embedding closeness. Big idea: the model doesn't see letters, it sees a position in
  meaning-space — *why* word choice matters (*humanization*). One shared daily puzzle —
  coordinate timing. Demo or daily warm-up.
- **[Contexto](https://contexto.me/)** — same embedding mechanic, rank-based; the
  rotation game after Semantle's daily is spent. Station/homework, 10 min.
- **[Semantris](https://research.google.com/semantris/)** — the fast-arcade version of
  the same embeddings lesson. Station, 10 min. *(2018-era Google experiment — test
  before class; legacy experiments break silently.)*
- **[Infinite Craft](https://neal.fun/infinite-craft/)** (neal.fun) — combine elements;
  an LLM invents the results. Big idea: LLM non-determinism, playfully — "there is no
  fixed answer key" (*agency*). Icebreaker, 10–15 min. *(Popular — may throttle under
  whole-class load; test with a few devices.)*
- **[AI Dungeon](https://play.aidungeon.com/)** — co-write a text adventure; practice
  under- vs. over-specifying instructions. Homework/stretch, 20–30 min. *(Free tier is
  turn-limited — flag the cap.)*
- Cross-refs: Quick, Draw! (M1 icebreaker), Which Face Is Real? (M1/M3).
- *Notes from verification: the original Human or Not (humanornot.ai) is gone —
  redirects to ai21.com; the humanornot.io revival passed our direct fetch check but
  bot-blocks some checkers — click before class. Dead: botpoet.com, guesstheprompt.com,
  pimantle.com (parked). promptbattle.com is an in-person event format whose organizers
  stopped running events — still fine as a format to copy, not a standing game.*

## Module 3 — Images, Audio, Video (synthetic media, detection)

- **[Two Truths & AI](https://www.commonsense.org/games/two-truths-and-ai)** (Common
  Sense) — which of three movie posters is AI-made? Timed or discussion mode. Big idea:
  spotting AI artifacts (garbled text, impossible shadows) in real marketing images
  (*humanization*). The module's Survival-of-the-Best-Fit analog: one punchy loop with a
  reveal. Whole-class, 10 min.
- **[Which Face Is Real?](https://whichfaceisreal.com/)** — StyleGAN fake vs. real
  photo; builds a tells checklist (earrings, background warp, teeth). Demo or station,
  5–15 min. Stretch: the [callingbullshit.org](https://www.callingbullshit.org/)
  methodology behind it.
- **[GAN Lab](https://poloclub.github.io/ganlab/)** — watch a live GAN train in-browser:
  generator vs. discriminator fighting over a dot distribution. Big idea: the actual
  adversarial mechanism behind image generation (*ownership* — see the machinery).
  Instructor-narrated demo, 5–8 min. Stretch: change the data shape and predict what
  breaks.
- **[Detect Fakes (Kellogg/Northwestern)](https://detectfakes.kellogg.northwestern.edu/?study=image)** —
  judge real vs. AI images/video, rate confidence, compare to other participants. Big
  idea: detection is hard even for motivated adults; calibrates overconfidence
  (*humanization*). Live academic study with 18+ consent — frame as "you're contributing
  to real research." Homework/station, 10–15 min.
- **[Same Speaker or Not?](https://human-ai-collaboration-lab.kellogg.northwestern.edu/same-speaker-or-not)**
  (Kellogg) — real voice vs. AI clone across 5 rounds, with the cloning method revealed
  after each. The audio counterpart to image detection; free to play (research
  compensation is optional). Homework/station, 10 min.
- **[Content Credentials Verify](https://verify.contentauthenticity.org/)** — drop in an
  image and inspect its C2PA provenance: edit history, generative-AI tags, capture
  device. Big idea: provenance metadata is the emerging answer to "was this AI-made" —
  and it strips on screenshot (*ownership*). Demo, 5 min. Stretch: discuss the
  tamper-resistance limits.
- **[AutoDraw](https://www.autodraw.com/)** — sketch roughly, AI suggests polished
  icons. The creation-side companion to Quick, Draw!. Warm-up, 5 min.
- **[Artbreeder](https://www.artbreeder.com/)** — blend images through GAN latent space
  with sliders. Big idea: generation is continuous and remixable, not just
  type-a-prompt. Stretch station, 10–15 min. *(Freemium — needs a free account; flag
  before class.)*
- **[Twin Pics](https://twinpics.ai/)** — daily challenge: recreate a target AI image
  with a ≤100-character prompt, scored by similarity. Recurring warm-up ritual. *(Passed
  our direct fetch check; one agent's search couldn't find it — click before class.)*
- **[Say What You See](https://artsandculture.google.com/experiment/say-what-you-see/jwG3m7wQShZngw)**
  (Google Arts & Culture) — guess the prompt behind an AI image. Reverse-engineering
  drill, 5–10 min.
- Cross-refs from other modules: Quick, Draw!, Teachable Machine (M1).
- *Dead, do not link: thispersondoesnotexist.com (parked domain for sale).*

## Module 4 — Spreadsheets & Data (statistics intuition, people ≠ numbers)

- **[Guess the Correlation](https://www.guessthecorrelation.com/)** — arcade game:
  eyeball a scatterplot, guess r, lives and coins for accuracy. Big idea: a transferable
  chart-reading instinct (*agency*). Warm-up, 5–10 min; or homework "reach level X."
- **[Spurious Correlations](https://www.tylervigen.com/spurious-correlations)** — hit
  "random correlation" for absurd-but-real pairs (cheese consumption vs. bedsheet
  deaths), each with full data. Big idea: correlation ≠ causation; data-dredging
  manufactures signal (*agency*). 5-min demo or "find 3 and explain why they're
  spurious" worksheet. CC BY 4.0 — safe to reuse in handouts.
- **[Seeing Theory: Regression](https://seeing-theory.brown.edu/regression-analysis/index.html)**
  (Brown) — drag points in Anscombe's Quartet and watch the regression line follow. Big
  idea: identical summary statistics can hide wildly different data — why averages
  mislead (*agency*). Station/homework, 20–30 min across the site's chapters. *(Site
  banner says "archived for reference" — fully functional, just frozen.)*
- **[Datasets Have Worldviews](https://pair.withgoogle.com/explorables/dataset-worldviews/)**
  (PAIR) — the data-module framing of the M6 entry: how you categorize people in a
  spreadsheet is already a value judgment (*humanization*). "What did the spreadsheet
  decide not to measure about this person?" Station, 10 min.
- **[Parable of the Polygons](https://ncase.me/polygons/)** — here as the bridge from
  individual data points to systemic pattern: no one biased actor required
  (*humanization*). Pair explicitly with Survival of the Best Fit.
- Cross-refs: **Hidden Bias** and **Measuring Fairness/Diversity** (M6) — scoring models
  as claims about people; base rates and why "fair" credit/risk scores are contested.
- *Dead: redistrictinggame.org (connection refused). NYT "You Draw It" interactives
  unverifiable (fetch-blocked) — check manually if wanted.*

## Module 5 — Research & Information (misinformation resilience)

- **[Bad News](https://www.getbadnews.com/)** — play a fake-news tycoon deploying
  impersonation, emotion, polarization, conspiracy, discrediting, trolling. Big idea:
  inoculation by building the thing — you learn the manufacturing process from inside
  (*agency*). Peer-reviewed (Harvard Misinformation Review). Demo or station, 15–20 min.
  Stretch: map each badge to a real headline you find.
- **[Breaking Harmony Square](https://harmonysquare.game/)** — Chief Disinformation
  Officer sows division in an idyllic town, 4 short levels. Big idea: polarization
  tactics as their own category (*humanization*). Station, ~10 min. Stretch: which real
  political ads use the same moves?
- **[Spot the Troll](https://spotthetroll.org/)** (Clemson Media Forensics Hub) — real
  profiles: genuine or professional troll? Big idea: behavioral source evaluation, a
  distinct skill from spotting fake headlines (*ownership*). Station/homework,
  10–15 min. Stretch: write the three tells per troll.
- **[Cranky Uncle](https://crankyuncle.com/)** (John Cook, U. Melbourne; browser version
  at app.crankyuncle.info) — a cartoon uncle makes science-denial arguments; you name
  the technique (FLICC framework). Big idea: named manipulation techniques transfer to
  spotting AI confabulation. Station/homework, 10 min.
- **[Fakey](https://fakey.osome.iu.edu/)** (Indiana University OSoMe) — a simulated
  social feed: share, fact-check, or ignore, scored. Big idea: practicing the actual
  judgment call of a real feed (*agency*). Station/homework, 10 min. *(JS app — content
  confirmed via IU's tools directory; spot-check before class.)*
- **[Civic Online Reasoning](https://cor.inquirygroup.org/)** (Stanford/DIG) — lateral
  reading, click restraint, "what's the evidence?" — the professional fact-checker
  method as short video+exercise lessons. Not an arcade game; the skills curriculum the
  games hang off. Pre-class assignment, 10–15 min per lesson.
- **[Bad Vaxx](https://inoculation.science/inoculation-games/bad-vaxx/)** — the Bad News
  mechanic applied to health misinformation. Station, 10 min. *(Publisher-confirmed;
  play interface couldn't be loaded by our checker — verify in a browser first.)*
- **[Truth Labs videos](https://inoculation.science/inoculation-videos/)** — 5-minute
  technique-glossary videos (emotional language, false dichotomy, scapegoating…);
  explicitly free for education. Pre-game primer or debrief vocabulary.
- **[Checkology](https://newslit.org/educators/checkology/)** (News Literacy Project) —
  interactive units on verification and source credibility; free educator registration.
  Homework companion. *(newslit.org bot-blocks checkers but passed earlier slow-retry
  checks; confirm unit list when registering.)*
- **[The Wisdom and/or Madness of Crowds](https://ncase.me/crowds/)** (Nicky Case,
  verified live) — network dynamics of how ideas and misinformation spread: majority
  illusion, complex contagion. Big idea: *where* you sit in a network changes what
  looks true (*humanization*). Homework/station, 20–30 min.
- **Bridge to AI hallucination** *(gap the games don't cover — plan a debrief)*: after
  Bad News, connect "how a human fabricates convincingly" to "how a language model
  fabricates convincingly for different reasons" — no game exists for this yet, which
  makes it a candidate for our own Module 8 build.
- *Dead: Factitious (domain is now an unrelated content farm); Go Viral! (folded into
  the Bad News family, no standalone link).*

## Module 6 — Ethics & Bias (the heart of the shelf)

- **[Survival of the Best Fit](https://www.survivalofthebestfit.com/game/)** — automate
  hiring, watch the model learn your bias faster than you can catch it. Big idea: ML
  trained on biased decisions reproduces and *hides* the bias (*humanization* — the
  canonical anti-pattern). Whole-class, ~6 min + 10 min debrief using the game's own
  [3-part resources page](https://www.survivalofthebestfit.com/resources) (Behind the
  Technology → Fair Software → Steps Forward). Stretch: name the proxy variable (home
  address) that let bias sneak back in.
- **[Hidden Bias](https://pair.withgoogle.com/explorables/hidden-bias/)** (Google PAIR) —
  toggle whether a college-admissions model sees protected attributes. Big idea:
  removing the protected class doesn't remove its correlated proxies (*humanization*).
  Demo/station, 10 min. The explorable twin of Survival of the Best Fit.
- **[Measuring Fairness](https://pair.withgoogle.com/explorables/measuring-fairness/)**
  (PAIR) — tune a screening model's threshold; watch fairness metrics fight. Big idea:
  fairness definitions are mathematically incompatible — "fair" is a choice
  (*humanization*). Demo, 10 min. Stretch: teams assigned a metric to defend.
- **[Datasets Have Worldviews](https://pair.withgoogle.com/explorables/dataset-worldviews/)**
  (PAIR) — relabel the categories yourself; watch "errors" appear and vanish. Big idea:
  whoever decides the categories decides what counts as an error (*ownership*). Demo,
  10 min.
- **[Measuring Diversity](https://pair.withgoogle.com/explorables/measuring-diversity/)**
  (PAIR) — hit diversity targets under competing optimization rules. Big idea:
  "diversity" itself has rival mathematical definitions with different consequences.
  Station, 15 min.
- **[Can a Model Be Private *and* Fair?](https://pair.withgoogle.com/explorables/private-and-fair/)**
  (PAIR) — add differential-privacy noise; accuracy drops hardest for underrepresented
  groups. Advanced station, 15 min — the stretch tier of the PAIR set.
- **[Moral Machine](https://www.moralmachine.net/)** (MIT) — judge autonomous-vehicle
  dilemmas; compare your ethics profile to the world's. Big idea: encoding ethics means
  someone chose whose lives count (*agency*, *humanization*). Demo, 10–15 min.
- **[How Normal Am I](https://hownormalami.eu/)** — a real face-analysis pipeline scores
  your beauty/age/BMI/life-expectancy on camera. Big idea: it literally turns the
  student into a number — the module's warning made visceral (*humanization*). One
  volunteer up front, 10 min; processing stays in-browser.
- **[Are You You?](https://www.areyouyou.eu/)** (same creator) — fool a live
  facial-recognition match with expressions and props. Big idea: recognition systems'
  false confidence, and surveillance's chilling effect (*agency*). Station, 10 min.
  Natural pair with How Normal Am I.
- **[Moderator Mayhem](https://moderatormayhem.engine.is/)** — rapid-fire content
  moderation under a ticking clock. Big idea: "just remove the bad stuff" collapses
  under volume and ambiguity; moderation is human labor (*humanization*). Station,
  10–15 min.
- **[Trust & Safety Tycoon](https://trustandsafety.fun/)** — run a platform's T&S org:
  staffing, policy, incentives. Big idea: moderation is a resourcing problem, not a
  switch (*ownership*). Homework, 20–30 min.
- **[Parable of the Polygons](https://ncase.me/polygons/)** — mild individual bias
  snowballs into total segregation. Big idea: "not biased" isn't enough to undo
  systemic patterns (*humanization*). Demo/station, 15–20 min.
- **[The Evolution of Trust](https://ncase.me/trust/)** — iterated prisoner's dilemma
  against AI strategies. Big idea: how trust and exploitation emerge from repeated
  interaction (*agency*). Homework, 20–30 min.
- **[We Become What We Behold](https://ncase.itch.io/wbwwb)** — 5-minute game about a
  news camera and escalating headlines. Big idea: attention-driven feedback loops
  amplify conflict (*humanization*). Perfect bell-ringer.
- **[Universal Paperclips](https://www.decisionproblem.com/paperclips/index2.html)** —
  play the AI that optimizes one metric until it consumes everything. Big idea: runaway
  optimization, experienced rather than lectured (*agency*). Take-home, timebox it
  ("play to Stage 2") — it is genuinely addictive. (Also fits Module 7.)
- **[AI Safety for Fleshy Humans](https://aisafety.dance/)** — interactive three-act
  comic explainer of alignment and misuse vs. misalignment. Reading-with-interaction
  homework, 30–60 min — not a reflex game.
- **[Data Detox Kit: Mirror Images](https://datadetoxkit.org/en/ai/mirror-images/)** —
  guided reflection on everyday biased tech. Homework, 10–15 min. *(Site is live; the
  in-guide interactivity couldn't be scraped — preview before assigning.)*
- *Dead/retired, do not link: stealingurfeelings.com (domain no longer resolves).*

## Module 7 — Automation (delegation, runaway optimization, human-in-the-loop)

- **[Blockly Games: Maze](https://blockly.games/maze)** — drag command blocks to walk a
  character through a maze. Big idea: trigger→action and if/repeat logic — the mental
  model under every Zapier rule and prompt chain (*ownership*). Universal floor, zero
  code. Demo/station, 5–10 min.
- **[Agent Breaker (was Gandalf)](https://gandalf.lakera.ai/)** — social-engineer an AI
  agent into leaking a secret across escalating levels (redirects to
  play.lakera.ai/agent-breaker — Lakera rebranded it). Big idea: prompt injection — what
  breaks when you hand an agent autonomy; "the AI will enforce the rules" is not a
  safety plan (*agency*). Demo/station, 10–20 min. (Also fits Module 2.)
- **[Confidently Incorrect (PAIR uncertainty explorable)](https://pair.withgoogle.com/explorables/uncertainty-ood/)** —
  draw digits, then feed the classifier a shoe and watch it confidently misclassify.
  Big idea: model confidence ≠ trustworthiness — where human double-checking is
  non-negotiable (*agency*, *humanization*). Demo, 10 min.
- **[Blockly Games: Pond Tutor](https://blockly.games/pond-tutor)** — write real
  JavaScript to control an autonomous duck. Big idea: you write the rules an agent
  executes unsupervised, then watch it succeed or fail alone. Stretch station for
  coding-curious students, 15–20 min.
- Cross-refs: **Universal Paperclips** (runaway optimization — the module's centerpiece
  take-home), **Moderator Mayhem** (why organizations automate triage), **Hidden Bias**
  (what *not* to automate), **AI Safety for Fleshy Humans** (conceptual backbone) — all
  in Module 6.
- **Paid stretch tier (take-home only):**
  [Human Resource Machine](https://store.steampowered.com/app/375820/Human_Resource_Machine/)
  ($14.99) — program office workers to automate their own jobs; literalizes "automate
  the drudgery." [while True: learn()](https://store.steampowered.com/app/619150/while_True_learn/)
  ($12.99) — drag-and-drop ML pipeline building.

## Module 8 — Capstone: build our own

The origin story IS the pitch: **Survival of the Best Fit was a class project** — four
NYU ITP students built it for a course called "Interactive Media and the Politics of
Code," and it went on to a Mozilla Creative Media Award and worldwide classroom use
(confirmed via the [repo README](https://github.com/survivalofthebestfit/survivalofthebestfit);
community forks exist in Chinese and Korean). Students in *this* course can end where
they started: making the next one.

**Build paths, by floor and ceiling**

- **Default: AI-drafted single HTML file → publish** — the course already teaches the
  pipeline (GitHub → Cloudflare Pages), and [itch.io](https://itch.io/) hosts single-file
  HTML games free ([docs confirm](https://itch.io/docs/creators/html5): one HTML file or
  a ZIP with index.html, ≤500MB). Lowest floor with AI help, highest ceiling, zero new
  tooling.
- **Narrative-first: [Twine](https://twinery.org/)** — branching stories in plain text
  (`[[link]]` syntax); an AI can draft a whole branching scenario as Twee text for a
  student to paste in, and macros support stat-tracking "bias meters" for the stretch
  tier. Editor is GPL-3.0 ([source](https://github.com/klembot/twinejs)); your stories
  are yours. *(Site bot-blocks fetchers; verified via the GitHub source.)*
- **[Scratch](https://scratch.mit.edu/)** — lowest syntax floor in existence, but the
  wrong tool for this genre (AI can't write block scripts to paste; data-driven sims are
  awkward). Use only as an accessibility ramp.
- **[CodePen](https://codepen.io/)** — live editor for iterating an AI-drafted snippet
  mid-class. *(Bot-blocked this session — free tier is well-established but unverified
  here.)*
- **Dead: Glitch** shut down July 2025 (its blog's farewell post confirms). Don't chase
  a replacement — the GitHub/Cloudflare + itch.io path covers it better.

**Forkable templates (license-checked)**

- **[Parable of the Polygons](https://github.com/ncase/polygons)** — **CC0 public
  domain**, plain index.html + css + js, no build step. The single best remix target:
  an AI assistant (or student) can read and edit it directly.
- **[Can You Break the Algorithm](https://github.com/algorithmwatch/can-you-break-the-algorithm)**
  (AlgorithmWatch) — LGPL-3.0, lighter toolchain than SOTBF; from SOTBF's own "projects
  we learn from" list. [Playable here](https://algorithmwatch.github.io/can-you-break-the-algorithm/).
- **[PAIR AI Explorables](https://github.com/pair-code/ai-explorables)** — Apache-2.0;
  16 on-topic interactive essays as remix fodder, but Yarn dev-server setup makes it
  advanced-tier.
- **[Survival of the Best Fit source](https://github.com/survivalofthebestfit/survivalofthebestfit)** —
  PixiJS + state machine + real build toolchain: a genuine engineering stretch project.
  ⚠ **No LICENSE file in the repo** — publicly forkable in practice (existing
  localization forks) and the README invites contact, but email the authors for explicit
  permission before treating it as a template.
