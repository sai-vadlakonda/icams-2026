export interface ImportantDate {
  label: string;
  date: string;
  isoDate: string;
  highlight?: boolean;
}

export const IMPORTANT_DATES: ImportantDate[] = [
  { label: 'Conference Announcement', date: 'June 1, 2026', isoDate: '2026-06-01' },
  { label: 'Paper Submission Opens', date: 'July 25, 2026', isoDate: '2026-07-25' },
  { label: 'Full Paper Submission Deadline', date: 'October 30, 2026', isoDate: '2026-10-30', highlight: true },
  { label: 'Acceptance Notification', date: 'October 15, 2026', isoDate: '2026-10-15' },
  { label: 'Camera Ready Submission', date: 'October 20, 2026', isoDate: '2026-10-20' },
  { label: 'Early Bird Registration Deadline', date: 'October 31, 2026', isoDate: '2026-10-31', highlight: true },
  { label: 'Final Registration Deadline', date: 'November 15, 2026', isoDate: '2026-11-15' },
  { label: 'Conference Dates', date: 'December 4 - 5, 2026', isoDate: '2026-12-04', highlight: true },
];
