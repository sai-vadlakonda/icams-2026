import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { KEYNOTE_SPEAKERS } from '@/data/speakers';

export default function Speakers() {
  return (
    <>
      <SEO
        title="Speakers"
        description="Keynote and invited speakers at ICAMS 2026, featuring distinguished researchers and industry experts in mechanical sciences."
        path="/speakers"
      />

      <PageHero
        eyebrow="Speakers"
        title="Keynote Speakers"
        description="Meet the distinguished keynote speakers of ICAMS 2026."
      />

      <section className="section-padding">
        <div className="container-section">
          <SectionHeading
            eyebrow="Lineup"
            title="Distinguished Speakers"
          />

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {KEYNOTE_SPEAKERS.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-3xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 shadow-card hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-ink-900 dark:text-white">
                    {speaker.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-primary-600 dark:text-primary-300">
                    {speaker.title}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-ink-500 dark:text-ink-300">
                    {speaker.affiliation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}