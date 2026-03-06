import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".hero-element", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.2
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-[100dvh] flex items-end pb-32 px-6 md:px-16 overflow-hidden bg-primary" id="hero">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                    alt="Generative organic tech"
                    className="w-full h-full object-cover opacity-50 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent md:w-3/4"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="max-w-3xl flex flex-col items-start gap-4">
                    <div className="flex flex-col">
                        <h1 className="hero-element font-sans font-extrabold text-5xl md:text-7xl lg:text-[6rem] tracking-tight text-background leading-[1.1]">
                            Growth beyond
                        </h1>
                        <h2 className="hero-element font-drama italic text-7xl md:text-9xl lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-r from-background to-background/50 leading-[0.8] -ml-2">
                            limits.
                        </h2>
                    </div>

                    <p className="hero-element font-sans text-background/80 text-lg md:text-xl max-w-xl mt-6 font-light leading-relaxed">
                        Botonomy.ai builds revenue-generating automation systems that turn fragmented marketing efforts into scalable growth infrastructure.
                    </p>

                    <button className="hero-element mt-10 relative overflow-hidden px-12 py-5 rounded-[2.5rem] font-sans text-lg font-bold text-background transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] group shadow-2xl shadow-accent-start/25">
                        <span className="absolute inset-0 bg-gradient-to-r from-[#FF4D4D] to-[#FF8A00] transition-transform duration-500 group-hover:scale-110"></span>
                        <span className="relative z-10 flex items-center gap-2">
                            Book a call
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
