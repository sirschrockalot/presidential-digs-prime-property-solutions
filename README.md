## Presidential Digs Marketing Site

This repository contains the production frontend for the Presidential Digs marketing site and lead funnel. It is a mobile‑first React/Vite single‑page application with a premium design, wired for lead capture, SEO, and analytics.

### Tech stack

- **Framework**: React 18 + TypeScript
- **Build tool**: Vite
- **Styling**: Tailwind CSS with custom tokens and Shadcn‑style UI components
- **Routing**: `react-router-dom` (SPA with client‑side routes)
- **Data / async**: `@tanstack/react-query` (provider ready for API integrations)
- **Forms & validation**: `react-hook-form` + `zod`
- **Testing**: Vitest + Testing Library, Playwright (smoke/E2E ready)

### Key features

- High‑conversion homepage with hero, trust, testimonial, situation, and location sections.
- Dedicated pages for:
  - Selling your house fast
  - How it works
  - About / team
  - FAQ
  - Contact
  - Situations (`/situations/:slug`)
  - Locations (`/locations/:slug`)
  - JV partner intake
  - Privacy Policy, Terms of Service, SMS Policy
- Lead form with:
  - Validation via `zod`
  - SMS consent checkbox
  - Honeypot spam protection
  - API abstraction + Vercel serverless function (`/api/leads`)

### Project structure (high level)

- `src/App.tsx` – App shell, routing, and analytics page‑view listener.
- `src/pages/*` – Top‑level pages (marketing, legal, and JV).
- `src/components/` – Layout (`Header`, `Footer`), shared elements, `LeadForm`, and home sections.
- `src/components/home/*` – Homepage sections (hero, trust bar, testimonials, situations, etc.).
- `src/components/ui/*` – Reusable UI primitives (buttons, inputs, dialogs, etc.).
- `src/lib/lead-api.ts` – Lead submission client abstraction.
- `src/lib/analytics.ts` – Analytics event helpers (page views, CTAs, nav, phone, lead success/failure).
- `src/components/Seo.tsx` – Reusable SEO + JSON‑LD helper.

### Environment configuration

Copy `.env.example` to `.env` (and configure the same keys in Vercel):

- `VITE_SITE_URL` – Canonical site URL (e.g. `https://presidentialdigs.com`).
- `VITE_SOCIAL_IMAGE_URL` – Absolute URL for social/OG share image.
- `VITE_LEAD_API_BASE_URL` (optional) – External API base; if unset, `/api/leads` Vercel function is used.
- `VITE_GA_MEASUREMENT_ID` (optional) – Google Analytics 4 measurement ID.
- `VITE_GTM_CONTAINER_ID` (optional) – Google Tag Manager container ID.

### Local development

```bash
npm install
npm run dev
```

The app runs at `http://localhost:8080` by default.

### Production build

```bash
npm run build
npm run preview
```

On Vercel, the project is deployed as a Vite SPA:

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **SPA rewrites**: configured in `vercel.json` so all client routes resolve to `index.html`.

### Lead flow overview

1. `LeadForm` validates input with `zod` and `react-hook-form`.
2. `submitLead` in `src/lib/lead-api.ts` POSTs to `/api/leads` (or `VITE_LEAD_API_BASE_URL/api/leads`).
3. `api/leads.js` normalizes and logs the lead payload and is ready to be connected to a CRM / email provider.

### Analytics overview

Analytics are managed via `src/lib/analytics.ts` and can be wired to GA4 and/or GTM using env vars. The app tracks:

- Page views
- Navigation clicks
- Primary CTA clicks
- Phone number clicks
- Lead submission success and failure

### SEO & sitemap

- Page‑specific titles, descriptions, canonicals, OG/Twitter tags via `Seo` component.
- JSON‑LD for Organization (home) and FAQPage (FAQ).
- `public/sitemap.xml` and `public/robots.txt` configured for search indexing.

### Contributing

Changes should preserve the existing visual design language while improving content, performance, or maintainability. Before opening a PR:

- Run `npm run lint` and `npm run test` where applicable.
- Keep environment‑specific values in env vars, not hardcoded in components.
