import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { AgentOrchestrator, InferenceStream, WorkflowScheduler } from '../components/SystemCards';
import BrandParallax from '../components/BrandParallax';

const crmLogos = [
    { name: "HubSpot", url: "https://cdn.simpleicons.org/hubspot/white" },
    { name: "ClickUp", url: "https://cdn.simpleicons.org/clickup/white" },
    { name: "Monday.com", url: "https://cdn.simpleicons.org/mondaydotcom/white" },
    { name: "Salesforce", url: "https://cdn.simpleicons.org/salesforce/white" }
];

export default function CrmAutomation() {
    const pageRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            gsap.from(".anim-fade-up", { y: 40, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.2 });
            gsap.from(".anim-reveal", {
                scrollTrigger: { trigger: "#hook-section", start: "top 80%" },
                y: 60, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out"
            });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} className="pt-24 min-h-screen">
            <section className="section-hero">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2564&auto=format&fit=crop" alt="Abstract data flow" className="w-full h-full object-cover opacity-40 mix-blend-screen saturate-150 relative top-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
                </div>
                <div className="relative z-10 layout-content-width layout-page-padding">
                    <div className="max-w-3xl flex flex-col items-start gap-4">
                        <div className="flex flex-col">
                            <h1 className="anim-fade-up text-hero-headline">
                                Connections beyond
                            </h1>
                            <h2 className="anim-fade-up text-hero-drama">
                                capacity.
                            </h2>
                        </div>
                        <p className="anim-fade-up text-hero-description">
                            Autonomous CRM workflows that nurture, score, and route leads with flawless algorithmic precision—without human intervention.
                        </p>
                        <button className="anim-fade-up interactive-button-accent mt-10">
                            <span className="interactive-button-static-gradient"></span>
                            <span className="relative z-10 flex items-center gap-2">Automate your CRM</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* HOOK SECTION */}
            <section id="hook-section" className="section-hook layout-page-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="anim-reveal text-hook-title">
                        Pipeline decay is a <span className="font-drama italic text-accent-start">systems failure</span>.
                    </h2>
                    <p className="anim-reveal text-body-standard">
                        When leads slip through the cracks, it isn't human error—it's an architectural flaw. Our autonomous CRM workflows replace manual data entry and generic blast emails with intelligent, hyper-personalized logic that scores, routes, and nurtures prospects simultaneously.
                    </p>
                </div>
            </section>

            {/* SOLUTION 1 */}
            <section className="section-solution-white layout-page-padding">
                <div className="layout-content-width grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="order-2 md:order-1 anim-reveal">
                        <div className="text-label-mono text-accent-start">01 // Triage</div>
                        <h3 className="text-section-title">Intelligent Routing</h3>
                        <p className="text-body-description">
                            Speed to lead dictates conversion. The instant data enters your ecosystem, our agents enrich the company profile, cross-reference intent signals, assign a granular lead score, and route high-value prospects directly to closing infrastructure.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 anim-reveal ui-glass-panel-wrapper">
                        <div className="ui-glass-panel-inner">
                            <AgentOrchestrator labels={["Ingest", "Score", "Route"]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* SOLUTION 2 */}
            <section className="section-solution-dark layout-page-padding">
                <div className="layout-content-width grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="anim-reveal ui-glass-panel-wrapper">
                        <div className="ui-glass-panel-inner">
                            <InferenceStream label="Contact Enrichment" textFeed={"> Monitoring incoming communications...\n> Analyzing lead sentiment...\n> Parsing intent signals...\n> [SUCCESS] Lead priority upgraded.\n> Dispatched to enterprise sales AI."} />
                        </div>
                    </div>
                    <div className="anim-reveal">
                        <div className="text-label-mono text-accent-end">02 // Surveillance</div>
                        <h3 className="text-section-title">Intent Monitoring</h3>
                        <p className="text-body-description">
                            Sales cycles aren't static. We deploy natural language processing to monitor incoming communications, extracting subtle buying signals and behavioral shifts. When a prospect signals readiness, their state is instantly elevated across the entire tech stack.
                        </p>
                    </div>
                </div>
            </section>

            <BrandParallax
                title="Supercharging your existing operations."
                subtitle="We don't force you to migrate. Our agents plug directly into your current CRM surfaces, autonomously managing exactly how data flows between them."
                bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2564&auto=format&fit=crop"
                logos={crmLogos}
            />

            {/* SOLUTION 3 */}
            <section className="section-solution-white layout-page-padding">
                <div className="layout-content-width grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="order-2 md:order-1 anim-reveal">
                        <div className="text-label-mono text-[#7B61FF]">03 // Engagement</div>
                        <h3 className="text-section-title">Persistent Nurturing</h3>
                        <p className="text-body-description">
                            Move away from static drip sequences. We build dynamic logic trees that trigger highly personalized interventions based on user behavior—reacting to link clicks, document views, or prolonged silence to ensure total pipeline coverage.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 anim-reveal ui-glass-panel-wrapper">
                        <div className="ui-glass-panel-inner">
                            <WorkflowScheduler cronLabel="CRON: */15 * * * *" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="section-cta-primary layout-page-padding">
                <div className="max-w-3xl mx-auto anim-reveal">
                    <h2 className="text-cta-title">
                        Plug the leaks. <br />
                        <span className="font-drama italic text-accent-start">Automate the close.</span>
                    </h2>
                    <p className="text-cta-subtitle">
                        Book a diagnostic call to map out an intelligent CRM infrastructure for your revenue operations.
                    </p>
                    <a href="https://calendar.app.google/TtZARGvo78TCAzHJ6" target="_blank" rel="noopener noreferrer" className="interactive-button-accent">
                        <span className="interactive-button-gradient-fill"></span>
                        <span className="relative z-10 flex items-center gap-2">Design your CRM workflow</span>
                    </a>
                </div>
            </section>
        </div>
    );
}
