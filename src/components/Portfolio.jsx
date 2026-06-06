import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import portfolioMockup from '../assets/images/portfolio-codeacademix.png';
import '../styles/Portfolio.css';

export default function Portfolio() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 200;
    const yPct = (mouseY / height - 0.5) * 200;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="portfolio" className="portfolio section">
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="section-header">
          <h2 className="section-header__subtitle" style={{ color: 'var(--accent-purple)' }}>Featured Case Study</h2>
          <h3 className="section-header__title">Architecting the Future of Technical Education</h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="portfolio__showcase"
        >
          {/* Left Side: Mockup Image */}
          <div 
            className="portfolio__mockup-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
          >
            <motion.div 
              className="portfolio__mockup"
              style={{ rotateX, rotateY, x, y }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="portfolio__browser-chrome">
                <div className="portfolio__browser-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="portfolio__browser-url">app.codeacademix.com</div>
              </div>
              <img src={portfolioMockup} alt="CodeAcademix E-learning Platform Mockup" />
            </motion.div>
          </div>

          {/* Right Side: Details */}
          <div className="portfolio__details">
            <div className="portfolio__badge">
              ⭐ Product Built & Engineered by NexusWeb
            </div>
            <h4 className="portfolio__title">CodeAcademix</h4>
            <p className="portfolio__desc">
              An interactive, AI-powered programming bootcamp accessible from anywhere in the world.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <h5 style={{ fontSize: '1rem', color: 'var(--accent-blue)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
                  <CheckCircle2 size={16} /> The Objective
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  The client needed a scalable online learning platform capable of hosting interactive coding environments, tracking student progress, and leveraging an AI-powered tutoring system to provide real-time feedback.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <h5 style={{ fontSize: '1rem', color: 'var(--accent-purple)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
                  <CheckCircle2 size={16} /> The Solution
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  We engineered a full-stack, highly concurrent application utilizing a modern serverless architecture. The platform features robust user authentication, a custom in-browser code execution engine, and seamless AI API integrations for automated code review.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '0.5rem' }}>
              <h5 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: '600' }}>Technology Stack</h5>
              <div className="portfolio__tech-tags">
                {['React', 'Node.js', 'Spring Boot', 'PostgreSQL', 'OpenAI API', 'Docker'].map(tech => (
                  <span key={tech} className="portfolio__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '0.5rem' }}>
              <h5 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: '600' }}>Business Impact</h5>
              <ul className="portfolio__impact-list" style={{ padding: 0, margin: 0 }}>
                <li className="portfolio__impact-item">
                  <span className="portfolio__impact-pill">10K+</span> Concurrent users without performance degradation.
                </li>
                <li className="portfolio__impact-item">
                  <span className="portfolio__impact-pill">85%</span> Reduced instructor grading time via AI automation.
                </li>
                <li className="portfolio__impact-item">
                  <span className="portfolio__impact-pill">&lt;1s</span> Sub-second page load times ensuring high retention.
                </li>
              </ul>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <a href="https://codeacademix.vercel.app" target="_blank" rel="noopener noreferrer" className="portfolio__live-link">
                View Live Project <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="portfolio__all-btn-wrapper">
          <a href="/case-studies" className="portfolio__all-btn mobile-btn-full">
            View All Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}
