import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Manifesto from '../components/Manifesto';
import Architecture from '../components/Architecture';
import Pricing from '../components/Pricing';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>AI-First Marketing Automation Agency | Botonomy</title>
                <meta name="description" content="Autonomous SEO, content, paid ads, and outbound sales — running continuously in the background. Live in 1 business day. Starting at CA$1,895/month." />
                <meta property="og:title" content="AI-First Marketing Automation Agency | Botonomy" />
                <meta property="og:description" content="Autonomous SEO, content, paid ads, and outbound sales — running continuously in the background. Live in 1 business day. Starting at CA$1,895/month." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.botonomy.ai/" />
                <link rel="canonical" href="https://www.botonomy.ai/" />
                <script type="application/ld+json">{`
                  {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "@id": "https://www.botonomy.ai/#organization",
                    "name": "Botonomy",
                    "url": "https://www.botonomy.ai/",
                    "logo": "https://www.botonomy.ai/favicon-32x32.png",
                    "description": "AI-first automation agency delivering autonomous SEO, content marketing, paid advertising, outbound sales, and AI workflow automation.",
                    "email": "martin@botonomy.ai",
                    "foundingDate": "2024",
                    "founder": {
                      "@type": "Person",
                      "name": "Martin Kelly",
                      "url": "https://www.linkedin.com/in/martinkellyseo/"
                    },
                    "sameAs": [
                      "https://www.linkedin.com/company/109499917/",
                      "https://www.linkedin.com/in/martinkellyseo/"
                    ]
                  }
                `}</script>
                <script type="application/ld+json">{`
                  {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Botonomy Main Navigation",
                    "itemListElement": [
                      {
                        "@type": "SiteNavigationElement",
                        "position": 1,
                        "name": "SEO Audit",
                        "url": "https://www.botonomy.ai/systems/seo-audit"
                      },
                      {
                        "@type": "SiteNavigationElement",
                        "position": 2,
                        "name": "Generative Content",
                        "url": "https://www.botonomy.ai/systems/generative-content"
                      },
                      {
                        "@type": "SiteNavigationElement",
                        "position": 3,
                        "name": "CRM Automation",
                        "url": "https://www.botonomy.ai/systems/crm-automation"
                      },
                      {
                        "@type": "SiteNavigationElement",
                        "position": 4,
                        "name": "Social Content",
                        "url": "https://www.botonomy.ai/systems/social-media"
                      },
                      {
                        "@type": "SiteNavigationElement",
                        "position": 5,
                        "name": "RAG Systems",
                        "url": "https://www.botonomy.ai/systems/rag-systems"
                      },
                      {
                        "@type": "SiteNavigationElement",
                        "position": 6,
                        "name": "Plans",
                        "url": "https://www.botonomy.ai/#plans"
                      },
                      {
                        "@type": "SiteNavigationElement",
                        "position": 7,
                        "name": "Blog",
                        "url": "https://www.botonomy.ai/blog/"
                      },
                      {
                        "@type": "SiteNavigationElement",
                        "position": 8,
                        "name": "Contact",
                        "url": "https://www.botonomy.ai/contact/"
                      }
                    ]
                  }
                `}</script>
            </Helmet>
            <Hero />
            <Features />
            <Manifesto />
            <Architecture />
            <Pricing />
        </>
    );
}
