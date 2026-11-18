# Authors website — Next.js 15 + Tailwind CSS v4

Book-services website (29 pages) on **Next.js 15 (App Router, React 19)** with **Tailwind CSS v4**.

## Run locally

```bash
cp .env.example .env.local   # then fill in your domain, site name and email
npm install
npm run dev                  # http://localhost:3000
```

## Build and deploy

```bash
npm run build
npm start                    # production server on port 3000
```

Works on Vercel (import the repo, add the variables from `.env.example`) or any Node.js host.
There is no `.htaccess`; routing, clean URLs and headers are handled by Next.js
(`next.config.mjs`).

## Settings

| What                                   | Where                                   |
| -------------------------------------- | --------------------------------------- |
| Domain, site name, contact email       | `.env.local` (see `.env.example`)       |
| Phone, address, logos, form endpoints  | `lib/site.js`                           |
| Menu links (header + mobile menu)      | `lib/navigation.js`                     |
| Colours, fonts, radius (design tokens) | `app/globals.css` → `@theme`            |
| Page title / description / canonical   | `export const metadata` in each `page.jsx` |

`NEXT_PUBLIC_SITE_URL` is used for canonical URLs, Open Graph, `sitemap.xml` and `robots.txt`.
Until it is set, the site uses `http://localhost:3000`.

### Forms

Form endpoints are empty on purpose (`lib/site.js` → `api.contact`, `api.csrf`). The forms
validate in the browser and show "This form is not connected yet" until `api.contact` has a URL.
They then POST `multipart/form-data` and expect JSON `{ success, message, errors }` back.

## How it is built

- **Tailwind CSS v4** — `app/globals.css` holds the design tokens (`bg-ink`, `text-bronze-2`,
  `font-display`, `rounded-xl` …). Shared pieces are React components in `components/ui/`
  (`Button`, `IconButton`, `Field`, `Check`).
- **Layout in Tailwind** — header, mega menu, mobile menu, footer, section rail, skip link,
  lead modal and enquiry forms (`components/layout`, `components/forms`, `components/modals`).
- **Pages** — each page still loads its original stylesheet from `public/assets/css`
  (`PageStyles`). They are being moved to Tailwind one page at a time; when a page is done,
  its stylesheet is deleted. While old stylesheets are still in use, Tailwind's reset is off and
  utilities are unlayered (see the note at the top of `app/globals.css`).
- **No page reloads** — every link is `next/link`. The original interaction scripts
  (`public/assets/js`) are run again on each page and cleaned up when you leave it
  (`lib/legacyRuntime.js`, `components/layout/PageScripts.jsx`), so sliders, menus, FAQs and
  forms work after client-side navigation. Only the current page's stylesheets are active.
- **Images** — all images are WebP and use `next/image` (served resized as AVIF/WebP).
  `public/favicon/eagle-logo-180.png` stays PNG because iOS home-screen icons must be PNG.
- **SEO** — per-page metadata (title, description, canonical, Open Graph, Twitter),
  `app/sitemap.js`, `app/robots.js`, JSON-LD (Organization, WebSite, BlogPosting).
- **No third-party scripts** — no chat widget, no tag manager, no analytics.
