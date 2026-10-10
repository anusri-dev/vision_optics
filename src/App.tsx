import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Home } from '@/pages/Home';
const About = lazy(() => import('@/pages/About').then((module) => ({ default: module.About })));
const Services = lazy(() => import('@/pages/Services').then((module) => ({ default: module.Services })));
const Shop = lazy(() => import('@/pages/Shop').then((module) => ({ default: module.Shop })));
const Testimonials = lazy(() => import('@/pages/Testimonials').then((module) => ({ default: module.Testimonials })));
const EyeCare = lazy(() => import('@/pages/EyeCare').then((module) => ({ default: module.EyeCare })));
const Brands = lazy(() => import('@/pages/Brands').then((module) => ({ default: module.Brands })));
const Contact = lazy(() => import('@/pages/Contact').then((module) => ({ default: module.Contact })));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy').then((module) => ({ default: module.PrivacyPolicy })));
const Terms = lazy(() => import('@/pages/Terms').then((module) => ({ default: module.Terms })));
const Sitemap = lazy(() => import('@/pages/Sitemap').then((module) => ({ default: module.Sitemap })));
const NotFound = lazy(() => import('@/pages/NotFound').then((module) => ({ default: module.NotFound })));

function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-violet-800 focus:shadow-lg">
        Skip to main content
      </a>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1 pb-16 md:pb-0">
          <Suspense fallback={<div className="min-h-[50vh]" aria-label="Loading page" />}>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/eye-care" element={<EyeCare />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
