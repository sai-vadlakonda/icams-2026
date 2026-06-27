import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { COLLEGE_HIGHLIGHTS, COLLEGE_STATS } from '@/data/college';

export default function AboutCollege() {
  return (
    <>
      <SEO
        title="About Vardhaman College"
        description="About Vardhaman College of Engineering (VCE), Hyderabad - established 1999, NAAC A++ accredited, NBA Tier-I, with strong research collaborations with ISRO, DRDO and IISc."
        path="/about-college"
      />
      <PageHero
        eyebrow="Host Institution"
        title="Vardhaman College of Engineering"
        description="An autonomous institution committed to academic excellence, research, and holistic student development since 1999."
      />

      <section className="section-padding">
        <div className="container-section">
          {/* Stats row */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {COLLEGE_STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 p-6 text-center shadow-soft"
              >
                <p className="text-2xl font-extrabold gradient-text sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-500 dark:text-ink-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading
              align="left"
              eyebrow="Why Vardhaman"
              title="A Legacy of Academic Excellence & Innovation"
              description="Promoted by the Vardhaman Educational Society, the college has built a strong reputation for quality engineering education, applied research, and industry-aligned training."
            />

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {COLLEGE_HIGHLIGHTS.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
                  className="flex gap-3 rounded-2xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 p-5 shadow-soft"
                >
                  <ShieldCheck size={20} className="mt-0.5 shrink-0 text-primary-600 dark:text-primary-300" />
                  <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
