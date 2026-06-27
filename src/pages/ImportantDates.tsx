import { motion } from 'framer-motion';
import { CalendarDays, Download } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/Button';
import { IMPORTANT_DATES } from '@/data/dates';

export default function ImportantDates() {
  return (
    <>
      <SEO
        title="Important Dates"
        description="Key dates for ICAMS 2026 - paper submission deadlines, acceptance notification, camera ready submission, early bird and final registration deadlines, and conference dates."
        path="/important-dates"
      />
      <PageHero
        eyebrow="Timeline"
        title="Important Dates"
        description="Stay on track with every key deadline leading up to ICAMS 2026 on December 4-5, 2026."
      >
        <div className="mt-8 flex justify-center">
          <Button href="/brochure-icams-2026.pdf" target="_blank" variant="ghost">
            <Download size={16} /> Download Full Brochure
          </Button>
        </div>
      </PageHero>

      <section className="section-padding">
        <div className="container-section">
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-primary-200 dark:bg-white/10 sm:left-1/2" />
            <ul className="space-y-6">
              {IMPORTANT_DATES.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="relative flex items-center gap-4 pl-10 sm:pl-0 sm:even:flex-row-reverse sm:even:text-right"
                >
                  <span
                    className={`absolute left-0 sm:left-1/2 sm:-translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full text-white ${
                      item.highlight ? 'bg-teal-500' : 'bg-primary-500'
                    }`}
                  >
                    <CalendarDays size={15} />
                  </span>
                  <div
                    className={`w-full rounded-xl border p-5 shadow-soft sm:w-[calc(50%-2rem)] ${
                      item.highlight
                        ? 'border-teal-200 bg-teal-50 dark:border-teal-500/30 dark:bg-teal-500/10'
                        : 'border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900'
                    }`}
                  >
                    <p className="text-base font-bold text-ink-900 dark:text-white">{item.label}</p>
                    <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">{item.date}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
