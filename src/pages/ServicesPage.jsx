import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, PenTool, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

export default function ServicesPage() {
  return (
    <div className="subpage-layout">
      {/* Decorative Spheres */}
      <div className="gradient-sphere" style={{ top: '-10%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(138,43,226,0.06) 0%, transparent 70%)', position: 'absolute', pointerEvents: 'none' }}></div>
      <div className="gradient-sphere" style={{ bottom: '10%', left: '-20%', width: '45vw', height: '45vw', background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)', position: 'absolute', pointerEvents: 'none' }}></div>

      <div className="section subpage-section">
        <div className="section-header">
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-2px', lineHeight: '1.1', color: 'var(--text-primary)' }}>
            Elite <span className="text-gradient">Engineering Services</span>
          </h1>
          <p className="section-header__desc" style={{ maxWidth: '800px', fontSize: '1.2rem' }}>
            As a premier Software Solutions provider in Navi Mumbai, we execute end-to-end digital product transformations, from robust React architectures to native mobile experiences.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginTop: '5rem' }}>
          
          {/* Service 1: Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel"
            style={{ padding: '3.5rem', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
              <div style={{ flex: '1 1 450px' }}>
                <h2 className="section-header__subtitle" style={{ color: 'var(--accent-blue)', margin: '0 0 1rem 0', display: 'block', textAlign: 'left' }}>
                  Web Development Company in Mumbai
                </h2>
                <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                  Scalable Web Application Engineering
                </h3>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.05rem' }}>The Business Problem</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                    Startups often launch with slow, monolithic WordPress sites that buckle under traffic spikes, causing high bounce rates and lost revenue.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Our Engineering Solution</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                    We architect custom React/Next.js frontends decoupled from headless architectures, ensuring sub-second load times and infinite scalability on edge networks like Vercel or AWS.
                  </p>
                </div>
              </div>

              <div style={{ flex: '1 1 300px', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Service Specs
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', color: 'var(--text-secondary)', lineHeight: '2.2', fontSize: '0.9rem' }}>
                  <li><strong>Core Stack:</strong> React, Java, Spring Boot, Node.js</li>
                  <li><strong>Database:</strong> PostgreSQL, MongoDB, Redis</li>
                  <li><strong>Hosting & Infra:</strong> Vercel, AWS (EC2/S3/Amplify)</li>
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '1.25rem', color: 'var(--accent-blue)', fontWeight: '700' }}>From ₹35,000</span>
                  <Link to="/contact" className="portfolio__live-link" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                    Start Building
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service 2: App Development */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel"
            style={{ padding: '3.5rem', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
              <div style={{ flex: '1 1 450px' }}>
                <h2 className="section-header__subtitle" style={{ color: 'var(--accent-purple)', margin: '0 0 1rem 0', display: 'block', textAlign: 'left' }}>
                  App Development India
                </h2>
                <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                  Native & Cross-Platform Mobile Apps
                </h3>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.05rem' }}>The Business Problem</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                    Developing separate codebases for iOS and Android doubles the engineering budget and slows down time-to-market drastically.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Our Engineering Solution</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                    We leverage React Native and Flutter to build high-performance, native-feeling mobile applications from a single codebase, cutting costs in half while maintaining premium UI/UX standards.
                  </p>
                </div>
              </div>

              <div style={{ flex: '1 1 300px', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Service Specs
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', color: 'var(--text-secondary)', lineHeight: '2.2', fontSize: '0.9rem' }}>
                  <li><strong>Core Stack:</strong> React Native, Flutter, Swift</li>
                  <li><strong>Backend & Auth:</strong> Firebase, Custom Node.js API</li>
                  <li><strong>Deployment:</strong> App Store, Google Play Store</li>
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '1.25rem', color: 'var(--accent-blue)', fontWeight: '700' }}>From ₹80,000</span>
                  <Link to="/contact" className="portfolio__live-link" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                    Prototype Now
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service 3: UI/UX Design */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel"
            style={{ padding: '3.5rem', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
              <div style={{ flex: '1 1 450px' }}>
                <h2 className="section-header__subtitle" style={{ color: 'var(--accent-blue)', margin: '0 0 1rem 0', display: 'block', textAlign: 'left' }}>
                  Conversion Rate Optimization
                </h2>
                <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                  Premium UI/UX System Design
                </h3>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.05rem' }}>The Business Problem</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                    A confusing, generic interface destroys user trust instantly. Users abandon apps and websites within seconds if the design feels cheap or unintuitive.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Our Engineering Solution</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                    We utilize data-driven design psychology to craft stunning, interactive interfaces in Figma. We focus on modern aesthetics (dark mode, glassmorphism) to maximize user retention and brand authority.
                  </p>
                </div>
              </div>

              <div style={{ flex: '1 1 300px', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Service Specs
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', color: 'var(--text-secondary)', lineHeight: '2.2', fontSize: '0.9rem' }}>
                  <li><strong>Tools:</strong> Figma, Adobe Creative Cloud</li>
                  <li><strong>Deliverables:</strong> Design System, Interactive Prototype</li>
                  <li><strong>Implementation:</strong> Tailwind CSS, CSS3, Framer Motion</li>
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '1.25rem', color: 'var(--accent-blue)', fontWeight: '700' }}>Custom Quote</span>
                  <Link to="/contact" className="portfolio__live-link" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                    Revamp UI
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
