import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import { site } from '@/lib/site';
import ContactEnquiryForm from '../../components/forms/ContactEnquiryForm';

export const metadata = pageMetadata({
  title: ` Need Book Publishing Services? Let's Discuss Your Project`,
  description:
    'Have a manuscript, book idea, or publishing question? Contact Publish Your Books Today to discuss your project and find the right services for your goals.',
  path: '/contact',
});

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/contact2f72.css?v=20261003',
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
    href: '#ct-form',
    section: 'ct-form',
    label: 'Enquiry form',
    icon: '#i-pen',
    text: 'Form',
  },
];

const scripts = [
  '/assets/js/contact2f72.js?v=20261124-fix',
  '/assets/js/real-work2f72.js?v=20261003',
  '/assets/js/main2f72.js?v=20261105-production',
];

export default function ContactPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="ct" id="contact" aria-labelledby="ct-title">
          <div className="ct-open" id="top">
            <div className="container">
              <div className="ct-rule ct-rv" aria-hidden="true">
                <span>
                  {'Publish Your Books Today '}
                  <i>/</i>
                  {' Contact'}
                </span>
                <span>The next chapter</span>
                <span>Let’s talk</span>
              </div>
              <div className="ct-open__grid">
                <div>
                  <p className="ct-eyebrow ct-rv">Tell us what’s taking shape</p>
                  <h1 className="ct-title ct-rv" id="ct-title">
                    {'What’s on '}
                    <em>your pages?</em>
                  </h1>
                </div>
                <div className="ct-open__side ct-rv">
                  <p className="ct-lead">
                    A passing idea, chapters in progress, or a book already finding its readers. Whatever stage you’re
                    at, there’s a place to begin the conversation. Tell us what you’re putting together and where an
                    extra pair of hands could help.
                  </p>
                  <ol className="ct-path" role="list" aria-label="Where your book might be right now">
                    <li>An idea taking shape</li>
                    <li>A manuscript in progress</li>
                    <li>A book ready for refinement</li>
                  </ol>{' '}
                  <Link className="ct-link" href="#ct-form">
                    {'Share your book plans '}
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <figure className="ct-plate">
            <div className="container">
              <div className="ct-plate__img ct-rv">
                <Image data-auto-size="" width="2200" height="1100"
                  src="/assets/images/photos/1710360798685-c7a46e12a36e-2200x1100.webp"
                  alt="Hands working over manuscript pages on a desk"
                  loading="lazy"
                  decoding="async"
                  data-parallax="0.06"
                />
              </div>
              <figcaption className="ct-plate__cap">
                <span>Plate</span>
                Every project begins on the page.
              </figcaption>
            </div>
          </figure>
          <div className="ct-main">
            <div className="container ct-main__grid">
              <aside className="ct-info" aria-labelledby="ct-info-title">
                <p className="ct-label ct-rv" id="ct-info-title">
                  Get in touch
                </p>
                <dl className="ct-list ct-rv">
                  <div>
                    <dt>Email</dt>
                    <dd>
                      <Link href={`mailto:${site.email}`}>{site.email}</Link>
                    </dd>
                  </div>
                  <div>
                    <dt>Phone</dt>
                    <dd>
                      <Link href={`tel:${site.phoneHref}`}>{site.phone}</Link>
                      <br />
                      <Link href={`tel:${site.phoneHref}`}>{site.phone_2}</Link>
                    </dd>
                  </div>
                  <div>
                    <dt>Location</dt>
                    <dd>{site.address}</dd>
                  </div>
                  <div>
                    <dt>Support</dt>
                    <dd>
                      Project Support
                      <small>Contact our team with questions about your book and the work in progress.</small>
                    </dd>
                  </div>
                  <div>
                    <dt>Follow</dt>
                    <dd className="ct-social" />
                  </div>
                </dl>
                <figure className="ct-info__fig ct-rv">
                  <Image data-auto-size="" width="900" height="1100"
                    src="/assets/images/photos/1521316973612-36489899f29b-900x1100.webp"
                    alt="An author reading at a wooden table beside a cup of coffee"
                    loading="lazy"
                    decoding="async"
                  />{' '}
                  <figcaption>A little time with the manuscript is a useful place to begin.</figcaption>
                </figure>
              </aside>
              <ContactEnquiryForm />
            </div>
          </div>
          <div className="ct-steps">
            <div className="container">
              <p className="ct-label ct-rv">After you send your enquiry</p>
              <ol className="ct-steps__list ct-rv" role="list">
                <li>
                  <span>01</span>
                  Describe your book
                </li>
                <li>
                  <span>02</span>
                  Share your progress
                </li>
                <li>
                  <span>03</span>
                  We consider your enquiry
                </li>
                <li>
                  <span>04</span>
                  We discuss a suitable next step
                </li>
              </ol>
            </div>
          </div>
          <div className="rw-print ct-proof">
            <div className="container rw-print__grid">
              <div className="rw-print__copy">
                <p className="rw-eyebrow rw-rv">Before the first page of your next chapter</p>
                <h3 className="rw-h2 rw-rv">
                  {'A little inspiration, '}
                  <em>a clearer direction.</em>
                </h3>
                <p className="rw-lead rw-rv">
                  Take a look at the titles we’ve helped bring to readers. You might find an idea, an approach, or simply
                  the encouragement to move your own manuscript forward.
                </p>
                <p className="rw-now" data-rw-now="" aria-live="polite">
                  <span className="rw-now__n">In print</span>
                  <span className="rw-now__main">
                    <span className="rw-cap__t">Change to Stay Unchanged</span>
                    <span className="rw-cap__s">Authoritarian Reform in Kazakhstan Under the Tokayev Regime</span>
                    <span className="rw-cap__a">Yerzhan Dosmukhamedov</span>
                  </span>
                  <span className="rw-now__hint">Explore a cover for book details</span>
                </p>
              </div>
              <div className="rw-rv">
                <div className="rw-table" data-rw-table="">
                  <div className="rw-table__row">
                    <Link
                      className="rw-book rw-table__book"
                      href="/our-work#book-26"
                      aria-label="You vs You by Waheed Shaffiek, view in Our Work"
                      data-rw-book="26"
                      style={{ '--s': '0.74', '--z': '9' }}
                    >
                      <span className="rw-book__obj">
                        <Image
                          className="rw-book__img"
                          src="/assets/images/books/book-26.webp"
                          width="600"
                          height="1024"
                          alt="You vs You:    by Waheed Shaffiek, shown as a hardcover book"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="rw-book__floor" aria-hidden="true" />
                      </span>
                      <span className="rw-cap" aria-hidden="true">
                        <span className="rw-cap__t">You vs You</span>
                        <span className="rw-cap__s">
                            
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
                      className="rw-book rw-table__book is-lead"
                      href="/our-work#book-27"
                      aria-label="Change to Stay Unchanged by Yerzhan Dosmukhamedov, view in Our Work"
                      data-rw-book="27"
                      style={{ '--s': '1', '--z': '20' }}
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
                  </div>
                  <div className="rw-table__surface" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} styles={styles} />
    </>
  );
}