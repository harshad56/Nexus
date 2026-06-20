import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { useToast } from './Toast';
import '../styles/Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast('Newsletter coming soon! We\'ll notify you at ' + email, 'info');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer__grid">
        {/* Company Info / Brand */}
        <div className="footer__brand">
          <Logo size={60} showText={true} className="footer__logo" />
          <p className="footer__brand-desc">
            Engineering scalable digital products that help startups launch faster and grow smarter.
            Proudly based in Navi Mumbai, delivering globally.
          </p>
          <div className="footer__socials">
            <a href="https://linkedin.com/company/nexuswebsolutions" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/nexuswebsolutions" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://instagram.com/nexuswebsolutions" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://g.page/nexuswebsolutions" target="_blank" rel="noopener noreferrer" className="footer__social-link footer__social-link--text">
              Google Reviews
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer__column">
          <h3 className="footer__column-title">Solutions</h3>
          <Link to="/services" className="footer__link">Web Development</Link>
          <Link to="/services" className="footer__link">App Development</Link>
          <Link to="/services" className="footer__link">UI/UX Design</Link>
          <Link to="/services" className="footer__link">API & Backend</Link>
          <Link to="/case-studies" className="footer__link">Case Studies</Link>
          <Link to="/blog" className="footer__link">Company Blog</Link>
        </div>

        {/* Contact Info Column */}
        <div className="footer__column footer__column--contact">
          <h3 className="footer__column-title">Contact Us</h3>
          <div className="footer__contact-item">
            <MapPin size={16} className="footer__contact-icon" />
            <span>Navi Mumbai, Maharashtra, India</span>
          </div>
          <div className="footer__contact-item">
            <Mail size={16} className="footer__contact-icon" />
            <a href="mailto:info@nexuswebsolutions.in">info@nexuswebsolutions.in</a>
          </div>
          <div className="footer__contact-item">
            <Phone size={16} className="footer__contact-icon" />
            <a href="tel:+919076450014">+91 90764 50014</a>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="footer__column">
          <h3 className="footer__column-title">Stay Updated</h3>
          <p className="footer__newsletter-desc">Subscribe to our newsletter for the latest tech insights, engineering articles, and agency updates.</p>
          <form onSubmit={handleNewsletterSubmit} className="footer__newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="footer__newsletter-input"
            />
            <button type="submit" className="footer__newsletter-btn" aria-label="Subscribe">
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__copyright">
          <p>&copy; {new Date().getFullYear()} NexusWeb Solutions. All Rights Reserved.</p>
        </div>
        
        <div className="footer__legal-links">
          <Link to="/privacy-policy" className="footer__legal-link">Privacy Policy</Link>
          <Link to="/terms-conditions" className="footer__legal-link">Terms & Conditions</Link>
          <Link to="/refund-policy" className="footer__legal-link">Refund Policy</Link>
          <Link to="/cookie-policy" className="footer__legal-link">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
