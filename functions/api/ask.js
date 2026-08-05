// POST /api/ask — proxies a capped, rate-limited chat request to the
// Graphlings LLM gateway, for the "try it yourself" widget on the
// mini-lesson page. The gateway key and model name never reach the client.
//
// Per-visitor limit: 6 requests/minute, tracked by IP in Workers KV
// (RATE_LIMIT_KV binding). This is deliberately per-IP, not global — many
// legitimate simultaneous visitors should each get their own quota; only a
// single flooding source should ever get capped. A separate, higher
// rpm_limit is enforced on the LiteLLM key itself as a global backstop
// against a coordinated flood.
//
// "small" is a stable alias, not a hardcoded model name: it's resolved from
// the GRAPHLING_MODEL_SMALL env var so the underlying model can change
// without a code change here.

const PER_IP_LIMIT = 6;
const WINDOW_SECONDS = 60;
const MAX_MESSAGE_LEN = 300;
const MAX_TOKENS = 150;

const SYSTEM_PROMPT =
  "You are a small, fast AI language model running as a live demo for a " +
  "community-college class on AI tools. Answer naturally and concisely, " +
  "in 2-4 sentences. You are a genuinely small model, not a search engine " +
  "— you have no way to look anything up, so only say things you actually " +
  "know from training; if you're unsure, say so rather than guessing.";

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Send JSON: { \"message\": \"...\" }" }, 400);
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!message) return json({ error: "Missing 'message'." }, 400);
  if (message.length > MAX_MESSAGE_LEN) {
    return json({ error: `Keep it under ${MAX_MESSAGE_LEN} characters.` }, 400);
  }

  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const limited = await checkRateLimit(env.RATE_LIMIT_KV, ip);
  if (!limited.ok) {
    return json(
      { error: "This demo is limited to 6 questions per minute per visitor — give it a few seconds." },
      429,
      { "Retry-After": String(limited.retryAfter) }
    );
  }

  const model = env.GRAPHLING_MODEL_SMALL || "graphling-small";

  let upstream;
  try {
    upstream = await fetch("https://gateway.graphlings.net/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.GRAPHLING_GATEWAY_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
        max_tokens: MAX_TOKENS,
      }),
    });
  } catch (e) {
    console.log("upstream fetch threw:", e && e.message);
    return json({ error: "The demo model is unreachable right now. Try again shortly." }, 502);
  }

  if (!upstream.ok) {
    // Log server-side for diagnosis; never leak upstream detail to the client.
    const detail = await upstream.text().catch(() => "");
    console.log("upstream not ok:", upstream.status, detail.slice(0, 300));

    // The model is busy (per-key concurrency or token/minute ceiling at the
    // gateway) — that's a "come back in a moment", not a bad question.
    if (upstream.status === 429 || upstream.status === 503) {
      return json(
        { error: "The demo model is busy right now — give it a few seconds and try again." },
        429,
        { "Retry-After": "15" }
      );
    }
    return json({ error: "The demo model had trouble with that one. Try a different question." }, 502);
  }

  const data = await upstream.json();
  const reply = data?.choices?.[0]?.message?.content ?? null;
  if (!reply) return json({ error: "No reply came back — try again." }, 502);

  return json(
    { reply, model: "small" },
    200,
    {
      "X-RateLimit-Limit": String(PER_IP_LIMIT),
      "X-RateLimit-Remaining": String(limited.remaining),
    }
  );
}

async function checkRateLimit(kv, ip) {
  const bucket = Math.floor(Date.now() / 1000 / WINDOW_SECONDS);
  const key = `rl:${ip}:${bucket}`;
  const current = parseInt((await kv.get(key)) || "0", 10);

  if (current >= PER_IP_LIMIT) {
    const secondsIntoWindow = Math.floor(Date.now() / 1000) % WINDOW_SECONDS;
    return { ok: false, retryAfter: WINDOW_SECONDS - secondsIntoWindow };
  }

  await kv.put(key, String(current + 1), { expirationTtl: WINDOW_SECONDS * 2 });
  return { ok: true, remaining: PER_IP_LIMIT - (current + 1) };
}

function json(obj, status, extraHeaders) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...(extraHeaders || {}) },
  });
}
