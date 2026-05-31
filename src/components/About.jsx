import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Users } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="section-header">
        <h2 className="section-header__subtitle" style={{ color: 'var(--accent-blue)' }}>Behind NexusWeb</h2>
        <h3 className="section-header__title">Your Local Software Partner With Global Standards</h3>
      </div>
      
      <div className="about__grid">
        {/* Left: Terminal Console Mockup (Replacing Founder Portrait) */}
        <motion.div 
          className="about__profile"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="terminal-mockup">
            {/* Terminal Top bar */}
            <div className="terminal-mockup__header">
              <div className="terminal-mockup__dots">
                <span className="terminal-mockup__dot terminal-mockup__dot--red"></span>
                <span className="terminal-mockup__dot terminal-mockup__dot--yellow"></span>
                <span className="terminal-mockup__dot terminal-mockup__dot--green"></span>
              </div>
              <span className="terminal-mockup__title">nexusweb-terminal.js</span>
            </div>
            
            {/* Terminal Body */}
            <div className="terminal-mockup__body">
              <p><span style={{ color: '#52525b' }}>$</span> node run agency.js</p>
              <p style={{ margin: '0.5rem 0 0 0', color: 'var(--accent-blue)' }}>✔ Initializing Custom Architecture...</p>
              <p style={{ color: 'var(--accent-purple)' }}>✔ Decoupling UI from bloated templates...</p>
              <p style={{ color: '#10b981' }}>✔ Optimization rating: 100/100 (Lighthouse)</p>
              <p style={{ margin: '1rem 0 0 0', color: '#eab308' }}>&gt;&gt;&gt; Deploying Serverless Endpoint...</p>
              <p>Location: Navi Mumbai, India [HQ]</p>
              <p>Target: PAN India Startups &amp; Enterprises</p>
              <p style={{ margin: '1.5rem 0 0 0' }}><span style={{ color: 'white' }}>nexusweb-system</span>: active_running</p>
            </div>

            {/* Performance Stats Overlay */}
            <div className="terminal-mockup__stats">
              <div>
                <span className="terminal-mockup__stat-label">LATENCY</span>
                <strong className="terminal-mockup__stat-val" style={{ color: '#10b981' }}>14ms</strong>
              </div>
              <div>
                <span className="terminal-mockup__stat-label">TEMPLATES</span>
                <strong className="terminal-mockup__stat-val" style={{ color: '#ef4444' }}>0%</strong>
              </div>
              <div>
                <span className="terminal-mockup__stat-label">PERFORMANCE</span>
                <strong className="terminal-mockup__stat-val" style={{ color: 'var(--accent-blue)' }}>100%</strong>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 className="about__founder-name">Harshad Bagal</h4>
            <p className="about__founder-role text-gradient">Founder & Full Stack Engineer</p>
          </div>
        </motion.div>
        
        {/* Right: Bio & Stats & Values */}
        <motion.div 
          className="about__content"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="about__text">
            Specializing in scalable web architectures and startup-focused digital solutions. Based in Navi Mumbai, I partner with businesses across India to replace outdated, generic templates with high-performance custom applications.
          </p>
          <p className="about__text">
            We don't just write code; we engineer products that solve real logistical, operational, and customer-facing challenges for modern startups.
          </p>
          
          <div className="about__stats">
            <div className="about__stat">
              <strong className="about__stat-number">
                <AnimatedCounter end={15} suffix="+" />
              </strong>
              <div className="about__stat-label">Projects Delivered</div>
            </div>
            <div className="about__stat">
              <strong className="about__stat-number">
                <AnimatedCounter end={10} suffix="+" />
              </strong>
              <div className="about__stat-label">Tech Mastered</div>
            </div>
            <div className="about__stat">
              <strong className="about__stat-number">
                <AnimatedCounter end={100} suffix="%" />
              </strong>
              <div className="about__stat-label">Client Satisfaction</div>
            </div>
            <div className="about__stat">
              <strong className="about__stat-number" style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>PAN</strong>
              <div className="about__stat-label">India Clients</div>
            </div>
          </div>

          <div className="about__values">
            <div className="about__value-item">
              <div className="about__value-icon"><Award size={20} /></div>
              <div className="about__value-content">
                <h4 className="about__value-title">Uncompromising Quality</h4>
                <p className="about__value-text">We do not rely on pre-built templates or shortcut builders. Every line of code is custom-engineered to meet your unique business objectives, ensuring maximum performance and security.</p>
              </div>
            </div>
            
            <div className="about__value-item">
              <div className="about__value-icon"><Users size={20} /></div>
              <div className="about__value-content">
                <h4 className="about__value-title">Startup-Focused Approach</h4>
                <p className="about__value-text">We understand the budget constraints and speed-to-market requirements of modern startups. Our lean, result-oriented approach guarantees you get enterprise-grade software without the enterprise bloat.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="text-gradient"
              style={{ fontWeight: 'bold', borderBottom: '1px solid var(--accent-blue)', paddingBottom: '0.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Let's discuss your vision <Code2 size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
