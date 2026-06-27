import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { TRACKS } from '@/data/tracks';

/**
 * Grid preview of all 7 conference tracks on the homepage.
 */
export function TracksPreview() {
  return (
    <section className="section-padding bg-ink-50/60 dark:bg-white/[0.02]">
      <div className="container-section">
        <SectionHeading eyebrow="Conference Tracks" title="Explore the 7 Technical Tracks" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="card-base group p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300">
                <Layers size={20} />
              </div>
              <h3 className="mt-4 text-base font-bold text-ink-900 dark:text-white">
                Track {track.id} · {track.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500 dark:text-ink-300 line-clamp-2">
                {track.topics.slice(0, 3).join(', ')} and more.
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/tracks" variant="primary">
            View All Tracks <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
