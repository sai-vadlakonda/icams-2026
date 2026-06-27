import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { SITE } from '@/constants/site';

/**
 * Short "About ICAMS" teaser on the homepage, linking through to the
 * full About Conference page.
 */
export function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="container-section grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 to-teal-600 p-10 text-white shadow-card">
            <GraduationCap size={40} className="opacity-90" />
            <p className="mt-6 text-lg font-semibold leading-relaxed">
              &ldquo;Advancing mechanical sciences through global collaboration, research, and innovation.&rdquo;
            </p>
            <p className="mt-4 text-sm text-white/70">— ICAMS 2026 Organizing Committee</p>
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl border-2 border-dashed border-primary-300/40" />
        </motion.div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About the Congress"
            title="A Global Platform for Mechanical Sciences Research"
          />
          <p className="mt-6 text-ink-500 dark:text-ink-300 leading-relaxed">
            {SITE.fullName} ({SITE.name}) brings together researchers, academicians, scientists, and industry
            professionals from across the world to share knowledge through keynote lectures, invited talks, and
            technical paper presentations — fostering meaningful collaboration across academia and industry.
          </p>
          <Button to="/about-conference" variant="secondary" className="mt-8">
            Learn More <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
