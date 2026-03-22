import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { trackNavClick, trackBookingIntent, track } from '../utils/analytics';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [systemsDropdownOpen, setSystemsDropdownOpen] = useState(false);
    const [articlesDropdownOpen, setArticlesDropdownOpen] = useState(false);
    const [mobileArticlesOpen, setMobileArticlesOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDropdownOpen = () => {
        if (!systemsDropdownOpen) track('nav_dropdown_open', { dropdown: 'systems' });
        setSystemsDropdownOpen(true);
    };

    const handleArticlesDropdownOpen = () => {
        if (!articlesDropdownOpen) track('nav_dropdown_open', { dropdown: 'articles' });
        setArticlesDropdownOpen(true);
    };

    const handleBookCall = () => {
        trackNavClick('book_call', 'navbar_cta');
        trackBookingIntent('navbar');
    };

    const systemsLinks = [
        { name: "SEO Audit",           path: "/systems/seo-audit" },
        { name: "Generative Content",  path: "/systems/generative-content" },
        { name: "CRM Automation",      path: "/systems/crm-automation" },
        { name: "Social Content",      path: "/systems/social-media" },
        { name: "RAG Systems",         path: "/systems/rag-systems" },
    ];

    const articleSections = [
        { name: "AI News",     path: "/blog/ai-news/" },
        { name: "Automation",  path: "/blog/automation/" },
    ];

    return (
        <nav className={`ui-navbar-pill ${scrolled ? 'ui-navbar-scrolled' : 'ui-navbar-transparent'} transition-all duration-300`}>
            <div className="flex items-center gap-2">
                <Link to="/" className="font-sans font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
                    onClick={() => trackNavClick('home', 'wordmark')}>
                    Botonomy
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                {/* Systems Dropdown */}
                <div
                    className="relative"
                    onMouseEnter={handleDropdownOpen}
                    onMouseLeave={() => setSystemsDropdownOpen(false)}
                >
                    <button className="flex items-center gap-1 hover:-translate-y-[1px] transition-all py-2">
                        Systems <ChevronDown size={14} className={`transition-transform duration-300 ${systemsDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-2 rounded-2xl bg-[#4E1380]/90 text-white border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 origin-top ${systemsDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                        <div className="flex flex-col gap-1">
                            {systemsLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => trackNavClick(link.path, 'systems_dropdown')}
                                    className="px-4 py-3 rounded-xl transition-colors flex items-center justify-between group hover:bg-white/10 text-white/80 hover:text-white"
                                >
                                    <span>{link.name}</span>
                                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-mono text-xs text-white/60">→</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <Link to={isHome ? "#pricing" : "/#pricing"}
                    onClick={() => trackNavClick('pricing', 'main')}
                    className="hover:-translate-y-[1px] transition-all">Plans</Link>
                {/* Articles Mega Menu */}
                <div
                    className="relative"
                    onMouseEnter={handleArticlesDropdownOpen}
                    onMouseLeave={() => setArticlesDropdownOpen(false)}
                >
                    <button className="flex items-center gap-1 hover:-translate-y-[1px] transition-all py-2">
                        Articles <ChevronDown size={14} className={`transition-transform duration-300 ${articlesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <div className={`absolute top-full right-0 mt-2 w-56 p-2 rounded-2xl bg-[#4E1380]/90 text-white border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 origin-top ${articlesDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                        <div className="flex flex-col gap-1">
                            {articleSections.map((section) => (
                                <a
                                    key={section.name}
                                    href={section.path}
                                    onClick={() => trackNavClick(section.path, 'articles_section')}
                                    className="px-4 py-3 rounded-xl transition-colors flex items-center justify-between group hover:bg-white/10 text-white/80 hover:text-white"
                                >
                                    <span>{section.name}</span>
                                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-mono text-xs text-white/60">→</span>
                                </a>
                            ))}
                        </div>
                        <div className="border-t border-white/10 mt-2 pt-2">
                            <a
                                href="/blog/"
                                onClick={() => trackNavClick('/blog', 'articles_all')}
                                className="px-4 py-2 rounded-xl flex items-center justify-between group hover:bg-white/10 transition-colors text-sm text-white/50 hover:text-white"
                            >
                                <span>View all articles</span>
                                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-mono text-xs">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <a href="https://www.botonomy.ai/contact/"
                    onClick={() => trackNavClick('contact', 'main')}
                    className="hover:-translate-y-[1px] transition-all">Contact</a>
            </div>

            <div className="hidden md:block">
                <a href="https://calendar.app.google/TtZARGvo78TCAzHJ6"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleBookCall}
                    className="interactive-button-accent !px-6 !py-2.5">
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
                <div className="absolute top-16 left-0 right-0 bg-[#4E1380]/90 text-white backdrop-blur-2xl border border-white/10 p-4 rounded-[2rem] shadow-2xl flex flex-col gap-4 max-h-[80vh] overflow-y-auto z-[60]">
                    <div className="px-4 py-2 font-bold uppercase tracking-widest text-xs text-white/40">Systems</div>
                    <div className="flex flex-col gap-2 pl-4 pr-2 border-l border-white/10 ml-4 mb-4">
                        {systemsLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => { setMobileMenuOpen(false); trackNavClick(link.path, 'mobile_systems'); }}
                                className="py-2 opacity-80 hover:opacity-100 transition-opacity"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <Link to={isHome ? "#pricing" : "/#pricing"}
                        onClick={() => { setMobileMenuOpen(false); trackNavClick('pricing', 'mobile'); }}
                        className="px-4 py-2 rounded-xl transition-colors hover:bg-white/10">Plans</Link>
                    {/* Articles section */}
                    <button
                        onClick={() => setMobileArticlesOpen(!mobileArticlesOpen)}
                        className="flex items-center justify-between w-full px-4 py-2 rounded-xl transition-colors hover:bg-white/10"
                    >
                        <span>Articles</span>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${mobileArticlesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileArticlesOpen && (
                        <div className="flex flex-col gap-2 pl-4 pr-2 border-l border-white/10 ml-4 mb-2">
                            {articleSections.map((section) => (
                                <a
                                    key={section.name}
                                    href={section.path}
                                    onClick={() => { setMobileMenuOpen(false); trackNavClick(section.path, 'mobile_articles_section'); }}
                                    className="py-2 opacity-80 hover:opacity-100 transition-opacity"
                                >
                                    {section.name}
                                </a>
                            ))}
                            <a
                                href="/blog/"
                                onClick={() => { setMobileMenuOpen(false); trackNavClick('/blog', 'mobile_articles_all'); }}
                                className="py-2 text-sm text-white/50 hover:text-white transition-colors"
                            >
                                View all articles →
                            </a>
                        </div>
                    )}

                    <a href="https://www.botonomy.ai/contact/"
                        onClick={() => { setMobileMenuOpen(false); trackNavClick('contact', 'mobile'); }}
                        className="px-4 py-2 rounded-xl transition-colors hover:bg-white/10 opacity-80 hover:opacity-100">Contact</a>
                    <a href="https://calendar.app.google/TtZARGvo78TCAzHJ6"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => { trackBookingIntent('mobile_nav'); trackNavClick('book_call', 'mobile_cta'); }}
                        className="bg-gradient-to-r from-[#FF4D4D] to-[#FF8A00] py-3 rounded-xl font-bold mt-2 text-center text-background">Book a call</a>
                </div>
            )}
        </nav>
    );
}
