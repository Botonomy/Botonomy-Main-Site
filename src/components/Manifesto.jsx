import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Manifesto() {
    const containerRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax Background
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Text 1 Reveal
            gsap.from(text1Ref.current, {
                scrollTrigger: {
                    trigger: text1Ref.current,
                    start: "top 85%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Text 2 Reveal
            gsap.from(text2Ref.current, {
                scrollTrigger: {
                    trigger: text2Ref.current,
                    start: "top 75%",
                },
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-[80vh] flex items-center justify-center py-32 px-6 md:px-16 overflow-hidden bg-primary" id="manifesto">
            {/* Background Parallax Texture */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div ref={bgRef} className="absolute inset-[-20%] w-[140%] h-[140%]">
                    <img
                        src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2564&auto=format&fit=crop"
                        alt="Abstract generative art texture"
                        className="w-full h-full object-cover opacity-30 mix-blend-screen"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary"></div>
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-16 md:gap-24">

                <div ref={text1Ref} className="max-w-2xl">
                    <p className="font-sans font-medium text-2xl md:text-3xl text-background/60 leading-tight">
                        Most businesses run on:
                    </p>
                    <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-background mt-2">
                        fragmented manual bottlenecks.
                    </h2>
                </div>

                <div ref={text2Ref} className="max-w-4xl self-end text-right">
                    <p className="font-sans font-medium text-2xl md:text-3xl text-background/60 leading-tight">
                        We scale with:
                    </p>
                    <h2 className="font-drama italic mt-2 text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-end leading-[0.9]">
                        autonomous agentic growth.
                    </h2>
                </div>

            </div>
        </section>
    );
}
