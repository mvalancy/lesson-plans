# lessons.mattvalancy.com

Central hub for course, study, and lesson material by
[Matthew Valancy](https://valpatel.com).

Live site: **<https://lessons.mattvalancy.com>**

The first course is **Introduction to AI Tools** — a free, self-paced guide
to using, understanding, and owning AI tools, written for people with no
coding background. The hub also links out to the
[Mr-Cal robot sensor calibration guide](https://cal.valpatel.com/).

> **Free to learn from, free to teach from.** The course is a standalone
> public guide: eight modules, complete lesson plans, no enrolment and no
> institution behind it. Every page under `intro-ai-tools/` says so at the
> top. Independent, and not affiliated with any school.

Three ideas run through it: **agency** (whether to use these tools, not just
how), **ownership** (capable models already run on consumer hardware — be an
owner, not a customer), and **humanization** (automate the drudgery so human
attention goes to humans).

## Layout

```mermaid
flowchart TD
    ROOT["index.html<br/>hub: courses and guides"]
    ROOT --> C40["intro-ai-tools/<br/>the course"]
    ROOT -.->|"external link"| CAL["cal.valpatel.com<br/>Mr-Cal guide"]

    C40 --> OV["index.html<br/>overview + schedule"]
    C40 --> LES["lessons/<br/>8 module pages"]
    C40 --> MINI["mini-lesson/<br/>15-min standalone segment"]
    C40 --> RES["resources.html"]

    subgraph shared["Shared assets"]
        CSS["css/style.css<br/>one stylesheet, two themes"]
        JS["js/<br/>3 progressive-enhancement scripts"]
    end

    subgraph server["Server-side (the only dynamic part)"]
        FN["functions/api/ask.js<br/>Pages Function"]
    end

    MINI --> FN
    FN --> GW["gateway.graphlings.net<br/>LiteLLM"]
```

| Path | What it is | Docs |
|---|---|---|
| `index.html` | Hub landing page | — |
| `intro-ai-tools/` | The Introduction to AI Tools course | [README](intro-ai-tools/README.md) |
| `intro-ai-tools/lessons/` | Eight module lesson plans | [README](intro-ai-tools/lessons/README.md) |
| `intro-ai-tools/mini-lesson/` | The 15-minute standalone segment | [README](intro-ai-tools/mini-lesson/README.md) |
| `_redirects` | 301s from the old `/mpc-csci-40/*` URLs | — |
| `css/` | The single stylesheet and its design tokens | [README](css/README.md) |
| `js/` | Client-side behaviour | [README](js/README.md) |
| `functions/` | Cloudflare Pages Functions (the live AI demo) | [README](functions/README.md) |
| `AGENTS.md` | Rules and hard-won gotchas for anyone editing this repo | [AGENTS.md](AGENTS.md) |

Future courses get their own top-level directory alongside `intro-ai-tools/`.

## How it's built

Plain static HTML and CSS with no framework, no bundler, and no build step.
The only JavaScript is three small dependency-free files, all progressive
enhancement — every page stays readable with JS disabled.

The one dynamic piece is `functions/api/ask.js`, a Cloudflare Pages Function
powering the mini-lesson's live "try it yourself" model widget. It exists so
the LLM gateway key stays server-side rather than shipping to the browser from
a public repo.

## Local preview

Pages use root-relative links, so serve the repo root — don't open files
directly.

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

That serves **static files only**. To exercise `/api/ask` too, you need
Wrangler (Pages Functions + KV):

```sh
cp .dev.vars.example .dev.vars   # add a real gateway key
npx wrangler pages dev . --port 8788 --kv RATE_LIMIT_KV
```

`.dev.vars` is gitignored. Never commit real key values.

## Deployment

Cloudflare Pages, project `lesson-plans`, deployed straight from this repo:

- **Build command:** none
- **Build output directory:** `/` (repo root)
- **Custom domain:** `lessons.mattvalancy.com`

Every push to `main` publishes automatically.

**Required secrets** (Pages → Settings → Environment variables, or
`npx wrangler pages secret put <NAME> --project-name lesson-plans`):

| Name | Value |
|---|---|
| `GRAPHLING_GATEWAY_KEY` | LiteLLM virtual key, scoped to the small model tier and rate-limited |
| `GRAPHLING_MODEL_SMALL` | Model tier name, currently `graphling-small` |

**Required binding**, declared in `wrangler.toml` and picked up automatically
on git-connected deploys:

```toml
[[kv_namespaces]]
binding = "RATE_LIMIT_KV"
id = "<workers kv namespace id>"
```

> **Changing JS or CSS? Bump the `?v=` query on its `<script>` / `<link>`
> tags.** Pages serves those assets with a 4-hour `max-age`, so the custom
> domain will keep handing out the old file long after a deploy — while the
> deployment URL looks correct. This has bitten us; see
> [`AGENTS.md`](AGENTS.md).

## The live AI demo

The mini-lesson page ends with a terminal wired to a real 1.5-billion-parameter
model running on private hardware, reached through the Graphlings AI gateway.
Ask it something obscure and it will confabulate on cue — which is the lesson.
It doubles as a small proof of the course's ownership argument: a capable
model answering from a machine in a room, not from anybody's subscription.

The full architecture, the two-layer rate limiting, the error taxonomy, and the
outage that shaped them are written up in
[`functions/README.md`](functions/README.md). This deployment is also the
worked example behind the Graphlings case study on consuming that gateway from
a web app.

## URL history

The course originally lived at `/mpc-csci-40/`, when it was framed as one
college's class. It is now the general `/intro-ai-tools/`. `_redirects` keeps
every old path alive with a 301 — don't remove it.

## License

Course content © Matthew Valancy. The lesson plans are meant to be taught:
use them with a group, a club, a library, or a classroom, and attribution is
welcome. Please don't republish the content wholesale as your own.
