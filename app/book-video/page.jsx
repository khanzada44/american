import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Can a Book Trailer Make Readers Curious? Book Video Services',
  description:
    'Introduce your title through professional book trailer production. Create promotional book videos that highlight your story, genre, atmosphere, and key themes.',
  path: '/book-video',
});

export const viewport = { themeColor: '#0D0D0F' };

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/video2f72.css?v=20261003',
  '/assets/css/forms.css?v=20261105-production',
  '/assets/css/widgets.css?v=20261105',
];

const preloads = [
  {
    type: 'image/webp',
    href: '/assets/images/photos/1632670536499-ebc8bc72892a-2400.webp',
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
    href: '#services',
    section: 'services',
    label: 'What we produce',
    icon: '#i-play',
    text: 'Produce',
  },
  {
    href: '#trailer',
    section: 'trailer',
    label: 'Trailer',
    icon: '#i-book',
    text: 'Trailer',
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

const scripts = ['/assets/js/book-video2f72.js?v=20261003', '/assets/js/main2f72.js?v=20261105-production'];

export default function BookVideoPage() {
  return (
    <>
      <PageStyles styles={styles} preloads={preloads} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="bv-hero on-dark" id="top" aria-labelledby="bv-title">
          <div className="bv-hero__media" aria-hidden="true">
            <div className="bv-hero__img" data-parallax="0.05" />
          </div>
          <div className="container bv-hero__inner">
            <nav className="bv-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/#services">Services</Link>
                </li>
                <li aria-current="page">Book Video</li>
              </ol>
            </nav>
            <div className="bv-hero__copy">
              <p className="bv-eyebrow" data-reveal="">
                <span className="bv-rec" aria-hidden="true" />
                Stories in motion
              </p>
              <h1 className="bv-hero__title" id="bv-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Give your book '}
                <em>a cinematic introduction.</em>
              </h1>
              <p className="bv-hero__lead" data-reveal="" style={{ '--d': '.16s' }}>
                {`Before a reader ever opens page one, a great trailer can whet their appetite. ${site.name} turns your themes, characters and big ideas into a short, striking film, complete with imagery, narration and music that make people want to hear the whole story.`}
              </p>
              <div className="bv-hero__ctas" data-reveal="" style={{ '--d': '.22s' }}>
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Start My Book Video '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>{' '}
                <Link className="btn btn--glass" href="#process">
                  See How We Work
                </Link>
              </div>
              <p className="bv-hero__formats" data-reveal="" style={{ '--d': '.28s' }}>
                <span>Book trailers</span>
                <span>2D video</span>
                <span>Explainer videos</span>
                <span>Infographics</span>
              </p>
            </div>
            <figure className="bv-poster" data-reveal="fade" style={{ '--d': '.2s' }}>
              <div className="bv-poster__frame">
                <Image data-auto-size="" width="1400" height="900" loading="eager"
                  className="bv-poster__img"
                  src="/assets/images/photos/1735573311928-23a7fe474b9f-1400x900.webp"
                  alt="Film still: a weathered house on a sea wall under a storm sky"
                  fetchPriority="high"
                  decoding="async"
                />{' '}
                <span className="bv-marks" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>{' '}
                <div className="bv-poster__top" aria-hidden="true">
                  <span>{`${site.name} presents`}</span>
                  <span>Official trailer</span>
                </div>
                <div className="bv-poster__title">
                  <span className="bv-cover bv-cover--sm">
                    <Image data-auto-size="" width="500" height="750" loading="eager" src="/assets/images/photos/1760872069217-7580345401e3-500x750.webp" alt="" decoding="async" />
                    <span className="bv-cover__k">A Novel</span>
                    <span className="bv-cover__t">The Last Tide</span>
                    <span className="bv-cover__a">Clara Whitmore</span>
                  </span>{' '}
                  <div>
                    <p className="bv-poster__name">The Last Tide</p>
                    <p className="bv-poster__by">A novel by Clara Whitmore</p>
                  </div>
                </div>{' '}
                <Link
                  className="bv-play"
                  href="#trailer"
                  data-play-from-hero=""
                  aria-label="Play the illustrative trailer"
                >
                  <span className="bv-play__ring">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="bv-play__txt">
                    <b>Play trailer</b>
                    <i>01:42</i>
                  </span>
                </Link>
              </div>
              <figcaption>Illustrative trailer · fictional author and title</figcaption>
            </figure>
          </div>
          <div className="bv-hero__tc" aria-hidden="true">
            <span>TC 00:00:00:00</span>
            <span>SC. 01</span>
            <span>TAKE 03</span>
            <span>Publish Your Books Today · Book Video</span>
          </div>
        </section>
        <section className="bv-sec bv-diff" id="approach" aria-labelledby="diff-title">
          <div className="container bv-diff__grid">
            <div className="bv-diff__copy">
              <p className="bv-kicker" data-reveal="">
                <b>01</b>
                <span />
                The cinematic edge
              </p>
              <h2 className="bv-h2 bv-h2--xl" id="diff-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Two minutes that '}
                <em>leave readers curious.</em>
              </h2>
              <p className="bv-body" data-reveal="" style={{ '--d': '.16s' }}>
                A trailer is a spark, not a summary. We choose the scenes, visuals and sounds that hint at what waits
                inside while keeping your best twists safely under wraps.
              </p>
              <dl className="bv-diff__spec" data-reveal="" style={{ '--d': '.22s' }}>
                <div>
                  <dt>Rhythm</dt>
                  <dd>Scenes cut to match the heartbeat of your story</dd>
                </div>
                <div>
                  <dt>Visuals</dt>
                  <dd>Imagery that lets readers step into the world you built</dd>
                </div>
                <div>
                  <dt>Soundtrack</dt>
                  <dd>Music and narration that set the mood from the very first second</dd>
                </div>
              </dl>
            </div>
            <figure className="bv-still" data-reveal="fade">
              <div className="bv-still__frame bv-reveal-frame">
                <Image data-auto-size="" width="1600" height="700"
                  src="/assets/images/photos/1729908588411-3dfa0b26e463-1600x700.webp"
                  alt="Film still: a lone figure on a fog covered shore"
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: '50% 60%' }}
                />{' '}
                <span className="bv-marks" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <figcaption>
                <span>SC. 04: The shoreline</span>
                <span>00:00:48:06</span>
                <span>The Last Tide</span>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="bv-sec bv-produce" id="services" aria-labelledby="produce-title">
          <div
            className="bv-bg"
            data-bv-bg=""
            data-photo="1681137063068-081072cf04b4-2000"
            style={{ '--o': '.34', '--b': '5px', '--pos': '40% 50%' }}
            aria-hidden="true"
          />
          <div className="container bv-produce__grid">
            <div className="bv-produce__head">
              <p className="bv-kicker" data-reveal="">
                <b>02</b>
                <span />
                What we create
              </p>
              <h2 className="bv-h2" id="produce-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Everything '}
                <em>behind the curtain.</em>
              </h2>
              <figure className="bv-produce__fig" data-reveal="fade" style={{ '--d': '.16s' }}>
                <div className="bv-reveal-frame">
                  <Image data-auto-size="" width="900" height="1100"
                    src="/assets/images/photos/1681137063068-081072cf04b4-900x1100.webp"
                    alt="A film crew lighting a scene on a dark set"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption>On set: building a single scene, light by light.</figcaption>
              </figure>
            </div>
            <div>
              <ol className="bv-reel" role="list">
                <li className="bv-reel__item" data-reveal="" style={{ '--d': '0.00s' }}>
                  <span className="bv-reel__n">01</span>
                  <div>
                    <h3>Creative Direction</h3>
                    <p>We get to know your readers, then shape a visual approach that fits your story.</p>
                  </div>
                  <span className="bv-reel__ph">Pre production</span>
                </li>
                <li className="bv-reel__item" data-reveal="" style={{ '--d': '0.04s' }}>
                  <span className="bv-reel__n">02</span>
                  <div>
                    <h3>Script and Storyboard</h3>
                    <p>Your strongest lines become a tight script, sketched scene by scene before a single frame is built.</p>
                  </div>
                  <span className="bv-reel__ph">Pre production</span>
                </li>
                <li className="bv-reel__item" data-reveal="" style={{ '--d': '0.08s' }}>
                  <span className="bv-reel__n">03</span>
                  <div>
                    <h3>Visual Storytelling</h3>
                    <p>Scenes and imagery chosen to echo your setting, genre and tone.</p>
                  </div>
                  <span className="bv-reel__ph">Production</span>
                </li>
                <li className="bv-reel__item" data-reveal="" style={{ '--d': '0.12s' }}>
                  <span className="bv-reel__n">04</span>
                  <div>
                    <h3>Editing and Motion</h3>
                    <p>Cuts and transitions timed so every second earns its place.</p>
                  </div>
                  <span className="bv-reel__ph">Post production</span>
                </li>
                <li className="bv-reel__item" data-reveal="" style={{ '--d': '0.16s' }}>
                  <span className="bv-reel__n">05</span>
                  <div>
                    <h3>Narration</h3>
                    <p>An optional voiceover that carries your script with warmth and clarity.</p>
                  </div>
                  <span className="bv-reel__ph">Sound</span>
                </li>
                <li className="bv-reel__item" data-reveal="" style={{ '--d': '0.20s' }}>
                  <span className="bv-reel__n">06</span>
                  <div>
                    <h3>Music and Sound Design</h3>
                    <p>A score that hits the right note and underlines every mood.</p>
                  </div>
                  <span className="bv-reel__ph">Sound</span>
                </li>
              </ol>
              <p className="bv-produce__also" data-reveal="">
                {'Also from our video studio: '}
                <span>2D animated video</span>
                <span>Explainer videos</span>
                <span>Infographics</span>
              </p>
            </div>
          </div>
        </section>
        <section className="bv-sec bv-feature" id="trailer" aria-labelledby="feature-title">
          <div className="container">
            <div className="bv-feature__head">
              <p className="bv-kicker" data-reveal="">
                <b>03</b>
                <span />See it in action
              </p>
              <h2 className="bv-h2" id="feature-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Press play '}
                <em>on your story.</em>
              </h2>
              <p className="bv-body" data-reveal="" style={{ '--d': '.14s' }}>
                Picture your book as a trailer: a moody coastline, a title that fades in, a score that slowly rises. This
                sample shows how five carefully chosen scenes can carry the atmosphere of an entire novel in under two
                minutes.
              </p>
            </div>
            <figure
              className="bv-player"
              data-player=""
              data-reveal="fade"
              aria-label="Illustrative trailer: The Last Tide by Clara Whitmore"
            >
              <div className="bv-player__screen">
                <div className="bv-player__slide bv-player__slide--poster is-on" data-slide="poster">
                  <Image data-auto-size="" width="1800" height="1013"
                    src="/assets/images/photos/1735573311088-694871690bc0-1800x1013.webp"
                    alt="Film still: a stone cottage on a rocky shore as light breaks through storm clouds"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="bv-player__slide" data-slide="0">
                  <Image data-auto-size="" width="1600" height="900"
                    src="/assets/images/photos/1765590428113-96df5444a6e4-1600x900.webp"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: '50% 50%' }}
                  />
                </div>
                <div className="bv-player__slide" data-slide="1">
                  <Image data-auto-size="" width="1600" height="900"
                    src="/assets/images/photos/1668014164546-a9b39788c798-1600x900.webp"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: '50% 45%' }}
                  />
                </div>
                <div className="bv-player__slide" data-slide="2">
                  <Image data-auto-size="" width="1600" height="900"
                    src="/assets/images/photos/1779729739456-be9369745290-1600x900.webp"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: '50% 50%' }}
                  />
                </div>
                <div className="bv-player__slide" data-slide="3">
                  <Image data-auto-size="" width="1600" height="900"
                    src="/assets/images/photos/1567604130959-7ea7ab2a7807-1600x900.webp"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: '50% 42%' }}
                  />
                </div>
                <div className="bv-player__slide" data-slide="4">
                  <Image data-auto-size="" width="1600" height="900"
                    src="/assets/images/photos/1750974438428-f9c725f0f5b8-1600x900.webp"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: '50% 30%' }}
                  />
                </div>{' '}
                <span className="bv-player__bars" aria-hidden="true" />{' '}
                <div className="bv-player__caps" aria-live="polite">
                  <p className="bv-player__cap" data-cap="0">
                    Twenty years after she left the island…
                  </p>
                  <p className="bv-player__cap" data-cap="1">
                    …the house was still waiting for her.
                  </p>
                  <p className="bv-player__cap" data-cap="2">
                    One letter. Never sent.
                  </p>
                  <p className="bv-player__cap" data-cap="3">
                    Some tides take everything.
                  </p>
                  <p className="bv-player__cap" data-cap="4">
                    Some bring it back.
                  </p>
                </div>
                <div className="bv-player__title">
                  <span className="bv-cover bv-cover--md">
                    <Image data-auto-size="" width="500" height="750"
                      src="/assets/images/photos/1760872069217-7580345401e3-500x750.webp"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="bv-cover__k">A Novel</span>
                    <span className="bv-cover__t">The Last Tide</span>
                    <span className="bv-cover__a">Clara Whitmore</span>
                  </span>{' '}
                  <div>
                    <p className="bv-player__kick">A Clara Whitmore novel · Official trailer</p>
                    <p className="bv-player__name">The Last Tide</p>
                    <p className="bv-player__by">A Novel by Clara Whitmore</p>
                  </div>
                </div>{' '}
                <button className="bv-play bv-play--lg" type="button" data-play="" aria-label="Play trailer">
                  <span className="bv-play__ring">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="bv-play__txt">
                    <b>Play trailer</b>
                    <i>01:42</i>
                  </span>
                </button>{' '}
                <div className="bv-player__ctrl">
                  <button type="button" className="bv-player__pp" data-toggle="" aria-label="Play">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path className="pp-play" d="M8 5.5v13l10.5-6.5z" />
                      <path className="pp-pause" d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
                    </svg>
                  </button>{' '}
                  <span className="bv-player__tc">
                    <b data-tc="">00:00</b>
                    {' / 01:42'}
                  </span>{' '}
                  <span className="bv-player__track" aria-hidden="true">
                    <span className="bv-player__fill" data-fill="" />
                    <i style={{ left: '0%' }} />
                    <i style={{ left: '20%' }} />
                    <i style={{ left: '40%' }} />
                    <i style={{ left: '60%' }} />
                    <i style={{ left: '80%' }} />
                  </span>{' '}
                  <span className="bv-player__fmt">16:9 · 4K master</span>
                </div>
              </div>
              <figcaption className="bv-player__meta">
                <span>
                  <b>Runtime</b>
                  01:42
                </span>
                <span>
                  <b>Genre</b>
                  Literary fiction
                </span>
                <span>
                  <b>Cut downs</b>
                  30s · 15s
                </span>
                <span>
                  <b>Formats</b>
                  16:9 · 9:16 · 1:1
                </span>{' '}
                <em>Illustrative example: fictional author and title.</em>
              </figcaption>
            </figure>
            <div className="bv-strip">
              <p className="bv-strip__label" data-reveal="">
                <span>Five frames, one film</span>
                <span>Same world · same light · same grade</span>
              </p>
              <ol className="bv-strip__list" role="list">
                <li className="bv-frame" data-reveal="" style={{ '--d': '0.00s' }}>
                  <button type="button" data-goto="0" aria-label="Play from frame 01, The Arrival">
                    <span className="bv-frame__img">
                      <Image data-auto-size="" width="800" height="500"
                        src="/assets/images/photos/1765590428113-96df5444a6e4-800x500.webp"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        style={{ objectPosition: '50% 50%' }}
                      />
                    </span>{' '}
                    <span className="bv-frame__meta">
                      <b>Frame 01</b>
                      <em>The Arrival</em>
                      <span>00:00:04:12</span>
                    </span>
                  </button>
                </li>
                <li className="bv-frame" data-reveal="" style={{ '--d': '0.08s' }}>
                  <button type="button" data-goto="1" aria-label="Play from frame 02, The House">
                    <span className="bv-frame__img">
                      <Image data-auto-size="" width="800" height="500"
                        src="/assets/images/photos/1668014164546-a9b39788c798-800x500.webp"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        style={{ objectPosition: '50% 45%' }}
                      />
                    </span>{' '}
                    <span className="bv-frame__meta">
                      <b>Frame 02</b>
                      <em>The House</em>
                      <span>00:00:21:03</span>
                    </span>
                  </button>
                </li>
                <li className="bv-frame" data-reveal="" style={{ '--d': '0.16s' }}>
                  <button type="button" data-goto="2" aria-label="Play from frame 03, The Letter">
                    <span className="bv-frame__img">
                      <Image data-auto-size="" width="800" height="500"
                        src="/assets/images/photos/1779729739456-be9369745290-800x500.webp"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        style={{ objectPosition: '50% 50%' }}
                      />
                    </span>{' '}
                    <span className="bv-frame__meta">
                      <b>Frame 03</b>
                      <em>The Letter</em>
                      <span>00:00:39:18</span>
                    </span>
                  </button>
                </li>
                <li className="bv-frame" data-reveal="" style={{ '--d': '0.24s' }}>
                  <button type="button" data-goto="3" aria-label="Play from frame 04, The Storm">
                    <span className="bv-frame__img">
                      <Image data-auto-size="" width="800" height="500"
                        src="/assets/images/photos/1567604130959-7ea7ab2a7807-800x500.webp"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        style={{ objectPosition: '50% 42%' }}
                      />
                    </span>{' '}
                    <span className="bv-frame__meta">
                      <b>Frame 04</b>
                      <em>The Storm</em>
                      <span>00:01:02:07</span>
                    </span>
                  </button>
                </li>
                <li className="bv-frame" data-reveal="" style={{ '--d': '0.32s' }}>
                  <button type="button" data-goto="4" aria-label="Play from frame 05, The Return">
                    <span className="bv-frame__img">
                      <Image data-auto-size="" width="800" height="500"
                        src="/assets/images/photos/1750974438428-f9c725f0f5b8-800x500.webp"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        style={{ objectPosition: '50% 30%' }}
                      />
                    </span>{' '}
                    <span className="bv-frame__meta">
                      <b>Frame 05</b>
                      <em>The Return</em>
                      <span>00:01:24:15</span>
                    </span>
                  </button>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="bv-sec bv-process" id="process" aria-labelledby="process-title">
          <div
            className="bv-bg"
            data-bv-bg=""
            data-photo="1761370980756-1e7fe8f1a731-2000"
            style={{ '--o': '.3', '--b': '5px', '--pos': '50% 40%' }}
            aria-hidden="true"
          />
          <div className="container">
            <div className="bv-process__head">
              <p className="bv-kicker" data-reveal="">
                <b>04</b>
                <span />
                How it comes together
              </p>
              <h2 className="bv-h2" id="process-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'From page to screen, '}
                <em>step by step.</em>
              </h2>
            </div>
            <div className="bv-tl" data-reveal="fade">
              <div className="bv-tl__track" aria-hidden="true">
                <span className="bv-tl__head" />
              </div>
              <ol className="bv-tl__list" role="list">
                <li className="bv-tl__step" data-reveal="" style={{ '--d': '0.0s' }}>
                  <span className="bv-tl__tc">00:00</span>
                  <span className="bv-tl__dot" aria-hidden="true" />
                  <span className="bv-tl__n">01</span>
                  <h3>Read</h3>
                  <p>We study your synopsis, your audience and what you hope the trailer will achieve.</p>
                </li>
                <li className="bv-tl__step" data-reveal="" style={{ '--d': '0.1s' }}>
                  <span className="bv-tl__tc">00:18</span>
                  <span className="bv-tl__dot" aria-hidden="true" />
                  <span className="bv-tl__n">02</span>
                  <h3>Dream</h3>
                  <p>Together we settle on a concept, a tone and a look.</p>
                </li>
                <li className="bv-tl__step" data-reveal="" style={{ '--d': '0.2s' }}>
                  <span className="bv-tl__tc">00:34</span>
                  <span className="bv-tl__dot" aria-hidden="true" />
                  <span className="bv-tl__n">03</span>
                  <h3>Sketch</h3>
                  <p>Scenes and words are mapped out in a simple storyboard.</p>
                </li>
                <li className="bv-tl__step" data-reveal="" style={{ '--d': '0.3s' }}>
                  <span className="bv-tl__tc">00:52</span>
                  <span className="bv-tl__dot" aria-hidden="true" />
                  <span className="bv-tl__n">04</span>
                  <h3>Build</h3>
                  <p>Visuals, voice and music are gathered and assembled.</p>
                </li>
                <li className="bv-tl__step" data-reveal="" style={{ '--d': '0.4s' }}>
                  <span className="bv-tl__tc">01:14</span>
                  <span className="bv-tl__dot" aria-hidden="true" />
                  <span className="bv-tl__n">05</span>
                  <h3>Polish</h3>
                  <p>You watch a cut, share your thoughts and we refine it.</p>
                </li>
                <li className="bv-tl__step" data-reveal="" style={{ '--d': '0.5s' }}>
                  <span className="bv-tl__tc">01:42</span>
                  <span className="bv-tl__dot" aria-hidden="true" />
                  <span className="bv-tl__n">06</span>
                  <h3>Deliver</h3>
                  <p>You receive final files ready for every place you plan to share them.</p>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="bv-sec bv-board" id="storyboard" aria-labelledby="board-title">
          <div className="container">
            <div className="bv-board__head">
              <p className="bv-kicker bv-kicker--ink" data-reveal="">
                <b>05</b>
                <span />
                The planning board
              </p>
              <h2 className="bv-h2 bv-h2--ink" id="board-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Get on the same page '}
                <em>before production starts.</em>
              </h2>
              <p className="bv-body bv-body--ink" data-reveal="" style={{ '--d': '.14s' }}>
                Before anything is built, you will see your script and storyboard laid out scene by scene. Everyone knows
                where the story is headed, and your feedback shapes the film while changes are still quick and easy.
              </p>
            </div>
            <div className="bv-board__grid">
              <article className="bv-script" data-reveal="" aria-label="Script excerpt">
                <p className="bv-script__hd">
                  <span>THE LAST TIDE: Trailer</span>
                  <span>Draft 2 · p. 1</span>
                </p>
                <p className="bv-script__sl">{"1\u00a0\u00a0EXT. HARROW POINT: FERRY: DAWN"}</p>
                <p className="bv-script__ac">
                  Fog on the water. A ferry horn, low and long. ELSIE MARR (40s) at the rail, a folded letter in her
                  coat pocket.
                </p>
                <p className="bv-script__ch">ELSIE (V.O.)</p>
                <p className="bv-script__dl">Everyone leaves the island once.</p>
                <p className="bv-script__sl">{"2\u00a0\u00a0EXT. THE SEA WALL HOUSE: DAY"}</p>
                <p className="bv-script__ac">The house on the wall, exactly as she left it. Storm light behind.</p>
                <p className="bv-script__tr">
                  {'TITLE CARD: '}
                  <i>“…the house was still waiting.”</i>
                </p>
                <p className="bv-script__note">Music enters here: solo piano, no percussion until sc. 4.</p>
              </article>
              <ol className="bv-sb" role="list">
                <li className="bv-sb__panel" data-reveal="" style={{ '--d': '0.0s' }}>
                  <div className="bv-sb__frame">
                    <Image data-auto-size="" width="700" height="420"
                      src="/assets/images/photos/1765590428113-96df5444a6e4-700x420.webp"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: '50% 50%' }}
                    />
                    <svg className="bv-sb__move" viewBox="0 0 100 60" aria-hidden="true">
                      <path
                        d="M20 10h60v40H20z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth=".8"
                        strokeDasharray="3 3"
                      />
                      <path d="M34 19h32v22H34z" fill="none" stroke="currentColor" strokeWidth=".8" />
                      <path d="M22 12l10 6M78 12l-10 6M22 48l10-6M78 48l-10-6" stroke="currentColor" strokeWidth=".8" />
                    </svg>
                    <span className="bv-sb__shot">1A</span>
                  </div>
                  <p className="bv-sb__cam">
                    <b>Wide · slow push in</b>
                    <span>4s</span>
                  </p>
                  <p className="bv-sb__note">Ferry window. Fog lifts off the harbour.</p>
                </li>
                <li className="bv-sb__panel" data-reveal="" style={{ '--d': '0.1s' }}>
                  <div className="bv-sb__frame">
                    <Image data-auto-size="" width="700" height="420"
                      src="/assets/images/photos/1668014164546-a9b39788c798-700x420.webp"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: '50% 45%' }}
                    />
                    <svg className="bv-sb__move" viewBox="0 0 100 60" aria-hidden="true">
                      <path d="M50 22v16M42 30h16" stroke="currentColor" strokeWidth=".8" />
                      <circle cx="50" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth=".8" />
                    </svg>
                    <span className="bv-sb__shot">2A</span>
                  </div>
                  <p className="bv-sb__cam">
                    <b>Static · long lens</b>
                    <span>5s</span>
                  </p>
                  <p className="bv-sb__note">The house holds the frame. Nothing moves but the sky.</p>
                </li>
                <li className="bv-sb__panel" data-reveal="" style={{ '--d': '0.2s' }}>
                  <div className="bv-sb__frame">
                    <Image data-auto-size="" width="700" height="420"
                      src="/assets/images/photos/1779729739456-be9369745290-700x420.webp"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: '50% 50%' }}
                    />
                    <svg className="bv-sb__move" viewBox="0 0 100 60" aria-hidden="true">
                      <path d="M78 10v36" stroke="currentColor" strokeWidth=".8" />
                      <path d="M73 40l5 7 5-7" fill="none" stroke="currentColor" strokeWidth=".8" />
                    </svg>
                    <span className="bv-sb__shot">3C</span>
                  </div>
                  <p className="bv-sb__cam">
                    <b>Insert · top down</b>
                    <span>3s</span>
                  </p>
                  <p className="bv-sb__note">Her hand stops above the letter. Hold.</p>
                </li>
                <li className="bv-sb__panel" data-reveal="" style={{ '--d': '0.3s' }}>
                  <div className="bv-sb__frame">
                    <Image data-auto-size="" width="700" height="420"
                      src="/assets/images/photos/1567604130959-7ea7ab2a7807-700x420.webp"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: '50% 42%' }}
                    />
                    <svg className="bv-sb__move" viewBox="0 0 100 60" aria-hidden="true">
                      <path d="M18 50h62" stroke="currentColor" strokeWidth=".8" />
                      <path d="M74 45l7 5-7 5" fill="none" stroke="currentColor" strokeWidth=".8" />
                    </svg>
                    <span className="bv-sb__shot">4B</span>
                  </div>
                  <p className="bv-sb__cam">
                    <b>Wide · handheld</b>
                    <span>2s</span>
                  </p>
                  <p className="bv-sb__note">The storm hits the sea wall. Cut on the wave.</p>
                </li>
              </ol>
              <aside className="bv-board__refs" data-reveal="" aria-label="Visual references">
                <p className="bv-board__label">{'Grade & references'}</p>
                <ul className="bv-swatches" role="list">
                  <li style={{ '--c': '#2d3b3e' }}>
                    <span>Sea glass</span>
                  </li>
                  <li style={{ '--c': '#5d676a' }}>
                    <span>Fog</span>
                  </li>
                  <li style={{ '--c': '#a88a5c' }}>
                    <span>Lamp</span>
                  </li>
                  <li style={{ '--c': '#e6ddcc' }}>
                    <span>Paper</span>
                  </li>
                </ul>
                <p className="bv-board__small">
                  <b>Tone</b>
                  {' Cold exteriors, warm interiors. Slow cuts until the storm.'}
                </p>
                <p className="bv-board__small">
                  <b>Type</b>
                  {' Serif title cards, centred, 3 seconds each.'}
                </p>
                <p className="bv-board__small">
                  <b>Runtime</b>
                  {' 01:42 · 18 shots · 5 title cards'}
                </p>
              </aside>
            </div>
          </div>
        </section>
        <section className="bv-sec bv-genres" id="genres" aria-labelledby="genre-title">
          <div className="container">
            <div className="bv-genres__head">
              <p className="bv-kicker" data-reveal="">
                <b>06</b>
                <span />
                Style meets story
              </p>
              <h2 className="bv-h2" id="genre-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Every genre has '}
                <em>its own heartbeat.</em>
              </h2>
              <p className="bv-body" data-reveal="" style={{ '--d': '.14s' }}>
                A quiet memoir breathes slowly and a thriller sprints. We match color, pacing and sound to your genre so
                the trailer feels like your book and nobody else’s.
              </p>
            </div>
            <ul className="bv-genre__list" role="list" data-genres="">
              <li className="bv-genre bv-genre--lit" data-reveal="" style={{ '--d': '0.00s' }}>
                <button type="button" data-genre="" aria-pressed="true">
                  <span
                    className="bv-genre__img"
                    data-photo="1750437555030-a5db30cabe88-1100x1300"
                    aria-hidden="true"
                  />{' '}
                  <span className="bv-genre__n">01</span>{' '}
                  <span className="bv-genre__txt">
                    <b>Literary Fiction</b>
                    <em>Atmosphere · character · intimacy</em>
                  </span>
                </button>
              </li>
              <li className="bv-genre bv-genre--thr" data-reveal="" style={{ '--d': '0.06s' }}>
                <button type="button" data-genre="" aria-pressed="false">
                  <span
                    className="bv-genre__img"
                    data-photo="1495745512803-dd531415ff55-1100x1300"
                    aria-hidden="true"
                  />{' '}
                  <span className="bv-genre__n">02</span>{' '}
                  <span className="bv-genre__txt">
                    <b>Thriller</b>
                    <em>Tension · shadow · pace</em>
                  </span>
                </button>
              </li>
              <li className="bv-genre bv-genre--rom" data-reveal="" style={{ '--d': '0.12s' }}>
                <button type="button" data-genre="" aria-pressed="false">
                  <span className="bv-genre__img" data-photo="1557363763-828f93b4108d-1100x1300" aria-hidden="true" />{' '}
                  <span className="bv-genre__n">03</span>{' '}
                  <span className="bv-genre__txt">
                    <b>Romance</b>
                    <em>Emotion · intimacy · warmth</em>
                  </span>
                </button>
              </li>
              <li className="bv-genre bv-genre--mem" data-reveal="" style={{ '--d': '0.18s' }}>
                <button type="button" data-genre="" aria-pressed="false">
                  <span
                    className="bv-genre__img"
                    data-photo="1453828423292-392a660a502f-1100x1300"
                    aria-hidden="true"
                  />{' '}
                  <span className="bv-genre__n">04</span>{' '}
                  <span className="bv-genre__txt">
                    <b>Memoir</b>
                    <em>Memory · place · humanity</em>
                  </span>
                </button>
              </li>
              <li className="bv-genre bv-genre--mys" data-reveal="" style={{ '--d': '0.24s' }}>
                <button type="button" data-genre="" aria-pressed="false">
                  <span
                    className="bv-genre__img"
                    data-photo="1668166893230-bab2db9e4343-1100x1300"
                    aria-hidden="true"
                  />{' '}
                  <span className="bv-genre__n">05</span>{' '}
                  <span className="bv-genre__txt">
                    <b>Mystery</b>
                    <em>Clues · silence · suspense</em>
                  </span>
                </button>
              </li>
              <li className="bv-genre bv-genre--fan" data-reveal="" style={{ '--d': '0.30s' }}>
                <button type="button" data-genre="" aria-pressed="false">
                  <span
                    className="bv-genre__img"
                    data-photo="1477468572316-36979010099d-1100x1300"
                    aria-hidden="true"
                  />{' '}
                  <span className="bv-genre__n">06</span>{' '}
                  <span className="bv-genre__txt">
                    <b>Fantasy</b>
                    <em>World building · wonder · scale</em>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </section>
        <section className="bv-sec bv-uses" id="uses" aria-labelledby="uses-title">
          <div className="container bv-uses__grid">
            <div className="bv-uses__head">
              <p className="bv-kicker" data-reveal="">
                <b>07</b>
                <span />
                Made to travel
              </p>
              <h2 className="bv-h2" id="uses-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Built for every place '}
                <em>your book appears.</em>
              </h2>
            </div>
            <ol className="bv-uses__list" role="list">
              <li data-reveal="" style={{ '--d': '0.00s' }}>
                <span className="bv-uses__n">01</span>
                <div>
                  <h3>Launch day</h3>
                  <p>A headline clip that announces your arrival.</p>
                </div>
                <span className="bv-uses__r">
                  <i style={{ '--w': '16', '--h': '9' }} title="16:9" />
                  <em>16:9</em>
                </span>
              </li>
              <li data-reveal="" style={{ '--d': '0.05s' }}>
                <span className="bv-uses__n">02</span>
                <div>
                  <h3>Online storefronts</h3>
                  <p>A video that brings your retail listing to life.</p>
                </div>
                <span className="bv-uses__r">
                  <i style={{ '--w': '16', '--h': '9' }} title="16:9" />
                  <em>16:9</em>
                </span>
              </li>
              <li data-reveal="" style={{ '--d': '0.10s' }}>
                <span className="bv-uses__n">03</span>
                <div>
                  <h3>Author website</h3>
                  <p>A welcoming first impression for every visitor.</p>
                </div>
                <span className="bv-uses__r">
                  <i style={{ '--w': '16', '--h': '9' }} title="16:9" />
                  <em>16:9</em>
                </span>
              </li>
              <li data-reveal="" style={{ '--d': '0.15s' }}>
                <span className="bv-uses__n">04</span>
                <div>
                  <h3>Social feeds</h3>
                  <p>Cuts sized for scrolling thumbs on each platform.</p>
                </div>
                <span className="bv-uses__r">
                  <i style={{ '--w': '9', '--h': '16' }} title="9:16" />
                  <i style={{ '--w': '1', '--h': '1' }} title="1:1" />
                  <em>9:16 · 1:1</em>
                </span>
              </li>
              <li data-reveal="" style={{ '--d': '0.00s' }}>
                <span className="bv-uses__n">05</span>
                <div>
                  <h3>Paid ads</h3>
                  <p>Short, punchy edits for the ad spaces you choose.</p>
                </div>
                <span className="bv-uses__r">
                  <i style={{ '--w': '1', '--h': '1' }} title="1:1" />
                  <i style={{ '--w': '4', '--h': '5' }} title="4:5" />
                  <em>1:1 · 4:5</em>
                </span>
              </li>
              <li data-reveal="" style={{ '--d': '0.05s' }}>
                <span className="bv-uses__n">06</span>
                <div>
                  <h3>In-store screens</h3>
                  <p>Visuals that tell the story even with the sound off.</p>
                </div>
                <span className="bv-uses__r">
                  <i style={{ '--w': '16', '--h': '9' }} title="16:9" />
                  <em>16:9</em>
                </span>
              </li>
              <li data-reveal="" style={{ '--d': '0.10s' }}>
                <span className="bv-uses__n">07</span>
                <div>
                  <h3>Events and readings</h3>
                  <p>An opening film that sets the scene before you speak.</p>
                </div>
                <span className="bv-uses__r">
                  <i style={{ '--w': '16', '--h': '9' }} title="16:9" />
                  <em>16:9</em>
                </span>
              </li>
              <li data-reveal="" style={{ '--d': '0.15s' }}>
                <span className="bv-uses__n">08</span>
                <div>
                  <h3>Press and media</h3>
                  <p>A ready-made visual to travel along with your interviews.</p>
                </div>
                <span className="bv-uses__r">
                  <i style={{ '--w': '16', '--h': '9' }} title="16:9" />
                  <em>16:9</em>
                </span>
              </li>
            </ol>
          </div>
        </section>
        <section className="bv-statement on-dark" aria-label="Statement">
          <div className="bv-statement__media" aria-hidden="true">
            <div
              className="bv-statement__img"
              data-bv-bg=""
              data-photo="1756707207437-831036a30751-2400"
              data-parallax="0.06"
            />
          </div>
          <div className="container bv-statement__inner">
            <p className="bv-statement__line" data-reveal="">
              Your chapters hold the whole story.
            </p>
            <p className="bv-statement__line bv-statement__line--2" data-reveal="" style={{ '--d': '.18s' }}>
              A trailer simply serves the first irresistible bite.
            </p>
          </div>
        </section>
        <section className="bv-sec bv-credits" id="deliverables" aria-labelledby="credits-title">
          <div className="container">
            <div className="bv-credits__head">
              <p className="bv-kicker bv-kicker--c" data-reveal="">
                <b>08</b>
                <span />
                What you receive
              </p>
              <h2 className="bv-h2 bv-h2--c" id="credits-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'The film, '}
                <em>ready for your channels.</em>
              </h2>
            </div>
            <ul className="bv-credits__list" role="list">
              <li data-reveal="" style={{ '--d': '0.00s' }}>
                <b>Final book trailer</b>
                <span>The finished cut, ready to publish</span>
              </li>
              <li data-reveal="" style={{ '--d': '0.04s' }}>
                <b>High resolution master</b>
                <span>Full quality file for your archive</span>
              </li>
              <li data-reveal="" style={{ '--d': '0.08s' }}>
                <b>Social ready versions</b>
                <span>Vertical and square formats</span>
              </li>
              <li data-reveal="" style={{ '--d': '0.12s' }}>
                <b>Website ready version</b>
                <span>Optimised for your site and author pages</span>
              </li>
              <li data-reveal="" style={{ '--d': '0.16s' }}>
                <b>Promotional cutdowns</b>
                <span>Shorter edits, when required</span>
              </li>
              <li data-reveal="" style={{ '--d': '0.20s' }}>
                <b>Title graphics</b>
                <span>Book title and author name cards</span>
              </li>
              <li data-reveal="" style={{ '--d': '0.24s' }}>
                <b>{'Author & book branding'}</b>
                <span>Consistent with your cover and identity</span>
              </li>
              <li data-reveal="" style={{ '--d': '0.28s' }}>
                <b>Final audio mix</b>
                <span>Music, voice and sound, balanced</span>
              </li>
              <li data-reveal="" style={{ '--d': '0.32s' }}>
                <b>Exported production files</b>
                <span>Organised and clearly named</span>
              </li>
            </ul>
            <p className="bv-credits__end" data-reveal="">
              {'Produced by '}
              <b>{site.name}</b>
              {' · Houston, TX'}
            </p>
          </div>
        </section>
        <section className="section section--ivory faq bv-faq" id="faq" aria-labelledby="faq-title">
          <div className="container faq__grid">
            <div className="faq__head">
              <p className="bv-kicker bv-kicker--ink" data-reveal="">
                <b>09</b>
                <span />
                Good to know
              </p>
              <h2 className="h2" id="faq-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Curious about trailers? '}
                <em>Start here.</em>
              </h2>
            </div>
            <div className="faq__list" data-faq="">
              <details className="qa" data-reveal="" open>
                <summary>
                  <span>Is a book trailer really worth it?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>A trailer gives readers a quick, shareable way to meet your book. It can support a launch or an ongoing promotion, though no video can promise a particular sales result.</p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>What kinds of videos can you make?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>Cinematic book trailers, animated videos, explainer videos and infographic-style clips, each tailored to your title.</p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>How long should my trailer run?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>Most main trailers land between one and two minutes. We also prepare 15 and 30 second cuts for social media and ads.</p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>Do I get a say in the visuals and narration?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>Absolutely. You review the concept, script and storyboard, and you decide whether the video includes a voiceover.</p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>Where can I show my trailer?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>Anywhere readers gather: your website, social channels, retail pages, ads, events and press outreach.</p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>How do I get started?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>{`Send ${site.name} a note about your book and your goals. Our team will reply with a suggested direction and next steps.`}</p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="cta on-dark bv-cta" id="contact" aria-labelledby="cta-title">
          <div className="cta__media" aria-hidden="true">
            <Image data-auto-size="" width="1800" height="3200"
              src="/assets/images/photos/1762541693135-fb989de961e1-1800.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Start your book video
              </p>
              <h2 className="display cta__title bv-cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Tell us the scene '}
                <em>you want readers to see.</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                {`Share a few details about your book and the kind of video you imagine. The ${site.name} creative team will take it from there.`}
              </p>
              <div className="bv-cta__btns" data-reveal="" style={{ '--d': '.2s' }}>
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Create My Book Video '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>{' '}
                <Link className="btn btn--glass" href="/contact">
                  <svg className="btn__icon" aria-hidden="true">
                    <use href="#i-phone" />
                  </svg>
                  Talk to Our Creative Team
                </Link>
              </div>
            </div>
            <LeadForm title="Start your book video" messageLabel="What are you writing, and where do you need help?" />
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} styles={styles} />
    </>
  );
}