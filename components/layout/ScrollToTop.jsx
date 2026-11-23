'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Every new page starts at the top.
 * - A link to a #section still goes to that section.
 * - Back / forward still returns to where the visitor was.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  // remember when the visitor used back / forward
  useEffect(() => {
    const onPop = () => { window.__pybtPop = true; };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    if (window.__pybtPop) { window.__pybtPop = false; return; }
    if (window.location.hash) return;

    const html = document.documentElement;
    const toTop = () => {
      const old = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';           // jump, don't glide (site CSS has smooth)
      window.scrollTo(0, 0);
      html.style.scrollBehavior = old;
    };
    toTop();
    const raf = requestAnimationFrame(toTop);        // once more after the new page has painted
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}