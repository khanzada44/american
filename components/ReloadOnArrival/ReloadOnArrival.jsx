'use client';

import { useEffect } from 'react';

/**
 * Reloads the page once when the visitor arrived here through a Next.js
 * client-side navigation (router.push / <Link>), so every script on the page
 * (Google tag, Ads conversion, etc.) runs on a fresh, full page load.
 *
 * No loop: after the reload the browser's own navigation entry is this page,
 * so it does not reload again. A visitor who opens the URL directly is not reloaded.
 */
export default function ReloadOnArrival() {
  useEffect(() => {
    try {
      const nav = performance.getEntriesByType('navigation')[0];
      const loadedPath = nav ? new URL(nav.name).pathname.replace(/\/$/, '') : '';
      const herePath = window.location.pathname.replace(/\/$/, '');
      if (loadedPath !== herePath) window.location.reload();
    } catch {
      /* older browser: leave the page as it is */
    }
  }, []);

  return null;
}