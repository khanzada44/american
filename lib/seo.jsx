import { site } from './site';

/**
 * Builds the per-page <head> metadata: title, description, canonical URL,
 * Open Graph and Twitter tags. Relative URLs become absolute through
 * metadataBase (site.url) in app/layout.jsx.
 */
export function pageMetadata({
  title,
  description,
  path,
  ogType = 'website',
  ogImage = site.logos.social,
  publishedTime,
  modifiedTime,
}) {
  const fullTitle = title.endsWith(`| ${site.name}`) ? title : `${title} | ${site.name}`;
  const image = { url: ogImage, alt: title };
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: ogType,
      locale: 'en_US',
      siteName: site.shortName,
      title: fullTitle,
      description,
      url: path,
      images: [image],
      ...(ogType === 'article' ? { publishedTime, modifiedTime: modifiedTime || publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/** Organization + WebSite structured data, shown on every page. */
export function siteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${site.url}/#organization`,
        name: site.shortName,
        url: site.url,
        logo: `${site.url}${site.logos.social}`,
        email: site.email,
        telephone: site.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '700 Smith St',
          addressLocality: 'Houston',
          addressRegion: 'TX',
          postalCode: '77002',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        name: site.shortName,
        url: site.url,
        publisher: { '@id': `${site.url}/#organization` },
        inLanguage: 'en-US',
      },
    ],
  };
}

/** BlogPosting structured data for an article page. */
export function articleJsonLd({ headline, description, path, image, datePublished, dateModified }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    image: `${site.url}${image}`,
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: `${site.url}${path}`,
    author: { '@id': `${site.url}/#organization` },
    publisher: { '@id': `${site.url}/#organization` },
    inLanguage: 'en-US',
  };
}

/** Renders a JSON-LD object as a <script type="application/ld+json">. */
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // < is escaped so the JSON can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
