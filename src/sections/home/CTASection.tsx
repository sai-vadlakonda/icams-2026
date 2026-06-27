import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';

/**
 * Bold closing call-to-action band before the footer.
 */
export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 via-primary-600 to-teal-600 px-8 py-16 text-center text-white shadow-card sm:px-16"
        >
          <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-20" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Be Part of ICAMS 2026</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Submit your research, join the conversation, and connect with the global mechanical sciences community
              in Hyderabad this December.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/submission" variant="ghost" className="!bg-white !text-primary-700 hover:!bg-white/90">
                Submit Your Paper <ArrowRight size={16} />
              </Button>
              <Button to="/registration" variant="ghost">
                Register Now <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
