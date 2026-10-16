#!/bin/bash
# Install Nave on a Mac with one line:
#   curl -fsSL https://nave.infinitxai.com/download/install.sh | bash
# It asks for the email you joined the community with, checks it is on the member list, downloads Nave and puts it in
# Applications, then opens it. Downloaded this way, macOS has nothing to block: no "damaged", no Open Anyway.
set -euo pipefail

CHECK_URL="https://xadknhmtkgsdeyaaeamz.supabase.co/functions/v1/nave-download"
PUBLIC_KEY="sb_publishable_oVQzfl2Rk30GfCrMUfdmEg_pI6XLQkW"

say() { printf '\n  %s\n' "$1"; }
fail() { printf '\n  %s\n\n' "$1" >&2; exit 1; }

[ "$(uname -s)" = "Darwin" ] || fail "This installs the Mac version. On Windows, use the PowerShell line on the download page."
[ "$(uname -m)" = "arm64" ] || fail "Nave needs a Mac with Apple silicon (M1 or newer) for now."

printf '\n  Nave · for members of Agentic AI Content\n'
EMAIL="${NAVE_EMAIL:-${1:-}}"
if [ -z "$EMAIL" ]; then
  printf '\n  The email you joined the community with: '
  read -r EMAIL < /dev/tty
fi
EMAIL="$(printf '%s' "$EMAIL" | tr '[:upper:]' '[:lower:]' | tr -d '[:space:]')"
case "$EMAIL" in *@*.*) ;; *) fail "That doesn't look like an email. Run the line again." ;; esac

say "Checking the member list…"
ANSWER="$(curl -fsS -X POST "$CHECK_URL" -H "apikey: $PUBLIC_KEY" -H "content-type: application/json" \
  -d "{\"email\":\"$EMAIL\"}" 2>/dev/null || true)"
case "$ANSWER" in
  *'"ok":true'*) ;;
  *not_member*) fail "That email isn't on the member list. Use the email you joined with, or ask in the community if you just joined." ;;
  *no_installers*) fail "You're on the list, but the installers are being uploaded right now. Try again in a little while." ;;
  *) fail "Couldn't reach Nave. Check your connection and try again." ;;
esac
# The Mac link from the answer: the "url" inside "mac":{…}.
DMG_URL="$(printf '%s' "$ANSWER" | sed -n 's/.*"mac":{"url":"\([^"]*\)".*/\1/p' | sed 's/\\u0026/\&/g')"
[ -n "$DMG_URL" ] || fail "The Mac download isn't available yet. Try again later."

WORK="$(mktemp -d)"
MOUNT="$WORK/mount"
cleanup() { hdiutil detach "$MOUNT" -quiet >/dev/null 2>&1 || true; rm -rf "$WORK"; }
trap cleanup EXIT

say "Downloading Nave (about 500 MB)…"
curl -fL --progress-bar "$DMG_URL" -o "$WORK/Nave.dmg" || fail "The download stopped. Run the line again."

say "Installing into Applications…"
mkdir -p "$MOUNT"
hdiutil attach "$WORK/Nave.dmg" -nobrowse -readonly -mountpoint "$MOUNT" -quiet || fail "Couldn't open the download. Run the line again."
APP="$(find "$MOUNT" -maxdepth 1 -name '*.app' | head -n 1)"
[ -n "$APP" ] || fail "The download didn't contain Nave. Run the line again."
# A running Nave is asked to quit, and waited for (it stops its own helpers first), before it is replaced.
if pgrep -x Nave >/dev/null 2>&1; then
  osascript -e 'quit app "Nave"' >/dev/null 2>&1 || true
  for _ in $(seq 1 30); do pgrep -x Nave >/dev/null 2>&1 || break; sleep 1; done
  if pgrep -x Nave >/dev/null 2>&1; then pkill -x Nave >/dev/null 2>&1 || true; sleep 2; fi
fi
rm -rf "/Applications/Nave.app"
ditto "$APP" "/Applications/Nave.app" || fail "Couldn't write to Applications. Run the line again, or drag Nave there yourself."
xattr -cr "/Applications/Nave.app" >/dev/null 2>&1 || true

say "Nave is installed. Opening it now: sign in with $EMAIL."
open "/Applications/Nave.app"
printf '\n'
