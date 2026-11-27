'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const HIDE_HEADER_FOOTER_PATHS = [
  '/book-publishing-services',
  '/thank-you',
];

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const normalizedPath =
    pathname.replace(/\.html$/i, '').replace(/\/+$/, '') || '/';

  const hideHeaderFooter = HIDE_HEADER_FOOTER_PATHS.includes(normalizedPath);

  return (
    <>
      {!hideHeaderFooter && <Header />}

      {children}

      {!hideHeaderFooter && <Footer />}
    </>
  );
}