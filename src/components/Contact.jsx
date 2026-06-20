import React from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import useContactForm from '../hooks/useContactForm';
import '../styles/Contact.css';

const projectTypes = ['Web App', 'Mobile App', 'SaaS Platform', 'E-Commerce', 'UI/UX Design', 'API & Backend'];
const budgetRanges = ['₹15K – ₹50K', '₹50K – ₹1.5L', '₹1.5L – ₹5L', '₹5L+'];

export default function Contact() {
  const { formData, status, handleChange, handleSelectField, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="contact section">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-header__subtitle section-header__subtitle--purple">Start Your Project</h2>
          <h3 className="section-header__title">Let's Engineer Something Great Together</h3>
        </div>

        <div className="contact__grid">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="contact__form glass-panel"
          >
            <h4 className="contact__form-title">Project Inquiry</h4>

            <form onSubmit={handleSubmit} className="contact__form-inner">
              <div className="contact__form-row">
                <div className={`contact__field ${formData.firstName ? 'has-value' : ''}`}>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="contact__input"
                    id="contact-firstName"
                  />
                  <label htmlFor="contact-firstName" className="contact__floating-label">First Name *</label>
                </div>
                <div className={`contact__field ${formData.lastName ? 'has-value' : ''}`}>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="contact__input"
                    id="contact-lastName"
                  />
                  <label htmlFor="contact-lastName" className="contact__floating-label">Last Name *</label>
                </div>
              </div>

              <div className={`contact__field ${formData.email ? 'has-value' : ''}`}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact__input"
                  id="contact-email"
                />
                <label htmlFor="contact-email" className="contact__floating-label">Business Email *</label>
              </div>

              <div className={`contact__field ${formData.company ? 'has-value' : ''}`}>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="contact__input"
                  id="contact-company"
                />
                <label htmlFor="contact-company" className="contact__floating-label">Company Name</label>
              </div>

              {/* Project Type Pills */}
              <div className="contact__selection-group">
                <span className="contact__selection-label">Project Type</span>
                <div className="contact__pill-container">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`contact__pill ${formData.projectType === type ? 'contact__pill--active' : ''}`}
                      onClick={() => handleSelectField('projectType', type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range Pills */}
              <div className="contact__selection-group">
                <span className="contact__selection-label">Budget Range</span>
                <div className="contact__pill-container">
                  {budgetRanges.map((range) => (
                    <button
                      key={range}
                      type="button"
                      className={`contact__pill ${formData.budget === range ? 'contact__pill--active' : ''}`}
                      onClick={() => handleSelectField('budget', range)}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              <div className={`contact__field ${formData.details ? 'has-value' : ''}`}>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  className="contact__input contact__textarea"
                  id="contact-details"
                />
                <label htmlFor="contact-details" className="contact__floating-label">Tell us about your project *</label>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`contact__submit ${status === 'loading' ? 'contact__submit--loading' : ''} ${status === 'success' ? 'contact__submit--success' : ''}`}
              >
                {status === 'loading' ? (
                  <><Loader2 className="animate-spin" size={20} /> Sending...</>
                ) : status === 'success' ? (
                  <><CheckCircle size={20} /> Sent via WhatsApp!</>
                ) : (
                  <><Send size={18} /> Send Inquiry</>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="contact__info"
          >
            <div className="contact__info-card glass-panel">
              <h4 className="contact__info-title">Direct Contact</h4>
              <p className="contact__info-text">
                Prefer a direct conversation? We're available on WhatsApp and email for all business inquiries.
              </p>

              <div className="contact__info-list">
                <div className="contact__info-item">
                  <div className="contact__info-icon"><Phone size={20} /></div>
                  <div>
                    <div className="contact__info-label">Phone</div>
                    <div className="contact__info-value"><a href="tel:+919076450014">+91 90764 50014</a></div>
                  </div>
                </div>
                <div className="contact__info-item">
                  <div className="contact__info-icon"><Mail size={20} /></div>
                  <div>
                    <div className="contact__info-label">Email</div>
                    <div className="contact__info-value"><a href="mailto:info@nexuswebsolutions.in">info@nexuswebsolutions.in</a></div>
                  </div>
                </div>
                <div className="contact__info-item">
                  <div className="contact__info-icon"><MapPin size={20} /></div>
                  <div>
                    <div className="contact__info-label">Location</div>
                    <div className="contact__info-value">Navi Mumbai, Maharashtra</div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919076450014"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__whatsapp"
              >
                <MessageCircle size={18} /> Message on WhatsApp
              </a>
            </div>

            {/* Google Map */}
            <div className="contact__map glass-panel">
              <iframe
                title="NexusWeb Solutions Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120653.25055018619!2d72.9554030638521!3d19.08337834515574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714420000000!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
