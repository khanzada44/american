// Site navigation, used by the header (desktop mega menu + mobile menu).
// `badge: true` adds the small spacer used by the original design.

export const serviceGroups = [
  {
    title: 'Writing & Editorial',
    links: [
      { href: '/ghostwriting', label: 'Ghostwriting', icon: '#i-quill' },
      { href: '/book-editing', label: 'Book Editing & Formatting', icon: '#i-pen' },
      { href: '/articles-magazines', label: 'Articles & Magazines', icon: '#i-doc', badge: true },
    ],
  },
  {
    title: 'Publishing & Production',
    links: [
      { href: '/book-publishing', label: 'Book Publishing', icon: '#i-book' },
      { href: '/book-cover-design', label: 'Book Cover Design', icon: '#i-book' },
      { href: '/illustration', label: 'Illustration', icon: '#i-brush' },
      { href: '/audio-book', label: 'Audiobook Production', icon: '#i-audio' },
      { href: '/book-video', label: 'Book Video & Trailers', icon: '#i-play' },
    ],
  },
  {
    title: 'Rights & Distribution',
    links: [
      { href: '/copyrights-isbn', label: 'Copyrights & ISBN', icon: '#i-seal', badge: true },
      { href: '/global-distribution', label: 'Global Distribution', icon: '#i-globe', badge: true },
    ],
  },
  {
    title: 'Marketing & Visibility',
    links: [
      { href: '/book-promotion', label: 'Book Promotion & Marketing', icon: '#i-star' },
      { href: '/author-website', label: 'Author Website', icon: '#i-globe' },
      { href: '/web-social-media', label: 'Web & Social Media', icon: '#i-chat', badge: true },
      { href: '/billboard-campaigns', label: 'Billboard Campaigns', icon: '#i-frame', badge: true },
      { href: '/podcasts', label: 'Podcasts', icon: '#i-mic', badge: true },
      { href: '/tv-interviews', label: 'TV Interviews', icon: '#i-play', badge: true },
      { href: '/book-fairs', label: 'Book Fairs', icon: '#i-book', badge: true },
    ],
  },
];

// Top-level links after "Services". `closeMenu` closes the mobile menu on click.
export const mainLinks = [
  { href: '/book-publishing', label: 'Book Publishing' },
  { href: '/book-promotion', label: 'Book Promotion' },
  { href: '/publications', label: 'Publications', closeMenu: true },
  { href: '/featured-authors', label: 'Featured Authors' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About', closeMenu: true },
  // { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact', closeMenu: true },
];
