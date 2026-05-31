import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, TrendingUp, Cpu, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import portfolioMockup from '../assets/images/portfolio-codeacademix.png';
import '../styles/Portfolio.css';

export default function CaseStudiesPage() {
  return (
    <div className="subpage-layout">
      {/* Decorative Spheres */}
      <div className="gradient-sphere" style={{ top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)', position: 'absolute', pointerEvents: 'none' }}></div>
      <div className="gradient-sphere" style={{ bottom: '10%', right: '-20%', width: '45vw', height: '45vw', background: 'radial-gradient(circle, rgba(138,43,226,0.06) 0%, transparent 70%)', position: 'absolute', pointerEvents: 'none' }}></div>

      <div className="section subpage-section">
        <div className="section-header">
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-2px', lineHeight: '1.1', color: 'var(--text-primary)' }}>
            Featured <span className="text-gradient">Case Studies</span>
          </h1>
          <p className="section-header__desc" style={{ maxWidth: '800px', fontSize: '1.2rem' }}>
            Explore how we've helped startups and enterprises achieve hyper-growth through custom-engineered digital products.
          </p>
        </div>

        {/* Flagship Case Study: CodeAcademix */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="portfolio__showcase"
          style={{ marginTop: '5rem' }}
        >
          {/* Mockup wrapper */}
          <div className="portfolio__mockup-wrapper">
            <div className="portfolio__mockup">
              <img src={portfolioMockup} alt="CodeAcademix Platform Mockup" />
            </div>
          </div>

          {/* Details */}
          <div className="portfolio__details">
            <div className="portfolio__badge">
              ⭐ Flagship Product Built & Engineered by NexusWeb
            </div>
            <h2 className="portfolio__title" style={{ fontSize: '2.2rem' }}>CodeAcademix</h2>
            <p className="portfolio__desc">
              An interactive, AI-powered programming bootcamp and scalable LMS platform accessible globally.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '0.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-blue)', margin: '0 0 0.25rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}>
                  <CheckCircle2 size={18} /> Business Objective
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.65', margin: 0 }}>
                  The client required a massive, scalable online learning infrastructure capable of hosting interactive browser-based coding environments, managing complex student state, and leveraging an AI-powered tutoring system to dispense real-time code reviews without human intervention.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', margin: '0 0 0.25rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}>
                  <Cpu size={18} /> Technical Execution
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.65', margin: 0 }}>
                  We architected a fully decoupled serverless application. We built a custom execution engine that runs client-side code safely, implemented secure JWT-based authentication flows, and deeply integrated OpenAI's API to analyze compilation errors and logic flaws instantly.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '0.5rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: '700' }}>Technology Architecture</h3>
              <div className="portfolio__tech-tags">
                {['React 18', 'Java', 'Spring Boot', 'Node.js', 'PostgreSQL', 'MongoDB', 'OpenAI API', 'Tailwind CSS', 'AWS', 'Docker', 'JWT Auth'].map(tech => (
                  <span key={tech} className="portfolio__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '0.5rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: '700' }}>Measurable Results</h3>
              <ul className="portfolio__impact-list" style={{ padding: 0, margin: 0 }}>
                <li className="portfolio__impact-item">
                  <strong>10,000+ Concurrent Users:</strong> Zero performance degradation during peak traffic.
                </li>
                <li className="portfolio__impact-item">
                  <strong>85% Reduction in Overhead:</strong> AI automation replaced manual instructor grading.
                </li>
                <li className="portfolio__impact-item">
                  <strong>Sub-Second Load Times:</strong> Maximized student retention and engagement.
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

        {/* More Case Studies Mocked */}
        <div style={{ textAlign: 'center', padding: '5rem 0 2rem' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-primary)' }}>Ready for your own success story?</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>Let's architect the software that takes your business to the next level.</p>
          <Link to="/contact" className="portfolio__live-link" style={{ fontSize: '1rem', padding: '1rem 3rem' }}>
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}
