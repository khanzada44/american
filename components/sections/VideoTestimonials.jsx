'use client';

import { useEffect, useRef } from 'react';

/* ---------- shared class names ---------- */
const card =
  'm-0 flex h-full w-[380px] flex-col gap-5 rounded-[26px] border border-white/10 bg-white p-[clamp(22px,2.4vw,30px)] text-[#21213c] whitespace-normal transition-[border-color,translate] duration-300 hover:-translate-y-1 hover:border-[#c9a56a] max-[680px]:w-[300px]';
const quoteIcon = 'size-7 text-[#a3804a]/35';
const quoteText = 'm-0 flex-1 text-[0.98rem] leading-[1.75] text-[#21213c]/85';
const caption = 'flex items-center gap-4 border-t border-[#21213c]/10 pt-4';
const photo = 'block size-14 shrink-0 rounded-full object-cover ring-2 ring-[#a3804a]/40';
const nameCls = 'm-0 font-display text-[1.08rem] leading-tight font-medium';
const meta = 'm-0 mt-1.5 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-[0.78rem] leading-snug';
const dt = 'font-bold text-[#8c6a36]';
const dd = 'm-0 text-[#21213c]/75';
const QUOTE_PATH =
  'M7.2 5C4.3 6.4 3 8.9 3 12.4V19h6.5v-6.6H6.2c0-2.2.9-3.7 2.8-4.7L7.2 5zm10 0c-2.9 1.4-4.2 3.9-4.2 7.4V19h6.5v-6.6h-3.3c0-2.2.9-3.7 2.8-4.7L17.2 5z';

/* ---------- row 1: three reviews ---------- */
function ReviewsA({ hidden = false }) {
  return (
    <>
      <li className="shrink-0" aria-hidden={hidden || undefined}>
        <figure className={card}>
          <svg viewBox="0 0 24 24" className={quoteIcon} fill="currentColor" aria-hidden="true"><path d={QUOTE_PATH} /></svg>
          <blockquote className={quoteText}>
            Working with Publish Your Books Today made publishing my first book easy and stress-free. Their team guided me every
            step of the way. I would highly recommend them to everyone
          </blockquote>
          <figcaption className={caption}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/reviews/user-1.webp" alt="Austin Max" width="112" height="112" loading="eager" className={photo} />
            <div className="min-w-0">
              <p className={nameCls}>Austin Max</p>
              <dl className={meta}>
                <dt className={dt}>Genre</dt><dd className={dd}>Fiction</dd>
                {/* <dt className={dt}>Service</dt><dd className={dd}>Book Publishing</dd> */}
              </dl>
            </div>
          </figcaption>
        </figure>
      </li>

      <li className="shrink-0" aria-hidden={hidden || undefined}>
        <figure className={card}>
          <svg viewBox="0 0 24 24" className={quoteIcon} fill="currentColor" aria-hidden="true"><path d={QUOTE_PATH} /></svg>
          <blockquote className={quoteText}>
            Publish Your Books Today, helped me with editing, design, and marketing, making the whole process simple and smooth.
            Recommended to all
          </blockquote>
          <figcaption className={caption}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/reviews/user-2.webp" alt="user-2" width="112" height="112" loading="eager" className={photo} />
            <div className="min-w-0">
              <p className={nameCls}>Mark Daniel</p>
              <dl className={meta}>
                <dt className={dt}>Genre</dt><dd className={dd}>Memoir</dd>
                {/* <dt className={dt}>Service</dt><dd className={dd}>Book Marketing</dd> */}
              </dl>
            </div>
          </figcaption>
        </figure>
      </li>

      <li className="shrink-0" aria-hidden={hidden || undefined}>
        <figure className={card}>
          <svg viewBox="0 0 24 24" className={quoteIcon} fill="currentColor" aria-hidden="true"><path d={QUOTE_PATH} /></svg>
          <blockquote className={quoteText}>
            I’m thankful to the team of Publish Your Books Today, The support and advice I received were amazing. They helped me
            improve my story and reach more readers. Keep It Up Guys-
          </blockquote>
          <figcaption className={caption}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/reviews/user-3.webp" alt="user-3" width="112" height="112" loading="eager" className={photo} />
            <div className="min-w-0">
              <p className={nameCls}>Samantha Joseph</p>
              <dl className={meta}>
                <dt className={dt}>Genre</dt><dd className={dd}>Non-fiction</dd>
                {/* <dt className={dt}>Service</dt><dd className={dd}>Ghostwriting</dd> */}
              </dl>
            </div>
          </figcaption>
        </figure>
      </li>
    </>
  );
}

