export interface SiteStat {
  label: string;
  value: number;
  suffix?: string;
}

export const HOME_STATS: SiteStat[] = [
  { label: 'Tracks', value: 7 },
  { label: 'Days', value: 2 },
  { label: 'Keynote Speakers', value: 10, suffix: '+' },
  { label: 'Countries Expected', value: 15, suffix: '+' },
];
