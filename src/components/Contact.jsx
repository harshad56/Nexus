import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
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
    const message = `Hi NexusWeb Solutions,\n\nI am ${formData.firstName} ${formData.lastName}.\nEmail: ${formData.email}\n\nProject Details:\n${formData.details}`;
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
          message: formData.details,
          to_name: 'Harshad Bagal',
        },
        'YOUR_PUBLIC_KEY' // REPLACE THIS
      );
    } catch (error) {
      console.log("EmailJS Note: Configure your keys in Contact.jsx to receive emails. WhatsApp redirect succeeded.");
    }

    // 3. Always show success since WhatsApp opened
    setStatus('success');
    setFormData({ firstName: '', lastName: '', email: '', details: '' }); // reset
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="contact section">
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="section-header">
          <h2 className="section-header__subtitle" style={{ color: 'var(--accent-purple)' }}>Initiate Partnership</h2>
          <h3 className="section-header__title">Ready To Engineer Your Next Big Move?</h3>
          <p className="section-header__desc">
            Fill out the form below or reach us directly. Let's schedule a free strategy call to discuss your business objectives.
          </p>
        </div>

        <div className="contact__grid">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact__form"
          >
            <h4 className="contact__form-title">Send Us a Message</h4>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__label">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter name"
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
                    placeholder="Enter last name"
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
                  placeholder="email"
                  required
                  className="contact__input"
                />
              </div>

              <div className="contact__field">
                <label className="contact__label">Project Details *</label>
                <textarea
                  rows="4"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Briefly describe your objectives and timeline..."
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
                  <><Loader2 className="animate-spin" size={18} /> Sending Inquiry...</>
                ) : status === 'success' ? (
                  <><CheckCircle size={18} /> Inquiry Sent via WhatsApp!</>
                ) : (
                  'Schedule Your Free Strategy Call'
                )}
              </button>
              {status === 'error' && (
                <p style={{ color: '#ef4444', fontSize: '0.85rem', textAlign: 'center', margin: 0 }}>
                  Failed to send inquiry. Please reach out on WhatsApp directly.
                </p>
              )}
            </form>
          </motion.div>

          {/* Right Column: Info & Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact__info"
          >
            <h4 className="contact__info-title">Contact Information</h4>
            <p className="contact__info-text">
              Have questions about pricing, project timelines, or tech stacks? Reach out directly and let's start co-creating your platform.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact__info-label">Business Inquiries</div>
                  <div className="contact__info-value">
                    <a href="mailto:info@nexuswebsolutions.in">info@nexuswebsolutions.in</a>
                  </div>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact__info-label">Direct Line</div>
                  <div className="contact__info-value">
                    <a href="tel:+919076450014">+91 90764 50014</a>
                  </div>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact__info-label">HQ Location</div>
                  <div className="contact__info-value">Navi Mumbai, Maharashtra, India</div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919076450014"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__whatsapp"
            >
              Chat on WhatsApp
            </a>

            {/* Embedded styled Dark Theme Map */}
            <div className="contact__map">
              <iframe
                title="NexusWeb Solutions HQ Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120682.02986422896!2d72.99849205!3d19.0308064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3c86121f1d1%3A0xe2b450ff719e7a2b!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1684346850239!5m2!1sen!2sin"
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
