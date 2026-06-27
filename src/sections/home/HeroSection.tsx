import { motion } from 'framer-motion';
import { ChevronDown, FileText, Download } from 'lucide-react';
import { Button } from '@/components/Button';
import { Countdown } from '@/components/Countdown';
import { SITE } from '@/constants/site';

/**
 * Full-bleed hero. Uses a CSS gradient + grid pattern as a stand-in
 * background — swap in the real Vardhaman campus photo by dropping
 * `hero-campus.jpg` into src/assets/images/ and updating the
 * background-image style below (see README "Replacing Images").
 */
export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink-950">
      {/* Background layer - replace with real campus photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(7,10,18,0.82), rgba(10,20,40,0.88)), url(/assets/images/hero-campus.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] opacity-30" />

      {/* Floating decorative blobs */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary-600/30 blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl animate-float" />

      <div className="container-section relative z-10 pt-28 pb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-200 backdrop-blur-md"
        >
          {SITE.dateRange} · {SITE.location}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-6xl"
        >
          International Congress on <span className="gradient-text">Advances in Mechanical Sciences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-white/75 sm:text-lg"
        >
          ICAMS 2026 — organized by the Department of Mechanical Engineering, Vardhaman College of Engineering,
          Hyderabad. A global platform for researchers, academicians, scientists, and industry professionals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Countdown />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button to="/registration" variant="primary">
            Register Now
          </Button>
          <Button to="/submission" variant="secondary" className="!border-white !text-white hover:!bg-white hover:!text-ink-900">
            <FileText size={16} /> Submit Paper
          </Button>
          <Button href="/brochure-icams-2026.pdf" target="_blank" variant="ghost">
            <Download size={16} /> Download Brochure
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <ChevronDown className="animate-bounce text-white/50" size={28} />
        </motion.div>
      </div>
    </section>
  );
}
