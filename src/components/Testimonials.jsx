import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'CEO, TechStartup India',
    text: 'NexusWeb Solutions transformed our outdated platform into a lightning-fast React application. The performance improvements alone increased our user retention by 40%. Absolutely world-class engineering.',
    rating: 5,
    initials: 'RS'
  },
  {
    name: 'Priya Mehta',
    role: 'Founder, EduPlatform',
    text: 'Working with Harshad and his team was seamless. They understood our vision from day one and delivered a product that exceeded our expectations. The custom code quality is on another level compared to template-based agencies.',
    rating: 5,
    initials: 'PM'
  },
  {
    name: 'Amit Patel',
    role: 'CTO, FinServe Solutions',
    text: 'Their transparent pricing and milestone-based delivery gave us complete confidence throughout the project. The final product handles 10,000+ concurrent users without breaking a sweat. Highly recommended.',
    rating: 5,
    initials: 'AP'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goTo = (index) => setCurrentIndex(index);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const current = testimonials[currentIndex];

  return (
    <section className="testimonials section" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="section-header">
          <h2 className="section-header__subtitle" style={{ color: 'var(--accent-purple)' }}>Client Testimonials</h2>
          <h3 className="section-header__title">What Our Partners Say About Us</h3>
        </div>

        <div
          className="testimonials__carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonials__card glass-panel"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <div className="testimonials__quote-icon">
                <Quote size={32} />
              </div>

              <p className="testimonials__text">{current.text}</p>

              <div className="testimonials__stars">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <div className="testimonials__author">
                <div className="testimonials__avatar">
                  {current.initials}
                </div>
                <div>
                  <div className="testimonials__name">{current.name}</div>
                  <div className="testimonials__role">{current.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="testimonials__nav">
            <button className="testimonials__nav-btn" onClick={goPrev} aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>

            <div className="testimonials__dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`testimonials__dot ${idx === currentIndex ? 'testimonials__dot--active' : ''}`}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button className="testimonials__nav-btn" onClick={goNext} aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
