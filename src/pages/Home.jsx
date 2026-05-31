import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';
import Pricing from '../components/Pricing';
import WhyChooseUs from '../components/WhyChooseUs';
import Insights from '../components/Insights';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Process />
            <Portfolio />
            <FAQ />
            <Pricing />
            <WhyChooseUs />
            <Insights />
            <CTASection />
            <Contact />
        </>
    );
}
