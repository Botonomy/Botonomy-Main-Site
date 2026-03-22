import React, { useState, useEffect } from 'react';

const STORAGE_KEY = 'botonomy_newsletter_done';
const SESSION_KEY = 'botonomy_popup_shown';
const DELAY_MS    = 4000;

export default function NewsletterPopup() {
    const [visible, setVisible]   = useState(false);
    const [form, setForm]         = useState({ firstName: '', lastName: '', email: '' });
    const [status, setStatus]     = useState('idle'); // idle | sending | success | error

    useEffect(() => {
        if (localStorage.getItem(STORAGE_KEY)) return;
        if (sessionStorage.getItem(SESSION_KEY)) return;
        const t = setTimeout(() => setVisible(true), DELAY_MS);
        return () => clearTimeout(t);
    }, []);

    const handleClose = () => {
        sessionStorage.setItem(SESSION_KEY, '1');
        setVisible(false);
    };

    const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.email || !form.firstName) return;
        setStatus('sending');
        try {
            const res = await fetch('https://webhooks.botonomy.ai/webhook/newsletter-subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: form.email,
                    name: `${form.firstName} ${form.lastName}`.trim(),
                    source: 'popup',
                }),
            });
            if (res.ok) {
                setStatus('success');
                localStorage.setItem(STORAGE_KEY, '1');
                setTimeout(() => setVisible(false), 2800);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-md bg-[#121212] rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/10 flex flex-col gap-6 animate-[fadeUp_0.4s_ease_forwards]">

                {/* Close */}
                <button
                    onClick={handleClose}
                    aria-label="Close"
                    className="absolute top-5 right-5 text-white/30 hover:text-white transition-colors"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>

                {status === 'success' ? (
                    <div className="flex flex-col items-center gap-4 py-6 text-center">
                        <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-xl">✓</div>
                        <h3 className="font-sans font-bold text-2xl text-white tracking-tight">See you next week!</h3>
                        <p className="font-sans text-white/50 text-sm leading-relaxed">You're on the list. Expect sharp, no-fluff automation insights every week.</p>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col gap-2">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">— Weekly dispatch —</span>
                            <h3 className="font-sans font-bold text-2xl md:text-3xl text-white tracking-tight leading-tight">
                                Automation insights that<br />
                                <span className="bg-gradient-to-r from-[#FF4D4D] to-[#FF8A00] bg-clip-text text-transparent">actually move the needle.</span>
                            </h3>
                            <p className="font-sans text-white/45 text-sm leading-relaxed">Sharp AI marketing moves. Delivered every week.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-mono text-[9px] font-bold uppercase tracking-widest text-white/30">First name *</label>
                                    <input
                                        type="text" name="firstName" required
                                        value={form.firstName} onChange={handleChange}
                                        placeholder="First"
                                        className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl font-sans text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/25 transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-mono text-[9px] font-bold uppercase tracking-widest text-white/30">Last name</label>
                                    <input
                                        type="text" name="lastName"
                                        value={form.lastName} onChange={handleChange}
                                        placeholder="Last"
                                        className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl font-sans text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/25 transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="font-mono text-[9px] font-bold uppercase tracking-widest text-white/30">Email *</label>
                                <input
                                    type="email" name="email" required
                                    value={form.email} onChange={handleChange}
                                    placeholder="you@company.com"
                                    className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl font-sans text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/25 transition-colors"
                                />
                            </div>

                            {status === 'error' && (
                                <p className="font-mono text-[10px] text-[#FF4D4D]">Something went wrong. Try again.</p>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-3.5 rounded-full font-sans text-sm font-bold text-white transition-all duration-300 disabled:opacity-60"
                                style={{ background: 'linear-gradient(to right, #FF4D4D, #FF8A00)' }}
                            >
                                {status === 'sending' ? 'Subscribing…' : 'Subscribe →'}
                            </button>

                            <p className="text-center font-mono text-[9px] text-white/20 uppercase tracking-wider">No spam. Unsubscribe anytime.</p>
                        </form>
                    </>
                )}
            </div>

            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
