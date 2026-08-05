# lessons.mattvalancy.com

Central hub for course, study, and lesson material by
[Matthew Valancy](https://valpatel.com). The first course is
**CSCI 40: Introduction to AI Tools** (Monterey Peninsula College, Fall 2026);
the hub also links to the [Mr-Cal robot sensor calibration guide](https://cal.valpatel.com/).

Live site: **https://lessons.mattvalancy.com**

This is an independent instructor site — not an official MPC publication.

## Structure

```
index.html            Hub landing page (all courses & guides)
mpc-csci-40/               CSCI 40: Introduction to AI Tools
  index.html          Course overview + schedule
  lessons/            One page per module (8 modules, 10 sessions)
  mini-lesson/        Featured standalone 15-minute mini-lesson
  resources.html      Tools, readings, and open course materials
css/style.css         Single shared stylesheet (no framework)
```

Plain static HTML/CSS with a small vanilla-JS canvas animation (`js/hero-graph.js`)
decorating the hero sections — the site is fully functional without it. No build
step for the site itself. Future courses get their own top-level directory
alongside `mpc-csci-40/`.

One dynamic piece: `functions/api/ask.js` is a Cloudflare Pages Function
powering the "try it yourself" small-model widget on the mini-lesson page
(`js/ask-widget.js`). See **Small-model widget** below.

## Local preview

Pages use root-relative links, so serve the repo root rather than opening files directly:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

That serves static files only. To also exercise `/api/ask` locally (Pages
Functions + KV), use Wrangler instead — see below.

## Deployment (Cloudflare Pages)

Deployed directly from this repo (project `lesson-plans`):

- **Build command:** none
- **Build output directory:** `/` (repo root)
- **Custom domain:** `lessons.mattvalancy.com` (added under Pages → Custom domains,
  which creates the CNAME automatically when the zone is on Cloudflare)
- Bindings (KV namespace, secrets) are declared in `wrangler.toml` /
  Pages project settings — see below. Cloudflare picks these up automatically
  on git-connected deploys.

Every push to `main` publishes automatically.

## Small-model widget (`/api/ask`)

The mini-lesson page includes a live "try it yourself" box that talks to a
real small (1.5B-parameter) model on the Graphlings LLM gateway
(`gateway.graphlings.net`), for demonstrating hallucination hands-on. It's
explicitly *not* part of the scored 15-minute teaching demo — it's for
after, or for Q&A.

**Architecture:**
- `functions/api/ask.js` is a Cloudflare Pages Function (same origin as the
  site, so no CORS). It holds the gateway key server-side only — the client
  never sees it.
- The model is requested as a stable alias (`"small"`), resolved server-side
  from the `GRAPHLING_MODEL_SMALL` env var. Graphlings' own gateway config
  already names models by tier (`graphling-small`/`-medium`/…), so this
  alias stays correct even if the underlying model backing that tier changes
  — no code change here required.
- **Two rate-limit layers**, deliberately different scopes:
  - *Per-visitor*: 6 requests/minute per IP, tracked in the `RATE_LIMIT_KV`
    Workers KV namespace (fixed 60s window). Many simultaneous real visitors
    each get their own quota.
  - *Global backstop*: the LiteLLM key itself has `rpm_limit: 60`, a ceiling
    that only bites under a coordinated flood (e.g. many rotating IPs),
    regardless of per-IP limits.
  - The key is also model-scoped (`graphling-small` only) and capped
    (`max_parallel_requests: 2`, `max_budget`) at the gateway.

**Required Cloudflare Pages secrets** (Settings → Environment variables, or
`wrangler pages secret put <NAME> --project-name lesson-plans`):

| Name | Value |
|---|---|
| `GRAPHLING_GATEWAY_KEY` | A LiteLLM virtual key scoped to the small model, rate-limited. Generate via the gateway's `/key/generate` (see `CLAUDE.md`/ops notes on the `vps-gateway` host — not in this repo). |
| `GRAPHLING_MODEL_SMALL` | The LiteLLM model name for the small tier, currently `graphling-small`. |

**Required binding** (declared in `wrangler.toml`, picked up automatically
on git-connected deploys):

```toml
[[kv_namespaces]]
binding = "RATE_LIMIT_KV"
id = "<workers kv namespace id>"
```

**Local dev** (needs Wrangler, not the plain Python server):

```sh
cp .dev.vars.example .dev.vars   # fill in a real key
npx wrangler pages dev . --port 8788 --kv RATE_LIMIT_KV
```

`.dev.vars` is gitignored — never commit real key values.

## License

Course content © Matthew Valancy. Feel free to learn from the structure;
please don't republish the lesson content wholesale.