/* ---------- row 2: three reviews ---------- */
function ReviewsB({ hidden = false }) {
  return (
    <>
      <li className="shrink-0" aria-hidden={hidden || undefined}>
        <figure className={card}>
          <svg viewBox="0 0 24 24" className={quoteIcon} fill="currentColor" aria-hidden="true"><path d={QUOTE_PATH} /></svg>
          <blockquote className={quoteText}>
            Working with Publish Your Books Today, I always felt supported and informed. They truly care about helping authors
            succeed.
          </blockquote>
          <figcaption className={caption}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/reviews/user-4.webp" alt="user-4" width="112" height="112" loading="eager" className={photo} />
            <div className="min-w-0">
              <p className={nameCls}>John Sumner</p>
              <dl className={meta}>
                <dt className={dt}>Genre</dt><dd className={dd}>Children’s</dd>
                {/* <dt className={dt}>Service</dt><dd className={dd}>Illustration</dd> */}
              </dl>
            </div>
          </figcaption>
        </figure>
      </li>

      <li className="shrink-0" aria-hidden={hidden || undefined}>
        <figure className={card}>
          <svg viewBox="0 0 24 24" className={quoteIcon} fill="currentColor" aria-hidden="true"><path d={QUOTE_PATH} /></svg>
          <blockquote className={quoteText}>
            One of my friend suggested to me about Publish Your Books Today and trust me as I discuss my book with them, they
            literally put their 100% in it, now my book looks professional and has been well received by readers. I
            couldn’t be happier with the results.
          </blockquote>
          <figcaption className={caption}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/reviews/user-5.webp" alt="user-5" width="112" height="112" loading="eager" className={photo} />
            <div className="min-w-0">
              <p className={nameCls}>Mitchelle Smith</p>
              <dl className={meta}>
                <dt className={dt}>Genre</dt><dd className={dd}>Poetry</dd>
                {/* <dt className={dt}>Service</dt><dd className={dd}>Editing &amp; Proofreading</dd> */}
              </dl>
            </div>
          </figcaption>
        </figure>
      </li>

      <li className="shrink-0" aria-hidden={hidden || undefined}>
        <figure className={card}>
          <svg viewBox="0 0 24 24" className={quoteIcon} fill="currentColor" aria-hidden="true"><path d={QUOTE_PATH} /></svg>
          <blockquote className={quoteText}>
            Thanks to Publish Your Books Today, my book is available worldwide. I’m proud of what we achieved together.
          </blockquote>
          <figcaption className={caption}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/reviews/user-6.webp" alt="user-6" width="112" height="112" loading="eager" className={photo} />
            <div className="min-w-0">
              <p className={nameCls}>Portia Fey</p>
              <dl className={meta}>
                <dt className={dt}>Genre</dt><dd className={dd}>Business</dd>
                {/* <dt className={dt}>Service</dt><dd className={dd}>Cover Design</dd> */}
              </dl>
            </div>
          </figcaption>
        </figure>
      </li>
    </>
  );
}

/**
 * Moves its cards sideways forever (never stops on hover).
 * The cards are shown 4 times so the loop has no gap, even on very wide screens;
 * screen readers only hear the first set.
 */
function MarqueeRow({ reviews: Reviews, reverse = false, duration = 60000 }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el || !el.animate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const anim = el.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], {
      duration,
      iterations: Infinity,
      easing: 'linear',
      direction: reverse ? 'reverse' : 'normal',
    });
    return () => anim.cancel();
  }, [duration, reverse]);

  return (
    <div className="overflow-hidden py-2 motion-reduce:overflow-x-auto">
      <div ref={trackRef} className="flex w-max">
        {[0, 1].map((half) => (
          <ul key={half} role="list" aria-hidden={half === 1 ? 'true' : undefined} className="m-0 flex list-none gap-5 p-0 pr-5">
            <Reviews hidden={half === 1} />
            <Reviews hidden />
          </ul>
        ))}
      </div>
    </div>
  );
}

/** "Why authors love working with us": two rows of testimonial cards moving in opposite directions. */
export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="relative overflow-hidden bg-[#21213c] py-[clamp(64px,8vw,112px)] text-[#f4f1ea]">
      <div className="container-site">
        {/* Editorial bar */}
        <div className="mb-[clamp(40px,6vw,72px)] border-t border-b border-t-[#c9a56a]/60 border-b-white/10 py-4">
          <div className="grid grid-cols-2 items-center gap-4 text-[0.62rem] font-bold tracking-[0.22em] text-white/55 uppercase sm:grid-cols-3">
            <span className="justify-self-start">Publish Your Books Today / Testimonials</span>
            <span className="hidden justify-self-center sm:block">In Their Words</span>
            <span className="justify-self-end">Authors</span>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto mb-[clamp(36px,5vw,56px)] max-w-3xl text-center">
          <h2
            id="testimonials-title"
            className="mt-0 mb-5 font-display text-[clamp(1.8rem,1.2rem+2.4vw,3rem)] leading-[1.12] font-[380] tracking-[-0.02em] text-balance text-white"
          >
            Why Authors Love Working With <em className="font-[330] text-[#c9a56a] italic">Publish Your Books Today</em>
          </h2>
          <p className="m-0 text-[0.95rem] leading-relaxed text-white/65">
            See what our authors say about our services and how we helped turn their plans for a book into a published title.
          </p>
        </div>
      </div>

      {/* Moving rows: full width of the screen */}
      <div className="grid gap-5">
        <MarqueeRow reviews={ReviewsA} duration={60000} />
        <MarqueeRow reviews={ReviewsB} reverse duration={68000} />
      </div>
    </section>
  );
}