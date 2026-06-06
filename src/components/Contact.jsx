import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Loader2, CheckCircle, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const projectTypes = ['Web App', 'Mobile App', 'Corporate Website', 'E-commerce', 'UI/UX Design', 'Other'];
const budgetRanges = ['< ₹50k', '₹50k - ₹1L', '₹1L - ₹5L', '₹5L+'];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    details: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectType = (type) => {
    setFormData({ ...formData, projectType: type });
  };

  const handleSelectBudget = (budget) => {
    setFormData({ ...formData, budget: budget });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const whatsappNumber = '919076450014';
    const message = `Hi NexusWeb Solutions,\n\nI am ${formData.firstName} ${formData.lastName} from ${formData.company || 'N/A'}.\nEmail: ${formData.email}\n\n*Project Requirement*\nType: ${formData.projectType || 'Not specified'}\nBudget: ${formData.budget || 'Not specified'}\n\n*Details:*\n${formData.details}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          company: formData.company,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.details,
          to_name: 'Harshad Bagal',
        },
        'YOUR_PUBLIC_KEY'
      );
    } catch (error) {
      console.log("EmailJS Note: Configure your keys. WhatsApp redirect succeeded.");
    }

    setStatus('success');
    setFormData({ firstName: '', lastName: '', email: '', company: '', projectType: '', budget: '', details: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="contact section">
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="section-header">
          <h2 className="section-header__subtitle" style={{ color: 'var(--accent-purple)' }}>Initiate Partnership</h2>
          <h3 className="section-header__title">Ready To Engineer Your Next Big Move?</h3>
          <p className="section-header__desc">
            Fill out the form below or reach us directly. Let's schedule a free strategy call to discuss your business objectives and technical requirements.
          </p>
        </div>

        <div className="contact__grid">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact__form glass-panel"
          >
            <h4 className="contact__form-title">Tell Us About Your Project</h4>
            
            <form onSubmit={handleSubmit} className="contact__form-inner">
              
              <div className="contact__form-row">
                <div className={`contact__field ${formData.firstName ? 'has-value' : ''}`}>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="contact__input" />
                  <label className="contact__floating-label">First Name *</label>
                </div>
                <div className={`contact__field ${formData.lastName ? 'has-value' : ''}`}>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="contact__input" />
                  <label className="contact__floating-label">Last Name *</label>
                </div>
              </div>

              <div className="contact__form-row">
                <div className={`contact__field ${formData.email ? 'has-value' : ''}`}>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="contact__input" />
                  <label className="contact__floating-label">Business Email *</label>
                </div>
                <div className={`contact__field ${formData.company ? 'has-value' : ''}`}>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="contact__input" />
                  <label className="contact__floating-label">Company Name</label>
                </div>
              </div>

              {/* Project Type Selection */}
              <div className="contact__selection-group">
                <label className="contact__selection-label">What are you looking for?</label>
                <div className="contact__pill-container">
                  {projectTypes.map(type => (
                    <button
                      key={type}
                      type="button"
                      className={`contact__pill ${formData.projectType === type ? 'contact__pill--active' : ''}`}
                      onClick={() => handleSelectType(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Selection */}
              <div className="contact__selection-group">
                <label className="contact__selection-label">Estimated Budget</label>
                <div className="contact__pill-container">
                  {budgetRanges.map(budget => (
                    <button
                      key={budget}
                      type="button"
                      className={`contact__pill ${formData.budget === budget ? 'contact__pill--active' : ''}`}
                      onClick={() => handleSelectBudget(budget)}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              <div className={`contact__field ${formData.details ? 'has-value' : ''}`}>
                <textarea rows="4" name="details" value={formData.details} onChange={handleChange} required className="contact__input contact__textarea" />
                <label className="contact__floating-label">Project Details & Objectives *</label>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`contact__submit ${status === 'loading' ? 'contact__submit--loading' : ''} ${status === 'success' ? 'contact__submit--success' : ''}`}
              >
                {status === 'loading' ? (
                  <><Loader2 className="animate-spin" size={18} /> Processing Request...</>
                ) : status === 'success' ? (
                  <><CheckCircle size={18} /> Directed to WhatsApp!</>
                ) : (
                  <>Send Request <Send size={16} /></>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Column: Info & Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact__info"
          >
            <div className="contact__info-card glass-panel">
              <h4 className="contact__info-title">Contact Information</h4>
              <p className="contact__info-text">
                Have questions about pricing, project timelines, or tech stacks? Reach out directly and let's start co-creating your platform.
              </p>

              <div className="contact__info-list">
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
                Chat directly on WhatsApp
              </a>
            </div>

            {/* Embedded styled Dark Theme Map */}
            <div className="contact__map glass-panel">
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
