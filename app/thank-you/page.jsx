import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import { buttonClass } from '@/components/ui/Button';
import { site } from '@/lib/site';
import Script from 'next/script';
import ReloadOnArrival from '../../components/ReloadOnArrival/ReloadOnArrival';

// A thank-you page should not appear in Google: noindex, but links are still followed.
export const metadata = {
  ...pageMetadata({
    title: 'Thank You',
    description: 'Thank you for contacting us. An editor will read your note and reply with clear next steps.',
    path: '/thank-you',
  }),
  robots: { index: false, follow: true },
};

const styles = ['/assets/css/site2f72.css?v=20261109-eagle-logo'];
const scripts = ['/assets/js/main2f72.js?v=20261105-production'];

const steps = [
  {
    n: '01',
    title: 'An editor reads your note',
    text: 'A real person reads what you shared about your book, not an automated system.',
  },
  {
    n: '02',
    title: 'We reply within one business day',
    text: 'You get an email or a call with honest answers and the next steps that fit your manuscript.',
  },
  {
    n: '03',
    title: 'A written, itemised quote',
    text: 'If you want to go ahead, you see the full scope and price before any work begins.',
  },
];

const explore = [
  { href: '/our-work', label: 'See books we have published' },
  { href: '/ghostwriting', label: 'Ghostwriting' },
  { href: '/book-editing', label: 'Book editing & formatting' },
  { href: '/book-publishing', label: 'Book publishing' },
  { href: '/faq', label: 'Common questions' },
];

