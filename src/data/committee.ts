export interface CommitteeMember {
  name: string;
  role: string;
  affiliation: string;
}

export const PATRONS: CommitteeMember[] = [
  { name: 'Dr. Teegala Venkata Rao', role: 'Chief Patron', affiliation: 'Chairman, Vardhaman Educational Society' },
  { name: 'Dr. Y. Pardha Saradhi Varma', role: 'Patron', affiliation: 'Principal, Vardhaman College of Engineering' },
];

export const ORGANIZING_COMMITTEE: CommitteeMember[] = [
  { name: 'Dr. [Convener Name]', role: 'Conference Convener', affiliation: 'HOD, Mechanical Engineering, VCE' },
  { name: 'Dr. [Co-Convener Name]', role: 'Co-Convener', affiliation: 'Professor, Mechanical Engineering, VCE' },
  { name: 'Dr. [Organizing Secretary]', role: 'Organizing Secretary', affiliation: 'Associate Professor, Mechanical Engineering, VCE' },
  { name: 'Dr. [Treasurer Name]', role: 'Treasurer', affiliation: 'Associate Professor, Mechanical Engineering, VCE' },
];

export const ADVISORY_COMMITTEE: CommitteeMember[] = [
  { name: 'Prof. [Advisory Member 1]', role: 'Advisory Committee Member', affiliation: 'IIT / NIT / IISc (Placeholder)' },
  { name: 'Prof. [Advisory Member 2]', role: 'Advisory Committee Member', affiliation: 'International University (Placeholder)' },
  { name: 'Dr. [Advisory Member 3]', role: 'Advisory Committee Member', affiliation: 'Industry Expert (Placeholder)' },
  { name: 'Dr. [Advisory Member 4]', role: 'Advisory Committee Member', affiliation: 'R&D Organization (Placeholder)' },
];
