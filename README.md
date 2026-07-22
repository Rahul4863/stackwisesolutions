# Stackwise Solutions — Next.js Website

Converted from the original Vite + React (react-router-dom) SPA to
**Next.js (App Router, latest)**. Every page is now server-rendered /
statically generated, with per-page SEO metadata.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Before you deploy — please update these

1. **`data/constants.js` → `SITE_INFO.baseUrl`**
   Currently set to a placeholder (`https://stackwisesolutions.com`).
   Change this to your real domain — it's used for canonical URLs, Open
   Graph tags, the sitemap, and JSON-LD.

2. **Favicon / app icon**
   Add your logo as `app/icon.png` (and optionally `app/apple-icon.png`).
   Next.js will automatically wire these up as the site favicon — no code
   changes needed.

3. **`tailwind.config.js` colors & fonts**
   The original project's `tailwind.config.js` wasn't part of the files you
   shared, so the `ink` / `panel` / `panel2` / `gold` / `goldlight` / `muted`
   colors and the `font-display` (Poppins) + body (Inter) fonts were
   reconstructed to match the look of the site you already had. If your
   original config used different exact values, drop them into
   `tailwind.config.js`.

4. **Placeholder photos — replace with your real ones**
   The Hero, About, Portfolio, and Blog sections now use real photographic
   images so the site doesn't feel flat. Since no real project photos or
   team photos were provided, these currently pull from **Picsum Photos**
   (`picsum.photos`) — a free, no-attribution-required placeholder photo
   service safe for any use, commercial included. Testimonial avatars use
   **DiceBear** (`api.dicebear.com`) generated illustrated avatars instead
   of real people's photos, for the same reason.
   To swap in your own images:
   - Replace the `image` field on each entry in `data/constants.js`
     (`PORTFOLIO_ITEMS`) and `data/blogs.js` (`BLOG_POSTS`) with your own
     image URL, or a local file placed in `public/` (e.g. `/images/foo.jpg`).
   - Replace the Hero/About image `src` values directly in
     `components/Hero.jsx` and `components/About.jsx`.
   - If you switch to local images in `public/`, no `next.config.js` change
     is needed. If you use a different external image host, add its domain
     to `images.remotePatterns` in `next.config.js`.

## What changed structurally

- **Routing**: `react-router-dom` → Next.js App Router (`app/` folder).
  `/services/:slug` → `app/services/[slug]/page.js`.
- **Navigation**: in-page smooth scrolling (`scrollTo`) is now plain
  `<Link href="/#section">` — Next.js + native CSS `scroll-behavior: smooth`
  handles the rest, cross-page included.
- **Server vs. Client components**: anything interactive (forms, modals,
  animated counters, the FAQ accordion, the mobile nav) is a Client
  Component (`"use client"`). Static content (`About`, `Footer`, and both
  page files) is a Server Component — this means more of the page is
  actual server-rendered HTML, not just JS-built-later DOM. That's a real
  SEO improvement over the old SPA version.

## SEO — what's included

- **Per-page metadata** via Next's `generateMetadata` — every service page
  (`/services/[slug]`) gets its own `<title>`, meta description, keywords,
  canonical URL, Open Graph, and Twitter card tags, pulled straight from
  `service.metaDescription` in `constants.js`.
- **Static generation**: `generateStaticParams` pre-renders every service
  page at build time, so Google (and any crawler) gets full HTML
  immediately — no waiting on client-side JS like the old SPA.
- **JSON-LD structured data**, rendered server-side (so it's actually in
  the HTML, not injected by JS after load):
  - `Organization` schema on the home page
  - `Service` + `FAQPage` schema on every service detail page
  - `BreadcrumbList` schema on every service detail page
- **`app/sitemap.js`** — auto-generates `/sitemap.xml` listing the home
  page and every service page.
- **`app/robots.js`** — auto-generates `/robots.txt`, pointing crawlers to
  the sitemap.
- **Real 404 handling**: an unknown `/services/xyz` now calls Next's
  `notFound()`, returning an actual 404 HTTP status with a proper page
  (`app/not-found.js`) — the old SPA returned 200 with a "not found"
  message, which is bad for SEO.
- **`metadataBase`** set in the root layout so all relative URLs resolve
  correctly for social sharing.

## Project structure

```
app/
  layout.js              → root layout, global metadata, fonts
  page.js                → home page (Server Component) + Organization JSON-LD
  not-found.js           → custom 404
  sitemap.js             → /sitemap.xml
  robots.js              → /robots.txt
  services/[slug]/
    page.js              → per-service metadata + Service/FAQ/Breadcrumb JSON-LD
  globals.css
components/
  Navbar.jsx, Hero.jsx, About.jsx, Stats.jsx, Skills.jsx,
  Portfolio.jsx, PortfolioModal.jsx, Services.jsx,
  ServiceDetailContent.jsx, Testimonials.jsx, Contact.jsx,
  EnquiryModal.jsx, Footer.jsx
data/
  constants.js           → all site content, service data, SEO copy
```
