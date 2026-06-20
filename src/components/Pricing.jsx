import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import '../styles/Pricing.css';

const plans = [
  {
    name: 'Starter Website',
    price: '₹15,000',
    desc: 'Perfect for local businesses looking to establish a professional digital footprint.',
    features: ['Up to 5 Pages', 'Mobile Responsive Layout', 'Contact Form Integration', 'Basic SEO Setup', '1 Month Free Support'],
    recommended: false
  },
  {
    name: 'Business Website',
    price: '₹35,000',
    desc: 'Ideal for growing startups needing custom features and CMS capabilities.',
    features: ['Up to 15 Pages', 'Custom UI/UX Design', 'CMS Integration', 'Advanced On-Page SEO', 'Analytics Dashboard', '3 Months Free Support'],
    recommended: true
  },
  {
    name: 'E-commerce Platform',
    price: '₹60,000',
    desc: 'Scalable online stores engineered to maximize transaction success rates.',
    features: ['Unlimited Products', 'Secure Payment Gateways', 'Inventory Management', 'User Accounts/Profiles', 'High-Converting Checkout', '6 Months Free Support'],
    recommended: false
  },
  {
    name: 'Custom Mobile App',
    price: '₹80,000',
    desc: 'Native-feeling cross-platform applications for iOS and Android devices.',
    features: ['iOS & Android App', 'Custom Backend API', 'Push Notifications', 'App Store Submission', 'Real-time Database', '6 Months Free Support'],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing section">
      <div className="pricing__wrapper">
        <div className="section-header">
          <h2 className="section-header__subtitle section-header__subtitle--purple">Transparent Pricing</h2>
          <h3 className="section-header__title">Enterprise Quality At Startup Friendly Rates</h3>
          <p className="section-header__desc">
            No hidden fees. We provide clear, milestone-based pricing structures so you know exactly what you are investing in.
          </p>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              data-reveal=""
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`pricing__card ${plan.recommended ? 'pricing__card--recommended' : ''}`}
            >
              {plan.recommended && (
                <div className="pricing__badge">
                  MOST POPULAR
                </div>
              )}

              <h4 className="pricing__name">{plan.name}</h4>
              <p className="pricing__desc">{plan.desc}</p>

              <div>
                <span className="pricing__price-label">Starting at</span>
                <div className="pricing__price">
                  {plan.price} <span>/project</span>
                </div>
              </div>

              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="pricing__cta"
              >
                Get Custom Quote
              </button>

              <ul className="pricing__features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="pricing__feature">
                    <span className="pricing__feature-check">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
