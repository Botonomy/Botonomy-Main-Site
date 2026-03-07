import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SeoAudit from './pages/SeoAudit';
import GenerativeContent from './pages/GenerativeContent';
import CrmAutomation from './pages/CrmAutomation';
import SocialMedia from './pages/SocialMedia';
import RagSystems from './pages/RagSystems';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <Router>
      <div className="layout-main-wrapper">
        {/* Global CSS Noise Overlay */}
        <svg className="noise-overlay pointer-events-none fixed inset-0 z-50 h-full w-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/systems/seo-audit" element={<SeoAudit />} />
          <Route path="/systems/generative-content" element={<GenerativeContent />} />
          <Route path="/systems/crm-automation" element={<CrmAutomation />} />
          <Route path="/systems/social-media" element={<SocialMedia />} />
          <Route path="/systems/rag-systems" element={<RagSystems />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
