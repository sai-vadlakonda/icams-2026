export interface Speaker {
  name: string;
  title: string;
  affiliation: string;
  topic: string;
}

export const KEYNOTE_SPEAKERS: Speaker[] = [
  {
    name: 'Prof. [Keynote Speaker 1]',
    title: 'Keynote Speaker',
    affiliation: 'Indian Institute of Science (IISc) — Placeholder',
    topic: 'Frontiers in Advanced Manufacturing & Materials',
  },
  {
    name: 'Dr. [Keynote Speaker 2]',
    title: 'Keynote Speaker',
    affiliation: 'ISRO — Placeholder',
    topic: 'Aerospace Engineering: Challenges and Opportunities',
  },
  {
    name: 'Dr. [Keynote Speaker 3]',
    title: 'Keynote Speaker',
    affiliation: 'DRDO — Placeholder',
    topic: 'Smart Materials for Defence Applications',
  },
  {
    name: 'Prof. [Invited Speaker 4]',
    title: 'Invited Speaker',
    affiliation: 'International University — Placeholder',
    topic: 'AI-Driven Design Optimization in Mechanical Systems',
  },
];
