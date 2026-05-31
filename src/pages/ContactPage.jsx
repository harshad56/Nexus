import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    budget: '',
    details: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // 1. Construct WhatsApp message and open it (Primary Action)
    const whatsappNumber = '919076450014';
    const message = `Hi NexusWeb Solutions,\n\nI am ${formData.firstName} ${formData.lastName} from ${formData.company || 'a company'}.\nEmail: ${formData.email}\nBudget Range: ${formData.budget || 'Not specified'}\n\nProject Details:\n${formData.details}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    // 2. Attempt to send Email invisibly
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // REPLACE THIS
        'YOUR_TEMPLATE_ID', // REPLACE THIS
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          company: formData.company,
          budget: formData.budget,
          message: formData.details,
          to_name: 'Harshad Bagal',
        },
        'YOUR_PUBLIC_KEY' // REPLACE THIS
      );
    } catch (error) {
      console.log("EmailJS Note: Configure your keys in ContactPage.jsx to receive emails. WhatsApp redirect succeeded.");
    }

    // 3. Always show success since WhatsApp opened
    setStatus('success');
    setFormData({ firstName: '', lastName: '', email: '', company: '', budget: '', details: '' }); // reset
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="subpage-layout">
      {/* Decorative Spheres */}
      <div className="gradient-sphere" style={{ top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)', position: 'absolute', pointerEvents: 'none' }}></div>
      <div className="gradient-sphere" style={{ bottom: '10%', right: '-20%', width: '45vw', height: '45vw', background: 'radial-gradient(circle, rgba(138,43,226,0.06) 0%, transparent 70%)', position: 'absolute', pointerEvents: 'none' }}></div>

      <div className="section subpage-section">
        <div className="section-header">
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-2px', lineHeight: '1.1', color: 'var(--text-primary)' }}>
            <span className="text-gradient">Initiate</span> Partnership
          </h1>
          <p className="section-header__desc" style={{ maxWidth: '800px', fontSize: '1.2rem' }}>
            Ready to engineer your next big move? Reach out to schedule a free strategy call. We respond to all serious inquiries within 24 hours.
          </p>
        </div>

        <div className="contact__grid" style={{ marginTop: '5rem' }}>
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact__form"
          >
            <h3 className="contact__form-title" style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Project Inquiry</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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
                  className="contact__input"
                  style={{ appearance: 'none', background: 'rgba(255, 255, 255, 0.03)', color: 'var(--text-primary)' }}
                >
                  <option value="" disabled style={{ background: '#0a0a0c' }}>Select an option...</option>
                  <option value="₹35,000 - ₹1,00,000" style={{ background: '#0a0a0c' }}>₹35,000 - ₹1,00,000 (MVP / V1)</option>
                  <option value="₹1,00,000 - ₹5,00,000" style={{ background: '#0a0a0c' }}>₹1,00,000 - ₹5,00,000 (Full Platform)</option>
                  <option value="₹5,00,000+" style={{ background: '#0a0a0c' }}>₹5,00,000+ (Enterprise Architecture)</option>
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
              {status === 'error' && (
                <p style={{ color: '#ef4444', fontSize: '0.85rem', textAlign: 'center', margin: 0 }}>
                  Failed to send inquiry. Please reach out on WhatsApp directly.
                </p>
              )}
            </form>
          </motion.div>

          {/* Right Column: Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact__info"
          >
            <h3 className="contact__info-title" style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Direct Channels</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="contact__info-label">Give Us A Call</div>
                  <div className="contact__info-value">
                    <a href="tel:+919076450014" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>+91 90764 50014</a>
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
                    <a href="mailto:info@nexuswebsolutions.in" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>info@nexuswebsolutions.in</a>
                  </div>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="contact__info-label">Headquarters</div>
                  <div className="contact__info-value" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Navi Mumbai, Maharashtra</div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919076450014"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__whatsapp"
              style={{ marginTop: '1.5rem' }}
            >
              Message on WhatsApp
            </a>

            {/* Interactive styled Google Map */}
            <div className="contact__map" style={{ marginTop: '1.5rem', aspectRatio: '16/10' }}>
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
