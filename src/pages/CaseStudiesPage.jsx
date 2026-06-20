import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import portfolioMockup from '../assets/images/portfolio-codeacademix.png';
import '../styles/Portfolio.css';
import '../styles/SubPages.css';

export default function CaseStudiesPage() {
  return (
    <div className="subpage-layout">
      {/* Decorative Spheres */}
      <div className="subpage__sphere subpage__sphere--top-left"></div>
      <div className="subpage__sphere subpage__sphere--bottom-right"></div>

      <div className="section subpage-section">
        <div className="section-header">
          <h1 className="subpage__hero-title">
            Featured <span className="text-gradient">Case Studies</span>
          </h1>
          <p className="section-header__desc subpage__desc">
            Explore how we've helped startups and enterprises achieve hyper-growth through custom-engineered digital products.
          </p>
        </div>

        {/* Flagship Case Study: CodeAcademix */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="portfolio__showcase portfolio__showcase--spaced"
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
            <h2 className="portfolio__title">CodeAcademix</h2>
            <p className="portfolio__desc">
              An interactive, AI-powered programming bootcamp and scalable LMS platform accessible globally.
            </p>

            <div className="portfolio__details-points">
              <div className="portfolio__detail-point">
                <h3 className="portfolio__detail-header portfolio__detail-header--blue">
                  <CheckCircle2 size={18} /> Business Objective
                </h3>
                <p className="portfolio__detail-text">
                  The client required a massive, scalable online learning infrastructure capable of hosting interactive browser-based coding environments, managing complex student state, and leveraging an AI-powered tutoring system to dispense real-time code reviews without human intervention.
                </p>
              </div>

              <div className="portfolio__detail-point">
                <h3 className="portfolio__detail-header portfolio__detail-header--purple">
                  <Cpu size={18} /> Technical Execution
                </h3>
                <p className="portfolio__detail-text">
                  We architected a fully decoupled serverless application. We built a custom execution engine that runs client-side code safely, implemented secure JWT-based authentication flows, and deeply integrated OpenAI's API to analyze compilation errors and logic flaws instantly.
                </p>
              </div>
            </div>

            <div className="portfolio__details-section">
              <h3 className="portfolio__details-title">Technology Architecture</h3>
              <div className="portfolio__tech-tags">
                {['React 18', 'Java', 'Spring Boot', 'Node.js', 'PostgreSQL', 'MongoDB', 'OpenAI API', 'Tailwind CSS', 'AWS', 'Docker', 'JWT Auth'].map(tech => (
                  <span key={tech} className="portfolio__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="portfolio__details-section">
              <h3 className="portfolio__details-title">Measurable Results</h3>
              <ul className="portfolio__impact-list">
                <li className="portfolio__impact-item">
                  <span className="portfolio__impact-pill">10K+</span> Concurrent Users: Zero performance degradation during peak traffic.
                </li>
                <li className="portfolio__impact-item">
                  <span className="portfolio__impact-pill">85%</span> Reduction in Overhead: AI automation replaced manual instructor grading.
                </li>
                <li className="portfolio__impact-item">
                  <span className="portfolio__impact-pill">&lt;1s</span> Sub-Second Load Times: Maximized student retention and engagement.
                </li>
              </ul>
            </div>

            <div className="portfolio__link-wrapper">
              <a href="https://codeacademix.vercel.app" target="_blank" rel="noopener noreferrer" className="portfolio__live-link">
                View Live Project <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <div className="subpage__cta-block">
          <h3 className="subpage__cta-title">Ready for your own success story?</h3>
          <p className="subpage__cta-text">Let's architect the software that takes your business to the next level.</p>
          <Link to="/contact" className="portfolio__live-link">
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}
