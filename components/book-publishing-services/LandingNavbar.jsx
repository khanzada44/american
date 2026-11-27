'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

/* Put your PublishYourBooksToday logo path here (file inside /public). */
const LOGO = '/svg/logo.svg'; // = https://publishyourbookstoday.com/svg/logo.svg (also works on localhost)

const btn =
    'inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[10px] px-5 text-[14px] font-extrabold tracking-[0.06em] uppercase transition duration-300 ease-[cubic-bezier(.22,1,.36,1)] max-[680px]:min-h-10 max-[680px]:px-3.5 max-[680px]:text-[12px]';
const btnGold = `${btn} bg-[#c9a56a] text-[#15152a] hover:-translate-y-0.5 hover:bg-[#d8b67c] hover:shadow-[0_0_0_5px_rgb(201_165_106/0.2)]`;
const btnLine = `${btn} border border-[#15152a] text-[#15152a] hover:-translate-y-0.5 hover:bg-[#15152a] hover:text-white`;

/** Opens whichever live chat the site has loaded; falls back to a phone call. */
function openChat(e) {
    const w = window;
    try {
        if (w.Tawk_API && typeof w.Tawk_API.maximize === 'function') { e.preventDefault(); w.Tawk_API.maximize(); return; }
        if (w.LiveChatWidget && typeof w.LiveChatWidget.call === 'function') { e.preventDefault(); w.LiveChatWidget.call('maximize'); return; }
        if (w.$zopim && w.$zopim.livechat) { e.preventDefault(); w.$zopim.livechat.window.show(); return; }
        if (typeof w.zE === 'function') { e.preventDefault(); w.zE('messenger', 'open'); return; }
    } catch { /* no chat widget: the link calls the phone number instead */ }
}

/* Landing page navbar: logo on the left, Request Quote + Chat Now on the right. */
export default function LandingNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [logoFailed, setLogoFailed] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
                scrolled
                    ? 'border-[#21213c]/10 bg-white/95 shadow-[0_10px_30px_-14px_rgb(21_21_42/0.35)] backdrop-blur-md'
                    : 'border-[#21213c]/10 bg-white'
            }`}
        >
            {/* thin gold line on top */}
            <div aria-hidden="true" className="h-[3px] bg-[linear-gradient(90deg,#a3804a,#e6cc98,#a3804a)]" />

            <nav
                aria-label="Main"
                className={`mx-auto flex w-full max-w-[1304px] items-center justify-between gap-4 px-8 transition-[padding] duration-300 max-[680px]:px-[18px] ${
                    scrolled ? 'py-2.5' : 'py-2 max-[680px]:py-3'
                }`}
            >
                <a href="#top" aria-label={`${site.name} home`} className="flex min-w-0 items-center">
                    {logoFailed ? (
                        <span className="font-display text-[24px] leading-none font-[340] tracking-[-0.02em] text-[#15152a] max-[680px]:text-lg">
                            Publish Your Book <em className="italic text-[#8c6a36]">Today</em>
                        </span>
                    ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={LOGO}
                            alt={site.name}
                            onError={() => setLogoFailed(true)}
                            className={`block w-auto transition-[height] duration-300 ${scrolled ? 'h-[52px]' : 'h-[66px]'} max-[680px]:h-11`}
                        />
                    )}
                </a>

                <div className="flex flex-none items-center gap-3 max-[680px]:gap-2">
                    {site.phone && (
                        <a
                            href={`tel:${site.phoneHref}`}
                            className="mr-3 hidden items-center gap-2 text-[15px] font-semibold text-[#15152a] transition-colors hover:text-[#8c6a36] min-[1024px]:inline-flex"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[18px] fill-[#8c6a36]">
                                <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
                            </svg>
                            {site.phone}
                        </a>
                    )}
                    <a href="#start" className={btnGold}>
                        Request Quote
                    </a>
                    <a href={`tel:${site.phoneHref}`} onClick={openChat} className={`${btnLine} chat`}>
                        Chat Now
                    </a>
                </div>
            </nav>
        </header>
    );
}