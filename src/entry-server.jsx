import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsletterBanner from './components/NewsletterBanner';
// Eager imports — React.lazy() renders Suspense fallback in renderToString,
// defeating the purpose of SSG. Eager imports ensure full HTML is pre-rendered.
import Home from './pages/Home';
import SeoAudit from './pages/SeoAudit';
import GenerativeContent from './pages/GenerativeContent';
import CrmAutomation from './pages/CrmAutomation';
import SocialMedia from './pages/SocialMedia';
import RagSystems from './pages/RagSystems';
import Contact from './pages/Contact';

export function render(url) {
    const helmetContext = {};

    const html = renderToString(
        <HelmetProvider context={helmetContext}>
            <StaticRouter location={url}>
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
                        <Route path="/"                          element={<Home />} />
                        <Route path="/systems/seo-audit"         element={<SeoAudit />} />
                        <Route path="/systems/generative-content" element={<GenerativeContent />} />
                        <Route path="/systems/crm-automation"   element={<CrmAutomation />} />
                        <Route path="/systems/social-media"     element={<SocialMedia />} />
                        <Route path="/systems/rag-systems"      element={<RagSystems />} />
                        <Route path="/contact"                  element={<Contact />} />
                        <Route path="*"                         element={<Navigate to="/" replace />} />
                    </Routes>

                    <NewsletterBanner />
                    <Footer />
                </div>
            </StaticRouter>
        </HelmetProvider>
    );

    const { helmet } = helmetContext;
    return { html, helmet, helmetContext };
}
