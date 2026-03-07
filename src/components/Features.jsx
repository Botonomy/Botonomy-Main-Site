import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { AgentOrchestrator, InferenceStream, WorkflowScheduler } from './SystemCards';

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
        <section ref={containerRef} className="section-features" id="features">
            <div className="layout-content-width layout-page-padding">
                <div className="mb-20 max-w-2xl">
                    <h2 className="text-features-title">
                        Intelligent Automation<br />
                        <span className="font-drama italic text-5xl text-accent-start">Artifacts.</span>
                    </h2>
                    <p className="text-body-standard">
                        We eliminate manual bottlenecks by engineering end-to-end automation ecosystems across operations, marketing, and client acquisition.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                    {/* Feature 1 */}
                    <div className="feature-card ui-feature-card">
                        <div className="ui-feature-card-inner">
                            <AgentOrchestrator labels={["Scrape", "Enrich", "Deploy"]} />
                            <div className="p-8">
                                <h3 className="text-feature-card-title">AI-Native Frameworks</h3>
                                <p className="text-feature-card-body">
                                    Revenue-generating automation systems that turn fragmented efforts into scalable infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="feature-card ui-feature-card">
                        <div className="ui-feature-card-inner">
                            <InferenceStream label="Live Inference" textFeed={"> Initializing semantic analysis...\n> Extracting key entities...\n> Generating personalized sequence...\n> [SUCCESS] Frame 1 generated.\n> Awaiting human confirmation..."} />
                            <div className="p-8">
                                <h3 className="text-feature-card-title">Data to Revenue</h3>
                                <p className="text-feature-card-body">
                                    Transform structural data into ranked content, qualified traffic, and predictable acquisition.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="feature-card ui-feature-card">
                        <div className="ui-feature-card-inner">
                            <WorkflowScheduler cronLabel="CRON: 0 0 * * *" />
                            <div className="p-8">
                                <h3 className="text-feature-card-title">End-to-End Ecosystems</h3>
                                <p className="text-feature-card-body">
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
