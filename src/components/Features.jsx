import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

// Card 1 — "Agent Orchestrator"
const AgentOrchestrator = () => {
    const container = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Animate the connection lines drawing themselves
            gsap.to(".flow-line", {
                strokeDashoffset: 0,
                duration: 2,
                ease: "power2.inOut",
                stagger: 0.5,
                repeat: -1,
                yoyo: true
            });

            // Pulse the nodes
            gsap.to(".node", {
                scale: 1.05,
                duration: 1.5,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                stagger: {
                    each: 0.2,
                    from: "random"
                }
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className="relative h-64 w-full bg-primary/40 rounded-2xl flex items-center justify-center overflow-hidden border border-white/5">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path className="flow-line stroke-accent-start/40" d="M20,50 Q40,20 60,50 T100,50" fill="none" strokeWidth="0.5" strokeDasharray="100" strokeDashoffset="100" />
                <path className="flow-line stroke-accent-end/40" d="M0,50 Q20,80 40,50 T80,50" fill="none" strokeWidth="0.5" strokeDasharray="100" strokeDashoffset="100" />
            </svg>

            <div className="absolute flex gap-8 z-10 w-full px-6 justify-between">
                <div className="node bg-dark/80 backdrop-blur border border-white/10 p-3 rounded-xl flex flex-col items-center gap-1 shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-accent-start"></div>
                    <span className="text-[10px] font-mono text-white/70">Scrape</span>
                </div>
                <div className="node bg-dark/80 backdrop-blur border border-white/10 p-3 rounded-xl flex flex-col items-center gap-1 shadow-lg mt-8">
                    <div className="w-2 h-2 rounded-full bg-accent-end"></div>
                    <span className="text-[10px] font-mono text-white/70">Enrich</span>
                </div>
                <div className="node bg-dark/80 backdrop-blur border border-white/10 p-3 rounded-xl flex flex-col items-center gap-1 shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-[#7B61FF]"></div>
                    <span className="text-[10px] font-mono text-white/70">Deploy</span>
                </div>
            </div>
        </div>
    );
};

// Card 2 — "LLM Inference Stream"
const InferenceStream = () => {
    const [text, setText] = useState("");
    const fullText = "> Initializing semantic analysis...\n> Extracting key entities...\n> Generating personalized sequence...\n> [SUCCESS] Frame 1 generated.\n> Awaiting human confirmation...";

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(typingInterval);
                setTimeout(() => { i = 0; setText(""); }, 3000); // Loop
            }
        }, 40);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="relative h-64 w-full bg-[#0A0A0A] rounded-2xl p-6 overflow-hidden border border-white/5 shadow-inner">
            <div className="absolute top-3 right-4 flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-white/50 font-sans font-bold">Live Inference</span>
                <div className="w-1.5 h-1.5 rounded-full bg-accent-start animate-ping"></div>
            </div>
            <pre className="font-mono text-xs text-white/80 whitespace-pre-wrap leading-loose mt-4">
                {text}
                <span className="inline-block w-2.5 h-3 bg-accent-end ml-1 animate-pulse"></span>
            </pre>
        </div>
    );
};

// Card 3 — "Workflow Scheduler"
const WorkflowScheduler = () => {
    const container = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // Scope all selections to this specific container to prevent global DOM conflicts on refresh
            tl.to(container.current.querySelector(".cursor-svg"), { x: 80, y: 40, duration: 0.8, ease: "power2.inOut" })
                .to(container.current.querySelector(".cell-1"), { backgroundColor: "rgba(255, 77, 77, 0.2)", scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 })
                .to(container.current.querySelector(".cursor-svg"), { x: 180, y: 120, duration: 1, ease: "power2.inOut" })
                .to(container.current.querySelector(".cell-2"), { backgroundColor: "rgba(255, 138, 0, 0.2)", scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 })
                .to(container.current.querySelector(".cursor-svg"), { x: 130, y: 180, duration: 0.6, ease: "power2.inOut" })
                .to(container.current.querySelector(".execute-btn"), { scale: 0.95, backgroundColor: "#FF8A00", duration: 0.2, yoyo: true, repeat: 1 })
                .to(container.current.querySelector(".cursor-svg"), { x: 300, y: 200, opacity: 0, duration: 0.5 });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className="relative h-64 w-full bg-primary/40 rounded-2xl p-6 overflow-hidden border border-white/5">
            <svg className="cursor-svg absolute z-20 w-5 h-5 drop-shadow-md" style={{ left: 0, top: 0 }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 3L20 11.5L12 13.5L8.5 21L4 3Z" fill="white" stroke="#1A1A1A" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>

            <div className="grid grid-cols-4 gap-2 h-full pb-8">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className={`cell-${i} border border-white/5 rounded-lg bg-dark/30 transition-colors duration-300`}></div>
                ))}
            </div>

            <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
                <span className="text-[10px] font-mono text-white/40">CRON: 0 0 * * *</span>
                <div className="execute-btn px-4 py-1.5 rounded-full bg-white/10 text-[10px] font-bold tracking-wider uppercase text-white transition-colors duration-300">Execute</div>
            </div>
        </div>
    );
};

export default function Features() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".feature-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-16 bg-background relative z-10 rounded-t-[3rem] -mt-10" id="features">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 max-w-2xl">
                    <h2 className="font-sans font-bold text-4xl tracking-tight text-primary mb-6">
                        Intelligent Automation<br />
                        <span className="font-drama italic text-5xl text-accent-start">Artifacts.</span>
                    </h2>
                    <p className="font-sans text-lg text-primary/70">
                        We eliminate manual bottlenecks by engineering end-to-end automation ecosystems across operations, marketing, and client acquisition.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                    {/* Feature 1 */}
                    <div className="feature-card bg-white p-2 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/5 group hover:-translate-y-2 transition-transform duration-500">
                        <div className="bg-primary rounded-[2rem] p-1 w-full h-full">
                            <AgentOrchestrator />
                            <div className="p-8">
                                <h3 className="font-sans font-bold text-xl text-background mb-3">AI-Native Frameworks</h3>
                                <p className="font-sans text-sm text-background/60 leading-relaxed">
                                    Revenue-generating automation systems that turn fragmented efforts into scalable infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="feature-card bg-white p-2 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/5 group hover:-translate-y-2 transition-transform duration-500">
                        <div className="bg-primary rounded-[2rem] p-1 w-full h-full">
                            <InferenceStream />
                            <div className="p-8">
                                <h3 className="font-sans font-bold text-xl text-background mb-3">Data to Revenue</h3>
                                <p className="font-sans text-sm text-background/60 leading-relaxed">
                                    Transform structural data into ranked content, qualified traffic, and predictable acquisition.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="feature-card bg-white p-2 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/5 group hover:-translate-y-2 transition-transform duration-500">
                        <div className="bg-primary rounded-[2rem] p-1 w-full h-full">
                            <WorkflowScheduler />
                            <div className="p-8">
                                <h3 className="font-sans font-bold text-xl text-background mb-3">End-to-End Ecosystems</h3>
                                <p className="font-sans text-sm text-background/60 leading-relaxed">
                                    Complete eradication of manual processes across your entire operational and marketing stack.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
