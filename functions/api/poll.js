// POST/GET /api/poll — built-in classroom polls for the learning system.
//
// The same shape as ask.js: a small, anonymous, rate-limited Pages Function
// in front of Workers KV. No accounts, no PII, nothing to steal. A teacher
// creates a poll and gets a short join code; students vote (or type a short
// answer) keyed by a random voter token their browser keeps; anyone with the
// code can read the aggregate. Everything expires on its own.
//
// Security posture, deliberately boring:
//   - Anonymous by default: the voter token is client-generated randomness,
//     never tied to a name. Revoting overwrites the same key, so no ballot
//     stuffing by revote and no duplicate counting.
//   - Every input is validated against a tight shape (code format, token
//     format, option index range, text length) and control characters are
//     stripped. The widget renders answers with textContent only; the strip
//     here is defense in depth, not the only line.
//   - Creation, voting, and reading each have their own per-browser rate
//     limit with a coarser per-IP backstop, same as the ask widget (one NAT
//     is a whole classroom, so per-IP alone would starve a real class).
//   - All keys carry a TTL. An abandoned poll costs a few KB for four hours
//     and then does not exist.
//   - No CORS headers: browsers can only call this same-origin.
//
// KV layout (shared RATE_LIMIT_KV namespace, distinct prefixes):
//   poll:d:<code>          poll definition  {q, o?, ts}       TTL 4h
//   poll:v:<code>:<voter>  one vote         {c:int}|{x:text}  TTL 4h
//   rl:p?:...              rate-limit buckets (fixed windows)

const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // no 0/O/1/I/L
const CODE_LEN = 6;
const POLL_TTL_SECONDS = 4 * 3600;

const MAX_QUESTION_LEN = 200;
const MAX_OPTION_LEN = 80;
const MAX_OPTIONS = 6;
const MAX_TEXT_ANSWER_LEN = 100;
const MAX_BODY_BYTES = 4096;
const AGGREGATE_KEY_CAP = 500; // a classroom, not a stadium

const CREATE_LIMIT = 6;      // polls per hour per browser
const CREATE_WINDOW = 3600;
const VOTE_LIMIT = 20;       // votes per minute per browser (revotes allowed)
const VOTE_WINDOW = 60;
const READ_LIMIT = 40;       // aggregate reads per minute per browser
const READ_WINDOW = 60;
const IP_BURST_MULTIPLIER = 8; // per-IP backstop = limit * this

export async function onRequestPost({ request, env }) {
  const len = parseInt(request.headers.get("Content-Length") || "0", 10);
  if (len > MAX_BODY_BYTES) return fail("body_too_large", "Request too large.", 413);

  let body;
  try {
    body = await request.json();
  } catch {
    return fail("bad_request", 'Send JSON: { "action": "create" | "vote", ... }', 400);
  }

  const action = body.action;
  if (action === "create") return handleCreate(body, request, env);
  if (action === "vote") return handleVote(body, request, env);
  return fail("bad_action", 'action must be "create" or "vote".', 400);
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = normalizeCode(url.searchParams.get("code"));
  if (!code) return fail("bad_code", "Pass ?code=ABCDEF.", 400);

  const limited = await limit(env, request, "pa", READ_LIMIT, READ_WINDOW);
  if (!limited.ok) return rateLimited(limited, READ_LIMIT);

  const defRaw = await env.RATE_LIMIT_KV.get("poll:d:" + code);
  if (!defRaw) return fail("poll_not_found", "No poll with that code (they expire after 4 hours).", 404);

  let def;
  try { def = JSON.parse(defRaw); } catch { return fail("poll_corrupt", "Poll data unreadable.", 500); }

  // Tally. Choice polls count per option; open polls collect short answers.
  const listed = await env.RATE_LIMIT_KV.list({ prefix: "poll:v:" + code + ":", limit: AGGREGATE_KEY_CAP + 1 });
  const truncated = listed.keys.length > AGGREGATE_KEY_CAP;
  const keys = listed.keys.slice(0, AGGREGATE_KEY_CAP);

  const counts = def.o ? def.o.map(() => 0) : null;
  const texts = def.o ? null : [];
  for (const k of keys) {
    const v = await env.RATE_LIMIT_KV.get(k.name);
    if (!v) continue;
    try {
      const vote = JSON.parse(v);
      if (counts && Number.isInteger(vote.c) && vote.c >= 0 && vote.c < counts.length) {
        counts[vote.c] += 1;
      } else if (texts && typeof vote.x === "string") {
        texts.push(vote.x);
      }
    } catch { /* skip unreadable vote */ }
  }

  return json({
    question: def.q,
    options: def.o || null,
    counts,
    answers: texts,
    total: keys.length,
    truncated,
  }, 200);
}

