import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".anim-fade-up-hero", {
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
        <section ref={containerRef} className="relative w-full h-[100dvh] flex items-end pb-32 layout-page-padding overflow-hidden bg-primary" id="hero">
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

            <div className="relative z-10 layout-content-width">
                <div className="max-w-3xl flex flex-col items-start gap-4">
                    <div className="flex flex-col">
                        <h1 className="anim-fade-up-hero text-hero-headline !text-5xl md:!text-7xl lg:!text-[6rem]">
                            Growth beyond
                        </h1>
                        <h2 className="anim-fade-up-hero text-hero-drama !text-7xl md:!text-9xl lg:!text-[10rem]">
                            limits.
                        </h2>
                    </div>

                    <p className="anim-fade-up-hero text-hero-description !text-lg md:!text-xl !max-w-xl">
                        Botonomy.ai builds revenue-generating automation systems that turn fragmented marketing efforts into scalable growth infrastructure.
                    </p>

                    <button className="anim-fade-up-hero interactive-button-accent mt-10 !px-12 !py-5">
                        <span className="interactive-button-static-gradient"></span>
                        <span className="relative z-10 flex items-center gap-2 text-lg">
                            Book a call
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
