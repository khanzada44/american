import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Articles and Magazines',
  description:
    'A magazine feature, expert article, interview, or recurring column needs more than a subject. It needs an angle that gives readers a reason to stay with it.',
  path: '/articles-magazines',
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
    label: 'Formats',
    icon: '#i-pen',
    text: 'Formats',
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

export default function ArticlesMagazinesPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="ns-hero ns-hero--split" id="top" aria-labelledby="ns-title">
          <div className="container">
            <nav className="ns-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/#services">Services</Link>
                </li>
                <li aria-current="page">Articles and Magazines</li>
              </ol>
            </nav>
            <div className="ns-hero__grid">
              <div className="ns-hero__copy">
                <p className="ns-eyebrow">
                  <span />
                  Articles and Magazines
                </p>
                <h1 className="ns-title" id="ns-title">
                  {'Give Your Words '}
                  <em>a Wider Audience.</em>
                </h1>
                <p className="ns-lead">
                  A magazine feature, expert article, interview, or recurring column needs more than a subject. It needs
                  an angle that gives readers a reason to stay with it.
                </p>
                <div className="ns-hero__btns">
                  <button className="btn btn--primary" type="button" data-open-lead="">
                    {'Plan an article or issue '}
                    <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </button>
                </div>
                <ul className="ns-chips" role="list">
                  <li>Feature articles</li>
                  <li>Author profiles</li>
                  <li>Opinion pieces</li>
                  <li>Q&amp;A interviews</li>
                </ul>
              </div>
              <figure className="ns-hero__fig">
                <Image
                  data-auto-size=""
                  width="2000"
                  height="3000"
                  loading="eager"
                  src="/assets/images/photos/1579366877909-40560cf603e2-2000.webp"
                  alt="An open magazine spread with photographs and printed articles"
                  decoding="async"
                  fetchPriority="high"
                />
                <figcaption>
                  <span>Articles and Magazines</span>
                  {site.name}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="ns-intro" aria-label="Introduction">
          <div className="container ns-intro__grid">
            <p className="ns-intro__state ns-rv">Leave Readers with Something Worth Knowing</p>
            <div className="ns-intro__side ns-rv">
              <p>
                We help shape the subject, choose the right format, and develop the piece for its intended audience. The
                result should offer a clear point, useful detail, and a reason to keep reading.
              </p>
              <p className="ns-intro__part">
                {'Part of '}
                <Link href="/#services">Writing and Editorial</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="ns-sig ns-mag" aria-labelledby="sig-title">
          <div className="container ns-mag__grid">
            <div className="ns-sig__head">
              <p className="ns-label ns-rv">Editorial formats</p>
              <h2 className="ns-h2 ns-rv" id="sig-title">
                {'From Solid Research '}
                <em>to Strong Writing.</em>
              </h2>
              <ul className="ns-mag__formats ns-rv" role="list">
                <li>Feature articles and long-form pieces</li>
                <li>Author profiles and professional interviews</li>
                <li>Opinion pieces and expert commentary</li>
                <li>Q&amp;A interviews</li>
                <li>Book excerpts and adapted passages</li>
                <li>Newsletters and recurring editorial content</li>
              </ul>
            </div>
            <figure className="ns-mag__spread ns-rv" aria-label="Example layout of a magazine feature spread">
              <div className="ns-mag__page">
                <span className="ns-mag__kick">Feature</span>
                <span className="ns-mag__hl">
                  {'A clear point '}
                  <em>and useful detail.</em>
                </span>
                <span className="ns-mag__by">Editorial &amp; Feature Writing</span>
                <span className="ns-mag__text">
                  <b>A</b>
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <span className="ns-mag__pq">“A reason to keep reading.”</span>
                <span className="ns-mag__text">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <span className="ns-mag__folio">24</span>
              </div>
              <div className="ns-mag__page ns-mag__page--img">
                <Image
                  data-auto-size=""
                  width="1400"
                  height="1000"
                  src="/assets/images/photos/1684323748175-5735beec2308-1400x1000.webp"
                  alt="Magazines displayed on a news stand shelf"
                  loading="lazy"
                  decoding="async"
                />
                <span className="ns-mag__folio">25</span>
              </div>
              <figcaption>Example layout: a two-page feature spread</figcaption>
            </figure>
          </div>
        </section>

        <section className="ns-inc" aria-labelledby="inc-title">
          <div className="container ns-inc__grid">
            <div className="ns-inc__head">
              <p className="ns-label ns-rv">Formats &amp; scope</p>
              <h2 className="ns-h2 ns-rv" id="inc-title">
                From Solid Research to Strong Writing.
              </h2>
              <figure className="ns-inc__fig ns-rv">
                <Image
                  data-auto-size=""
                  width="900"
                  height="1100"
                  src="/assets/images/photos/1579366877909-40560cf603e2-900x1100.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <ol className="ns-inc__list ns-rv" role="list">
              <li>
                <span className="ns-inc__n">01</span>
                <h3 className="ns-inc__t">Feature articles and long-form pieces</h3>
                <p className="ns-inc__d">
                  In-depth editorial features built around a clear angle, solid research, and sustained reader interest.
                </p>
              </li>
              <li>
                <span className="ns-inc__n">02</span>
                <h3 className="ns-inc__t">Author profiles and professional interviews</h3>
                <p className="ns-inc__d">
                  Structured profiles and interviews that highlight expertise, experience, and perspective.
                </p>
              </li>
              <li>
                <span className="ns-inc__n">03</span>
                <h3 className="ns-inc__t">Opinion pieces and expert commentary</h3>
                <p className="ns-inc__d">
                  Focused commentary shaped around a clear point of view for the intended readership.
                </p>
              </li>
              <li>
                <span className="ns-inc__n">04</span>
                <h3 className="ns-inc__t">Q&amp;A interviews</h3>
                <p className="ns-inc__d">
                  Thoughtful questions and edited conversation pieces prepared for print or digital publication.
                </p>
              </li>
              <li>
                <span className="ns-inc__n">05</span>
                <h3 className="ns-inc__t">Book excerpts and adapted passages</h3>
                <p className="ns-inc__d">
                  Excerpts and adapted selections crafted to stand on their own for magazine or online readers.
                </p>
              </li>
              <li>
                <span className="ns-inc__n">06</span>
                <h3 className="ns-inc__t">Newsletters and recurring editorial content</h3>
                <p className="ns-inc__d">
                  Ongoing columns, newsletters, and issue-based content planned with a consistent editorial direction.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="ns-steps" aria-labelledby="steps-title">
          <div className="container">
            <p className="ns-label ns-rv" id="steps-title">
              The Thinking Behind the Final Draft.
            </p>
            <ol className="ns-steps__list ns-rv" role="list">
              <li>
                <span>01</span>
                <b>Brief</b>
                <p>Agree on the subject, audience, publication, length, and intended outcome.</p>
              </li>
              <li>
                <span>02</span>
                <b>Angle &amp; outline</b>
                <p>Set the central point and organise the material into a workable structure.</p>
              </li>
              <li>
                <span>03</span>
                <b>Draft &amp; revise</b>
                <p>Develop the piece, check its flow, and incorporate agreed feedback.</p>
              </li>
              <li>
                <span>04</span>
                <b>Ready to publish</b>
                <p>Complete the final edit and prepare the approved copy for layout or submission.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="ns-rel" aria-labelledby="rel-title">
          <div className="container ns-rel__grid">
            <div>
              <p className="ns-label">More Ways to Move Your Book Forward.</p>
              <h2 className="ns-rel__title" id="rel-title">
                If an article grows out of a larger manuscript or author project, related writing and editing support can
                be planned without repeating the same work.
              </h2>
              <Link className="ns-link" href="/#services">
                {'All services '}
                <svg aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
            </div>
            <ul className="ns-rel__list" role="list">
              <li>
                <Link href="/ghostwriting">
                  <span className="ns-rel__t">Writing and Editorial</span>
                  <span className="ns-rel__d">
                    Turn ideas, notes, interviews, and experiences into a structured manuscript in your voice.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/book-editing">
                  <span className="ns-rel__t">Book Editing and Formatting</span>
                  <span className="ns-rel__d">
                    Developmental editing, copy editing, proofreading, and revision tailored to your draft.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="section section--ivory faq" id="faq" aria-labelledby="faq-title">
          <div className="container faq__grid">
            <div className="faq__head">
              <p className="ns-label ns-rv">FAQ</p>
              <h2 className="h2" id="faq-title">
                Questions authors ask
              </h2>
            </div>
            <div className="faq__list" data-faq="">
              <details className="qa" open>
                <summary>
                  <span>Can you write an article from an interview?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Yes. We can help prepare questions, organise interview material, identify the central angle, and
                    develop an article from the approved source material.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>Can you work with an existing draft?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Yes. We can edit, restructure, or proofread a draft depending on its condition and the
                    publication&apos;s requirements.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>Do you write for a specific magazine or audience?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    The brief can be shaped around a named publication, its readers, subject area, tone, and submission
                    guidelines supplied by the client.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>Can you prepare recurring content?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Recurring articles, columns, newsletters, and issue-based content can be discussed as a series with
                    an agreed schedule and editorial direction.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>Do you also design magazine pages?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Magazine-ready layout and print or digital preparation can be included when specified in the project
                    scope.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>What do you need to begin?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Share the topic, intended audience or publication, preferred length, deadline, and any source
                    material or editorial guidelines.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="cta on-dark ns-cta" id="contact" aria-labelledby="cta-title">
          <div className="cta__media" aria-hidden="true">
            <Image
              data-auto-size=""
              width="1600"
              height="1067"
              src="/assets/images/photos/1684323748175-5735beec2308-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Articles and Magazines
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Give the subject '}
                <em>a sharper angle.</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                Tell us what you want readers to understand, learn, or consider. We can help define the format and the
                work required to prepare it for publication.
              </p>
              <div className="ns-cta__btns" data-reveal="" style={{ '--d': '.2s' }}>
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Discuss an article '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>
                <Link className="btn btn--glass" href="/contact">
                  <svg className="btn__icon" aria-hidden="true">
                    <use href="#i-phone" />
                  </svg>
                  Speak With Us
                </Link>
              </div>
            </div>
            <LeadForm
              title="Discuss an article"
              messageLabel="Share the topic, intended audience or publication, preferred length, deadline, and source material"
            />
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} styles={styles} />
    </>
  );
}