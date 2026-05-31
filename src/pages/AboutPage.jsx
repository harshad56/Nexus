import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldAlert, Sparkles } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import '../styles/About.css';

export default function AboutPage() {
  return (
    <div className="subpage-layout">
      {/* Decorative Spheres */}
      <div className="gradient-sphere" style={{ top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)', position: 'absolute', pointerEvents: 'none' }}></div>
      <div className="gradient-sphere" style={{ bottom: '10%', right: '-20%', width: '45vw', height: '45vw', background: 'radial-gradient(circle, rgba(138,43,226,0.06) 0%, transparent 70%)', position: 'absolute', pointerEvents: 'none' }}></div>

      <div className="section subpage-section">
        <div className="section-header">
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-2px', lineHeight: '1.1', color: 'var(--text-primary)' }}>
            Engineering <br /><span className="text-gradient">Digital Authority</span>
          </h1>
          <p className="section-header__desc" style={{ maxWidth: '800px', fontSize: '1.2rem' }}>
            We form dedicated partnerships with ambitious startups across India to engineer scalable, high-performing software that directly transforms their business.
          </p>
        </div>

        {/* Main Two-Column Layout */}
        <div className="about__grid" style={{ marginTop: '5rem' }}>
          {/* Left Column: Founder Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-header__subtitle" style={{ color: 'var(--accent-blue)', margin: '0 0 1rem 0', display: 'block', textAlign: 'left' }}>
              The Founder's Journey
            </h2>
            <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.2', color: 'var(--text-primary)' }}>
              Hi, I'm Harshad Bagal.
            </h3>

            {/* Profile Card / Terminal replacement */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
              <div className="terminal-mockup" style={{ maxWidth: '450px' }}>
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
              
              <div className="glass-panel" style={{ padding: '2.5rem', borderLeft: '3px solid var(--accent-blue)', borderRadius: '0 16px 16px 0' }}>
                <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.8', margin: 0 }}>
                  As an MCA graduate and a Full Stack Engineer based in Navi Mumbai, I saw a massive gap in the Indian digital agency market. Startups were either forced to use bloated enterprise agencies with massive retainers, or freelancers using recycled WordPress templates.
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', margin: '1.5rem 0 0 0' }}>
                  I founded <strong>NexusWeb Solutions</strong> to bridge that gap. We don't just write code; we architect custom, scalable solutions that solve real logistical, operational, and customer-facing challenges for modern startups.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
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
          </motion.div>

          {/* Right Column: Mission & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}
          >
            <div>
              <h2 className="section-header__subtitle" style={{ color: 'var(--accent-purple)', margin: '0 0 1rem 0', display: 'block', textAlign: 'left' }}>
                Our Mission
              </h2>
              <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                Redefining Digital Standards
              </h3>
              <p className="about__text">
                Our mission is to democratize high-end software engineering. We believe every startup deserves a digital product that looks premium, runs lightning-fast, and scales effortlessly, without the enterprise bloat.
              </p>
            </div>

            <div>
              <h2 className="section-header__subtitle" style={{ color: 'var(--accent-blue)', margin: '0 0 1rem 0', display: 'block', textAlign: 'left' }}>
                Work Philosophy
              </h2>

              <div className="about__values" style={{ marginTop: '2rem' }}>
                <div className="about__value-item">
                  <div className="about__value-icon">
                    <Sparkles size={20} />
                  </div>
                  <div className="about__value-content">
                    <h4 className="about__value-title">Uncompromising Quality</h4>
                    <p className="about__value-text">
                      We completely reject drag-and-drop builders. Every line of React, Node, and CSS is custom-engineered to meet your unique business objectives.
                    </p>
                  </div>
                </div>

                <div className="about__value-item">
                  <div className="about__value-icon">
                    <Users size={20} />
                  </div>
                  <div className="about__value-content">
                    <h4 className="about__value-title">Scalable From Day One</h4>
                    <p className="about__value-text">
                      We architect databases and frontend states to handle thousands of users seamlessly, ensuring you never have to rebuild when you hit hyper-growth.
                    </p>
                  </div>
                </div>

                <div className="about__value-item">
                  <div className="about__value-icon">
                    <ShieldAlert size={20} />
                  </div>
                  <div className="about__value-content">
                    <h4 className="about__value-title">Radical Transparency</h4>
                    <p className="about__value-text">
                      No hidden costs, no convoluted tech jargon. We provide upfront pricing, clear timelines, and direct communication channels with the engineering team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
