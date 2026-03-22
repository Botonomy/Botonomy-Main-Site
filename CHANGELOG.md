# Botonomy Main Site — Deploy Changelog

All live deployments are tagged `deploy/YYYY-MM-DD-vN` in git.
To revert: `git checkout deploy/YYYY-MM-DD-vN` then rebuild and rsync.

---

## deploy/2026-03-12-v1 — 2026-03-12
**Newsletter popup + banner across main site + blog**
- `src/components/NewsletterPopup.jsx` — modal fires 4s after load, once per session (sessionStorage), never again after subscribe (localStorage). Fields: first name, last name, email. Success: "See you next week!" green state, auto-closes after 2.8s.
- `src/components/NewsletterBanner.jsx` — above-footer newsletter section on all pages. Already-subscribed state detected from localStorage.
- `src/App.jsx` — wired both components globally
- Contact page: name placeholder fixed from "Martin Kelly" → "Your name"
- WordPress blog theme: same popup + banner + inline article capture (below hero on single posts). All POST to `https://webhooks.botonomy.ai/webhook/newsletter-subscribe`

---

## deploy/2026-03-11-v2 — 2026-03-11
**Contact page + Footer overhaul**
- Added `/contact` route and `src/pages/Contact.jsx`
  - Form submits to `https://webhooks.botonomy.ai/webhook/contact-form`
  - Sidebar: Book a call card + direct email/LinkedIn
- Updated `src/components/Footer.jsx`
  - Newsletter email capture → `https://webhooks.botonomy.ai/webhook/newsletter-subscribe`
  - Real nav links: Blog, Contact, LinkedIn, Pricing
  - Removed placeholder `#` links (Twitter, Audit)
- Added `/contact/` route alias in `src/App.jsx`

---

## deploy/2026-03-11-v1 — 2026-03-11
**Navbar, hero, pricing updates + brand logos + analytics**
- Commit: `3e71c0b`
- Navbar updates, hero copy, pricing section
- Brand logo assets added to `/public/assets/logos/`
- Analytics utils (`src/utils/analytics.js`) — UTM capture, scroll depth, GTM events

---

## deploy/2026-03-07-v2 — 2026-03-07
**Icon parallax bug fix**
- Commit: `f71baa6`
- Fixed icon parallax animation bug

---

## deploy/2026-03-07-v1 — 2026-03-07
**Live build + design improvements + GTM/GA4**
- Commits: `f7022dd`, `8061d26`
- Design improvements across all sections
- GTM and GA4 deployment

---

## deploy/2026-03-05-v1 — 2026-03-05
**Initial launch**
- Commit: `8bfc794`
- Initial Botonomy AI landing page

---

## Revert Instructions
```bash
# 1. Checkout the tag
cd "/Users/martymcfly/Desktop/Botonomy/Botonomy Main Site"
git checkout deploy/YYYY-MM-DD-vN

# 2. Rebuild
npm run build

# 3. Deploy to Namecheap (never delete /blog)
rsync -avz --delete \
  --exclude='/blog' \
  --exclude='.htaccess' \
  -e "ssh -i ~/.ssh/namecheap_botonomy -p 21098" \
  dist/ botoihlb@server87.web-hosting.com:public_html/

# 4. Return to main branch
git checkout main
```
