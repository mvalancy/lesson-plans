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

### 3. 🌟 The AI tool wall: Hugging Face, then a model on your laptop `[show→solo]` · 30–35 min

The ownership pillar's opening move, pitched for people who want to *use* AI, not build
it. Frame Hugging Face like the tool aisle at the hardware store: this one's a hammer,
that one's a screwdriver — thousands of free AI tools, each made for one job, each with
a label on the box, most with a try-it button. No code, no engineering — just learning
to recognize a tool, read its label, and try it.

**Run it:**
1. Walk the aisle together: try three "tools" that each do one obvious job — turn
   speech into text, remove a photo background, describe a picture out loud. For each,
   glance at the label on the box (the model card, read in plain terms: what it does,
   what it's good at, what to watch out for) (10 min).
2. Scavenger hunt: "find a tool that does X" — translate a menu photo, clean up a
   voice memo, summarize a page. Try it in the browser, then tell your neighbor what
   job it's for (15 min).
3. The reveal: one of these tools running on the instructor's laptop with the wifi
   off. Same idea as the demos — except this one lives in *your* toolbox, not on
   someone else's server (10 min).

**Floor:** press the try-it button on one demo and watch it work.
**Stretch — the deep-dive track (during open lab, with help):** this is a hands-on lab
session, so the instructor circulates and takes individuals as deep as they want to go:
install LM Studio or Ollama together and read the label's fine print — model sizes,
quantization, what fits on your hardware; open a model card's technical sections and
training-data notes; watch a network actually learn in
[TensorFlow Playground](https://playground.tensorflow.org/) or
[GAN Lab](https://poloclub.github.io/ganlab/) from the games shelf. The aisle tour is
the lesson everyone gets; the deep end stays open all course, with a guide standing in
it.
**They walk away with:** the tool-vs-product distinction (ChatGPT is a brand-name
product wrapped around tools like these), and the ability to find and try a free tool
for a job — the customer-to-owner shift, without a line of code.
Sources: [huggingface.co](https://huggingface.co/), [lmstudio.ai](https://lmstudio.ai/), [ollama.com](https://ollama.com/)

### 4. Teachable Machine: train it, then break it `[show]` · 10–15 min

A quick, punchy demo: train a real image classifier live, then deliberately ruin it with
bad training data. Garbage-in-garbage-out, seen rather than told — kept short so it
doesn't crowd the lab.

**Run it:**
1. Train a two-class "thumbs up / thumbs down" model on the projector, with the class
   suggesting examples (5 min).
2. Sabotage round: retrain with skewed, sloppy examples a volunteer supplies — watch it
   fail confidently. Debrief: what did the model actually learn? (5–8 min)

**Floor:** watch and shout suggestions.
**Stretch (open lab or homework):** pairs build their own multi-class model and
stress-test edge cases — the full 25-minute version if the room wants it.
**They walk away with:** "models learn what you feed them" — the seed for every bias
conversation in Module 6.
Source: [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com/), [Day of AI](https://dayofai.org/units/how-do-machines-learn)

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

> **Living document:** each module file stands alone and grows over time as new ideas
> are researched. Keep the entry format, verify every link is live, mark inventions as
> *(adapted)*, prefer low floor + high ceiling + a workplace or community tie-in.
