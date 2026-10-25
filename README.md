# hopetheorylabs-site (TamimAbir fork)

One-page website for **Hope Theory Labs** — small web studio in Dhaka.

**Live target:** https://hopetheorylabs.vercel.app  
**Stack:** Next.js (App Router, TypeScript) · Tailwind CSS · Framer Motion · static export

## What's on this fork

Branch `finish-launch` adds:

- **Step 6** — SEO metadata, Open Graph, Twitter card, JSON-LD ProfessionalService, robots.txt, sitemap.xml
- **Step 8** — polished 404 page + HT monogram `app/icon.svg`

Upstream open PRs still hold Steps 3–5 (i18n, LabsBackground, motion). Merge those on the main repo, or cherry-pick `issue-5` into this fork for a complete local build.

## Still required before production

1. Merge upstream PRs #16 → #17 → #18 (or sync `issue-5`)
2. Bangla copy review (`content/bn.ts`) — you + Fahad
3. Step 7 — Lighthouse mobile 90+ / JS budget
4. Step 9 — full QA checklist
5. Real Rollers Republic screenshots in `public/work/`
6. Fahad production approval

## Run

```bash
npm install
npm run dev
npm run lint && npm run typecheck && npm run build
```

## Spec sources

See `docs/SPEC.md`, `docs/BRAND.md`, `docs/DESIGN_RULES.md`, `docs/QA.md`.
