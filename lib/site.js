export const site = {
  // Site name, address and email come from .env.local (see .env.example).
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Publish Your Books Today',
  shortName: process.env.NEXT_PUBLIC_SITE_NAME || 'Publish Your Books Today',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://publishyourbookstoday.com').replace(/\/+$/, ''),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@publishyourbookstoday.com',
  phone: '+1 833 408 0418',
  // Clickable tel: number (digits only, with country code).
  phoneHref: '+1 833 408 0418',
  address: '605 S Figueroa, Los Angeles, CA 90017',
  logos: {
    header: '/assets/images/logo/logo-image.webp',
    footer: '/assets/images/logo/logo-image.webp',
    social: '/assets/images/favicon/eagle-logo-32.webp',
  },

  allowIndexing: true,

  api: {
    contact: 'https://publishyourbookstoday.dev-staging.live/api/contact-us',
    csrf: '',
  },
};
