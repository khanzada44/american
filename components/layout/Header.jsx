'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import { serviceGroups, mainLinks } from '@/lib/navigation';
import { buttonClass, ButtonArrow } from '@/components/ui/Button';

/*
 * State classes are toggled by public/assets/js/main2f72.js:
 *   header[data-header]  .is-scrolled / .is-hidden
 *   li[data-dropdown]    .is-open           (desktop "Services" mega menu)
 *   #mobile-menu         .is-open + hidden  (burger menu)
 * The class names nav__logo, nav__menu, nav__phone and nav__cta have no CSS:
 * the script uses them to make the page inert while the mobile menu is open.
 */

const navLink =
  'relative inline-flex h-10 items-center gap-[5px] rounded-full focus-visible:rounded-full px-3 text-[0.9rem] font-semibold tracking-[0.005em] whitespace-nowrap text-nav ' +
  'transition-colors duration-[280ms] max-[1480px]:px-2 max-[1480px]:text-[0.85rem] hover:text-ink aria-[current=page]:text-ink ' +
  // underline: grows from the left on hover, stays under the current page's link
  "after:pointer-events-none after:absolute after:inset-x-3 after:bottom-1 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-bronze-ink after:content-[''] " +
  'after:transition-transform after:duration-[350ms] after:ease-site max-[1480px]:after:inset-x-2 ' +
  'hover:after:scale-x-100 focus-visible:after:scale-x-100 aria-[current=page]:after:scale-x-100';

const megaLink =
  'group/link flex items-center gap-2.5 rounded-[12px] focus-visible:rounded-[12px] px-2 py-1.5 text-[0.83rem] leading-[1.25] font-semibold text-[#3a3731] ' +
  'transition-[background-color,color] duration-[280ms] hover:bg-white/90 hover:text-ink aria-[current=page]:bg-white/90 aria-[current=page]:text-ink';

const megaFootLink =
  'border-b border-bronze/70 pb-0.5 font-sans text-[0.66rem] font-bold tracking-[0.18em] text-ink not-italic uppercase';

const mobileItem =
  'border-b border-line-light opacity-0 translate-y-3 transition-[opacity,translate] duration-500 ease-site in-[.is-open]:translate-y-0 in-[.is-open]:opacity-100';

const mobileDelays = [
  '',
  'in-[.is-open]:delay-[40ms]',
  'in-[.is-open]:delay-[80ms]',
  'in-[.is-open]:delay-[120ms]',
  'in-[.is-open]:delay-[160ms]',
  'in-[.is-open]:delay-[200ms]',
  'in-[.is-open]:delay-[240ms]',
  'in-[.is-open]:delay-[280ms]',
];

const mobileLink =
  'flex w-full items-center justify-between py-[13px] text-left font-display text-[clamp(1.55rem,6vw,2rem)] font-[330] tracking-[-0.02em]';

