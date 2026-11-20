'use client';

import { useEffect } from 'react';

/**
 * Starts the "Selected work" book animation when the shelf scrolls into view.
 * Adds .is-spin to every [data-rw-table] once it is on screen (CSS does the rest).
 * Without JavaScript the books simply stay visible.
 */
export default function BookSpin() {
  useEffect(() => {
    const tables = document.querySelectorAll('[data-rw-table]');
    if (!tables.length) return;
    document.documentElement.classList.add('rw-spin-ready');

    if (!('IntersectionObserver' in window)) {
      tables.forEach((t) => t.classList.add('is-spin'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-spin');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 },
    );
    tables.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return null;
}