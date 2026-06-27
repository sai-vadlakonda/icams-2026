export interface Sponsor {
  name: string;
  tier: 'Title' | 'Gold' | 'Silver' | 'Partner';
}

export const SPONSORS: Sponsor[] = [
  { name: 'Title Sponsor (Placeholder)', tier: 'Title' },
  { name: 'Gold Sponsor (Placeholder)', tier: 'Gold' },
  { name: 'Gold Sponsor (Placeholder)', tier: 'Gold' },
  { name: 'Silver Sponsor (Placeholder)', tier: 'Silver' },
  { name: 'Silver Sponsor (Placeholder)', tier: 'Silver' },
  { name: 'Technical Partner (Placeholder)', tier: 'Partner' },
];
