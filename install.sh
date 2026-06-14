#!/usr/bin/env bash
# Nave Content OS — one-line installer (Mac / Linux)
#   curl -fsSL https://nave.infinitxai.com/install.sh | bash
set -euo pipefail

ZIP="https://github.com/infinitx-hq/nave-site/releases/download/content-os-v1/nave-content-os.zip"
DEST="$HOME/nave"

printf '\n  \xF0\x9F\x9B\xB8  Nave Content OS\n  Installing to: %s\n\n' "$DEST"

for c in curl unzip; do
  command -v "$c" >/dev/null 2>&1 || { echo "  Please install '$c' first, then re-run."; exit 1; }
done

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
echo "  -> Downloading the Content OS..."
curl -fsSL "$ZIP" -o "$TMP/nave.zip"
echo "  -> Unpacking to $DEST ..."
unzip -oq "$TMP/nave.zip" -d "$HOME"

cd "$DEST"
chmod +x install.sh 2>/dev/null || true
echo ""
echo "  -> Running the Nave installer (system tools, engines, verify render)..."
echo ""
exec bash install.sh
