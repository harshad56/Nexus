import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Services.css';
import '../styles/SubPages.css';

export default function ServicesPage() {
  return (
    <div className="subpage-layout">
      {/* Decorative Spheres */}
      <div className="subpage__sphere subpage__sphere--top-right"></div>
      <div className="subpage__sphere subpage__sphere--bottom-left"></div>

      <div className="section subpage-section">
        <div className="section-header">
          <h1 className="subpage__hero-title">
            Elite <span className="text-gradient">Engineering Services</span>
          </h1>
          <p className="section-header__desc subpage__desc">
            As a premier Software Solutions provider in Navi Mumbai, we execute end-to-end digital product transformations, from robust React architectures to native mobile experiences.
          </p>
        </div>

        <div className="subpage__sections">
          
          {/* Service 1: Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel glass-panel--padded"
          >
            <div className="subpage__card-layout">
              <div className="subpage__card-main">
                <h2 className="section-header__subtitle subpage__section-subtitle section-header__subtitle--blue">
                  Web Development Company in Mumbai
                </h2>
                <h3 className="subpage__section-title">
                  Scalable Web Application Engineering
                </h3>

                <div className="subpage__content-block">
                  <h4 className="subpage__content-heading">The Business Problem</h4>
                  <p className="subpage__content-text">
                    Startups often launch with slow, monolithic WordPress sites that buckle under traffic spikes, causing high bounce rates and lost revenue.
                  </p>
                </div>
                <div className="subpage__content-block">
                  <h4 className="subpage__content-heading">Our Engineering Solution</h4>
                  <p className="subpage__content-text">
                    We architect custom React/Next.js frontends decoupled from headless architectures, ensuring sub-second load times and infinite scalability on edge networks like Vercel or AWS.
                  </p>
                </div>
              </div>

              <div className="subpage__card-sidebar">
                <h4 className="subpage__specs-title">Service Specs</h4>
                <ul className="subpage__specs-list">
                  <li><strong>Core Stack:</strong> React, Java, Spring Boot, Node.js</li>
                  <li><strong>Database:</strong> PostgreSQL, MongoDB, Redis</li>
                  <li><strong>Hosting & Infra:</strong> Vercel, AWS (EC2/S3/Amplify)</li>
                </ul>
                <div className="subpage__specs-footer">
                  <span className="subpage__specs-price">From ₹35,000</span>
                  <Link to="/contact" className="portfolio__live-link portfolio__live-link--sm">
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
            className="glass-panel glass-panel--padded"
          >
            <div className="subpage__card-layout">
              <div className="subpage__card-main">
                <h2 className="section-header__subtitle subpage__section-subtitle section-header__subtitle--purple">
                  App Development India
                </h2>
                <h3 className="subpage__section-title">
                  Native & Cross-Platform Mobile Apps
                </h3>

                <div className="subpage__content-block">
                  <h4 className="subpage__content-heading">The Business Problem</h4>
                  <p className="subpage__content-text">
                    Developing separate codebases for iOS and Android doubles the engineering budget and slows down time-to-market drastically.
                  </p>
                </div>
                <div className="subpage__content-block">
                  <h4 className="subpage__content-heading">Our Engineering Solution</h4>
                  <p className="subpage__content-text">
                    We leverage React Native and Flutter to build high-performance, native-feeling mobile applications from a single codebase, cutting costs in half while maintaining premium UI/UX standards.
                  </p>
                </div>
              </div>

              <div className="subpage__card-sidebar">
                <h4 className="subpage__specs-title">Service Specs</h4>
                <ul className="subpage__specs-list">
                  <li><strong>Core Stack:</strong> React Native, Flutter, Swift</li>
                  <li><strong>Backend & Auth:</strong> Firebase, Custom Node.js API</li>
                  <li><strong>Deployment:</strong> App Store, Google Play Store</li>
                </ul>
                <div className="subpage__specs-footer">
                  <span className="subpage__specs-price">From ₹80,000</span>
                  <Link to="/contact" className="portfolio__live-link portfolio__live-link--sm">
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
            className="glass-panel glass-panel--padded"
          >
            <div className="subpage__card-layout">
              <div className="subpage__card-main">
                <h2 className="section-header__subtitle subpage__section-subtitle section-header__subtitle--blue">
                  Conversion Rate Optimization
                </h2>
                <h3 className="subpage__section-title">
                  Premium UI/UX System Design
                </h3>

                <div className="subpage__content-block">
                  <h4 className="subpage__content-heading">The Business Problem</h4>
                  <p className="subpage__content-text">
                    A confusing, generic interface destroys user trust instantly. Users abandon apps and websites within seconds if the design feels cheap or unintuitive.
                  </p>
                </div>
                <div className="subpage__content-block">
                  <h4 className="subpage__content-heading">Our Engineering Solution</h4>
                  <p className="subpage__content-text">
                    We utilize data-driven design psychology to craft stunning, interactive interfaces in Figma. We focus on modern aesthetics (dark mode, glassmorphism) to maximize user retention and brand authority.
                  </p>
                </div>
              </div>

              <div className="subpage__card-sidebar">
                <h4 className="subpage__specs-title">Service Specs</h4>
                <ul className="subpage__specs-list">
                  <li><strong>Tools:</strong> Figma, Adobe Creative Cloud</li>
                  <li><strong>Deliverables:</strong> Design System, Interactive Prototype</li>
                  <li><strong>Implementation:</strong> Tailwind CSS, CSS3, Framer Motion</li>
                </ul>
                <div className="subpage__specs-footer">
                  <span className="subpage__specs-price">Custom Quote</span>
                  <Link to="/contact" className="portfolio__live-link portfolio__live-link--sm">
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
