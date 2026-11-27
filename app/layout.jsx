import './globals.css';
import { site } from '@/lib/site';
import { formRules } from '@/lib/forms';
import { bodyClasses } from '@/lib/pages';
import { JsonLd, siteJsonLd } from '@/lib/seo';
import Icons from '@/components/layout/Icons';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LeadModal from '@/components/modals/LeadModal';
import ScrollToTop from '@/components/layout/ScrollToTop';
import SiteChrome from '@/components/layout/SiteChrome';
import ZendeskWidget from '../components/ZendeskWidget/ZendeskWidget'
import Script from 'next/script';
export const metadata = {
  metadataBase: new URL(site.url),
  robots: site.allowIndexing
    ? { index: true, follow: true, 'max-image-preview': 'large' }
    : { index: false, follow: false },
  icons: {
    icon: [
      { url: '/favicon/eagle-logo-32.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/favicon/eagle-logo-192.webp', sizes: '192x192', type: 'image/webp' },
    ],
    apple: '/favicon/eagle-logo-180.png',
  },
  other: { 'msapplication-TileImage': '/favicon/eagle-logo-192.webp' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#F6F2EA',
};

const headScript = `document.documentElement.classList.replace('no-js','js');
window.__aaBadImgs=[];
window.__aaHideImg=function(t){t.style.visibility='hidden';};
window.addEventListener('error',function(e){var t=e.target;if(t&&t.tagName==='IMG'){if(window.__aaHydrated)window.__aaHideImg(t);else window.__aaBadImgs.push(t);}},true);
document.addEventListener('load',function(e){var t=e.target;if(t&&t.tagName==='IMG'&&t.style.visibility==='hidden'){t.style.visibility='';}},true);
window.SiteFormRules=${JSON.stringify(formRules)};
window.SiteApi=${JSON.stringify(site.api)};`;

// Same <body class="..."> the PHP pages had, set before anything is painted.
const bodyClassScript = `(function(m){var p=location.pathname.replace(/\\.html$/,'').replace(/\\/+$/,'')||'/';var c=m[p];if(c)document.body.className=c;})(${JSON.stringify(bodyClasses)});`;

export default function RootLayout({ children }) {
  return (
    // data-scroll-behavior="smooth": Next turns smooth scroll off while it changes page
    <html lang="en-US" className="no-js" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-QHXCWNKE7B"
                        strategy="afterInteractive"
                    />
        
                    <Script id="google-tag" strategy="afterInteractive">
                        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
        
                gtag('js', new Date());
                gtag('config', 'G-QHXCWNKE7B');
                gtag('config', 'AW-17444542235');
              `}
                    </Script>
        <link rel="preload" href="/assets/fonts/manrope-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/fraunces-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
        <script dangerouslySetInnerHTML={{ __html: headScript }} />
      </head>
      <body suppressHydrationWarning>
        {/* <Header/> */}
        
        <script dangerouslySetInnerHTML={{ __html: bodyClassScript }} />

        <ScrollToTop />
        <JsonLd data={siteJsonLd()} />
        <Icons />

        <SiteChrome>
          {children}
        </SiteChrome>

        <LeadModal />
        <ZendeskWidget/>
      </body>
    </html>
  );
}