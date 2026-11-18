'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

const videos = [
    { name: 'Author Name', role: 'Writer and illustrator', book: 'Book Title', src: '/assets/videos/author-1.mp4' },
    { name: 'Author Name', role: 'Memoir author', book: 'Book Title', src: '/assets/videos/author-3.mp4' },
    { name: 'Author Name', role: 'Children’s author', book: 'Book Title', src: '/assets/videos/author-4.mp4' },
    { name: 'Author Name', role: 'Music writer and publicist', book: 'Book Title', src: '/assets/videos/author-2.mp4' },
];

const formatTime = (s) => {
    if (!Number.isFinite(s)) return '';
    const m = Math.floor(s / 60);
    return `${m}:${String(Math.round(s % 60)).padStart(2, '0')}`;
};

/** Cover for a card: the poster image if given, otherwise the video's first frame. */
function Cover({ video, onDuration }) {
    if (video.poster) {
        return (
            <Image
                src={video.poster}
                alt=""
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 380px"
                className="object-cover transition-transform duration-700 ease-site group-hover:scale-[1.04]"
            />
        );
    }
    return (
        <video
            src={`${video.src}#t=0.1`}
            muted
            playsInline
            preload="metadata"
            tabIndex={-1}
            aria-hidden="true"
            onLoadedMetadata={(e) => onDuration(e.currentTarget.duration)}
            className="pointer-events-none absolute inset-0 size-full object-cover transition-transform duration-700 ease-site group-hover:scale-[1.04]"
        />
    );
}

