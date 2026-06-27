import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Animated, reusable surface card with consistent rounded corners,
 * border, and hover-lift shadow — used throughout tracks, committee,
 * speakers, sponsors and FAQ sections.
 */
export function Card({ children, className, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className={cn('card-base p-6 sm:p-7', className)}
    >
      {children}
    </motion.div>
  );
}
