import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Book Publishing FAQs: What Should Every Author Know?',
  description:
    ': Get answers to common book publishing questions about costs, editing, ISBNs, copyright, distribution, timelines, and the steps involved in publishing a book.',
  path: '/faq',
});

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/faq2f72.css?v=20261003',
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
    href: '#faq',
    section: 'faq',
    label: 'Questions',
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

export default function FaqPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <div className="faq-page__top" id="top">
          <div className="container">
            <nav className="faq-page__crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li aria-current="page">FAQ</li>
              </ol>
            </nav>
            <div className="faq-page__rule" aria-hidden="true">
              <span>
                {'Publish Your Books Today '}
                <i>/</i>
                {' FAQ'}
              </span>
              <span>{site.name}</span>
              <span>{'Questions & answers'}</span>
            </div>
          </div>
        </div>
        <section className="section section--ivory faq faq-page" id="faq" aria-labelledby="faq-title">
          <div className="ed-bg ed-bg--faq" aria-hidden="true">
            <div className="ed-bg__img" data-parallax="0.04" />
          </div>
          <div className="container faq__grid">
            <div className="faq__head">
              <p className="eyebrow" data-reveal="">
                FAQs
              </p>
              <h1 className="h2 faq-page__title" id="faq-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Things to know before '}
                <em>your book takes shape.</em>
              </h1>
            </div>
            <div className="faq__list" data-faq="">
              <details className="qa" data-reveal="" open>
                <summary>
                  <span>What makes Publish Your Books Today different from other publishing service providers?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>Publish Your Books Today brings the different stages of book development together under one roof. Instead of managing separate professionals for writing, editing, design, production, and promotion, authors can discuss their needs with one team. We take the time to understand each project and recommend support that fits its content, goals, and publishing requirements.</p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.04s' }}>
                <summary>
                  <span>How much does it cost to work with Publish Your Books Today?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>The cost depends on the type of support you need, the length and complexity of your manuscript, and the amount of work involved. A project requiring proofreading will have different requirements from one that needs extensive editing, writing, design, or promotional support. Contact Publish Your Books Today with your project details so we can understand the scope and discuss a suitable quotation.</p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.08s' }}>
                <summary>
                  <span>How does Publish Your Books Today maintain the quality of its work?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>At Publish Your Books Today, quality begins with understanding the purpose of your book and the audience it is intended for. We approach each stage with attention to detail, whether that involves refining the writing, checking consistency, developing the visual presentation, or preparing the final materials. Our aim is to deliver work that feels professional while remaining true to the author’s original intent.</p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.12s' }}>
                <summary>
                  <span>Can I choose only one service from Publish Your Books Today?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>Yes. Publish Your Books Today does not require you to take on a complete publishing plan if you only need help with one part of your project. You can enquire about individual services, such as editing, proofreading, cover design, illustration, formatting, audiobook production, or marketing. If your needs change, we can also discuss how different services may work together.</p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.16s' }}>
                <summary>
                  <span>Can Publish Your Books Today help if I only have an idea and no completed manuscript?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>Yes. You do not necessarily need a finished manuscript before contacting Publish Your Books Today. You can approach us with an early concept, notes, an outline, or a partially written draft. We can discuss your goals, understand how developed the idea is, and identify the kind of writing or editorial assistance your project may require.</p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.2s' }}>
                <summary>
                  <span>Will I have a say in the creative decisions and final outcome?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>Absolutely. Publish Your Books Today values the author’s perspective throughout the process. Your ideas, preferences, feedback, and creative direction help guide decisions about the writing, editing, and presentation of your book. We work towards a result that reflects your vision rather than imposing a one-size-fits-all approach.</p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.24s' }}>
                <summary>
                  <span>How long does a project take with Publish Your Books Today?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>The timeline depends on the nature of the project, the length of the manuscript, the services involved, and the amount of revision required. A proofreading assignment may take considerably less time than a complete book development project. Publish Your Books Today can discuss a more realistic schedule once we understand your requirements and the current state of your material.</p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.28s' }}>
                <summary>
                  <span>Does Publish Your Books Today guarantee book sales or publishing success?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>No publishing or marketing service can honestly guarantee a particular number of sales or a specific level of success. Publish Your Books Today focuses on helping authors prepare their work professionally and explore ways to connect it with potential readers. Results can depend on factors such as the subject, audience, pricing, market demand, promotional activity, and reader response.</p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="cta on-dark faq-cta" id="contact" aria-labelledby="cta-title">
          <div className="cta__media" aria-hidden="true">
            <Image data-auto-size="" width="1600" height="1067"
              src="/assets/images/photos/1499750310107-5fef28a66643-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Need to ask something else?
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Tell us '}
                <em>what is on your mind.</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                Share the details of your book and any questions you have about the work involved.
              </p>
              <div className="faq-cta__btns" data-reveal="" style={{ '--d': '.2s' }}>
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