import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Book Publishing',
  description:
    'From page layout to final cover files, we help prepare print and digital editions with a production plan that keeps each decision connected.',
  path: '/book-publishing',
});

export const viewport = { themeColor: '#0D0D0F' };

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/publishing2f72.css?v=20261003',
  '/assets/css/forms.css?v=20261105-production',
  '/assets/css/widgets.css?v=20261105',
];

const preloads = [
  {
    type: 'image/webp',
    href: '/assets/images/photos/1581508512961-0e3b9524db40-2400.webp',
    fetchPriority: 'high',
  },
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
    href: '#approach',
    section: 'approach',
    label: 'Process',
    icon: '#i-steps',
    text: 'Process',
  },
  {
    href: '#editions',
    section: 'editions',
    label: 'Print and digital',
    icon: '#i-book',
    text: 'Editions',
  },
  {
    href: '#finished',
    section: 'finished',
    label: 'Finished book',
    icon: '#i-star',
    text: 'Finished',
  },
  {
    href: '#contact',
    section: 'contact',
    label: 'Contact',
    icon: '#i-chat',
    text: 'Contact',
  },
];

const scripts = ['/assets/js/real-work2f72.js?v=20261003', '/assets/js/main2f72.js?v=20261105-production'];

export default function BookPublishingPage() {
  return (
    <>
      <PageStyles styles={styles} preloads={preloads} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="bp-hero on-dark" id="top" aria-labelledby="bp-title">
          <div className="bp-hero__media" aria-hidden="true">
            <div className="bp-hero__img" data-parallax="0.05" />
          </div>
          <div className="container bp-hero__inner">
            <nav className="bp-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/#services">Services</Link>
                </li>
                <li aria-current="page">Book Publishing</li>
              </ol>
            </nav>
            <div className="bp-hero__copy">
              <p className="bp-eyebrow">Book Publishing</p>
              <h1 className="bp-hero__title" id="bp-title">
                {'Your Book Is Taking Shape. '}
                <em>Here&apos;s What Comes Next.</em>
              </h1>
              <p className="bp-hero__lead">
                From page layout to final cover files, we help prepare print and digital editions with a production plan
                that keeps each decision connected.
              </p>
              <div className="bp-hero__ctas">
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Start your publishing journey '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>
              </div>
              <dl className="bp-hero__spec">
                <div>
                  <dt>Print</dt>
                  <dd>Fixed page dimensions &amp; spreads</dd>
                </div>
                <div>
                  <dt>Digital</dt>
                  <dd>Adaptive eBook editions</dd>
                </div>
                <div>
                  <dt>Files</dt>
                  <dd>Print-ready &amp; digital files</dd>
                </div>
              </dl>
            </div>
            <figure className="bp-hero__books" aria-label={`Books published with ${site.name}`}>
              <div className="book3d bp-b bp-b--1">
                <div className="book3d__body">
                  <div className="book3d__back" />
                  <Image
                    loading="eager"
                    className="book3d__cover"
                    src="/assets/images/books/cover-20.webp"
                    width="440"
                    height="660"
                    alt=""
                    decoding="async"
                  />
                </div>
                <div className="book3d__shadow" />
              </div>
              <div className="book3d bp-b bp-b--2">
                <div className="book3d__body">
                  <div className="book3d__back" />
                  <Image
                    loading="eager"
                    className="book3d__cover"
                    src="/assets/images/books/cover-06.webp"
                    width="440"
                    height="660"
                    alt=""
                    decoding="async"
                  />
                </div>
                <div className="book3d__shadow" />
              </div>
              <div className="book3d bp-b bp-b--3">
                <div className="book3d__body">
                  <div className="book3d__back" />
                  <Image
                    loading="eager"
                    className="book3d__cover"
                    src="/assets/images/books/cover-24.webp"
                    width="440"
                    height="660"
                    alt=""
                    decoding="async"
                  />
                </div>
                <div className="book3d__shadow" />
              </div>
              <figcaption>{`Published with ${site.name}`}</figcaption>
            </figure>
          </div>
        </section>

        <section className="bp-sec bp-process" id="approach" aria-labelledby="process-title">
          <div
            className="bp-bg"
            data-photo="1634713157685-676e35324215-2000"
            style={{ '--o': '.26', '--b': '4px', '--pos': '50% 45%' }}
            aria-hidden="true"
          />
          <div className="container">
            <div className="bp-head">
              <p className="bp-kicker">
                <b>01</b>
                The publishing process.
              </p>
              <h2 className="bp-h2" id="process-title">
                {'From Written Pages '}
                <em>to a Published Book.</em>
              </h2>
              <p className="bp-body">
                A manuscript becomes a book through a series of production decisions. We help coordinate the files,
                design, checks, and publishing preparation required for the editions included in your project.
              </p>
            </div>
            <div className="bp-run">
              <div className="bp-run__line" aria-hidden="true" />
              <ol className="bp-run__list" role="list">
                <li className="bp-step">
                  <span className="bp-step__n">01</span>
                  <span className="bp-step__obj">Text &amp; source files</span>
                  <h3>Manuscript preparation</h3>
                  <p>Confirm the final text, front matter, back matter, and required source files.</p>
                </li>
                <li className="bp-step">
                  <span className="bp-step__n">02</span>
                  <span className="bp-step__obj">Page &amp; chapter layout</span>
                  <h3>Interior formatting</h3>
                  <p>Set the page size, typography, spacing, and chapter layout for the chosen edition.</p>
                </li>
                <li className="bp-step">
                  <span className="bp-step__n">03</span>
                  <span className="bp-step__obj">Artwork &amp; edition cover</span>
                  <h3>Cover &amp; design</h3>
                  <p>Prepare the cover artwork and layout for the selected print or digital format.</p>
                </li>
                <li className="bp-step">
                  <span className="bp-step__n">04</span>
                  <span className="bp-step__obj">Composed page check</span>
                  <h3>Proofing</h3>
                  <p>Review the composed pages and cover for errors before final production.</p>
                </li>
                <li className="bp-step">
                  <span className="bp-step__n">05</span>
                  <span className="bp-step__obj">Print &amp; digital deliverables</span>
                  <h3>Final production</h3>
                  <p>Prepare the agreed print-ready and digital files.</p>
                </li>
                <li className="bp-step">
                  <span className="bp-step__n">06</span>
                  <span className="bp-step__obj">Setup &amp; materials</span>
                  <h3>Publication</h3>
                  <p>Complete the agreed publishing setup and provide the final production materials.</p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bp-sec bp-prep" id="prepare" aria-labelledby="prep-title">
          <div className="container bp-prep__grid">
            <figure className="bp-prep__fig">
              <Image
                data-auto-size=""
                width="1100"
                height="1300"
                src="/assets/images/photos/1609605348579-3123e3d40eb8-1100x1300.webp"
                alt="Open pages of a typeset book showing a range of typefaces"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Every File in Place. Every Detail Checked.</figcaption>
            </figure>
            <div>
              <p className="bp-kicker">
                <b>02</b>
                Production standards
              </p>
              <h2 className="bp-h2 bp-h2--stack" id="prep-title">
                {'Every File in Place. '}
                <em>Every Detail Checked.</em>
              </h2>
              <p className="bp-body">
                Readable typography, a considered interior hierarchy, correct production specifications, clean digital
                formatting, accurate front and back matter, and a final review all contribute to a dependable reader
                experience.
              </p>
              <div className="bp-contents">
                <p className="bp-contents__head">
                  <span>Checklist</span>
                  <span>What a professionally prepared book should get right</span>
                </p>
                <ol className="bp-contents__list" role="list">
                  <li>
                    <span>01</span>
                    Readable typography
                  </li>
                  <li>
                    <span>02</span>
                    Considered interior hierarchy
                  </li>
                  <li>
                    <span>03</span>
                    Correct production specifications
                  </li>
                  <li>
                    <span>04</span>
                    Clean digital formatting
                  </li>
                  <li>
                    <span>05</span>
                    Accurate front and back matter
                  </li>
                  <li>
                    <span>06</span>
                    Final quality review
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="bp-sec bp-ed" id="editions" aria-labelledby="ed-title">
          <div className="container">
            <div className="bp-head bp-head--c">
              <p className="bp-kicker bp-kicker--c">
                <b>03</b>
                Print and digital
              </p>
              <h2 className="bp-h2 bp-h2--c" id="ed-title">
                {'In Readers&apos; Hands '}
                <em>or on Their Devices.</em>
              </h2>
              <p className="bp-body bp-body--c">
                A printed book and an ebook do not behave in the same way. Print requires fixed page dimensions and
                carefully composed spreads; digital editions need files that adapt to different screens and reading
                settings. We prepare each format according to its intended use.
              </p>
            </div>
            <div className="bp-ed__split">
              <article className="bp-edition bp-edition--print">
                <div className="bp-edition__img">
                  <Image
                    data-auto-size=""
                    width="1200"
                    height="800"
                    src="/assets/images/photos/1709158997589-c547225f86f3-1200x800.webp"
                    alt="A finished clothbound hardcover with a ribbon marker"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="bp-edition__label">Print edition</p>
                <h3>Fixed page dimensions &amp; spreads.</h3>
                <p className="bp-edition__lead">
                  Print requires fixed page dimensions and carefully composed spreads for a comfortable reading
                  experience on paper.
                </p>
                <ul className="bp-spec" role="list">
                  <li>
                    <b>Page size &amp; trim</b>
                    <span>Set to match the edition and print specifications</span>
                  </li>
                  <li>
                    <b>Typography &amp; spacing</b>
                    <span>Readable type, consistent spacing, and clear chapter layout</span>
                  </li>
                  <li>
                    <b>Composed spreads</b>
                    <span>Balanced facing pages, running heads, and margins</span>
                  </li>
                  <li>
                    <b>Front &amp; back matter</b>
                    <span>Accurate preliminary pages and closing sections</span>
                  </li>
                  <li>
                    <b>Cover artwork &amp; layout</b>
                    <span>Prepared for the selected print format</span>
                  </li>
                  <li>
                    <b>Print-ready files</b>
                    <span>Proofed and prepared for final production</span>
                  </li>
                </ul>
              </article>
              <article className="bp-edition bp-edition--digital">
                <div className="bp-edition__img">
                  <Image
                    data-auto-size=""
                    width="1200"
                    height="800"
                    src="/assets/images/photos/1610731826702-6ded935d39a2-1200x800.webp"
                    alt="An e reader showing a page of text on a wooden table"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="bp-edition__label">Digital edition</p>
                <h3>Files that adapt to screens.</h3>
                <p className="bp-edition__lead">
                  Digital editions need files that adapt to different screens and reading settings while keeping the
                  book&apos;s structure intact.
                </p>
                <ul className="bp-spec" role="list">
                  <li>
                    <b>Adaptive layout</b>
                    <span>Adjusts across screen sizes and reading settings</span>
                  </li>
                  <li>
                    <b>Clean digital formatting</b>
                    <span>Structured text, headings, and chapter flow</span>
                  </li>
                  <li>
                    <b>Digital cover</b>
                    <span>Prepared for the selected digital format</span>
                  </li>
                  <li>
                    <b>Proofing &amp; review</b>
                    <span>Checked for errors before final production</span>
                  </li>
                  <li>
                    <b>Digital files</b>
                    <span>Delivered ready for the agreed publishing setup</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bp-finish on-dark" id="finished" aria-labelledby="finish-title">
          <div className="bp-finish__photo" aria-hidden="true">
            <Image
              data-auto-size=""
              width="2000"
              height="1200"
              src="/assets/images/photos/1650735310293-307be67b3236-2000x1200.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.05"
            />
          </div>
          <div className="container bp-finish__grid">
            <div className="bp-finish__copy">
              <p className="bp-kicker bp-kicker--light">
                <b>04</b>
                Final presentation
              </p>
              <h2 className="bp-h2 bp-h2--light" id="finish-title">
                {'Take a Look at Your Book '}
                <em>in Its Final Form.</em>
              </h2>
              <p className="bp-body bp-body--light">
                The cover, interior, metadata, and edition details should agree. We check the elements included in the
                project so the finished book is presented as one coherent publication.
              </p>
            </div>
            <figure className="bp-finish__book">
              <div className="book3d bp-fb">
                <div className="book3d__body">
                  <div className="book3d__back" />
                  <Image
                    className="book3d__cover"
                    src="/assets/images/books/cover-18.webp"
                    width="440"
                    height="660"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="book3d__shadow" />
              </div>
              <figcaption>
                <span className="label">Coherent presentation</span>
                {`Published with ${site.name}`}
              </figcaption>
            </figure>
          </div>
          <div className="container">
            <div className="bp-shelf">
              <p>Books That Have Made It to the Page.</p>
              <ul role="list">
                <li>
                  <Image
                    src="/assets/images/books/cover-25.webp"
                    width="440"
                    height="660"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </li>
                <li>
                  <Image
                    src="/assets/images/books/cover-05.webp"
                    width="440"
                    height="660"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </li>
                <li>
                  <Image
                    src="/assets/images/books/cover-26.webp"
                    width="440"
                    height="660"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </li>
                <li>
                  <Image
                    src="/assets/images/books/cover-12.webp"
                    width="440"
                    height="660"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </li>
                <li>
                  <Image
                    src="/assets/images/books/cover-23.webp"
                    width="440"
                    height="660"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rw-sel rw-sel--light bp-rw" id="published" aria-labelledby="published-title">
          <div className="container">
            <div className="rw-sel__rule rw-rv" aria-hidden="true">
              <span>
                {`${site.name} `}
                <i>/</i>
                {' Published work'}
              </span>
              <span>Selected titles</span>
              <span>In print</span>
            </div>
            <div className="rw-sel__head">
              <div>
                <p className="rw-eyebrow rw-rv">
                  <span />
                  Published collection
                </p>
                <h2 className="rw-h2 rw-rv" id="published-title">
                  {'Books That Have Made It '}
                  <em>to the Page.</em>
                </h2>
              </div>
              <div className="rw-sel__side rw-rv">
                <p className="rw-lead">
                  Explore selected titles to see how different subjects, formats, and visual approaches are handled
                  across the published collection.
                </p>
                <Link className="rw-link" href="/our-work#catalogue">
                  {'See the full catalogue '}
                  <svg aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="rw-table" data-rw-table="">
              <div className="rw-table__row">
                <Link
                  className="rw-book rw-table__book"
                  href="/our-work#book-19"
                  aria-label="The Legal Tender Question by Joseph R. K. Eshun, view in Our Work"
                  data-rw-book="19"
                  style={{ '--s': '0.52', '--z': '7' }}
                >
                  <span className="rw-book__obj">
                    <Image
                      className="rw-book__img"
                      src="/assets/images/books/book-19-s.webp"
                      width="360"
                      height="614"
                      alt="The Legal Tender Question: Volume Two by Joseph R. K. Eshun, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Legal Tender Question</span>
                    <span className="rw-cap__s">Volume Two</span>
                    <span className="rw-cap__a">Joseph R. K. Eshun</span>
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
                  href="/our-work#emilio-degher"
                  aria-label="Eternal Coherence by Emilio Degher, view in Our Work"
                  data-rw-book="09"
                  style={{ '--s': '0.62', '--z': '8' }}
                >
                  <span className="rw-book__obj">
                    <Image
                      className="rw-book__img"
                      src="/assets/images/books/book-09-s.webp"
                      width="360"
                      height="614"
                      alt="Eternal Coherence: Jesus Christ and the Architecture of Reality by Emilio Degher, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">Eternal Coherence</span>
                    <span className="rw-cap__s">Jesus Christ and the Architecture of Reality</span>
                    <span className="rw-cap__a">Emilio Degher</span>
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
                  href="/our-work#book-27"
                  aria-label="Change to Stay Unchanged by Yerzhan Dosmukhamedov, view in Our Work"
                  data-rw-book="27"
                  style={{ '--s': '0.74', '--z': '9' }}
                >
                  <span className="rw-book__obj">
                    <Image
                      className="rw-book__img"
                      src="/assets/images/books/book-27.webp"
                      width="600"
                      height="1024"
                      alt="Change to Stay Unchanged: Authoritarian Reform in Kazakhstan Under the Tokayev Regime by Yerzhan Dosmukhamedov, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">Change to Stay Unchanged</span>
                    <span className="rw-cap__s">Authoritarian Reform in Kazakhstan Under the Tokayev Regime</span>
                    <span className="rw-cap__a">Yerzhan Dosmukhamedov</span>
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
                  href="/our-work#book-04"
                  aria-label="The Cosmic Mind by Maneseh, view in Our Work"
                  data-rw-book="04"
                  style={{ '--s': '1', '--z': '20' }}
                >
                  <span className="rw-book__obj">
                    <Image
                      className="rw-book__img"
                      src="/assets/images/books/book-04.webp"
                      width="600"
                      height="1024"
                      alt="The Cosmic Mind: Consciousness, Creation and the Search for Meaning by Maneseh, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Cosmic Mind</span>
                    <span className="rw-cap__s">Consciousness, Creation and the Search for Meaning</span>
                    <span className="rw-cap__a">Maneseh</span>
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
                  style={{ '--s': '0.74', '--z': '11' }}
                >
                  <span className="rw-book__obj">
                    <Image
                      className="rw-book__img"
                      src="/assets/images/books/book-18.png"
                      width="600"
                      height="1024"
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
            </div>
          </div>
        </section>

        <section className="section section--ivory faq" id="faq" aria-labelledby="faq-title">
          <div className="container faq__grid">
            <div className="faq__head">
              <p className="bp-kicker">
                <b>05</b>
                FAQ
              </p>
              <h2 className="h2" id="faq-title">
                {'Questions '}
                <em>authors ask.</em>
              </h2>
            </div>
            <div className="faq__list" data-faq="">
              <details className="qa" open>
                <summary>
                  <span>What help do you provide with publishing?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Support can include manuscript preparation, interior formatting, cover coordination, proofing,
                    production files, and agreed publishing setup. The exact scope is confirmed before the project
                    begins.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>Which publishing route should I choose?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    The right route depends on your goals, budget, desired control, distribution plans, and the services
                    you need. We can discuss self-publishing and other available arrangements without assuming one route
                    suits every author.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>When could my book be ready?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Timing depends on manuscript readiness, design and editing requirements, the number of formats,
                    review rounds, and platform processes. A project schedule can be estimated after scope is agreed.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>Can you edit and format my manuscript?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Yes. Editing and formatting can be included where needed or handled as separate services.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>Can you help promote the book afterwards?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Book promotion is a separate service that can be planned around the release date, audience, and
                    available campaign materials.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>Will the book remain mine?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Ownership, account access, ISBN arrangements, and usage rights depend on the publishing setup and
                    written agreement. These points should be clarified before production.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="cta on-dark" id="contact" aria-labelledby="cta-title">
          <div className="cta__media" aria-hidden="true">
            <Image
              width="1800"
              height="2559"
              src="/assets/images/photos/1705602791162-e808808176ec-1800.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.06"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow">Book Publishing</p>
              <h2 className="display cta__title" id="cta-title">
                {'Let’s get your manuscript '}
                <em>ready to publish.</em>
              </h2>
              <p className="lead">
                Tell us which stage you have reached, what formats you want to prepare, and whether you need help with
                editing, design, or publishing setup.
              </p>
              <div className="cta__btns">
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Start your publishing journey '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>
              </div>
            </div>
            <LeadForm
              title="Start your publishing journey"
              messageLabel="Share your current stage, desired formats, and whether you need editing, design, or publishing setup"
            />
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} styles={styles} />
    </>
  );
}