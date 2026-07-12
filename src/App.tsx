import { Routes, Route } from 'react-router-dom';
import { useLenis } from '@/hooks/useLenis';
import { MainLayout } from '@/layouts/MainLayout';
import RouteScrollToTop from '@/components/RouteScrollToTop';

import Home from '@/pages/Home';
import AboutConference from '@/pages/AboutConference';
import AboutCollege from '@/pages/AboutCollege';
import Tracks from '@/pages/Tracks';
import ImportantDates from '@/pages/ImportantDates';
import Submission from '@/pages/Submission';
import Registration from '@/pages/Registration';
import Publications from '@/pages/Publications';
import Venue from '@/pages/Venue';
import Committee from '@/pages/Committee';
import Speakers from '@/pages/Speakers';
import Sponsors from '@/pages/Sponsors';
import Gallery from '@/pages/Gallery';
import FAQ from '@/pages/FAQ';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export default function App() {
  useLenis();

  return (
    <MainLayout>
      <RouteScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-conference" element={<AboutConference />} />
        <Route path="/about-college" element={<AboutCollege />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/important-dates" element={<ImportantDates />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}
