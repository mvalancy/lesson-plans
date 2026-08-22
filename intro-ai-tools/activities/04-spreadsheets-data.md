# Activity ideas: Module 4 — AI and Data: Spreadsheets & Visualization

Part of the [activity idea library](../ACTIVITY_CONCEPTS.md) — brainstorming
material, not finished lesson plans. Scaffold tags, floor/stretch notes, and the
three pillars (agency · ownership · humanization) are defined in the top-level map.

> **Deepening this file:** each module file is independent so a research agent can
> go deep on one lesson at a time. When adding ideas: keep the entry format, verify
> every link is live, mark inventions as *(adapted)*, and prefer activities with a
> low floor, a high ceiling, and a workplace or community tie-in.


- **Messy-to-clean data sprint** `[assist→solo]` — Paste a deliberately messy CSV (mixed
  dates, dupes, "Mumabi") into a chatbot; chain of cleaning prompts. Floor: printed prompt
  sequence. Stretch: one "clean this and explain each change" prompt. [Juno School cleaning prompts](https://www.junoschool.org/article/chatgpt-prompts-data-cleaning/)
- **Natural-language formula race** `[show→solo]` — Describe "total sales by region" in
  plain English to Copilot/Gemini; check against a hand-written formula. [Gemini in Sheets](https://workspace.google.com/resources/spreadsheet-ai/), [GoSkills Copilot prompts](https://www.goskills.com/excel/resources/copilot-prompts-excel)
- **One-prompt PivotTable challenge** `[assist]` — Natural-language pivot request, then
  explain in your own words what it grouped and why. [Noble Desktop](https://www.nobledesktop.com/learn/ai/making-pivot-tables-in-excel-easier-with-microsoft-copilot), [Microsoft Support](https://support.microsoft.com/en-us/excel/copilot/visualize-your-data-with-copilot-in-excel)
- **CSV upload & auto-profile ("first look")** `[show→assist]` — "Summarize this dataset:
  columns, types, missing values, stats"; inspect head/tail rows. The first-10-minutes-with-a-new-dataset habit. [Wharton AI & Analytics guide](https://ai-analytics.wharton.upenn.edu/uncategorized/exploring-data-with-chatgpt-a-step-by-step-guide/)
- **Merge-and-verify lab** `[assist pairs]` — AI merges two related CSVs; students verify
  row counts before/after. AI merges get audited, not trusted. [Wharton guide](https://ai-analytics.wharton.upenn.edu/uncategorized/exploring-data-with-chatgpt-a-step-by-step-guide/)
- **No-code charting with a chatbot** `[show→solo]` — Upload data, iterate: "make it a
  line chart," "sort descending," "add a title." Stretch: justify the chart-type choice.
  [Duke CDVS workshop](https://oie.duke.edu/event/cdvs-workshop-visualizing-data-chatgpt-02-18-2026/)
- **Code-generation guardrail EDA** `[assist→solo]` — Have AI *write and run code* for
  stats/charts instead of computing "in its head" — trust the verifiable path. Floor: run
  and read. Stretch: read and modify the code. [NC State "Colab and Chill"](https://www.lib.ncsu.edu/workshops/colab-and-chill-vibe-coding-approach-exploratory-data-analysis-using-ai/2026-03-12)
- **PARTS prompt framework for data requests** `[assist]` — Persona/Aim/Recipients/Theme/
  Structure applied to a data question; bare vs. structured prompt side by side. [NC State](https://www.lib.ncsu.edu/workshops/colab-and-chill-vibe-coding-approach-exploratory-data-analysis-using-ai/2026-03-12)
- **Survey results debrief** `[solo]` — Run an in-class survey, strip PII, then AI does
  descriptive stats + sentiment on open-ended answers + 3–5 trends. Workplace: HR/
  marketing survey analysis. [AI for Education prompt](https://www.aiforeducation.io/prompts/analyze-survey-data)
- **Household budget builder** `[solo]` — Three-tab budget; AI categorizes (mock) bank
  transactions; SUMIF totals; spending chart. High personal buy-in. Stretch: your own
  anonymized data. [thebricks.com budget guide](https://www.thebricks.com/resources/how-to-make-a-family-budget-in-spreadsheets-with-ai)
- **"What does AI get wrong?" data error hunt** `[assist→solo]` — Real captured cases of
  AI fabricating data (invented match results, fake titles); cross-check against
  authoritative sources. Stretch: mixed true/false batch to sort. [UMD Libraries](https://lib.guides.umd.edu/AI/what-AI-gets-wrong)
- **Spot-the-error corrected-version challenge** `[assist teams]` — AI data summary with
  2–3 planted numerical errors; find, cite evidence, produce the corrected version.
  Workplace: reviewing AI-drafted reports before they reach a client. [Project Pals](https://projectpals.com/post/ai-fact-checking-101-teaching-students-to-verify-not-just-trust/)
- **AI vs. manual formula duel** `[show→assist]` *(adapted)* — Half the class writes the
  formula, half describes it to Copilot; compare speed, accuracy, failure modes — "when
  do I still need to know the formula?"
- **No-code AI dashboard build** `[solo]` — Upload a CSV to a plain-English dashboard tool;
  one-pager answering 3 business questions. Stretch: add a 4th question of your own.
  [AnalyzeData roundup](https://analyzedata.io/blog/best-ai-for-analyzing-data)
- **Sports stats with AI** `[assist]` — Derive OBP/shooting % from a small dataset +
  heat map; hand-verify one calculation. Stretch: collect your own in-class data first
  (free throws). [EVERFI sports analytics](https://everfi.com/blog/k-12/bringing-sports-data-analytics-into-your-classroom/)
- **Dual-audience chart explanation** `[assist]` *(adapted)* — Explain one chart twice:
  "I'm new to this" vs. one-paragraph executive summary; stretch: critique whether the
  exec summary overstates the finding.
- **Code-verified number check** `[assist]` — After AI reports a statistic, require the
  formula/code behind it and recompute one value by hand. A repeatable audit checklist.
  [NC State Colab and Chill](https://www.lib.ncsu.edu/workshops/colab-and-chill-vibe-coding-approach-exploratory-data-analysis-using-ai/2026-03-12)
- **Category standardization challenge** `[assist]` — AI groups inconsistent free-text
  (job titles, cities) into clean categories; spot-check 5 rows. Stretch: let AI propose
  the scheme and critique it. [Juno School](https://www.junoschool.org/article/chatgpt-prompts-data-cleaning/)
- **Field-extraction mini-lab** `[solo]` — Parse loosely structured text columns into
  clean fields; the light "structuring" work that used to be manual re-entry. [Juno School](https://www.junoschool.org/article/chatgpt-prompts-data-cleaning/)
- **AI fact-check challenge, data edition** `[assist teams]` — AI-generated narrative
  ("Sales grew 40%, driven by the Northeast") + the raw data; verify every numeric claim,
  flag the unsupported. Stretch tier hides correlation-as-causation. Good module closer.
  [Project Pals](https://projectpals.com/post/ai-fact-checking-101-teaching-students-to-verify-not-just-trust/)

