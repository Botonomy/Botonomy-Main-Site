import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { AgentOrchestrator, InferenceStream, WorkflowScheduler } from '../components/SystemCards';
import BrandParallax from '../components/BrandParallax';

const seoLogos = [
    { name: "Mozilla", url: "/assets/logos/moz.svg" },
    { name: "Semrush", url: "/assets/logos/semrush.svg" },
    { name: "Analytics", url: "/assets/logos/analytics.svg" },
    { name: "Search Console", url: "/assets/logos/search-console.svg" }
];

export default function SeoAudit() {
    const pageRef = useRef(null);

    useLayoutEffect(() => {
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
            <Helmet>
                <title>AI-Powered SEO Audit &amp; Monitoring | Botonomy</title>
                <meta name="description" content="Full-site technical SEO audits with automatic issue prioritisation, Core Web Vitals analysis, and live ClickUp task creation. Powered by Botonomy." />
                <meta property="og:title" content="AI-Powered SEO Audit & Monitoring | Botonomy" />
                <meta property="og:description" content="Full-site technical SEO audits with automatic issue prioritisation, Core Web Vitals analysis, and live ClickUp task creation. Powered by Botonomy." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.botonomy.ai/systems/seo-audit" />
                <link rel="canonical" href="https://www.botonomy.ai/systems/seo-audit" />
            </Helmet>
            {/* HERO */}
            <section className="section-hero">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2564&auto=format&fit=crop" alt="SEO audit data analysis — technical site health visualised" className="w-full h-full object-cover opacity-40 mix-blend-screen" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
                </div>
                <div className="relative z-10 layout-content-width layout-page-padding">
                    <div className="max-w-3xl flex flex-col items-start gap-4">
                        <div className="flex flex-col">
                            <h1 className="anim-fade-up text-hero-headline">
                                Generate visibility beyond
                            </h1>
                            <h2 className="anim-fade-up text-hero-drama">
                                algorithms.
                            </h2>
                        </div>
                        <p className="anim-fade-up text-hero-description">
                            Intelligent SEO monitoring and programmatic data optimization. Autonomous crawling and real-time gap analysis.
                        </p>
                        <button className="anim-fade-up interactive-button-accent mt-10">
                            <span className="interactive-button-static-gradient"></span>
                            <span className="relative z-10 flex items-center gap-2">Automate your audits</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* HOOK SECTION */}
            <section id="hook-section" className="section-hook layout-page-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="anim-reveal text-hook-title">
                        Your rankings are governed by <span className="font-drama italic text-accent-start">mathematics</span>, not magic.
                    </h2>
                    <p className="anim-reveal text-body-standard">
                        Relying on manual spreadsheets and sporadic audits leaves devastating technical gaps. Our intelligent SEO architecture monitors, maps, and repairs your search integrity autonomously—capitalizing on intent before your competitors even see the query.
                    </p>
                </div>
            </section>

            {/* SOLUTION 1 */}
            <section className="section-solution-white layout-page-padding">
                <div className="layout-content-width grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="order-2 md:order-1 anim-reveal">
                        <div className="text-label-mono text-accent-start">01 // Detection</div>
                        <h3 className="text-section-title">Programmatic Crawling</h3>
                        <p className="text-body-description">
                            We deploy autonomous agents that evaluate your entire site architecture daily. No more waiting for monthly retainers to flag broken links, indexing errors, or cannibalized keywords. We see the fractures before the algorithm realizes they exist.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 anim-reveal ui-glass-panel-wrapper">
                        <div className="ui-glass-panel-inner">
                            <AgentOrchestrator labels={["Crawl", "Analyze", "Index"]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* SOLUTION 2 */}
            <section className="section-solution-dark layout-page-padding">
                <div className="layout-content-width grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="anim-reveal ui-glass-panel-wrapper">
                        <div className="ui-glass-panel-inner">
                            <InferenceStream label="SERP Inference" textFeed={"> Fetching SERP data...\n> Analyzing intent nodes...\n> Generating schema clusters...\n> [SUCCESS] Content gaps mapped."} />
                        </div>
                    </div>
                    <div className="anim-reveal">
                        <div className="text-label-mono text-accent-end">02 // Analysis</div>
                        <h3 className="text-section-title">Intent Inference</h3>
                        <p className="text-body-description">
                            Search engines don't rank words; they rank intent. Our language models reverse-engineer SERP structural data to model precisely what context is missing from your pages, providing hyper-specific briefs to bridge the content gap perfectly.
                        </p>
                    </div>
                </div>
            </section>

            <BrandParallax
                title="Integrates with your existing SEO stack."
                subtitle="Agentic workflows plug perfectly into the tools you're already familiar with, enriching their data without displacing your core architecture."
                bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2564&auto=format&fit=crop"
                logos={seoLogos}
            />

            {/* SOLUTION 3 */}
            <section className="section-solution-white layout-page-padding">
                <div className="layout-content-width grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="order-2 md:order-1 anim-reveal">
                        <div className="text-label-mono text-[#7B61FF]">03 // Execution</div>
                        <h3 className="text-section-title">Scheduled Adjustments</h3>
                        <p className="text-body-description">
                            Insights are useless without deployment. We automate the injection of fresh schema markups, optimized meta data, and internal linking structures while you sleep. Perfect compliance, deployed instantly at scale.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 anim-reveal ui-glass-panel-wrapper">
                        <div className="ui-glass-panel-inner">
                            <WorkflowScheduler cronLabel="CRON: 0 4 * * 1" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="section-cta-primary layout-page-padding">
                <div className="max-w-3xl mx-auto anim-reveal">
                    <h2 className="text-cta-title">
                        Stop managing spreadsheets. <br />
                        <span className="font-drama italic text-accent-start">Start commanding traffic.</span>
                    </h2>
                    <p className="text-cta-subtitle">
                        Lock in an architecture audit to see exactly where manual processes are costing you organic growth.
                    </p>
                    <a href="https://calendar.app.google/TtZARGvo78TCAzHJ6" target="_blank" rel="noopener noreferrer" className="interactive-button-accent">
                        <span className="interactive-button-gradient-fill"></span>
                        <span className="relative z-10 flex items-center gap-2">Book your system audit</span>
                    </a>
                </div>
            </section>
        </div>
    );
}
