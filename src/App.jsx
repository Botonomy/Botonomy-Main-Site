import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Manifesto from './components/Manifesto';
import Architecture from './components/Architecture';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <div className="relative w-full overflow-hidden bg-background text-dark font-sans">
      {/* Global CSS Noise Overlay */}
      <svg className="noise-overlay pointer-events-none fixed inset-0 z-50 h-full w-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <Navbar />
      <Hero />
      <Features />
      <Manifesto />
      <Architecture />
      <Pricing />
      <Footer />
    </div>
  );
}
