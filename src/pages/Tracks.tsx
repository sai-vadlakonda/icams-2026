import { motion } from 'framer-motion';
import { Layers, Check } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { TRACKS } from '@/data/tracks';

export default function Tracks() {
  return (
    <>
      <SEO
        title="Conference Tracks"
        description="Explore the 7 technical tracks at ICAMS 2026: Materials & Composites, Advanced Manufacturing, Renewable Energy, Thermal & Fluid Engineering, Design & Computational Engineering, Robotics AI & Automation, Aerospace & Automotive Engineering."
        path="/tracks"
      />
      <PageHero
        eyebrow="Technical Tracks"
        title="7 Tracks Covering the Breadth of Mechanical Sciences"
        description="Submit your research to the track that best matches your area of work. Each track includes dedicated technical sessions and reviewers."
      />

      <section className="section-padding">
        <div className="container-section grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="card-base flex flex-col p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-teal-500 text-white shadow-soft">
                  <Layers size={20} />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-300">
                  Track {track.id}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink-900 dark:text-white">{track.title}</h3>
              <ul className="mt-4 space-y-2">
                {track.topics.map((topic) => (
                  <li key={topic} className="flex gap-2 text-sm text-ink-500 dark:text-ink-300">
                    <Check size={15} className="mt-0.5 shrink-0 text-teal-500" />
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
