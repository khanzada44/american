'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

const reviews = [
  { name: 'Author Name', photo: '', genre: 'Fiction', service: 'Book Publishing', ref: '', quote: 'Replace this with the author’s own words about working with us.' },
  { name: 'Author Name', photo: '', genre: 'Memoir', service: 'Book Marketing', ref: '', quote: 'Replace this with the author’s own words about working with us.' },
  { name: 'Author Name', photo: '', genre: 'Non-fiction', service: 'Ghostwriting', ref: '', quote: 'Replace this with the author’s own words about working with us.' },
  { name: 'Author Name', photo: '', genre: 'Children’s', service: 'Illustration', ref: '', quote: 'Replace this with the author’s own words about working with us.' },
];

const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

function Arrow({ dir }) {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
    </svg>
  );
}

const navBtn =
  'grid size-10 cursor-pointer place-items-center rounded-full border border-white/25 bg-transparent text-white transition-colors duration-300 hover:border-[#c9a56a] hover:bg-[#c9a56a] hover:text-[#21213c] disabled:cursor-default disabled:opacity-35 disabled:hover:border-white/25 disabled:hover:bg-transparent disabled:hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a56a]';

/** "Why authors love working with us": a row of written testimonial cards. */
export default function Testimonials() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const step = useCallback(() => {
    const track = trackRef.current;
    const first = track?.firstElementChild;
    if (!first) return 1;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return first.offsetWidth + gap;
  }, []);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.min(reviews.length - 1, Math.round(track.scrollLeft / step())));
    setAtStart(track.scrollLeft <= 2);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 2);
  }, [step]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    update();
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      track.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const goTo = (i) => {
    const track = trackRef.current;
    const card = track?.children[i];
    if (card) track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
  };
  const move = (dir) => trackRef.current?.scrollBy({ left: dir * step(), behavior: 'smooth' });

  return (
    <section
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden bg-[#21213c] py-[clamp(64px,8vw,112px)] text-[#f4f1ea]"
    >
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
            Why Authors Love Working With{' '}
            <em className="font-[330] text-[#c9a56a] italic">Publish Your Books Today</em>
          </h2>
          <p className="m-0 text-[0.95rem] leading-relaxed text-white/65">
            See what our authors say about our services and how we helped turn their plans for a book into a published title.
          </p>
        </div>

        {/* Cards */}
        <ul
          ref={trackRef}
          role="list"
          className="relative m-0 flex snap-x snap-mandatory list-none gap-5 overflow-x-auto scroll-smooth p-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((r, i) => (
            <li
              key={i}
              className="w-[86%] shrink-0 snap-start sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]"
            >
              <figure className="m-0 flex h-full flex-col gap-5 rounded-[26px] border border-white/10 bg-white text-[#21213c] p-[clamp(22px,2.4vw,30px)] transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#c9a56a]">
                <figcaption className="flex items-center gap-4">
                  {r.photo ? (
                    <Image
                      src={r.photo}
                      alt=""
                      width="120"
                      height="120"
                      loading="lazy"
                      className="size-14 shrink-0 rounded-full object-cover ring-2 ring-[#a3804a]/40"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="grid size-14 shrink-0 place-items-center rounded-full bg-[#21213c] font-display text-[1.1rem] text-[#c9a56a]"
                    >
                      {initials(r.name)}
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="m-0 font-display text-[1.08rem] leading-tight font-medium">{r.name}</p>
                    <dl className="m-0 mt-1.5 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-[0.78rem] leading-snug">
                      <dt className="font-bold text-[#8c6a36]">Genre</dt>
                      <dd className="m-0 text-[#21213c]/75">{r.genre}</dd>
                      <dt className="font-bold text-[#8c6a36]">Service</dt>
                      <dd className="m-0 text-[#21213c]/75">{r.service}</dd>
                      {r.ref && (
                        <>
                          <dt className="font-bold text-[#8c6a36]">Project</dt>
                          <dd className="m-0 text-[#21213c]/75">{r.ref}</dd>
                        </>
                      )}
                    </dl>
                  </div>
                </figcaption>

                <svg viewBox="0 0 24 24" className="size-7 text-[#a3804a]/35" fill="currentColor" aria-hidden="true">
                  <path d="M7.2 5C4.3 6.4 3 8.9 3 12.4V19h6.5v-6.6H6.2c0-2.2.9-3.7 2.8-4.7L7.2 5zm10 0c-2.9 1.4-4.2 3.9-4.2 7.4V19h6.5v-6.6h-3.3c0-2.2.9-3.7 2.8-4.7L17.2 5z" />
                </svg>
                <blockquote className="m-0 flex-1 text-[0.98rem] leading-[1.75] text-[#21213c]/85">{r.quote}</blockquote>
              </figure>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button type="button" onClick={() => move(-1)} disabled={atStart} aria-label="Previous testimonials" className={navBtn}>
            <Arrow dir="prev" />
          </button>
          <div className="flex items-center gap-2.5">
            {reviews.map((r, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={active === i ? 'true' : undefined}
                className={`size-2.5 cursor-pointer rounded-[2px] border-0 p-0 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a56a] ${
                  active === i ? 'bg-[#c9a56a]' : 'bg-white/35 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          <button type="button" onClick={() => move(1)} disabled={atEnd} aria-label="Next testimonials" className={navBtn}>
            <Arrow dir="next" />
          </button>
        </div>
      </div>
    </section>
  );
}