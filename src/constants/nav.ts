export interface NavItem {
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
   { label: 'Home', path: '/' },
  { label: 'About Conference', path: '/about-conference' },
  { label: 'About VCE', path: '/about-college' },
  { label: 'Publications', path: '/publications' },
  { label: 'Important Dates', path: '/important-dates' },
  { label: 'Submission', path: '/submission' },
  { label: 'Registration', path: '/registration' },
  { label: 'Tracks', path: '/tracks' },
  { label: 'Venue', path: '/venue' },
  { label: 'Committee', path: '/committee' },
  { label: 'Speakers', path: '/speakers' },
  { label: 'Sponsors', path: '/sponsors' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];
