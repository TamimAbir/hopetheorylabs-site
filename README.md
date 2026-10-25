# Hope Theory Labs website

**Live (GitHub Pages):** https://tamimabir.github.io/hopetheorylabs-site/

One-page site for Hope Theory Labs (Dhaka).

## Stack

Next.js (App Router, static export) · TypeScript · Tailwind · Framer Motion

## Local

```bash
npm install
npm run dev
npm run build
```

## GitHub Pages

Deploy is automatic on every push to `main` via `.github/workflows/pages.yml`.

1. Repo → **Settings → Pages** → Source: **GitHub Actions**
2. Push to `main` (or run workflow manually under Actions)
3. Site: https://tamimabir.github.io/hopetheorylabs-site/

`GITHUB_PAGES=true` sets `basePath` to `/hopetheorylabs-site` for the project site URL.