async function handleCreate(body, request, env) {
  const limited = await limit(env, request, "pc", CREATE_LIMIT, CREATE_WINDOW);
  if (!limited.ok) return rateLimited(limited, CREATE_LIMIT);

  const question = cleanText(body.question, MAX_QUESTION_LEN);
  if (!question) return fail("empty_question", "Give the poll a question.", 400);
  if (question.length > MAX_QUESTION_LEN) {
    return fail("question_too_long", `Keep the question under ${MAX_QUESTION_LEN} characters.`, 400);
  }

  let options = null;
  if (Array.isArray(body.options) && body.options.length > 0) {
    options = body.options.map((o) => cleanText(o, MAX_OPTION_LEN)).filter(Boolean);
    if (options.length < 2) return fail("too_few_options", "Give at least two options, or none for open answers.", 400);
    if (options.length > MAX_OPTIONS) return fail("too_many_options", `At most ${MAX_OPTIONS} options.`, 400);
  }

  // Collision-checked short code. 30^6 is a million-odd; three tries is plenty
  // at classroom scale, and a stuck KV read fails closed with an honest error.
  let code = null;
  for (let attempt = 0; attempt < 3 && !code; attempt++) {
    const candidate = randomCode();
    const exists = await env.RATE_LIMIT_KV.get("poll:d:" + candidate);
    if (!exists) code = candidate;
  }
  if (!code) return fail("code_collision", "Could not allocate a poll code, try again.", 503);

  await env.RATE_LIMIT_KV.put(
    "poll:d:" + code,
    JSON.stringify({ q: question, o: options, ts: Date.now() }),
    { expirationTtl: POLL_TTL_SECONDS }
  );

  return json({ code, question, options, expiresInSeconds: POLL_TTL_SECONDS }, 200);
}

async function handleVote(body, request, env) {
  const limited = await limit(env, request, "pv", VOTE_LIMIT, VOTE_WINDOW);
  if (!limited.ok) return rateLimited(limited, VOTE_LIMIT);

  const code = normalizeCode(body.code);
  if (!code) return fail("bad_code", "That poll code doesn't look right.", 400);

  const voter = typeof body.voter === "string" && /^[a-z0-9-]{8,40}$/i.test(body.voter)
    ? body.voter.toLowerCase()
    : null;
  if (!voter) return fail("bad_voter", "Missing voter token (the page generates this for you).", 400);

  const defRaw = await env.RATE_LIMIT_KV.get("poll:d:" + code);
  if (!defRaw) return fail("poll_not_found", "No poll with that code (they expire after 4 hours).", 404);
  let def;
  try { def = JSON.parse(defRaw); } catch { return fail("poll_corrupt", "Poll data unreadable.", 500); }

  let vote;
  if (def.o) {
    const c = body.choice;
    if (!Number.isInteger(c) || c < 0 || c >= def.o.length) {
      return fail("bad_choice", "Pick one of the listed options.", 400);
    }
    vote = { c };
  } else {
    const text = cleanText(body.text, MAX_TEXT_ANSWER_LEN);
    if (!text) return fail("empty_answer", "Type an answer first.", 400);
    if (text.length > MAX_TEXT_ANSWER_LEN) {
      return fail("answer_too_long", `Keep it under ${MAX_TEXT_ANSWER_LEN} characters.`, 400);
    }
    vote = { x: text };
  }

  // One key per (poll, voter): revoting overwrites, never double-counts.
  await env.RATE_LIMIT_KV.put(
    "poll:v:" + code + ":" + voter,
    JSON.stringify(vote),
    { expirationTtl: POLL_TTL_SECONDS }
  );

  return json({ ok: true }, 200);
}

