import { motion } from 'framer-motion';
import { Check, Landmark } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { REGISTRATION_TIERS, REGISTRATION_INCLUSIONS } from '@/data/registration';
import { PAYMENT_DETAILS } from '@/constants/site';

export default function Registration() {
  return (
    <>
      <SEO
        title="Registration"
        description="ICAMS 2026 registration fees for students, academicians, industry professionals, and attendees. Includes conference kit, certificate, proceedings, and payment details."
        path="/registration"
      />
      <PageHero
        eyebrow="Registration"
        title="Register for ICAMS 2026"
        description="Choose the category that applies to you. Early bird registration closes October 31, 2026."
      />

      {/* Pricing table */}
      <section className="section-padding">
        <div className="container-section">
          <SectionHeading eyebrow="Pricing" title="Registration Categories & Fees" />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REGISTRATION_TIERS.map((tier, index) => (
              <motion.div
                key={tier.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`card-base flex flex-col p-7 ${index === 0 ? 'ring-2 ring-primary-500' : ''}`}
              >
                {index === 0 && (
                  <span className="mb-3 inline-block w-fit rounded-full bg-primary-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Popular
                  </span>
                )}
                <h3 className="text-base font-bold text-ink-900 dark:text-white">{tier.category}</h3>
                <div className="mt-4">
                  <p className="text-3xl font-extrabold text-ink-900 dark:text-white">{tier.priceINR}</p>
                  <p className="text-sm text-ink-400">{tier.priceUSD} (International)</p>
                </div>
                <p className="mt-3 text-sm text-ink-500 dark:text-ink-300">{tier.description}</p>
                <Button to="/contact" variant="secondary" className="mt-6 w-full">
                  Register
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Inclusions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 rounded-3xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 p-8 shadow-soft"
          >
            <h3 className="text-lg font-bold text-ink-900 dark:text-white">Registration Includes</h3>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {REGISTRATION_INCLUSIONS.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-ink-600 dark:text-ink-300">
                  <Check size={16} className="text-teal-500" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment details */}
      <section className="section-padding bg-ink-50/60 dark:bg-white/[0.02]">
        <div className="container-section">
          <SectionHeading eyebrow="Payment" title="Bank Transfer Details" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-12 max-w-2xl rounded-3xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 p-8 shadow-soft"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300">
                <Landmark size={20} />
              </span>
              <h3 className="text-base font-bold text-ink-900 dark:text-white">Bank Transfer Information</h3>
            </div>
            <dl className="mt-6 divide-y divide-ink-100 dark:divide-white/10 text-sm">
              {[
                ['Account Name', PAYMENT_DETAILS.accountName],
                ['Bank', PAYMENT_DETAILS.bank],
                ['Branch', PAYMENT_DETAILS.branch],
                ['IFSC Code', PAYMENT_DETAILS.ifsc],
                ['Account Number', PAYMENT_DETAILS.accountNumber],
                ['SWIFT Code', PAYMENT_DETAILS.swift],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 py-3">
                  <dt className="font-medium text-ink-500 dark:text-ink-400">{label}</dt>
                  <dd className="text-right font-semibold text-ink-900 dark:text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>
    </>
  );
}
