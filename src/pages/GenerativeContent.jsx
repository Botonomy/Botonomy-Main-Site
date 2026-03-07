import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { AgentOrchestrator, InferenceStream, WorkflowScheduler } from '../components/SystemCards';
import BrandParallax from '../components/BrandParallax';

const genLogos = [
    { name: "WordPress", url: "https://cdn.simpleicons.org/wordpress/white" },
    { name: "Shopify", url: "https://cdn.simpleicons.org/shopify/white" },
    { name: "Wix", url: "https://cdn.simpleicons.org/wix/white" },
    { name: "Webflow", url: "https://cdn.simpleicons.org/webflow/white" },
];

export default function GenerativeContent() {
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
                    <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2564&auto=format&fit=crop" alt="Generative structures" className="w-full h-full object-cover opacity-40 mix-blend-screen saturate-150 relative top-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
                </div>
                <div className="relative z-10 layout-content-width layout-page-padding flex items-center justify-between">
                    <div className="max-w-2xl flex flex-col items-start gap-4">
                        <div className="flex flex-col">
                            <h1 className="anim-fade-up text-hero-headline">
                                Creative engine
                            </h1>
                            <h2 className="anim-fade-up text-hero-drama">
                                activated.
                            </h2>
                        </div>
                        <p className="anim-fade-up text-hero-description">
                            Programmatic content pipelines that generate, self-edit, and deploy high-converting copy across all your structural surfaces.
                        </p>
                        <button className="anim-fade-up interactive-button-accent mt-10">
                            <span className="interactive-button-static-gradient"></span>
                            <span className="relative z-10 flex items-center gap-2">Build your engine</span>
                        </button>
                    </div>

                    {/* LARGE SYMBOLIC ASSETS */}
                    <div className="ui-hero-asset-container">
                        <div className="ui-hero-asset-wrapper">
                            {/* WordPress Circle */}
                            <div className="anim-fade-up ui-hero-asset-circle -top-10 right-0 w-[22rem] h-[22rem] rotate-[15deg]">
                                <img
                                    src="https://cdn.simpleicons.org/wordpress/white"
                                    className="w-44 h-44 ui-hero-asset-img"
                                    alt="WordPress"
                                />
                            </div>

                            {/* Google Docs Circle (MIDDLE) */}
                            <div className="anim-fade-up ui-hero-asset-circle top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[18rem] h-[18rem] rotate-[-8deg]">
                                <img
                                    src="https://cdn.simpleicons.org/googledocs/white"
                                    className="w-36 h-36 ui-hero-asset-img"
                                    alt="Google Docs"
                                />
                            </div>

                            {/* Shopify Circle */}
                            <div className="anim-fade-up ui-hero-asset-circle bottom-0 left-0 w-[20rem] h-[20rem] -rotate-[12deg]">
                                <img
                                    src="https://cdn.simpleicons.org/shopify/white"
                                    className="w-40 h-40 ui-hero-asset-img"
                                    alt="Shopify"
                                />
                            </div>

                            {/* Airtable Circle (NEW) */}
                            <div className="anim-fade-up ui-hero-asset-circle top-0 left-20 w-[16rem] h-[16rem] rotate-[-15deg]">
                                <img
                                    src="https://cdn.simpleicons.org/airtable/white"
                                    className="w-32 h-32 ui-hero-asset-img"
                                    alt="Airtable"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOOK SECTION */}
            <section id="hook-section" className="section-hook layout-page-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="anim-reveal text-hook-title">
                        Content is a <span className="font-drama italic text-accent-start">scale</span> problem, not a creative one.
                    </h2>
                    <p className="anim-reveal text-body-standard">
                        Human writers burn out, miss deadlines, and lose the thread of your brand voice. Programmatic pipelines generate thousands of meticulously researched, perfectly formatted, high-converting assets simultaneously—without compromising creative integrity.
                    </p>
                </div>
            </section>

            {/* SOLUTION 1 */}
            <section className="section-solution-white layout-page-padding">
                <div className="layout-content-width grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="order-2 md:order-1 anim-reveal">
                        <div className="text-label-mono text-accent-start">01 // Architecture</div>
                        <h3 className="text-section-title">Topic Orchestration</h3>
                        <p className="text-body-description">
                            We don't just prompt a model; we build an orchestration layer. Autonomous agents aggregate real-time trend data, map semantic intent, and systematically feed structured parameters into highly tuned generative frameworks.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 anim-reveal ui-glass-panel-wrapper">
                        <div className="ui-glass-panel-inner">
                            <AgentOrchestrator labels={["Ingest", "Prompt", "Publish"]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* SOLUTION 2 */}
            <section className="section-solution-dark layout-page-padding">
                <div className="layout-content-width grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="anim-reveal ui-glass-panel-wrapper">
                        <div className="ui-glass-panel-inner">
                            <InferenceStream label="LLM Factory" textFeed={"> Accessing brand voice module...\n> Generating 5000-word silo...\n> Applying NLP structures...\n> [SUCCESS] Human-level copy generated."} />
                        </div>
                    </div>
                    <div className="anim-reveal">
                        <div className="text-label-mono text-accent-end">02 // Generation</div>
                        <h3 className="text-section-title">Infinite Inference</h3>
                        <p className="text-body-description">
                            Our LLM factory pipelines are capable of producing massive content silos instantaneously. By chaining multiple models together—each responsible for a distinct part of the drafting, reviewing, and editing process—we ensure human-level nuance at absolute scale.
                        </p>
                    </div>
                </div>
            </section>

            <BrandParallax
                title="Headless deployment everywhere."
                subtitle="Whether you're on a monolithic CMS or a modern headless architecture, our engines pipe the generated content straight to your surfaces."
                bgImage="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2564&auto=format&fit=crop"
                logos={genLogos}
            />

            {/* SOLUTION 3 */}
            <section className="section-solution-white layout-page-padding">
                <div className="layout-content-width grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="order-2 md:order-1 anim-reveal">
                        <div className="text-label-mono text-[#7B61FF]">03 // Deployment</div>
                        <h3 className="text-section-title">Autonomous CMS</h3>
                        <p className="text-body-description">
                            Copy-pasting is a relic of the past. Our generative engines interface directly with your headless CMS via API, automatically uploading content, generating featured imagery, styling the internal links, and hitting publish on a defined schedule.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 anim-reveal ui-glass-panel-wrapper">
                        <div className="ui-glass-panel-inner">
                            <WorkflowScheduler cronLabel="CRON: 0 8 * * *" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="section-cta-primary layout-page-padding">
                <div className="max-w-3xl mx-auto anim-reveal">
                    <h2 className="text-cta-title">
                        Out-publish your competitors. <br />
                        <span className="font-drama italic text-accent-start">Without writing a word.</span>
                    </h2>
                    <p className="text-cta-subtitle">
                        Discover how a custom generative content cluster can transform your organic acquisition.
                    </p>
                    <a href="https://calendar.app.google/TtZARGvo78TCAzHJ6" target="_blank" rel="noopener noreferrer" className="interactive-button-accent">
                        <span className="interactive-button-gradient-fill"></span>
                        <span className="relative z-10 flex items-center gap-2">Build your content engine</span>
                    </a>
                </div>
            </section>
        </div>
    );
}
