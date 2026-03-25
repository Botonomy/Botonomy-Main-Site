import React, { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animation 1: Rotating Neural Network
const NeuralNetSim = () => {
    const container = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".ring-1", { rotation: 360, transformOrigin: "center", duration: 15, repeat: -1, ease: "none" });
            gsap.to(".ring-2", { rotation: -360, transformOrigin: "center", duration: 25, repeat: -1, ease: "none" });
            gsap.to(".node-dot", { scale: 1.5, opacity: 0.5, duration: 1.5, repeat: -1, yoyo: true, stagger: { amount: 2, from: "random" } });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className="ui-arch-sim-container">
            <svg className="w-full h-full absolute inset-0 max-w-sm mx-auto opacity-60" viewBox="0 0 200 200">
                <g className="ring-1">
                    <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255, 77, 77, 0.2)" strokeWidth="1" strokeDasharray="4 8" />
                    <circle cx="100" cy="40" r="4" fill="#FF4D4D" className="node-dot" />
                    <circle cx="152" cy="70" r="3" fill="#FF4D4D" className="node-dot" />
                    <circle cx="152" cy="130" r="5" fill="#FF4D4D" className="node-dot" />
                    <circle cx="100" cy="160" r="3" fill="#FF4D4D" className="node-dot" />
                    <circle cx="48" cy="130" r="4" fill="#FF4D4D" className="node-dot" />
                    <circle cx="48" cy="70" r="3" fill="#FF4D4D" className="node-dot" />
                </g>
                <g className="ring-2">
                    <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(255, 138, 0, 0.3)" strokeWidth="1" strokeDasharray="12 4" />
                    <circle cx="100" cy="60" r="2" fill="#FF8A00" className="node-dot" />
                    <circle cx="135" cy="80" r="3" fill="#FF8A00" className="node-dot" />
                    <circle cx="135" cy="120" r="2" fill="#FF8A00" className="node-dot" />
                    <circle cx="100" cy="140" r="3" fill="#FF8A00" className="node-dot" />
                    <circle cx="65" cy="120" r="2" fill="#FF8A00" className="node-dot" />
                    <circle cx="65" cy="80" r="4" fill="#FF8A00" className="node-dot" />
                </g>
                <circle cx="100" cy="100" r="10" fill="url(#coreGradient)" className="node-dot" />
                <defs>
                    <radialGradient id="coreGradient">
                        <stop offset="0%" stopColor="#FFF" />
                        <stop offset="100%" stopColor="#FF4D4D" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
};

// Animation 2: Data Parser Scanning
const DataParserSim = () => {
    const container = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1 });
            tl.to(".laser-line", { y: 280, duration: 2, ease: "power1.inOut" })
                .to(".laser-line", { y: 20, duration: 2, ease: "power1.inOut" });

            gsap.to(".data-block", {
                opacity: 1,
                duration: 0.1,
                stagger: { amount: 1.5, grid: [5, 4], from: "random" },
                repeat: -1,
                yoyo: true,
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className="ui-arch-sim-container !p-8">
            <div className="w-full h-full relative grid grid-cols-4 gap-2 opacity-50">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="data-block bg-white/10 rounded h-8 opacity-20"></div>
                ))}
                <div className="laser-line absolute left-0 right-0 h-0.5 bg-accent-start shadow-[0_0_15px_rgba(255,77,77,0.8)] z-10 top-[20px]"></div>
            </div>
        </div>
    );
};

// Animation 3: System Health Monitor
const SystemMonitorSim = () => {
    const container = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".ekg-path", {
                strokeDashoffset: 0,
                duration: 2.5,
                ease: "none",
                repeat: -1
            });

            gsap.to(".load-bar", {
                scaleX: () => Math.random() * 0.8 + 0.2,
                duration: 0.4,
                transformOrigin: "left",
                repeat: -1,
                ease: "steps(4)",
                stagger: 0.1
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className="ui-arch-sim-container !flex-col !justify-center !gap-8 !p-8">
            <svg className="w-full h-24" viewBox="0 0 400 100" preserveAspectRatio="none">
                <path
                    className="ekg-path"
                    d="M0,50 L100,50 L120,20 L140,80 L160,50 L300,50 L320,10 L340,90 L360,50 L400,50"
                    fill="none"
                    stroke="#FF8A00"
                    strokeWidth="3"
                    strokeDasharray="400"
                    strokeDashoffset="400"
                    strokeLinejoin="round"
                />
            </svg>
            <div className="flex flex-col gap-2 w-full max-w-xs mx-auto opacity-70">
                <div className="flex items-center gap-4 text-xs font-mono text-white/50"><span className="w-12">CPU</span><div className="flex-1 h-2 bg-white/10 rounded overflow-hidden"><div className="load-bar w-full h-full bg-accent-start transform origin-left"></div></div></div>
                <div className="flex items-center gap-4 text-xs font-mono text-white/50"><span className="w-12">MEM</span><div className="flex-1 h-2 bg-white/10 rounded overflow-hidden"><div className="load-bar w-full h-full bg-accent-end transform origin-left"></div></div></div>
                <div className="flex items-center gap-4 text-xs font-mono text-white/50"><span className="w-12">NET</span><div className="flex-1 h-2 bg-white/10 rounded overflow-hidden"><div className="load-bar w-full h-full bg-[#7B61FF] transform origin-left"></div></div></div>
            </div>
        </div>
    );
};


export default function Architecture() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.arch-card');

            cards.forEach((card, i) => {
                if (i === 0) return; // Skip the first card

                const prevCard = cards[i - 1];

                ScrollTrigger.create({
                    trigger: card,
                    start: "top top+=100", // Start when the top of the card hits 100px from top of viewport
                    end: "top top",
                    scrub: true,
                    animation: gsap.to(prevCard, {
                        scale: 0.9,
                        opacity: 0.5,
                        filter: "blur(10px)",
                        ease: "none"
                    })
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const steps = [
        {
            num: "01",
            title: "System Audit",
            desc: "We analyze your existing workflows to identify manual bottlenecks and data fragmentation.",
            Sim: NeuralNetSim
        },
        {
            num: "02",
            title: "Architecture Build",
            desc: "Deploying AI-native SEO frameworks and automated pipelines tailored to your operational stack.",
            Sim: DataParserSim
        },
        {
            num: "03",
            title: "Predictable Scale",
            desc: "Turning processed data into ranked content, qualified traffic, and autonomous revenue generation.",
            Sim: SystemMonitorSim
        }
    ];

    return (
        <section ref={containerRef} className="section-architecture" id="architecture">
            <div className="layout-content-width">
                <div className="mb-20">
                    <h2 className="text-features-title !text-background">
                        Deployment <span className="font-drama italic text-accent-start">Protocol.</span>
                    </h2>
                    <p className="text-body-standard !text-background/60 !max-w-xl">
                        Our step-by-step methodology building end-to-end automation ecosystems.
                    </p>
                </div>

                <div className="relative">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="arch-card ui-arch-card"
                            style={{ zIndex: steps.length - idx }}
                        >

                            <div className="flex-1 flex flex-col gap-6">
                                <span className="text-arch-card-num">{step.num}</span>
                                <h3 className="text-arch-card-title">
                                    {step.title}
                                </h3>
                                <p className="text-arch-card-body">
                                    {step.desc}
                                </p>
                            </div>

                            <div className="flex-1 w-full order-first md:order-last">
                                <step.Sim />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
