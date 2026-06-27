import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { SPONSORS } from '@/data/sponsors';
import { SITE } from '@/constants/site';

export default function Sponsors() {
  return (
    <>
      <SEO
        title="Sponsors"
        description="Sponsors and partners supporting ICAMS 2026. Explore sponsorship opportunities for the conference."
        path="/sponsors"
      />
      <PageHero
        eyebrow="Sponsors & Partners"
        title="Supporting ICAMS 2026"
        description="We thank our sponsors and partners for supporting global collaboration in mechanical sciences."
      />

      <section className="section-padding">
        <div className="container-section">
          <SectionHeading eyebrow="Our Partners" title="Sponsors" />
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {SPONSORS.map((sponsor, index) => (
              <motion.div
                key={sponsor.name + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 p-6 text-center shadow-soft"
              >
                <Handshake size={26} className="text-primary-500" />
                <p className="text-xs font-semibold text-ink-700 dark:text-ink-200">{sponsor.name}</p>
                <span className="rounded-full bg-primary-50 dark:bg-primary-500/10 px-3 py-0.5 text-[10px] font-bold uppercase text-primary-600 dark:text-primary-300">
                  {sponsor.tier}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 rounded-3xl bg-gradient-to-br from-primary-700 to-teal-600 p-10 text-center text-white"
          >
            <h3 className="text-2xl font-bold">Become a Sponsor</h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-white/80">
              Partner with ICAMS 2026 to connect with researchers, academicians, and industry leaders from around the
              world. Contact us for sponsorship packages.
            </p>
            <Button href={`mailto:${SITE.email}`} variant="ghost" className="mt-6">
              Contact for Sponsorship
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
