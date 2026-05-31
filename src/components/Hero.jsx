import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/hero-bg.png';
import '../styles/Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
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
          We are a Navi Mumbai-based digital agency building scalable web and
          mobile applications. Partner with us to turn complex challenges into
          sleek, high-performing software solutions.
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
            Book Free Consultation
          </button>

          <button
            className="hero__cta-secondary"
            onClick={() => scrollTo('portfolio')}
          >
            View Our Work
          </button>
        </motion.div>

        <motion.div
          className="hero__trust"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <span className="hero__trust-item">
            Trusted by 15+ businesses across India
          </span>

          <div className="hero__trust-stats">
            <span className="hero__trust-item">100% Client Satisfaction</span>
            <span className="hero__trust-divider" aria-hidden="true">•</span>
            <span className="hero__trust-item">PAN India Service</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
