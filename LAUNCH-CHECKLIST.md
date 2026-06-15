# Nave Funnel — Pre-Launch Checklist

Internal — not page copy. Rebuilt 2026-06-10 (second pass) after Enrique locked the multi-path funnel. Items marked **(Enrique's call)** need his explicit sign-off.

## The funnel (locked 2026-06-10)

```
/  (squeeze)            apply.html              nave.html ($397 offer VSL page)
one line + 1 HOUR  -->  email/phone/details --> OR
Claude Code badge       + routing question      custom.html (DFY $2.5k-$7.5k VSL page)
VSL + playbook+vault
opt-in (email+phone)
```

- Word "template" is BANNED — the product is **the Content OS** (self-serve door = "The Content OS, self-serve").
- Two core offers: **$397 installed-with-you** (1:1 hour, $1,297 stack, community + weekly call included, founding price → $497) and **custom build $2,500–$7,500 one-time**. The $89 self-serve stays as a quiet side door on nave.html only.
- Free tier = playbook ("How I Make a Month of Quality Content in a Day with Claude Code") + the resource vault (playbook PDF + Claude Code guide EN/ES + future guides).
- API-key/tech talk lives in the FAQ only — off every hero and offer surface.

## ⚠️ "First ever" claim — DECIDED AGAINST (evidence on file)

Enrique asked for "The first ever Content OS built for Claude Code." Verification found **The AI Break selling a "Claude Content OS" ("Build a Content OS Machine in Claude Code") since May 5, 2026** (theaibreaklp.com/content-os) plus Justin Welsh's "Content Operating System" owning the name in the creator market. Shipped wording: **"The Content OS built for Claude Code"** (badge, kickers, meta). If Enrique wants a "first" claim back, the verifiable axis is footage-first (e.g. "the first Claude Code content engine built around your real footage") — verify before shipping. **(Enrique's call)**

## Claude Code logo + trademark

- Official lockup fetched from code.claude.com docs; viewBox-cropped to remove the "Docs" word. `assets/claude-code-dark.svg` (off-white text, used on site) + `claude-code.svg` (dark text, light backgrounds).
- Footer disclaimer shipped on all pages: "Claude Code is a trademark of Anthropic, PBC. Nave is an independent product — not affiliated with or endorsed by Anthropic." Nominative use; do not imply endorsement.

## Wiring (edit `assets/links.js` → NAVE_LINKS, shared by all pages)

- [ ] `BOOK` — checkout+booking for the $397 install (Stripe → Cal.com, or Cal.com paid event). Until set, $397 buttons fall back per-page.
- [x] `PLAYBOOK_FORM_ACTION` — **leave empty.** Email runs through **Beehiiv server-side**: `/playbook` opt-in → substrate `POST /leads` → `_beehiiv_subscribe()` (api/server.py) subscribes the lead + fires Beehiiv's Welcome Email (the delivery). No browser-side form action needed. To go live: set `BEEHIIV_API_KEY` + `BEEHIIV_PUBLICATION_ID` secrets, then build the Welcome Email + Automation in Beehiiv — full punch-list in `launch/BEEHIIV-SETUP.md`.
- [ ] `APPLY_FORM_ACTION` — endpoint for application answers (Tally/Formspree/Kit). Until set: mailto fallback, and routing still works (the redirect is the filter).
- [ ] `CUSTOM_FORM_ACTION` — endpoint for custom-build requests; mailto fallback via CONTACT_EMAIL.
- [ ] `CONTACT_EMAIL` — public support email (also referenced by legal pages).
- [ ] `VSL_INDEX` / `VSL_NAVE` / `VSL_CUSTOM` — three VSL embed URLs. Slots are live on all three pages (terminal demo / poster pane until then). **Two VSLs to produce: the Nave offer VSL + the done-for-you VSL; plus the squeeze VSL (can be the Nave one initially).**

## Decisions still open (Enrique's call)

1. **Founding-window boundary** — what closes the $397→$497 step: a date or N installs. "When the founding window closes" prints now, undefined. The $497 step is a REAL commitment once printed.
2. **$89-credits-toward-$397 up-path** — recommended; OFF (HTML comment in nave.html #selfserve).
3. **Tiempo naming** — pages say "real client work"; name the client only with Fernando's permission.
4. **Update tiering** — install "lifetime priority updates" ($117 stack line) vs self-serve "12 months".
5. **Phone use** — index opt-in promises "your phone is only used if you book an install." Honor it: no SMS broadcasts to the list, ever, unless the promise text changes first.
6. **"Roughly 30 finished pieces"** (custom page, first month) — confirm this matches real delivery capacity.
7. **"Weeks, not months"** custom build timeline — confirm.

## Content to produce

- [x] **Playbook rebuilt (2026-06-14)** — new content-OS playbook (`launch/lead-magnet-content-os.md`
  → `nave-playbook.pdf`, 19pp, 8 download-buttons) supersedes the old `lead-magnet-playbook.pdf`.
  Hosted in-repo at `/nave-playbook.pdf`. (Cover retitle to "...with Claude Code" still optional.)
- [x] **No separate "kit/vault" page (Enrique's call 2026-06-14)** — `/kit` REMOVED. The playbook IS
  the bundle (PDF + tools), delivered **on `/playbook`**: opt-in reveals the downloads on-page, and
  every `data-capture-form` opt-in (incl. the homepage) routes to `/playbook?unlocked=1` (links.js).
- [x] **The tools (formerly "the kit"), leaned** — `nave-playbook-kit.zip` (184 KB): footage-intelligence
  (the dynamic workflow) + extracting-transcripts + zernio-publish + zernio-comment-to-dm + humanizer.
  Heavy/core pieces stay as read-only reveals in the PDF. See `launch/KIT-LEAK-REVIEW.md`. 2-min eyeball
  still recommended before public host.
- [x] **Video pin + author face in the PDF** — p3 carries the YouTube walkthrough (thumbnail + QR +
  YouTube badge, → youtu.be/9JiRMaGJyvk); last page carries Enrique's headshot + bio.
- [ ] Email delivery: `/playbook` delivers on-page now; the delivery email should also link `/playbook`.
  Email = Beehiiv (server-side via `/leads` → `_beehiiv_subscribe`). To fire: set `BEEHIIV_API_KEY` +
  `BEEHIIV_PUBLICATION_ID` secrets + build the Welcome Email + Automation (see `launch/BEEHIIV-SETUP.md`).
- [ ] 3 VSLs (see wiring). 
- [ ] Founder headshot (nave.html placeholder). 
- [ ] Artifacts row screenshots (nave.html #how TODO).
- [ ] Proof wall assets (100k analytics, published shorts) — nave.html has chips only today.

## Legal

- [ ] /guarantee /terms /privacy — drafts updated for 1:1 install + phone capture + Content OS naming; still need counsel, placeholders, dates.
- [ ] All three live before any paid traffic.
