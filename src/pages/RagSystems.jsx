import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { AgentOrchestrator, InferenceStream, WorkflowScheduler } from '../components/SystemCards';
import BrandParallax from '../components/BrandParallax';

const ragLogos = [
    { name: "Pinecone", url: "https://cdn.simpleicons.org/pinecone/white" },
    { name: "PostgreSQL", url: "https://cdn.simpleicons.org/postgresql/white" },
    { name: "Qdrant", url: "https://cdn.simpleicons.org/qdrant/white" },
    { name: "Redis", url: "https://cdn.simpleicons.org/redis/white" },
    { name: "OpenAI", url: "https://cdn.simpleicons.org/openai/white" },
    { name: "Anthropic", url: "https://cdn.simpleicons.org/anthropic/white" },
    { name: "LangChain", url: "https://cdn.simpleicons.org/langchain/white" }
];

export default function RagSystems() {
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
                    <img src="https://images.unsplash.com/photo-1606137687259-338cba465057?q=80&w=2564&auto=format&fit=crop" alt="Database and servers" className="w-full h-full object-cover opacity-40 mix-blend-screen saturate-150 relative top-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
                </div>
                <div className="relative z-10 layout-content-width layout-page-padding">
                    <div className="max-w-3xl flex flex-col items-start gap-4">
                        <div className="flex flex-col">
                            <h1 className="anim-fade-up text-hero-headline">
                                Knowledge beyond
                            </h1>
                            <h2 className="anim-fade-up text-hero-drama">
                                search.
                            </h2>
                        </div>
                        <p className="anim-fade-up text-hero-description">
                            Enterprise-grade Retrieval-Augmented Generation systems. Turn your entire internal database into a privately accessible, conversational intelligence layer.
                        </p>
                        <button className="anim-fade-up interactive-button-accent mt-10">
                            <span className="interactive-button-static-gradient"></span>
                            <span className="relative z-10 flex items-center gap-2">Deploy your RAG architecture</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* HOOK SECTION */}
            <section id="hook-section" className="section-hook layout-page-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="anim-reveal text-hook-title">
                        Answers are buried in your <span className="font-drama italic text-accent-start">data silos</span>.
                    </h2>
                    <p className="anim-reveal text-body-standard">
                        Your enterprise accumulates knowledge every day, but accessing it requires navigating fragmented wikis, endless Slack channels, and obsolete PDFs. We build custom RAG (Retrieval-Augmented Generation) architectures that transform your static data into a secure, conversational intelligence layer that knows everything your company knows.
                    </p>
                </div>
            </section>

            {/* SOLUTION 1 */}
            <section className="section-solution-white layout-page-padding">
                <div className="layout-content-width grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="order-2 md:order-1 anim-reveal">
                        <div className="text-label-mono text-accent-start">01 // Architecture</div>
                        <h3 className="text-section-title">Semantic Vectorization</h3>
                        <p className="text-body-description">
                            Keyword search is broken because it relies on exact matches. We ingest your raw unstructured data—meeting transcripts, internal wikis, vast codebases—and transform them into multi-dimensional semantic embeddings, ensuring the system understands the underlying meaning, not just the words.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 anim-reveal ui-glass-panel-wrapper">
                        <div className="ui-glass-panel-inner">
                            <AgentOrchestrator labels={["Embed", "Vectorize", "Retrieve"]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* SOLUTION 2 */}
            <section className="section-solution-dark layout-page-padding">
                <div className="layout-content-width grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="anim-reveal ui-glass-panel-wrapper">
                        <div className="ui-glass-panel-inner">
                            <InferenceStream label="Context Assembly" textFeed={"> Querying internal company wiki...\n> Calculating semantic distance...\n> Retrieving top 5 internal documents...\n> [SUCCESS] Context window populated.\n> Synthesizing exact answer..."} />
                        </div>
                    </div>
                    <div className="anim-reveal">
                        <div className="text-label-mono text-accent-end">02 // Generation</div>
                        <h3 className="text-section-title">Instant Context Synthesis</h3>
                        <p className="text-body-description">
                            Instead of giving you a list of links to read through, our inference models retrieve the exact, relevant passages from millions of documents in milliseconds. It then synthesizes that fragmented context into a precise, perfectly articulated answer—complete with citations back to the source material.
                        </p>
                    </div>
                </div>
            </section>

            <BrandParallax
                title="Sovereign vector infrastructure."
                subtitle="We connect the most sophisticated retrieval engines directly to your highly secure proprietary data architecture."
                bgImage="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2564&auto=format&fit=crop"
                logos={ragLogos}
            />

            {/* SOLUTION 3 */}
            <section className="section-solution-white layout-page-padding">
                <div className="layout-content-width grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="order-2 md:order-1 anim-reveal">
                        <div className="text-label-mono text-[#7B61FF]">03 // Maintenance</div>
                        <h3 className="text-section-title">Continuous Indexing</h3>
                        <p className="text-body-description">
                            A knowledge base is only as useful as its freshest data. We build automated cron pipelines that constantly re-index new documents, purge obsolete files, and maintain the integrity of the vector database. Your internal AI evolves exactly as your company does, with zero manual overhead.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 anim-reveal ui-glass-panel-wrapper">
                        <div className="ui-glass-panel-inner">
                            <WorkflowScheduler cronLabel="CRON: 0 0 * * 0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="section-cta-primary layout-page-padding">
                <div className="max-w-3xl mx-auto anim-reveal">
                    <h2 className="text-cta-title">
                        Unlock your internal <br />
                        <span className="font-drama italic text-accent-start">intelligence layer.</span>
                    </h2>
                    <p className="text-cta-subtitle">
                        Book an exploratory call to map out a secure RAG architecture for your proprietary data.
                    </p>
                    <a href="https://calendar.app.google/TtZARGvo78TCAzHJ6" target="_blank" rel="noopener noreferrer" className="interactive-button-accent">
                        <span className="interactive-button-gradient-fill"></span>
                        <span className="relative z-10 flex items-center gap-2">Architect your enterprise RAG</span>
                    </a>
                </div>
            </section>
        </div>
    );
}
