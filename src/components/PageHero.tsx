import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

/**
 * Compact gradient hero used at the top of every interior page
 * (non-Home), keeping a consistent premium look across the site.
 */
export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950 bg-hero-gradient pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:36px_36px] opacity-40" />
      <div className="container-section relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-200"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-2xl mx-auto text-white/70 text-base sm:text-lg leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
