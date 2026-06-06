import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import heroBg from '../assets/images/hero-bg.png';
import '../styles/Hero.css';

const rotatingWords = ['Web Applications', 'Mobile Apps', 'SaaS Platforms', 'E-Commerce Stores', 'Custom Software'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero noise-texture">
      {/* Animated Background Glows */}
      <div className="bg-glow-container">
        <div className="bg-glow-blob bg-glow-blob--blue"></div>
        <div className="bg-glow-blob bg-glow-blob--purple"></div>
      </div>

      {/* Background image */}
      <img src={heroBg} alt="" className="hero__bg" aria-hidden="true" />

      {/* Animated grid overlay */}
      <div className="hero__grid" aria-hidden="true"></div>

      {/* Content */}
      <div className="hero__content">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          🚀 Serving startups &amp; enterprises across India
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Engineered Digital Products for{' '}
          <span className="text-gradient">Accelerated Business Growth</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          We build premium{' '}
          <span className="hero__rotating-word-wrapper">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[wordIndex]}
                className="hero__rotating-word text-gradient"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>{' '}
          that turn complex challenges into sleek, high-performing software solutions.
        </motion.p>

        <motion.div
          className="hero__cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button
            className="hero__cta-primary"
            onClick={() => scrollTo('contact')}
          >
            Book Free Consultation <ArrowRight size={18} className="hero__cta-arrow" />
          </button>

          <button
            className="hero__cta-secondary"
            onClick={() => scrollTo('portfolio')}
          >
            View Our Work
          </button>
        </motion.div>

        {/* Inline Hero Stats */}
        <motion.div
          className="hero__stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="hero__stat">
            <span className="hero__stat-number">
              <AnimatedCounter end={15} suffix="+" />
            </span>
            <span className="hero__stat-label">Projects Delivered</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">
              <AnimatedCounter end={100} suffix="%" />
            </span>
            <span className="hero__stat-label">Client Satisfaction</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number hero__stat-number--gradient">PAN</span>
            <span className="hero__stat-label">India Service</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
