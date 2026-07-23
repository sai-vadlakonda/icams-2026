import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { SITE } from '@/constants/site';
import { SCOPE_AREAS } from '@/data/scope';
import { OBJECTIVES } from '@/data/objectives';

export default function AboutConference() {
  return (
    <>
      <SEO
        title="About Conference"
        description="Learn about ICAMS 2026 - its purpose, scope, and objectives bringing together global researchers in mechanical sciences."
        path="/about-conference"
      />
      <PageHero
        eyebrow="About the Congress"
        title={SITE.fullName}
        description="A premier international platform for the exchange of ideas in mechanical sciences and allied engineering disciplines."
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container-section grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300">
              Purpose
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink-900 dark:text-white">
              Why ICAMS 2026?
            </h2>
            <p className="mt-5 leading-relaxed text-ink-500 dark:text-ink-300">
              {SITE.fullName} ({SITE.name}) is organized by the {SITE.organizer} at {SITE.college}, {SITE.location}.
              The congress provides a dedicated international platform bringing together researchers, academicians,
              scientists, and industry professionals to share advances in mechanical sciences. Through keynote
              lectures, invited talks, and technical paper presentations, ICAMS 2026 fosters meaningful collaboration
              between academia and industry, accelerating the translation of research into practical, real-world
              solutions.
            </p>
            <p className="mt-4 leading-relaxed text-ink-500 dark:text-ink-300">
              The congress will be held on {SITE.dateRange}, welcoming delegates from across the globe to engage in
              technical sessions, panel discussions, and networking opportunities centered on the latest
              developments shaping the future of mechanical engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center rounded-3xl bg-gradient-to-br from-primary-50 to-teal-50 dark:from-primary-500/10 dark:to-teal-500/10 p-12"
          >
            <div className="flex items-center justify-center">
              <img
                src="/assets/images/icams-logo.jpg"
                alt="ICAMS 2026 Logo"
                className="h-64 w-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Department */}
      <section className="section-padding bg-ink-50/60 dark:bg-white/[0.02]">
        <div className="container-section">
          <SectionHeading
            eyebrow="About the Department"
            title="Department of Mechanical Engineering"
            description="Building excellence in mechanical engineering education, research, innovation, and industry collaboration."
          />

          <div className="mt-12 space-y-6 rounded-3xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 p-8 shadow-soft">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="leading-relaxed text-ink-600 dark:text-ink-300"
            >
              The Department of Mechanical Engineering, established in 2005,
              offers B.Tech in Mechanical Engineering and M.Tech in Engineering
              Design. The B.Tech programme is NBA accredited under Tier-I,
              reflecting the department's commitment to academic excellence and
              outcome-based education.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="leading-relaxed text-ink-600 dark:text-ink-300"
            >
              The department provides a strong foundation in mechanical engineering
              through a curriculum integrating theory with practical learning,
              supported by modern laboratories, CAD/CAM, simulation, and
              project-based education. Emerging technologies including Industry
              4.0, Automation, Robotics, IoT, Additive Manufacturing, and Digital
              Twin are incorporated to meet evolving industrial needs.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="leading-relaxed text-ink-600 dark:text-ink-300"
            >
              Faculty and students actively engage in research, consultancy, and
              innovation in renewable energy, smart manufacturing, sustainable
              materials, computational engineering, electric mobility, and product
              design. The department also promotes industry collaboration through
              internships, consultancy projects, workshops, technical clubs (SAE &
              ISHRAE), and multidisciplinary projects.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="leading-relaxed text-ink-600 dark:text-ink-300"
            >
              State-of-the-art laboratories include CIM & Robotics, Numerical
              Simulation, CAD/CAM, Thermal Engineering, Heat Transfer, Fluid
              Mechanics & Hydraulics, Production Technology, Materials Science &
              Metallurgy, Metrology & Machine Tools, Dynamics of Machines,
              Mechanics of Solids, Instrumentation, Advanced Design, Finite
              Element Analysis, and Geometric Modelling laboratories.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="leading-relaxed text-ink-600 dark:text-ink-300"
            >
              Committed to sustainable engineering and technological advancement,
              the department aligns its teaching, research, and outreach with the
              United Nations Sustainable Development Goals (SDGs 7, 9, 12, and
              13), preparing graduates for successful careers in academia,
              industry, and research.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="section-padding bg-ink-50/60 dark:bg-white/[0.02]">
        <div className="container-section">
          <SectionHeading eyebrow="Scope" title="Topics Covered at ICAMS 2026" />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {SCOPE_AREAS.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
                className="rounded-2xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 px-4 py-5 text-center shadow-soft"
              >
                <p className="text-sm font-semibold text-ink-800 dark:text-ink-100">{area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding">
        <div className="container-section">
          <SectionHeading eyebrow="Objectives" title="What ICAMS 2026 Aims to Achieve" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {OBJECTIVES.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
                className="flex gap-3 rounded-2xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 p-5 shadow-soft"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-teal-500" />
                <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
