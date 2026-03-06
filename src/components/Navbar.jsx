import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-[2rem] w-[92%] max-w-6xl transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-2xl border border-dark/10 text-primary shadow-xl' : 'bg-transparent border border-transparent text-background'}`}>
            <div className="flex items-center gap-2">
                <span className="font-sans font-bold text-xl tracking-tight">Botonomy</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                <a href="#features" className="hover:-translate-y-[1px] transition-transform">Systems</a>
                <a href="#manifesto" className="hover:-translate-y-[1px] transition-transform">Manifesto</a>
                <a href="#architecture" className="hover:-translate-y-[1px] transition-transform">Architecture</a>
                <a href="#pricing" className="hover:-translate-y-[1px] transition-transform">Plans</a>
            </div>

            <div className="hidden md:block">
                <button className="relative overflow-hidden px-6 py-2.5 rounded-[2rem] font-sans text-sm font-bold text-background transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] group">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#FF4D4D] to-[#FF8A00] transition-transform duration-500 group-hover:scale-110"></span>
                    <span className="relative z-10 flex items-center gap-2">
                        Book a call
                    </span>
                </button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {mobileMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-primary/95 backdrop-blur-xl border border-white/10 p-4 rounded-[2rem] flex flex-col gap-4 text-background">
                    <a href="#features" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2">Systems</a>
                    <a href="#manifesto" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2">Manifesto</a>
                    <a href="#architecture" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2">Architecture</a>
                    <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2">Plans</a>
                    <button className="bg-gradient-to-r from-[#FF4D4D] to-[#FF8A00] py-3 rounded-xl font-bold mt-2">Book a call</button>
                </div>
            )}
        </nav>
    );
}
