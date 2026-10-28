> [HTML view](https://lessons.mattvalancy.com/intro-ai-tools/lessons/07-automation.teacher.html) · [Markdown index](https://lessons.mattvalancy.com/llms.txt). Generated from the same published source. Interactive controls and 3D scenes are available in the HTML view.

**Free and open** for anyone to learn or teach · [code on GitHub](https://github.com/mvalancy/lesson-plans)

**Teacher view** of a free course. Nothing here is hidden from students, it is just the version with the notes in it. [Student view](https://lessons.mattvalancy.com/intro-ai-tools/lessons/07-automation.html)

[Intro to AI Tools](https://lessons.mattvalancy.com/intro-ai-tools/)

Teacher view · Module 7 of 8

# Automation with AI Assistants

One 3-hour session · the lab is **Ship it** : a real GitHub account, a real page, a real URL, read out to the room.

[Student view of this module](https://lessons.mattvalancy.com/intro-ai-tools/lessons/07-automation.html) · [named routines (teaching scaffold)](https://github.com/mvalancy/lesson-plans/blob/main/intro-ai-tools/activities/teaching-scaffold.md)

## Prep

The hardest lab in the course to run, and the one nobody forgets. Thirty people create GitHub accounts and deploy a website in one evening. Read the pacing note below before you plan this one, because there is an honest chance it is too much for a single night.

Materials

-   Projector, and this course's own repository open next to the live site.
-   Task cards for the automate-or-keep-human sort, cut and shuffled, one set per group.
-   A template prompt for the single-page site, printed at every seat.
-   Two or three pre-made repositories students can be paired into if their account stalls.
-   A place to collect URLs live, because the roll-call needs them in one list.

Teacher note

#### Accounts to pre-stage

-   GitHub accounts are created in the lab, and email verification stalls for somebody every single time. Start accounts at lab 0:12 sharp, not later.
-   Better: pre-stage the GitHub account and the AI-drafted profile README in an earlier wander block. Module 5's wander fits it naturally, and it turns tonight from crowded into comfortable.
-   Keep two or three pair-up repositories ready for anyone still stranded at the halfway mark. Nobody sits out the URL roll-call.
-   Both instructors circulate hard during the build. This is the block where a second pair of hands pays for itself.

#### Fifteen minutes before

-   Deploy a one-page site yourself, start to finish, timing it. That number sets your expectations for the room.
-   Open the repository and the live page side by side, ready for the reveal.
-   Check the deploy path you are teaching still looks the way it did last term. These interfaces change.
-   Write the four-word rubric on the board: repeated, rule-guided, reviewable, reversible.
-   Open the URL collection sheet and put the link on the board.

#### Wifi fallback

There is no honest fallback for this one. The lab needs the internet. If the wifi is unreliable, swap this session with Module 6, which runs on account-free browser games and can absorb a bad night. Say that plainly to yourself when you plan the term.

#### Depends on earlier modules

-   **Module 2** 's personal agent grows up tonight into a custom assistant with a defined job.
-   **Module 5** 's wander block is the recommended place to have pre-staged the GitHub account.
-   **Module 6** gave them the language for what to keep human, which is exactly the card sort that opens the lab.
-   This module is the setup for the **capstone** . The URL created tonight is where the capstone project lives.

### Student facing

## Materials

-   Free Zapier account (or an equivalent no-code automation tool).
-   A repetitive task from your own life you would love to stop doing.

## What they should walk out with

Big idea

Automation does not fix a broken process, it produces bad output faster. Map the work first, automate one boring step, and keep the judgment.

**Maps to job skills:** workflow automation (Zapier, Make, n8n) · process mapping · custom AI assistant building · site deployment (GitHub or Cloudflare Pages) · automation judgment, meaning what to keep human.

### Student facing

## Learning objectives

-   Describe workflow automation in terms of triggers, actions, and conditions.
-   Use a no-code tool (e.g. Zapier) to connect two apps you already use.
-   Explain what AI copilots add on top of plain automation.
-   Judge which tasks deserve automation, and which need a human paying attention.
-   Build and test a simple AI-powered workflow end to end.

Teacher note

One outcome matters more than the rest: every student leaves with a live URL they own. That is the ownership commitment made literal, and it is the artifact the capstone showcase is built on. Everything else tonight is negotiable.

## Session timing

The three hours 0:00 – 3:10

| Time | Share | Block |
| --- | --- | --- |
| 0:00 – 0:10 |  | Warm-up: ethics case-study takeaways from the Module 6 homework. |
| 0:10 – 1:15 |  | Lecture: trigger and action thinking, a live Zapier build, copilots at work. |
| 1:15 – 1:25 |  | Break. |
| 1:25 – 3:00 |  | **Lab: Ship it.** Broken out below. |
| 3:00 – 3:10 |  | Wrap-up, and the capstone gets introduced. |

### Student facing

## Session agenda

-   0:00 – 0:10
    
    **Warm-up**
    
    Ethics case-study takeaways.
    
-   0:10 – 1:15
    
    **Lecture: Workflow automation, Zapier, and AI copilots**
    
    Trigger–action thinking; a live Zapier build; copilots in mail, docs, and code; when automation is worth it, and when it is fragile.
    
-   1:15 – 1:25
    
    **Break**
    
-   1:25 – 3:00
    
    **Lab: Automate a chore**
    
    Build a simple AI email assistant workflow, or automate a repetitive task from your own life; test it with real inputs and document what it does.
    
-   3:00 – 3:10
    
    **Wrap-up**
    
    Demo two builds; introduce the capstone project.
    

The lab block, minute by minute 95 min, from 1:25

| Lab clock | Share | Activity |
| --- | --- | --- |
| 0:00 – 0:12 |  | Automate versus keep human, fast: card sort, then the four-word rubric. |
| 0:12 – 1:00 |  | **Ship a real website (big rock):** the reveal, accounts, build, deploy. |
| 1:00 – 1:10 |  | URL roll-call. Five seconds each, applause mandatory. |
| 1:10 – 1:30 |  | Wander block. Also the safety net for anyone whose deploy is still fighting them. |
| 1:30 – 1:35 |  | Micro-sweep: two best bot-breaks, and what instruction was missing. |

Teacher note · the pacing escape hatch

If this feels like too much for one night, it might be. Two ways out, both honest. Pre-stage the GitHub account and profile README in Module 5's wander, so tonight is purely build and deploy. Or let the deploy spill into the capstone kickoff's open work time, which is a wander block anyway. The module itself is not negotiable, the pacing is.

## The lab, activity by activity

Warm-up lab 0:00 – 0:12

### Automate or keep human, fast

Groups sort about fifteen task cards into automate, AI assists with a human approving, and fully human. Meeting summary, hiring decision, customer refund, medical advice, condolence email. Argue the condolence card, it splits every room. Land the rubric: automate what is repeated, rule-guided, reviewable and reversible, and keep humans on anything touching money, health, law or feelings.

"Somebody defend automating the condolence email. Seriously, make the case."

**First five minutes is a win:** no device, no account, and everybody already has opinions about which parts of their job are boring.

### 1\. Ship a real website

lab 0:12 – 1:00 · solo, both instructors circulating

Activity · big rock 48 min

### The reveal, an account, a page, a URL

Open with the reveal: this course's site is a public repository served by Cloudflare Pages. Show the repository and the page side by side, "the page you are reading is this folder". Then everybody creates a GitHub account, framed as a social media profile for code, with an AI-drafted profile README. Then AI writes a single-page site from the template prompt, and it gets deployed: GitHub Pages as the floor, Cloudflare Pages as the stretch.

#### Launch script

"This site you have been reading for six weeks. Here it is. That folder is that page. There is no secret layer."

"Accounts now, all together, because verification emails take a few minutes and I would rather we all wait at the same time."

"If you are stuck for more than three minutes, hand up. There are two of us and there is no prize for struggling quietly."

Floor Stretch

A template-prompted landing page, deployed to GitHub Pages with step-by-step help. A live URL is a full pass, however plain the page.

Deploy through Cloudflare Pages, hang a real project off the page, and have the custom domain conversation. Then help a neighbour, which is the real stretch task in this block.

### Student facing

## Overview

The real payoff of AI tools is making the boring parts of life run themselves. This session covers workflow automation (triggers, actions, and glue tools like Zapier), plus the AI copilots showing up inside everyday software. In lab, you will build a working automation, such as an AI email assistant.

Pick your targets carefully. The right things to automate are the ones that eat time without deserving it: sorting, formatting, chasing, copying between apps. The wrong things to automate are the parts where a person is supposed to be paying attention to another person. Every hour you claw back here is an hour you can spend on the second kind.

Anticipated wrong turns

-   **Email verification stalls.** The single most predictable failure of the night. It is why accounts start at 0:12 and why the pair-up repositories exist.
-   **The page deploys but shows a 404** for a few minutes. Normal, and worth saying before it happens, or half the room will conclude they broke it.
-   **The AI writes a page with a broken tag** and the layout collapses. Good moment: this is the edit, run, fix loop from the Mermaid activity, at a slightly larger size.
-   **Somebody puts their home address on a public page.** Say it once at the start: this is public, and public means public.
-   **A confident student is finished in eight minutes** and gets bored. Their stretch task is helping, and say so directly rather than hoping.
-   **The repository interface has changed since you last taught this.** Which is why you deployed one yourself fifteen minutes ago.

Discussion, with the answers you are steering toward

#### "Who owns that page now?"

They do. It is their account, their files, and they can move it. That is the ownership commitment in a sentence, and it lands better here than anywhere else in the course.

#### "What is a repository, in plain words?"

A folder with a history and a public address. Do not go further tonight.

#### "Where does this go next?"

The capstone. Every project ships as a URL, and the showcase ends with a link wall.

### 2\. URL roll-call

lab 1:00 – 1:10 · the whole room, five seconds each

Activity · fun peak 10 min

### Every site on the projector, applause mandatory

One after another, five seconds each. Name and URL, that is it. Nobody explains, nobody apologises for their page. Applause after every single one. It takes ten minutes and it is the moment students describe when they talk about this course a year later.

#### Launch script

"Five seconds each. Your name, your URL. No apologies, nobody says 'it's not finished'."

"Clap for every one of them. Every person in this room has a website tonight that did not exist this morning."

Floor Stretch

Say your URL out loud while it is on screen. That is the whole ask.

Add one sentence about what you would put there next. It plants the capstone without a single slide about the capstone.

Anticipated wrong turns

-   **Somebody's page is not up yet.** Put them on a pair-up repository during the wander and give them the roll-call slot at the very end. Nobody is skipped.
-   **It turns into presentations.** Hold the five seconds. Momentum is the whole effect.
-   **Self-deprecation spreads.** The first person sets the tone, so pick a confident volunteer to go first and cut the apologies before they start.
-   **Typing thirty URLs eats the block.** Collect them in a shared sheet during the build, then click down the list.

### 3\. Give your agent a real job

lab 1:10 onward · in the wander, pairs try to break each other's

Activity 20 min, in the wander

### Build it, then let a neighbour break it

The personal agent from Module 2 gets a defined job: a customer-reply drafter with tone rules, a meal planner with real constraints, a study-guide maker, a quote-request responder. Then swap seats and try to break a neighbour's bot, noting exactly which instruction was missing. That break report is the deliverable, not the bot.

#### Launch script

"Instructions only, no code. Tell it who it is, what it does, and what it must never do."

"Now swap. Break your neighbour's. Do not be gentle, you are doing them a favour."

Floor Stretch

Fill in the template instructions with your own specifics and run it once on a real task.

Add knowledge files, then fix every edge case your neighbour found and write down the rule you added for each. That is an agent spec, and it is what ops teams actually write.

Anticipated wrong turns

-   **The instructions are one line long.** A bot with no constraints does whatever the last message said. The break test exposes this in about ten seconds, which is why the break test exists.
-   **Breaking becomes a competition to be rude.** Redirect to useful breaks: ambiguous requests, out-of-scope questions, contradictory instructions.
-   **Nobody can break it** because the task is too narrow to fail. Ask them to widen it until it does.
-   **The free tier does not support custom bots.** The saved instructions block from Module 2 still works. Same skill, less packaging.

Discussion, with the answers you are steering toward

#### "What instruction was missing?"

Almost always a scope boundary or a refusal rule. Writing down what a tool must not do is most of the job.

#### "What did you deliberately not automate, and why?"

The question this whole module is built around. Push for a real reason, not "it seemed hard". Money, health, law, feelings.

## Spotlight sweep and the wander block

Micro-sweep lab 1:30 – 1:35

Two best bot-breaks. Short, because the roll-call already did the big share. The question is always the same one: what instruction was missing?

#### Prompts to hand the student showing

-   "Read the message that broke it."
-   "What rule did you add afterwards?"
-   "Would that rule have been obvious before you saw the break?"

Wander block menu lab 1:10 – 1:30

Twenty minutes, and tonight a good chunk of it is a safety net. Anyone whose deploy is still fighting them gets it fixed here, with a pair-up repository if needed.

-   **Give your agent a real job** and let a neighbour break it. The main wander activity tonight.
-   **Extend your site:** a second page, a project link, your profile README pointing at it.
-   **Agent Breaker** and the games shelf, for anyone who enjoyed breaking things more than building them.
-   **A three-minute Zapier starter:** one trigger, one action, done. Starred mail to a task list is the reliable one.
-   **Map your workflow,** which also goes home: tag every step as draft-able, watch-able, flag-able, or not automatable.
-   **Rescue duty,** for anyone whose URL is not live yet.

## Synthesis, exit ticket, homework

Land it here

Automate the drudgery so the attention goes to people. The line you can defend in an interview is worth more than the automation you built.

Synthesis, five minutes

Two builds demonstrated, then the capstone is introduced properly. The URL wall from tonight is the natural bridge: whatever they make next lives at an address they already own. Show the brief's five slots and stop there, the kickoff session does the rest.

Exit ticket

Plus and delta, plus one line: _what is one task you will never automate?_ Collect these, they make a good opening slide for the capstone kickoff.

Homework handoff

The capstone idea in a paragraph: what they will build, who it is for, and which tools from the course they will use. Plus the workflow map if it did not get finished in the wander. Tell them plainly that the paragraph is what gets approved in the five-minute conversation at kickoff, so a vague one costs them time later.

### Student facing

## Homework

Sketch your capstone project idea in a paragraph: what you will build or make with AI, who it is for, and which tools from the course you will use. Bring it into Module 8.

**Introduction to AI Tools**

A free, self-paced course guide by [Matthew Valancy](https://valpatel.com/). Free to learn from, free to teach from.

Independent and not affiliated with any school or institution. Free to learn from, free to teach from, free to fork. Source on [GitHub](https://github.com/mvalancy/lesson-plans).
