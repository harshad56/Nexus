import React from 'react';
import { motion } from 'framer-motion';
import ctaBg from '../assets/images/cta-bg.png';
import '../styles/CTASection.css';

export default function CTASection() {
  return (
    <section className="cta cta--bordered section">
      {/* Background Image */}
      <img src={ctaBg} alt="" className="cta__bg" />

      {/* Floating Shapes */}
      <div className="cta__shapes">
        <div className="cta__shape" />
        <div className="cta__shape" />
        <div className="cta__shape" />
        <div className="cta__shape" />
        <div className="cta__shape" />
      </div>

      <div className="cta__wrapper">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="cta__content"
        >
          <h2 className="cta__title">
            Let's Build Your <span className="text-gradient">Next Big Idea</span>
          </h2>
          <p className="cta__text">
            Stop losing customers to outdated technology. Partner with NexusWeb Solutions today and let us engineer a custom digital product that commands market authority.
          </p>

          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="cta__button"
          >
            Schedule Your Strategy Session
          </button>
        </motion.div>
      </div>
    </section>
  );
}
