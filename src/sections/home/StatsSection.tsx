import { StatCounter } from '@/components/StatCounter';
import { HOME_STATS } from '@/data/stats';

/**
 * Animated statistics strip placed right below the hero section.
 */
export function StatsSection() {
  return (
    <section className="relative -mt-12 z-20">
      <div className="container-section">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 p-6 shadow-card sm:grid-cols-4 sm:p-8">
          {HOME_STATS.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
