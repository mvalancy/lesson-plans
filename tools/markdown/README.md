# Public Markdown maintenance

The website stays buildless. This offline tool converts only tracked public HTML
into committed `.md` counterparts and adds alternate links, MIME headers and
`llms.txt`. Teacher pages include the same student sections selected by their
existing `data-embed-*` attributes. Private `ignored/` material, credentials,
backend files, and live model responses are never inputs.

```sh
npm --prefix tools/markdown ci
npm --prefix tools/markdown run generate
npm --prefix tools/markdown test
```

Regenerate and commit the outputs with public page changes. CI runs parity checks
so stale Markdown cannot quietly accompany a changed page. Explicit `.md` URLs
work without a paid Cloudflare feature or JavaScript. Browser interactions stay
in their HTML pages. `/index.md` and `/llms.txt` are the entry points.
