# nave-site — the nave.infinitxai.com landing

Static one-page site for **Nave** (by INFINITX). No build step — plain HTML/CSS.

## Deploy (GitHub Pages)
- Repo: `infinitx-hq/nave-site` · Pages serves `main` branch root.
- Custom domain: `nave.infinitxai.com` (see the `CNAME` file).
- **DNS at Namecheap** (the one manual step): add a record on `infinitxai.com`:
  - Type `CNAME` · Host `nave` · Value `infinitx-hq.github.io`
  - (Namecheap → Domain List → infinitxai.com → Advanced DNS → Add New Record)
- HTTPS provisions automatically once DNS resolves (a few minutes to a few hours).

Alternative hosts (also static-ready): Vercel, Netlify, Cloudflare Pages — point the same `nave` CNAME at them instead.

## Waitlist form (wire before launch)
`index.html` has two email forms with `action="#"` (placeholder). Connect to your provider —
Beehiiv / ConvertKit / Resend / Formspree — by setting the form `action` + `method` (or POSTing to your endpoint).
This is the owned-email-list capture; it's job #1 in the GTM playbook.

## SEO / GEO built in
- `<title>`, meta description, canonical, Open Graph + Twitter, `theme-color`.
- JSON-LD: `SoftwareApplication` + `Organization` + `FAQPage` (so search + AI assistants can cite Nave).
- `/llms.txt` (AI-assistant summary), `/robots.txt` (GPTBot / ClaudeBot / PerplexityBot / Google-Extended allowed), `/sitemap.xml`.

## Files
- `index.html` — the page (inline CSS, inline pixel-UFO SVG).
- `assets/` — logo + lockup (SVG + PNG).
- `llms.txt` · `robots.txt` · `sitemap.xml` · `CNAME`.
