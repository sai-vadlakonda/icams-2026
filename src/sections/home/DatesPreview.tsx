import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { IMPORTANT_DATES } from '@/data/dates';

/**
 * Timeline preview of important dates on the homepage.
 */
export function DatesPreview() {
  return (
    <section className="section-padding">
      <div className="container-section">
        <SectionHeading eyebrow="Mark Your Calendar" title="Important Dates" />

        <div className="relative mt-14 mx-auto max-w-3xl">
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-primary-200 dark:bg-white/10 sm:left-1/2" />
          <ul className="space-y-6">
            {IMPORTANT_DATES.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative flex items-center gap-4 pl-10 sm:pl-0 sm:even:flex-row-reverse sm:even:text-right"
              >
                <span
                  className={`absolute left-0 sm:left-1/2 sm:-translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full text-white ${
                    item.highlight ? 'bg-teal-500' : 'bg-primary-500'
                  }`}
                >
                  <CalendarDays size={15} />
                </span>
                <div className="w-full rounded-xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 p-4 shadow-soft sm:w-[calc(50%-2rem)]">
                  <p className="text-sm font-bold text-ink-900 dark:text-white">{item.label}</p>
                  <p className="text-sm text-ink-500 dark:text-ink-300">{item.date}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Button to="/important-dates" variant="secondary">
            Full Timeline <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