/* ---------- shared helpers (same idioms as ask.js) ---------- */

async function limit(env, request, prefix, max, windowSeconds) {
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  let clientId = null;
  try {
    const url = new URL(request.url);
    const raw = url.searchParams.get("client") || "";
    if (/^[a-z0-9]{8,40}$/i.test(raw)) clientId = raw;
  } catch { /* ignore */ }

  try {
    let limited = clientId
      ? await bucketCheck(env.RATE_LIMIT_KV, prefix + ":c:" + clientId, max, windowSeconds)
      : await bucketCheck(env.RATE_LIMIT_KV, prefix + ":ip:" + ip, max, windowSeconds);
    if (limited.ok && clientId) {
      const ipCap = await bucketCheck(
        env.RATE_LIMIT_KV, prefix + ":ip:" + ip, max * IP_BURST_MULTIPLIER, windowSeconds
      );
      if (!ipCap.ok) limited = ipCap;
    }
    return limited;
  } catch (e) {
    // KV hiccup: fail open, exactly like the ask widget. The TTLs and tight
    // input shapes bound the damage; availability wins for a classroom tool.
    console.log("poll rate-limit check failed, failing open:", e && e.message);
    return { ok: true, remaining: max, resetIn: windowSeconds };
  }
}

async function bucketCheck(kv, subject, max, windowSeconds) {
  const bucket = Math.floor(Date.now() / 1000 / windowSeconds);
  const key = `rl:${subject}:${bucket}`;
  const current = parseInt((await kv.get(key)) || "0", 10);
  const resetIn = windowSeconds - (Math.floor(Date.now() / 1000) % windowSeconds);
  if (current >= max) return { ok: false, retryAfter: resetIn, resetIn, remaining: 0 };
  await kv.put(key, String(current + 1), { expirationTtl: windowSeconds * 2 });
  return { ok: true, remaining: max - (current + 1), resetIn };
}

function rateLimited(limited, max) {
  return fail(
    "rate_limited_visitor",
    `Too many requests. Try again in ${limited.retryAfter}s.`,
    429,
    { "Retry-After": String(limited.retryAfter), "X-RateLimit-Limit": String(max) }
  );
}

function randomCode() {
  const buf = new Uint8Array(CODE_LEN);
  crypto.getRandomValues(buf);
  let out = "";
  for (let i = 0; i < CODE_LEN; i++) out += CODE_ALPHABET[buf[i] % CODE_ALPHABET.length];
  return out;
}

function normalizeCode(raw) {
  if (typeof raw !== "string") return null;
  const code = raw.trim().toUpperCase();
  return new RegExp(`^[${CODE_ALPHABET}]{${CODE_LEN}}$`).test(code) ? code : null;
}

// Strip control characters and angle brackets, collapse whitespace, trim.
// The widget renders with textContent, so this is belt and braces.
function cleanText(raw, cap) {
  if (typeof raw !== "string") return "";
  return raw
    .replace(/[\u0000-\u001F\u007F<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, cap + 1);
}

// Stable machine-readable codes, ask.js style:
//   bad_request | bad_action | body_too_large            — caller shape
//   empty_question | question_too_long | too_few_options | too_many_options
//   bad_code | bad_voter | bad_choice | empty_answer | answer_too_long
//   poll_not_found | poll_corrupt | code_collision
//   rate_limited_visitor
function fail(code, error, status, extraHeaders) {
  return json({ error, code }, status, extraHeaders);
}

function json(obj, status, extraHeaders) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...(extraHeaders || {}) },
  });
}
