import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { FAQ_ITEMS } from '@/data/faq';
import { cn } from '@/utils/cn';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="FAQ"
        description="Frequently asked questions about ICAMS 2026 - submission, registration, publications, and participation details."
        path="/faq"
      />
      <PageHero
        eyebrow="Help Center"
        title="Frequently Asked Questions"
        description="Find quick answers to common questions about ICAMS 2026. Still have a question? Reach out to us."
      />

      <section className="section-padding">
        <div className="container-section max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Everything You Need to Know" />

          <div className="mt-12 space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="overflow-hidden rounded-2xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 shadow-soft"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="flex items-center gap-3 text-sm font-bold text-ink-900 dark:text-white">
                      <HelpCircle size={16} className="shrink-0 text-primary-600 dark:text-primary-300" />
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={cn('shrink-0 text-ink-400 transition-transform', isOpen && 'rotate-180')}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
