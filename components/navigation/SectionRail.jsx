import Link from 'next/link';

/**
 * Floating "page sections" rail on wide screens. main2f72.js adds .is-visible
 * after the hero and .is-active to the link of the section in view.
 */
export default function SectionRail({ links }) {
  return (
    <nav
      aria-label="Page sections"
      data-rail=""
      className="fixed top-1/2 left-5 z-80 hidden -translate-x-[150%] -translate-y-1/2 flex-col gap-1 rounded-[26px] border border-white/75 bg-[rgb(251_249_245/0.7)] p-[7px] shadow-[inset_0_1px_0_#fff,0_20px_40px_-22px_rgb(30_20_8/0.4)] backdrop-blur-[24px] backdrop-saturate-[1.6] transition-[translate] duration-[800ms] ease-site min-[1560px]:flex [&.is-visible]:translate-x-0"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          data-rail-link={link.section}
          aria-label={link.label}
          className="group/r relative grid size-10 place-items-center rounded-full text-[#5d5850] focus-visible:rounded-full transition-colors duration-[280ms] hover:bg-ink/6 hover:text-ink [&.is-active]:bg-ink [&.is-active]:text-ivory [&_svg]:size-[17px]"
        >
          <svg aria-hidden="true">
            <use href={link.icon} />
          </svg>
          <span className="pointer-events-none absolute left-[calc(100%+12px)] -translate-x-1 rounded-[8px] bg-ink px-2.5 py-[5px] text-[0.72rem] font-semibold whitespace-nowrap text-ivory opacity-0 transition-[opacity,translate] duration-[280ms] group-hover/r:translate-x-0 group-hover/r:opacity-100 group-focus-visible/r:translate-x-0 group-focus-visible/r:opacity-100">
            {link.text}
          </span>
        </Link>
      ))}
    </nav>
  );
}
