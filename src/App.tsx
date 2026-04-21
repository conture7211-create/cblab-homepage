import { useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import TechnologySection from './components/TechnologySection';
import BrandsSection from './components/BrandsSection';
import AboutUsSection from './components/AboutUsSection';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusinessSection from './components/BusinessSection';
import EducationSection from './components/EducationSection';
import FinalContact from "./components/FinalContact";
import OurStory from './pages/OurStory';
import AboutResearchDevelopment from './pages/AboutResearchDevelopment';
import DivalinePage from './pages/DivalinePage';
import DivalineSkincare from './pages/DivalineSkincare';
import DivalineDevice from './pages/DivalineDevice';
import DivalineHomecare from './pages/DivalineHomecare';
import LongTimeLinerPage from './pages/LongTimeLinerPage';
import LongTimeLinerSegmentPage from './pages/LongTimeLinerSegmentPage';
import BrandPlatformPage from './pages/BrandPlatformPage';
import BrandPlatformSegmentPage from './pages/BrandPlatformSegmentPage';
import BeautyDevice from './pages/BeautyDevice';
import FunctionalSkincare from './pages/FunctionalSkincare';
import Homecare from './pages/Homecare';
import ProfessionalEducation from './pages/ProfessionalEducation';
import BrandPhilosophy from './pages/BrandPhilosophy';
import VisualDirection from './pages/VisualDirection';
import PremiumExperience from './pages/PremiumExperience';
import TechnologySegmentPage from './pages/TechnologySegmentPage';
import EducationSegmentPage from './pages/EducationSegmentPage';

function RootLayout() {
  return (
    <div className="bg-warm-ivory text-deep-black font-sans antialiased">
      <Navbar />
      <Outlet />
    </div>
  );
}

function HomePage() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== '/' || !hash) return;
    const id = hash.replace(/^#/, '');
    if (!id) return;
    const run = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    requestAnimationFrame(() => {
      requestAnimationFrame(run);
    });
  }, [pathname, hash]);

  return (
    <>
      <Hero />
      <main className="m-0 block w-full p-0">
        <AboutUsSection />
        <BusinessSection />
        <BrandsSection />
        <TechnologySection />
        <EducationSection />
        <FinalContact />
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="about/our-story" element={<OurStory />} />
        <Route path="about/our-vision" element={<OurStory />} />
        <Route path="about/our-structure" element={<OurStory />} />
        <Route path="about/research-development" element={<AboutResearchDevelopment />} />
        <Route path="about/brand-philosophy" element={<BrandPhilosophy />} />
        <Route path="about/visual-direction" element={<VisualDirection />} />
        <Route path="about/premium-experience" element={<PremiumExperience />} />
        <Route path="brands/divaline" element={<DivalinePage />} />
        <Route path="brands/divaline/skincare" element={<DivalineSkincare />} />
        <Route path="brands/divaline/device" element={<DivalineDevice />} />
        <Route path="brands/divaline/homecare" element={<DivalineHomecare />} />
        <Route path="brands/long-time-liner" element={<LongTimeLinerPage />} />
        <Route path="brands/long-time-liner/:segment" element={<LongTimeLinerSegmentPage />} />
        <Route path="brands/brand-platform" element={<BrandPlatformPage />} />
        <Route path="brands/brand-platform/:segment" element={<BrandPlatformSegmentPage />} />
        <Route path="business/beauty-device" element={<BeautyDevice />} />
        <Route path="business/functional-skincare" element={<FunctionalSkincare />} />
        <Route path="business/homecare" element={<Homecare />} />
        <Route path="business/professional-education" element={<ProfessionalEducation />} />
        <Route path="technology/:segment" element={<TechnologySegmentPage />} />
        <Route path="education/:segment" element={<EducationSegmentPage />} />
      </Route>
    </Routes>
  );
}

export default App;