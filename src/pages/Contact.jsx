import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { trackNavClick } from '../utils/analytics';

const SERVICES = [
    'AI Automation & Integrations',
    'SEO — Technical & On-Page',
    'Content Marketing',
    'Paid Advertising',
    'Creative Design',
    'CRO & Analytics',
    'Outbound Sales',
    'Other',
];

export default function Contact() {
    const pageRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.from('.anim-fade-up', { y: 40, opacity: 0, duration: 1.1, stagger: 0.12, ease: 'power3.out', delay: 0.15 });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;
        setStatus('sending');
        try {
            const res = await fetch('https://webhooks.botonomy.ai/webhook/contact-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, source: 'contact-page' }),
            });
            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', company: '', service: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <div ref={pageRef} className="min-h-screen">

            {/* ── HERO ── */}
            <section className="bg-[#121212] rounded-b-[3rem] pt-36 pb-20 px-6 md:px-16">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="anim-fade-up block font-mono text-[10px] text-white/40 uppercase tracking-[0.22em] mb-5">
                        — Get in touch —
                    </span>
                    <h1 className="anim-fade-up font-sans font-extrabold text-4xl md:text-6xl text-background tracking-tight leading-[1.1] mb-5">
                        Let's build something<br />
                        <em className="font-['Instrument_Serif'] not-italic bg-gradient-to-r from-[#FF4D4D] to-[#FF8A00] bg-clip-text text-transparent">
                            that compounds.
                        </em>
                    </h1>
                    <p className="anim-fade-up font-sans text-background/55 text-lg max-w-lg mx-auto leading-relaxed font-light">
                        Tell us what you're building and we'll show you how to automate it.
                    </p>
                </div>
            </section>

            {/* ── FORM + INFO ── */}
            <section className="py-20 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_400px] gap-12 items-start">

                    {/* Form */}
                    <div className="bg-white rounded-[2.5rem] border border-black/5 shadow-xl shadow-black/5 p-10 md:p-12">
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#FF8A00] flex items-center justify-center text-white text-2xl">
                                    ✓
                                </div>
                                <h3 className="font-sans font-bold text-2xl text-[#121212] tracking-tight">Message received.</h3>
                                <p className="text-[#121212]/55 max-w-xs leading-relaxed">
                                    We'll review your enquiry and get back to you within one business day.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="font-mono text-xs font-bold uppercase tracking-widest text-[#121212]/40 hover:text-[#121212] transition-colors mt-2"
                                >
                                    Send another →
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#121212]/40">Name *</label>
                                        <input
                                            type="text" name="name" required value={form.name} onChange={handleChange}
                                            placeholder="Your name"
                                            className="w-full px-4 py-3 bg-[#F7F5F0] border border-black/8 rounded-xl font-sans text-sm text-[#121212] placeholder:text-[#121212]/30 focus:outline-none focus:border-[#4E1380]/40 transition-colors"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#121212]/40">Email *</label>
                                        <input
                                            type="email" name="email" required value={form.email} onChange={handleChange}
                                            placeholder="martin@company.com"
                                            className="w-full px-4 py-3 bg-[#F7F5F0] border border-black/8 rounded-xl font-sans text-sm text-[#121212] placeholder:text-[#121212]/30 focus:outline-none focus:border-[#4E1380]/40 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#121212]/40">Company</label>
                                        <input
                                            type="text" name="company" value={form.company} onChange={handleChange}
                                            placeholder="Acme Corp"
                                            className="w-full px-4 py-3 bg-[#F7F5F0] border border-black/8 rounded-xl font-sans text-sm text-[#121212] placeholder:text-[#121212]/30 focus:outline-none focus:border-[#4E1380]/40 transition-colors"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#121212]/40">Service</label>
                                        <select
                                            name="service" value={form.service} onChange={handleChange}
                                            className="w-full px-4 py-3 bg-[#F7F5F0] border border-black/8 rounded-xl font-sans text-sm text-[#121212] focus:outline-none focus:border-[#4E1380]/40 transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="">Select a service…</option>
                                            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#121212]/40">Message *</label>
                                    <textarea
                                        name="message" required rows={5} value={form.message} onChange={handleChange}
                                        placeholder="Tell us what you're trying to automate or improve…"
                                        className="w-full px-4 py-3 bg-[#F7F5F0] border border-black/8 rounded-xl font-sans text-sm text-[#121212] placeholder:text-[#121212]/30 focus:outline-none focus:border-[#4E1380]/40 transition-colors resize-none"
                                    />
                                </div>

                                {status === 'error' && (
                                    <p className="text-sm text-[#FF4D4D] font-mono">Something went wrong. Try again or email us directly.</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full py-4 rounded-[2.5rem] font-sans text-sm font-bold text-white transition-all duration-300 disabled:opacity-60 hover:scale-[1.02]"
                                    style={{ background: 'linear-gradient(to right, #FF4D4D, #FF8A00)' }}
                                >
                                    {status === 'sending' ? 'Sending…' : 'Send message →'}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Info sidebar */}
                    <div className="flex flex-col gap-8">

                        {/* Book a call card */}
                        <div className="bg-[#121212] rounded-[2.5rem] p-8 text-white flex flex-col gap-5">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">— Fastest path —</span>
                            <h3 className="font-sans font-bold text-2xl tracking-tight leading-tight">
                                Skip the form.<br />Book a call.
                            </h3>
                            <p className="font-sans text-white/50 text-sm leading-relaxed">
                                30-minute intro call. We'll scope your automation opportunity and walk you through a custom roadmap.
                            </p>
                            <a
                                href="https://calendar.app.google/TtZARGvo78TCAzHJ6"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackNavClick('book_call', 'contact_sidebar')}
                                className="interactive-button-accent inline-flex items-center justify-center"
                            >
                                <span className="interactive-button-static-gradient"></span>
                                <span className="relative z-10 flex items-center gap-2">Book a free call →</span>
                            </a>
                        </div>

                        {/* Direct contact */}
                        <div className="bg-white border border-black/5 rounded-[2rem] p-8 flex flex-col gap-4">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#121212]/35">— Direct —</span>
                            <a
                                href="mailto:martin@botonomy.ai"
                                className="flex items-center gap-3 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#FF8A00] flex items-center justify-center text-white shrink-0">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] text-[#121212]/35 uppercase tracking-wider mb-0.5">Email</p>
                                    <p className="font-sans font-semibold text-sm text-[#121212] group-hover:text-[#FF4D4D] transition-colors">martin@botonomy.ai</p>
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/martinkellyseo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white shrink-0">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                        <rect x="2" y="9" width="4" height="12"/>
                                        <circle cx="4" cy="4" r="2"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] text-[#121212]/35 uppercase tracking-wider mb-0.5">LinkedIn</p>
                                    <p className="font-sans font-semibold text-sm text-[#121212] group-hover:text-[#0A66C2] transition-colors">Martin Kelly</p>
                                </div>
                            </a>
                        </div>

                        {/* Response time */}
                        <div className="flex items-center gap-3 px-5 py-3 bg-white border border-black/5 rounded-full w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#121212]/50">Responds within 1 business day</span>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
