> [HTML view](https://lessons.mattvalancy.com/intro-ai-tools/lessons/02-everyday-productivity.teacher.html) · [Markdown index](https://lessons.mattvalancy.com/llms.txt). Generated from the same published source. Interactive controls and 3D scenes are available in the HTML view.

**Free and open** for anyone to learn or teach · [code on GitHub](https://github.com/mvalancy/lesson-plans)

**Teacher view** of a free course. Nothing here is hidden from students, it is just the version with the notes in it. [Student view](https://lessons.mattvalancy.com/intro-ai-tools/lessons/02-everyday-productivity.html)

[Intro to AI Tools](https://lessons.mattvalancy.com/intro-ai-tools/)

Teacher view · Module 2 of 8

# Generative AI for Everyday Productivity

One 3-hour session · the lab is **Say what you mean** : email triage, a personal agent started, and the prompt battle to close.

[Student view of this module](https://lessons.mattvalancy.com/intro-ai-tools/lessons/02-everyday-productivity.html) · [named routines (teaching scaffold)](https://github.com/mvalancy/lesson-plans/blob/main/intro-ai-tools/activities/teaching-scaffold.md)

## Prep

Light on logistics, heavy on material. The three emails and the bloated report have to be written before class, and they have to feel real. Generic filler produces generic drafts and the whole triage falls flat.

Materials

-   Projector, and a chatbot window big enough to read from the back.
-   Three prepared workplace emails of rising difficulty, printed and shared digitally.
-   One deliberately bloated ten-page document for the compression round.
-   A shared doc or a wall for pinning before-and-after prompt pairs.
-   Team numbers or table cards for the prompt battle.

Teacher note

#### Accounts to pre-stage

-   The chatbot account from Module 1 is all that is needed. Check in the first ten minutes that everybody actually has one working, because a few people will have signed up and never logged back in.
-   The personal-agent block needs an assistant with memory or custom instructions. Know which of the free tiers in your room supports that today, and have a fallback (a saved instructions block they paste at the top of a chat) for the ones that do not.
-   [mermaid.live](https://mermaid.live/) needs no account at all.

#### Fifteen minutes before

-   Run "write about dogs" once so you know exactly how bad tonight's version of bad is.
-   Open the three emails in tabs, in order, so you are not scrolling a folder mid-block.
-   Decide the prompt-battle challenge and write it on the board face down or covered.
-   Check the free tier's rate limit by sending a few messages fast. It sets how many battle entries a team gets.
-   Have your own two writing samples ready for the personal-agent demo, so you can model it with real text.

#### Wifi fallback

Triage works on paper. Print AI drafts of all three emails beforehand and have students hand-edit them, which is arguably the better version of the exercise anyway. The prompt battle becomes a write-off judged on the prompt alone, no output needed.

#### Depends on earlier modules

-   **Module 1** gave everyone an account and the predict-the-next-word demo. Tonight is where that turns into technique.
-   The personal agent started tonight runs the whole course. It picks up work in every later module and becomes the custom assistant build in **Module 7** , and it is a ready-made capstone.
-   **Module 3** reuses the iterate-do-not-accept reflex on image prompts.

### Student facing

## Materials

-   Notes or a document from another class (for the study-guide lab).
-   A current resume if you have one, or a job posting you like.
-   Companion reading: [Elements of AI](https://www.elementsofai.com/), Chapter 5 (an independent free course; no affiliation).

## What they should walk out with

Big idea

The first output is a draft, never an answer. Getting good at asking is the whole skill, and the best trick it buys you is compression.

**Maps to job skills:** prompt engineering · AI-assisted business writing · meeting documentation · process diagramming · professional email judgment.

### Student facing

## Learning objectives

-   Explain, at a conceptual level, how an LLM generates text one token at a time.
-   Use AI to summarize, rewrite, and translate real documents.
-   Write effective prompts: context, task, format, and iteration.
-   Cut a generated draft down to what the reader actually needs, and judge when shorter is the better answer.
-   Judge when AI drafting helps, and when it gets in the way or crosses academic-integrity lines.

Teacher note

Everyone should leave with drafts they would actually use and one before-and-after pair they can point at. The humanization line lands here and it lands once: send the one-pager somebody wanted, not the generated thousand words.

## Session timing

The three hours 0:00 – 3:10

| Time | Share | Block |
| --- | --- | --- |
| 0:00 – 0:10 |  | Warm-up: which chatbot did you pick, and why? |
| 0:10 – 1:15 |  | Lecture: text generation, summarization, translation, prompt structure. |
| 1:15 – 1:25 |  | Break. |
| 1:25 – 3:00 |  | **Lab: Say what you mean.** Broken out below. |
| 3:00 – 3:10 |  | Wrap-up and the homework handoff. |

### Student facing

## Session agenda

-   0:00 – 0:10
    
    **Warm-up**
    
    Homework debrief: which chatbot did you pick and why?
    
-   0:10 – 1:15
    
    **Lecture: Text generation, summarization, translation**
    
    How next-token prediction becomes useful writing; prompt structure; live demos on real documents.
    
-   1:15 – 1:25
    
    **Break**
    
-   1:25 – 3:00
    
    **Lab: Build your productivity kit**
    
    Create a study guide from your own course notes, draft or improve a resume, and try AI-assisted language practice.
    
-   3:00 – 3:10
    
    **Wrap-up**
    
    Trade one prompt that worked well, and one draft you cut in half; preview images, audio, and video.
    

The lab block, minute by minute 95 min, from 1:25

| Lab clock | Share | Activity |
| --- | --- | --- |
| 0:00 – 0:10 |  | Bad prompt, live: run it, mock it together, fix it one ingredient at a time. |
| 0:10 – 0:40 |  | **Email triage (big rock):** three envelopes of rising difficulty. |
| 0:40 – 0:55 |  | Start your personal agent: memory, custom instructions, two writing samples. |
| 0:55 – 1:15 |  | Wander block. Discussion pods form on their own here, let them. |
| 1:15 – 1:30 |  | Prompt battle: teams, one challenge, outputs projected, the room votes. |
| 1:30 – 1:35 |  | Micro-sweep: three students read one line their agent now knows about their voice. |

Teacher note

The battle is last on purpose. It is loud, it is fun, and nothing thoughtful survives after it. If you are running behind, cut the wander to ten minutes rather than shortening the triage.

## The lab, activity by activity

Warm-up lab 0:00 – 0:10

### Bad prompt, live

Run "write about dogs" on the projector. Read the result out in the most enthusiastic voice you can manage. Let the room mock it. Then add one ingredient per round, role, context, format, audience, re-running each time, and watch it turn into something usable.

"That is what most people's first prompt looks like, and that is why most people think these things are useless. Watch what four small changes do."

**First five minutes is a win:** nobody has to produce anything, they just have to have an opinion about writing, which everybody does.

### 1\. Email triage

lab 0:10 – 0:40 · together, then solo, then a pair swap

Activity · big rock 30 min

### Three envelopes, rising interpersonal difficulty

Email one, a routine status update, drafted together with a template prompt. Email two, pushing back on a boss's request, solo, then hand-edit the tone. Email three, apologising for a missed deadline, solo, then swap with a partner and ask the only question that matters: would you actually send this?

#### Launch script

"Everybody has sent an email they regretted. Tonight we find the exact line where this thing stops helping and starts sounding like a stranger wearing your name."

"Swap screens. Read your partner's apology. One question: would you send that, as you, to a person who is annoyed with you?"

Floor Stretch

Template prompts for all three emails, filled in with their own specifics. Three usable drafts is a full pass.

Take the sensitive one with no template at all, then write two sentences on exactly where the AI's tone went wrong and what you changed. That critique is the transferable part.

### Student facing

## Overview

Generative AI is at its best on the writing you already have to do: summarizing dense material, drafting and polishing documents, and translating between languages. This session covers how text generation actually works at a high level, then puts it to work on study guides, resumes, and language practice.

One discipline runs through the whole module: these tools make it trivially easy to produce more words, and more words are almost never the goal. Somebody has to read what you send. The win is the one-pager they actually wanted, produced in a quarter of the time, not the thousand-word report nobody asked for.

Anticipated wrong turns

-   **Every draft opens with "I hope this email finds you well."** Ban it out loud after the second one. It is the fastest way to show what a default sounds like.
-   **The apology over-apologises.** Models grovel. Ask whether the tone matches what actually happened, and let them cut it in half.
-   **Somebody pastes a real email with real names.** Catch it early and make it a teaching moment about what goes into a public tool, not a telling-off.
-   **The pushback email gets softened into agreement.** Very common, and worth stopping the room for. If the draft no longer disagrees, it failed at its only job.
-   **The confident writer refuses the whole exercise** ("I write my own emails"). Fine, and correct. Point them at the stretch tier: their job is to find and name where it goes wrong.

Discussion, with the answers you are steering toward

#### "Which of the three would you actually send unedited?"

Almost always only the status update. Drafting help scales with how little the relationship matters.

#### "What did you change by hand, and why?"

Usually tone, length, and one specific fact only they knew. That third one is the reason a human stays in the loop.

#### "Would you tell the recipient AI helped write it?"

No consensus, and do not force one. Just get people to state a rule they could defend. Module 6 turns this into a written policy.

### 2\. Start your personal agent

lab 0:40 – 0:55 · solo, then ongoing all course

Activity 15 min

### Teach it who you are and what you already know

Set up memory or custom instructions: who you are, what you already know well so it stops explaining the basics, what you are working toward. Then teach it your voice by pasting two things you have written and asking it to describe your tone, correcting the description until it is right. Test it by having it draft something and grading the draft.

#### Launch script

"This is the one thing tonight that gets better every week you keep it. By Module 7 it has a job. For some of you it becomes the capstone."

"Two guardrails. An assistant that only ever agrees with you is broken, so tell it to keep useful disagreement. And the fact that it has adapted to you does not make it right."

Floor Stretch

Fill in the provided instructions template and save it. Four lines about yourself is a real start.

Maintain it for the rest of the course. Every module feeds it, and by Module 7 it is a custom assistant with a defined job and written guardrails.

Anticipated wrong turns

-   **The free tier has no memory.** Give them the paste-at-the-top fallback and move on. The skill is writing the instructions, not the storage.
-   **The tone description is flattering nonsense.** "Warm yet professional" describes nobody. Push for something falsifiable: sentence length, contractions, whether they use exclamation points.
-   **Somebody writes their whole life story into it.** Remind them where that text lives. Two useful lines beat two pages.
-   **It agrees with everything immediately.** That is the guardrail arriving on schedule. Have them add the disagreement instruction and re-test.

Discussion, with the answers you are steering toward

#### "Did its description of your writing sound like you?"

Usually about seventy percent right and thirty percent generic. The correcting is the exercise.

#### "What did you decide not to tell it?"

Excellent question and worth a full minute. Whatever they held back is their own information-governance line, drawn before anyone taught them the term.

### 3\. Prompt battle

lab 1:15 – 1:30 · teams, then the room votes

Activity · fun peak 15 min

### Same challenge, competing prompts, public vote

Teams get one creative challenge and craft a persona or system prompt for it. Outputs go up side by side on the projector, the class votes, and the winning teams explain what made their prompt work. That explanation is the part that teaches, so do not let the vote be the last word.

#### Launch script

"One submission per team, because the free tier will cut us off otherwise. Spend the time on the prompt, not on rerolling."

"Winners, do not tell me it was better. Tell me which words did the work."

Floor Stretch

Contribute to the team prompt and vote. Being on a team that ships one prompt is participation enough.

Write the persona and the constraints separately, predict out loud what each will do before you run it, then check your prediction against the output.

Anticipated wrong turns

-   **Rate limits stop a team mid-battle.** The single most likely failure. One submission per team, said before they start, and keep your own account free as an emergency runner.
-   **One team dominates the vote every round.** Vote on the prompt with the outputs covered, at least once. It changes the result more often than you would expect.
-   **The winning explanation is "we just asked better".** Not good enough. Make them point at words.
-   **It runs long.** It always runs long. Two rounds maximum, and the micro-sweep still happens.

Discussion, with the answers you are steering toward

#### "What made the winner win?"

Specificity, a named audience, and a constraint. Almost never length.

#### "Would the winning prompt work tomorrow, on a different model?"

Partly. Structure travels, exact phrasing does not. Worth saying out loud, because prompt folklore spreads fast.

## Spotlight sweep and the wander block

Micro-sweep lab 1:30 – 1:35

Short tonight, because the battle already did the sharing. Three students each read one line their agent now knows about their voice. It takes two minutes and it makes the personal-agent thread feel real instead of like homework.

#### Prompts to hand the student showing

-   "Read me the one line you are proudest of."
-   "What did it get wrong about you at first?"
-   "Show the before and after of one email."

Wander block menu lab 0:55 – 1:15

Twenty minutes, both instructors circulating. Discussion pods form on their own in this module, which is a good sign. Do not break them up to enforce the menu.

-   **Make it shorter.** Take the bloated report, define the audience and the decision the reader has to make, and compress it to one page. Hand-verify every claim that survives. This is the humanization pillar as a task.
-   **Mermaid diagrams** at [mermaid.live](https://mermaid.live/): ask AI to flowchart your morning routine, paste, watch it render, then break one line of syntax on purpose and fix it. A gentle first taste of the edit, run, fix loop.
-   **Your resume,** one weak bullet at a time, watching for claims it invents on your behalf.
-   **Meeting notes to summary:** a messy transcript in, decisions and action items out.
-   **Anything you actually have to write this week.** Real work beats exercises, every time.

## Synthesis, exit ticket, homework

Land it here

The absurd version of this technology is one person inflating three bullets into ten pages so the recipient's AI can compress it back to three bullets. Send the three bullets.

Synthesis, five minutes

Two things trade hands: one prompt that worked, and one draft somebody cut in half. Put both on the wall or in the shared doc. The compression example is the one to read out loud.

Exit ticket

Plus and delta, anonymous: one thing that worked tonight, one thing to change. Rotate the format across modules so it stays honest rather than becoming a ritual.

Homework handoff

The study guide from their own notes goes home, annotated: three places the AI genuinely helped and one place it was wrong or generic. That annotation is the assessment, not the study guide.

Preview Module 3 in one sentence: next time we make things that look real, and then we get fooled by things that are not.

### Student facing

## Homework

Use AI to produce a study guide for a class you are taking now, then annotate it: mark three places the AI was genuinely helpful and one place it was wrong or generic.

**Introduction to AI Tools**

A free, self-paced course guide by [Matthew Valancy](https://valpatel.com/). Free to learn from, free to teach from.

Independent and not affiliated with any school or institution. Free to learn from, free to teach from, free to fork. Source on [GitHub](https://github.com/mvalancy/lesson-plans).
