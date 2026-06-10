# Nave Offer Page — Pre-Launch Checklist

Internal — not page copy. Produced by the offer-page build (2026-06-10), from the adversarially-verified copy pass. Every item below is a decision or wiring task gating launch. Items marked **(Enrique's call)** need his explicit sign-off.

## Wiring (the page is live the moment these 3 URLs exist)

Edit the `NAVE_LINKS` block at the bottom of `index.html`:

- [ ] `BOOK` — apply+book URL for the Founding Build Cohort (Cal.com event with required qualify questions, or Tally form → calendar). Until set, Apply buttons route to the email capture with a "first in line" note.
- [ ] `BUY` + `BUY_FULFILLMENT` — Stripe Payment Link (or Gumroad) for The Template $89 **plus** automated delivery (GitHub invite or release zip). The buy button may not ship before the fulfillment line is true (redteam `no-checkout-infra`). Until both set, the button stays "Join the template waitlist."
- [ ] `NEWSLETTER_FORM_ACTION` — Kit (ConvertKit) form action for Mission Control (per `launch/lead-magnet-funnel.md`, Kit over Beehiiv).
- [ ] `CONTACT_EMAIL` — public support email; also replaces `[support email]` in /guarantee, /terms, /privacy.

## Decisions (Enrique's call)

1. **Cohort cap:** "12 seats" is a placeholder — set the real number.
2. **Guarantee window:** 30 days = suggested default; "up to 3 live screen-share sessions" in /guarantee = draft count.
3. **$89-credits-toward-$397 up-path:** strongly recommended by the cannibalization audit (turns the side door into a ladder). Currently OFF (HTML comment in #template). Approve to ship.
4. **CTA verb:** "Apply for the Founding Build Cohort" ships. If no real 2-minute qualification step exists behind the BOOK link, switch the verb to "Book your seat."
5. **Tiempo naming:** page currently renders the safe fallback ("a soccer-club client"). Flip to "Tiempo Soccer" everywhere only with Fernando's permission on file (receipts chip + founder block + proof wall).
6. **Constructed-phrase toggles (all OFF by default):** footer "Own it."; crew "Your ship." pun; the long offer-name descriptor. Bare "The Founding Build Cohort" is the redteam-sanctioned form that ships.
7. **Later-member community rate:** UNCOMMITTED — no number prints anywhere ("the rate goes up"). Sign off a number before printing one.
8. **Founding-window boundary:** "closes when cohort 1 ships" = suggested trigger; confirm or set a date.
9. **Update tiering:** cohort "lifetime priority updates" vs template "12 months" — sign off, or delete stack line 06 and rebuild the $200 elsewhere (then re-verify the printed total equals the sum).
10. **Template support bound:** "up to 3 Loom replies / 30 days" = draft numbers, but the bound itself is mandatory (an unbounded promise cannibalizes the cohort).
11. **DFY anchor claim:** "real client work runs through it today" is safe at one client. Say "a few clients" only with 2+ and receipts.
12. **Swipe file count:** fill the real N before launch; no invented count.

## Content to produce

- [ ] **Artifacts row in #how** — three REAL screenshots (finished short with captions, carousel frame, staged schedule view), captioned "made with Nave · [date] · [time spent]". HTML comment marks the slot.
- [ ] **Proof wall in #proof** — 3–4 published shorts with visible view counts + dated analytics of the 100k+ organic run. If the ~500k run appears: "(with paid amplification behind it)" in the same caption.
- [ ] **Founder headshot** — real photo or workspace still (placeholder box marked in #founder).
- [ ] **VSL** — drops into `#vsl-slot` (set `data-state="vsl"`); the terminal demo becomes the poster frame. Zero layout shift by design.

## Repo (infinitx-hq/nave) fixes before launch

The substrate copy of the README was already corrected (keys story). The SHIPPED repo needs the same plus:
- [ ] L11 + L56 "30 minutes" → "about an hour".
- [ ] L8–9 "while you sleep" → review-then-ship framing.
- [ ] L12 "no monthly tool credits, no vendor that can throttle you" → "no middleman markup — you pay tool vendors directly." Zero unqualified no-reprice/no-throttle/no-shutoff claims may ship.
- [ ] Keys language everywhere = "AssemblyAI, Zernio, optional OpenAI + xAI" (KIE.ai is NOT in the env surface — page ships the verified list; reconcile PLAYBOOK if KIE lands later).

## Legal

- [ ] /guarantee.html, /terms.html, /privacy.html are DRAFTS — review (counsel for the liability + guarantee-precedence clauses), fill bracketed placeholders, set dates.
- [ ] All three must be live before any paid traffic.
