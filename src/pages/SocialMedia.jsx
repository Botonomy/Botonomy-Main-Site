import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { AgentOrchestrator, InferenceStream, WorkflowScheduler } from '../components/SystemCards';
import BrandParallax from '../components/BrandParallax';

const socialLogos = [
    { name: "Instagram", url: "https://cdn.simpleicons.org/instagram/white" },
    { name: "Facebook", url: "https://cdn.simpleicons.org/facebook/white" },
    { name: "X", url: "https://cdn.simpleicons.org/x/white" },
    { name: "TikTok", url: "https://cdn.simpleicons.org/tiktok/white" },
    { name: "YouTube", url: "https://cdn.simpleicons.org/youtube/white" }
];

export default function SocialMedia() {
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
                    <img src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2564&auto=format&fit=crop" alt="Social networks abstract" className="w-full h-full object-cover opacity-40 mix-blend-screen saturate-150 relative top-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
                </div>
                <div className="relative z-10 layout-content-width layout-page-padding">
                    <div className="max-w-3xl flex flex-col items-start gap-4">
                        <div className="flex flex-col">
                            <h1 className="anim-fade-up text-hero-headline">
                                Engagement beyond
                            </h1>
                            <h2 className="anim-fade-up text-hero-drama">
                                bandwidth.
                            </h2>
                        </div>
                        <p className="anim-fade-up text-hero-description">
                            Intelligent social agents that research, create, and autonomously publish cross-platform content sequences 24 hours a day, 7 days a week.
                        </p>
                        <button className="anim-fade-up interactive-button-accent mt-10">
                            <span className="interactive-button-static-gradient"></span>
                            <span className="relative z-10 flex items-center gap-2">Deploy your social agent</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* HOOK SECTION */}
            <section id="hook-section" className="section-hook layout-page-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="anim-reveal text-hook-title">
                        Reach is dictated by <span className="font-drama italic text-accent-start">velocity</span>, not virality.
                    </h2>
                    <p className="anim-reveal text-body-standard">
                        Manual posting is too slow to capture fleeting algorithmic trends. Our autonomous social agents scrape real-time data, adjust to platform-specific constraints, and deploy relentless, hyper-relevant content sequences that hijack attention and drive conversion 24/7.
                    </p>
                </div>
            </section>

            {/* SOLUTION 1 */}
            <section className="section-solution-white layout-page-padding">
                <div className="layout-content-width grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="order-2 md:order-1 anim-reveal">
                        <div className="text-label-mono text-accent-start">01 // Architecture</div>
                        <h3 className="text-section-title">Algorithmic Distribution</h3>
                        <p className="text-body-description">
                            Every platform has its own mathematical bias. We engineer agentic workflows that map your brand voice directly to these native algorithms, formatting threads, carousels, and short-form copy to ensure maximum potential reach and engagement per post.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 anim-reveal ui-glass-panel-wrapper">
                        <div className="ui-glass-panel-inner">
                            <AgentOrchestrator labels={["Trend", "Generate", "Distribute"]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* SOLUTION 2 */}
            <section className="section-solution-dark layout-page-padding">
                <div className="layout-content-width grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="anim-reveal ui-glass-panel-wrapper">
                        <div className="ui-glass-panel-inner">
                            <InferenceStream label="Sequence Drafting" textFeed={"> Scraping Twitter algorithm trends...\n> Identifying viral viral hooks structures...\n> Generating 14-day posting sequence...\n> [SUCCESS] LinkedIn carousel generated.\n> Sending to Headless CMS API..."} />
                        </div>
                    </div>
                    <div className="anim-reveal">
                        <div className="text-label-mono text-accent-end">02 // Generation</div>
                        <h3 className="text-section-title">Trend Arbitrage</h3>
                        <p className="text-body-description">
                            Stop fighting for attention in crowded markets. Our listening agents instantly identify emerging trends, extract successful viral hooks, and rapidly deploy generative counter-narratives that insert your brand into the conversation before your competitors even wake up.
                        </p>
                    </div>
                </div>
            </section>

            <BrandParallax
                title="Omnichannel domination."
                subtitle="We deploy agents that instantly format, optimize, and schedule your messaging directly across every social ecosystem."
                bgImage="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2564&auto=format&fit=crop"
                logos={socialLogos}
            />

            {/* SOLUTION 3 */}
            <section className="section-solution-white layout-page-padding">
                <div className="layout-content-width grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="order-2 md:order-1 anim-reveal">
                        <div className="text-label-mono text-[#7B61FF]">03 // Deployment</div>
                        <h3 className="text-section-title">Tireless Execution</h3>
                        <p className="text-body-description">
                            Consistency is the only metric that matters. Deploy a social media engine that never sleeps, never complains, and never misses a beat—executing complex, omnichannel content calendar deployments with perfect temporal precision.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 anim-reveal ui-glass-panel-wrapper">
                        <div className="ui-glass-panel-inner">
                            <WorkflowScheduler cronLabel="CRON: 0 10 * * *" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="section-cta-primary layout-page-padding">
                <div className="max-w-3xl mx-auto anim-reveal">
                    <h2 className="text-cta-title">
                        Dominate the feed. <br />
                        <span className="font-drama italic text-accent-start">Ignore the burnout.</span>
                    </h2>
                    <p className="text-cta-subtitle">
                        Book a strategy session to build your autonomous social distribution network.
                    </p>
                    <a href="https://calendar.app.google/TtZARGvo78TCAzHJ6" target="_blank" rel="noopener noreferrer" className="interactive-button-accent">
                        <span className="interactive-button-gradient-fill"></span>
                        <span className="relative z-10 flex items-center gap-2">Deploy your social agent</span>
                    </a>
                </div>
            </section>
        </div>
    );
}
