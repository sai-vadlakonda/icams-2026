import { motion } from 'framer-motion';
import { Mic2 } from 'lucide-react';
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
        title="Keynote & Invited Speakers"
        description="Hear from leading voices in mechanical sciences, aerospace, and advanced manufacturing."
      />

      <section className="section-padding">
        <div className="container-section">
          <SectionHeading eyebrow="Lineup" title="Distinguished Speakers" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {KEYNOTE_SPEAKERS.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="card-base p-6 text-center"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-teal-500 text-white">
                  <Mic2 size={28} />
                </div>
                <h3 className="mt-4 text-sm font-bold text-ink-900 dark:text-white">{speaker.name}</h3>
                <p className="mt-1 text-xs font-semibold text-primary-600 dark:text-primary-300">{speaker.title}</p>
                <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">{speaker.affiliation}</p>
                <p className="mt-3 text-xs leading-relaxed text-ink-500 dark:text-ink-300">{speaker.topic}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-ink-400">
            Speaker names are placeholders pending final confirmation — update src/data/speakers.ts as speakers are
            confirmed.
          </p>
        </div>
      </section>
    </>
  );
}
