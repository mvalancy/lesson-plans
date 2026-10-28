> [HTML view](https://lessons.mattvalancy.com/intro-ai-tools/lessons/04-spreadsheets-data.teacher.html) · [Markdown index](https://lessons.mattvalancy.com/llms.txt). Generated from the same published source. Interactive controls and 3D scenes are available in the HTML view.

**Free and open** for anyone to learn or teach · [code on GitHub](https://github.com/mvalancy/lesson-plans)

**Teacher view** of a free course. Nothing here is hidden from students, it is just the version with the notes in it. [Student view](https://lessons.mattvalancy.com/intro-ai-tools/lessons/04-spreadsheets-data.html)

[Intro to AI Tools](https://lessons.mattvalancy.com/intro-ai-tools/)

Teacher view · Module 4 of 8

# AI and Data: Spreadsheets & Visualization

One 3-hour session · the lab is **Numbers with receipts** : the climate arc on real data, then everyone pulls their own county.

[Student view of this module](https://lessons.mattvalancy.com/intro-ai-tools/lessons/04-spreadsheets-data.html) · [named routines (teaching scaffold)](https://github.com/mvalancy/lesson-plans/blob/main/intro-ai-tools/activities/teaching-scaffold.md)

## Prep

Everything that has to be true before the room fills up. The files are the part that bites: government sites are slow when thirty machines hit them at once, so they get downloaded the day before, not during the lab.

Materials

-   Projector, and a browser window you are willing to show (log out of anything personal).
-   A shared folder or USB stick holding the data shelf files, pre-downloaded.
-   Lab machines with Google Sheets or Excel, one per pair.
-   Calculators or phones, because half of this session is checking arithmetic by hand.
-   Whiteboard space for two lists: what the AI caught, what it missed.

Teacher note

#### Accounts to pre-stage

-   The free Google account from earlier in the course covers Sheets today and NotebookLM next module. If somebody skipped it, get them set up in the first ten minutes, not at 0:20.
-   One chatbot account each (made back in Module 1). Free tiers differ on file upload, so check that the tool a student is using actually accepts a CSV before the lab block.
-   No new accounts are created today. That is deliberate, this lab is heavy enough.

#### Fifteen minutes before

-   Copy the shelf files into the shared folder and open one to confirm it is not an HTML error page.
-   Upload Mauna Loa annual CO₂ to your own chatbot once, so the first demo is not the first attempt.
-   Open [Guess the Correlation](https://www.guessthecorrelation.com/) in a tab and play one round to clear any first-load prompts.
-   Write the two column headings on the whiteboard: _caught_ and _missed_.
-   Put the wifi fallback USB stick on the desk where you can reach it.

#### Wifi fallback

Same files by USB, opened in local Sheets or Excel. The verification work is the point and it does not need the internet: the AI summary can come from a printed handout you generated earlier, and students check it against the rows in front of them. The lab survives, only the chart iteration gets slower.

#### Depends on earlier modules

-   **Module 1** gave everyone a chatbot account and the predict-the-next-word demo. Today is where that demo cashes out: an AI that recalls a number is guessing, an AI that computes one can show its work.
-   **Module 2** built the habit of iterating on a prompt instead of accepting the first answer.
-   **Module 3** ran the draw-a-scientist tally, so the room already knows how to argue about what a sample does and does not show.
-   This session sets up **Module 5** . The verification habit gets pointed at citations next time.

### Student facing

## Materials

-   A free Google account (Sheets), or any copy of Excel you already have access to.
-   Practice datasets provided with the module (enrollment, budgets), or any open dataset from your own town.
-   A calculator or your phone, for checking the AI's arithmetic.

## What they should walk out with

Big idea

A number you cannot check is a rumour. AI makes spreadsheet work much faster, and every claim it produces still has to meet the rows it came from.

**Maps to job skills:** spreadsheet analysis (Excel and Google Sheets) · data cleaning · data visualization · report auditing and fact-checking.

### Student facing

## Learning objectives

-   Use AI features in Excel/Google Sheets to build formulas and clean data.
-   Ask an AI assistant to analyze a dataset and summarize what it finds.
-   Generate charts with AI and evaluate whether they are honest and clear.
-   Spot the limits: when AI misreads data or invents patterns that are not there.

Teacher note

The objectives above are the student-facing wording. The one you are actually teaching to is narrower: by the end of the night every student has stated one statistic out loud that they verified with their own hands. If that happened, the session worked, even if the charts are ugly.

## Session timing

The three hours 0:00 – 3:10

| Time | Share | Block |
| --- | --- | --- |
| 0:00 – 0:10 |  | Warm-up: deepfake stories from the Module 3 homework. |
| 0:10 – 1:15 |  | Lecture: data literacy, AI in Excel and Sheets, what makes a chart honest. |
| 1:15 – 1:25 |  | Break. |
| 1:25 – 3:00 |  | **Lab: Numbers with receipts.** Broken out below. |
| 3:00 – 3:10 |  | Wrap-up and the homework handoff. |

Teacher note

Students see the same shape on their own page, so you can put either version on the projector. The lecture block is the one to guard: it wants to grow, and everything it takes comes out of the climate arc.

### Student facing

## Session agenda

-   0:00 – 0:10
    
    **Warm-up**
    
    Deepfake stories from homework, quick share.
    
-   0:10 – 1:15
    
    **Lecture: AI in Excel & Google Sheets**
    
    Data literacy essentials; Copilot in Excel and Gemini in Sheets; formula generation; what makes a chart honest.
    
-   1:15 – 1:25
    
    **Break**
    
-   1:25 – 3:00
    
    **Lab: Analyze a real dataset**
    
    Load a real dataset (e.g. student enrollment or a city budget), have AI clean it, answer questions about it, and generate charts, then verify the answers by hand.
    
-   3:00 – 3:10
    
    **Wrap-up**
    
    One chart per group on screen; preview research and hallucinations.
    

The lab block, minute by minute 95 min, from 1:25

| Lab clock | Share | Activity |
| --- | --- | --- |
| 0:00 – 0:05 |  | Warm-up game: Guess the Correlation, two rounds on the projector. |
| 0:05 – 0:20 |  | First look, together: Mauna Loa annual CO₂, and check what the AI said. |
| 0:20 – 0:50 |  | **The climate arc (big rock):** one chart plus one hand-verified statistic per pair. |
| 0:50 – 1:05 |  | Your county, your data. The fun peak. |
| 1:05 – 1:25 |  | Wander block. Unstructured on purpose, and it absorbs any block that ran long. |
| 1:25 – 1:35 |  | Spotlight sweep: three or four charts, one verified statistic each. |

Teacher note

Only about seventy-five of the ninety-five minutes are structured. The slack is not a mistake, it is the wander block, and it is where a survey course gets personal. If the climate arc runs long, let it, and take the time out of the wander.

## The lab, activity by activity

Warm-up lab 0:00 – 0:05

### Guess the Correlation

Two rounds of [Guess the Correlation](https://www.guessthecorrelation.com/) on the projector. You show a scatter plot, the room shouts a number, the game scores it. Play badly on purpose in round one.

"Your eyes are a statistics tool. They are a bad one. That is the whole reason we are going to check things tonight."

**First five minutes is a win:** nobody has to type anything, nobody has to log in, and the novices are already scoring points.

### 1\. First look at a new dataset

lab 0:05 – 0:20 · together, then pairs

Activity 15 min

### What is actually in this file?

The professional habit this module exists to teach: the first ten minutes with an unfamiliar CSV, with AI as the assistant and the human as the auditor. Upload Mauna Loa annual CO₂ (65 rows, the friendliest file in the course) and ask for a summary of columns, types, missing values, anything odd. Walk the answer together. Then pairs repeat on a second file and check the first and last rows by eye.

#### Launch script

"I have never seen this file before. Neither have you. Watch what I ask for first, because it is the same three questions every time: what are the columns, what range do they cover, and what looks wrong."

"It just told us the file starts in 1959. Somebody open the file and tell me whether that is true."

Floor Stretch

Run the provided prompt word for word, then read the first row and the last row out loud and say whether the summary matches. That is the whole task, and it is a real one.

Ask the AI to flag likely data-entry errors, then verify every claimed error by hand. Most of them will not be errors. Have the pair write down the false-positive rate they found.

### Student facing

## Overview

Spreadsheets are where most of the world's data actually lives. This session pairs basic data literacy (rows, columns, averages, and what a chart should honestly show) with the AI features built into Excel and Google Sheets, then uses AI assistants to analyze real datasets and generate charts.

Anticipated wrong turns

-   **The summary describes a file that is not there.** A model that cannot read the attachment will still answer, confidently, from the filename. This is the single best thing that can happen in the first fifteen minutes, so do not rescue it. Ask the room how we would have caught it.
-   **Nobody opens the rows.** The summary sounds right, so the checking step gets skipped. Make it a called-on task, not an invitation.
-   **The free tier will not take an upload.** Have a pasted-text version of the small file ready, 65 rows fits in a message.
-   **The file loads as one column.** Tab versus comma separated. Fix it once on the projector, it will come up again in the next block.

Discussion, with the answers you are steering toward

#### "What did the AI catch that you would have missed?"

Usually the shape: row count, date range, a column with gaps. It is fast and genuinely useful at describing structure.

#### "What did it miss?"

Meaning. It does not know that a -99.99 is a missing-value code, or that two columns are the same measurement from different instruments. Context is the part you bring.

#### "It said the average is 355 ppm. How would you check that?"

Take the answer you want out loud: a formula in the sheet, or the AI's own method shown as a formula. Never a number with no method attached.

### 2\. The climate arc

lab 0:20 – 0:50 · pairs, driver and navigator

Activity · big rock 30 min

### One chart, one statistic, both verified

Pairs pick a file from the data shelf and produce two things: one chart they can defend, and one statistic they checked by hand. The shelf is on the student side of the course under [the module's data shelf](https://github.com/mvalancy/lesson-plans/blob/main/intro-ai-tools/activities/04-spreadsheets-data.md), and the copies they use are the ones you pre-downloaded.

Driver and navigator, and swap at the halfway mark. The navigator's job is the checking, which means the less confident partner has real work that does not depend on typing speed.

#### Launch script

"Thirty minutes. Two deliverables. A chart, and one number you can prove. If you finish the chart in ten minutes you are not done, you are halfway."

"When it gives you a number, ask it for the formula. If it cannot show you the formula it did not compute, it remembered, and it is happy to remember wrong."

Floor Stretch

Take the annual CO₂ file, ask for a line chart, and verify one value against the row it came from. Sixty-five rows means the check is a scroll and a squint, which is exactly the point.

The baseline puzzle: NOAA reports one anomaly for 2016 and NASA reports another, and both are right because they use different reference periods. Find the two numbers, find the two baselines, and write one sentence explaining why a headline citing either is not lying.

Anticipated wrong turns

-   **The file is too big to upload.** The full per-country emissions file will not fit. Send them to the per-indicator file, or have them slim it in Sheets first. That filtering step is a real skill, so name it rather than treating it as a detour.
-   **A dramatic chart with a chopped axis.** Ask what the chart looks like starting at zero, then ask which version is more honest. There is a defensible answer either way for anomaly data, and arguing it is the lesson.
-   **The AI does the arithmetic freehand.** Trends and averages computed in prose are frequently wrong. Demand the method every time.
-   **Two sources disagree, so one must be lying.** This is the stretch puzzle arriving early. Take it, it is the best moment in the block.
-   **Charting everything, verifying nothing.** The most common failure. Circulate with one question: "which number here have you actually checked?"

Discussion, with the answers you are steering toward

#### "Your chart shows a rise. How much of that is the data and how much is the axis?"

Both, and that is fine as long as you can say which. An honest chart is one whose choices you can defend out loud.

#### "Two agencies, two numbers, same year. Who is wrong?"

Neither. Different baselines. Read the label before you read the number, every time.

#### "What would change your mind about this data?"

Push for something specific and checkable: a third independent source disagreeing, a break in the instrument record, a station that moved. Answers like "more research" do not count.

### 3\. Your county, your data

lab 0:50 – 1:05 · solo, then compare across the room

Activity · fun peak 15 min

### Pull your own hometown out of the file

Everyone finds their county in the unemployment file and the median-income file, then the room compares. Nothing in the course lands like a student's own zip code showing up in a government spreadsheet.

#### Launch script

"Find your county. Not a sample county, yours. Tell me one number about the place you live that you did not know when you walked in."

Floor Stretch

Filter to your county, read the most recent year, say the number out loud. One row, one fact.

Chart your county against the state across the whole series and say where the lines separate. Then check whether the income figures are comparable across years before you claim anyone got richer.

Anticipated wrong turns

-   **The county is not in the file.** The civic shelf leans on California open data. If your room is elsewhere, swap in your own state's portal before class, and expect at least one student from out of state either way. Pair them with someone local for the block.
-   **Name mismatches.** "St. Louis" versus "Saint Louis", counties with the same name in two states. A good five-minute lesson in why joining data is harder than it looks.
-   **Comparing dollars across decades.** Nobody adjusts for inflation unless you ask. Ask.
-   **Over-reading a small county.** A swing in a place with twelve thousand people is not the same finding as a swing in a place with two million.
-   **It gets personal.** Unemployment and income data can be somebody's actual life. Keep the framing on the county, never on the person, and let anyone opt into a different county without explaining why.

Discussion, with the answers you are steering toward

#### "Did the number match what it feels like to live there?"

Often not, and that gap is the interesting part. Data about people is a summary of people, and summaries drop things.

#### "Whose decisions does this file feed?"

Funding formulas, business siting, benefit thresholds. The income-limits file is a good one to name here: it decides what counts as low income for a family of four in your county.

## Spotlight sweep and the wander block

Spotlight sweep lab 1:25 – 1:35

Three or four students, thirty to sixty seconds each, chart on the projector. Scout them while you circulate, take volunteers first, then a gentle "that is great, will you show it?" tap. Never a cold call.

#### Prompts to hand the student showing

-   "Say your one verified statistic, and say how you checked it."
-   "What did the AI get wrong on the way here?"
-   "Why this chart type and not a different one?"
-   "What is the one thing this chart does not show?"

#### Prompts for the room

-   "Who else picked this dataset and got a different answer?"
-   "What would you want to see before you sent this to a boss?"

Wander block menu lab 1:05 – 1:25

Twenty unstructured minutes with both instructors circulating. Offer the menu, do not assign from it. It also doubles as the shock absorber when an earlier block runs long.

-   **Start the budget builder.** Mock transactions in, AI categorizes them, one total verified by hand. The highest buy-in thing in the module, because they will use it on Friday.
-   **Fact-check the narrative.** For teams who want a race: a confident AI-written report meets the dataset it claims to describe, and every numeric claim gets logged as supported, unsupported, or distorted.
-   **A second dataset,** chosen purely because it is interesting. Methane, sea level, life expectancy.
-   **The big-file exercise.** Download something too large to upload, slim it to twenty rows in Sheets, then upload the subset. Real analysts do this daily.
-   **Spurious Correlations** and the games shelf, for anyone who wants the warm-up game to keep going.
-   **The standing discussion:** what would change your mind about this data?

## Synthesis, exit ticket, homework

Land it here

AI computing is a path you can follow. AI recalling is a guess that reads like a fact. Ask which one you just got.

Synthesis, five minutes

Go back to the two whiteboard lists from the first block, _caught_ and _missed_, now that the room has three more hours of evidence. Add to both. The list of misses is the reason the checking habit exists, and it is much more persuasive in the students' own handwriting than in yours.

Exit ticket

Muddiest point, anonymous, one line on a slip or a form: _what is still unclear about checking a number?_ Rotate the format across sessions so it does not turn into homework theatre. Read them before you plan Module 5, since the fabricated-citation lab lands better when it answers something the room already asked.

Homework handoff

The half-page assessment goes home: their own conclusion, in their own words, citing their own chart and their own verified number. Say the agency line once and move on: the data is public, the judgment is theirs.

Preview Module 5 in one sentence: next time the thing being checked is a citation, and the fabrication rate is one the class measures itself.

### Student facing

## Homework

Find a small dataset about something you care about (sports, music, local data) and use AI to produce one chart and a three-sentence summary. Note anything you had to correct.

**Introduction to AI Tools**

A free, self-paced course guide by [Matthew Valancy](https://valpatel.com/). Free to learn from, free to teach from.

Independent and not affiliated with any school or institution. Free to learn from, free to teach from, free to fork. Source on [GitHub](https://github.com/mvalancy/lesson-plans).
