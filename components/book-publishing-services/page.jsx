'use client';

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { site } from '@/lib/site';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import LandingNavbar from '@/components/book-publishing-services/LandingNavbar';
import LandingFooter from '@/components/book-publishing-services/LandingFooter';

/* ---------- shared class names ---------- */
const serif = 'font-display';
const wrap = 'mx-auto w-full max-w-[1304px] px-8 max-[680px]:px-[18px]';
const ease = 'ease-[cubic-bezier(.22,1,.36,1)]';
const h2 = `${serif} m-0 text-[clamp(2.1rem,1.4rem+2.4vw,3.15rem)] leading-[1.06] font-[340] tracking-[-0.025em] text-balance`;
const emGold = 'italic font-light text-[#c9a56a]';
const emDeep = 'italic font-light text-[#8c6a36]';
const eyebrow =
    "mb-[18px] inline-flex items-center gap-3.5 text-xs font-bold tracking-[0.24em] uppercase before:h-px before:w-9 before:bg-current before:content-['']";
const btn = `inline-flex min-h-[54px] cursor-pointer items-center justify-center gap-2.5 rounded-full px-7 text-[15px] font-bold transition duration-300 ${ease}`;
const btnGold = `${btn} bg-[#c9a56a] text-[#15152a] hover:-translate-y-0.5 hover:bg-[#d8b67c] hover:shadow-[0_0_0_6px_rgb(201_165_106/0.18)]`;
const btnLine = `${btn} border border-white/35 text-white hover:border-[#c9a56a] hover:text-[#c9a56a]`;
const field =
    'block min-h-[52px] w-full rounded-[14px] border border-white/15 bg-white/5 px-[18px] text-[15px] text-white outline-none transition-colors duration-300 placeholder:text-white/50 focus:border-[#c9a56a] focus:bg-white/10 aria-[invalid=true]:border-[#ff8f80]';

/* ---------- small helpers ---------- */
const reducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** true once the element has scrolled into view */
function useInView(threshold = 0.15) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;
        if (!('IntersectionObserver' in window)) { setInView(true); return undefined; }
        const io = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } },
            { threshold, rootMargin: '0px 0px -40px 0px' },
        );
        io.observe(el);
        return () => io.disconnect();
    }, [threshold]);
    return [ref, inView];
}

/** endless animation without any CSS file (Web Animations API) */
function useLoop(keyframes, options) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el || reducedMotion() || !el.animate) return undefined;
        const a = el.animate(keyframes, { iterations: Infinity, ...options });
        return () => a.cancel();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return ref;
}

/** fades and slides its content up when scrolled into view */
function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
    const [ref, inView] = useInView();
    return (
        <Tag
            ref={ref}
            style={{ transitionDelay: inView ? `${delay}s` : '0s' }}
            className={`transition-[opacity,translate] duration-[900ms] ${ease} motion-reduce:transition-none ${inView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'
                } ${className}`}
            {...rest}
        >
            {children}
        </Tag>
    );
}

const IMG = '/assets/images/photos/1772196774962-1db8db77a3b0-1000x1200.webp';

// the site's base CSS (fonts, reset) and main script, same as the other pages
const styles = ['/assets/css/site2f72.css?v=20261109-eagle-logo'];
const scripts = ['/assets/js/main2f72.js?v=20261105-production'];

const services = [
    { title: 'Ghostwriting', text: "Got a story to tell but not sure how to put it into words? We’ll sit down with your ideas, listen to your story, and help turn it into a book that sounds like you.", icon: 'M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4' },
    { title: 'Editing & Proofreading', text: "Sometimes a manuscript just needs a little untangling. We’ll work through the structure, smooth out awkward passages, and catch the little errors that are easy to miss after so many rereads.", icon: 'M5 4h11l3 3v13H5zM8 10h8M8 14h8M8 18h5', dark: true },
    { title: 'Cover Design', text: "Readers see your cover before they read a single word. We’ll create one that fits your story, speaks to your genre, and looks just as good on a bookstore shelf as it does on a screen.", icon: 'M6 3h12v18H6zM9 7h6M9 11h6' },
    { title: 'Formatting & Publishing', text: "No more worrying about misplaced pages, odd spacing, or files that aren’t ready for print. We’ll prepare your book for print and digital reading, then help get it listed on major online bookstores.", icon: 'M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3zM5 17a3 3 0 0 1 3-3h11' },
    { title: 'Book Marketing', text: "Getting published is a big moment. Getting your book noticed is the next challenge. We’ll help put together a launch plan, build your author presence, and get your book in front of readers who might love it.", icon: 'M3 11l15-6v14L3 13zM7 12v6h3' },
    { title: 'Audiobook Production', text: "Some readers would rather listen than turn a page. We’ll help find the right narrator, bring your words to life through professional recording, and prepare your audiobook for listening platforms.", icon: 'M12 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3zM6 11a6 6 0 0 0 12 0M12 17v3' },
];

