import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Is Your Manuscript Ready? Professional Book Editing Services',
  description:
    'Refine your manuscript with professional book editing services covering developmental editing, copyediting, line editing, and proofreading for clearer, polished writing.',
  path: '/book-editing',
  ogType: 'article',
});

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/service2f72.css?v=20261003',
  '/assets/css/forms.css?v=20261105-production',
  '/assets/css/widgets.css?v=20261105',
];

const preloads = [
  {
    type: 'image/webp',
    href: '/assets/images/photos/1580127645995-d43fe9598711-2000.webp',
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
    href: '#editing-services',
    section: 'editing-services',
    label: 'Editing services',
    icon: '#i-pen',
    text: 'Editing',
  },
  {
    href: '#process',
    section: 'process',
    label: 'Process',
    icon: '#i-steps',
    text: 'Process',
  },
  {
    href: '#faq',
    section: 'faq',
    label: 'FAQ',
    icon: '#i-quote',
    text: 'FAQ',
  },
  {
    href: '#contact',
    section: 'contact',
    label: 'Contact',
    icon: '#i-chat',
    text: 'Contact',
  },
];

const scripts = ['/assets/js/main2f72.js?v=20261105-production'];

export default function BookEditingPage() {
  return (
    <>
      <PageStyles styles={styles} preloads={preloads} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="sv-hero" id="top" aria-labelledby="sv-title">
          <div className="sv-hero__ambient" aria-hidden="true">
            <div className="sv-hero__img" data-parallax="0.06" />
            <div className="sv-hero__veil" />
          </div>
          <div className="container">
            <nav className="crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/#services">Services</Link>
                </li>
                <li aria-current="page">Book Editing and Formatting</li>
              </ol>
            </nav>
            <div className="sv-hero__shell">
              <div className="sv-hero__copy">
                <p className="eyebrow" data-reveal="">
                  Book Editing and formatting
                </p>
                <h1 className="sv-hero__title" id="sv-title" data-reveal="" style={{ '--d': '.08s' }}>
                  {'Keep the Meaning. '}
                  <em>Strengthen the Message.</em>
                </h1>
                <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                  A careful edit looks beyond typos. It checks whether the argument holds, the chapters connect, the
                  language stays consistent, and the finished pages are comfortable to read.
                </p>
                <div className="sv-hero__ctas" data-reveal="" style={{ '--d': '.22s' }}>
                  <button className="btn btn--primary" type="button" data-open-lead="">
                    {'Plan your book edit '}
                    <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </button>
                </div>
                <ul className="sv-hero__kinds" role="list" data-reveal="" style={{ '--d': '.28s' }}>
                  <li>Developmental editing</li>
                  <li>Copy editing</li>
                  <li>Proofreading</li>
                  <li>Comprehensive revision</li>
                </ul>
              </div>
              <div className="sv-hero__stage on-dark" data-reveal="scale" style={{ '--d': '.12s' }}>
                <div className="sv-hero__stage-bg" aria-hidden="true">
                  <Image
                    loading="eager"
                    src="/assets/images/photos/1601675336070-7393219f765e-1200.webp"
                    width="1200"
                    height="800"
                    alt=""
                    decoding="async"
                  />
                </div>
                <div className="book3d sv-hero__book" aria-hidden="true">
                  <div className="book3d__body">
                    <div className="book3d__back" />
                    <Image
                      loading="eager"
                      className="book3d__cover"
                      src="/assets/images/books/cover-05.webp"
                      width="440"
                      height="660"
                      alt=""
                    />
                  </div>
                  <div className="book3d__shadow" />
                </div>
                <p className="sv-hero__caption">
                  <span className="label">Published with Publish Your Books Today</span>
                  <span>The Loan Signing  by Michelle James</span>
                </p>
                <span className="sv-hero__num" aria-hidden="true">
                  02
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--ivory sv-intro" id="overview" aria-labelledby="intro-title">
          <div className="container sv-intro__grid">
            <div className="sv-intro__statement">
              <span className="ghost-num" aria-hidden="true">
                01
              </span>
              <p className="eyebrow" data-reveal="">
                Editorial assessment
              </p>
              <h2 className="h2" id="intro-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Give your draft '}
                <em>a thoughtful second look.</em>
              </h2>
            </div>
            <div className="sv-intro__body" data-reveal="" style={{ '--d': '.14s' }}>
              <p className="sv-intro__lede">
                A manuscript may need structural guidance, sentence-level attention, or a final proofread—not necessarily
                all three. We review the draft and identify the level of editing that fits its current condition.
              </p>
              <dl className="sv-intro__facts">
                <div>
                  <dt className="label">Publishing paths</dt>
                  <dd>
                    {'Independent publishing '}
                    <span>·</span>
                    {' Traditional publisher submissions'}
                  </dd>
                </div>
                <div>
                  <dt className="label">Genres we assess</dt>
                  <dd>Fiction, memoir, business, self-help, educational, and other nonfiction projects</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section section--ivory sv-kinds" id="editing-services" aria-labelledby="kinds-title">
          <div className="ed-bg ed-bg--svc" aria-hidden="true">
            <div className="ed-bg__img" data-parallax="0.05" />
          </div>
          <div className="container">
            <div className="sv-head">
              <div>
                <span className="ghost-num" aria-hidden="true">
                  02
                </span>
                <p className="eyebrow" data-reveal="">
                  Levels of editing
                </p>
                <h2 className="h2" id="kinds-title" data-reveal="" style={{ '--d': '.08s' }}>
                  {'The Right Kind of Editing '}
                  <em>for Your Book.</em>
                </h2>
              </div>
            </div>
            <div className="sv-kinds__grid">
              <article className="sv-feature" data-reveal="">
                <div className="sv-feature__top">
                  <span className="cat__n">01</span>
                  <span className="label">{'Structure & direction'}</span>
                </div>
                <h3 className="sv-feature__title">Developmental editing</h3>
                <p className="sv-feature__lede">
                  For drafts that need work on structure, chapter order, pacing, argument, or narrative direction. The
                  focus is the book as a whole.
                </p>
                <ul className="sv-feature__tags" role="list">
                  <li>Structure</li>
                  <li>Chapter order</li>
                  <li>Pacing</li>
                  <li>Argument</li>
                  <li>Narrative direction</li>
                </ul>
              </article>
              <ol className="sv-rows" role="list" start="2">
                <li className="sv-row" data-reveal="" style={{ '--d': '.06s' }}>
                  <span className="cat__n">02</span>
                  <div>
                    <h3 className="sv-row__title">Copy editing</h3>
                    <p>
                      For sentences that need greater accuracy and consistency. We check grammar, usage, punctuation,
                      terminology, and the small decisions that help a manuscript read smoothly.
                    </p>
                  </div>
                </li>
                <li className="sv-row" data-reveal="" style={{ '--d': '.12s' }}>
                  <span className="cat__n">03</span>
                  <div>
                    <h3 className="sv-row__title">Proofreading</h3>
                    <p>
                      A final check after editing and layout, focused on remaining typographical, punctuation, and
                      consistency errors.
                    </p>
                  </div>
                </li>
                <li className="sv-row" data-reveal="" style={{ '--d': '.18s' }}>
                  <span className="cat__n">04</span>
                  <div>
                    <h3 className="sv-row__title">Comprehensive revision</h3>
                    <p>
                      When several levels of attention are needed, we can define a sequence that addresses larger issues
                      first and surface-level corrections later.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section section--dark sv-desk" id="on-the-page" aria-labelledby="desk-title">
          <div className="sv-desk__bg" aria-hidden="true">
            <div className="sv-desk__img" data-parallax="0.04" />
          </div>
          <div className="container sv-desk__grid">
            <div className="sv-desk__copy">
              <span className="ghost-num" aria-hidden="true">
                03
              </span>
              <p className="eyebrow" data-reveal="">
                On the page
              </p>
              <h2 className="h2" id="desk-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Better Writing, '}
                <em>Without Losing Your Voice.</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.14s' }}>
                The aim is not to make every author sound alike. We preserve deliberate choices while correcting
                distractions, clarifying unclear passages, and flagging places where the reader may lose the thread.
              </p>
              <ul className="sv-legend" role="list" data-reveal="" style={{ '--d': '.2s' }}>
                <li>
                  <span className="sv-legend__mark sv-legend__mark--note">¶</span>
                  <span>
                    <b>Margin notes</b>
                    Margin notes that explain significant editorial decisions.
                  </span>
                </li>
                <li>
                  <span className="sv-legend__mark sv-legend__mark--del">±</span>
                  <span>
                    <b>Tracked changes</b>
                    Tracked changes or an agreed review format.
                  </span>
                </li>
                <li>
                  <span className="sv-legend__mark sv-legend__mark--ins">✓</span>
                  <span>
                    <b>Consistency &amp; queries</b>
                    Consistency checks for names, terms, dates, and references, plus queries where meaning or factual
                    detail needs author confirmation.
                  </span>
                </li>
              </ul>
            </div>
            <figure className="sheet-wrap" data-reveal="scale" style={{ '--d': '.1s' }}>
              <div className="sheet" aria-label="Example of editorial markup on a manuscript page">
                <div className="sheet__head">
                  <span>Chapter Three</span>
                  <span>47</span>
                </div>
                <p className="sheet__p">
                  {'Line editing focuses '}
                  <del>in on</del>
                  {' on the finer details of your writing'}
                  <del>, and</del>
                  <ins>,</ins>
                  {' enhancing clarity, flow'}
                  <ins>,</ins>
                  {' and readability. Our editors refine sentence structure, word choice'}
                  <ins>,</ins>
                  {' and tone to ensure consistency '}
                  <del>and also</del>
                  <ins>and</ins>
                  {' engagement.'}
                  <span className="sheet__note sheet__note--a" aria-hidden="true">
                    tighten: repeated idea
                  </span>
                </p>
                <p className="sheet__p">
                  {'We eliminate redundancies, '}
                  <mark>clarify complex ideas</mark>, and create a smooth reading experience
                  <del>{'\u00a0for the reader'}</del>.
                  <span className="sheet__note sheet__note--b" aria-hidden="true">
                    keep: strong
                  </span>
                </p>
                <p className="sheet__p sheet__p--muted">
                  A careful line edit helps the prose read smoothly while keeping the author’s voice.
                </p>
                <span className="sheet__pen" aria-hidden="true" />
              </div>
              <figcaption>Illustrative editorial markup on a sample passage.</figcaption>
            </figure>
          </div>
        </section>

        <section className="section section--ivory sv-why" id="why-editing" aria-labelledby="why-title">
          <div className="container">
            <div className="sv-why__head">
              <span className="ghost-num" aria-hidden="true">
                04
              </span>
              <p className="eyebrow" data-reveal="">
                Editorial quality
              </p>
              <h2 className="h2" id="why-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Making Every Chapter Work '}
                <em>as Part of the Whole.</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.14s' }}>
                Clarity, consistency, structure, readability, tone, and presentation all affect how a reader experiences
                a manuscript. Editing considers these elements together rather than treating grammar as the only measure
                of quality.
              </p>
            </div>
            <dl className="sv-why__list">
              <div data-reveal="">
                <dt>Clarity</dt>
                <dd>Clear passages and logical links so readers never lose the thread.</dd>
              </div>
              <div data-reveal="" style={{ '--d': '.05s' }}>
                <dt>Consistency</dt>
                <dd>Aligned names, terms, dates, references, and stylistic decisions across every chapter.</dd>
              </div>
              <div data-reveal="" style={{ '--d': '.1s' }}>
                <dt>Structure</dt>
                <dd>Chapter order and pacing shaped so each section supports the book as a whole.</dd>
              </div>
              <div data-reveal="" style={{ '--d': '.15s' }}>
                <dt>Readability</dt>
                <dd>Smooth, accurate sentences that keep the focus on your ideas rather than distractions.</dd>
              </div>
              <div data-reveal="" style={{ '--d': '.2s' }}>
                <dt>Tone</dt>
                <dd>Deliberate authorial choices preserved so the manuscript still sounds like you.</dd>
              </div>
              <div data-reveal="" style={{ '--d': '.25s' }}>
                <dt>Presentation</dt>
                <dd>Clean layout and formatting so the finished pages are comfortable to read.</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section section--paper sv-process" id="process" aria-labelledby="proc-title">
          <div className="ed-bg ed-bg--rev" aria-hidden="true">
            <div className="ed-bg__img" data-parallax="0.04" />
          </div>
          <div className="container sv-process__grid">
            <div className="sv-process__head">
              <span className="ghost-num" aria-hidden="true">
                05
              </span>
              <p className="eyebrow" data-reveal="">
                Our editing process
              </p>
              <h2 className="h2" id="proc-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Making Every Stage '}
                <em>of Editing Clear.</em>
              </h2>
            </div>
            <ol className="sv-steps" role="list">
              <li className="sv-step" data-reveal="">
                <span className="sv-step__n">01</span>
                <div>
                  <p className="label">Stage one</p>
                  <h3>Review</h3>
                  <p>Assess the manuscript and confirm the editorial level and scope.</p>
                </div>
              </li>
              <li className="sv-step" data-reveal="">
                <span className="sv-step__n">02</span>
                <div>
                  <p className="label">Stage two</p>
                  <h3>Edit</h3>
                  <p>Work through the text using the agreed editorial approach.</p>
                </div>
              </li>
              <li className="sv-step" data-reveal="">
                <span className="sv-step__n">03</span>
                <div>
                  <p className="label">Stage three</p>
                  <h3>Refine</h3>
                  <p>Resolve queries and review author feedback or requested adjustments.</p>
                </div>
              </li>
              <li className="sv-step" data-reveal="">
                <span className="sv-step__n">04</span>
                <div>
                  <p className="label">Stage four</p>
                  <h3>Proofread</h3>
                  <p>Check the final text for remaining surface errors.</p>
                </div>
              </li>
              <li className="sv-step sv-step--end" data-reveal="">
                <span className="sv-step__n">05</span>
                <div>
                  <p className="label">Stage five</p>
                  <h3>Deliver</h3>
                  <p>Return the agreed manuscript files and an outline of completed work.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section section--ivory sv-receive" id="receive" aria-labelledby="receive-title">
          <div className="container">
            <div className="sv-receive__panel" data-reveal="scale">
              <div className="sv-receive__intro">
                <span className="ghost-num" aria-hidden="true">
                  06
                </span>
                <p className="eyebrow">Scope &amp; deliverables</p>
                <h2 className="h3" id="receive-title">
                  {'What Goes into Every '}
                  <em>Editing Package.</em>
                </h2>
                <p>
                  Before work begins, the project scope should identify the manuscript version, editorial level, file
                  format, review method, included revision rounds, and final deliverables.
                </p>
                <div className="sv-receive__books" aria-hidden="true">
                  <Image src="/assets/images/books/cover-25.webp" width="440" height="660" alt="" loading="lazy" />
                  <Image src="/assets/images/books/cover-27.webp" width="440" height="660" alt="" loading="lazy" />
                  <Image src="/assets/images/books/cover-12.webp" width="440" height="660" alt="" loading="lazy" />
                </div>
                <p className="sv-receive__books-cap label">{`Published with ${site.name}`}</p>
              </div>
              <ul className="sv-receive__list" role="list">
                <li>
                  <span className="cat__n">i.</span>
                  <h3>Manuscript version &amp; editorial level</h3>
                  <p>Clear confirmation of the working draft and whether it receives developmental, copy, or proof review.</p>
                </li>
                <li>
                  <span className="cat__n">ii.</span>
                  <h3>File format &amp; review method</h3>
                  <p>Agreed working file formats alongside tracked changes, margin notes, and author queries.</p>
                </li>
                <li>
                  <span className="cat__n">iii.</span>
                  <h3>Included revision rounds</h3>
                  <p>Defined follow-up rounds to resolve queries and incorporate your feedback cleanly.</p>
                </li>
                <li>
                  <span className="cat__n">iv.</span>
                  <h3>Final deliverables</h3>
                  <p>The completed manuscript files accompanied by an outline of the editorial work performed.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--ivory faq" id="faq" aria-labelledby="faq-title">
          <div className="ed-bg ed-bg--faq" aria-hidden="true">
            <div className="ed-bg__img" data-parallax="0.04" />
          </div>
          <div className="container faq__grid">
            <div className="faq__head">
              <span className="ghost-num" aria-hidden="true">
                07
              </span>
              <p className="eyebrow" data-reveal="">
                FAQ
              </p>
              <h2 className="h2" id="faq-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Questions '}
                <em>authors ask.</em>
              </h2>
            </div>
            <div className="faq__list" data-faq="">
              <details className="qa" data-reveal="" open>
                <summary>
                  <span>What can your team help me with?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Depending on the manuscript, support may include developmental editing, copy editing, proofreading,
                    and formatting. The recommended scope is based on the draft rather than a fixed assumption.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.04s' }}>
                <summary>
                  <span>How do you work out the cost?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Pricing depends on word count, condition of the manuscript, editorial depth, turnaround, and any
                    additional formatting or review requirements. A quote follows a scope review.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.08s' }}>
                <summary>
                  <span>Can you help with a draft I have already started?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Yes. A partial or complete draft can be reviewed to determine whether it needs structural
                    development, line-level editing, or proofreading.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.12s' }}>
                <summary>
                  <span>Do you work with my type of book?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    We can assess fiction, memoir, business, self-help, educational, and other nonfiction projects. The
                    editorial approach is selected to suit the material.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.16s' }}>
                <summary>
                  <span>Can I ask for publishing support after editing?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Yes. Editing can be scoped as a standalone service or discussed alongside design, formatting, and
                    publishing preparation.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.20s' }}>
                <summary>
                  <span>Can you help readers find my book?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Reader discovery is a separate promotional activity. We can discuss book promotion once the
                    manuscript and publishing details are clear.
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
              <p className="eyebrow">Book Editing and Formatting</p>
              <h2 className="display cta__title" id="cta-title">
                {'Let’s see what '}
                <em>your manuscript needs.</em>
              </h2>
              <p className="lead">
                Send the genre, approximate word count, current draft stage, and the kind of feedback you are looking
                for. We can use those details to suggest an appropriate editorial starting point.
              </p>
              <div className="cta__btns">
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Start your editing project '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>
              </div>
            </div>
            <LeadForm
              title="Start your editing project"
              messageLabel="Share your genre, approximate word count, draft stage, and the feedback you need"
            />
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} styles={styles} />
    </>
  );
}