export default function Header() {
  const pathname = usePathname() || '/';
  const route = pathname.replace(/\/$/, '') || '/';
  const current = (href) => (route === href ? 'page' : undefined);

  useEffect(() => {
    // Hydration is done: hide images that failed to load before it, and from
    // now on hide broken images immediately (see headScript in app/layout.jsx).
    window.__aaHydrated = true;
    (window.__aaBadImgs || []).forEach((img) => window.__aaHideImg(img));
    window.__aaBadImgs = [];
  }, []);

  return (
    <>
      <header
        data-header=""
        className="pointer-events-none fixed inset-x-0 top-3.5 z-100 transition-transform duration-[550ms] ease-site max-[480px]:top-2.5 [&.is-hidden]:-translate-y-[130%]"
      >
        <nav
          aria-label="Primary"
          className="glass-light pointer-events-auto mx-auto flex h-[68px] w-(--shell-w) items-center gap-3.5 rounded-[22px] border border-white/72 pr-2.5 pl-[18px] shadow-[inset_0_1px_0_rgb(255_255_255/0.85),0_0_0_1px_rgb(120_100_70/0.05),0_18px_40px_-26px_rgb(50_36_18/0.45)] transition-[background-color,box-shadow,width] duration-500 ease-site in-[.is-scrolled]:w-[min(1180px,calc(100vw-var(--edge)*2))] in-[.is-scrolled]:bg-[rgb(251_249_245/0.8)] in-[.is-scrolled]:shadow-[inset_0_1px_0_rgb(255_255_255/0.9),0_0_0_1px_rgb(120_100_70/0.07),0_24px_50px_-24px_rgb(30_22_10/0.4)] max-[480px]:h-[58px] max-[480px]:rounded-[18px] max-[480px]:pr-[7px] max-[480px]:pl-3 min-[1481px]:in-[.is-scrolled]:w-(--shell-w)"
        >
          <Link
            href="/"
            aria-current={current('/')}
            aria-label={`${site.name} home`}
            className="nav__logo block flex-none py-1"
          >
            <Image
              src="/svg/logo.svg"
              width="800"
              height="320"
              alt={site.name}
              priority
              className="aspect-[800/320] h-14 w-auto max-[480px]:h-10"
            />
          </Link>{' '}
          <ul role="list" className="nav__menu mx-auto my-0 flex list-none items-center gap-0 rounded-full p-1 max-[1220px]:hidden">
            <li data-dropdown="" className="group/item relative">
              <button
                type="button"
                aria-expanded="false"
                aria-controls="sub-services"
                className={`${navLink} group-[.is-open]/item:text-ink group-[.is-open]/item:after:scale-x-100`}
              >
                {'Services '}
                <svg
                  aria-hidden="true"
                  className="size-[13px] transition-transform duration-[280ms] group-[.is-open]/item:rotate-180"
                >
                  <use href="#i-down" />
                </svg>
              </button>{' '}
              <div
                id="sub-services"
                className="invisible absolute top-[calc(100%+16px)] -left-3.5 w-[min(940px,calc(100vw-60px))] origin-[20%_0] -translate-y-1.5 scale-[0.99] rounded-[22px] border border-white/80 bg-[rgb(251_249_245/0.97)] px-3.5 pt-3.5 pb-2.5 opacity-0 shadow-[inset_0_1px_0_#fff,0_30px_60px_-24px_rgb(40_28_12/0.35)] backdrop-blur-[24px] backdrop-saturate-[1.6] transition-[opacity,translate,scale,visibility] duration-300 ease-site before:absolute before:inset-x-0 before:-top-[18px] before:h-[18px] before:content-[''] group-[.is-open]/item:visible group-[.is-open]/item:translate-y-0 group-[.is-open]/item:scale-100 group-[.is-open]/item:opacity-100"
              >
                <div className="grid grid-cols-4 gap-1.5">
                  {serviceGroups.map((group, i) => (
                    <div
                      key={group.title}
                      className={i ? 'border-l border-ink/8 pt-1 pr-1 pb-2 pl-2.5' : 'px-1 pt-1 pb-2'}
                    >
                      <p className="mx-2 mt-1.5 mb-2 flex items-baseline gap-2 text-[0.6rem] font-bold tracking-[0.2em] text-bronze-ink uppercase">
                        <span className="font-display text-[0.8rem] font-normal tracking-normal italic">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {group.title}
                      </p>
                      <ul role="list" className="m-0 grid list-none gap-px p-0">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <Link href={link.href} aria-current={current(link.href)} className={megaLink}>
                              <i
                                aria-hidden="true"
                                className="grid size-7 flex-none place-items-center rounded-[9px] bg-ink/5 text-ink not-italic transition-[background-color,color] duration-[280ms] group-hover/link:bg-ink group-hover/link:text-ivory [&_svg]:size-3.5"
                              >
                                <svg>
                                  <use href={link.icon} />
                                </svg>
                              </i>
                              <span>{link.label}</span>
                              {link.badge && <em aria-hidden="true" className="ml-auto h-[0.675rem] w-[1.44727rem] flex-none" />}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between gap-4 border-t border-ink/8 px-2.5 pt-2.5 pb-0.5 font-display text-[0.86rem] text-[#6b665d] italic">
                  <span>17 services, one publishing house, from the first draft to the reader.</span>
                  <div className="flex gap-[18px]">
                    <Link href="/#services" className={megaFootLink}>
                      All services
                    </Link>
                    <Link href="/our-work" aria-current={current('/our-work')} className={megaFootLink}>
                      Our work
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            {mainLinks.map((link) => (
              <li key={link.href} className="relative">
                <Link href={link.href} aria-current={current(link.href)} className={navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-none items-center gap-1.5 max-[1220px]:ml-auto">
            <Link
              href={`tel:${site.phoneHref}`}
              aria-label={`Call ${site.phone}`}
              className="nav__phone inline-flex h-10 items-center gap-2 rounded-full focus-visible:rounded-full px-3 text-[0.88rem] font-semibold text-nav transition-[background-color] duration-[280ms] hover:bg-ink/6 hover:text-ink max-[1480px]:w-[42px] max-[1480px]:justify-center max-[1480px]:p-0 max-[1220px]:hidden [&_svg]:size-[15px]"
            >
              <svg aria-hidden="true">
                <use href="#i-phone" />
              </svg>
              <span className="max-[1480px]:hidden">{site.phone}</span>
            </Link>{' '}
            <button
              type="button"
              data-open-lead=""
              className={buttonClass({
                variant: 'primary',
                size: null,
                className: 'nav__cta min-h-12 rounded-[15px] focus-visible:rounded-[15px] px-5 text-[0.9rem] max-[480px]:hidden',
              })}
            >
              {'Plan Your Book '}
              <ButtonArrow />
            </button>{' '}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="mobile-menu"
              data-burger=""
              className="group/burger relative hidden size-11 rounded-[14px] bg-ink/6 focus-visible:rounded-[14px] max-[1220px]:block"
            >
              <span className="absolute inset-x-[13px] top-[18px] h-[1.5px] rounded-[2px] bg-ink transition-[top,rotate] duration-[450ms] ease-site group-aria-expanded/burger:top-[21.5px] group-aria-expanded/burger:rotate-45" />
              <span className="absolute inset-x-[13px] top-[25px] h-[1.5px] rounded-[2px] bg-ink transition-[top,rotate] duration-[450ms] ease-site group-aria-expanded/burger:top-[21.5px] group-aria-expanded/burger:-rotate-45" />
            </button>
          </div>
        </nav>
      </header>
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile"
        data-mobile-menu=""
        hidden
        className="fixed inset-0 z-90 overflow-y-auto bg-[rgb(246_242_234/0.9)] text-ink opacity-0 backdrop-blur-[28px] backdrop-saturate-[1.5] transition-opacity duration-[450ms] ease-site [&.is-open]:opacity-100"
      >
        <div className="flex min-h-full flex-col px-(--gutter) pt-24 pb-7">
          <p className="mt-0 mb-1.5 text-label font-bold tracking-[0.16em] text-bronze-ink uppercase">Menu</p>
          <ul role="list" className="m-0 list-none p-0">
            <li className={mobileItem}>
              <button
                type="button"
                aria-expanded="false"
                aria-controls="m-services"
                data-m-toggle=""
                className={`group/t ${mobileLink}`}
              >
                {'Services '}
                <svg
                  aria-hidden="true"
                  className="size-5 text-bronze-ink transition-transform duration-[350ms] ease-site group-aria-expanded/t:rotate-45"
                >
                  <use href="#i-plus" />
                </svg>
              </button>{' '}
              <ul id="m-services" role="list" hidden className="m-0 grid list-none grid-cols-2 gap-x-4 gap-y-0.5 p-0 pb-3.5">
                {serviceGroups.map((group, i) => [
                  <li
                    key={group.title}
                    aria-hidden="true"
                    className={`col-span-full text-[0.58rem] font-bold tracking-[0.2em] text-bronze-ink uppercase ${
                      i ? 'mt-2.5 border-t border-ink/8 pt-2.5' : ''
                    }`}
                  >
                    {group.title}
                  </li>,
                  ...group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={current(link.href)}
                        className="block py-[7px] text-[0.93rem] font-semibold text-on-light-2"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )),
                ])}
              </ul>
            </li>
            {mainLinks.map((link, i) => (
              <li key={link.href} className={`${mobileItem} ${mobileDelays[i + 1] || ''}`}>
                <Link
                  href={link.href}
                  aria-current={current(link.href)}
                  data-m-close={link.closeMenu ? '' : undefined}
                  className={mobileLink}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div aria-hidden="true" className="mt-[34px] mb-1.5 flex justify-center gap-0">
            {['cover-06', 'cover-25', 'cover-05'].map((cover, i) => (
              <Image
                key={cover}
                src={`/assets/images/books/${cover}.webp`}
                width="440"
                height="660"
                alt=""
                loading="lazy"
                className={
                  [
                    'h-auto w-[74px] rounded-[3px] shadow-[0_20px_30px_-14px_rgb(30_20_8/0.55)] [transform:rotate(-8deg)_translate(14px,8px)]',
                    'relative z-1 h-auto w-[86px] rounded-[3px] shadow-[0_20px_30px_-14px_rgb(30_20_8/0.55)]',
                    'h-auto w-[74px] rounded-[3px] shadow-[0_20px_30px_-14px_rgb(30_20_8/0.55)] [transform:rotate(8deg)_translate(-14px,8px)]',
                  ][i]
                }
              />
            ))}
          </div>
          <div className="mt-auto grid gap-2.5 pt-[26px]">
            <button type="button" data-open-lead="" className={buttonClass({ variant: 'primary' })}>
              {'Discuss Your Book '}
              <ButtonArrow />
            </button>{' '}
            <Link href={`tel:${site.phoneHref}`} className={buttonClass({ variant: 'outlineDark' })}>
              <svg aria-hidden="true" className="size-[17px] flex-none">
                <use href="#i-phone" />
              </svg>
              {site.phone}
            </Link>{' '}
            <Link href={`mailto:${site.email}`} className="pt-1 text-center text-[0.86rem] text-on-light-3">
              {site.email}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}