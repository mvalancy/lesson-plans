# Activity ideas: Module 1 — What is AI? Past, Present, and Future

Part of the [activity idea library](../ACTIVITY_CONCEPTS.md). The lab should feel like
*demystification*: by 9pm, "AI" has gone from a vague cloud thing to a machine they've
poked, trained, broken, and run on a laptop.

**Maps to job skills:** AI literacy and vocabulary · evaluating and choosing AI tools ·
recognizing bias in trained systems · verifying AI output before trusting it

## Start here — the picks

### 1. Hopes, worries, and what you've only heard `[show]` · 10–15 min

Before anyone touches a tool, surface how the room actually feels about AI — the
Winthrop principle: explore what students think and feel *before* they use anything.

**Run it:**
1. Sticky notes, three each: one *hope*, one *worry*, one thing you've *heard* about AI
   but aren't sure is true (3 min).
2. Cluster them on the whiteboard, reading aloud as you go — no corrections yet (5 min).
3. Flag two or three "heard" items to revisit; at wrap-up, return to the board and fill
   in what was *learned* (5 min at session end).

**Floor:** no tech, no wrong answers — everyone participates on minute one.
**Stretch:** defend or debunk one "heard" item with a source before next session.
**They walk away with:** a class map of hopes and fears the whole course keeps answering.
Sources: [News Literacy Project K-H-W-L](https://newslit.org/wp-content/uploads/2025/02/AI-or-not_Lesson-Plan.pdf), [MIT Media Lab Hopes & Concerns](https://www.media.mit.edu/projects/ai-ethics-for-middle-school/overview/)

### 2. Predict the next word `[show]` · 10 min

The most load-bearing demo in the course: a language model predicts the next word, and
fluent is not the same as true. Everything in Module 5 stands on this.

**Run it:**
1. Type a text message on the projector, stop mid-sentence, class shouts the next word;
   reveal what autocomplete suggests. Three rounds.
2. Finish with "The mitochondria is the ______" and let the room say it in unison.
3. Land the claim: a chatbot is this, scaled up — it produces *plausible*, not
   *verified*. Ask the Merced reflection question: "Were you surprised to learn AI is
   predicting, not understanding?"

**Floor:** shouting words at a screen.
**Stretch:** articulate *why* one word is more probable (frequency, context); extend the
chain word by word and watch small errors compound.
**They walk away with:** the mental model the whole verification thread builds on — the
habit of checking AI output before trusting it.
Sources: [Digital Technologies Hub](https://www.digitaltechnologieshub.edu.au/teach-and-assess/classroom-resources/lesson-ideas/exploring-predictive-text/), [Merced College OER](https://socialsci.libretexts.org/Courses/Merced_College/Demystifying_AI:_A_Practical_Introduction_for_Instructors/01:_An_Introduction_to_AI/1.01:_What_is_a_language_model/1.1.01:_How_language_models_generate_text_by_predicting_the_next_word)

### 3. Teachable Machine: train it, then break it `[assist→solo]` · 25–30 min

Students train a real image classifier with their own webcam — then deliberately ruin it
with bad training data. Garbage-in-garbage-out, earned rather than told.

**Run it:**
1. Instructor demos a two-class "thumbs up / thumbs down" model (5 min).
2. Pairs train their own two-class model on anything in reach (10 min).
3. Sabotage round: retrain with skewed or sloppy examples, then test — watch it fail
   confidently. Debrief: what did the model actually learn? (10 min)

**Floor:** scripted two-category build, partner drives.
**Stretch:** three or more classes; stress-test edge cases (lighting, angle, background).
**They walk away with:** "models learn what you feed them" as personal experience — the
skill of spotting biased training data, and the foundation for every bias conversation in
Module 6.
Source: [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com/), [Day of AI](https://dayofai.org/units/how-do-machines-learn)

### 4. 🌟 What AI is made of: Hugging Face, then a model on your laptop `[show→solo]` · 30–35 min

The ownership pillar's opening move. AI is not just someone else's server: here are the
parts (models, datasets, demos), and here is one running on hardware in this room.

**Run it:**
1. Guided tour of Hugging Face: one model card, one dataset, one Space demo — framed as
   "the parts bin every AI product is assembled from" (10 min).
2. Scavenger hunt, tightly scoped: find a model that does X, read one model card, try
   one Space (15 min).
3. The reveal: LM Studio on the instructor's laptop, wifi off, chatting with a small
   open model. Compare its answer to a frontier cloud model's — what does
   8B-on-a-laptop get right and wrong? (10 min)

**Floor:** click one Space demo and see it work.
**Stretch:** install LM Studio or Ollama on your own machine; compare model sizes and
quantizations.
**They walk away with:** the customer-to-owner shift: capable AI already runs on
hardware they own.
Sources: [huggingface.co](https://huggingface.co/), [lmstudio.ai](https://lmstudio.ai/), [ollama.com](https://ollama.com/)

### 5. Warming up: low-stakes first prompts `[assist→solo]` · 15 min

Stanford designed this to lower first-use anxiety, and it matters for exactly the
students this course most wants to reach: nobody's first prompt should be high-stakes.

**Run it:**
1. Class picks something playful — a fusion recipe, a fantastical vacation plan, a poem
   about the class. Instructor runs it; the room reacts (5 min).
2. Everyone runs their own, then iterates once: "make it better" — what did you change?
   (10 min)
3. Share the funniest and best out loud.

**Floor:** use the provided prompt list verbatim.
**Stretch:** iterate two or three times and note what each change did.
**They walk away with:** first prompts sent, and no fear of the box.
Source: [Stanford Teaching Commons — Warming Up to AI](https://teachingcommons.stanford.edu/teaching-guides/artificial-intelligence-teaching-guide/warming-ai)

## Full menu

| Activity | Stage | The gist | Source |
|---|---|---|---|
| **The Intelligent Piece of Paper** | `show→assist` | Tic-tac-toe vs. a sheet of if/then rules — it "wins" without thinking. Stretch: write the rule sheet yourself. | [ISTE](https://iste.org/blog/3-unplugged-activities-for-teaching-about-ai), [CS Unplugged](https://classic.csunplugged.org/activities/the-turing-test/) |
| **Live Turing Test role-play** | `assist` | Volunteers play scripted "computer," free "human," and messenger; the class guesses which is which. | [Harvey Mudd MyCS](https://www.cs.hmc.edu/MyCS/MyCS_all_handouts/Unit%201/PDF%20Turing%20Test%20Lesson%20Plan.pdf) |
| **"Human or Not?" chat game** | `solo` | 2-minute anonymous chats — bot or human? Debrief the tells. *(Bot-blocks checkers; click before class.)* | [humanornot.io](https://humanornot.io/) |
| **Bot Buster card game** | `assist` | Reverse Turing test: write responses that *sound* like AI; the judge spots the one real AI output. | [Northeastern News](https://news.northeastern.edu/2025/03/04/can-you-identify-ai/) |
| **AI history timeline** | `solo` | Explore and extend a Turing-to-ChatGPT timeline; today's moment as one of several hype cycles. | [BookWidgets](https://www.bookwidgets.com/blog/2025/08/15-ready-to-use-lesson-plans-to-teach-students-about-artificial-intelligence) |
| **Feature-checklist simulation** | `assist` | Identify a "mystery" cartoon from a feature checklist alone — how classifiers match without seeing. | [ISTE](https://iste.org/blog/3-unplugged-activities-for-teaching-about-ai) |
| **Quick, Draw!** | `solo→assist` | Google's sketch-guessing neural net; then examine the open dataset and its failures. | [aipedagogy.org](https://aipedagogy.org/assignment/exploring-neural-networks-through-googles-quick-draw/) |
| **Spot the AI image quiz** | `solo→assist` | News Literacy Project's "AI or not?"; debrief tells and how fast they're vanishing. | [newslit.org](https://newslit.org/news-and-research/ai-or-not/) |
| **AI vocabulary flashcards** | `solo` | Algorithm, token, hallucination… Stretch: your own definitions + a workplace example each. | [BookWidgets](https://www.bookwidgets.com/blog/2025/08/15-ready-to-use-lesson-plans-to-teach-students-about-artificial-intelligence) |
| **"Fool the AI" hallucination hunt** | `solo` | Craft prompts that elicit a false claim or fake citation; present your best fool. | [BookWidgets](https://www.bookwidgets.com/blog/2025/08/15-ready-to-use-lesson-plans-to-teach-students-about-artificial-intelligence) |
| **Algorithmic bias mini-sequence** | `assist` | Bias in search autocomplete → video recommendations → chatbot answers; three 15-min steps. | [Bronx CC guide](https://bcc-cuny.libguides.com/FacultyAI/literacy) |
| **Elements of AI Ch. 1 pre-work** | `solo→assist` | The recommended free text; self-paced definitions + reflection, discussed in class. | [elementsofai.com](https://www.elementsofai.com/) |
| **Augmentable vs. automatable** *(adapted)* | `assist` | Groups map their own job tasks to augment vs. automate; meets job anxiety head-on. | [Harvard GSE](https://www.gse.harvard.edu/ideas/news/24/02/ai-wont-take-your-job-if-you-know-about-ia) |
| 🌟 **What is an AI gateway?** | `show` | Trace a question from the course site's ask-widget → Cloudflare Function → self-hosted LiteLLM gateway → model. Routing, keys, rate limits: "this is roughly what happens inside ChatGPT." Instructor-driven — don't let the class hammer the widget. | *(instructor-seeded)* |

More playables for this module: the [games shelf](../ACTIVITY_GAMES.md#module-1--what-is-ai-demystifying-prediction-pattern-matching-training-data).

> **Deepening this file:** independent per-module so a research agent can go deep on one
> lesson at a time. Keep the entry format, verify every link is live, mark inventions as
> *(adapted)*, prefer low floor + high ceiling + a workplace or community tie-in.
