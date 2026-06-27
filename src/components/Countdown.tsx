import { motion } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';
import { SITE } from '@/constants/site';

const UNITS = ['days', 'hours', 'minutes', 'seconds'] as const;

/**
 * Live countdown to the conference start date, displayed as four
 * glassmorphism tiles (days / hours / minutes / seconds).
 */
export function Countdown() {
  const timeLeft = useCountdown(new Date(SITE.conferenceStartDate));

  if (timeLeft.isPast) {
    return (
      <p className="text-lg font-semibold text-white">ICAMS 2026 is happening now!</p>
    );
  }

  return (
    <div className="flex gap-3 sm:gap-4">
      {UNITS.map((unit, index) => (
        <motion.div
          key={unit}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.5 }}
          className="glass flex w-16 sm:w-20 flex-col items-center rounded-2xl py-3 sm:py-4 text-white"
        >
          <span className="text-2xl sm:text-3xl font-extrabold tabular-nums">
            {String(timeLeft[unit]).padStart(2, '0')}
          </span>
          <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-white/70 capitalize">
            {unit}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