function Arrow({ dir }) {
    return (
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d={dir === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
        </svg>
    );
}

const navBtn =
    'grid size-10 cursor-pointer place-items-center rounded-full border border-white/25 bg-transparent text-white transition-colors duration-300 hover:border-bronze hover:bg-bronze hover:text-ink disabled:cursor-default disabled:opacity-35 disabled:hover:border-white/25 disabled:hover:bg-transparent disabled:hover:text-white focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze';

/** "On camera" — scrollable row of author video testimonials. */
export default function VideoTestimonials() {
    const trackRef = useRef(null);
    const [active, setActive] = useState(0);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const [playing, setPlaying] = useState(null);
    const [durations, setDurations] = useState({});

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
        setActive(Math.min(videos.length - 1, Math.round(track.scrollLeft / step())));
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
            aria-labelledby="authors-video-title"
            className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,#2a2119_0%,#15110d_60%)] py-[clamp(64px,8vw,40px)] text-white"
        >
            <div className="container-site">

                {/* Editorial bar */}
                <div className="mb-[clamp(40px,6vw,72px)] border-t border-b border-t-bronze/70 border-b-white/10 py-4">
                    <div className="grid grid-cols-2 items-center gap-4 text-[0.62rem] font-bold tracking-[0.22em] text-white/60 uppercase sm:grid-cols-3">
                        <span className="justify-self-start">Publish Your Books Today / On Camera</span>
                        <span className="hidden justify-self-center sm:block">Author Testimonials</span>
                        <span className="inline-flex items-center gap-2 justify-self-end">

                            Unscripted
                        </span>
                    </div>
                </div>

                {/* Heading */}
                <div className="mx-auto mb-[clamp(36px,5vw,56px)] max-w-3xl text-center">
                    <h2
                        id="authors-video-title"
                        className="mt-0 mb-5 font-display text-[clamp(1.8rem,1.2rem+2.4vw,3rem)] leading-[1.12] font-[380] tracking-[-0.02em] text-balance text-white"
                    >
                        Hear Directly From The Authors{' '}
                        <em className="font-[330] text-bronze italic">We’ve Worked With</em>
                    </h2>
                    <p className="m-0 text-[0.92rem] leading-relaxed text-white/60">
                        Real authors share their experience working with us, from the publishing process to the final delivery of
                        their books. These unscripted video testimonials offer a clear look at the support, communication and
                        results they experienced throughout their projects.
                    </p>
                </div>

                <ul
                    ref={trackRef}
                    role="list"
                    className="relative m-0 flex snap-x snap-mandatory list-none gap-5 overflow-x-auto scroll-smooth p-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {videos.map((v, i) => {
                        const time = v.duration || formatTime(durations[i]);
                        return (
                            <li
                                key={`${v.src}-${i}`}
                                className="w-[78%] shrink-0 snap-start sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]"
                            >
                                <article className="group relative aspect-[3/4] overflow-hidden rounded-[18px] border border-white/10 bg-[#1d1813] shadow-[0_24px_40px_-24px_rgb(0_0_0/0.8)]">
                                    {playing === i ? (
                                        <video
                                            src={v.src}
                                            poster={v.poster || undefined}
                                            controls
                                            autoPlay
                                            playsInline
                                            className="absolute inset-0 size-full bg-black object-cover"
                                        />
                                    ) : (
                                        <>
                                            <Cover video={v} onDuration={(d) => setDurations((prev) => ({ ...prev, [i]: d }))} />
                                            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgb(10_8_6/0.88)_100%)]" aria-hidden="true" />

                                            {/* Duration */}
                                            {time && (
                                                <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[0.68rem] font-semibold text-white backdrop-blur-sm">
                                                    {time}
                                                </span>
                                            )}

                                            {/* Play */}
                                            <button
                                                type="button"
                                                onClick={() => setPlaying(i)}
                                                aria-label={`Play video testimonial from ${v.name}`}
                                                className="absolute top-1/2 left-1/2 grid size-16 -translate-1/2 cursor-pointer place-items-center rounded-full border-0 bg-transparent p-0 focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
                                            >
                                                <span className="absolute inset-0 animate-ping rounded-full bg-bronze/40 motion-reduce:animate-none" aria-hidden="true" />
                                                <span className="absolute inset-0 rounded-full bg-white/25 backdrop-blur-sm" aria-hidden="true" />
                                                <span className="relative grid size-11 place-items-center rounded-full bg-bronze text-ink transition-transform duration-300 group-hover:scale-110">
                                                    <svg viewBox="0 0 24 24" className="ml-0.5 size-4" fill="currentColor" aria-hidden="true">
                                                        <path d="M8 5.5v13l10.5-6.5z" />
                                                    </svg>
                                                </span>
                                            </button>

                                            {/* Name */}
                                            <div className="absolute inset-x-0 bottom-0 p-5">
                                                <h3 className="m-0 font-display text-lg leading-tight font-medium text-white">{v.name}</h3>
                                                <p className="mt-1 mb-0 text-[0.75rem] text-white/65">
                                                    {v.role}, <em className="text-bronze">{v.book}</em>
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </article>
                            </li>
                        );
                    })}
                </ul>

                {/* Controls */}
                <div className="mt-8 flex items-center justify-center gap-4">
                    <button type="button" onClick={() => move(-1)} disabled={atStart} aria-label="Previous videos" className={navBtn}>
                        <Arrow dir="prev" />
                    </button>
                    <div className="flex items-center gap-2">
                        {videos.map((v, i) => (
                            <button
                                key={`${v.src}-dot-${i}`}
                                type="button"
                                onClick={() => goTo(i)}
                                aria-label={`Go to video ${i + 1}`}
                                aria-current={active === i ? 'true' : undefined}
                                className={`h-1.5 cursor-pointer rounded-full border-0 p-0 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze ${active === i ? 'w-7 bg-white' : 'w-1.5 bg-white/35 hover:bg-white/60'
                                    }`}
                            />
                        ))}
                    </div>
                    <button type="button" onClick={() => move(1)} disabled={atEnd} aria-label="Next videos" className={navBtn}>
                        <Arrow dir="next" />
                    </button>
                </div>
            </div>
        </section>
    );
}