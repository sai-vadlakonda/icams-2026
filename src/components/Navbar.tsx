import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_ITEMS } from '@/constants/nav';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './Button';
import { cn } from '@/utils/cn';

// Primary items shown directly in the bar; the rest collapse into a "More" menu on desktop.
const PRIMARY_COUNT = 7;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, []);

  const primaryItems = NAV_ITEMS.slice(0, PRIMARY_COUNT);
  const moreItems = NAV_ITEMS.slice(PRIMARY_COUNT);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4'
      )}
    >
      <div className="container-section">
        <div
          className={cn(
            'glass flex items-center justify-between rounded-2xl px-4 sm:px-6 py-2.5 transition-all duration-300',
            scrolled ? 'shadow-card' : 'shadow-none'
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/assets/images/icams-logo.jpg"
              alt="ICAMS 2026 Logo"
              className="h-12 w-12 rounded-lg bg-white p-1 object-contain"
            />

            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-extrabold text-ink-900 dark:text-white">
                ICAMS 2026
              </span>
              <span className="text-[10px] font-medium text-ink-500 dark:text-ink-300">
                VCE Hyderabad
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {primaryItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-3 py-2 text-[13px] font-semibold transition-colors',
                    isActive
                      ? 'bg-primary-600 text-white'
                      : 'text-ink-600 dark:text-ink-200 hover:bg-primary-50 dark:hover:bg-white/10'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="relative">
              <button
                onClick={() => setMoreOpen((v) => !v)}
                onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
                className="flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-semibold text-ink-600 dark:text-ink-200 hover:bg-primary-50 dark:hover:bg-white/10"
              >
                More
                <ChevronDown size={14} className={cn('transition-transform', moreOpen && 'rotate-180')} />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-56 rounded-2xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 p-2 shadow-card"
                  >
                    {moreItems.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          cn(
                            'block rounded-xl px-3 py-2 text-sm font-medium',
                            isActive
                              ? 'bg-primary-600 text-white'
                              : 'text-ink-600 dark:text-ink-200 hover:bg-primary-50 dark:hover:bg-white/5'
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button to="/registration" variant="primary" className="!px-5 !py-2.5 text-xs">
              Register Now
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 dark:border-white/15 text-ink-700 dark:text-white"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-2 overflow-hidden rounded-2xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 shadow-card lg:hidden"
            >
              <div className="flex flex-col p-3">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'rounded-xl px-4 py-3 text-sm font-semibold',
                        isActive
                          ? 'bg-primary-600 text-white'
                          : 'text-ink-600 dark:text-ink-200 hover:bg-primary-50 dark:hover:bg-white/5'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Button to="/registration" variant="primary" className="mt-2 w-full">
                  Register Now
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
