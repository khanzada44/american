import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';
import { buttonClass } from '@/components/ui/Button';

const services = [
  ['/ghostwriting', 'Ghostwriting'],
  ['/book-editing', 'Book Editing & Formatting'],
  ['/book-publishing', 'Book Publishing'],
  ['/book-promotion', 'Book Promotion & Marketing'],
  ['/audio-book', 'Audiobook Production'],
  ['/author-website', 'Author Website'],
  ['/copyrights-isbn', 'Copyrights & ISBN'],
  ['/global-distribution', 'Global Distribution'],
  ['/podcasts', 'Podcasts'],
  ['/book-fairs', 'Book Fairs'],
  ['/#services', 'All services'],
];

const explore = [
  ['/book-video', 'Book Video'],
  ['/book-cover-design', 'Book Cover Design'],
  ['/illustration', 'Illustration'],
  // ['/blogs', 'Blogs'],
  ['/terms-and-conditions', 'Terms & Conditions'],
  ['/privacy-policy', 'Privacy Policy'],
];

const heading = 'mt-1.5 mb-[18px] text-label font-bold tracking-[0.16em] text-bronze-2 uppercase';
const list = 'm-0 grid list-none gap-[9px] p-0';
const link = 'transition-colors duration-[280ms] hover:text-on-dark-1';

function LinkList({ items }) {
  return (
    <ul role="list" className={list}>
      {items.map(([href, label]) => (
        <li key={href}>
          <Link href={href} className={link}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  // "footer" is a hook for main2f72.js (made inert while the mobile menu is open)
  return (
    <footer
      className="footer bg-[#ffffff] bg-cover bg-center bg-no-repeat pt-[clamp(64px,8vw,104px)] pb-8 text-[0.88rem] text-on-dark-2"
      style={{
        // photo under a navy veil so the text stays readable
        backgroundImage:
          "linear-gradient(180deg, rgba(21, 21, 42, 0.86) 0%, rgba(21, 21, 42, 0.93) 100%), url('/assets/images/photos/1783711788448-7205acbb2034-2400.webp')",
      }}
    >
      <div className="container-site">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10 border-b border-line-dark pb-[52px] max-[960px]:grid-cols-2 max-[520px]:grid-cols-1">
          <div className="max-[960px]:col-span-full">
            <Image
              src="/assets/images/logo/PublishYourBooksToday-08.png"
              width={800}
              height={320}
              alt={site.name}
              className="mb-5 h-24 w-auto"
            />
            <p className="mt-0 mb-[22px] max-w-[40ch]">
              {`${site.name} helps authors develop manuscripts and prepare books for readers. Ask us about writing, editing, design, publishing and promotion, whether you need one service or support across the project.`}
            </p>
          </div>
          <nav aria-label="Our services">
            <p className={heading}>Book Services</p>
            <LinkList items={services} />
          </nav>
          <nav aria-label="Quick links">
            <p className={heading}>Explore More</p>
            <LinkList items={explore} />
          </nav>
          <div>
            <p className={heading}>Contact Our Team</p>
            <ul role="list" className={`${list} mb-5`}>
              <li>
                <Link href={`mailto:${site.email}`} className={link}>
                  {site.email}
                </Link>
              </li>
              <li>
                <Link href={`tel:${site.phoneHref}`} className={link}>
                  {site.phone}
                </Link>
                <br />
                <Link href={`tel:${site.phoneHref}`} className={link}>
                  {site.phone_2}
                </Link>
              </li>
              <li>{site.address}</li>
            </ul>{' '}
            <button type="button" data-open-lead="" className={buttonClass({ variant: 'light', size: 'sm' })}>
              Plan Your Book
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-5 pt-[26px] text-[0.8rem] text-on-dark-3">
          <p className="m-0">
            {'© '}
            <span data-year="">{new Date().getFullYear()}</span>
            {` ${site.name}. All rights reserved.`}
          </p>
          <div className="flex flex-wrap items-center gap-[18px]">
            <Image
              src="/assets/images/site/payment-methods.webp"
              width="200"
              height="39"
              alt="Accepted payment methods"
              loading="lazy"
              className="h-[26px] w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
