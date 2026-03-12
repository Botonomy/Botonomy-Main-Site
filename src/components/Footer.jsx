import React, { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subStatus, setSubStatus] = useState('idle');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;
        setSubStatus('sending');
        try {
            const res = await fetch('https://webhooks.botonomy.ai/webhook/newsletter-subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'footer' }),
            });
            setSubStatus(res.ok ? 'success' : 'error');
        } catch {
            setSubStatus('error');
        }
    };

    return (
        <footer className="bg-[#050505] pt-24 pb-12 px-6 md:px-16 rounded-t-[4rem] relative z-20 -mt-16">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

                    <div className="flex flex-col gap-6 max-w-sm">
                        <span className="font-sans font-bold text-3xl text-background tracking-tight">Botonomy</span>
                        <p className="font-sans text-background/50 text-sm leading-relaxed">
                            Revenue-generating automation systems that turn fragmented marketing efforts into scalable growth infrastructure.
                        </p>

                        <div className="mt-1 flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="font-mono text-[10px] text-green-500/80 uppercase tracking-widest font-bold">Systems: Fully Operational</span>
                            <span className="font-mono text-[10px] text-white/30 ml-2 border-l border-white/10 pl-3 hidden sm:inline-block">Latency: 14ms</span>
                        </div>

                        <div className="mt-2">
                            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-3">Weekly automation insights</p>
                            {subStatus === 'success' ? (
                                <p className="font-mono text-[10px] text-green-500/80 uppercase tracking-widest">You're in. ✓</p>
                            ) : (
                                <form onSubmit={handleSubscribe} className="flex gap-2">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className="flex-1 min-w-0 px-4 py-2.5 bg-white/5 border border-white/10 rounded-full font-sans text-xs text-white placeholder:text-white/25 focus:outline-none focus:border-white/25 transition-colors"
                                    />
                                    <button
                                        type="submit"
                                        disabled={subStatus === 'sending'}
                                        className="shrink-0 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#FF8A00] font-sans text-xs font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                                    >
                                        {subStatus === 'sending' ? '…' : '→'}
                                    </button>
                                </form>
                            )}
                            {subStatus === 'error' && (
                                <p className="font-mono text-[10px] text-[#FF4D4D] mt-1">Something went wrong. Try again.</p>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-16 md:gap-24">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-sans font-bold text-white mb-2 text-sm uppercase tracking-widest opacity-50">Protocol</h4>
                            <a href="/#features" className="text-body-standard !text-sm !text-white/50 hover:!text-white transition-colors">Systems</a>
                            <a href="/#manifesto" className="text-body-standard !text-sm !text-white/50 hover:!text-white transition-colors">Manifesto</a>
                            <a href="/#architecture" className="text-body-standard !text-sm !text-white/50 hover:!text-white transition-colors">Architecture</a>
                            <a href="/#pricing" className="text-body-standard !text-sm !text-white/50 hover:!text-white transition-colors">Pricing</a>
                            <a href="https://www.botonomy.ai/blog/" className="text-body-standard !text-sm !text-white/50 hover:!text-white transition-colors">Blog</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-sans font-bold text-white mb-2 text-sm uppercase tracking-widest opacity-50">Connect</h4>
                            <a href="https://calendar.app.google/TtZARGvo78TCAzHJ6" target="_blank" rel="noopener noreferrer" className="text-body-standard !text-sm !text-white/50 hover:!text-white transition-colors">Book a call</a>
                            <a href="/contact" className="text-body-standard !text-sm !text-white/50 hover:!text-white transition-colors">Contact</a>
                            <a href="https://www.linkedin.com/in/martinkellyseo/" target="_blank" rel="noopener noreferrer" className="text-body-standard !text-sm !text-white/50 hover:!text-white transition-colors">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest">
                        © {new Date().getFullYear()} Botonomy AI. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="/privacy-policy" className="font-mono text-[10px] text-white/30 hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</a>
                        <a href="/terms" className="font-mono text-[10px] text-white/30 hover:text-white transition-colors uppercase tracking-widest">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
