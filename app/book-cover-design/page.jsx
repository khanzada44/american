import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Book Cover Design',
  description:
    'We develop cover concepts around the story, the reader, and the market your book will enter—then prepare the artwork for the formats you plan to publish.',
  path: '/book-cover-design',
});

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/cover2f72.css?v=20261003',
  '/assets/css/forms.css?v=20261105-production',
  '/assets/css/widgets.css?v=20261105',
];

const preloads = [
  {
    type: 'image/webp',
    href: '/assets/images/photos/1667929048193-4fef49b0ba0a-2400.webp',
    media: '(min-width: 761px)',
    fetchPriority: 'high',
  },
  {
    type: 'image/webp',
    href: '/assets/images/photos/1667929048193-4fef49b0ba0a-1200.webp',
    media: '(max-width: 760px)',
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
    href: '#cover-services',
    section: 'cover-services',
    label: 'Services',
    icon: '#i-brush',
    text: 'Services',
  },
  {
    href: '#covers',
    section: 'covers',
    label: 'Covers',
    icon: '#i-book',
    text: 'Covers',
  },
  {
    href: '#process',
    section: 'process',
    label: 'Process',
    icon: '#i-steps',
    text: 'Process',
  },
  {
    href: '#contact',
    section: 'contact',
    label: 'Contact',
    icon: '#i-chat',
    text: 'Contact',
  },
];

const scripts = ['/assets/js/book-cover-design2f72.js?v=20261003', '/assets/js/main2f72.js?v=20261105-production'];

