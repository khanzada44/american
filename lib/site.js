// GLOBAL SETTINGS: edit this file to update the whole site
// (same values as the old config/site.php).
export const site = {
  // Site name, address and email come from .env.local (see .env.example).
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Publish Your Books Today',
  shortName: process.env.NEXT_PUBLIC_SITE_NAME || 'Publish Your Books Today',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://publishyourbookstoday.com').replace(/\/+$/, ''),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@publishyourbookstoday.com',
  phone: '',
  // Clickable tel: number (digits only, with country code).
  phoneHref: '',
  address: '',
  logos: {
    header: '/assets/images/brand/eagle-logo-header.webp',
    footer: '/assets/images/brand/eagle-logo-footer.webp',
    social: '/assets/images/brand/eagle-logo-social.webp',
  },
  // Search engines may index the site (robots meta, robots.txt and sitemap.xml).
  allowIndexing: true,
  // Form endpoints. Left empty on purpose: add your own URLs here when the
  // backend is ready, e.g. contact: '/api/contact', csrf: '/api/csrf'.
  // While contact is empty the forms still validate, but show a notice
  // instead of sending. While csrf is empty no token is requested.
  api: {
    contact: 'https://publishyourbookstoday.dev-staging.live/api/contact-us',
    csrf: '',
  },
};
