import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Search, PenTool, Braces, TestTube, Rocket } from 'lucide-react';
import '../styles/Process.css';

const steps = [
  {
    icon: <Search size={20} />,
    title: 'Discovery & Planning',
    desc: 'We analyze your business goals, target audience, and technical specs to formulate a foolproof strategic roadmap.',
    duration: '~1 Week'
  },
  {
    icon: <PenTool size={20} />,
    title: 'UI/UX Design',
    desc: 'Creating high-fidelity wireframes and interactive prototypes that prioritize user experience and conversion optimization.',
    duration: '~2 Weeks'
  },
  {
    icon: <Braces size={20} />,
    title: 'Agile Development',
    desc: 'Writing clean, scalable, and secure code using modern frameworks, turning your vision into a functional reality.',
    duration: '~4-6 Weeks'
  },
  {
    icon: <TestTube size={20} />,
    title: 'QA & Testing',
    desc: 'Rigorous multi-device testing, performance audits, and security checks to ensure a flawless launch.',
    duration: '~1 Week'
  },
  {
    icon: <Rocket size={20} />,
    title: 'Deployment & Support',
    desc: 'Deploying your product to robust cloud servers and providing ongoing maintenance to guarantee 99.9% uptime.',
    duration: 'Ongoing'
  }
];

export default function Process() {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"]
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" className="process section">
      <div className="process__wrapper">
        <div className="section-header">
          <h2 className="section-header__subtitle section-header__subtitle--blue">Our Process</h2>
          <h3 className="section-header__title">Strategic Execution For Every Project</h3>
        </div>

        <div ref={targetRef} className="process__timeline">
          {/* Vertical central line base */}
          <div className="process__line-base"></div>
          
          {/* Vertical central line active fill */}
          <motion.div 
            className="process__line-active"
            style={{ scaleY }}
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
                
                <div className="process__step-card">
                  <div className="process__step-header">
                    <div className="process__step-icon">
                      {step.icon}
                    </div>
                    <span className="process__step-duration">{step.duration}</span>
                  </div>
                  <div className="process__step-content">
                    <h4 className="process__step-title">{step.title}</h4>
                    <p className="process__step-desc">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
