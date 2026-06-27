import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

/**
 * Animated number counter that counts up from 0 to `value` when it
 * scrolls into view.
 */
export function StatCounter({ value, suffix = '', label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-1 rounded-2xl p-4 sm:p-6"
    >
      <span className="text-3xl sm:text-5xl font-extrabold gradient-text tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="text-xs sm:text-sm font-medium uppercase tracking-wide text-ink-500 dark:text-ink-300">
        {label}
      </span>
    </motion.div>
  );
}
