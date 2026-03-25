import React, { useState } from 'react';

const STORAGE_KEY = 'botonomy_newsletter_done';

export default function NewsletterBanner() {
    const already = typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY);
    const [email, setEmail]   = useState('');
    const [status, setStatus] = useState(already ? 'subscribed' : 'idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;
        setStatus('sending');
        try {
            const res = await fetch('https://webhooks.botonomy.ai/webhook/newsletter-subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'banner' }),
            });
            if (res.ok) {
                setStatus('success');
                localStorage.setItem(STORAGE_KEY, '1');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section className="bg-[#121212] py-16 px-6 md:px-16">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">— Weekly dispatch —</span>
                <h2 className="font-sans font-bold text-2xl md:text-3xl text-white tracking-tight leading-tight">
                    Automation insights that{' '}
                    <span className="bg-gradient-to-r from-[#FF4D4D] to-[#FF8A00] bg-clip-text text-transparent">
                        actually move the needle.
                    </span>
                </h2>
                <p className="font-sans text-white/45 text-sm leading-relaxed max-w-md">
                    No fluff. No filler. Just what's working in AI-driven marketing this week.
                </p>

                {(status === 'success' || status === 'subscribed') ? (
                    <div className="flex items-center gap-2 px-6 py-3 bg-green-500/15 border border-green-500/30 rounded-full">
                        <span className="text-green-400 font-bold text-lg">✓</span>
                        <span className="font-sans font-semibold text-green-400 text-sm">
                            {status === 'subscribed' ? "You're already on the list." : "See you next week!"}
                        </span>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="you@company.com"
                            className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-sans text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/25 transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="px-6 py-3 rounded-full font-sans text-sm font-bold text-white transition-all duration-300 disabled:opacity-60 whitespace-nowrap"
                            style={{ background: 'linear-gradient(to right, #FF4D4D, #FF8A00)' }}
                        >
                            {status === 'sending' ? 'Subscribing…' : 'Subscribe →'}
                        </button>
                    </form>
                )}

                {status === 'error' && (
                    <p className="font-mono text-[10px] text-[#FF4D4D]">Something went wrong. Try again.</p>
                )}

                <p className="font-mono text-[9px] text-white/20 uppercase tracking-wider">No spam. Unsubscribe anytime.</p>
            </div>
        </section>
    );
}
