import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, PenTool, Database, ShieldCheck, ArrowRight } from 'lucide-react';
import '../styles/Services.css';

const services = [
  {
    icon: <Globe size={28} />,
    title: 'Web Development',
    desc: 'Custom-built websites, complex SaaS platforms, and high-converting E-commerce solutions engineered for speed and scale.',
    stack: ['React', 'Node.js', 'Next.js', 'Spring Boot'],
    price: 'Starting ₹35,000',
    glowColor: 'rgba(0, 240, 255, 0.4)'
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Mobile App Development',
    desc: 'High-performance, native iOS and Android applications built using cross-platform technology for faster time-to-market.',
    stack: ['React Native', 'Flutter', 'Firebase'],
    price: 'Starting ₹80,000',
    glowColor: 'rgba(138, 43, 226, 0.4)'
  },
  {
    icon: <PenTool size={28} />,
    title: 'UI/UX Design',
    desc: 'Data-driven, user-centric interface design that not only looks stunning but maximizes conversion rates and user retention.',
    stack: ['Figma', 'CSS3', 'Framer Motion'],
    price: 'Custom Quote',
    glowColor: 'rgba(255, 0, 127, 0.3)'
  },
  {
    icon: <Database size={28} />,
    title: 'API & Backend Dev',
    desc: 'Secure, scalable, and robust server-side architectures designed to handle complex business logic and high traffic loads.',
    stack: ['Java', 'Spring Boot', 'Express', 'PostgreSQL'],
    price: 'Custom Quote',
    glowColor: 'rgba(0, 255, 127, 0.3)'
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Maintenance & Support',
    desc: 'Continuous monitoring, bug fixing, performance optimization, and regular updates to ensure your product runs flawlessly.',
    stack: ['AWS', 'Vercel', 'CI/CD', 'Docker'],
    price: 'Retainer Plans',
    glowColor: 'rgba(255, 215, 0, 0.3)'
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const totalWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    const maxIndex = services.length - 1;

    let index = 0;
    if (totalWidth > 0) {
      index = Math.round((scrollPosition / totalWidth) * maxIndex);
    }
    setActiveIndex(Math.min(Math.max(index, 0), maxIndex));
  };

  return (
    <section id="services" className="services section">
      <div className="services__gradient-sphere"></div>

      <div className="services__wrapper">
        <div className="section-header">
          <h2 className="section-header__subtitle section-header__subtitle--purple">Our Services</h2>
          <h3 className="section-header__title">Comprehensive Engineering For Your Digital Growth</h3>
          <p className="section-header__desc">
            We don't do basic WordPress setups. We engineer custom React architectures, robust Node.js backend systems, and native mobile experiences that give your startup an unfair advantage.
          </p>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="services__grid"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`services__card ${index === 0 ? 'services__card--featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{ '--card-glow': service.glowColor }}
            >
              <div className="services__icon">
                {service.icon}
              </div>
              <h4 className="services__title">{service.title}</h4>
              <p className="services__desc">
                {service.desc}
              </p>

              <div className="services__meta">
                <div className="services__tech-stack">
                  {service.stack.map((tech, i) => (
                    <span key={i} className="services__tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="services__inquire-container">
                  <span className="services__price">{service.price}</span>
                  <a href="#contact" className="text-gradient services__inquire-link">
                    Inquire <ArrowRight size={16} className="services__inquire-arrow" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile scroll indicator dots */}
        <div className="mobile-dots">
          {services.map((_, idx) => (
            <div 
              key={idx} 
              className={`mobile-dot ${idx === activeIndex ? 'mobile-dot--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
