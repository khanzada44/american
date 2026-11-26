import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Where Could Readers Find Your Book? Global Book Distribution',
  description:
    'Make your title accessible to readers in different markets through global book distribution. Explore print and digital distribution options for wider book availability.',
  path: '/global-distribution',
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
    label: 'What we handle',
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

export default function GlobalDistributionPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="ns-hero ns-hero--plate" id="top" aria-labelledby="ns-title">
          <div className="container">
            <nav className="ns-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/#services">Services</Link>
                </li>
                <li aria-current="page">Global Distribution</li>
              </ol>
            </nav>
            <div className="ns-hero__copy">
              <p className="ns-eyebrow">
                <span />
                Rights and distribution
              </p>
              <h1 className="ns-title" id="ns-title">
                {'Put your book within '}
                <em>every reader’s reach.</em>
              </h1>
              <p className="ns-lead">
                {`Whether a reader prefers paper, pixels or a library card, ${site.name} prepares your print and digital editions for the channels you choose, with clean title records behind each one.`}
              </p>
              <div className="ns-hero__btns">
                <button className="btn btn--primary" type="button" data-open-lead="">
                  {'Plan My Distribution '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>
              </div>
              <ul className="ns-chips" role="list">
                <li>Print on demand</li>
                <li>Offset print</li>
                <li>eBook</li>
                <li>{'Retail & library'}</li>
              </ul>
            </div>
            <figure className="ns-hero__plate">
              <Image data-auto-size="" width="2000" height="1334" loading="eager"
                src="/assets/images/photos/1709924168698-620ea32c3488-2000.webp"
                alt="Long rows of bookshelves in a library"
                decoding="async"
                fetchPriority="high"
              />
              <figcaption>
                <span>Global Distribution</span>
                {site.name}
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="ns-intro" aria-label="Introduction">
          <div className="container ns-intro__grid">
            <p className="ns-intro__state ns-rv">Writing it is only half the battle.</p>
            <div className="ns-intro__side ns-rv">
              <p>
                Readers need an easy path from “I heard about it” to “it’s on its way.” We prepare your files, title
                details and platform setup so people can order your book wherever they look. Being listed means your
                book is available to order. Each bookstore and library decides for itself what to stock.
              </p>
              <p className="ns-intro__part">
                {'Part of '}
                <Link href="/#services">{'Rights & Distribution'}</Link>
              </p>
            </div>
          </div>
        </section>
        <section className="ns-sig ns-gd" aria-labelledby="sig-title">
          <div className="container">
            <div className="ns-gd__head">
              <p className="ns-label ns-rv">The routes</p>
              <h2 className="ns-h2 ns-rv" id="sig-title">
                {'Plan the routes '}
                <em>to your readers.</em>
              </h2>
            </div>
            <ol className="ns-gd__routes ns-rv" role="list">
              <li>
                <span className="ns-gd__n">01</span>
                <p className="ns-gd__h">Formats</p>
                <ul role="list">
                  <li>Paperback</li>
                  <li>Hardcover</li>
                  <li>eBook</li>
                  <li>Audiobook</li>
                </ul>
              </li>
              <li>
                <span className="ns-gd__n">02</span>
                <p className="ns-gd__h">Production</p>
                <ul role="list">
                  <li>Print on demand</li>
                  <li>Offset print run</li>
                  <li>Digital files</li>
                </ul>
              </li>
              <li>
                <span className="ns-gd__n">03</span>
                <p className="ns-gd__h">Channels</p>
                <ul role="list">
                  <li>Online retailers</li>
                  <li>Bookstores</li>
                  <li>Libraries</li>
                  <li>Academic institutions</li>
                </ul>
              </li>
              <li>
                <span className="ns-gd__n">04</span>
                <p className="ns-gd__h">Readers</p>
                <ul role="list">
                  <li>Worldwide</li>
                </ul>
              </li>
            </ol>
            <figure className="ns-gd__plate ns-rv">
              <Image data-auto-size="" width="1400" height="1000"
                src="/assets/images/photos/1769355104335-acef3aa4c9b6-1400x1000.webp"
                alt="Cardboard boxes and packaging ready for shipping"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>Plate</span>
                Packed, shipped, shelved.
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="ns-inc" aria-labelledby="inc-title">
          <div className="container ns-inc__grid">
            <div className="ns-inc__head">
              <p className="ns-label ns-rv">Where we help</p>
              <h2 className="ns-h2 ns-rv" id="inc-title">
                How we put your book on the map.
              </h2>
              <figure className="ns-inc__fig ns-rv">
                <Image data-auto-size="" width="900" height="1100"
                  src="/assets/images/photos/1709924168698-620ea32c3488-900x1100.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <ol className="ns-inc__list ns-rv" role="list">
              <li>
                <span className="ns-inc__n">01</span>
                <h3 className="ns-inc__t">Account setup</h3>
                <p className="ns-inc__d">We help you create accounts and enter title records on the publishing platforms you select.</p>
              </li>
              <li>
                <span className="ns-inc__n">02</span>
                <h3 className="ns-inc__t">Print on demand</h3>
                <p className="ns-inc__d">Copies are printed as orders arrive, so there is no garage full of boxes.</p>
              </li>
              <li>
                <span className="ns-inc__n">03</span>
                <h3 className="ns-inc__t">Offset printing</h3>
                <p className="ns-inc__d">Larger print runs for launch events, signings or your own inventory.</p>
              </li>
              <li>
                <span className="ns-inc__n">04</span>
                <h3 className="ns-inc__t">eBook distribution</h3>
                <p className="ns-inc__d">Digital editions prepared for the stores you have chosen.</p>
              </li>
              <li>
                <span className="ns-inc__n">05</span>
                <h3 className="ns-inc__t">Pricing and regions</h3>
                <p className="ns-inc__d">We review list prices and territory settings with you before anything is submitted.</p>
              </li>
              <li>
                <span className="ns-inc__n">06</span>
                <h3 className="ns-inc__t">Listings and metadata</h3>
                <p className="ns-inc__d">Title, credits and description kept consistent wherever your book appears.</p>
              </li>
            </ol>
          </div>
        </section>
        <section className="ns-steps" aria-labelledby="steps-title">
          <div className="container">
            <p className="ns-label ns-rv" id="steps-title">
              The path to availability: four steps to shelf-ready
            </p>
            <ol className="ns-steps__list ns-rv" role="list">
              <li>
                <span>01</span>
                <b>Prepare</b>
                <p>Collect your approved cover, interior and digital files.</p>
              </li>
              <li>
                <span>02</span>
                <b>Set up</b>
                <p>Enter your title records on the channels you picked.</p>
              </li>
              <li>
                <span>03</span>
                <b>Price</b>
                <p>Settle prices, regions and edition details together.</p>
              </li>
              <li>
                <span>04</span>
                <b>Go live</b>
                <p>Submit the setup and review your available listings.</p>
              </li>
            </ol>
          </div>
        </section>
        <section className="ns-rel" aria-labelledby="rel-title">
          <div className="container ns-rel__grid">
            <div>
              <p className="ns-label">{'Also in Rights & Distribution'}</p>
              <h2 className="ns-rel__title" id="rel-title">
                Keep building.
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
                <Link href="/copyrights-isbn">
                  <span className="ns-rel__t">{'Copyrights & ISBN'}</span>
                  <span className="ns-rel__d">
                    Organize identifiers, copyright paperwork and title details for your editions.
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
            <Image data-auto-size="" width="1600" height="678"
              src="/assets/images/photos/1769355104335-acef3aa4c9b6-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Global Distribution
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Let’s chart the course '}
                <em>to your readers.</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                Tell us about your book and where you would like it to be found. We will read your message and reach out
                with next steps.
              </p>
              <div className="ns-cta__btns" data-reveal="" style={{ '--d': '.2s' }}>
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Plan My Distribution '}
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