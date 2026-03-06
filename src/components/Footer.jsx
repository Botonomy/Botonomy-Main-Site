import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#050505] pt-24 pb-12 px-6 md:px-16 rounded-t-[4rem] relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

                <div className="flex flex-col gap-6 max-w-sm">
                    <span className="font-sans font-bold text-3xl text-background tracking-tight">Botonomy</span>
                    <p className="font-sans text-background/50 text-sm leading-relaxed">
                        Revenue-generating automation systems that turn fragmented marketing efforts into scalable growth infrastructure.
                    </p>

                    <div className="mt-4 flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="font-mono text-[10px] text-green-500/80 uppercase tracking-widest font-bold">Systems: Fully Operational</span>
                        <span className="font-mono text-[10px] text-white/30 ml-2 border-l border-white/10 pl-3 hidden sm:inline-block">Latency: 14ms</span>
                    </div>
                </div>

                <div className="flex gap-16 md:gap-24">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-sans font-bold text-white mb-2 text-sm">Protocol</h4>
                        <a href="#features" className="font-sans text-sm text-white/50 hover:text-white transition-colors">Systems</a>
                        <a href="#manifesto" className="font-sans text-sm text-white/50 hover:text-white transition-colors">Manifesto</a>
                        <a href="#architecture" className="font-sans text-sm text-white/50 hover:text-white transition-colors">Architecture</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-sans font-bold text-white mb-2 text-sm">Connect</h4>
                        <a href="#" className="font-sans text-sm text-white/50 hover:text-white transition-colors">Deploy</a>
                        <a href="#" className="font-sans text-sm text-white/50 hover:text-white transition-colors">Audit</a>
                        <a href="#" className="font-sans text-sm text-white/50 hover:text-white transition-colors">Twitter</a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="font-sans text-xs text-white/30">
                    © {new Date().getFullYear()} Botonomy AI. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="font-sans text-xs text-white/30 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="font-sans text-xs text-white/30 hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
