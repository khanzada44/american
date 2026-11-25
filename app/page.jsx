import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import BookModal from '@/components/modals/BookModal';
import { site } from '@/lib/site';
import BookMarquee from '@/components/sections/BookMarquee';
import HowItWorks from '@/components/sections/HowItWorks';
import VideoTestimonials from '@/components/sections/VideoTestimonials';
import FaqSection from '@/components/sections/FaqSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import BookSpin from '@/components/layout/BookSpin';
export const metadata = pageMetadata({
  title: 'Book Publishing Services | Publish Your Book With Us',
  description:
    'Looking for book publishing services? Get writing, editing, self-publishing, and publishing support to publish your book and bring your manuscript to readers.',
  path: '/',
});

const styles = [
  '/assets/css/home2f72.css?v=20261109-eagle-logo',
  '/assets/css/forms.css?v=20261105-production',
  '/assets/css/widgets.css?v=20261105',
];

const preloads = [
  {
    type: 'image/webp',
    href: '/assets/images/photos/1758961339803-2d5a43cb34d1-1600.webp',
    imageSrcSet:
      '/assets/images/photos/1758961339803-2d5a43cb34d1-900.webp 900w, /assets/images/photos/1758961339803-2d5a43cb34d1-1600.webp 1600w',
    imageSizes: '(min-width: 1100px) 70vw, 100vw',
    fetchPriority: 'high',
  },
  {
    type: 'image/webp',
    href: '/assets/images/photos/1758801966638-dfd34dae251c-2400.webp',
    media: '(min-width: 901px) and (max-resolution: 1dppx), (max-width: 900px) and (min-resolution: 1.01dppx)',
    fetchPriority: 'high',
  },
  {
    type: 'image/webp',
    href: '/assets/images/photos/1758801966638-dfd34dae251c-3600.webp',
    media: '(min-width: 901px) and (min-resolution: 1.01dppx)',
    fetchPriority: 'high',
  },
  {
    type: 'image/webp',
    href: '/assets/images/photos/1758801966638-dfd34dae251c-1400.webp',
    media: '(max-width: 900px) and (max-resolution: 1dppx)',
    fetchPriority: 'high',
  },
];

const railLinks = [
  {
    href: '#top',
    section: 'top',
    label: 'Top',
    icon: '#i-home',
    text: 'Home',
  },
  {
    href: 'publications',
    label: 'Publications',
    icon: '#i-book',
    text: 'Books',
  },
  {
    href: '#services',
    section: 'services',
    label: 'Services',
    icon: '#i-pen',
    text: 'Services',
  },
  {
    href: '#reviews',
    section: 'reviews',
    label: 'Reviews',
    icon: '#i-quote',
    text: 'Reviews',
  },
];

const scripts = ['/assets/js/real-work2f72.js?v=20261003', '/assets/js/main2f72.js?v=20261105-production'];

/* ---------- page copy for the shared sections ---------- */
const faqs = [
  {
    key: 'general',
    label: 'Before you start',
    icon: 'book',
    items: [
      {
        q: "I have a book idea but haven't started writing. Can you help?",
        a: "Absolutely! As a premium book publishing company, PublishYourBooksToday welcomes authors at every stage of the creative process. You don't need a finished manuscript to get started. Bring us your idea, concept, or outline, and our team can discuss book writing and development services to help shape it into a publishable manuscript. Our book publishers for new authors can guide you through the options available for your project.",
      },
      {
        q: 'Can PublishYourBooksToday’s team work with an existing manuscript rather than start from scratch?',
        a: "Yes. If your manuscript is already written, you can discuss the editorial and publishing assistance it needs. Whether you're looking for language refinement, structural improvements, or publication preparation, the appropriate service will depend on the condition and requirements of your draft.",
      },
      {
        q: 'Do I need to purchase every service to publish my book from PublishYourBooksToday?',
        a: "Not necessarily. You can inquire about individual services based on your project's requirements. Some authors need help with writing, while others already have a manuscript and require editing, publishing, or promotional support. Our full-service book publishing approach covers different stages of the process, while individual requirements can be discussed according to your project scope.",
      },
      {
        q: 'Who owns the copyright to my finished book?',
        a: 'Copyright and creative ownership are important considerations for every author. Your ownership arrangements and any applicable service-related rights should be clearly established in your project agreement before work begins. We encourage authors to understand these terms before proceeding with any book publishing arrangement.',
      },
      {
        q: 'Can I publish a book in any genre with PublishYourBooksToday?',
        a: "You can share your book's genre, subject, and intended readership when submitting your inquiry. This helps us understand the nature of your project and determine whether the requested services align with its requirements.",
      },
      {
        q: 'What information should I provide when requesting a quote?',
        a: "Start with your book's genre, approximate word count, current manuscript status, and the services you're considering. If you have a completed draft or a clear project outline, that information can also help establish the scope of work and the publishing assistance required.",
      },
    ],
  },
];

