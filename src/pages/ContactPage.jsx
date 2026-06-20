import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import useContactForm from '../hooks/useContactForm';
import '../styles/Contact.css';
import '../styles/SubPages.css';

export default function ContactPage() {
  const { formData, status, handleChange, handleSubmit } = useContactForm();

  return (
    <div className="subpage-layout">
      {/* Decorative Spheres */}
      <div className="subpage__sphere subpage__sphere--top-left"></div>
      <div className="subpage__sphere subpage__sphere--bottom-right"></div>

      <div className="section subpage-section">
        <div className="section-header">
          <h1 className="subpage__hero-title">
            <span className="text-gradient">Initiate</span> Partnership
          </h1>
          <p className="section-header__desc subpage__desc">
            Ready to engineer your next big move? Reach out to schedule a free strategy call. We respond to all serious inquiries within 24 hours.
          </p>
        </div>

        <div className="contact__grid contact__grid--spaced">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact__form"
          >
            <h3 className="contact__form-title contact__form-title--large">Project Inquiry</h3>
            <form onSubmit={handleSubmit} className="contact__form-inner">
              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__label">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="contact__input"
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    className="contact__input"
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label">Business Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="contact__input"
                />
              </div>

              <div className="contact__field">
                <label className="contact__label">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  className="contact__input"
                />
              </div>

              <div className="contact__field">
                <label className="contact__label">Estimated Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="contact__input contact__select"
                >
                  <option value="" disabled>Select an option...</option>
                  <option value="₹35,000 - ₹1,00,000">₹35,000 - ₹1,00,000 (MVP / V1)</option>
                  <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000 (Full Platform)</option>
                  <option value="₹5,00,000+">₹5,00,000+ (Enterprise Architecture)</option>
                </select>
              </div>

              <div className="contact__field">
                <label className="contact__label">Project Details *</label>
                <textarea
                  rows="5"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us about your objectives, timeline, and the core problem you are trying to solve."
                  required
                  className="contact__input contact__textarea"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`contact__submit ${status === 'loading' ? 'contact__submit--loading' : ''} ${status === 'success' ? 'contact__submit--success' : ''}`}
              >
                {status === 'loading' ? (
                  <><Loader2 className="animate-spin" size={20} /> Sending Inquiry...</>
                ) : status === 'success' ? (
                  <><CheckCircle size={20} /> Inquiry Sent via WhatsApp!</>
                ) : (
                  'Submit Inquiry'
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact__info"
          >
            <h3 className="contact__info-title contact__info-title--large">Direct Channels</h3>

            <div className="contact__info-channels">
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="contact__info-label">Give Us A Call</div>
                  <div className="contact__info-value">
                    <a href="tel:+919076450014">+91 90764 50014</a>
                  </div>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="contact__info-label">Email Strategy Team</div>
                  <div className="contact__info-value">
                    <a href="mailto:info@nexuswebsolutions.in">info@nexuswebsolutions.in</a>
                  </div>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="contact__info-label">Headquarters</div>
                  <div className="contact__info-value">Navi Mumbai, Maharashtra</div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919076450014"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__whatsapp contact__whatsapp--spaced"
            >
              <MessageCircle size={18} /> Message on WhatsApp
            </a>

            {/* Interactive styled Google Map */}
            <div className="contact__map contact__map--spaced">
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
    </div>
  );
}
