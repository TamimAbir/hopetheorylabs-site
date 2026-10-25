# Hope Theory Labs — company site

Next.js (App Router) + Tailwind CSS v4 + Framer Motion. Static export.

**Live:** https://hopetheorylabs-site.vercel.app

## Commands

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # writes out/
npm run lint
npm run typecheck
```

## Deploy (Vercel)

1. Import this repo in Vercel (Framework: Next.js, defaults).
2. Production branch: `main` (or `issue-5`).
3. Preview deploys per PR.

Static export (`output: "export"`) — no server runtime required.

## Stack notes

- Brand tokens: `docs/BRAND.md` → `app/globals.css` `@theme`
- Copy: `content/en.ts` / `content/bn.ts` (EN / বাংলা toggle)
- Design rules: `docs/DESIGN_RULES.md`
- QA gates: `docs/QA.md`

## WhatsApp

All CTAs use `https://wa.me/8801718463471`.
