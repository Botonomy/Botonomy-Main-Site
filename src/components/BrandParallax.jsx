import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Eagerly load all SVGs as raw strings so they can be rendered inline
const svgModules = import.meta.glob('../assets/logos/*.svg', { query: '?raw', import: 'default', eager: true });

function getSvgRaw(url) {
    const filename = url.split('/').pop();
    return svgModules[`../assets/logos/${filename}`] || null;
}

export default function BrandParallax({ title, subtitle, bgImage, logos }) {
    const containerRef = useRef(null);
    const bgRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Background Parallax
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

            // Content fade up
            gsap.from(contentRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });

            // Stagger logos
            gsap.from(".brand-logo", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out"
            });

            // Critical fix for ScrollTrigger position calculation
            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => ScrollTrigger.refresh());
        }, containerRef);
        return () => ctx.revert();
    }, [logos]);

    return (
        <section ref={containerRef} className="section-brand-parallax">
            {/* Background Parallax Texture */}
            <div className="ui-brand-parallax-bg">
                <div ref={bgRef} className="ui-brand-parallax-img-wrapper">
                    <img
                        src={bgImage}
                        alt="Abstract integration background"
                        className="ui-brand-parallax-img"
                    />
                </div>
                <div className="ui-brand-parallax-overlay"></div>
            </div>

            <div className="relative z-10 layout-content-width flex flex-col items-center justify-center text-center">
                <div ref={contentRef} className="mb-16">
                    <h2 className="text-hook-title !text-background !max-w-3xl !mx-auto">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-body-standard !text-background/60 !max-w-2xl !mx-auto">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Avant Garde Logo Grid */}
                <div className="ui-brand-logo-grid">
                    {logos.map((logo, index) => {
                        const rawSvg = getSvgRaw(logo.url);
                        return (
                            <div key={index} className="brand-logo ui-brand-logo-item">
                                {rawSvg ? (
                                    <div
                                        className="ui-brand-logo-img"
                                        dangerouslySetInnerHTML={{ __html: rawSvg }}
                                        aria-label={logo.name}
                                        role="img"
                                    />
                                ) : (
                                    <img src={logo.url} alt={logo.name} className="ui-brand-logo-img" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
