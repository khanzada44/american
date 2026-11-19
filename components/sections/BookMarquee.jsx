import Image from 'next/image';

/*
 * Book covers in /public/assets/images/service-cover (440 × 660 WebP).
 * Add, remove or reorder covers here. Write the book title in `alt`.
 */
const topRow = [
  { src: '/assets/images/service-cover/1.webp', alt: 'cover 1' },
  { src: '/assets/images/service-cover/2.webp', alt: 'cover 2' },
  { src: '/assets/images/service-cover/3.webp', alt: 'cover 3' },
  { src: '/assets/images/service-cover/4.webp', alt: 'cover 4' },
  { src: '/assets/images/service-cover/5.webp', alt: 'cover 5' },
  { src: '/assets/images/service-cover/6.webp', alt: 'cover 6' },
  { src: '/assets/images/service-cover/7.webp', alt: 'cover 7' },
  { src: '/assets/images/service-cover/8.webp', alt: 'cover 8' },
  { src: '/assets/images/service-cover/9.webp', alt: 'cover 9' },
  { src: '/assets/images/service-cover/10.webp', alt: 'cover 10' },
  { src: '/assets/images/service-cover/11.webp', alt: 'cover 11' },
  { src: '/assets/images/service-cover/12.webp', alt: 'cover 12' },
];

const bottomRow = [
  { src: '/assets/images/service-cover/alaukik-ke-saath-bada-hona-1.webp', alt: 'cover alaukik-ke-saath-bada-hona-1' },
  { src: '/assets/images/service-cover/alaukik-ke-saath-bada-hona-2.webp', alt: 'cover alaukik-ke-saath-bada-hona-2' },
  { src: '/assets/images/service-cover/2.webp', alt: 'cover 2' },
  { src: '/assets/images/service-cover/11.webp', alt: 'cover 11' },
  { src: '/assets/images/service-cover/3.webp', alt: 'cover 3' },
  { src: '/assets/images/service-cover/4.webp', alt: 'cover 4' },
  { src: '/assets/images/service-cover/5.webp', alt: 'cover 5' },
  { src: '/assets/images/service-cover/12.webp', alt: 'cover 12' },
  { src: '/assets/images/service-cover/1.webp', alt: 'cover 1' },
  { src: '/assets/images/service-cover/6.webp', alt: 'cover 6' },
  { src: '/assets/images/service-cover/7.webp', alt: 'cover 7' },
  { src: '/assets/images/service-cover/8.webp', alt: 'cover 8' },
  { src: '/assets/images/service-cover/9.webp', alt: 'cover 9' },
  { src: '/assets/images/service-cover/10.webp', alt: 'cover 10' },
];

/*
 * direction: 'left'  → covers move right-to-left
 * direction: 'right' → covers move left-to-right
 * speed: seconds for one full loop (bigger = slower)
 */
const rows = [
  { covers: topRow, direction: 'left', speed: 50 },
  { covers: bottomRow, direction: 'right', speed: 80 },
];

function Row({ covers: list, direction, speed }) {
  return (
    <div className="relative flex overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,#000_7%,#000_93%,transparent)]">
      {/* The covers are rendered twice so the loop is seamless; the copy is hidden from screen readers. */}
      <ul
        role="list"
        className="m-0 flex w-max shrink-0 list-none p-0 will-change-transform"
        style={{
          animation: `${direction === 'left' ? 'bm-left' : 'bm-right'} ${speed}s linear infinite`,
        }}
      >
        {[...list, ...list].map((cover, i) => {
          const copy = i >= list.length;
          return (
            <li key={`${cover.src}-${i}`} aria-hidden={copy || undefined} className="shrink-0 pr-4 sm:pr-5 lg:pr-6">
              <Image
                src={cover.src}
                width="440"
                height="660"
                alt={copy ? '' : cover.alt}
                loading="lazy"
                sizes="(max-width: 640px) 96px, 148px"
                className="aspect-[2/3] h-auto w-24 rounded-[3px] object-cover shadow-[0_18px_28px_-14px_rgb(33_33_60/0.55),0_2px_6px_rgb(33_33_60/0.12)] sm:w-[124px] lg:w-[148px]"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** "Proof in print" — two endless rows of published book covers. */
export default function BookMarquee() {
  return (
    <section
      aria-labelledby="proof-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f6f1e8_100%)] py-[clamp(64px,8vw,112px)]"
    >
      {/* Keyframes live here so the section works without any globals.css changes */}
      <style>{`
        @keyframes bm-left  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
        @keyframes bm-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>

      {/* Decorative gold + navy strips, top right */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 -right-10 h-14 w-[min(420px,40vw)] -skew-x-[30deg] -rotate-[8deg] bg-[#a3804a]/35"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-6 h-14 w-[min(380px,34vw)] -skew-x-[30deg] -rotate-[8deg] border border-[#21213c]/25"
      />

      <div className="container-site relative text-center">
        <p className="mt-0 mb-4 text-[0.68rem] font-bold tracking-[0.24em] text-[#a3804a] uppercase">Proof in print</p>
        <h2
          id="proof-title"
          className="mx-auto mt-0 mb-[clamp(36px,5vw,56px)] max-w-[22ch] font-display text-[clamp(1.9rem,1.25rem+2.5vw,3.4rem)] leading-[1.12] font-[380] tracking-[-0.02em] text-balance text-[#21213c] sm:max-w-none"
        >
          Books in Almost Every Genre You Can Think Of.{' '}
          <em className="block font-[330] text-[#a3804a] italic">Here Are a Few of Them.</em>
        </h2>
        <span aria-hidden="true" className="mx-auto -mt-[clamp(20px,3vw,32px)] mb-[clamp(28px,4vw,44px)] block h-[2px] w-16 rounded-full bg-[#a3804a]" />
      </div>

      <div className="relative grid gap-[clamp(14px,2vw,24px)]">
        {rows.map((row, i) => (
          <Row key={i} {...row} />
        ))}
      </div>
    </section>
  );
}