export default function ThankYouPage() {
  return (
    <>
      {/* full page reload when someone lands here from the form */}
      <ReloadOnArrival />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QHXCWNKE7B"
        strategy="afterInteractive"
      />

      <Script id="google-tag" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', 'G-QHXCWNKE7B');
        gtag('config', 'AW-17444542235');
      `}
      </Script>
      <PageStyles styles={styles} />
      <main id="main" className="relative isolate overflow-hidden bg-ivory text-ink">
        {/* soft gold light behind the message */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(163_128_74/0.16),transparent_65%)]"
        />

        <style>{`
          @keyframes ty-ring { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
          @keyframes ty-tick { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
          @keyframes ty-pop  { 0% { transform: scale(0.6); opacity: 0; } 60% { transform: scale(1.06); opacity: 1; } 100% { transform: scale(1); } }
          @keyframes ty-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
          .ty-badge { animation: ty-pop 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
          .ty-ring  { stroke-dasharray: 1; stroke-dashoffset: 1; animation: ty-ring 0.9s cubic-bezier(0.65, 0, 0.35, 1) 0.2s forwards; }
          .ty-tick  { stroke-dasharray: 1; stroke-dashoffset: 1; animation: ty-tick 0.45s cubic-bezier(0.65, 0, 0.35, 1) 0.95s forwards; }
          .ty-rise  { opacity: 0; animation: ty-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s) both; }
          @media (prefers-reduced-motion: reduce) {
            .ty-badge, .ty-ring, .ty-tick, .ty-rise { animation: none; opacity: 1; stroke-dashoffset: 0; }
          }
        `}</style>

        {/* ---------- Message ---------- */}
        <section className="container-site pt-[clamp(140px,16vw,190px)] pb-[clamp(56px,7vw,96px)] text-center">
          <svg
            className="ty-badge mx-auto mb-8 block size-24 text-bronze"
            viewBox="0 0 96 96"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="48" cy="48" r="44" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
            <circle
              className="ty-ring"
              cx="48"
              cy="48"
              r="44"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              pathLength="1"
              transform="rotate(-90 48 48)"
            />
            <path
              className="ty-tick"
              d="M31 49.5 L43 61 L66 36"
              stroke="#21213c"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
          </svg>

          <p
            className="ty-rise m-0 mb-5 text-[0.68rem] font-bold tracking-[0.24em] text-bronze-ink uppercase"
            style={{ '--d': '0.3s' }}
          >
            Message received
          </p>
          <h1
            className="ty-rise mx-auto mt-0 mb-6 max-w-[16ch] font-display text-[clamp(2.4rem,1.4rem+3.6vw,4.6rem)] leading-[1.04] font-[340] tracking-[-0.03em] text-balance text-ink"
            style={{ '--d': '0.4s' }}
          >
            Thank you. <em className="font-[300] text-bronze-ink italic">Your book is in good hands.</em>
          </h1>
          <p
            className="ty-rise mx-auto mt-0 mb-10 max-w-[52ch] text-[clamp(1rem,0.96rem+0.25vw,1.12rem)] leading-relaxed text-on-light-2"
            style={{ '--d': '0.5s' }}
          >
            {`Your details have reached the ${site.name} team. An editor will read your note and get back to you within one business day. Please keep an eye on your inbox, and check the spam folder just in case.`}
          </p>
          <div className="ty-rise flex flex-wrap items-center justify-center gap-3" style={{ '--d': '0.6s' }}>
            <Link href="/" className={buttonClass({ variant: 'primary' })}>
              Back to home
            </Link>
            <Link href="/our-work" className={buttonClass({ variant: 'outlineDark' })}>
              See our work
            </Link>
          </div>
        </section>
        <section className="border-t border-line-light bg-paper py-[clamp(64px,8vw,104px)]">
          <div className="container-site">
            <div className="mb-[clamp(32px,4vw,52px)] flex flex-wrap items-end justify-between gap-6">
              <h2 className="m-0 font-display text-[clamp(1.8rem,1.2rem+2vw,2.8rem)] leading-[1.08] font-[340] tracking-[-0.02em] text-ink">
                What happens <em className="text-bronze-ink italic">next</em>
              </h2>
              <p className="m-0 max-w-[40ch] text-[0.95rem] leading-relaxed text-on-light-2">
                No pressure and no obligation. You decide if and when to start.
              </p>
            </div>
            <ol role="list" className="m-0 grid list-none gap-0 border-t-2 border-ink p-0 md:grid-cols-3">
              {steps.map((s, i) => (
                <li
                  key={s.n}
                  className={`ty-rise py-7 md:px-7 ${i ? 'border-t border-line-light md:border-t-0 md:border-l' : 'md:pl-0'}`}
                  style={{ '--d': `${0.7 + i * 0.12}s` }}
                >
                  <span className="font-display text-[1.6rem] leading-none text-bronze italic">{s.n}</span>
                  <h3 className="mt-3 mb-2 font-display text-[1.3rem] leading-snug font-[400] text-ink">{s.title}</h3>
                  <p className="m-0 text-[0.92rem] leading-relaxed text-on-light-2">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Contact + explore ---------- */}
        <section className="py-[clamp(64px,8vw,104px)]">
          <div className="container-site grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
            <div className="rounded-[22px] bg-ink p-[clamp(26px,3.4vw,40px)] text-on-dark-1">
              <p className="m-0 mb-3 text-[0.66rem] font-bold tracking-[0.22em] text-bronze-2 uppercase">Need us sooner?</p>
              <h2 className="m-0 mb-6 font-display text-[clamp(1.6rem,1.2rem+1.2vw,2.2rem)] leading-[1.1] font-[340] text-ivory">
                Talk to the team <em className="text-bronze-2 italic">today</em>
              </h2>
              <ul role="list" className="m-0 grid list-none gap-3 p-0 text-[0.98rem]">
                <li>
                  <span className="mr-2 text-[0.62rem] font-bold tracking-[0.2em] text-bronze-2 uppercase">Call</span>
                  <a href={`tel:${site.phoneHref}`} className="text-ivory underline decoration-bronze-2/50 underline-offset-4 hover:decoration-bronze-2">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <span className="mr-2 text-[0.62rem] font-bold tracking-[0.2em] text-bronze-2 uppercase">Email</span>
                  <a href={`mailto:${site.email}`} className="text-ivory underline decoration-bronze-2/50 underline-offset-4 hover:decoration-bronze-2">
                    {site.email}
                  </a>
                </li>
                <li className="text-on-dark-2">
                  <span className="mr-2 text-[0.62rem] font-bold tracking-[0.2em] text-bronze-2 uppercase">Visit</span>
                  {site.address}
                </li>
              </ul>
            </div>

            <div>
              <p className="m-0 mb-3 text-[0.66rem] font-bold tracking-[0.22em] text-bronze-ink uppercase">While you wait</p>
              <h2 className="m-0 mb-6 font-display text-[clamp(1.6rem,1.2rem+1.2vw,2.2rem)] leading-[1.1] font-[340] text-ink">
                Explore the <em className="text-bronze-ink italic">studio</em>
              </h2>
              <ul role="list" className="m-0 list-none border-t border-line-light p-0">
                {explore.map((l) => (
                  <li key={l.href} className="border-b border-line-light">
                    <Link
                      href={l.href}
                      className="group flex items-center justify-between gap-4 py-4 font-display text-[1.1rem] text-ink transition-colors hover:text-bronze-ink"
                    >
                      {l.label}
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="size-4 text-bronze transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} styles={styles} />
    </>
  );
}