#!/usr/bin/env bash
# Regenerate CVVic.pdf (English) and CVVices.pdf (Spanish) from the HTML pages with headless Chrome.
# Usage: ./make-pdfs.sh        (set CHROME=/path/to/chrome if it is not in the default macOS location)
set -euo pipefail
cd "$(dirname "$0")"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
[ -x "$CHROME" ] || { echo "Chrome not found at: $CHROME  (set CHROME=...)"; exit 1; }

print_pdf() {
  local src=$1 out=$2 tmp="$PWD/$2.tmp" profile pid
  rm -f "$tmp"; profile=$(mktemp -d)
  # Chrome's new headless mode does not exit after --print-to-pdf: wait for the file, then stop it.
  "$CHROME" --headless=new --disable-gpu --no-first-run --user-data-dir="$profile" \
    --no-pdf-header-footer --print-to-pdf="$tmp" "file://$PWD/$src" >/dev/null 2>&1 &
  pid=$!
  for _ in $(seq 1 60); do sleep 1; [ -s "$tmp" ] && { sleep 2; break; }; done
  kill "$pid" 2>/dev/null || true; pkill -P "$pid" 2>/dev/null || true; wait "$pid" 2>/dev/null || true
  rm -rf "$profile"
  [ -s "$tmp" ] || { echo "$out: FAILED"; exit 1; }
  mv "$tmp" "$out"
  if command -v pdfinfo >/dev/null; then echo "$out: $(pdfinfo "$out" | awk '/^Pages/{print $2}') page(s)"; else echo "$out: written"; fi
}

print_pdf index.html    CVVic.pdf
print_pdf index_es.html CVVices.pdf