const steps = [
    { title: 'First, let’s talk', text: 'Tell us about your book, share your manuscript or early ideas, and discuss your goals. We’ll assess what kind of support your project needs.' },
    { title: 'A plan you can sign off on', text: 'Receive a written breakdown of services, deliverables, costs, and timelines. Review the details, ask questions, and approve the scope before work begins.' },
    { title: 'Into the making', text: 'Writing, editing, cover design, and formatting take place according to your agreed plan. You’ll review drafts and design proofs, request revisions, and approve each key stage.' },
    { title: 'Ready, set, publish', text: 'You’ll check and approve the final files before release. We then prepare your agreed editions, submit them to the selected platforms, and carry out any planned promotional work.' },
];

// Books on the table, same as the home page. s = size (1 = the lead book), z = stacking order.
const tableBooks = [
    { id: '26', href: '/our-work#book-26', src: '/assets/images/books/book-26-s.webp', w: 360, h: 614, s: 0.52, z: 7, t: 'You vs You', sub: '  ', a: 'Waheed Shaffiek' },
    { id: '23', href: '/our-work#book-23', src: '/assets/images/books/book-23-s.webp', w: 360, h: 614, s: 0.62, z: 8, t: 'Poems of Life', sub: 'Reflections on Life, Love, and the Human Journey', a: 'O’Dell James Ford Sr.' },
    { id: '03', href: '/our-work#corey-t-alston-sr', src: '/assets/images/books/book-03.webp', w: 600, h: 1024, s: 0.74, z: 9, t: 'The Story Book Chronicles: A Dreamy Adventure of Isla and Ava', a: 'Corey T. Alston Sr.' },
    { id: '06', href: '/our-work#lee-roy-jefferson', src: '/assets/images/books/book-6.png', w: 600, h: 1024, s: 1, z: 20, lead: true, t: 'HOW BUILD A FUTURE', sub: 'Reflection at 80', a: 'Robert Wallace' },
    { id: '25', href: '/our-work#virginia-perez-perez', src: '/assets/images/books/book-25.webp', w: 600, h: 1024, s: 0.74, z: 11, t: 'HOW BUILD A FUTURE', sub: 'La Penetración Rusa en Venezuela', a: 'Robert Wallace' },
    { id: '24', href: '/our-work#book-24', src: '/assets/images/books/book-24.png', w: 360, h: 614, s: 0.62, z: 12, t: 'SIX SHORT STORIES', sub: 'Poetry · Humor · Mystery · Adventure', a: 'Patricia Stinson' },
    { id: '18', href: '/our-work#book-18', src: '/assets/images/books/book-18-s.webp', w: 360, h: 614, s: 0.52, z: 13, t: 'BENCH PRESS', sub: 'Volume One', a: 'DAVID REISNER' },
];
const LEAD = tableBooks.findIndex((b) => b.lead);

const reasons = [
    { title: 'Your name, your rights', text: 'The book remains yours. You retain ownership of your work, its files, and the royalties it earns.' },
    { title: 'An editor who knows your project', text: 'You have a dedicated point of contact to review your manuscript, discuss its needs, and guide you through the next steps.' },
    { title: 'The costs are clear from the start', text: 'No vague estimates or unexpected add-ons. You receive an itemised quote outlining the agreed work before the project begins.' },
    { title: 'Everything works together', text: 'Writing, editing, cover design, formatting, and publishing are brought under one roof, so you aren’t left coordinating separate providers.' },
];

const faqs = [
    { q: `What book publishing services does ${site.name} offer?`, a: `${site.name} offers a range of book publishing services, including ghostwriting, editing and proofreading, book cover design, formatting, print and eBook publishing, audiobook production, and book marketing. You can choose individual services or combine them into a complete publishing package.` },
    { q: `How much does it cost to publish a book with ${site.name}?`, a: `The cost depends on your manuscript’s length, its current condition, and the services your book needs. ${site.name} provides a written, itemised quote outlining the proposed work, costs and timeline before anything begins.` },
    { q: `Can ${site.name} help me publish a book if I haven’t finished writing it?`, a: `Absolutely. You can approach ${site.name} with a rough draft, an outline, notes, or even an idea. Depending on your needs, we can discuss ghostwriting, manuscript development, and other services to help move your project towards publication.` },
    { q: 'Will I retain the rights and royalties to my book after publishing?', a: `Yes. Your book remains your intellectual property, and you retain your ownership rights and royalties. ${site.name} works with you to prepare and publish your book without taking ownership of your work.` },
    { q: `Where can I publish my book with ${site.name}?`, a: `${site.name} can prepare your book for print and digital editions and help submit it to major online book retailers and publishing platforms.` },
];

const SERVICE_OPTIONS = services.map((s) => s.title);
const ribbonA = ['Ghostwriting', 'Book Editing', 'Cover Design', 'Formatting', 'Publishing', 'Book Marketing', 'Audiobooks', 'Author Websites'];
const ribbonB = ['Free consultation', 'Your rights stay yours', 'Itemised quote', 'Editor-led', 'Print, eBook & audio'];

