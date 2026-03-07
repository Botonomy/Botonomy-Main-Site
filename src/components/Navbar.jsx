import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [systemsDropdownOpen, setSystemsDropdownOpen] = useState(false);
    const location = useLocation();

    // Determine if we are on the homepage to handle hash links properly, 
    // though in a full multi-page app, you might route to /#section 
    // or just use / for home and /systems/x for others.
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const systemsLinks = [
        { name: "SEO Audit", path: "/systems/seo-audit" },
        { name: "Generative Content", path: "/systems/generative-content" },
        { name: "CRM Automation", path: "/systems/crm-automation" },
        { name: "Social Content", path: "/systems/social-media" },
        { name: "RAG Systems", path: "/systems/rag-systems" },
    ];

    return (
        <nav className={`ui-navbar-pill ${scrolled ? 'ui-navbar-scrolled' : 'ui-navbar-transparent'} transition-all duration-300`}>
            <div className="flex items-center gap-2">
                <Link to="/" className="font-sans font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
                    Botonomy
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                {/* Systems Dropdown */}
                <div
                    className="relative"
                    onMouseEnter={() => setSystemsDropdownOpen(true)}
                    onMouseLeave={() => setSystemsDropdownOpen(false)}
                >
                    <button className="flex items-center gap-1 hover:-translate-y-[1px] transition-all py-2">
                        Systems <ChevronDown size={14} className={`transition-transform duration-300 ${systemsDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-2 rounded-2xl bg-[#4E1380]/30 text-white border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 origin-top ${systemsDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                        <div className="flex flex-col gap-1">
                            {systemsLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="px-4 py-3 rounded-xl transition-colors flex items-center justify-between group hover:bg-white/10 text-white/80 hover:text-white"
                                >
                                    <span>{link.name}</span>
                                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-mono text-xs text-white/60">→</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <Link to={isHome ? "#manifesto" : "/#manifesto"} className="hover:-translate-y-[1px] transition-all">Manifesto</Link>
                <Link to={isHome ? "#architecture" : "/#architecture"} className="hover:-translate-y-[1px] transition-all">Architecture</Link>
                <Link to={isHome ? "#pricing" : "/#pricing"} className="hover:-translate-y-[1px] transition-all">Plans</Link>
            </div>

            <div className="hidden md:block">
                <a href="https://calendar.app.google/TtZARGvo78TCAzHJ6" target="_blank" rel="noopener noreferrer" className="interactive-button-accent !px-6 !py-2.5">
                    <span className="interactive-button-gradient-fill"></span>
                    <span className="relative z-10 flex items-center gap-2 !text-sm">
                        Book a call
                    </span>
                </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-[#4E1380]/30 text-white backdrop-blur-2xl border border-white/10 p-4 rounded-[2rem] shadow-2xl flex flex-col gap-4 max-h-[80vh] overflow-y-auto z-[60]">
                    <div className="px-4 py-2 font-bold uppercase tracking-widest text-xs text-white/40">Systems</div>
                    <div className="flex flex-col gap-2 pl-4 pr-2 border-l border-white/10 ml-4 mb-4">
                        {systemsLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="py-2 opacity-80 hover:opacity-100 transition-opacity"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <Link to={isHome ? "#manifesto" : "/#manifesto"} onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl transition-colors hover:bg-white/10">Manifesto</Link>
                    <Link to={isHome ? "#architecture" : "/#architecture"} onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl transition-colors hover:bg-white/10">Architecture</Link>
                    <Link to={isHome ? "#pricing" : "/#pricing"} onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl transition-colors hover:bg-white/10">Plans</Link>
                    <a href="https://calendar.app.google/TtZARGvo78TCAzHJ6" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#FF4D4D] to-[#FF8A00] py-3 rounded-xl font-bold mt-2 text-center text-background">Book a call</a>
                </div>
            )}
        </nav>
    );
}