export default function BookCoverDesignPage() {
  return (
    <>
      <PageStyles styles={styles} preloads={preloads} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="cd-hero on-dark" id="top" aria-labelledby="cd-title">
          <div className="cd-hero__media" aria-hidden="true">
            <div className="cd-hero__img" data-parallax="0.06" />
          </div>
          <div className="container cd-hero__inner">
            <nav className="cd-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/#services">Services</Link>
                </li>
                <li aria-current="page">Book Cover Design</li>
              </ol>
            </nav>
            <div className="cd-hero__copy">
              <span className="cd-crop cd-crop--tl" aria-hidden="true" />
              <span className="cd-crop cd-crop--br" aria-hidden="true" />
              <p className="eyebrow" data-reveal="">
                Book Cover Design
              </p>
              <h1 className="cd-hero__title" id="cd-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Giving Your Story '}
                <em>a Face of Its Own.</em>
              </h1>
              <p className="cd-hero__lead" data-reveal="" style={{ '--d': '.16s' }}>
                We develop cover concepts around the story, the reader, and the market your book will enter—then
                prepare the artwork for the formats you plan to publish.
              </p>
              <div className="cd-hero__ctas" data-reveal="" style={{ '--d': '.22s' }}>
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Plan your book cover '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>
              </div>
            </div>
            <ul className="cd-hero__disciplines" role="list" data-reveal="" style={{ '--d': '.3s' }}>
              <li>Concept &amp; art direction</li>
              <li>Typography</li>
              <li>Full wraparound</li>
              <li>Print &amp; digital</li>
            </ul>
          </div>
        </section>

        <section className="section section--ivory cd-first" id="overview" aria-labelledby="first-title">
          <div className="cd-bg cd-bg--first" data-cd-bg="" aria-hidden="true">
            <div className="cd-bg__img" />
          </div>
          <div className="container cd-first__grid">
            <div className="cd-first__lead">
              <p className="cd-chapter" data-reveal="">
                <span>Ch.</span>
                {' 01'}
              </p>
              <h2 className="cd-h2" id="first-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'The First Glimpse '}
                <em>of What&apos;s Inside.</em>
              </h2>
            </div>
            <div className="cd-first__body" data-reveal="" style={{ '--d': '.14s' }}>
              <p className="cd-first__drop">
                Before a reader opens the book, the cover has already introduced its genre, mood, and subject.
              </p>
              <p>
                We study the manuscript and the intended audience to establish a visual direction that feels appropriate
                to the work.
              </p>
              <p className="cd-first__types">Visual direction grounded in genre, mood, and intended readership</p>
            </div>
            <figure className="cd-first__print" data-reveal="scale" style={{ '--d': '.1s' }}>
              <span className="cd-marks" aria-hidden="true" />
              <Image
                src="/assets/images/books/cover-24.webp"
                width="440"
                height="660"
                alt={`Cover of Whispers of Time by Aggee Andrew Vetiaque, published with ${site.name}`}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span className="label">Published with Publish Your Books Today</span>
                {' Whispers of Time by Aggee Andrew Vetiaque'}
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section section--ivory cd-index" id="cover-services" aria-labelledby="index-title">
          <figure className="cd-index__panel" data-cd-bg="" aria-hidden="true">
            <div className="cd-index__panel-img" />
            <figcaption className="label">In the studio</figcaption>
          </figure>
          <div className="container">
            <div className="cd-index__head">
              <p className="cd-chapter" data-reveal="">
                <span>Ch.</span>
                {' 02'}
              </p>
              <h2 className="cd-h2" id="index-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'From First Concept '}
                <em>to Final Cover.</em>
              </h2>
              <p data-reveal="" style={{ '--d': '.14s' }}>
                A complete cover project considers the front, spine, back, and digital edition from the beginning.
              </p>
            </div>
            <ol className="cd-rows" role="list">
              <li className="cd-row" data-reveal="">
                <span className="cd-row__n">01</span>
                <h3>Concept &amp; art direction</h3>
                <p>Agree on the visual mood, references, and design direction.</p>
              </li>
              <li className="cd-row" data-reveal="">
                <span className="cd-row__n">02</span>
                <h3>Typography &amp; title treatment</h3>
                <p>Set the title, subtitle, and author name for clear reading and suitable hierarchy.</p>
              </li>
              <li className="cd-row" data-reveal="">
                <span className="cd-row__n">03</span>
                <h3>Front cover design</h3>
                <p>Bring image, illustration, and type together into a focused front cover.</p>
              </li>
              <li className="cd-row" data-reveal="">
                <span className="cd-row__n">04</span>
                <h3>Full wraparound design</h3>
                <p>Extend the approved direction across the spine and back cover for print.</p>
              </li>
              <li className="cd-strip" aria-hidden="true">
                <span style={{ '--p': '50% 22%' }}>
                  <Image data-auto-size="" width="440" height="660" src="/assets/images/books/cover-05.webp" alt="" loading="lazy" decoding="async" />
                </span>
                <span style={{ '--p': '50% 12%' }}>
                  <Image data-auto-size="" width="440" height="660" src="/assets/images/books/cover-12.webp" alt="" loading="lazy" decoding="async" />
                </span>
                <span style={{ '--p': '50% 14%' }}>
                  <Image data-auto-size="" width="440" height="660" src="/assets/images/books/cover-25.webp" alt="" loading="lazy" decoding="async" />
                </span>
                <span style={{ '--p': '50% 16%' }}>
                  <Image data-auto-size="" width="440" height="660" src="/assets/images/books/cover-27.webp" alt="" loading="lazy" decoding="async" />
                </span>
                <em className="cd-strip__cap">Title typography, cropped. Covers published with Publish Your Books Today</em>
              </li>
              <li className="cd-row" data-reveal="">
                <span className="cd-row__n">05</span>
                <h3>Spine &amp; back cover</h3>
                <p>Arrange the spine, description, and other supplied details.</p>
              </li>
              <li className="cd-row" data-reveal="">
                <span className="cd-row__n">06</span>
                <h3>Print &amp; digital formatting</h3>
                <p>Adapt the artwork to the specifications of the chosen editions.</p>
              </li>
              <li className="cd-row" data-reveal="">
                <span className="cd-row__n">07</span>
                <h3>Genre positioning</h3>
                <p>Consider the visual cues readers expect when browsing the category.</p>
              </li>
              <li className="cd-row" data-reveal="">
                <span className="cd-row__n">08</span>
                <h3>Final production files</h3>
                <p>Prepare the agreed cover files for publishing and print.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="section section--dark cd-show" id="covers" aria-labelledby="show-title">
          <div className="cd-bg cd-bg--show" data-cd-bg="" aria-hidden="true">
            <div className="cd-bg__img" />
          </div>
          <div className="container cd-show__grid">
            <div className="cd-show__copy">
              <p className="cd-chapter cd-chapter--dark" data-reveal="">
                <span>Ch.</span>
                {' 03'}
              </p>
              <h2 className="cd-h2" id="show-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Take a look '}
                <em>at the catalogue.</em>
              </h2>
              <p data-reveal="" style={{ '--d': '.14s' }}>
                {`Browse cover examples from books published with ${site.name}. Notice how the imagery and type change with the subject.`}
              </p>
              <ol className="cd-show__list" role="list" data-reveal="" style={{ '--d': '.2s' }}>
                <li>
                  <b>Bloom Through the Pain</b>
                  <span>Kadeisha Corbin</span>
                </li>
                <li>
                  <b>Bajo la Influencia del Kremlin</b>
                  <span>Virginia Perez Perez</span>
                </li>
                <li>
                  <b>You vs You</b>
                  <span>Waheed Shaffiek</span>
                </li>
              </ol>
            </div>
            <div className="cd-show__stage" data-reveal="scale" style={{ '--d': '.1s' }}>
              <figure className="cd-show__back cd-show__back--a">
                <Image
                  src="/assets/images/books/cover-25.webp"
                  width="440"
                  height="660"
                  alt="Cover of Bajo la Influencia del Kremlin by Virginia Perez Perez"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <figure className="cd-show__back cd-show__back--b">
                <Image
                  src="/assets/images/books/cover-26.webp"
                  width="440"
                  height="660"
                  alt="Cover of You vs You by Waheed Shaffiek"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="book3d cd-show__hero" data-tilt="" aria-hidden="true">
                <div className="book3d__body">
                  <div className="book3d__back" />
                  <Image
                    className="book3d__cover"
                    src="/assets/images/books/cover-20.webp"
                    width="440"
                    height="660"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="book3d__shadow" />
              </div>
              <figure className="cd-show__loupe" aria-hidden="true">
                <Image data-auto-size="" width="440" height="660" src="/assets/images/books/cover-20.webp" alt="" loading="lazy" decoding="async" />
              </figure>
            </div>
          </div>
        </section>

        <section className="section section--ivory cd-details" id="details" aria-labelledby="details-title">
          <div className="cd-bg cd-bg--details" data-cd-bg="" aria-hidden="true">
            <div className="cd-bg__img" />
          </div>
          <div className="cd-details__grid">
            <figure className="cd-details__photo" data-reveal="scale">
              <Image
                src="/assets/images/photos/1618470341957-dc61f2aa50d1-1400.webp"
                width="1400"
                height="1050"
                alt="Close up of a cloth bound book cover with gold foil lettering and ornament"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="cd-details__copy">
              <p className="cd-chapter" data-reveal="">
                <span>Ch.</span>
                {' 04'}
              </p>
              <h2 className="cd-h2" id="details-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'The Details That Change '}
                <em>the Whole Look.</em>
              </h2>
              <p className="cd-details__lede" data-reveal="" style={{ '--d': '.14s' }}>
                Type size, contrast, image treatment, title placement, and thumbnail legibility all affect how a cover
                reads. We consider these details together rather than treating the front image as the entire design.
              </p>
              <dl className="cd-terms" data-reveal="" style={{ '--d': '.2s' }}>
                <div>
                  <dt>Type size &amp; hierarchy</dt>
                  <dd>Title, subtitle, and author name balanced for clear reading.</dd>
                </div>
                <div>
                  <dt>Contrast</dt>
                  <dd>Strong tonal separation so lettering stands out cleanly.</dd>
                </div>
                <div>
                  <dt>Image treatment</dt>
                  <dd>Illustration or photography matched to the book&apos;s mood and subject.</dd>
                </div>
                <div>
                  <dt>Title placement</dt>
                  <dd>Positioned to anchor the composition across print and digital views.</dd>
                </div>
                <div>
                  <dt>Thumbnail legibility</dt>
                  <dd>Tested at small scale so the cover still reads clearly when browsing online.</dd>
                </div>
                <div>
                  <dt>Full-wrap cohesion</dt>
                  <dd>Front, spine, and back cover designed as one unified layout.</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section section--paper cd-process" id="process" aria-labelledby="proc-title">
          <div className="cd-bg cd-bg--process" data-cd-bg="" aria-hidden="true">
            <div className="cd-bg__img" />
          </div>
          <div className="container">
            <div className="cd-process__head">
              <p className="cd-chapter" data-reveal="">
                <span>Ch.</span>
                {' 05'}
              </p>
              <h2 className="cd-h2" id="proc-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Your Ideas Help '}
                <em>Shape the Cover.</em>
              </h2>
              <p data-reveal="" style={{ '--d': '.14s' }}>
                You review the proposed direction and provide feedback at agreed stages. This keeps the design
                connected to the book while giving the project a clear approval path.
              </p>
            </div>
            <ol className="cd-steps" role="list">
              <li data-reveal="">
                <span className="cd-steps__n">01</span>
                <h3>Brief &amp; study</h3>
                <p>Review the manuscript, intended audience, and comparable category titles.</p>
              </li>
              <li data-reveal="" style={{ '--d': '.06s' }}>
                <span className="cd-steps__n">02</span>
                <h3>Direction</h3>
                <p>Propose visual mood, references, and initial cover concepts for your review.</p>
              </li>
              <li data-reveal="" style={{ '--d': '.12s' }}>
                <span className="cd-steps__n">03</span>
                <h3>Feedback</h3>
                <p>Gather your notes at agreed stages to refine typography, imagery, and layout.</p>
              </li>
              <li data-reveal="" style={{ '--d': '.18s' }}>
                <span className="cd-steps__n">04</span>
                <h3>Wrap &amp; formats</h3>
                <p>Extend the approved front cover to spine, back cover, and digital editions.</p>
              </li>
              <li data-reveal="" style={{ '--d': '.24s' }}>
                <span className="cd-steps__n">05</span>
                <h3>Approval &amp; files</h3>
                <p>Prepare production-ready files once the final design is signed off.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="section section--ivory cd-anywhere" id="everywhere" aria-labelledby="any-title">
          <div className="cd-bg cd-bg--anywhere" data-cd-bg="" aria-hidden="true">
            <div className="cd-bg__img" />
          </div>
          <div className="container">
            <div className="cd-anywhere__head">
              <p className="cd-chapter" data-reveal="">
                <span>Ch.</span>
                {' 06'}
              </p>
              <h2 className="cd-h2" id="any-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Ready for the Shelf '}
                <em>and the Scroll.</em>
              </h2>
              <p data-reveal="" style={{ '--d': '.14s' }}>
                A cover may appear as a printed paperback, a retailer thumbnail, an ebook image, or a promotional
                graphic. We prepare the formats included in the brief so the design remains recognisable across its
                intended uses.
              </p>
            </div>
            <div className="cd-contexts" data-reveal="">
              <figure className="cd-ctx cd-ctx--shelf">
                <div className="cd-ctx__frame">
                  <span className="cd-spine" style={{ '--c': '#2b2f3a', '--h': '88%' }} />
                  <span className="cd-spine" style={{ '--c': '#6d4a33', '--h': '94%' }} />
                  <Image data-auto-size="" width="440" height="660" src="/assets/images/books/cover-12.webp" alt="" loading="lazy" decoding="async" />
                  <span className="cd-spine" style={{ '--c': '#8a7a5c', '--h': '90%' }} />
                  <span className="cd-ctx__shelf" aria-hidden="true" />
                </div>
                <figcaption>
                  <b>Printed paperback</b>
                  {' Bookstores & print editions'}
                </figcaption>
              </figure>
              <figure className="cd-ctx cd-ctx--thumb">
                <div className="cd-ctx__frame">
                  <div className="cd-listing">
                    <Image data-auto-size="" width="440" height="660" src="/assets/images/books/cover-12.webp" alt="" loading="lazy" decoding="async" />
                    <span>
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>
                  <div className="cd-listing cd-listing--dim">
                    <span className="cd-listing__blank" />
                    <span>
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>
                  <div className="cd-listing cd-listing--dim">
                    <span className="cd-listing__blank" />
                    <span>
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>
                </div>
                <figcaption>
                  <b>Retailer thumbnail</b>
                  {' Online stores & search results'}
                </figcaption>
              </figure>
              <figure className="cd-ctx cd-ctx--feed">
                <div className="cd-ctx__frame">
                  <div className="cd-post">
                    <Image data-auto-size="" width="440" height="660" src="/assets/images/books/cover-12.webp" alt="" loading="lazy" decoding="async" />
                  </div>
                  <span className="cd-post__line" />
                  <span className="cd-post__line cd-post__line--s" />
                </div>
                <figcaption>
                  <b>Promotional graphic</b>
                  {' Social feeds & announcements'}
                </figcaption>
              </figure>
              <figure className="cd-ctx cd-ctx--catalog">
                <div className="cd-ctx__frame">
                  <div className="cd-page">
                    <Image data-auto-size="" width="440" height="660" src="/assets/images/books/cover-12.webp" alt="" loading="lazy" decoding="async" />
                    <span>
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>
                </div>
                <figcaption>
                  <b>Ebook image</b>
                  {' Digital readers & author pages'}
                </figcaption>
              </figure>
            </div>
            <p className="cd-anywhere__note">{`Featured example: The Path of Truth by Emilio Degher, from ${site.name}.`}</p>
          </div>
        </section>

        <section className="section section--paper cd-spec" id="deliverables" aria-labelledby="spec-title">
          <div className="cd-bg cd-bg--spec" data-cd-bg="" aria-hidden="true">
            <div className="cd-bg__img" />
          </div>
          <div className="container cd-spec__grid">
            <div className="cd-spec__head">
              <p className="cd-chapter" data-reveal="">
                <span>Ch.</span>
                {' 07'}
              </p>
              <h2 className="cd-h2" id="spec-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'The Final Design, '}
                <em>Prepared for Production.</em>
              </h2>
              <p data-reveal="" style={{ '--d': '.14s' }}>
                The agreed handoff may include front cover artwork, full-wrap print cover, spine and back cover, ebook
                cover, high-resolution artwork, and production-ready files. Exact formats are confirmed in the project
                scope.
              </p>
            </div>
            <div className="cd-sheet" data-reveal="scale" style={{ '--d': '.1s' }}>
              <span className="cd-marks" aria-hidden="true" />
              <p className="cd-sheet__title">
                <span>Agreed handoff</span>
                <span>Project scope</span>
              </p>
              <ul className="cd-sheet__list" role="list">
                <li>
                  <b>Front cover artwork</b>
                  <i />
                  <span>Approved front design</span>
                </li>
                <li>
                  <b>Full-wrap print cover</b>
                  <i />
                  <span>Front · spine · back</span>
                </li>
                <li>
                  <b>Spine and back cover</b>
                  <i />
                  <span>Sized to trim &amp; page count</span>
                </li>
                <li>
                  <b>Ebook cover</b>
                  <i />
                  <span>Digital edition format</span>
                </li>
                <li>
                  <b>High-resolution artwork</b>
                  <i />
                  <span>Print &amp; digital quality</span>
                </li>
                <li>
                  <b>Production-ready files</b>
                  <i />
                  <span>Confirmed in project scope</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cd-campaign on-dark" aria-labelledby="campaign-title">
          <div className="cd-campaign__media" aria-hidden="true">
            <Image
              src="/assets/images/photos/1598113226787-55dbeaeed8e9-2200.webp"
              width="2200"
              height="1464"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.05"
            />
          </div>
          <div className="container cd-campaign__inner">
            <h2 className="cd-campaign__title" id="campaign-title" data-reveal="">
              {'A Cover That Makes Readers '}
              <em>Look Twice.</em>
            </h2>
          </div>
        </section>

        <section className="section section--ivory faq" id="faq" aria-labelledby="faq-title">
          <div className="container faq__grid">
            <div className="faq__head">
              <p className="cd-chapter" data-reveal="">
                <span>Ch.</span>
                {' 08'}
              </p>
              <h2 className="h2" id="faq-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Questions '}
                <em>authors ask.</em>
              </h2>
            </div>
            <div className="faq__list" data-faq="">
              <details className="qa" data-reveal="" open>
                <summary>
                  <span>Why does a professional book cover matter?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    The cover is a reader&apos;s first visual cue. It helps communicate genre, tone, and subject before
                    the description is read.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>What types of book cover designs do you offer?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Cover direction can be developed for fiction, nonfiction, memoir, business, self-help,
                    children&apos;s books, and other categories, with the approach matched to the manuscript.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>Can I request changes to my book cover design?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Feedback and revisions are handled according to the rounds and approval stages stated in the project
                    agreement.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>Do you provide covers for both print and ebooks?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Print and ebook versions can be prepared when both are included in the agreed scope. Print covers
                    require final trim, page-count, and printer specifications.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>How long does the book cover design process take?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Timing depends on the brief, concept development, feedback, and final production requirements. A
                    schedule is confirmed before work begins.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>Can you create a cover that fits my genre?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    We review comparable titles and reader expectations in the category while developing a design that
                    is specific to your book.
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
              <p className="eyebrow">Book Cover Design</p>
              <h2 className="display cta__title" id="cta-title">
                {'A Cover That Makes Readers '}
                <em>Look Twice.</em>
              </h2>
              <p className="lead">
                Tell us about your book, its genre, and the print or digital editions you plan to publish. We can help
                define a visual direction and cover scope tailored to your manuscript.
              </p>
              <div className="cta__btns">
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Plan your book cover '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>
              </div>
            </div>
            <LeadForm
              title="Plan your book cover"
              messageLabel="Share your book's genre, summary, and the print or digital formats you need"
            />
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} styles={styles} />
    </>
  );
}