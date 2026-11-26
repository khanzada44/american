import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';

export const metadata = pageMetadata({
  title: 'Have the Story? Professional Book Ghostwriting Services',
  description:
    'Turn your ideas, experiences, and expertise into a complete manuscript with professional book ghostwriting services tailored to your subject, style, and voice.',
  path: '/ghostwriting',
});

export const viewport = { themeColor: '#0D0D0F' };

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/ghostwriting2f72.css?v=20261003',
  '/assets/css/forms.css?v=20261105-production',
  '/assets/css/widgets.css?v=20261105',
];

const preloads = [
  {
    type: 'image/webp',
    href: '/assets/images/photos/1455390582262-044cdead277a-2400.webp',
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
    href: '#voice',
    section: 'voice',
    label: 'Your voice',
    icon: '#i-pen',
    text: 'Voice',
  },
  {
    href: '#process',
    section: 'process',
    label: 'Journey',
    icon: '#i-steps',
    text: 'Journey',
  },
  {
    href: '#manuscript',
    section: 'manuscript',
    label: 'Manuscript',
    icon: '#i-book',
    text: 'Manuscript',
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

export default function GhostwritingPage() {
  return (
    <>
      <PageStyles styles={styles} preloads={preloads} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="gw-hero on-dark" id="top" aria-labelledby="gw-title">
          <div className="gw-hero__media" aria-hidden="true">
            <div className="gw-hero__img" data-parallax="0.04" />
          </div>
          <div className="container gw-hero__inner">
            <nav className="gw-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/#services">Services</Link>
                </li>
                <li aria-current="page">Writing and Editorial</li>
              </ol>
            </nav>
            <p className="gw-eyebrow">SERVICES · Writing and Editorial</p>
            <h1 className="gw-hero__title" id="gw-title">
              <span>Your Vision.</span> <span>Your Voice.</span> <em>Your Book.</em>
            </h1>
            <div className="gw-hero__foot">
              <p className="gw-hero__lead">
                You bring the experience, memories, or point of view. We help turn that material into a manuscript with a clear direction, a considered structure, and language that sounds like you.
              </p>
              <div className="gw-hero__ctas">
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Discuss your book '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="gw-idea" id="approach" aria-labelledby="idea-title">
          <figure className="gw-idea__photo">
            <Image
              data-auto-size=""
              width="1400"
              height="1700"
              src="/assets/images/photos/1501618669935-18b6ecb13d6d-1400x1700.webp"
              alt="An open notebook with blank pages and a pen, ready for the first line"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Page one, before the first line.</figcaption>
          </figure>
          <div className="gw-idea__copy">
            <p className="gw-kicker">
              <b>I</b>
              Every book starts somewhere
            </p>
            <h2 className="gw-h2" id="idea-title">
              {'Before the First Page, '}
              <em>There&apos;s a Conversation.</em>
            </h2>
            <p className="gw-body gw-body--drop">
              A folder of notes, a set of interviews, a business insight, or a story you have carried for years can all be useful starting points. We begin by understanding what you want the book to say, who it is for, and what material already exists.
            </p>
            <p className="gw-idea__label">It might begin with</p>
            <ul className="gw-idea__list" role="list">
              <li>a folder of notes</li>
              <li>a set of interviews</li>
              <li>a business insight</li>
              <li>a story carried for years</li>
              <li>recorded conversations</li>
              <li>an early draft</li>
            </ul>
          </div>
        </section>

        <section className="gw-sec gw-voice" id="voice" aria-labelledby="voice-title">
          <div className="container">
            <div className="gw-voice__head">
              <p className="gw-kicker gw-kicker--c">
                <b>II</b>
                Your voice matters
              </p>
              <h2 className="gw-h2 gw-h2--c" id="voice-title">
                {'Your Words, '}
                <em>Just the Way You Imagined Them</em>
              </h2>
              <p className="gw-body gw-body--c">
                Your phrasing, perspective, and natural way of explaining things are part of the book—not details to be edited away. We share samples and working pages early, so you can respond to the voice before the manuscript grows.
              </p>
            </div>
            <div className="gw-voice__grid">
              <figure className="gw-page" aria-label="An illustrative manuscript page with a writer’s margin notes">
                <div className="gw-page__sheet">
                  <p className="gw-page__run">
                    <span>Chapter Three</span>
                    <span>Draft 2 · p. 41</span>
                  </p>
                  <p className="gw-page__text">
                    <span className="gw-mark gw-mark--a">My father kept his tools in the order he used them.</span>
                    {
                      ' Hammer, then level, then the small brass square he never lent to anyone. I didn’t understand, back then, that he was teaching me how to begin. '
                    }
                    <span className="gw-mark gw-mark--b">
                      You start with what you know. You keep what matters close.
                    </span>
                    {' And you '}
                    <span className="gw-mark gw-mark--c">measure twice</span>, because some things you only get to build
                    once.
                  </p>
                  <p className="gw-page__text">
                    {'It took me thirty years and a workshop of my own to hear it properly. '}
                    <span className="gw-mark gw-mark--d">Some lessons are only loud in hindsight.</span>
                  </p>
                  <span className="gw-note gw-note--a" aria-hidden="true">
                    his rhythm: short, then long
                  </span>
                  <span className="gw-note gw-note--b" aria-hidden="true">
                    tone: warm and direct
                  </span>
                  <span className="gw-note gw-note--c" aria-hidden="true">
                    keep: his phrase ✓
                  </span>
                  <span className="gw-note gw-note--d" aria-hidden="true">
                    a memory, not a lecture
                  </span>
                </div>
                <figcaption>
                  Illustrative page: how an author’s phrasing and rhythm are kept through the draft.
                </figcaption>
              </figure>
              <div className="gw-voice__list">
                <p className="gw-voice__label">What we listen for</p>
                <ol role="list">
                  <li>
                    <b>Phrasing</b>
                    <span>The natural expressions and turns of phrase that sound like you.</span>
                  </li>
                  <li>
                    <b>Perspective</b>
                    <span>Where you stand in the story, and why.</span>
                  </li>
                  <li>
                    <b>Vocabulary</b>
                    <span>The words and register that match your preferred way of communicating.</span>
                  </li>
                  <li>
                    <b>Tone</b>
                    <span>Warm, dry, direct, reflective—whatever fits your subject and voice.</span>
                  </li>
                  <li>
                    <b>Samples &amp; early pages</b>
                    <span>Working pages shared early so you can respond before the manuscript grows.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="gw-sec gw-journey" id="process" aria-labelledby="journey-title">
          <div
            className="gw-bg"
            data-photo="1760307837453-ce60cb209e52-2000"
            style={{ '--o': '.2', '--b': '5px' }}
            aria-hidden="true"
          />
          <div className="container gw-journey__grid">
            <div className="gw-journey__head">
              <p className="gw-kicker">
                <b>III</b>
                The writing journey
              </p>
              <h2 className="gw-h2" id="journey-title">
                {'A Little Structure '}
                <em>Goes a Long Way.</em>
              </h2>
            </div>
            <ol className="gw-steps" role="list">
              <li className="gw-step">
                <span className="gw-step__n">01</span>
                <div className="gw-step__body">
                  <h3>Discover</h3>
                  <p>Discuss the subject, intended reader, source material, and what a successful book should accomplish.</p>
                </div>
                <span className="gw-step__out">Conversations</span>
              </li>
              <li className="gw-step">
                <span className="gw-step__n">02</span>
                <div className="gw-step__body">
                  <h3>Develop</h3>
                  <p>Shape the central idea into a practical outline, chapter sequence, and writing brief.</p>
                </div>
                <span className="gw-step__out">An outline</span>
              </li>
              <li className="gw-step">
                <span className="gw-step__n">03</span>
                <div className="gw-step__body">
                  <h3>Write</h3>
                  <p>Build the manuscript chapter by chapter, using agreed interviews, notes, research, and references.</p>
                </div>
                <span className="gw-step__out">Chapters</span>
              </li>
              <li className="gw-step">
                <span className="gw-step__n">04</span>
                <div className="gw-step__body">
                  <h3>Refine</h3>
                  <p>Review the draft together, address gaps, and revise the language and structure before handoff.</p>
                </div>
                <span className="gw-step__out">Revisions</span>
              </li>
            </ol>
          </div>
        </section>

        <section className="gw-sec gw-forms" id="forms" aria-labelledby="forms-title">
          <div className="container gw-forms__grid">
            <div className="gw-forms__aside">
              <p className="gw-kicker">
                <b>IV</b>
                Projects we support
              </p>
              <h2 className="gw-h2" id="forms-title">
                {'No Two Books Alike. '}
                <em>No Voice Overlooked.</em>
              </h2>
              <p className="gw-body">
                Our writing and development work can support projects such as:
              </p>
              <figure className="gw-forms__photo">
                <Image
                  data-auto-size=""
                  width="1000"
                  height="760"
                  src="/assets/images/photos/1535546204504-586398ee6677-1000x760.webp"
                  alt="A vintage typewriter on a desk beside a single sunflower"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <ol className="gw-forms__list" role="list">
              <li>
                <span className="gw-forms__n">01</span>
                <h3>Memoir and personal history</h3>
                <p>Lived experiences and key chapters shaped into a cohesive narrative.</p>
              </li>
              <li>
                <span className="gw-forms__n">02</span>
                <h3>Autobiography and life story</h3>
                <p>A broader life story organized with clarity, arc, and depth.</p>
              </li>
              <li>
                <span className="gw-forms__n">03</span>
                <h3>Business and professional expertise</h3>
                <p>Field experience, frameworks, and lessons structured for readers.</p>
              </li>
              <li>
                <span className="gw-forms__n">04</span>
                <h3>Self-help and practical nonfiction</h3>
                <p>Actionable guidance built around clear ideas and real examples.</p>
              </li>
              <li>
                <span className="gw-forms__n">05</span>
                <h3>Fiction and narrative concepts</h3>
                <p>Story premises, characters, and arcs developed into long-form narrative.</p>
              </li>
              <li>
                <span className="gw-forms__n">06</span>
                <h3>Personal stories and family histories</h3>
                <p>Family records, memories, and histories preserved with care.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="gw-room on-dark" id="room" aria-labelledby="room-title">
          <div className="gw-room__photo" aria-hidden="true">
            <Image
              data-auto-size=""
              width="2200"
              height="1300"
              src="/assets/images/photos/1762417691650-f2e4bcca7eaf-2200x1300.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.05"
            />
          </div>
          <div className="container gw-room__inner">
            <p className="gw-kicker gw-kicker--light">
              <b>V</b>
              Pacing and schedule
            </p>
            <h2 className="gw-h2 gw-h2--light" id="room-title">
              {'Every Word Gets '}
              <em>Its Due Attention.</em>
            </h2>
            <p className="gw-body gw-body--light">
              A book needs more than a quick collection of pages. The schedule is shaped around the length of the project, the amount of source material, interview availability, research needs, and the review time you can give each draft.
            </p>
            <ul className="gw-room__words" role="list">
              <li>Project Length</li>
              <li>Source Material</li>
              <li>Interviews</li>
              <li>Research</li>
              <li>Draft Reviews</li>
            </ul>
          </div>
        </section>

        <section className="gw-sec gw-collab" id="collaboration" aria-labelledby="collab-title">
          <div className="container">
            <div className="gw-collab__head">
              <p className="gw-kicker gw-kicker--c">
                <b>VI</b>
                Collaboration
              </p>
              <h2 className="gw-h2 gw-h2--c" id="collab-title">
                {'Bring your story. '}
                <em>We will help with the words.</em>
              </h2>
              <p className="gw-body gw-body--c">
                You contribute the knowledge, memories, ideas, and decisions. Depending on the project, our team can support outlining, research, interviews, ghostwriting, manuscript development, and editorial direction.
              </p>
            </div>
            <div className="gw-exchange">
              <div className="gw-exchange__side gw-exchange__side--you">
                <p className="gw-exchange__label">You bring</p>
                <ul role="list">
                  <li>Knowledge</li>
                  <li>Memories</li>
                  <li>Ideas</li>
                  <li>Decisions</li>
                </ul>
              </div>
              <div className="gw-exchange__spine" aria-hidden="true">
                <span>{'&'}</span>
              </div>
              <div className="gw-exchange__side gw-exchange__side--we">
                <p className="gw-exchange__label">We bring</p>
                <ul role="list">
                  <li>Outlining</li>
                  <li>Research</li>
                  <li>Interviews</li>
                  <li>Ghostwriting</li>
                  <li>Manuscript development</li>
                  <li>Editorial direction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="gw-sec gw-final" id="manuscript" aria-labelledby="final-title">
          <div className="container">
            <div className="gw-final__head">
              <p className="gw-kicker">
                <b>VII</b>
                Assembling the work
              </p>
              <h2 className="gw-h2" id="final-title">
                {'Bringing All the Pieces '}
                <em>into Place.</em>
              </h2>
              <p className="gw-body">
                Loose notes can become a chapter plan; recorded conversations can become a narrative; an early draft can become a structured manuscript. We identify what is usable, what needs development, and what is still missing.
              </p>
            </div>
            <div className="gw-prog">
              <figure className="gw-prog__item gw-prog__item--1">
                <div className="gw-prog__img">
                  <Image
                    data-auto-size=""
                    width="900"
                    height="1100"
                    src="/assets/images/photos/1556970181-98e37c414e87-900x1100.webp"
                    alt="A handwritten note on a desk under lamplight"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption>
                  <span>01</span>
                  Loose notes → Chapter plan
                </figcaption>
              </figure>
              <figure className="gw-prog__item gw-prog__item--2">
                <div className="gw-prog__img">
                  <Image
                    data-auto-size=""
                    width="900"
                    height="1100"
                    src="/assets/images/photos/1526656001029-20a71b17f7ba-900x1100.webp"
                    alt="Bundles of notes and papers tied with string"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption>
                  <span>02</span>
                  Conversations → Narrative
                </figcaption>
              </figure>
              <figure className="gw-prog__item gw-prog__item--3">
                <div className="gw-prog__img">
                  <Image
                    data-auto-size=""
                    width="900"
                    height="1100"
                    src="/assets/images/photos/1570626742839-59acd9822944-900x1100.webp"
                    alt="A page in a typewriter, mid chapter"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption>
                  <span>03</span>
                  Early draft → Structured manuscript
                </figcaption>
              </figure>
              <figure className="gw-prog__item gw-prog__item--4">
                <div className="gw-prog__img">
                  <Image
                    data-auto-size=""
                    width="900"
                    height="1100"
                    src="/assets/images/photos/1642655358689-56b944d6f5f6-900x1100.webp"
                    alt="A tall stack of finished manuscript pages by a window"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption>
                  <span>04</span>
                  Audit &amp; gap review
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section section--ivory faq gw-faq" id="faq" aria-labelledby="faq-title">
          <div className="container faq__grid">
            <div className="faq__head">
              <p className="gw-kicker">
                <b>VIII</b>
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
                  <span>What is ghostwriting, and how does it work?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Ghostwriting is a collaborative writing arrangement in which a writer develops the manuscript from your ideas, knowledge, interviews, and source material. You review the work and guide its direction.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>How will we work together?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    The project begins with a discussion of your subject, goals, material, and preferred communication process. Reviews are scheduled at agreed milestones so you can comment while the manuscript is taking shape.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>Will I retain rights to my book?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Rights, credits, and permitted uses should be set out in the written project agreement before work begins. We will clarify those terms for your specific project.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>How long does the writing process take?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Timing depends on manuscript length, research, interview requirements, and how quickly feedback is provided. A schedule can be proposed after the scope is understood.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>Can a ghostwriter match my writing style?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    We use your existing writing, sample passages, interviews, and feedback to understand your vocabulary, tone, and preferred way of communicating.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>How do I get started?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Share what you have—an idea, outline, notes, recordings, or a partial draft—and tell us what you want the finished book to achieve.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="cta on-dark gw-cta" id="contact" aria-labelledby="cta-title">
          <div className="cta__media" aria-hidden="true">
            <Image
              data-auto-size=""
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
              <p className="eyebrow">Writing and Editorial</p>
              <h2 className="display cta__title gw-cta__title" id="cta-title">
                {'Your Book Deserves a Place '}
                <em>on the Calendar.</em>
              </h2>
              <p className="lead">
                Tell us what you want to write, what material you already have, and where you would like help. We can discuss a suitable starting point before a full manuscript plan is prepared.
              </p>
              <div className="gw-cta__btns">
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Discuss your book '}
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
            <LeadForm title="Start your story" messageLabel="What are you writing, and where do you need help?" />
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} styles={styles} />
    </>
  );
}