const firstConversation = [
  {
    title: 'A Manuscript-Centred Approach',
    text: 'Your book has its own voice, genre, and objectives. We take your project requirements into account when discussing the services it needs.',
  },
  {
    title: 'Clarity Before Commitment',
    text: 'Understand the proposed scope of work, expected deliverables, and project arrangements before proceeding.',
  },
  {
    title: 'Support Beyond the First Draft',
    text: 'From developing written content to preparing a manuscript for publication and promotion, our services address different stages of the book creation process.',
  },
];

export default function HomePage() {
  return (
    <>
      <PageStyles styles={styles} preloads={preloads} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero__ambient" aria-hidden="true">
            <div className="hero__ambient-img" data-parallax="0.08" />
            <div className="hero__veil" />
          </div>
          <div className="shell" data-shell="">
            <nav className="shell__rail" aria-label="Jump to section">
              <Link href="#top" className="is-active" aria-label="Home">
                <svg aria-hidden="true">
                  <use href="#i-home" />
                </svg>
              </Link>{' '}
              <Link href="/publications" aria-label="Publications">
                <svg aria-hidden="true">
                  <use href="#i-book" />
                </svg>
              </Link>{' '}
              <Link href="#services" aria-label="Services">
                <svg aria-hidden="true">
                  <use href="#i-pen" />
                </svg>
              </Link>{' '}
              <Link href="#reviews" aria-label="Reviews">
                <svg aria-hidden="true">
                  <use href="#i-quote" />
                </svg>
              </Link>
            </nav>
            <aside className="shell__side" aria-label="Catalogue and process">
              <section className="panel">
                <header className="panel__head">
                  <h2 className="panel__title">Browse our books</h2>{' '}
                  <Link className="panel__more" href="/publications">
                    See all
                  </Link>
                </header>
                <ul className="minibooks" role="list">
                  <li>
                    <button
                      type="button"
                      className="minibook"
                      data-open-book="The Story Book Chronicles: A Dreamy Adventure of Isla and Ava"
                    >
                      <Image loading="eager" src="/assets/images/books/cover-03.png" width="440" height="660" alt="" />
                      <span>
                        <b>The Story Book Chronicles: A Dreamy Adventure of Isla and Ava</b>
                        <small>Corey T. Alston Sr.</small>
                      </span>
                      <i aria-hidden="true">
                        <svg>
                          <use href="#i-arrow-ne" />
                        </svg>
                      </i>
                    </button>
                  </li>
                  <li>
                    <button type="button" className="minibook" data-open-book="Poems of Life">
                      <Image loading="eager" src="/assets/images/books/cover-23.webp" width="440" height="660" alt="" />
                      <span>
                        <b>Poems of Life</b>
                        <small>O’Dell James Ford Sr.</small>
                      </span>
                      <i aria-hidden="true">
                        <svg>
                          <use href="#i-arrow-ne" />
                        </svg>
                      </i>
                    </button>
                  </li>
                  <li>
                    <button type="button" className="minibook" data-open-book="Whispers of Time">
                      <Image loading="eager" src="/assets/images/books/cover-24.webp" width="440" height="660" alt="" />
                      <span>
                        <b>Whispers of Time</b>
                        <small>Aggee Andrew Vetiaque</small>
                      </span>
                      <i aria-hidden="true">
                        <svg>
                          <use href="#i-arrow-ne" />
                        </svg>
                      </i>
                    </button>
                  </li>
                  <li>
                    <button type="button" className="minibook" data-open-book="You vs You">
                      <Image loading="eager" src="/assets/images/books/cover-26.webp" width="440" height="660" alt="" />
                      <span>
                        <b>You vs You</b>
                        <small>Waheed Shaffiek</small>
                      </span>
                      <i aria-hidden="true">
                        <svg>
                          <use href="#i-arrow-ne" />
                        </svg>
                      </i>
                    </button>
                  </li>
                  <li>
                    <button type="button" className="minibook" data-open-book="The Legal Tender Question">
                      <Image loading="eager" src="/assets/images/books/cover-18.webp" width="440" height="660" alt="" />
                      <span>
                        <b>The Legal Tender Question</b>
                        <small>Joseph R. K. Eshun</small>
                      </span>
                      <i aria-hidden="true">
                        <svg>
                          <use href="#i-arrow-ne" />
                        </svg>
                      </i>
                    </button>
                  </li>
                </ul>
              </section>
              <section className="panel">
                <header className="panel__head">
                  <h2 className="panel__title">The steps to publication</h2>{' '}
                  <Link className="panel__more" href="/book-publishing#approach">
                    Process
                  </Link>
                </header>
                <ol className="ministeps" role="list">
                  <li style={{ '--p': '.25' }}>
                    <span className="ministeps__n">01</span>
                    <span className="ministeps__t">
                      <b>Outline</b>
                      <i />
                    </span>
                    <small>1/4</small>
                  </li>
                  <li style={{ '--p': '.5' }}>
                    <span className="ministeps__n">02</span>
                    <span className="ministeps__t">
                      <b>Writing</b>
                      <i />
                    </span>
                    <small>2/4</small>
                  </li>
                  <li style={{ '--p': '.75' }}>
                    <span className="ministeps__n">03</span>
                    <span className="ministeps__t">
                      <b>Proofreading</b>
                      <i />
                    </span>
                    <small>3/4</small>
                  </li>
                  <li style={{ '--p': '1' }}>
                    <span className="ministeps__n">04</span>
                    <span className="ministeps__t">
                      <b>{'Formatting & Publishing'}</b>
                      <i />
                    </span>
                    <small>4/4</small>
                  </li>
                </ol>
              </section>
            </aside>
            <div className="shell__main">
              <div className="stage on-dark" data-feature="">
                <div className="stage__bg" aria-hidden="true">
                  <Image data-auto-size="" width="1600" height="2400" loading="eager"
                    src="/assets/images/photos/1758961339803-2d5a43cb34d1-1600.webp"
                    srcSet="/assets/images/photos/1758961339803-2d5a43cb34d1-900.webp 900w, /assets/images/photos/1758961339803-2d5a43cb34d1-1600.webp 1600w"
                    sizes="(min-width: 1100px) 70vw, 100vw"
                    alt=""
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
                <div className="stage__copy">
                  <ul className="stage__chips" role="list">
                    <li>
                      <Link className="chip" href="/ghostwriting">
                        Ghostwriting
                      </Link>
                    </li>
                    <li>
                      <Link className="chip" href="/book-editing">
                        Editing
                      </Link>
                    </li>
                    <li>
                      <Link className="chip" href="/book-publishing">
                        Publishing
                      </Link>
                    </li>
                    <li>
                      <Link className="chip" href="/book-promotion">
                        Book Promotion
                      </Link>
                    </li>
                  </ul>
                  <p className="label stage__kicker hero__in" style={{ '--i': '0', whiteSpace: 'normal', margin: '0 0 18px' }}>
                    Where Stories Find Their Way to the Page
                  </p>
                  {/* the heading is longer than before, so it is set a little smaller */}
                  <h1
                    className="display stage__title"
                    id="hero-title"
                    style={{ fontSize: 'clamp(2.4rem, 1.2rem + 3vw, 4.2rem)' }}
                  >
                    <span className="hero__line">
                      <span style={{ '--i': '1' }}>Book Publishing Services:</span>
                    </span>
                    <span className="hero__line">
                      <span style={{ '--i': '2' }}>{'The Art of Bringing '}</span>
                    </span>
                    <span className="hero__line">
                      <span style={{ '--i': '3' }}>
                        <em>Books to Print.</em>
                      </span>
                    </span>
                  </h1>
                  <p className="stage__lead hero__in" style={{ '--i': '4' }}>
                    Your manuscript deserves more than a place in the drafts folder. Whether you&apos;re putting pen to paper or
                    publish your book, PublishYourBooksToday’s book publishing services bring writing, editing, publishing, and
                    promotion under one roof. We help authors turn unfinished pages into published works that are ready to find
                    their readers.
                  </p>
                  <div className="stage__ctas hero__in" style={{ '--i': '5' }}>
                    <button className="btn btn--primary" type="button" data-open-lead="">
                      <svg className="btn__icon" aria-hidden="true">
                        <use href="#i-pen" />
                      </svg>
                      {" Let's Talk About Your Book"}
                    </button>{' '}
                    <Link className="btn btn--glass" href="/publications">
                      <svg className="btn__icon" aria-hidden="true">
                        <use href="#i-book" />
                      </svg>
                      {" See What's Between the Covers"}
                    </Link>{' '}
                    <Link
                      className="icon-btn stage__call"
                      href={`tel:${site.phoneHref}`}
                      aria-label={`Call ${site.phone}`}
                    >
                      <svg aria-hidden="true">
                        <use href="#i-phone" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="stage__showcase" aria-label="Featured publication">
                  <div className="stage__plinth" aria-hidden="true" />
                  <div className="book3d is-mockup stage__book" data-tilt="">
                    <div className="book3d__body">
                      <div className="book3d__back" />{' '}
                      <Image loading="eager"
                        className="book3d__cover"
                        data-feature-cover=""
                        src="/assets/images/books/book-6.png"
                        width="600"
                        height="1024"
                        alt="Cover of The Goodness of God by Dr. Lee Roy Jefferson"
                        decoding="async"
                      />
                    </div>
                    <div className="book3d__shadow" />
                  </div>
                </div>
                <div className="stage__caption glass">
                  <div className="stage__meta">
                    <span className="label stage__kicker">Featured</span>{' '}
                    <span className="chip chip--gold" data-feature-genre="">
                      Faith
                    </span>
                  </div>
                  <div className="stage__text" data-feature-text="" aria-live="polite">
                    <h2 className="stage__book-title" data-feature-title="">
                      The Goodness of God
                    </h2>
                    <p className="stage__book-sub" data-feature-sub="">
                      Reflection at 80
                    </p>
                    <p className="stage__book-author">
                      {'by '}
                      <span data-feature-author="">Dr. Lee Roy Jefferson</span>
                    </p>
                  </div>{' '}
                  <button className="stage__view" type="button" data-feature-view="" aria-label="View featured book">
                    <svg aria-hidden="true">
                      <use href="#i-arrow-ne" />
                    </svg>
                  </button>
                </div>
                <div className="stage__controls">
                  <span className="stage__count" aria-hidden="true">
                    <b data-feature-index="">01</b>
                    <span>/</span>
                    <span data-feature-total="">05</span>
                  </span>{' '}
                  <button className="icon-btn" type="button" aria-label="Previous featured book" data-feature-prev="">
                    <svg aria-hidden="true">
                      <use href="#i-left" />
                    </svg>
                  </button>{' '}
                  <button className="icon-btn" type="button" aria-label="Next featured book" data-feature-next="">
                    <svg aria-hidden="true">
                      <use href="#i-right" />
                    </svg>
                  </button>
                </div>
                <div className="stage__progress" aria-hidden="true">
                  <span data-feature-progress="" />
                </div>
              </div>
            </div>
          </div>
          <div className="trust" aria-label="Publications and media">
            <div className="trust__track" data-marquee="">
              <ul className="trust__row" role="list">
                <li>
                  <Image
                    src="/assets/images/site/featured-in-2.webp"
                    width="127"
                    height="36"
                    alt="The New York Times"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    src="/assets/images/site/featured-in-3.webp"
                    width="116"
                    height="36"
                    alt="Esquire"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    src="/assets/images/site/featured-in-4.webp"
                    width="110"
                    height="36"
                    alt="Los Angeles Times"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image src="/assets/images/site/featured-in-5.webp" width="128" height="36" alt="NBC" loading="lazy" />
                </li>
                <li>
                  <Image
                    src="/assets/images/site/featured-in-6.webp"
                    width="122"
                    height="36"
                    alt="Forbes"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    src="/assets/images/site/featured-in-7.webp"
                    width="181"
                    height="45"
                    alt="Penguin Random House"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    src="/assets/images/site/featured-in-8.webp"
                    width="114"
                    height="45"
                    alt="The Wall Street Journal"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image src="/assets/images/site/featured-in-1.webp" width="128" height="36" alt="BBC" loading="lazy" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <ul className="hero-books" hidden aria-hidden="true">
          <li
            data-book=""
            data-title="The Goodness of God"
            data-sub="Reflection at 80"
            data-author="Dr. Lee Roy Jefferson"
            data-genre="Faith"
            data-cover="/assets/images/books/book-6.png"
            data-id="06"
            data-desc="The Goodness of God is a deeply personal reflection on a lifetime of faith, ministry, family, service, and perseverance."
            data-featured=""
          />
          <li
            data-book=""
            data-title="Bloom Through the Pain"
            data-sub="A 90-Day Affirmation and Reflection Journal"
            data-author="Kadeisha Corbin"
            data-genre="Self-Help"
            data-cover="/assets/images/books/book-20.png"
            data-id="20"
            data-desc="Bloom Through the Pain is a 90-day journey of affirmations, Scripture, and reflection created to help readers heal, find strength, and rediscover the beauty God has placed within them."
            data-featured=""
          />
          <li
            data-book=""
            data-title="The Naked Truth of AI 2.0"
            data-sub="Divine Intervention"
            data-author="Douglas Hawes"
            data-genre="Faith"
            data-cover="/assets/images/books/book-05.png"
            data-id="05"
            data-desc="As artificial intelligence advances at extraordinary speed, The Naked Truth of AI 2.0: Divine Intervention asks a deeper question: Can technology provide knowledge without understanding the truth behind our existence?"
            data-featured=""
          />
          <li
            data-book=""
            data-title="The Path of Truth"
            data-sub="Beyond Belief, Beyond Illusion"
            data-author="Emilio Degher"
            data-genre={'Philosophy & Spirituality'}
            data-cover="/assets/images/books/book-12.png"
            data-id="12"
            data-featured=""
          />
          <li
            data-book=""
            data-title="Bajo la Influencia del Kremlin"
            data-sub="La Penetración Rusa en Venezuela"
            data-author="Virginia Perez Perez"
            data-genre="Politics"
            data-cover="/assets/images/books/book-25.png"
            data-id="25"
            data-desc="An in-depth examination of the strategic relationship between Venezuela and Russia, revealing a complex network of agreements across energy, finance, defense, and other critical sectors."
            data-featured=""
          />
          <li
            data-book=""
            data-title="The Story Book Chronicles: A Dreamy Adventure of Isla and Ava"
            data-sub=""
            data-author="Corey T. Alston Sr."
            data-genre="Children’s Fiction"
            data-cover="/assets/images/books/book-03.webp"
            data-id="03"
          />
          <li
            data-book=""
            data-title="The Legal Tender Question"
            data-sub="Volume One"
            data-author="Joseph R. K. Eshun"
            data-genre={'Business & Law'}
            data-cover="/assets/images/books/book-18.png"
            data-id="18"
          />
          <li
            data-book=""
            data-title="Poems of Life"
            data-sub="Reflections on Life, Love, and the Human Journey"
            data-author="O’Dell James Ford Sr."
            data-genre="Poetry"
            data-cover="/assets/images/books/book-23.webp"
            data-id="23"
          />
          <li
            data-book=""
            data-title="Whispers of Time"
            data-sub="Poetry · French / Haitian Creole"
            data-author="Aggee Andrew Vetiaque"
            data-genre="Poetry"
            data-cover="/assets/images/books/book-24.png"
            data-id="24"
          />
          <li
            data-book=""
            data-title="You vs You"
            data-sub="How to Overcome Doubt, Build Discipline, and Create a Life with Purpose"
            data-author="Waheed Shaffiek"
            data-genre="Self-Help"
            data-cover="/assets/images/books/book-26.webp"
            data-id="26"
          />
        </ul>
        <BookMarquee
          eyebrow="Something for Every Kind of Reader"
          title="From Spellbinding Fiction to Big-Idea Nonfiction,"
          titleEm="Find Your Next Literary Obsession."
          lead="From gripping plots to food-for-thought nonfiction, discover books that leave no page unturned. Whatever your taste in literature, there's a story waiting between these covers."
        />
        <section className="rw-sel rw-dark" id="selected-work" aria-labelledby="sel-title">
          <style>{`
            /* each book's place in the row: --i = float timing, --d = entrance delay (centre book first) */
            #selected-work .rw-table__book:nth-child(1) { --i: 0; --d: 0.36s; }
            #selected-work .rw-table__book:nth-child(2) { --i: 1; --d: 0.24s; }
            #selected-work .rw-table__book:nth-child(3) { --i: 2; --d: 0.12s; }
            #selected-work .rw-table__book:nth-child(4) { --i: 3; --d: 0s; }
            #selected-work .rw-table__book:nth-child(5) { --i: 4; --d: 0.12s; }
            #selected-work .rw-table__book:nth-child(6) { --i: 5; --d: 0.24s; }
            #selected-work .rw-table__book:nth-child(7) { --i: 6; --d: 0.36s; }

            /* 1. entrance: each book spins a full 360° as it rises, then settles facing front */
            #selected-work .rw-table__row { perspective: 1400px; }
            @keyframes rw-spin-in {
              0%   { opacity: 0; transform: translateY(70px) rotateY(-360deg) scale(0.85); }
              60%  { opacity: 1; }
              100% { opacity: 1; transform: translateY(0) rotateY(0deg) scale(1); }
            }
            .rw-spin-ready #selected-work [data-rw-table]:not(.is-spin) .rw-table__book {
              opacity: 0;
              transform: translateY(70px) rotateY(-360deg) scale(0.85);
            }
            .rw-spin-ready #selected-work [data-rw-table].is-spin .rw-table__book {
              animation: rw-spin-in 1.6s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s) both;
            }

            /* 2. gentle float, each book on its own rhythm; the floor shadow breathes with it */
            @keyframes rw-float {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50%      { transform: translateY(-10px) rotate(-0.6deg); }
            }
            @keyframes rw-floor {
              0%, 100% { transform: scaleX(1); opacity: 1; }
              50%      { transform: scaleX(0.86); opacity: 0.65; }
            }
            #selected-work .rw-table__book .rw-book__img {
              animation: rw-float 6s ease-in-out infinite;
              animation-delay: calc(var(--i, 0) * -0.9s);
            }
            #selected-work .rw-table__book .rw-book__floor {
              animation: rw-floor 6s ease-in-out infinite;
              animation-delay: calc(var(--i, 0) * -0.9s);
            }
            #selected-work .rw-table__book.is-lead .rw-book__img { animation-duration: 7.5s; }

            /* people who turn off motion in their system settings see still books */
            @media (prefers-reduced-motion: reduce) {
              .rw-spin-ready #selected-work [data-rw-table]:not(.is-spin) .rw-table__book { opacity: 1; transform: none; }
              #selected-work .rw-table__book,
              #selected-work .rw-table__book .rw-book__img,
              #selected-work .rw-table__book .rw-book__floor { animation: none !important; }
            }
          `}</style>
          <div className="container">
            <div className="rw-sel__rule rw-rv" aria-hidden="true">
              <span>
                {'Publish Your Books Today '}
                <i>/</i>
                {' Selected work'}
              </span>
              <span>From the catalogue</span>
              <span>In print</span>
            </div>
            <div className="rw-sel__head">
              <div>
                <p className="rw-eyebrow rw-rv">
                  <span />
                  Between These Covers
                </p>
                <h2 className="rw-h2 rw-rv" id="sel-title">
                  {'A Little Something for Every '}
                  <em>Literary Appetite</em>
                </h2>
              </div>
              <div className="rw-sel__side rw-rv">
                <p className="rw-lead">
                  From midnight page-turners to nonfiction that challenges the way we think, PublishYourBooksToday’s featured
                  collection spans an eclectic mix of genres and literary voices. As a self publishing company, we help turn
                  authors’ original drafts into finished editions through our book publishing services.
                </p>
                <div className="rw-sel__links">
                  <Link className="rw-link" href="/publications">
                    {'Browse the Collection '}
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </Link>
                  <Link className="rw-link" href="/featured-authors">
                    {'View Featured Titles '}
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rw-table" data-rw-table="">
              <div className="rw-table__row">
                <Link
                  className="rw-book rw-table__book"
                  href="/our-work#book-26"
                  aria-label="You vs You by Waheed Shaffiek, view in Our Work"
                  data-rw-book="26"
                  style={{ '--s': '0.52', '--z': '7' }}
                >
                  <span className="rw-book__obj">
                    <Image
                      className="rw-book__img"
                      src="/assets/images/books/book-26-s.webp"
                      width="360"
                      height="614"
                      alt="You vs You: How to Overcome Doubt, Build Discipline, and Create a Life with Purpose by Waheed Shaffiek, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">You vs You</span>
                    <span className="rw-cap__s">
                      How to Overcome Doubt, Build Discipline, and Create a Life with Purpose
                    </span>
                    <span className="rw-cap__a">Waheed Shaffiek</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </Link>
                <Link
                  className="rw-book rw-table__book"
                  href="/our-work#book-23"
                  aria-label="Poems of Life by O’Dell James Ford Sr., view in Our Work"
                  data-rw-book="23"
                  style={{ '--s': '0.62', '--z': '8' }}
                >
                  <span className="rw-book__obj">
                    <Image
                      className="rw-book__img"
                      src="/assets/images/books/book-23-s.webp"
                      width="360"
                      height="614"
                      alt="Poems of Life: Reflections on Life, Love, and the Human Journey by O’Dell James Ford Sr., shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">Poems of Life</span>
                    <span className="rw-cap__s">Reflections on Life, Love, and the Human Journey</span>
                    <span className="rw-cap__a">O’Dell James Ford Sr.</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </Link>
                <Link
                  className="rw-book rw-table__book"
                  href="/our-work#corey-t-alston-sr"
                  aria-label="The Story Book Chronicles: A Dreamy Adventure of Isla and Ava by Corey T. Alston Sr., view in Our Work"
                  data-rw-book="03"
                  style={{ '--s': '0.74', '--z': '9' }}
                >
                  <span className="rw-book__obj">
                    <Image
                      className="rw-book__img"
                      src="/assets/images/books/book-03.webp"
                      width="600"
                      height="1024"
                      alt="The Story Book Chronicles: A Dreamy Adventure of Isla and Ava by Corey T. Alston Sr., shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Story Book Chronicles: A Dreamy Adventure of Isla and Ava</span>
                    <span className="rw-cap__a">Corey T. Alston Sr.</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </Link>
                <Link
                  className="rw-book rw-table__book is-lead"
                  href="/our-work#lee-roy-jefferson"
                  aria-label="The Goodness of God by Dr. Lee Roy Jefferson, view in Our Work"
                  data-rw-book="06"
                  style={{ '--s': '1', '--z': '20' }}
                >
                  <span className="rw-book__obj">
                    <Image
                      className="rw-book__img"
                      src="/assets/images/books/book-6.png"
                      width="600"
                      height="1024"
                      alt="The Goodness of God: Reflection at 80 by Dr. Lee Roy Jefferson, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Goodness of God</span>
                    <span className="rw-cap__s">Reflection at 80</span>
                    <span className="rw-cap__a">Dr. Lee Roy Jefferson</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </Link>
                <Link
                  className="rw-book rw-table__book"
                  href="/our-work#virginia-perez-perez"
                  aria-label="Bajo la Influencia del Kremlin by Virginia Perez Perez, view in Our Work"
                  data-rw-book="25"
                  style={{ '--s': '0.74', '--z': '11' }}
                >
                  <span className="rw-book__obj">
                    <Image
                      className="rw-book__img"
                      src="/assets/images/books/book-25.webp"
                      width="600"
                      height="1024"
                      alt="Bajo la Influencia del Kremlin: La Penetración Rusa en Venezuela by Virginia Perez Perez, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">Bajo la Influencia del Kremlin</span>
                    <span className="rw-cap__s">La Penetración Rusa en Venezuela</span>
                    <span className="rw-cap__a">Virginia Perez Perez</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </Link>
                <Link
                  className="rw-book rw-table__book"
                  href="/our-work#book-24"
                  aria-label="Whispers of Time by Aggee Andrew Vetiaque, view in Our Work"
                  data-rw-book="24"
                  style={{ '--s': '0.62', '--z': '12' }}
                >
                  <span className="rw-book__obj">
                    <Image
                      className="rw-book__img"
                      src="/assets/images/books/book-24.png"
                      width="360"
                      height="614"
                      alt="Whispers of Time: Poetry · French / Haitian Creole by Aggee Andrew Vetiaque, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">Whispers of Time</span>
                    <span className="rw-cap__s">Poetry · French / Haitian Creole</span>
                    <span className="rw-cap__a">Aggee Andrew Vetiaque</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </Link>
                <Link
                  className="rw-book rw-table__book"
                  href="/our-work#book-18"
                  aria-label="The Legal Tender Question by Joseph R. K. Eshun, view in Our Work"
                  data-rw-book="18"
                  style={{ '--s': '0.52', '--z': '13' }}
                >
                  <span className="rw-book__obj">
                    <Image
                      className="rw-book__img"
                      src="/assets/images/books/book-18-s.webp"
                      width="360"
                      height="614"
                      alt="The Legal Tender Question: Volume One by Joseph R. K. Eshun, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Legal Tender Question</span>
                    <span className="rw-cap__s">Volume One</span>
                    <span className="rw-cap__a">Joseph R. K. Eshun</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
              <div className="rw-table__surface" aria-hidden="true" />
            </div>
            <p className="rw-now" data-rw-now="" aria-live="polite">
              <span className="rw-now__n">In focus</span>
              <span className="rw-now__main">
                <span className="rw-cap__t">The Goodness of God</span>
                <span className="rw-cap__s">Reflection at 80</span>
                <span className="rw-cap__a">Dr. Lee Roy Jefferson</span>
              </span>
              <span className="rw-now__hint">Explore a cover for book details</span>
            </p>
          </div>
          <BookSpin />
        </section>
        <section className="section section--ivory about" id="about" aria-labelledby="about-title">
          <div className="ed-bg ed-bg--about" aria-hidden="true">
            <div className="ed-bg__img" data-parallax="0.05" />
          </div>
          <HowItWorks />
        </section>
        <section
          className=""
          id="reviews"
          aria-labelledby="reviews-title"
          data-reviews=""
        >
          <VideoTestimonials
            title="No Blurbs. No Book Jackets."
            titleEm="Straight from the Authors."
            lead="Forget the polished praise printed on a book jacket. These are the voices of authors who've worked with us, sharing what stood out, what went into their projects, and how their experience unfolded. No rehearsed sales pitch, just candid feedback from the people who know our publishing services firsthand."
            labels={['Behind the Manuscript', "An Author's Perspective", 'The Story Behind the Publication', 'Your Story Could Be Next']}
          />
          <FaqSection
            title="Before the First Proof,"
            titleEm="A Few Things Worth Knowing"
            lead="Book publishing comes with its fair share of fine print. Whether you're weighing self-publishing services, comparing publishing options, or wondering who retains the rights to your work, here are answers to questions from your best book publishing company that authors often have before getting started."
            groups={faqs}
            ctaText="Still have a question mark hanging over your manuscript? We're happy to discuss your project."
            ctaButton="Ask Us About Your Book"
          />
          <ContactFormSection
            eyebrow="Your Story Is Worth the Ink"
            title="Your Book Has a Place"
            titleEm="Beyond the Draft."
            lead="Every book calls for a different kind of backing. From a writer's touch and an editor's eye to a well-planned route to print, let's find the right way forward for your title. Tell us where your project stands and what you have in mind. We'll help you find the right book publishing services to take it from there."
            pointsTitle="What Makes the First Conversation Worth Having?"
            points={firstConversation}
          />
        </section>
      </main>
      <BookModal />
      <PageScripts scripts={scripts} styles={styles} />
    </>
  );
}