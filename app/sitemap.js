import fs from 'node:fs';
import path from 'node:path';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

// Pages that should not be in the sitemap.
const EXCLUDE = new Set([]);
// Higher priority for the home page and main service pages.
const PRIORITY = { '/': 1, '/contact': 0.9, '/about': 0.8, '/our-work': 0.8, '/publications': 0.8 };

/** Writes /sitemap.xml at build time, listing every page folder in /app. */
export default function sitemap() {
  const appDir = path.join(process.cwd(), 'app');
  const routes = [
    '/',
    ...fs
      .readdirSync(appDir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && fs.existsSync(path.join(appDir, d.name, 'page.jsx')))
      .map((d) => `/${d.name}`),
  ].filter((r) => !EXCLUDE.has(r));
  const now = new Date();
  return routes.map((route) => ({
    url: route === '/' ? site.url : `${site.url}${route}`,
    lastModified: now,
    changeFrequency: route === '/' || route.startsWith('/blog') ? 'weekly' : 'monthly',
    priority: PRIORITY[route] ?? (route.startsWith('/blog-') ? 0.6 : 0.7),
  }));
}
