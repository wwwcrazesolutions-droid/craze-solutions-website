# Craze Solutions — Software & AI Company Website (Phases 1–4)

A **static-first** React + Next.js (App Router) website for **Craze Solutions**, branded for **crazesolutions.org**.

> Solution examples on this site are labeled **solution blueprints**, not client case studies.

## What's implemented

- **Phase 1** — Next.js App Router, TypeScript, Tailwind CSS v4, ESLint, static export (`out/`), Cloudflare Pages–friendly output.
- **Phase 2** — Design system (`src/app/globals.css`), header/footer, mobile menu, responsive sections.
- **Phase 3** — Full homepage (hero, architecture illustration, services, approach, blueprint cards, tech stack, process, CTA).
- **Phase 4** — Six service detail pages, services overview, industries, about, process, contact, draft privacy, 404, `sitemap.xml`, `robots.txt`.

## Requirements

- Node.js 20.9+ (22 LTS recommended)
- npm

## Start locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Production checks

```bash
npm run typecheck
npm run lint
npm run build
```

Static output is written to `out/`.

## Configuration

1. **`src/lib/site.ts`** — Brand, tagline, `hello@crazesolutions.org`, navigation.
2. **`.env.local`** — `NEXT_PUBLIC_SITE_URL=https://www.crazesolutions.org` (canonical). Keep `NEXT_PUBLIC_SITE_READY_FOR_INDEXING=false` until review is complete.
3. **`src/data/services.ts`**, **`src/data/industries.ts`** — Service and industry copy.
4. **`public/og-image.png`** — Provided brand art; regenerate with `python3 docs/create_og_image.py --brand "Craze Solutions"`.
5. **`/privacy/`** — Replace draft text before launch.

## Cloudflare Pages

- Build: `npm run build`
- Output: `out`
- Env: same `NEXT_PUBLIC_*` values as `.env.local`

## Package note

The coordinator shared a partial file extract from the original zip; missing modules (layout components, heroes, service cards) were implemented to match `globals.css` and uploaded page imports. If you receive the full zip later, diff and merge any remaining assets (e.g. `public/visuals/`).