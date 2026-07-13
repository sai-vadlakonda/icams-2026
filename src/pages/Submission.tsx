import { motion } from 'framer-motion';
import { FileText, UploadCloud, Mail, FileCheck2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { SITE } from '@/constants/site';

const STEPS = [
  {
    icon: FileText,
    title: 'Download the Paper Template',
    description: 'Prepare your manuscript using the official ICAMS 2026 formatting template.',
  },
  {
    icon: UploadCloud,
    title: 'Submit via the Online Portal',
    description: 'Upload your full paper through the conference submission portal before the deadline.',
  },
  {
    icon: FileCheck2,
    title: 'Review & Acceptance',
    description: 'Papers undergo peer review; authors are notified of acceptance by October 15, 2026.',
  },
  {
    icon: Mail,
    title: 'Camera-Ready Submission',
    description: 'Accepted authors submit the final camera-ready version by October 20, 2026.',
  },
];

export default function Submission() {
  return (
    <>
      <SEO
        title="Paper Submission"
        description="Submit your full paper for ICAMS 2026. Download the paper template, use the online submission portal, and follow the peer review timeline."
        path="/submission"
      />
      <PageHero
        eyebrow="Call for Papers"
        title="Paper Submission Guidelines"
        description="Follow the steps below to submit your research for ICAMS 2026. Submission opens June 10, 2026."
      >
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/templates/icams-2026-paper-template.docx" target="_blank" variant="ghost">
            <FileText size={16} /> Download Paper Template
          </Button>
          <Button href="#" target="_blank" variant="primary" className="!bg-teal-500 hover:!bg-teal-600">
            <UploadCloud size={16} /> Go to Submission Portal
          </Button>
        </div>
      </PageHero>

      <section className="section-padding">
        <div className="container-section">
          <SectionHeading eyebrow="Process" title="Submission Workflow" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="card-base relative p-6"
              >
                <span className="absolute -top-4 -left-1 text-5xl font-extrabold text-primary-100 dark:text-white/5">
                  {index + 1}
                </span>
                <step.icon size={26} className="relative z-10 text-primary-600 dark:text-primary-300" />
                <h3 className="relative z-10 mt-4 text-base font-bold text-ink-900 dark:text-white">{step.title}</h3>
                <p className="relative z-10 mt-2 text-sm text-ink-500 dark:text-ink-300">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 rounded-3xl border border-ink-100 dark:border-white/10 bg-primary-50/60 dark:bg-white/5 p-8 text-center"
          >
            <p className="text-sm text-ink-600 dark:text-ink-300">
              For submission-related queries, please write to us at{' '}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-primary-600 dark:text-primary-300">
                {SITE.email}
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
