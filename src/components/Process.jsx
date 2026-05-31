import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Braces, TestTube, Rocket } from 'lucide-react';
import '../styles/Process.css';

const steps = [
  {
    icon: <Search size={20} />,
    title: 'Discovery & Planning',
    desc: 'We analyze your business goals, target audience, and technical specs to formulate a foolproof strategic roadmap.'
  },
  {
    icon: <PenTool size={20} />,
    title: 'UI/UX Design',
    desc: 'Creating high-fidelity wireframes and interactive prototypes that prioritize user experience and conversion optimization.'
  },
  {
    icon: <Braces size={20} />,
    title: 'Agile Development',
    desc: 'Writing clean, scalable, and secure code using modern frameworks, turning your vision into a functional reality.'
  },
  {
    icon: <TestTube size={20} />,
    title: 'QA & Testing',
    desc: 'Rigorous multi-device testing, performance audits, and security checks to ensure a flawless launch.'
  },
  {
    icon: <Rocket size={20} />,
    title: 'Deployment & Support',
    desc: 'Deploying your product to robust cloud servers and providing ongoing maintenance to guarantee 99.9% uptime.'
  }
];

export default function Process() {
  return (
    <section id="process" className="process section">
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="section-header">
          <h2 className="section-header__subtitle" style={{ color: 'var(--accent-blue)' }}>Our Process</h2>
          <h3 className="section-header__title">Strategic Execution For Every Project</h3>
        </div>

        <div className="process__timeline">
          {/* Vertical central line */}
          <motion.div 
            className="process__line process__line--animated"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />

          {steps.map((step, index) => {
            const stepNum = index + 1;
            const stepStr = stepNum < 10 ? `0${stepNum}` : `${stepNum}`;
            return (
              <motion.div
                key={index}
                className="process__step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="process__step-number">{stepStr}</div>
                <div className="process__connector" />
                
                <div className="process__step-icon">
                  {step.icon}
                </div>
                <div className="process__step-content">
                  <h4 className="process__step-title">{step.title}</h4>
                  <p className="process__step-desc">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
