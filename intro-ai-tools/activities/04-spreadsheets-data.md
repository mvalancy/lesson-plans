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

## Real data shelf — verified government & open datasets

Direct-download files sized for chatbot upload and Sheets work, each verified live
(format and first data row checked, 2026-08-22). US-government files are public domain.
This shelf powers a **climate-centerpiece lab** that runs the module's whole skill arc
on one theme — and slots straight into a science interest track.

**The climate arc — one theme, four skills:**

1. **First look** → NOAA annual global temperature anomaly (146 clean rows — the
   friendliest first upload in the course), or Mauna Loa *annual* CO₂ (65 rows).
2. **Chart iteration** → NASA zonal anomalies: build the multi-line chart showing the
   Arctic warming faster than the globe; is the headline exaggerated?
3. **Fact-check the narrative** → NOAA says one number for 2016, NASA another — both
   right, *different baselines*. Same phenomenon, different number: why you always read
   the label. Add Berkeley Earth as the third independent source converging on the
   same trend.
4. **Hand-verify a statistic** → from raw Mauna Loa monthlies, confirm "CO₂ crossed
   400 ppm around 2013–2016"; from the sea-level file, compute a rough trend and compare
   to the stated 3.17 mm/yr.
5. **Write your own assessment** → the deliverable: a half-page conclusion in the
   student's own words, citing their own charts and verified numbers — *their*
   analysis, not the AI's and not the instructor's. (Agency: the data is public; the
   judgment is yours.)

| Dataset | Direct file | Size / shape |
|---|---|---|
| NOAA global temp anomaly, annual 1880– | [data.csv](https://www.ncei.noaa.gov/cag/global/time-series/globe/land_ocean/12/12/1880-2025/data.csv) | <5 KB · Year, °C departure |
| NASA GISTEMP monthly + annual | [GLB.Ts+dSST.csv](https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv) | <15 KB · Year, Jan–Dec, seasonal |
| NASA GISTEMP by latitude band | [ZonAnn.Ts+dSST.csv](https://data.giss.nasa.gov/gistemp/tabledata_v4/ZonAnn.Ts+dSST.csv) | <20 KB · Glob, NHem, SHem, bands |
| Mauna Loa CO₂ monthly 1958– | [co2_mm_mlo.txt](https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_mm_mlo.txt) | <60 KB · ppm, deseasonalized |
| Mauna Loa CO₂ annual | [co2_annmean_mlo.txt](https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_mlo.txt) | <5 KB · 65 rows — day-one friendly |
| Global methane monthly 1983– | [ch4_mm_gl.txt](https://gml.noaa.gov/webdata/ccgg/trends/ch4/ch4_mm_gl.txt) | <40 KB · ppb; plateau-then-rise story |
| Berkeley Earth global annual 1850– | [Land_and_Ocean_summary.txt](https://berkeley-earth-temperature.s3.us-west-1.amazonaws.com/Global/Land_and_Ocean_summary.txt) | <15 KB · anomaly + uncertainty *(educational use; cite Rohde & Hausfather 2020)* |
| CO₂ emissions per country (OWID) | [annual-co2-emissions-per-country.csv](https://ourworldindata.org/grapher/annual-co2-emissions-per-country.csv) | few hundred KB · Entity, Year, tonnes *(CC-BY — attribute)* |
| Global mean sea level, satellite 1992– | [slr_sla_gbl_free_all_66.csv](https://www.star.nesdis.noaa.gov/socd/lsa/SeaLevelRise/slr/slr_sla_gbl_free_all_66.csv) | <100 KB · mm anomaly per satellite era; teaches sparse columns |

*Instructor notes from verification:* EPA's climate-indicators pages currently 404
(section restructured or removed — re-check before class); the full OWID `co2-data.csv`
exceeds 10 MB — too big for one chatbot upload, use the per-indicator CSV above or
pre-filter in Sheets; NOAA's Tides & Currents per-station site is being retired after
Sept 2026 — the satellite altimetry file above replaces it.

**Civic data — life-relevant files** (jobs, income, health, population; swap the
California examples for your own state's open-data portal):

| Dataset | Direct file | Size / shape |
|---|---|---|
| US life expectancy & death rates 1900–2018 (NCHS) | [export.csv](https://data.cdc.gov/api/v3/views/w9j2-ggv5/export.csv?accessType=DOWNLOAD) | ~500 rows · by year, race, sex — "life expectancy always rises" is *false* (1918, 2020s): a built-in fact-check |
| Life expectancy, all countries 1960– (World Bank) | [CSV zip](https://api.worldbank.org/v2/en/indicator/SP.DYN.LE00.IN?downloadformat=csv) | ~88 KB zip · compare US vs. peers *(CC-BY)* |
| Inflation, all countries 1960– (World Bank) | [CSV zip](https://api.worldbank.org/v2/en/indicator/FP.CPI.TOTL.ZG?downloadformat=csv) | small zip · "is inflation at a record high?" fact-check *(CC-BY)* |
| US county population estimates 2020–2025 (Census) | [co-est2025-alldata.csv](https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/counties/totals/co-est2025-alldata.csv) | <1 MB · every county: births, deaths, migration — find the fastest-growing |
| County unemployment 1990–2024 (CA EDD) | [annual CSV](https://data.ca.gov/dataset/74b655ae-6158-41ab-81ef-a02984a17cc1/resource/0d49b0b6-a012-4041-82cb-acebd0d3e8b4/download/laborforceandunemployment_annual_202668.csv) | ~2,000 rows · trend your county vs. the state *(CC-BY)* |
| Median income by CA county (Franchise Tax Board) | [2023 B-6 CSV](https://data.ca.gov/dataset/7effd154-feda-4567-a3fe-af73e0931c45/resource/02ec81f7-2d3c-446d-a1a0-1387647d2d15/download/2023-b-6-comparison-by-county.csv) | 58 rows · where does your county rank? *(CC-BY)* |
| Income limits by county & household size (CA/HUD) | [2023 CSV](https://data.ca.gov/dataset/d56fc70f-5566-4030-8854-1ce72c93e100/resource/c8c8bee2-96a6-410f-b32a-2039de52ea12/download/2023-income-limits.csv) | tiny · what counts as "low income" for a family of 4 here vs. San Francisco — pairs with the budget builder |

**The big-file exercise** *(adapted — a lesson in itself)*: two valuable datasets are
deliberately too large for a chatbot upload — [CA employment & wages by industry/county
(QCEW)](https://data.ca.gov/dataset/quarterly-census-of-employment-and-wages-qcew) and
the [College Scorecard](https://collegescorecard.ed.gov/data/) (tuition, debt, and
post-grad earnings per college — the "does a degree from X pay off?" question students
actually have). The activity is the filtering: download, slim to your county or ~20
schools in Sheets, *then* upload the subset. Real analysts do this daily.

*Verification note:* bls.gov, fred.stlouisfed.org, and census.gov's interactive tools
block automated checkers (403 site-wide), so BLS wage tables and FRED series couldn't be
link-verified this session — they're likely fine in a browser; check manually before
citing in handouts.

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
