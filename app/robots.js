import { site } from '@/lib/site';

export const dynamic = 'force-static';

/** Writes /robots.txt at build time. */
export default function robots() {
  return {
    rules: site.allowIndexing ? { userAgent: '*', allow: '/' } : { userAgent: '*', disallow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
