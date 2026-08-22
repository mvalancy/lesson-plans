# Activity ideas: Module 4 — AI and Data: Spreadsheets & Visualization

Part of the [activity idea library](../ACTIVITY_CONCEPTS.md). The lab should feel like
*competence with a conscience*: AI makes spreadsheet work dramatically easier, and every
number still gets verified — because data about people *is* people.

**Maps to job skills:** spreadsheet analysis (Excel/Google Sheets) · data cleaning ·
data visualization · report auditing / fact-checking

## Start here — the picks

### 1. First look at a new dataset `[show→assist]` · 25 min

The professional habit this module exists to teach: the first ten minutes with any
unfamiliar CSV, done with AI as the assistant and the human as the auditor.

**Run it:**
1. Instructor uploads a messy CSV to a chatbot: "Summarize this dataset — columns,
   types, missing values, anything odd." Walk through the answer together (10 min).
2. Pairs repeat on a second dataset, then verify by actually looking at the first and
   last rows — did the AI describe the file that's really there? (15 min)
3. Whiteboard two lists: what the AI caught, what it missed.

**Floor:** the provided prompt, verbatim.
**Stretch:** ask the AI to flag likely data-entry errors, then verify each claimed error
by hand.
**They walk away with:** a reusable first-ten-minutes data-audit ritual for any
spreadsheet job.
Source: [Wharton AI & Analytics guide](https://ai-analytics.wharton.upenn.edu/uncategorized/exploring-data-with-chatgpt-a-step-by-step-guide/)

### 2. Household budget builder `[solo]` · 30 min

The highest-buy-in lab in the course: students build something they'll use Friday.

**Run it:**
1. Paste mock bank transactions into a sheet; have AI categorize them into budget
   categories (10 min).
2. Total each category with a SUMIF the AI suggests — then verify one total by hand,
   because the verification habit applies to your own money too (10 min).
3. Chart the spending and write one sentence: what surprised you? (10 min)

**Floor:** the provided mock transaction list.
**Stretch:** your own (anonymized) statements, custom categories, a monthly-trend tab.
**They walk away with:** a working personal budget and the verified-number habit.
Source: [thebricks.com budget guide](https://www.thebricks.com/resources/how-to-make-a-family-budget-in-spreadsheets-with-ai)

### 3. Fact-check the data narrative `[assist teams]` · 30 min

The module's synthesis and best closer: an AI-written report meets the raw data it
claims to describe.

**Run it:**
1. Teams receive a confident AI-generated narrative — "Sales grew 40% in Q2, driven by
   the Northeast" — plus the actual dataset (5 min).
2. Verify every numeric claim against the data; log each as supported, unsupported, or
   distorted (15 min).
3. Teams report; reveal the planted errors — the stretch tier's narrative hides a
   correlation stated as causation (10 min).

**Floor:** a short three-claim narrative.
**Stretch:** longer narrative with subtler distortions.
**They walk away with:** the exact skill of reviewing an AI-drafted report before it
reaches a boss or client.
Source: [Project Pals fact-check challenge](https://projectpals.com/post/ai-fact-checking-101-teaching-students-to-verify-not-just-trust/)

### 4. Show your work: code-verified numbers `[assist]` · 15 min

A repeatable audit ritual, not a one-off activity — introduce it here, use it forever.

**Run it:**
1. Whenever AI reports a statistic, demand the method: "show the formula or code you
   used."
2. Recompute one value by hand or with a plain spreadsheet formula.
3. Compare, and discuss the difference between AI *computing* (verifiable path) and AI
   *recalling* (freehand arithmetic that lies fluently).

**They walk away with:** a data-verification checklist item — "never trust a number
without its method."
Source: [NC State "Colab and Chill"](https://www.lib.ncsu.edu/workshops/colab-and-chill-vibe-coding-approach-exploratory-data-analysis-using-ai/2026-03-12)

## Full menu

| Activity | Stage | The gist | Source |
|---|---|---|---|
| **Messy-to-clean data sprint** | `assist→solo` | A deliberately messy CSV (mixed dates, dupes, "Mumabi") meets a chain of cleaning prompts. Stretch: one "clean and explain each change" prompt. | [Juno School](https://www.junoschool.org/article/chatgpt-prompts-data-cleaning/) |
| **Natural-language formula race** | `show→solo` | Describe "total sales by region" in plain English to Copilot/Gemini; check against a hand-written formula. | [Gemini in Sheets](https://workspace.google.com/resources/spreadsheet-ai/), [GoSkills](https://www.goskills.com/excel/resources/copilot-prompts-excel) |
| **One-prompt PivotTable** | `assist` | Natural-language pivot request, then explain in your own words what it grouped and why. | [Noble Desktop](https://www.nobledesktop.com/learn/ai/making-pivot-tables-in-excel-easier-with-microsoft-copilot), [Microsoft](https://support.microsoft.com/en-us/excel/copilot/visualize-your-data-with-copilot-in-excel) |
| **Merge-and-verify lab** | `assist pairs` | AI merges two related CSVs; verify row counts before/after. Merges get audited, not trusted. | [Wharton guide](https://ai-analytics.wharton.upenn.edu/uncategorized/exploring-data-with-chatgpt-a-step-by-step-guide/) |
| **No-code charting with a chatbot** | `show→solo` | Upload data, iterate: line chart, sort, title. Stretch: justify the chart-type choice. | [Duke CDVS](https://oie.duke.edu/event/cdvs-workshop-visualizing-data-chatgpt-02-18-2026/) |
| **Code-generation guardrail EDA** | `assist→solo` | AI *writes and runs code* for stats instead of computing "in its head." Stretch: read and modify the code. | [NC State](https://www.lib.ncsu.edu/workshops/colab-and-chill-vibe-coding-approach-exploratory-data-analysis-using-ai/2026-03-12) |
| **PARTS framework for data asks** | `assist` | Persona/Aim/Recipients/Theme/Structure; bare vs. structured prompt side by side. | [NC State](https://www.lib.ncsu.edu/workshops/colab-and-chill-vibe-coding-approach-exploratory-data-analysis-using-ai/2026-03-12) |
| **Survey results debrief** | `solo` | Run an in-class survey (PII stripped); AI does stats + sentiment + 3–5 trends. | [AI for Education](https://www.aiforeducation.io/prompts/analyze-survey-data) |
| **"What does AI get wrong?" hunt** | `assist→solo` | Real captured cases of AI-fabricated data; cross-check against authoritative sources. Stretch: mixed true/false batch. | [UMD Libraries](https://lib.guides.umd.edu/AI/what-AI-gets-wrong) |
| **Spot-the-error challenge** | `assist teams` | AI data summary with 2–3 planted numerical errors; find, cite evidence, correct. | [Project Pals](https://projectpals.com/post/ai-fact-checking-101-teaching-students-to-verify-not-just-trust/) |
| **AI vs. manual formula duel** *(adapted)* | `show→assist` | Half write the formula, half describe it to Copilot; compare speed, accuracy, failure modes. | — |
| **No-code dashboard build** | `solo` | CSV into a plain-English dashboard tool; one page answering 3 business questions. | [AnalyzeData](https://analyzedata.io/blog/best-ai-for-analyzing-data) |
| **Sports stats with AI** | `assist` | Derive OBP / shooting % + a heat map; hand-verify one calculation. Stretch: collect your own in-class data. | [EVERFI](https://everfi.com/blog/k-12/bringing-sports-data-analytics-into-your-classroom/) |
| **Dual-audience chart explanation** *(adapted)* | `assist` | Explain one chart twice: "I'm new to this" vs. an executive summary. Stretch: does the summary overstate? | — |
| **Category standardization** | `assist` | AI groups inconsistent free-text (job titles, cities); spot-check 5 rows. Stretch: critique AI's own scheme. | [Juno School](https://www.junoschool.org/article/chatgpt-prompts-data-cleaning/) |
| **Field-extraction mini-lab** | `solo` | Parse loosely structured text columns into clean fields — the re-entry work AI does well. | [Juno School](https://www.junoschool.org/article/chatgpt-prompts-data-cleaning/) |

More playables for this module: the [games shelf](../ACTIVITY_GAMES.md#module-4--spreadsheets--data-statistics-intuition-people--numbers)
(Guess the Correlation, Spurious Correlations, Seeing Theory).

> **Living document:** each module file stands alone and grows over time as new ideas
> are researched. Keep the entry format, verify every link is live, mark inventions as
> *(adapted)*, prefer low floor + high ceiling + a workplace or community tie-in.
