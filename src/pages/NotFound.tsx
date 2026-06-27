import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for could not be found." path="/404" />
      <section className="flex min-h-screen flex-col items-center justify-center bg-ink-950 px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-7xl font-extrabold gradient-text">404</p>
          <h1 className="mt-4 text-2xl font-bold">Page Not Found</h1>
          <p className="mt-3 max-w-md text-white/60">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have been moved.
          </p>
          <Button to="/" variant="primary" className="mt-8">
            Back to Home
          </Button>
        </motion.div>
      </section>
    </>
  );
}
