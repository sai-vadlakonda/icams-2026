import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

/**
 * Animated dark/light mode switch.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 dark:border-white/15 bg-white/60 dark:bg-white/5 text-ink-700 dark:text-ink-100 transition-colors hover:bg-primary-50 dark:hover:bg-white/10"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
