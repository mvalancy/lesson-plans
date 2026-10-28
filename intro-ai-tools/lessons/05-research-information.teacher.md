> [HTML view](https://lessons.mattvalancy.com/intro-ai-tools/lessons/05-research-information.teacher.html) · [Markdown index](https://lessons.mattvalancy.com/llms.txt). Generated from the same published source. Interactive controls and 3D scenes are available in the HTML view.

**Free and open** for anyone to learn or teach · [code on GitHub](https://github.com/mvalancy/lesson-plans)

**Teacher view** of a free course. Nothing here is hidden from students, it is just the version with the notes in it. [Student view](https://lessons.mattvalancy.com/intro-ai-tools/lessons/05-research-information.html)

[Intro to AI Tools](https://lessons.mattvalancy.com/intro-ai-tools/)

Teacher view · Module 5 of 8

# AI for Research and Information Gathering

One 3-hour session · the lab is **Trust, but verify** : the class measures its own fabrication rate, then cuts it.

[Student view of this module](https://lessons.mattvalancy.com/intro-ai-tools/lessons/05-research-information.html) · [named routines (teaching scaffold)](https://github.com/mvalancy/lesson-plans/blob/main/intro-ai-tools/activities/teaching-scaffold.md)

## Prep

This is the module the mini-lesson came out of, so keep the hallucination framing consistent with it. The prep that matters is the notebook: NotebookLM needs sources loaded before class, and loading them live in front of thirty people is a slow way to lose fifteen minutes.

Materials

-   Projector, and whiteboard space for a running class tally.
-   A NotebookLM notebook pre-loaded with the course readings, shared read-only.
-   A printed citation packet for the offline fallback: some real, some fabricated.
-   A step-by-step verification checklist, one per seat, for the floor tier.
-   Somewhere durable to record the before-and-after fabrication numbers, because they are worth keeping across terms.

Teacher note

#### Accounts to pre-stage

-   NotebookLM runs on the free Google account staged back in Module 4. Confirm that account still works for anyone who has not touched it since.
-   Google Scholar and DOI lookup need no account, which is why the verification half is logistics-proof.
-   Have your own notebook ready to project, and a second one you can break on purpose.

#### Fifteen minutes before

-   Ask your own chatbot for a cited mini-essay and verify two of its citations, so you know tonight's failure mode before the room does.
-   Open the notebook and click one inline citation through to its passage. That click is the demo.
-   Open [Spot the Troll](https://spotthetroll.org/) and click past the intro screen.
-   Draw the tally on the board: valid, suspicious, fabricated, with room for a second row after the re-run.
-   Put the printed packets somewhere you can reach without announcing that the wifi died.

#### Wifi fallback

Printed citation packets, some real and some fabricated, verified against library terminals or phones. The verification race works fine on paper and the tally still happens, which is the part that teaches. The NotebookLM contrast is the block you lose, so move it to the next session's wander rather than cutting it.

#### Depends on earlier modules

-   **Module 1** 's predict-the-next-word demo is the mechanism behind everything tonight. Call back to it explicitly, the room will remember shouting words at a screen.
-   **Module 4** built the habit of checking a number against its source. Tonight is the same move pointed at a citation.
-   The privacy conversation started here feeds the policy students write in **Module 6** .
-   If Module 7 is looking heavy, this module's wander block is the natural place to pre-stage GitHub accounts.

### Student facing

## Materials

-   Access to a search engine and one AI assistant with browsing.
-   Access to a library database or an open citation index, for checking references.
-   Companion reading: [Elements of AI](https://www.elementsofai.com/), Chapter 3 (an independent free course; no affiliation).

## What they should walk out with

Big idea

It does not know it is making things up, because making things up and telling the truth are the same operation to it. So you check, every time, and tonight you find out how often you have to.

**Maps to job skills:** fact-checking and source verification · research synthesis (NotebookLM, Perplexity) · information governance, meaning what not to paste into public tools.

### Student facing

## Learning objectives

-   Explain how LLMs combine training data and live search to answer questions.
-   Define hallucination and recognize the situations where it is most likely.
-   Fact-check AI output using verification tools and primary sources.
-   Use AI as a research assistant without letting it write fiction into your work.

Teacher note

Rates, not anecdotes. "AI sometimes makes things up" is a warning nobody acts on. A number the room produced with its own hands, then cut with a better prompt, is a finding they will repeat to other people. Get the tally on the board and leave it there.

## Session timing

The three hours 0:00 – 3:10

| Time | Share | Block |
| --- | --- | --- |
| 0:00 – 0:10 |  | Warm-up: dataset chart share-out from the Module 4 homework. |
| 0:10 – 1:15 |  | Lecture: retrieval versus recall, why models fabricate, a five-minute fact-checking workflow. |
| 1:15 – 1:25 |  | Break. |
| 1:25 – 3:00 |  | **Lab: Trust, but verify.** Broken out below. |
| 3:00 – 3:10 |  | Wrap-up, worst-hallucination contest, and the homework handoff. |

Teacher note

The 15-minute mini-lesson is carved out of this module and teaches on its own. If you are ever asked to give a single taster session, that is the one to give, and it is already built.

### Student facing

## Session agenda

-   0:00 – 0:10
    
    **Warm-up**
    
    Dataset chart share-out.
    
-   0:10 – 1:15
    
    **Lecture: How LLMs search, hallucination risks, fact-checking**
    
    Training data vs. live retrieval; why models fabricate; a live hallucination hunt; a five-minute fact-checking workflow.
    
-   1:15 – 1:25
    
    **Break**
    
-   1:25 – 3:00
    
    **Lab: Trust but verify**
    
    Draft a short research brief with AI support; extract every factual claim and citation; verify them with search and citation-checking tools; score your AI's accuracy.
    
-   3:00 – 3:10
    
    **Wrap-up**
    
    Worst hallucination contest; preview ethics and bias.
    

The lab block, minute by minute 95 min, from 1:25

| Lab clock | Share | Activity |
| --- | --- | --- |
| 0:00 – 0:08 |  | Warm-up game: Spot the Troll, two profiles as a class. |
| 0:08 – 0:40 |  | **Hallucinated references (big rock):** verify, log, re-run constrained, count again. |
| 0:40 – 0:55 |  | Grounded versus open, then try to break the grounded one. |
| 0:55 – 1:20 |  | Wander block. The longest in the course, and this module earns it. |
| 1:20 – 1:30 |  | Spotlight sweep: best catch of the night. |

## The lab, activity by activity

Warm-up lab 0:00 – 0:08

### Spot the Troll

Two profiles from [Spot the Troll](https://spotthetroll.org/) as a class, votes taken before each reveal. It is fast, it is account-free, and it puts the room in a checking frame of mind before anybody opens a chatbot.

"Real or troll. Hands up. Now tell me what you looked at before you decided."

### 1\. The hallucinated references lab

lab 0:08 – 0:40 · solo, tallied as a class

Activity · big rock 32 min

### Measure your own fabrication rate, then cut it

Everyone prompts for a short cited piece on a topic they choose, asking for five academic references. Then they verify every citation through Google Scholar and a DOI lookup, logging each as valid, suspicious, or fabricated. Then they re-run with a source-constrained prompt and count again. The class-wide before and after goes on the board, and that tally is the reveal.

#### Launch script

"Pick a topic you actually know something about. Ask for five academic references. It will give you five, and they will look perfect."

"Nobody is grading your number. The number is the finding. Put it on the board honestly, including if it is zero."

Floor Stretch

Verify two references using the printed step-by-step checklist. Two carefully checked citations teach the habit as well as five rushed ones.

Test several prompt variants and quantify which one cuts fabrication most. Report the comparison to the room, it is the most useful ten seconds of the block.

### Student facing

## Overview

AI assistants sound confident even when they are wrong. This session looks under the hood at how LLMs retrieve and synthesize information, why hallucinations happen, and builds a practical fact-checking workflow. In lab you will draft research writing with AI support, then catch its fabricated citations.

Anticipated wrong turns

-   **Every citation checks out.** Happens more often now, especially with search-connected tools. Do not treat it as a failed lab. Ask what the tool did differently, and have them check whether the source actually says what was claimed, which is where the real failures have moved.
-   **"Suspicious" becomes a dumping ground.** Define it before they start: a real-looking record you could not find, versus one you positively confirmed does not exist.
-   **A real paper is filed as fabricated** because Scholar's first page did not have it. Show one recovery live, searching the exact title in quotes, before you trust the tally.
-   **The constrained re-run produces four references instead of five,** and someone calls that worse. It is better. Fewer and checkable beats five and confident.
-   **Somebody wants to argue that this proves the tools are worthless.** The tally answers that on its own: the rate went down when the prompt changed, and it did not go to zero.

Discussion, with the answers you are steering toward

#### "What did a fabricated citation look like?"

Plausible authors, a real journal, a believable year, a DOI with the right shape. It looks exactly like a real one, which is the entire problem.

#### "Why does the constrained prompt help?"

It changes what a good answer looks like to the model. It does not give it access to a library, which is why the rate drops instead of hitting zero.

#### "Where would this have cost you something?"

Take real answers: a paper, a client memo, a court filing in the news. Then the practical rule, said once: never pass on a citation you have not opened.

### 2\. Grounded versus open

lab 0:40 – 0:55 · pairs, on the shared notebook

Activity 15 min

### Ask both, then try to break the grounded one

Same question to an open chatbot and to NotebookLM loaded with the course readings. Compare the answers side by side, then click the inline citations back to the exact passage. Then the fun part: try to make the grounded tool answer beyond its sources and watch it decline.

#### Launch script

"Same question, two tools. One of them will show you the sentence it got that from. Click it. That click is the whole difference."

"Now break it. Ask it something that is not in there. Ten minutes, best attempt wins nothing at all."

Floor Stretch

Query the notebook the instructor loaded and follow two citations back to their passages.

Curate your own source set, including rejecting one source as unreliable and writing down why. The rejection is the exercise.

Anticipated wrong turns

-   **Grounded gets read as "cannot be wrong".** It can. It is faithful to its sources, and if a source is wrong the answer is wrong with a citation attached. Say this explicitly, it is the most common misread of the block.
-   **The break attempts succeed.** Great. Show one to the room and look at what it actually did: usually it reached for general knowledge and said so, or it stretched a passage further than the passage goes.
-   **The shared notebook hits a limit** with thirty simultaneous readers. Have a second copy, and be ready to run it as a projector demo with the room calling out questions.
-   **A pair spends the whole block curating sources** and never asks a question. Time-box the curation to five minutes.

Discussion, with the answers you are steering toward

#### "When would you reach for the grounded one?"

Anything that has to be right and has a defined source set: a policy, a contract, a set of readings, your own company's documents.

#### "When is the open one better?"

Thinking out loud, drafting, brainstorming, anything where you are the source of truth and it is the assistant.

#### "What did it feel like when it refused?"

Mildly annoying, and that is worth naming. A tool that declines is doing its job, and the tools that never decline are the ones to distrust.

### 3\. Lateral reading, modeled live

lab 0:55 onward · in the wander, or lifted into the lecture

Activity 15 min, flexible placement

### Leave the page

Think aloud at an unfamiliar website while the room watches: do not read down the page, open new tabs, search the organisation, find who is behind it, find better coverage. Then pairs race three sources, sixty seconds each, with a verdict and one reason. This is the highest-value information skill in the course and it fits either in the lecture block or in the wander, depending on how the tally ran.

#### Launch script

"Watch what I do not do. I am not reading this page. The page will tell me whatever it wants me to think."

"Sixty seconds per source. Verdict and one reason. Go."

Floor Stretch

Work through the ready-made Civic Online Reasoning exercises at your own pace.

Apply the same moves to a chatbot's cited source rather than to a webpage. Who published it, who funded it, does anyone independent agree?

Anticipated wrong turns

-   **Students read the About page and stop.** That is the site describing itself. Push them off the domain entirely.
-   **The race rewards speed over judgment.** Score the reason, not the verdict. A right answer with no reason gets no credit.
-   **A site is genuinely ambiguous.** Say so. "I could not tell in sixty seconds" is a legitimate and professional verdict.
-   **It gets political fast.** Pick your example sites in advance, and pick boring ones. The technique is the lesson, not the topic.

Discussion, with the answers you are steering toward

#### "What did you check first?"

The best answers leave the page immediately. Fonts, layout and a professional design tell you nothing at all.

#### "How is this different from what you normally do?"

Most people read down. Fact-checkers read across. That is the whole finding, and it is one sentence long.

## Spotlight sweep and the wander block

Spotlight sweep lab 1:20 – 1:30

Best catch of the night. Three or four students show their most convincing fabricated citation and how they caught it. The competitive framing works here: people want to show the good fake.

#### Prompts to hand the student showing

-   "Read it out. Would you have believed that?"
-   "What was the step that caught it?"
-   "How long did it take you to be sure?"

#### Prompts for the room

-   "Hands up if you would have accepted that in a paper."
-   "What did the tally change for you?"

Wander block menu lab 0:55 – 1:20

Twenty-five minutes, the longest in the course. This module produces genuine arguments, so let the discussion pods run and circulate through them.

-   **Lateral reading practice** at your own pace, from the Civic Online Reasoning exercises.
-   **Privacy-policy skim** of the tool you actually use: what is collected, who owns the input and output, does it train future models. Three questions, one document, fifteen minutes.
-   **Bad News or Cranky Uncle** stations, both account-free browser play.
-   **Discussion pods** on the tally. This is the pod that forms on its own, every time.
-   **Pre-stage a GitHub account** if Module 7 looks tight from here. It fits naturally in this wander and it takes Module 7 from crowded to comfortable.

## Synthesis, exit ticket, homework

Land it here

Prompting changed the rate. It did not remove the job. You still open the citation.

Synthesis, five minutes

Point at the two rows on the board and read them out. Then the worst hallucination contest, thirty seconds, whoever has the most confident wrong answer. Ending on a laugh is fine, the number stays on the board either way.

Exit ticket

One-minute paper: _what will you check from now on that you did not check before?_ Specific answers only. "Be more careful" does not count.

Homework handoff

Ten factual questions to an assistant about a topic they know well, scored, with the most convincing wrong answer kept for next session. That kept answer is the warm-up for Module 6, so make it clear it gets used.

Preview Module 6 in one sentence: next time we stop asking whether the output is true and start asking who it lands on.

### Student facing

## Homework

Pick a topic you know well and ask an AI assistant ten factual questions about it. Score its answers, and keep the most convincing wrong answer for the next session.

**Introduction to AI Tools**

A free, self-paced course guide by [Matthew Valancy](https://valpatel.com/). Free to learn from, free to teach from.

Independent and not affiliated with any school or institution. Free to learn from, free to teach from, free to fork. Source on [GitHub](https://github.com/mvalancy/lesson-plans).
