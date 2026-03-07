import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Check } from 'lucide-react';

export default function Pricing() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".pricing-card", {
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

    const ButtonBase = ({ children, primary }) => (
        <button className={`w-full relative overflow-hidden px-8 py-4 rounded-[2rem] font-sans text-sm font-bold transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] group ${primary ? 'text-background' : 'text-primary bg-primary/5 hover:bg-primary/10'}`}>
            {primary && <span className="absolute inset-0 bg-gradient-to-r from-[#FF4D4D] to-[#FF8A00] transition-transform duration-500 group-hover:scale-110"></span>}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );

    return (
        <section ref={containerRef} className="section-hook !py-32" id="pricing">
            <div className="layout-content-width layout-page-padding">
                <div className="mb-20 text-center max-w-2xl mx-auto">
                    <h2 className="text-features-title">
                        Architectural <span className="font-drama italic text-accent-start">Plans.</span>
                    </h2>
                    <p className="text-body-standard">
                        Select the growth infrastructure that scales with your operational demands.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                    {/* Tier 1 */}
                    <div className="pricing-card ui-pricing-card">
                        <h3 className="text-pricing-title">Growth Automations</h3>
                        <p className="font-sans text-sm text-primary/60 mb-8">For agencies scaling their first orchestrated workflows.</p>
                        <div className="text-pricing-price">$2,500<span className="text-sm text-primary/40 font-sans">/mo</span></div>

                        <ul className="flex flex-col gap-4 mb-10">
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start" size={20} /> Workflow auditing</li>
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start" size={20} /> 5 Custom AI triggers</li>
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start" size={20} /> Basic data enrichment</li>
                        </ul>
                        <ButtonBase>Deploy Basic</ButtonBase>
                    </div>

                    {/* Tier 2 (Highlighted) */}
                    <div className="pricing-card ui-pricing-card-featured">
                        <div className="absolute top-0 right-10 -translate-y-1/2 bg-gradient-to-r from-accent-start to-accent-end text-background text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                            Most Deployed
                        </div>
                        <h3 className="text-pricing-title-featured">Intelligent Systems</h3>
                        <p className="font-sans text-sm text-background/60 mb-8">End-to-end ecosystems for predictable revenue generation.</p>
                        <div className="text-pricing-price-featured">$6,800<span className="text-sm text-background/40 font-sans">/mo</span></div>

                        <ul className="flex flex-col gap-4 mb-10">
                            <li className="flex gap-3 text-sm text-background/90"><Check className="text-accent-start" size={20} /> Programmatic SEO infra</li>
                            <li className="flex gap-3 text-sm text-background/90"><Check className="text-accent-start" size={20} /> Unlimited automated agents</li>
                            <li className="flex gap-3 text-sm text-background/90"><Check className="text-accent-start" size={20} /> Client acquisition pipelines</li>
                            <li className="flex gap-3 text-sm text-background/90"><Check className="text-accent-start" size={20} /> Priority system monitoring</li>
                        </ul>
                        <ButtonBase primary>Initialize Core</ButtonBase>
                    </div>

                    {/* Tier 3 */}
                    <div className="pricing-card ui-pricing-card">
                        <h3 className="text-pricing-title">AI Enterprise</h3>
                        <p className="font-sans text-sm text-primary/60 mb-8">Custom models and deep operational integration.</p>
                        <div className="text-pricing-price">Custom</div>

                        <ul className="flex flex-col gap-4 mb-10">
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start" size={20} /> Dedicated orchestrator</li>
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start" size={20} /> Private LLM inference</li>
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start" size={20} /> Custom data scraping</li>
                        </ul>
                        <ButtonBase>Book an Audit</ButtonBase>
                    </div>

                </div>
            </div>
        </section>
    );
}
