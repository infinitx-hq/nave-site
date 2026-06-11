# Nave Offer Page — Pre-Launch Checklist

Internal — not page copy. Rebuilt 2026-06-10 after Enrique locked the funnel shape: free playbook capture first (email + required phone) → $89 template → $397 live 1:1 install (community included) → custom build $2,500–$7,500. Items marked **(Enrique's call)** need his explicit sign-off.

## Funnel decisions LOCKED today (2026-06-10, Enrique)

- Template = **$89, no discount framing** (the "$249 → $85" idea was dropped in favor of the locked $89).
- $397 = **live 1:1 install hour** (replaces the group cohort), stack anchored at **$1,297** (sums exactly: 89+300+297+297+197+117), **founding price → $497 after the founding window** (this is a real commitment — the price MUST actually go to $497, or the line comes off the page).
- Community + weekly call = **$397+ only**. $89 buyers get bounded Loom support, no community.
- Capture = **email + required phone** on both playbook forms.
- Custom Content OS = **one-time build, $2,500–$7,500**, contact form, scoped on a call.
- No later-member community price printed anywhere (still uncommitted).

## Wiring (the page is live the moment these exist)

Edit the `NAVE_LINKS` block at the bottom of `index.html`:

- [ ] `BOOK` — Cal.com booking URL for the 1:1 install hour ($397). Until set, install buttons route to the playbook capture with a "first in line" note.
- [ ] `BUY` + `BUY_FULFILLMENT` — Stripe Payment Link (or Gumroad) for The Template $89 **plus** automated delivery (GitHub invite or release zip). The buy button may not ship before the fulfillment line is true (redteam `no-checkout-infra`). Until both set, the button stays "Join the template waitlist."
- [ ] `PLAYBOOK_FORM_ACTION` — Kit (ConvertKit) form action for the playbook capture. The form posts `email_address` + `fields[phone]` — create a `phone` custom field in Kit and confirm the field name matches. Hook the instant-delivery email + 6-email nurture from `launch/lead-magnet-funnel.md` (update email #5/#6 copy: no cohort, 1:1 install).
- [ ] `CUSTOM_FORM_ACTION` — endpoint for the custom-build request form (Tally / Formspree). `''` = mailto fallback via CONTACT_EMAIL.
- [ ] `CONTACT_EMAIL` — public support email; also replaces `[support email]` in /guarantee, /terms, /privacy.

## Decisions still open (Enrique's call)

1. **Founding-window boundary:** what closes the $397 window — a date, or N installs delivered? Confirm the trigger before launch ("when the founding window closes" prints now, undefined).
2. **Guarantee window:** 30 days from install session = suggested default; "as many rounds as it takes" in /guarantee = draft language.
3. **$89-credits-toward-$397 up-path:** still recommended by the cannibalization audit. Currently OFF (HTML comment in #template). Approve to ship.
4. **Tiempo naming:** page renders the safe fallback ("real client work"). Name "Tiempo Soccer" only with Fernando's permission on file.
5. **Update tiering:** install "lifetime priority updates" ($117 stack line) vs template "12 months" — sign off, or rebuild the stack (re-verify printed total = sum).
6. **Template support bound:** "up to 3 Loom replies / 30 days" = draft numbers; the bound itself is mandatory.
7. **Swipe file / Format Studio bonuses:** REMOVED from the $397 stack in the rebuild (old lines 07/08). Re-add only with real counts, and re-sum the stack if so.
8. **SMS use:** phone is now required at opt-in. Decide what phone is actually FOR (SMS sequence? call-backs?) and make /privacy + the consent microcopy match. Until an SMS motion exists, do not text the list.

## Content to produce

- [ ] **The playbook PDF is already built** — `data/companies/infinitx/offers/content-engine/launch/lead-magnet-playbook.pdf`. Host it at a direct link + wire as Kit's incentive email.
- [ ] **Artifacts row in #how** — three REAL screenshots (finished short, carousel frame, staged schedule), captioned "made with Nave · [date] · [time spent]".
- [ ] **Proof wall in #proof** — 3–4 published shorts with visible view counts + dated analytics of the 100k+ organic run (paid-amplification disclosure if the ~500k run appears).
- [ ] **Founder headshot** — real photo or workspace still (placeholder box in #founder).
- [ ] **VSL** — drops into `#vsl-slot` (set `data-state="vsl"`); the terminal demo becomes the poster frame.

## Repo (infinitx-hq/nave) fixes before launch

- [ ] L11 + L56 "30 minutes" → "about an hour".
- [ ] L8–9 "while you sleep" → review-then-ship framing.
- [ ] L12 "no monthly tool credits, no vendor that can throttle you" → "no middleman markup — you pay tool vendors directly."
- [ ] Keys language everywhere = "AssemblyAI, Zernio, optional OpenAI + xAI" (KIE.ai is NOT in the env surface).

## Legal

- [ ] /guarantee.html, /terms.html, /privacy.html are DRAFTS — updated for the 1:1 install + phone capture, but still need counsel review, bracketed placeholders filled, dates set.
- [ ] All three must be live before any paid traffic.
