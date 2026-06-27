import { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useScrollTop } from '@/hooks/useScrollTop';

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * Shared shell for every route: sticky navbar, page content, footer,
 * and the floating "scroll to top" button. Also resets scroll position
 * on every route change.
 */
export function MainLayout({ children }: MainLayoutProps) {
  useScrollTop();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
