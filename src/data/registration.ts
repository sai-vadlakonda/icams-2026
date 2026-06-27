export interface RegistrationTier {
  category: string;
  priceINR: string;
  priceUSD: string;
  description: string;
}

export const REGISTRATION_TIERS: RegistrationTier[] = [
  {
    category: 'Students',
    priceINR: '₹4,500',
    priceUSD: '$100',
    description: 'For UG/PG/research students presenting or attending the conference.',
  },
  {
    category: 'Academicians',
    priceINR: '₹6,500',
    priceUSD: '$150',
    description: 'For faculty members and academic researchers.',
  },
  {
    category: 'Industry Professionals',
    priceINR: '₹7,500',
    priceUSD: '$200',
    description: 'For delegates from industry and R&D organizations.',
  },
  {
    category: 'Attendees',
    priceINR: '₹1,000',
    priceUSD: '$50',
    description: 'For attendees without a paper presentation.',
  },
];

export const REGISTRATION_INCLUSIONS: string[] = [
  'Conference Kit',
  'Participation / Presentation Certificate',
  'Access to All Technical Sessions',
  'Conference Proceedings',
  'Tea, Lunch & Refreshments',
];
