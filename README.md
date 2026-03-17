## Presidential Digs Frontend

This is the React + Vite + Tailwind/Shadcn UI frontend for the Presidential Digs marketing site and lead funnel. It started from a Lovable-generated base and has been cleaned up to serve as a production-ready foundation.

### Tech stack

- **Framework**: React 18 with TypeScript
- **Build tool**: Vite
- **Styling**: Tailwind CSS with custom design tokens and Shadcn-style UI components
- **Routing**: `react-router-dom`
- **Data/async**: `@tanstack/react-query` (provider wired in `App.tsx` for future API integrations)
- **Forms & validation (ready to use)**: `react-hook-form`, `zod`
- **Testing**: Vitest + Testing Library, Playwright (config in `playwright.config.ts`)

### Project structure

- **`src/App.tsx`**: App shell with router, React Query provider, toast/tooltip providers.
- **`src/pages/*`**: Top-level pages (`Index`, `SellYourHouse`, `HowItWorksPage`, `About`, `FAQPage`, `Contact`, `SituationPage`, `LocationPage`, `NotFound`).
- **`src/components`**: Layout (`Header`, `Footer`), shared sections, and the `LeadForm`.
- **`src/components/home/*`**: Home page sections (hero, trust bar, testimonials, FAQ preview, etc.).
- **`src/components/ui/*`**: Reusable UI primitives (buttons, inputs, dialog, etc.) for any new features.
- **`src/hooks/*`**: Place for reusable hooks (e.g., analytics, feature flags, data fetching).
- **`src/lib/*`**: Utility functions and future service modules (API clients, mappers, etc.).

### Where to plug in functionality

- **Lead capture & business logic**: Start in `LeadForm.tsx`. Replace the local `useState` and `handleSubmit` with `react-hook-form` + `zod`, and call your lead API via `react-query` or a simple `fetch` helper from `src/lib`.
- **API clients / integrations**: Create modules in `src/lib` (e.g., `lead-api.ts`, `analytics.ts`) and import them into pages/components.
- **SEO metadata**: Global defaults live in `index.html`. For per-route SEO, you can add a lightweight `<Helmet>`-style solution or a custom `Seo` component used inside each page component.
- **Analytics**: Add your script/SDK bootstrap to `index.html` or a top-level `AnalyticsProvider` in `App.tsx`, then expose typed helper functions from `src/lib/analytics.ts` and call them from components (CTA clicks, form submits, etc.).

### Common scripts

- **`npm run dev`**: Start the dev server on port 8080.
- **`npm run build`**: Production build.
- **`npm run preview`**: Preview the production build locally.
- **`npm run lint`**: Run ESLint.
- **`npm run test`**: Run unit tests with Vitest.

### Next steps

- Wire `LeadForm` to your real lead intake backend.
- Add analytics (e.g., GA4, Plausible) in `index.html` or via a provider.
- Replace placeholder content (phone numbers, stats, copy) with production values.
- Add per-page SEO helpers if you need more granular control than the global `index.html` tags.
