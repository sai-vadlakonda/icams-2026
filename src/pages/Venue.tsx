import { motion } from 'framer-motion';
import { MapPin, Plane, Train, Building2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { SITE } from '@/constants/site';

const TRAVEL_INFO = [
  {
    icon: Plane,
    title: 'By Air',
    description: 'Rajiv Gandhi International Airport, Shamshabad is approximately 5 km from the venue.',
  },
  {
    icon: Train,
    title: 'By Train',
    description: 'Nearest railway stations: Hyderabad Deccan, Secunderabad, and Kacheguda, each ~30 km away.',
  },
  {
    icon: Building2,
    title: 'On Campus',
    description: 'The conference will be hosted in the main auditorium and seminar halls of VCE.',
  },
];

export default function Venue() {
  return (
    <>
      <SEO
        title="Venue"
        description="ICAMS 2026 will be held at Vardhaman College of Engineering, Shamshabad, Hyderabad, Telangana, India. Find venue address, map, and travel information."
        path="/venue"
      />
      <PageHero
        eyebrow="Venue"
        title="Vardhaman College of Engineering"
        description={`${SITE.address.line3}, ${SITE.address.line4}`}
      />

      <section className="section-padding">
        <div className="container-section grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-80 overflow-hidden rounded-3xl border border-ink-100 dark:border-white/10 shadow-lg"
          >
            <iframe
              title="Vardhaman College of Engineering"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.2651118075823!2d78.30489377493151!3d17.254404283610295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbe831da8cbad%3A0x4a90e51ab5b5a62c!2sVardhaman%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1782569508618!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionHeading align="left" eyebrow="Address" title="Find Us" />
            <p className="mt-5 leading-relaxed text-ink-500 dark:text-ink-300">
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
              <br />
              {SITE.address.line3}
              <br />
              {SITE.address.line4}
            </p>
            <div className="mt-8 space-y-4">
              {TRAVEL_INFO.map((info) => (
                <div key={info.title} className="flex gap-4 rounded-2xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 p-4 shadow-soft">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300">
                    <info.icon size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink-900 dark:text-white">{info.title}</p>
                    <p className="text-sm text-ink-500 dark:text-ink-300">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
