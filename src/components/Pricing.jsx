import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Check } from 'lucide-react';
import { trackPricingCTA, trackPricingView, useSectionTracking } from '../utils/analytics';

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

        const cleanup = useSectionTracking(containerRef, 'pricing');
        return () => { ctx.revert(); cleanup?.(); };
    }, []);

    const ButtonBase = ({ children, primary, href, plan }) => (
        <a href={href || '#contact'} onClick={() => plan && trackPricingCTA(plan)} className={`w-full relative overflow-hidden px-8 py-4 rounded-[2rem] font-sans text-sm font-bold transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] group flex items-center justify-center ${primary ? 'text-background' : 'text-primary bg-primary/5 hover:bg-primary/10'}`}>
            {primary && <span className="absolute inset-0 bg-gradient-to-r from-[#FF4D4D] to-[#FF8A00] transition-transform duration-500 group-hover:scale-110"></span>}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </a>
    );

    return (
        <section ref={containerRef} className="section-hook !py-32" id="pricing">
            <div className="layout-content-width layout-page-padding">
                <div className="mb-20 text-center max-w-2xl mx-auto">
                    <h2 className="text-features-title">
                        Architectural <span id="plans" className="font-drama italic text-accent-start">Plans.</span>
                    </h2>
                    <p className="text-body-standard">
                        Select the growth infrastructure that scales with your operational demands.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                    {/* Tier 1 — Operate */}
                    <div className="pricing-card ui-pricing-card">
                        <h3 className="text-pricing-title">Operate</h3>
                        <p className="font-sans text-sm text-primary/60 mb-8">For growth-stage brands building a serious SEO and automation foundation.</p>
                        <div className="text-pricing-price">$1,895<span className="text-sm text-primary/40 font-sans">/mo</span></div>

                        <ul className="flex flex-col gap-4 mb-10">
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start shrink-0" size={20} /> SEO site audit</li>
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start shrink-0" size={20} /> Technical SEO fixes</li>
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start shrink-0" size={20} /> On-page metadata improvements</li>
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start shrink-0" size={20} /> Content analysis</li>
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start shrink-0" size={20} /> Content strategy</li>
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start shrink-0" size={20} /> Automation systems architecture</li>
                        </ul>
                        <ButtonBase plan="operate">Get Started</ButtonBase>
                    </div>

                    {/* Tier 2 — Accelerate (Featured) */}
                    <div className="pricing-card ui-pricing-card-featured">
                        <div className="absolute top-0 right-10 -translate-y-1/2 bg-gradient-to-r from-accent-start to-accent-end text-background text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                            Most Popular
                        </div>
                        <h3 className="text-pricing-title-featured">Accelerate</h3>
                        <p className="font-sans text-sm text-background/60 mb-8">Full-stack SEO, content, and paid ads — running autonomously every month.</p>
                        <div className="text-pricing-price-featured">$4,500<span className="text-sm text-background/40 font-sans">/mo</span></div>

                        <ul className="flex flex-col gap-4 mb-10">
                            <li className="flex gap-3 text-sm text-background/90"><Check className="text-accent-start shrink-0" size={20} /> Everything in Operate</li>
                            <li className="flex gap-3 text-sm text-background/90"><Check className="text-accent-start shrink-0" size={20} /> Monthly crawl monitoring</li>
                            <li className="flex gap-3 text-sm text-background/90"><Check className="text-accent-start shrink-0" size={20} /> 25 AI-generated articles/month</li>
                            <li className="flex gap-3 text-sm text-background/90"><Check className="text-accent-start shrink-0" size={20} /> Social media content optimisation</li>
                            <li className="flex gap-3 text-sm text-background/90"><Check className="text-accent-start shrink-0" size={20} /> Internal link optimisation</li>
                            <li className="flex gap-3 text-sm text-background/90"><Check className="text-accent-start shrink-0" size={20} /> Competitor keyword gap analysis</li>
                            <li className="flex gap-3 text-sm text-background/90"><Check className="text-accent-start shrink-0" size={20} /> Content erosion report</li>
                            <li className="flex gap-3 text-sm text-background/90"><Check className="text-accent-start shrink-0" size={20} /> Google &amp; Meta ads management</li>
                            <li className="flex gap-3 text-sm text-background/90"><Check className="text-accent-start shrink-0" size={20} /> Backlink audit</li>
                        </ul>
                        <ButtonBase primary plan="accelerate">Get Started</ButtonBase>
                    </div>

                    {/* Tier 3 — Automate */}
                    <div className="pricing-card ui-pricing-card">
                        <h3 className="text-pricing-title">Automate</h3>
                        <p className="font-sans text-sm text-primary/60 mb-8">The complete autonomous marketing department — zero headcount required.</p>
                        <div className="text-pricing-price">Contact Us</div>

                        <ul className="flex flex-col gap-4 mb-10">
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start shrink-0" size={20} /> Everything in Accelerate</li>
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start shrink-0" size={20} /> Full outbound sales systems</li>
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start shrink-0" size={20} /> AI creative production</li>
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start shrink-0" size={20} /> CRO &amp; A/B testing</li>
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start shrink-0" size={20} /> AI automation &amp; integrations</li>
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start shrink-0" size={20} /> Weekly reporting &amp; strategy call</li>
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start shrink-0" size={20} /> Dedicated pipeline customisation</li>
                            <li className="flex gap-3 text-sm text-primary/80"><Check className="text-accent-start shrink-0" size={20} /> SLA: P1 issues resolved in 24–48 hrs</li>
                        </ul>
                        <ButtonBase plan="automate">Get Started</ButtonBase>
                    </div>

                </div>

                {/* Bespoke CTA */}
                <div className="mt-12 text-center">
                    <p className="font-sans text-sm text-primary/50">
                        Need something beyond the standard stack?{' '}
                        <a href="#contact" className="text-primary/80 underline underline-offset-4 hover:text-accent-start transition-colors duration-200">
                            Contact us for bespoke solutions.
                        </a>
                    </p>
                </div>

            </div>
        </section>
    );
}
