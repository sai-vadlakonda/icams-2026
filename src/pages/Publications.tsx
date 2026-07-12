import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';

export default function Publications() {
  return (
    <>
      <SEO
        title="Publications"
        description="Publication opportunity for accepted papers at ICAMS 2026."
        path="/publications"
      />

      <PageHero
        eyebrow="Publications"
        title="Publication Opportunity"
        description="Publish your research through ICAMS 2026 and gain wider academic visibility."
      />

      <section className="section-padding">
        <div className="container-section">
          <SectionHeading
            eyebrow="Publication"
            title="Publication Opportunity"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-12 max-w-4xl rounded-3xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 p-8 shadow-card"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-teal-500 text-white">
                <BookOpen size={26} />
              </div>

              <h3 className="text-2xl font-bold text-ink-900 dark:text-white">
                Publication Opportunity
              </h3>
            </div>

            <p className="mt-6 text-base leading-8 text-ink-600 dark:text-ink-300">
              All accepted and presented papers will be published in
              <strong> Scopus-indexed conference proceedings.</strong>
            </p>

            <div className="mt-8 rounded-2xl bg-ink-50 dark:bg-white/5 p-6">
              <h4 className="text-lg font-semibold text-ink-900 dark:text-white">
                List of Conference Proceedings / Journals
              </h4>

              <p className="mt-3 text-base text-ink-600 dark:text-ink-300">
                Will be updated soon.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}