/* ---------- form ---------- */
const ENDPOINT = (site.api && site.api.contact) || '/api/lead';

function phoneError(v) {
    const digits = (v || '').replace(/\D/g, '');
    if (!v) return 'Please enter your phone number.';
    if (digits.length < 10) return 'Phone number must be at least 10 digits.';
    if (digits.length > 12) return 'Phone number cannot be more than 12 digits.';
    if (/^(\d)\1+$/.test(digits)) return 'Please enter a valid phone number.';
    return '';
}

function LeadForm({ full = false, subject, button = 'Get My Free Consultation' }) {
    const router = useRouter();
    const [phone, setPhone] = useState('');
    const [phoneErr, setPhoneErr] = useState('');
    const [error, setError] = useState('');
    const [sending, setSending] = useState(false);

    function onPhone(e) {
        const v = e.target.value;
        // letters are removed as you type; one leading + is allowed
        setPhone(((v.charAt(0) === '+' ? '+' : '') + v.replace(/\D/g, '')).slice(0, 12));
        if (phoneErr) setPhoneErr('');
    }

    async function onSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const pErr = phoneError(phone);
        setPhoneErr(pErr);
        if (pErr) { form.elements.phone.focus(); return; }
        if (!form.checkValidity()) { form.reportValidity(); return; }

        setSending(true);
        setError('');
        try {
            const res = await fetch(ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
            let data = {};
            try { data = await res.json(); } catch { /* not JSON */ }
            if (!res.ok || data.ok === false) throw new Error(data.error || '');
            router.push('/thank-you');
        } catch (err) {
            setError(err.message || 'Your message was not sent. Please try again or call us.');
            setSending(false);
        }
    }

    return (
        <form onSubmit={onSubmit} noValidate>
            {/* spam trap: people never see it, bots fill it in */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] size-px opacity-0" />
            <input type="hidden" name="msg_subject" value={subject} />
            <div className="grid grid-cols-2 gap-2.5 max-[680px]:grid-cols-1">
                <label className="block min-w-0">
                    <span className="sr-only">Full name</span>
                    <input className={field} type="text" name="name" placeholder="Full name" autoComplete="name" required maxLength={100} />
                </label>
                <label className="block min-w-0">
                    <span className="sr-only">Email address</span>
                    <input className={field} type="email" name="email" placeholder="Email address" autoComplete="email" required maxLength={150} />
                </label>
                <label className={`block min-w-0 ${full ? '' : 'col-span-full'}`}>
                    <span className="sr-only">Phone number</span>
                    <input
                        className={field}
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        autoComplete="tel"
                        inputMode="tel"
                        required
                        maxLength={12}
                        value={phone}
                        onChange={onPhone}
                        aria-invalid={phoneErr ? 'true' : 'false'}
                    />
                    {phoneErr && <small className="mt-1.5 block text-[12.5px] text-[#ffb4a8]" aria-live="polite">{phoneErr}</small>}
                </label>
                {full && (
                    <>
                        <label className="relative block min-w-0">
                            <span className="sr-only">Service</span>
                            <select className={`${field} appearance-none pr-10 [&>option]:bg-[#21213c]`} name="service" defaultValue="Not sure yet">
                                <option value="Not sure yet">Service: not sure yet</option>
                                {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                            </select>
                            <svg className="pointer-events-none absolute top-[22px] right-[18px] size-2.5 fill-[#c9a56a]" viewBox="0 0 10 6" aria-hidden="true"><path d="M0 0h10L5 6z" /></svg>
                        </label>
                        <label className="col-span-full block min-w-0">
                            <span className="sr-only">Where are you with your book?</span>
                            <textarea className={`${field} min-h-[90px] resize-y py-3.5`} name="message" rows={3} placeholder="Where are you with your book?" maxLength={3000} />
                        </label>
                    </>
                )}
            </div>
            <button type="submit" disabled={sending} className={`${btnGold} mt-3 min-h-14 w-full disabled:cursor-wait disabled:opacity-60`}>
                {sending ? 'Sending…' : button} <span aria-hidden="true"></span>
            </button>
            {error && <p className="m-0 mt-3 text-center text-sm text-[#ffb4a8]" role="status">{error}</p>}
            {full && <p className="m-0 mt-3.5 text-center text-[12.5px] text-white/55">No obligation. Your manuscript stays yours.</p>}
        </form>
    );
}

/* ---------- moving parts ---------- */
function Ribbon({ words, reverse = false, duration = 40000 }) {
    const ref = useLoop([{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], {
        duration,
        easing: 'linear',
        direction: reverse ? 'reverse' : 'normal',
    });
    return (
        <div ref={ref} className="flex w-max">
            {[...words, ...words, ...words, ...words].map((w, i) => (
                <span key={i} className="px-[18px] max-[680px]:px-3">{w}</span>
            ))}
        </div>
    );
}

function FloatingBook({ src, className, x = '0', r = '0deg', delay = 0 }) {
    const ref = useLoop(
        [
            { transform: `translateX(${x}) translateY(0) rotate(${r})` },
            { transform: `translateX(${x}) translateY(-10px) rotate(${r})` },
            { transform: `translateX(${x}) translateY(0) rotate(${r})` },
        ],
        { duration: 6000, easing: 'ease-in-out', delay },
    );
    return (
        <div ref={ref} className={`absolute bottom-0 ${className}`} style={{ transform: `translateX(${x}) rotate(${r})` }}>
            <Image src={src} alt="" width={450} height={768} sizes="170px" priority className="h-auto w-full drop-shadow-[0_26px_30px_rgb(5_5_20/0.6)]" />
        </div>
    );
}

function Sticker() {
    const ref = useLoop(
        [
            { transform: 'rotate(12deg) scale(1)' },
            { transform: 'rotate(6deg) scale(1.05)' },
            { transform: 'rotate(12deg) scale(1)' },
        ],
        { duration: 5000, easing: 'ease-in-out' },
    );

}

/** The books table from the home page: books rise in, the hovered book lifts and the rest dim. */
function BookTable() {
    const [ref, inView] = useInView(0.2);
    const [hover, setHover] = useState(null);
    const focus = tableBooks[hover ?? LEAD];

    return (
        <div ref={ref} className="relative mt-12 pt-10 [--bw:min(21vw,280px)] min-[761px]:max-[1024px]:[--bw:23vw] max-[760px]:-mx-[18px] max-[760px]:pt-2.5 max-[760px]:[--bw:50vw]">
            <div
                onPointerLeave={() => setHover(null)}
                className="relative z-[1] flex items-end justify-center px-[2%] max-[760px]:snap-x max-[760px]:snap-mandatory max-[760px]:items-start max-[760px]:justify-start max-[760px]:overflow-x-auto max-[760px]:border-b max-[760px]:border-[#c9a56a]/50 max-[760px]:px-[18px] max-[760px]:pt-5 max-[760px]:pb-[22px] max-[760px]:[scrollbar-width:none] max-[760px]:[&::-webkit-scrollbar]:hidden"
            >
                {tableBooks.map((b, i) => {
                    const isHover = hover === i;
                    const dimmed = hover !== null && !isHover;
                    const delay = Math.abs(i - LEAD) * 0.12;
                    return (
                        <Link
                            key={b.id}
                            href={b.href}
                            aria-label={`${b.t} by ${b.a}, view in Our Work`}
                            onPointerEnter={() => setHover(i)}
                            onFocus={() => setHover(i)}
                            onBlur={() => setHover(null)}
                            style={{ zIndex: b.z, '--s-d': b.s, transitionDelay: inView ? `${delay}s` : '0s' }}
                            className={`relative inline-flex flex-none flex-col items-center text-inherit no-underline outline-none [--s:var(--s-d)] transition-[opacity,translate] duration-1000 ${ease} motion-reduce:transition-none max-[760px]:mr-[18px] max-[760px]:snap-center max-[760px]:[--s:0.8] ${
                                b.lead
                                    ? 'mx-[calc(var(--bw)*0.02)] max-[760px]:order-first max-[760px]:ml-0 max-[760px]:[--s:1]'
                                    : 'mx-[calc(var(--bw)*-0.07)] max-[760px]:ml-0'
                            } ${inView ? 'translate-y-0 opacity-100' : 'translate-y-[70px] opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'}`}
                        >
                            <span
                                className={`relative block w-[calc(var(--bw)*var(--s))] transition-transform duration-[900ms] ${ease} ${
                                    isHover ? '-translate-y-2.5 scale-[1.035]' : dimmed ? 'translate-y-0.5' : ''
                                }`}
                            >
                                <Image
                                    src={b.src}
                                    width={b.w}
                                    height={b.h}
                                    alt={`${b.t} by ${b.a}, shown as a hardcover book`}
                                    sizes="(max-width: 760px) 50vw, 280px"
                                    className={`relative z-[1] block h-auto w-full transition-[filter] duration-[900ms] ${ease} ${
                                        isHover
                                            ? 'brightness-[1.04] drop-shadow-[16px_30px_28px_rgb(0_0_0/0.6)]'
                                            : dimmed
                                              ? 'brightness-[0.94] saturate-[0.82] drop-shadow-[8px_14px_14px_rgb(0_0_0/0.45)]'
                                              : 'drop-shadow-[12px_20px_20px_rgb(0_0_0/0.5)]'
                                    }`}
                                />
                                <span
                                    aria-hidden="true"
                                    className={`absolute -right-[10%] -bottom-[3%] left-[4%] z-0 h-[9%] rounded-[50%] bg-[radial-gradient(closest-side,rgb(0_0_0/0.7),transparent)] blur-[6px] transition-[opacity,scale,translate] duration-[900ms] ${ease} ${
                                        isHover ? 'translate-y-2 scale-[0.94] opacity-60' : ''
                                    }`}
                                />
                            </span>
                            {/* caption under each book on phones only */}
                            <span aria-hidden="true" className="mt-4 hidden max-w-[calc(var(--bw)*var(--s)+40px)] gap-[3px] text-center max-[760px]:grid">
                                <span className={`${serif} text-base leading-[1.2] text-white`}>{b.t}</span>
                                {b.sub && <span className={`${serif} text-[0.82rem] leading-[1.3] text-white/70 italic`}>{b.sub}</span>}
                                <span className="text-[0.62rem] font-bold tracking-[0.2em] text-[#c9a56a] uppercase">{b.a}</span>
                            </span>
                        </Link>
                    );
                })}
            </div>

            {/* the table top */}
            <div aria-hidden="true" className="relative -mt-3.5 h-[clamp(46px,5vw,70px)] border-t border-[#c9a56a]/40 bg-[linear-gradient(180deg,rgb(201_165_106/0.16),transparent_90%)] max-[760px]:hidden" />
            
        </div>
    );
}

function Faq() {
    const [open, setOpen] = useState(0);
    return (
        <ul className="m-0 list-none border-t-2 border-[#21213c] p-0">
            {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                    <li key={item.q} className="border-b border-[#21213c]/12">
                        <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={`lp-faq-${i}`}
                            onClick={() => setOpen(isOpen ? -1 : i)}
                            className={`${serif} flex w-full cursor-pointer items-center justify-between gap-5 py-[22px] text-left text-[21px] max-[680px]:text-lg`}
                        >
                            {item.q}
                            <span
                                aria-hidden="true"
                                className={`relative size-[30px] flex-none rounded-full border transition-colors duration-300 before:absolute before:top-1/2 before:left-1/2 before:h-[1.5px] before:w-2.5 before:-translate-1/2 before:content-[''] after:absolute after:top-1/2 after:left-1/2 after:h-[1.5px] after:w-2.5 after:-translate-1/2 after:transition-transform after:duration-300 after:content-[''] ${isOpen
                                    ? 'border-[#21213c] bg-[#21213c] before:bg-[#c9a56a] after:rotate-0 after:bg-[#c9a56a]'
                                    : 'border-[#21213c]/12 before:bg-[#8c6a36] after:rotate-90 after:bg-[#8c6a36]'
                                    }`}
                            />
                        </button>
                        <div
                            id={`lp-faq-${i}`}
                            className={`grid transition-[grid-template-rows] duration-[450ms] ${ease} ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                        >
                            <p className={`m-0 overflow-hidden pr-12 text-[15.5px] leading-[1.7] text-[#21213c]/75 max-[680px]:pr-0 ${isOpen ? 'pb-[22px]' : ''}`}>
                                {item.a}
                            </p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

/* ========================================================================== */
export default function PublishYourBookPage() {
    return (
        <div id="top" className={`overflow-x-clip bg-[#fbfaf7] font-sans text-base leading-[1.6] text-[#21213c] antialiased`}>
            <PageStyles styles={styles} />
            <PageScripts styles={styles} scripts={scripts} />
            <LandingNavbar />

            {/* ===== HERO ===== */}
            <section className="relative isolate overflow-hidden bg-[#15152a] pt-40 pb-[120px] text-white/95 max-[680px]:pt-[120px] max-[680px]:pb-[90px]">
                <div aria-hidden="true" className="absolute -inset-5 -z-20 bg-[url(/assets/images/landing/hero.webp)] bg-cover bg-[70%_40%] opacity-30 blur-[2px]" />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(21_21_42/0.97)_0%,rgb(21_21_42/0.86)_45%,rgb(21_21_42/0.55)_100%),radial-gradient(50%_60%_at_78%_55%,rgb(201_165_106/0.22),transparent_70%)]" />

                <div className={`${wrap} grid grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center gap-[60px] max-[1080px]:grid-cols-1`}>
                    <div>
                        <ul className="m-0 p-0 list-none mb-[26px] flex flex-wrap gap-2.5" aria-label="What we do">
                            {['Ghostwriting', 'Editing', 'Cover design', 'Publishing', 'Marketing'].map((p) => (
                                <li key={p} className="rounded-full border border-[#c9a56a]/40 bg-[#c9a56a]/8 px-4 py-2 text-[13px] font-semibold text-[#c9a56a]">{p}</li>
                            ))}
                        </ul>
                        <Reveal as="h1" className={`${serif} m-0 text-[clamp(2.7rem,1.5rem+3.6vw,4.6rem)] leading-[1.02] font-[340] tracking-[-0.035em] text-balance text-white`}>
                            Good Books Don’t Happen <em className={emGold}>by Accident.</em>
                        </Reveal>
                        <Reveal as="p" delay={0.1} className="m-0 mt-6 mb-[34px] max-w-[540px] text-[18.5px] leading-[1.65] text-white/70 max-[680px]:text-[16.5px]">
                            Maybe you’ve finished your manuscript. Maybe you’ve only got a story taking shape in your head. Wherever you are,
                            we’ll help you work through the pages, bring the words and visuals together, and get your book ready for readers.
                            From the first draft to the final published copy, your book stays yours. The decisions do too.
                        </Reveal>
                        <Reveal delay={0.2} className="flex flex-wrap gap-3.5">
                            <a className={`${btnGold} max-[680px]:flex-[1_1_100%]`} href="#start">Let’s Get Your Book Started</a>
                            <a className={`${btnLine} max-[680px]:flex-[1_1_100%]`} href="#books">See Books We&apos;ve Published</a>
                        </Reveal>
                        <Reveal as="p" delay={0.3} className="m-0 mt-10 flex flex-wrap items-center gap-x-[26px] gap-y-2.5 border-t border-white/15 pt-6 text-xs tracking-[0.16em] text-white/70 uppercase">
                            Your book on
                            {['Amazon', 'Barnes & Noble', 'Apple Books', 'Kobo'].map((s) => (
                                <span key={s} className={`${serif} text-[17px] tracking-normal text-white normal-case italic`}>{s}</span>
                            ))}
                        </Reveal>
                    </div>

                    {/* hero form */}
                    <div id="start" className="relative mt-[110px] scroll-mt-28 rounded-[26px] border border-white/15 bg-white/[0.06] p-[30px] backdrop-blur-[14px] max-[1080px]:max-w-[600px] max-[680px]:mt-[120px] max-[680px]:px-[18px] max-[680px]:py-6">
                        <Sticker />
                        <h2 className={`${serif} m-0 text-[27px] font-[340] text-white`}>Tell us about <em className={emGold}>your book</em></h2>
                        <p className="m-0 mt-2 mb-5 text-[14.5px] text-white/70">An editor replies within one business day.</p>
                        <LeadForm full subject="Landing page: hero form" />
                    </div>
                </div>
            </section>

            {/* ===== RIBBONS ===== */}
            <div
                aria-hidden="true"
                className="relative z-[2] -my-10 overflow-hidden py-8 font-sans text-[30px] leading-none font-extrabold tracking-[-0.01em] whitespace-nowrap uppercase max-[680px]:-my-7 max-[680px]:py-6 max-[680px]:text-lg"
            >
                {/* top band: moves left */}
                <div className="relative z-[2] -rotate-[2.6deg] scale-x-[1.08] bg-[linear-gradient(90deg,#15152a_0%,#21213c_40%,#3a3a6e_100%)] py-4 text-white shadow-[0_12px_30px_-14px_rgb(0_0_0/0.6)] max-[680px]:py-3">
                    <Ribbon words={ribbonA} />
                </div>
                {/* bottom band: moves right */}
                <div className="relative z-[1] -mt-1.5 -rotate-[2.2deg] scale-x-[1.08] bg-[linear-gradient(90deg,#e6cc98_0%,#c9a56a_50%,#a3804a_100%)] py-4 text-[#15152a] max-[680px]:py-3">
                    <Ribbon words={ribbonB} reverse duration={46000} />
                </div>
            </div>

            {/* ===== SERVICES ===== */}
            <section id="services" className="scroll-mt-24 bg-[#fbfaf7] py-[clamp(84px,10vw,130px)]">
                <div className={wrap}>
                    <div className="mb-14 grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-end gap-x-[50px] gap-y-6 max-[1080px]:grid-cols-1">
                        <div>
                            <p className={`${eyebrow} m-0 text-[#8c6a36]`}>What we bring to the table</p>
                            <Reveal as="h2" className={h2}>One roof. <em className={emDeep}>Every chapter of your book’s journey.</em></Reveal>
                        </div>
                        <Reveal as="p" delay={0.1} className="m-0 text-[17px] leading-[1.7] text-[#21213c]/75">
                            Writing a book is one thing. Getting it ready for readers is another. Whether you need someone to shape your story,
                            polish your pages, or take care of publishing, you can bring in help wherever things get tricky. Start with one
                            service or let us handle the whole journey.
                        </Reveal>
                    </div>
                    <div className="grid grid-cols-3 gap-[18px] max-[1080px]:grid-cols-2 max-[680px]:grid-cols-1">
                        {services.map((s, i) => (
                            <Reveal
                                as="article"
                                key={s.title}
                                delay={(i % 3) * 0.08}
                                className={`group relative flex flex-col items-start overflow-hidden rounded-[22px] border px-[30px] pt-[34px] pb-[30px] hover:-translate-y-1.5 hover:border-[#a3804a] ${s.dark ? 'border-[#21213c] bg-[#21213c] text-white/95' : 'border-[#21213c]/12 bg-white'
                                    }`}
                            >
                                <span className={`${serif} absolute top-3.5 right-[22px] text-[76px] leading-none font-light ${s.dark ? 'text-white/[0.07]' : 'text-[#21213c]/[0.06]'}`}>
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className={`mb-[26px] grid size-14 place-items-center rounded-2xl transition-colors duration-400 group-hover:bg-[#c9a56a] group-hover:text-[#15152a] ${s.dark ? 'bg-[#c9a56a]/16 text-[#c9a56a]' : 'bg-[#a3804a]/12 text-[#8c6a36]'}`}>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[26px] fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><path d={s.icon} /></svg>
                                </span>
                                <h3 className={`${serif} m-0 mb-2.5 text-[25px] font-[340] tracking-[-0.02em]`}>{s.title}</h3>
                                <p className={`m-0 mb-[22px] flex-1 text-[15.5px] leading-[1.65] ${s.dark ? 'text-white/70' : 'text-[#21213c]/75'}`}>{s.text}</p>
                                <a
                                    href="#start"
                                    className={`inline-flex items-center gap-2 border-b border-current pb-1 text-[13px] font-bold tracking-[0.14em] uppercase ${s.dark ? 'text-[#c9a56a]' : 'text-[#8c6a36]'
                                        }`}
                                >
                                    Learn more
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="size-4 fill-current"
                                    >
                                        <path d="M14,18l-1.4-1.45L16.15,13H4V11H16.15L12.6,7.45L14,6l6,6l-6,6Z" />
                                    </svg>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROCESS ===== */}
            <section id="process" className="scroll-mt-24 bg-[#f4f1ea] py-[clamp(84px,10vw,130px)]">
                <div className={wrap}>
                    <div className="mb-14 grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-end gap-x-[50px] gap-y-6 max-[1080px]:grid-cols-1">
                        <div>
                            <p className={`${eyebrow} m-0 text-[#8c6a36]`}>How it works</p>
                            <Reveal as="h2" className={h2}>Your book doesn’t go from draft to done overnight. <em className={emDeep}>Here’s what happens along the way.</em></Reveal>
                        </div>
                        <Reveal as="p" delay={0.1} className="m-0 text-[17px] leading-[1.7] text-[#21213c]/75">
                            Publishing involves quite a few moving parts. We break them down into clear stages, so you know what’s being worked
                            on, what you’ll receive, and when we need your input. No work moves ahead without your approval at the agreed
                            checkpoints.
                        </Reveal>
                    </div>
                    <ol className="m-0 p-0 list-none relative grid grid-cols-4 before:absolute before:inset-x-0 before:top-[33px] before:h-px before:bg-[linear-gradient(90deg,#a3804a,rgb(163_128_74/0.2))] before:content-[''] max-[1080px]:grid-cols-2 max-[1080px]:gap-y-10 max-[1080px]:before:hidden max-[680px]:grid-cols-1">
                        {steps.map((s, i) => {
                            const last = i === steps.length - 1;
                            return (
                                <Reveal as="li" key={s.title} delay={i * 0.1} className="group relative pr-[30px]">
                                    <span className={`${serif} relative mb-[26px] grid size-[66px] place-items-center rounded-full border text-[22px] italic transition-colors duration-400 group-hover:border-[#21213c] group-hover:bg-[#21213c] group-hover:text-[#c9a56a] ${last ? 'border-[#21213c] bg-[#21213c] text-[#c9a56a]' : 'border-[#a3804a] bg-[#fbfaf7] text-[#8c6a36]'}`}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className={`${serif} m-0 mb-2.5 text-2xl font-[340] tracking-[-0.02em]`}>{s.title}</h3>
                                    <p className="m-0 text-[15px] leading-[1.65] text-[#21213c]/75">{s.text}</p>
                                </Reveal>
                            );
                        })}
                    </ol>
                </div>
            </section>

            {/* ===== BOOKS ===== */}
            <section id="books" className="relative scroll-mt-24 overflow-hidden bg-[#15152a] bg-[radial-gradient(60%_70%_at_50%_100%,rgb(201_165_106/0.18),transparent_70%)] py-[clamp(84px,10vw,130px)] text-center text-white/95">
                <div className={wrap}>
                    <p className={`${eyebrow} m-0 justify-center text-[#c9a56a]`}>From our catalogue</p>
                    <Reveal as="h2" className={`${h2} text-white`}>Stories that made it from <em className={emGold}>page to publication.</em></Reveal>
                    <Reveal as="p" delay={0.1} className="m-0 mx-auto mt-[18px] max-w-[600px] text-[17px] leading-[1.7] text-white/70">
                        A look at books we’ve helped bring into print, across genres and subjects. From personal memoirs and poetry
                        collections to children’s books and business titles, every one has its own story to tell.
                    </Reveal>
                    <BookTable />
                    <div className="mt-10 flex justify-center"><a className={btnGold} href="#start">Start My Book</a></div>
                </div>
            </section>

            {/* ===== WHY US ===== */}
            <section className="bg-[#fbfaf7] py-[clamp(84px,10vw,130px)]">
                <div className={`${wrap} grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-center gap-[70px] max-[1080px]:grid-cols-1`}>
                    <Reveal className="relative max-[1080px]:max-w-[560px]">
                        <Image src={`${IMG}`} alt="Books, pencils and reading glasses on a desk" width={1200} height={795} sizes="(max-width: 1080px) 100vw, 560px" className="aspect-[4/4.4] h-auto w-full rounded-[26px] object-cover" />
                        <div className="absolute bottom-[34px] -left-[26px] rounded-[18px] bg-[#21213c] px-[22px] py-[18px] text-white max-[1080px]:left-4">
                            <b className={`${serif} block text-[30px] font-normal text-[#c9a56a]`}>100%</b>
                            <span className="text-[13px] text-white/70">of the rights stay with you</span>
                        </div>
                    </Reveal>
                    <div>
                        <p className={`${eyebrow} m-0 text-[#8c6a36]`}>Why authors choose us</p>
                        <Reveal as="h2" className={h2}>Good books need <em className={emDeep}>good people behind them.</em></Reveal>
                        <Reveal as="p" delay={0.1} className="m-0 mt-[18px] text-[17px] leading-[1.7] text-[#21213c]/75">
                            Publishing your book shouldn’t mean handing over control or chasing five different people for answers. You get a
                            team that keeps things clear, works to an agreed plan, and respects your say throughout.
                        </Reveal>
                        <ul className="m-0 p-0 list-none mt-[34px] border-t border-[#21213c]/12">
                            {reasons.map((r, i) => (
                                <Reveal as="li" key={r.title} delay={i * 0.08} className="grid grid-cols-[54px_1fr] gap-2.5 border-b border-[#21213c]/12 py-5">
                                    <span className={`${serif} pt-0.5 text-lg text-[#8c6a36] italic`}>{String(i + 1).padStart(2, '0')}</span>
                                    <div>
                                        <h3 className={`${serif} m-0 mb-1 text-[22px] font-[340] tracking-[-0.02em]`}>{r.title}</h3>
                                        <p className="m-0 text-[15px] leading-[1.6] text-[#21213c]/75">{r.text}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== OFFER ===== */}
            <section className="bg-[#fbfaf7] pb-[clamp(84px,10vw,130px)]">
                <div className={wrap}>
                    <Reveal className="relative grid grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-center gap-10 overflow-hidden rounded-[30px] bg-[linear-gradient(120deg,#21213c_0%,#2e2e55_100%)] px-16 py-[60px] text-white max-[1080px]:grid-cols-1 max-[1080px]:px-8 max-[1080px]:py-11">
                        <div aria-hidden="true" className="absolute -top-[120px] -right-[120px] size-[420px] rounded-full bg-[radial-gradient(circle,rgb(201_165_106/0.35),transparent_65%)]" />
                        <div className="relative">
                            <p className={`${eyebrow} m-0 text-[#c9a56a]`}>Free manuscript review</p>
                            <h2 className={`${serif} m-0 text-[clamp(1.9rem,1.3rem+1.8vw,2.75rem)] leading-[1.06] font-[340] tracking-[-0.025em] text-balance text-white`}>
                                Not sure where to begin? <em className={emGold}>Send us what you’ve got.</em>
                            </h2>
                            <p className="m-0 mt-4 max-w-[520px] text-[17px] leading-[1.65] text-white/70">
                                You don’t need a finished manuscript to get started. Share a few pages, an outline, or simply your idea. An
                                editor will review it and suggest the next steps, free of charge and with no obligation to sign up.
                            </p>
                            <ul className="m-0 p-0 list-none mt-[22px] flex flex-wrap gap-x-[22px] gap-y-2.5 text-[14.5px]">
                                {['Editor feedback', 'Recommended next steps', 'Itemised quote'].map((t) => (
                                    <li key={t} className="before:mr-2 before:font-extrabold before:text-[#c9a56a] before:content-['✓']">{t}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative z-[1] grid gap-3">
                            <a className={btnGold} href="#start">Get My Free Review</a>
                            <a className={btnLine} href={`tel:${site.phoneHref}`}>Call {site.phone}</a>
                            <small className="text-center text-[13px] text-white/70">Reply within one business day</small>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section id="faq" className="scroll-mt-24 bg-[#f4f1ea] py-[clamp(84px,10vw,130px)]">
                <div className={`${wrap} grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-[70px] max-[1080px]:grid-cols-1 max-[1080px]:gap-10`}>
                    <div>
                        <p className={`${eyebrow} m-0 text-[#8c6a36]`}>Questions</p>
                        <Reveal as="h2" className={h2}>Frequently asked <em className={emDeep}>questions.</em></Reveal>
                        <p className="m-0 mt-[18px] text-base leading-[1.7] text-[#21213c]/75">Straight answers about rights, process and pricing.</p>
                    </div>
                    <Faq />
                </div>
            </section>
            <LandingFooter />
        </div>
    );
}