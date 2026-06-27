import { SEO } from '@/components/SEO';
import { HeroSection } from '@/sections/home/HeroSection';
import { StatsSection } from '@/sections/home/StatsSection';
import { AboutPreview } from '@/sections/home/AboutPreview';
import { TracksPreview } from '@/sections/home/TracksPreview';
import { DatesPreview } from '@/sections/home/DatesPreview';
import { CTASection } from '@/sections/home/CTASection';

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="ICAMS 2026 - International Congress on Advances in Mechanical Sciences, organized by Vardhaman College of Engineering, Hyderabad. December 4-5, 2026."
        path="/"
      />
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <TracksPreview />
      <DatesPreview />
      <CTASection />
    </>
  );
}
