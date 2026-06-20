import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Coins, Clock, Code, HeadphonesIcon, TrendingUp } from 'lucide-react';
import '../styles/WhyChooseUs.css';

const benefits = [
  { icon: <MapPin size={24} />, title: 'Based in Mumbai, India', desc: 'Local accountability with global execution standards.' },
  { icon: <Coins size={24} />, title: 'Transparent Pricing', desc: 'No hidden fees. Every cost is justified and outlined upfront.' },
  { icon: <Clock size={24} />, title: 'On-Time Delivery', desc: 'We respect your launch window and strictly adhere to milestone deadlines.' },
  { icon: <Code size={24} />, title: '100% Custom Code', desc: 'No bloated templates. We engineer bespoke architectures for max performance.' },
  { icon: <HeadphonesIcon size={24} />, title: 'Dedicated Support', desc: 'Direct communication channels with the engineers building your product.' },
  { icon: <TrendingUp size={24} />, title: 'Startup Friendly', desc: 'We build MVPs that scale, prioritizing features that drive revenue.' }
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const totalWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    const maxIndex = benefits.length - 1;

    let index = 0;
    if (totalWidth > 0) {
      index = Math.round((scrollPosition / totalWidth) * maxIndex);
    }
    setActiveIndex(Math.min(Math.max(index, 0), maxIndex));
  };

  return (
    <section className="why-us why-us--bordered section">
      <div className="why-us__wrapper">
        <div className="section-header">
          <h2 className="section-header__subtitle section-header__subtitle--blue">The NexusWeb Advantage</h2>
          <h3 className="section-header__title">Why Top Startups Partner With Us</h3>
        </div>

        <div 
          className="why-us__grid"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="why-us__card"
            >
              <div className="why-us__icon">
                {benefit.icon}
              </div>
              <div>
                <h4 className="why-us__title">{benefit.title}</h4>
                <p className="why-us__text">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile scroll indicator dots */}
        <div className="mobile-dots">
          {benefits.map((_, idx) => (
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
