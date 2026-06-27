import { motion } from 'framer-motion';
import { UserRound } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { PATRONS, ORGANIZING_COMMITTEE, ADVISORY_COMMITTEE } from '@/data/committee';
import type { CommitteeMember } from '@/data/committee';

function CommitteeGrid({ members }: { members: CommitteeMember[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member, index) => (
        <motion.div
          key={member.name + index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
          className="card-base flex items-center gap-4 p-5"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-teal-500 text-white">
            <UserRound size={20} />
          </span>
          <div>
            <p className="text-sm font-bold text-ink-900 dark:text-white">{member.name}</p>
            <p className="text-xs font-semibold text-primary-600 dark:text-primary-300">{member.role}</p>
            <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">{member.affiliation}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Committee() {
  return (
    <>
      <SEO
        title="Committee"
        description="Meet the patrons, organizing committee, and advisory committee of ICAMS 2026, Vardhaman College of Engineering."
        path="/committee"
      />
      <PageHero
        eyebrow="People"
        title="Organizing Committee"
        description="ICAMS 2026 is guided by a dedicated team of patrons, organizers, and advisors from academia and industry."
      />

      <section className="section-padding space-y-16">
        <div className="container-section">
          <SectionHeading align="left" eyebrow="Patrons" title="Chief Patron & Patron" />
          <div className="mt-8">
            <CommitteeGrid members={PATRONS} />
          </div>
        </div>

        <div className="container-section">
          <SectionHeading align="left" eyebrow="Organizers" title="Organizing Committee" />
          <div className="mt-8">
            <CommitteeGrid members={ORGANIZING_COMMITTEE} />
          </div>
        </div>

        <div className="container-section">
          <SectionHeading align="left" eyebrow="Advisory" title="Advisory Committee" />
          <div className="mt-8">
            <CommitteeGrid members={ADVISORY_COMMITTEE} />
          </div>
          <p className="mt-6 text-xs text-ink-400">
            Names listed are placeholders — replace with confirmed committee members in src/data/committee.ts.
          </p>
        </div>
      </section>
    </>
  );
}
