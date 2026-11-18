'use client';

import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
import { bodyClasses } from '@/lib/pages';
import { applyPage, enter, leave } from '@/lib/legacyRuntime';

const FORMS_JS = '/assets/js/forms.js?v=20261113-next';

/**
 * Runs the original page scripts (assets/js/*.js) for this page, in the same
 * order as the PHP site, on the first load and after every <Link> navigation.
 * When the visitor leaves the page, everything those scripts set up is undone
 * (see lib/legacyRuntime.js), so coming back to a page works like a fresh load.
 */
export default function PageScripts({ scripts = [], styles = [] }) {
  const pathname = usePathname() || '/';
  const route = pathname.replace(/\.html$/, '').replace(/\/+$/, '') || '/';
  const key = [route, ...styles, ...scripts].join('\n');

  const bodyClass = bodyClasses[route] || '';

  // Before paint: only this page's CSS is on, and the right <body class>.
  useLayoutEffect(() => {
    applyPage({ styles, bodyClass });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    enter({ scripts: [FORMS_JS, ...scripts], styles, bodyClass });
    return () => leave();
    // key covers route, styles and scripts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return null;
}
