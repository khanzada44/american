import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: ' ISBN & Copyright Services: What Does Your Book Need?',
  description:
    'Understand the essentials of book identification and copyright protection. Get guidance on ISBN registration and copyright services before releasing your publication.',
  path: '/copyrights-isbn',
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

export default function CopyrightsIsbnPage() {
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
                <li aria-current="page">{'Copyrights & ISBN'}</li>
              </ol>
            </nav>
            <div className="ns-hero__grid">
              <div className="ns-hero__copy">
                <p className="ns-eyebrow">
                  <span />
                  Rights and distribution
                </p>
                <h1 className="ns-title" id="ns-title">
                  {'Dot every i before '}
                  <em>your book meets the world.</em>
                </h1>
                <p className="ns-lead">
                  {`ISBNs, barcodes, copyright pages, catalogue records: these are the small details that make a book official. ${site.name} helps you organize every one of them so your title is identified consistently, edition after edition.`}
                </p>
                <div className="ns-hero__btns">
                  <button className="btn btn--primary" type="button" data-open-lead="">
                    {'Start My Book Records '}
                    <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </button>
                </div>
                <ul className="ns-chips" role="list">
                  <li>ISBN</li>
                  <li>Copyright</li>
                  <li>Barcodes</li>
                  <li>Metadata</li>
                </ul>
              </div>
              <figure className="ns-hero__fig">
                <Image data-auto-size="" width="2000" height="1333" loading="eager"
                  src="/assets/images/photos/1537275181304-62f51a71af79-2000.webp"
                  alt="A stack of books with a barcode on the back cover"
                  decoding="async"
                  fetchPriority="high"
                />
                <figcaption>
                  <span>{'Copyrights & ISBN'}</span>
                  {site.name}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="ns-intro" aria-label="Introduction">
          <div className="container ns-intro__grid">
            <p className="ns-intro__state ns-rv">
              One book, one story, everywhere it appears.
            </p>
            <div className="ns-intro__side ns-rv">
              <p>
                Your copyright page, your retailer listing and your back cover should all say the same thing. We help
                you keep every detail in step. For questions about legal rights, we suggest speaking with a qualified
                attorney.
              </p>
              <p className="ns-intro__part">
                {'Part of '}
                <Link href="/#services">{'Rights & Distribution'}</Link>
              </p>
            </div>
          </div>
        </section>
        <section className="ns-sig ns-cr" aria-labelledby="sig-title">
          <div className="container ns-cr__grid">
            <div className="ns-sig__head">
              <p className="ns-label ns-rv">The record</p>
              <h2 className="ns-h2 ns-rv" id="sig-title">
                {'Behind every edition, '}
                <em>a tidy record.</em>
              </h2>
              <p className="ns-body ns-rv">
                Before your files are final, we review the copyright page, barcode and catalog information side by side
                so nothing contradicts anything else.
              </p>
            </div>
            <figure className="ns-cr__page ns-rv" aria-label="Example copyright page">
              <p className="ns-cr__mark">©</p>
              <p>
                Copyright © [Year] [Author Name]
                <br />
                All rights reserved.
              </p>
              <p>
                No part of this book may be reproduced without written permission from the author, except for brief
                quotations in reviews.
              </p>
              <p>
                ISBN [number for print edition] (paperback)
                <br />
                ISBN [number for digital edition] (eBook)
              </p>
              <p>First edition</p>{' '}
              <span className="ns-cr__bar" aria-hidden="true">
                <i style={{ '--w': '2px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '3px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '2px' }} />
                <i style={{ '--w': '3px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '2px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '3px' }} />
                <i style={{ '--w': '2px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '2px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '3px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '2px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '3px' }} />
                <i style={{ '--w': '2px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '2px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '3px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '2px' }} />
              </span>{' '}
              <figcaption>Example copyright page</figcaption>
            </figure>
            <dl className="ns-cr__rec ns-rv" aria-label="Example metadata record">
              <div>
                <dt>Title</dt>
                <dd>Your book’s title</dd>
              </div>
              <div>
                <dt>Contributor</dt>
                <dd>Author name</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>Paperback · Hardcover · eBook</dd>
              </div>
              <div>
                <dt>ISBN</dt>
                <dd>One per format</dd>
              </div>
              <div>
                <dt>Subject</dt>
                <dd>Category codes</dd>
              </div>
              <div>
                <dt>Description</dt>
                <dd>Back cover copy</dd>
              </div>
              <div>
                <dt>{'Price & territory'}</dt>
                <dd>Per market</dd>
              </div>
            </dl>
          </div>
        </section>
        <section className="ns-inc" aria-labelledby="inc-title">
          <div className="container ns-inc__grid">
            <div className="ns-inc__head">
              <p className="ns-label ns-rv">Covered for you</p>
              <h2 className="ns-h2 ns-rv" id="inc-title">
                The paperwork, handled.
              </h2>
              <figure className="ns-inc__fig ns-rv">
                <Image data-auto-size="" width="900" height="1100"
                  src="/assets/images/photos/1537275181304-62f51a71af79-900x1100.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <ol className="ns-inc__list ns-rv" role="list">
              <li>
                <span className="ns-inc__n">01</span>
                <h3 className="ns-inc__t">ISBN for every format</h3>
                <p className="ns-inc__d">A number for each edition you publish, whether paperback, hardcover or eBook.</p>
              </li>
              <li>
                <span className="ns-inc__n">02</span>
                <h3 className="ns-inc__t">Barcode for the back cover</h3>
                <p className="ns-inc__d">Created from your ISBN and sized for print.</p>
              </li>
              <li>
                <span className="ns-inc__n">03</span>
                <h3 className="ns-inc__t">Copyright registration support</h3>
                <p className="ns-inc__d">We help you gather the information and paperwork for your application.</p>
              </li>
              <li>
                <span className="ns-inc__n">04</span>
                <h3 className="ns-inc__t">Library of Congress Control Number</h3>
                <p className="ns-inc__d">Support with the application when your book qualifies.</p>
              </li>
              <li>
                <span className="ns-inc__n">05</span>
                <h3 className="ns-inc__t">Copyright page</h3>
                <p className="ns-inc__d">Notices, edition details and identifiers drafted for your review.</p>
              </li>
              <li>
                <span className="ns-inc__n">06</span>
                <h3 className="ns-inc__t">Book metadata</h3>
                <p className="ns-inc__d">Titles, credits and descriptions kept consistent across every listing.</p>
              </li>
            </ol>
          </div>
        </section>
        <section className="ns-steps" aria-labelledby="steps-title">
          <div className="container">
            <p className="ns-label ns-rv" id="steps-title">
              The road to print: four steps to a book that is officially yours
            </p>
            <ol className="ns-steps__list ns-rv" role="list">
              <li>
                <span>01</span>
                <b>Gather</b>
                <p>Confirm your title, author name, edition and the formats you plan to publish.</p>
              </li>
              <li>
                <span>02</span>
                <b>Draft</b>
                <p>We prepare notices, applications and identifier details for your review.</p>
              </li>
              <li>
                <span>03</span>
                <b>File</b>
                <p>Agreed applications and records are completed and assigned.</p>
              </li>
              <li>
                <span>04</span>
                <b>Print-ready</b>
                <p>A last check that your cover, copyright page and listings all match.</p>
              </li>
            </ol>
          </div>
        </section>
        <section className="ns-rel" aria-labelledby="rel-title">
          <div className="container ns-rel__grid">
            <div>
              <p className="ns-label">{'Also in Rights & Distribution'}</p>
              <h2 className="ns-rel__title" id="rel-title">
                Ready for what comes next?
              </h2>
              <p className="ns-body">Once your book is identified, it is ready to travel.</p>{' '}
              <Link className="ns-link" href="/#services">
                {'All services '}
                <svg aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
            </div>
            <ul className="ns-rel__list" role="list">
              <li>
                <Link href="/global-distribution">
                  <span className="ns-rel__t">Global Distribution</span>
                  <span className="ns-rel__d">
                    Set up listings and distribution settings for the channels you want to use.
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
              src="/assets/images/photos/1730370432060-f49046da66aa-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Copyrights and ISBN
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Ready to seal the deal '}
                <em>on your book details?</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                {`Share the book you have in mind and what you need. ${site.name} will review your inquiry and get back to you.`}
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