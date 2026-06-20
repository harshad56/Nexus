import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldAlert, Sparkles } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import '../styles/About.css';
import '../styles/SubPages.css';

export default function AboutPage() {
  return (
    <div className="subpage-layout">
      {/* Decorative Spheres */}
      <div className="subpage__sphere subpage__sphere--top-left"></div>
      <div className="subpage__sphere subpage__sphere--bottom-right"></div>

      <div className="section subpage-section">
        <div className="section-header">
          <h1 className="subpage__hero-title">
            Engineering <br /><span className="text-gradient">Digital Authority</span>
          </h1>
          <p className="section-header__desc subpage__desc">
            We form dedicated partnerships with ambitious startups across India to engineer scalable, high-performing software that directly transforms their business.
          </p>
        </div>

        {/* Main Two-Column Layout */}
        <div className="about__grid about__grid--spaced">
          {/* Left Column: Founder Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-header__subtitle subpage__section-subtitle section-header__subtitle--blue">
              The Founder's Journey
            </h2>
            <h3 className="subpage__section-title">
              Hi, I'm Harshad Bagal.
            </h3>

            {/* Profile Card / Terminal replacement */}
            <div className="about__founder-profile">
              <div className="terminal-mockup terminal-mockup--about">
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
                  <p><span className="terminal-mockup__prompt">$</span> node run agency.js</p>
                  <p className="terminal-mockup__line--blue">✔ Initializing Custom Architecture...</p>
                  <p className="terminal-mockup__line--purple">✔ Decoupling UI from bloated templates...</p>
                  <p className="terminal-mockup__line--green">✔ Optimization rating: 100/100 (Lighthouse)</p>
                  <p className="terminal-mockup__line--yellow">&gt;&gt;&gt; Deploying Serverless Endpoint...</p>
                  <p>Location: Navi Mumbai, India [HQ]</p>
                  <p>Target: PAN India Startups &amp; Enterprises</p>
                  <p className="terminal-mockup__line--margin-top"><span className="terminal-mockup__highlight">nexusweb-system</span>: active_running</p>
                </div>

                {/* Performance Stats Overlay */}
                <div className="terminal-mockup__stats">
                  <div>
                    <span className="terminal-mockup__stat-label">LATENCY</span>
                    <strong className="terminal-mockup__stat-val terminal-mockup__stat-val--green">14ms</strong>
                  </div>
                  <div>
                    <span className="terminal-mockup__stat-label">TEMPLATES</span>
                    <strong className="terminal-mockup__stat-val terminal-mockup__stat-val--red">0%</strong>
                  </div>
                  <div>
                    <span className="terminal-mockup__stat-label">PERFORMANCE</span>
                    <strong className="terminal-mockup__stat-val terminal-mockup__stat-val--blue">100%</strong>
                  </div>
                </div>
              </div>
              
              <div className="about__quote">
                <p className="about__quote-text">
                  As an MCA graduate and a Full Stack Engineer based in Navi Mumbai, I saw a massive gap in the Indian digital agency market. Startups were either forced to use bloated enterprise agencies with massive retainers, or freelancers using recycled WordPress templates.
                </p>
                <p className="about__quote-subtext">
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
                <strong className="about__stat-number text-gradient">PAN</strong>
                <div className="about__stat-label">India Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about__mission-column"
          >
            <div>
              <h2 className="section-header__subtitle subpage__section-subtitle section-header__subtitle--purple">
                Our Mission
              </h2>
              <h3 className="subpage__section-title">
                Redefining Digital Standards
              </h3>
              <p className="about__text">
                Our mission is to democratize high-end software engineering. We believe every startup deserves a digital product that looks premium, runs lightning-fast, and scales effortlessly, without the enterprise bloat.
              </p>
            </div>

            <div>
              <h2 className="section-header__subtitle subpage__section-subtitle section-header__subtitle--blue">
                Work Philosophy
              </h2>

              <div className="about__values about__values--spaced">
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
