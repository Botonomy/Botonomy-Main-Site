import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Manifesto from '../components/Manifesto';
import Architecture from '../components/Architecture';
import Pricing from '../components/Pricing';

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Manifesto />
            <Architecture />
            <Pricing />
        </>
    );
}
