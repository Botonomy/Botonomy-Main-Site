import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { captureUTMSession, initScrollDepthTracking } from './utils/analytics';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsletterPopup from './components/NewsletterPopup';
import NewsletterBanner from './components/NewsletterBanner';

// Route-level code splitting — each page loads only when navigated to
const Home = lazy(() => import('./pages/Home'));
const SeoAudit = lazy(() => import('./pages/SeoAudit'));
const GenerativeContent = lazy(() => import('./pages/GenerativeContent'));
const CrmAutomation = lazy(() => import('./pages/CrmAutomation'));
const SocialMedia = lazy(() => import('./pages/SocialMedia'));
const RagSystems = lazy(() => import('./pages/RagSystems'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  useEffect(() => {
    captureUTMSession();
    // Register GSAP ScrollTrigger only once, after initial paint
    import('gsap').then(({ default: gsap }) =>
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
      })
    );
    const cleanup = initScrollDepthTracking();
    return cleanup;
  }, []);

  return (
    <HelmetProvider>
      <div className="layout-main-wrapper">
        {/* Global CSS Noise Overlay */}
        <svg className="noise-overlay pointer-events-none fixed inset-0 z-50 h-full w-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        <Navbar />

        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/systems/seo-audit" element={<SeoAudit />} />
            <Route path="/systems/generative-content" element={<GenerativeContent />} />
            <Route path="/systems/crm-automation" element={<CrmAutomation />} />
            <Route path="/systems/social-media" element={<SocialMedia />} />
            <Route path="/systems/rag-systems" element={<RagSystems />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>

        <NewsletterBanner />
        <Footer />
        <NewsletterPopup />
      </div>
    </HelmetProvider>
  );
}
