import { motion } from 'framer-motion';
import { BookOpen, Award, Globe2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';

const PUBLICATION_OPTIONS = [
  {
    icon: BookOpen,
    title: 'Conference Proceedings',
    description:
      'All accepted and presented papers will be published in the official ICAMS 2026 conference proceedings with an ISBN.',
  },
  {
    icon: Award,
    title: 'Springer LNME Opportunity',
    description:
      'Select high-quality papers will be recommended for publication in Springer\u2019s Lecture Notes in Mechanical Engineering (LNME) series, subject to additional review.',
  },
  {
    icon: Globe2,
    title: 'Partner Journal Placeholders',
    description:
      'Extended versions of outstanding papers may be considered for fast-track review in partner journals (to be announced closer to the conference).',
  },
];

export default function Publications() {
  return (
    <>
      <SEO
        title="Publications"
        description="Publication opportunities for ICAMS 2026 - conference proceedings, Springer LNME series, and partner journal options."
        path="/publications"
      />
      <PageHero
        eyebrow="Publications"
        title="Where Your Research Will Be Published"
        description="ICAMS 2026 offers multiple publication pathways to maximize the visibility and impact of your research."
      />

      <section className="section-padding">
        <div className="container-section">
          <SectionHeading eyebrow="Opportunities" title="Publication Pathways" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PUBLICATION_OPTIONS.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-base p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-teal-500 text-white shadow-soft">
                  <option.icon size={22} />
                </span>
                <h3 className="mt-5 text-base font-bold text-ink-900 dark:text-white">{option.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{option.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center text-xs text-ink-400"
          >
          </motion.p>
        </div>
      </section>
    </>
  );
}
