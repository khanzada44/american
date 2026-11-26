import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';

export const metadata = pageMetadata({
  title: 'Could Your Book Go Big? Book Billboard Advertising Campaigns',
  description:
    'Put your title in the public eye with book billboard advertising. Promote your book and author name through outdoor campaigns in high-visibility locations.',
  path: '/billboard-campaigns',
});

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/services-plus2f72.css?v=20261003',
  '/assets/css/forms.css?v=20261105-production',
  '/assets/css/widgets.css?v=20261105',
];

const railLinks = [
  {
    href: '#top',
    section: 'top',
    label: 'Top',
    icon: '#i-home',
    text: 'Top',
  },
  {
    href: '#sig-title',
    section: 'sig-title',
    label: 'Overview',
    icon: '#i-book',
    text: 'Overview',
  },
  {
    href: '#inc-title',
    section: 'inc-title',
    label: 'Where we help',
    icon: '#i-pen',
    text: 'Services',
  },
  {
    href: '#contact',
    section: 'contact',
    label: 'Contact',
    icon: '#i-chat',
    text: 'Contact',
  },
];

const scripts = ['/assets/js/service-page2f72.js?v=20261003', '/assets/js/main2f72.js?v=20261105-production'];

export default function BillboardCampaignsPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="ns-hero ns-hero--dark on-dark" id="top" aria-labelledby="ns-title">
          <div className="ns-hero__bg" aria-hidden="true">
            <Image data-auto-size="" width="2000" height="1333" loading="eager"
              src="/assets/images/photos/1788079029808-c51c6d8bc04d-2000.webp"
              alt=""
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="container">
            <nav className="ns-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/#services">Services</Link>
                </li>
                <li aria-current="page">Billboard Campaigns</li>
              </ol>
            </nav>
            <div className="ns-hero__copy">
              <p className="ns-eyebrow">
                <span />
                Marketing and visibility
              </p>
              <h1 className="ns-title" id="ns-title">
                {'Make your cover '}
                <em>the talk of the town.</em>
              </h1>
              <p className="ns-lead">
                Imagine your book rising above a busy street. We plan outdoor campaigns from bold artwork to booking
                logistics, and we deliver the production files each location requires.
              </p>
              <div className="ns-hero__btns">
                <button className="btn btn--primary" type="button" data-open-lead="">
                  {'Plan My Billboard '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>
              </div>
              <ul className="ns-chips" role="list">
                <li>Digital billboards</li>
                <li>Static boards</li>
                <li>{'Street & transit'}</li>
                <li>Campaign creative</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="ns-intro" aria-label="Introduction">
          <div className="container ns-intro__grid">
            <p className="ns-intro__state ns-rv">Blink and it’s gone, so make it count.</p>
            <div className="ns-intro__side ns-rv">
              <p>
                A passing driver gives you a glance, not a chapter. We simplify your cover and distill one clear message,
                then coordinate the practical details of the proposed placement. Availability and media costs are confirmed during planning.
              </p>
              <p className="ns-intro__part">
                {'Part of '}
                <Link href="/#services">{'Marketing & Visibility'}</Link>
              </p>
            </div>
          </div>
        </section>
        <section className="ns-sig ns-bb on-dark" aria-labelledby="sig-title">
          <div className="ns-bb__bg" aria-hidden="true">
            <Image data-auto-size="" width="2000" height="3000"
              src="/assets/images/photos/1703725164412-f0c2882c7582-2000.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.06"
            />
          </div>
          <div className="container ns-bb__grid">
            <div className="ns-sig__head">
              <p className="ns-label ns-rv">The board</p>
              <h2 className="ns-h2 ns-rv" id="sig-title">
                {'A clear message '}
                <em>at a larger scale.</em>
              </h2>
              <ol className="ns-bb__rules ns-rv" role="list">
                <li>
                  <span>01</span>
                  The cover, large
                </li>
                <li>
                  <span>02</span>
                  One clear message
                </li>
                <li>
                  <span>03</span>
                  Readable at a distance
                </li>
                <li>
                  <span>04</span>
                  Where to find the book
                </li>
              </ol>
            </div>
            <figure className="ns-bb__board ns-rv" aria-label="Example billboard layout">
              <div className="ns-bb__face">
                <span className="ns-bb__cover" aria-hidden="true">
                  <i />
                </span>
                <span className="ns-bb__copy">
                  <span className="ns-bb__k">A new book</span>
                  <span className="ns-bb__t">
                    {'Your title, '}
                    <em>in lights.</em>
                  </span>
                  <span className="ns-bb__a">Your name · Available now</span>
                </span>
              </div>{' '}
              <span className="ns-bb__legs" aria-hidden="true" /> <figcaption>Example billboard layout</figcaption>
            </figure>
          </div>
        </section>
        <section className="ns-inc" aria-labelledby="inc-title">
          <div className="container ns-inc__grid">
            <div className="ns-inc__head">
              <p className="ns-label ns-rv">Where we help</p>
              <h2 className="ns-h2 ns-rv" id="inc-title">
                From sketch to skyline.
              </h2>
              <figure className="ns-inc__fig ns-rv">
                <Image data-auto-size="" width="900" height="1100"
                  src="/assets/images/photos/1788079029808-c51c6d8bc04d-900x1100.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <ol className="ns-inc__list ns-rv" role="list">
              <li>
                <span className="ns-inc__n">01</span>
                <h3 className="ns-inc__t">Campaign planning</h3>
                <p className="ns-inc__d">Define your goals, dates and display formats.</p>
              </li>
              <li>
                <span className="ns-inc__n">02</span>
                <h3 className="ns-inc__t">Artwork and messaging</h3>
                <p className="ns-inc__d">A striking cover image paired with words that read at a glance.</p>
              </li>
              <li>
                <span className="ns-inc__n">03</span>
                <h3 className="ns-inc__t">Technical specs</h3>
                <p className="ns-inc__d">Your design adapted to each location’s size and file requirements.</p>
              </li>
              <li>
                <span className="ns-inc__n">04</span>
                <h3 className="ns-inc__t">Booking coordination</h3>
                <p className="ns-inc__d">We check locations and availability with media owners.</p>
              </li>
              <li>
                <span className="ns-inc__n">05</span>
                <h3 className="ns-inc__t">Print and digital files</h3>
                <p className="ns-inc__d">Final artwork prepared for printed or digital screens.</p>
              </li>
              <li>
                <span className="ns-inc__n">06</span>
                <h3 className="ns-inc__t">Photo documentation</h3>
                <p className="ns-inc__d">Pictures of your live placement to share on your own channels.</p>
              </li>
            </ol>
          </div>
        </section>
        <section className="ns-steps" aria-labelledby="steps-title">
          <div className="container">
            <p className="ns-label ns-rv" id="steps-title">
              How we work: four steps from idea to installation
            </p>
            <ol className="ns-steps__list ns-rv" role="list">
              <li>
                <span>01</span>
                <b>Brief</b>
                <p>Tell us about your book, your readers and the places you are considering.</p>
              </li>
              <li>
                <span>02</span>
                <b>Design</b>
                <p>Review the creative direction and campaign artwork.</p>
              </li>
              <li>
                <span>03</span>
                <b>Booking</b>
                <p>Confirm location, dates, specs and costs.</p>
              </li>
              <li>
                <span>04</span>
                <b>Go live</b>
                <p>We coordinate delivery and keep records of your campaign.</p>
              </li>
            </ol>
          </div>
        </section>
        <section className="ns-rel" aria-labelledby="rel-title">
          <div className="container ns-rel__grid">
            <div>
              <p className="ns-label">Beyond the billboard</p>
              <h2 className="ns-rel__title" id="rel-title">
                More ways to amplify your book.
              </h2>{' '}
              <Link className="ns-link" href="/#services">
                {'All services '}
                <svg aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
            </div>
            <ul className="ns-rel__list" role="list">
              <li>
                <Link href="/book-promotion">
                  <span className="ns-rel__t">{'Book Promotion & Marketing'}</span>
                  <span className="ns-rel__d">
                    A promotion plan that gets your book noticed by the right audience.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/author-website">
                  <span className="ns-rel__t">Author Website</span>
                  <span className="ns-rel__d">
                    A single online destination where readers can explore your work.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/web-social-media">
                  <span className="ns-rel__t">{'Web & Social Media'}</span>
                  <span className="ns-rel__d">
                    A joined-up plan for your website and social profiles.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/podcasts">
                  <span className="ns-rel__t">Podcasts</span>
                  <span className="ns-rel__d">
                    Interview preparation, or a podcast built around your voice.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/tv-interviews">
                  <span className="ns-rel__t">TV Interviews</span>
                  <span className="ns-rel__d">
                    Media prep and outreach materials that help you face the camera with confidence.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/book-fairs">
                  <span className="ns-rel__t">Book Fairs</span>
                  <span className="ns-rel__d">
                    Event-ready materials and presentation support for the fairs you choose.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="cta on-dark ns-cta" id="contact" aria-labelledby="cta-title">
          <div className="cta__media" aria-hidden="true">
            <Image data-auto-size="" width="1600" height="2400"
              src="/assets/images/photos/1703725164412-f0c2882c7582-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Billboard Campaigns
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Where should your book '}
                <em>make its debut?</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                Share your book and the audience you hope to reach. We will review your message and be in touch.
              </p>
              <div className="ns-cta__btns" data-reveal="" style={{ '--d': '.2s' }}>
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Plan Your Book '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>{' '}
                <Link className="btn btn--glass" href="/contact">
                  <svg className="btn__icon" aria-hidden="true">
                    <use href="#i-phone" />
                  </svg>
                  Speak With Us
                </Link>
              </div>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} styles={styles} />
    </>
  );
}