import Link from 'next/link';
import { site } from '@/lib/site';

/* ---- edit these if your paths or details are different ---- */
const LOGO = '/assets/images/logo/logo-image.webp';
const TERMS = '/terms-and-conditions';
const PRIVACY = '/privacy-policy';
// Addresses come from site.addresses if you have them there; otherwise put them here.
const ADDRESSES = site.addresses || [
    // { label: 'USA', text: 'Street, City, State ZIP' },
];

const label = 'font-semibold text-white';
const link = 'transition-colors duration-300 hover:text-[#c9a56a]';

/* Landing page footer: logo, about text and disclaimer on the left, contact details on the right. */
export default function LandingFooter() {
    const year = new Date().getFullYear();
    const email = site.email || site.mail;

    return (
        <footer
            className="relative isolate overflow-hidden bg-[#22223d] bg-[radial-gradient(38%_120%_at_100%_50%,rgb(110_96_104/0.55),transparent_70%),linear-gradient(90deg,#21213a_0%,#25254a_55%,#27274f_100%)] text-white/80"
        >
            <div aria-hidden="true" className="h-[3px] bg-[linear-gradient(90deg,#a3804a,#e6cc98,#a3804a)]" />

            <div className="mx-auto grid w-full max-w-[1304px] grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-x-10 gap-y-8 px-6 pt-10 pb-8 max-[900px]:grid-cols-1 max-[680px]:px-[18px] max-[680px]:pt-12 max-[680px]:pb-10">
                {/* left: logo + about */}
                <div className="min-w-0">
                    <a href="#top" aria-label={`${site.name} home`} className="inline-block">
                        <img src={LOGO} alt={site.name} className="block h-[86px] w-auto brightness-0 invert max-[680px]:h-[68px]" />
                    </a>
                    <p className="m-0 mt-8 max-w-[640px] text-[16.5px] leading-[1.7] text-white/85">
                        We help authors turn their ideas into books that inform, entertain and inspire. From ghostwriting and editing to
                        cover design, publishing and marketing, our team takes care of every stage while your voice and your rights stay
                        yours.
                    </p>
                    <p className="m-0 mt-6 max-w-[640px] text-[13px] leading-[1.65] text-white/55">
                        An independent self-publishing assistance company. We are not an official affiliate, reseller or subsidiary of
                        Amazon.com Inc., Kindle Direct Publishing or Ingram Content Group.
                    </p>
                </div>

                {/* right: contact */}
                <div className="min-w-0">
                  
                    <ul className="m-0 grid list-none gap-5 p-0 text-[15px] leading-[1.6]">
                        {ADDRESSES.map((a) => (
                            <li key={a.label} className="grid grid-cols-[22px_minmax(0,1fr)] gap-3">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 size-[18px] fill-[#c9a56a]"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
                                <span><span className={label}>Mailing Address: {a.label}</span><br />{a.text}</span>
                            </li>
                        ))}
                        {site.phone && (
                            <li className="grid grid-cols-[22px_minmax(0,1fr)] gap-3">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 size-[18px] fill-[#c9a56a]"><path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" /></svg>
                                <span><span className={label}>Phone Number</span><br /><a className={link} href={`tel:${site.phoneHref}`}>{site.phone}</a></span>
                            </li>
                        )}
                        {email && (
                            <li className="grid grid-cols-[22px_minmax(0,1fr)] gap-3">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 size-[18px] fill-[#c9a56a]"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4.4 7H4v.6l8 5.4 8-5.4V7h-.4z" /></svg>
                                <span className="min-w-0"><span className={label}>Email Address</span><br /><a className={`${link} break-all`} href={`mailto:${email}`}>{email}</a></span>
                            </li>
                        )}
                    </ul>
                    <a
                        href="#start"
                        className="mt-8 inline-flex min-h-[46px] items-center justify-center rounded-[10px] bg-[#c9a56a] px-5 text-[14px] font-extrabold tracking-[0.06em] text-[#15152a] uppercase transition duration-300 hover:-translate-y-0.5 hover:bg-[#d8b67c]"
                    >
                        Request Quote
                    </a>
                </div>
            </div>

            {/* bottom bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto flex w-full max-w-[1304px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-8 py-6 text-[14.5px] max-[680px]:flex-col max-[680px]:px-[18px] max-[680px]:text-center">
                    <p className="m-0">©{year} {site.name}. All rights reserved.</p>
                    <nav aria-label="Legal" className="flex gap-6">
                        <Link className={link} href={TERMS}>Terms &amp; Conditions</Link>
                        <Link className={link} href={PRIVACY}>Privacy Policy</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}