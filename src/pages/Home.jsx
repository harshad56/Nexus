import React from 'react';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <TrustedBy />
            <Services />
            <Portfolio />
            <Process />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Contact />
        </>
    );
}
