import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

/**
 * Consistent eyebrow + title + description heading used at the top of
 * every section across the site.
 */
export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900 dark:text-white">{title}</h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-ink-500 dark:text-ink-300 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
