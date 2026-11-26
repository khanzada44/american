import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';

export const metadata = pageMetadata({
  title: 'Have a Story to Share? Author Podcast Promotion',
  description:
    'Reach podcast audiences through author podcast promotion. Share the ideas behind your book, discuss your experiences, and introduce your work to new listeners.',
  path: '/book-fairs',
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
    href: '#inc-title',
    section: 'inc-title',
    label: 'Game plan',
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

export default function BookFairsPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="ns-hero ns-hero--dark on-dark" id="top" aria-labelledby="ns-title">
          <div className="ns-hero__bg" aria-hidden="true">
            <Image data-auto-size="" width="2000" height="1319" loading="eager"
              src="/assets/images/photos/1559523161-0fc0d8b38a7a-2000.webp"
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
                <li aria-current="page">Book Fairs</li>
              </ol>
            </nav>
            <div className="ns-hero__copy">
              <p className="ns-eyebrow">
                <span />
                Marketing and visibility
              </p>
              <h1 className="ns-title" id="ns-title">
                {'Stand out where readers '}
                <em>and booksellers gather.</em>
              </h1>
              <p className="ns-lead">
                Book fairs are where stories meet the people who can champion them. We help you choose the right events
                and prepare the catalog details, display and presentation that set your title apart.
              </p>
              <div className="ns-hero__btns">
                <button className="btn btn--primary" type="button" data-open-lead="">
                  {'Plan My Book Fair '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>
              </div>
              <ul className="ns-chips" role="list">
                <li>Event selection</li>
                <li>Book display</li>
                <li>Fair materials</li>
                <li>Industry meetings</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="ns-intro" aria-label="Introduction">
          <div className="container ns-intro__grid">
            <p className="ns-intro__state ns-rv">
              One table, hundreds of possible readers.
            </p>
            <div className="ns-intro__side ns-rv">
              <p>
                A fair puts your book in front of people who live and breathe books. We help you decide which events
                suit your title, then prepare the information and materials that make a strong first impression.
                Participation arrangements depend on each event.
              </p>
              <p className="ns-intro__part">
                {'Part of '}
                <Link href="/#services">{'Marketing & Visibility'}</Link>
              </p>
            </div>
          </div>
        </section>
        <section className="ns-inc" aria-labelledby="inc-title">
          <div className="container ns-inc__grid">
            <div className="ns-inc__head">
              <p className="ns-label ns-rv">Game plan</p>
              <h2 className="ns-h2 ns-rv" id="inc-title">
                A game plan for every stage of the fair.
              </h2>
              <figure className="ns-inc__fig ns-rv">
                <Image data-auto-size="" width="900" height="1100"
                  src="/assets/images/photos/1559523161-0fc0d8b38a7a-900x1100.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <ol className="ns-inc__list ns-rv" role="list">
              <li>
                <span className="ns-inc__n">01</span>
                <h3 className="ns-inc__t">Before the fair</h3>
                <p className="ns-inc__d">
                  Pick the right event. Prepare your catalog entry and rights details. Create posters, bookmarks and
                  one-page sell sheets.
                </p>
              </li>
              <li>
                <span className="ns-inc__n">02</span>
                <h3 className="ns-inc__t">At the fair</h3>
                <p className="ns-inc__d">
                  Arrange your book display. Organize signings where the event permits. Set up meetings with booksellers
                  and librarians.
                </p>
              </li>
              <li>
                <span className="ns-inc__n">03</span>
                <h3 className="ns-inc__t">After the fair</h3>
                <p className="ns-inc__d">Follow up with new contacts. Share highlights online. Map out your next step.</p>
              </li>
            </ol>
          </div>
        </section>
        <section className="ns-steps" aria-labelledby="steps-title">
          <div className="container">
            <p className="ns-label ns-rv" id="steps-title">
              How we work: four steps to a fair worth remembering
            </p>
            <ol className="ns-steps__list ns-rv" role="list">
              <li>
                <span>01</span>
                <b>Choose</b>
                <p>Select an event with a clear reason for attending.</p>
              </li>
              <li>
                <span>02</span>
                <b>Prepare</b>
                <p>Ready the book details, display and supporting materials.</p>
              </li>
              <li>
                <span>03</span>
                <b>Present</b>
                <p>Showcase your title in the format the event allows.</p>
              </li>
              <li>
                <span>04</span>
                <b>Follow up</b>
                <p>Review the contacts you made and decide who to reach out to.</p>
              </li>
            </ol>
          </div>
        </section>
        <section className="ns-rel" aria-labelledby="rel-title">
          <div className="container ns-rel__grid">
            <div>
              <p className="ns-label">Beyond the fair</p>
              <h2 className="ns-rel__title" id="rel-title">
                More ways to spread the word.
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
                    Campaigns designed around your genre, your goals and your readers.
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
                    A professional web presence that stays open around the clock.
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
                    Profiles, posts and a publishing rhythm that keep fans engaged.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/billboard-campaigns">
                  <span className="ns-rel__t">Billboard Campaigns</span>
                  <span className="ns-rel__d">
                    Bold outdoor visuals planned and produced for chosen locations.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/podcasts">
                  <span className="ns-rel__t">Podcasts</span>
                  <span className="ns-rel__d">Conversations that bring your book to a listening audience.</span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/tv-interviews">
                  <span className="ns-rel__t">TV Interviews</span>
                  <span className="ns-rel__d">
                    Camera-ready preparation and pitching support.
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
            <Image data-auto-size="" width="1600" height="1067"
              src="/assets/images/photos/1589903308904-1010c2294adc-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Book Fairs
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Which fair has '}
                <em>your name on it?</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                Tell us about your book and the events you have in mind. We will review your message and follow up.
              </p>
              <div className="ns-cta__btns" data-reveal="" style={{ '--d': '.2s' }}>
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Send My Inquiry '}
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