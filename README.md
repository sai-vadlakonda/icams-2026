# ICAMS 2026 — Conference Website

Official website for the **International Congress on Advances in Mechanical Sciences (ICAMS 2026)**, organized by the Department of Mechanical Engineering, **Vardhaman College of Engineering (VCE)**, Hyderabad, Telangana, India.

**Conference Dates:** December 4–5, 2026

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool / dev server)
- **Tailwind CSS** (styling, dark/light mode via `class` strategy)
- **React Router v6** (routing across 15 pages)
- **Framer Motion** (scroll & entrance animations)
- **GSAP** (available for advanced scroll/timeline animation — see `src/hooks`)
- **Lenis** (smooth scrolling, mounted in `App.tsx`)
- **React Hook Form** (Contact page validation)
- **Lucide React** + **React Icons** (iconography)
- **Swiper** (Gallery carousel)
- **React Helmet Async** (per-page SEO meta tags)
- **ESLint + Prettier** (code quality)

---

## Project Structure

```
icams-2026/
├── public/
│   ├── assets/images/        # Place real campus/logo/gallery photos here
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/                # Bundler-processed images/icons (optional alt location)
│   ├── components/            # Reusable UI: Navbar, Footer, Button, Card, SEO, etc.
│   ├── constants/              # site.ts (org info), nav.ts (menu structure)
│   ├── data/                   # All conference content: tracks, dates, committee, FAQ, etc.
│   ├── hooks/                   # useTheme, useCountdown, useLenis, useScrollTop
│   ├── layouts/                 # MainLayout (Navbar + Footer wrapper)
│   ├── pages/                    # One file per route (15 pages + 404)
│   ├── sections/home/            # Home-page-only section components
│   ├── styles/                    # (reserved for additional global styles)
│   ├── utils/                      # cn() classnames helper, seo.ts
│   ├── App.tsx                      # Route definitions
│   ├── main.tsx                      # App bootstrap (Router + Helmet providers)
│   └── index.css                      # Tailwind layers + global utility classes
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Pages Included

1. Home — hero, countdown, animated stats, tracks/dates preview, CTA
2. About Conference — purpose, scope, objectives
3. About Vardhaman College — institutional highlights & accreditation
4. Conference Tracks — all 7 tracks with full topic lists
5. Important Dates — full timeline
6. Submission — paper template + submission portal links
7. Registration — pricing table + bank payment details
8. Publications — proceedings & Springer LNME info
9. Venue — address, travel info, map placeholder
10. Committee — patrons, organizing & advisory committee
11. Speakers — keynote/invited speakers
12. Sponsors — sponsor tiers + sponsorship CTA
13. Gallery — Swiper carousel + grid
14. FAQ — accordion
15. Contact — validated contact form (React Hook Form)
16. 404 — Not Found page

---

## Getting Started (VS Code / Local)

### Prerequisites
- **Node.js LTS** (v18.18+ or v20+) — [download here](https://nodejs.org/)
- npm (comes with Node.js)

### 1. Install dependencies
```bash
npm install
```

### 2. Start the dev server
```bash
npm run dev
```
Open the printed local URL (default `http://localhost:5173`).

### 3. Build for production
```bash
npm run build
```
Output is generated in the `dist/` folder.

### 4. Preview the production build locally
```bash
npm run preview
```

### 5. Lint / format (optional)
```bash
npm run lint
npm run format
```

---

## Replacing Placeholder Content

This project ships **fully functional and content-complete**, but a few items are placeholders because real assets/data were not supplied:

| Placeholder | Where | Replace With |
|---|---|---|
| Hero background | `src/sections/home/HeroSection.tsx` (`/assets/images/hero-campus.jpg`) | Real Vardhaman College campus photo — drop the file into `public/assets/images/hero-campus.jpg` |
| ICAMS logo tile | `src/pages/AboutConference.tsx` | Real ICAMS 2026 logo — drop into `public/assets/images/icams-logo.png` and swap the placeholder `<div>` for an `<img>` |
| Gallery photos | `src/data/gallery.ts` | Real campus/event photos in `public/assets/images/gallery/` |
| Committee & speaker names | `src/data/committee.ts`, `src/data/speakers.ts` | Confirmed names once finalized |
| Bank account number / SWIFT | `src/constants/site.ts` (`PAYMENT_DETAILS`) | Verified banking details from the organizing committee |
| Paper template / brochure PDF links | `Submission.tsx`, `ImportantDates.tsx`, `HeroSection.tsx` | Actual files placed in `public/templates/` and `public/` |
| Submission portal URL | `src/pages/Submission.tsx` | Real EasyChair/CMT/custom portal link |
| Contact form submit handler | `src/pages/Contact.tsx` | Connect to a real backend/email service (e.g. Formspree, EmailJS, custom API) |
| Google Maps embed | `src/pages/Venue.tsx` | Replace the placeholder block with a live `<iframe>` Google Maps embed |

All conference content (tracks, dates, registration fees, scope, objectives, FAQ, etc.) from the original brief has already been fully implemented in `src/data/` and `src/constants/`.

---

## Dark / Light Mode

Theme state is managed by `src/hooks/useTheme.ts` and toggled via the navbar's sun/moon icon. The preference is persisted in `localStorage` and respects the user's OS-level preference on first visit. Tailwind's `dark:` variants are used throughout via `darkMode: 'class'`.

---

## SEO

Every page renders a `<SEO />` component (`src/components/SEO.tsx`) using `react-helmet-async`, setting a unique `<title>`, meta description, canonical URL, and Open Graph tags. Global fallback meta tags live in `index.html`. `public/robots.txt` and `public/sitemap.xml` are included — update the sitemap URLs if you change the production domain.

---

## Deployment

### Deploy to Vercel
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build` — Output directory: `dist`
5. Click **Deploy**.

Or via CLI:
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
1. Push this project to a GitHub repository.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**.
3. Build command: `npm run build` — Publish directory: `dist`
4. Click **Deploy site**.

Or via CLI:
```bash
npm i -g netlify-cli
netlify deploy --build
```

**Important for both platforms:** since this is a client-side routed SPA (React Router), add a rewrite rule so all routes fall back to `index.html`:

- **Vercel** — create `vercel.json` in the project root:
  ```json
  { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
  ```
- **Netlify** — create `public/_redirects`:
  ```
  /*  /index.html  200
  ```

---

## License

Built for the Department of Mechanical Engineering, Vardhaman College of Engineering — for use in connection with ICAMS 2026.
