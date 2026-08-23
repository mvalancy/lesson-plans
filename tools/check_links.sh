#!/bin/bash
# Link checker for the course site. Run before committing new resources:
#   bash tools/check_links.sh
# Extracts every external link from resources.html and the activity library,
# fetches each with a browser user agent, and fails on hard-dead links.
# Known bot-blockers (403 to any script, fine in a real browser) are listed
# in tools/link-allowlist.txt and reported but never fail the run.
set -u
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ALLOW="$ROOT/tools/link-allowlist.txt"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

grep -ohE 'https?://[^"<> )]+' \
  "$ROOT/resources.html" \
  "$ROOT"/intro-ai-tools/ACTIVITY_GAMES.md \
  "$ROOT"/intro-ai-tools/activities/*.md 2>/dev/null \
  | sed 's/[.,;:]$//' | sort -u > "$TMP/urls.txt"

total=$(wc -l < "$TMP/urls.txt")
echo "checking $total unique links..."

hard_fail=0
while read -r url; do
  code=$(curl -s -o /dev/null -w '%{http_code}' -L --max-time 25 -A "$UA" "$url" 2>/dev/null)
  domain=$(echo "$url" | awk -F/ '{print $3}')
  case "$code" in
    2*|3*) : ;;                      # fine
    404|410)
      echo "  DEAD   $code $url"
      hard_fail=$((hard_fail+1)) ;;
    *)
      # 401/403/429/000/5xx: excusable only for verified bot-blockers
      # (000 also covers broken TLS on sites that work in real browsers)
      if grep -qF "$domain" "$ALLOW" 2>/dev/null; then
        echo "  allow  $code $url"
      else
        echo "  CHECK  $code $url (verify in a browser; if fine, add $domain to link-allowlist.txt)"
        hard_fail=$((hard_fail+1))
      fi ;;
  esac
done < "$TMP/urls.txt"

echo "done: $total links, $hard_fail hard failures"
[ "$hard_fail" -eq 0 ]
