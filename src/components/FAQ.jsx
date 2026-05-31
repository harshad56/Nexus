import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import '../styles/FAQ.css';

const faqs = [
  {
    question: 'What services does NexusWeb Solutions offer?',
    answer: 'We specialize in bespoke web application development (using React, Node.js, Next.js, Spring Boot), cross-platform mobile app development (Flutter, React Native), SaaS engineering, cloud infrastructure setup, and custom API integrations.'
  },
  {
    question: 'How long does it typically take to build a project?',
    answer: 'Timelines depend on the scale and complexity of the project. A custom business application or MVP typically takes 4–6 weeks, while a comprehensive enterprise platform or SaaS product can take 8–12 weeks. We work in structured weekly sprints so you see active progress.'
  },
  {
    question: 'How do you handle project pricing?',
    answer: 'We offer flexible engagement models. For projects with clearly defined requirements, we offer a Fixed Price model. For evolving projects or ongoing developments, we offer dedicated developer pricing (monthly retainer) or standard time-and-materials engagement.'
  },
  {
    question: 'Do you offer support and maintenance after the launch?',
    answer: 'Yes, we provide 30 days of complimentary support after launch to address any bug fixes or deployment adjustments. Beyond that, we offer custom monthly maintenance plans covering security patches, server monitoring, backups, and continuous feature additions.'
  },
  {
    question: 'Will I own the source code and intellectual property rights?',
    answer: 'Absolutely. Once the project is completed and all deliverables are signed off, 100% ownership of the source code, IP rights, database structures, and designs is transferred directly to you.'
  },
  {
    question: 'How do we track the progress of our project?',
    answer: 'We believe in complete transparency. We provide you access to a shared project board (such as Trello or Jira) where you can track weekly sprints, host staging URLs for real-time testing, and arrange regular progress reviews to align on milestones.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section">
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="section-header">
          <h2 className="section-header__subtitle" style={{ color: 'var(--accent-blue)' }}>Have Questions?</h2>
          <h3 className="section-header__title">Frequently Asked Questions</h3>
        </div>

        <div className="faq__container">
          <div className="faq__grid">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <button
                    className="faq__question-btn"
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq__question-text">
                      <HelpCircle size={18} className="faq__icon" />
                      {faq.question}
                    </span>
                    <span className="faq__toggle-icon">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq__answer-wrapper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <p className="faq__answer-text">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
