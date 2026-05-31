import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';
import Logo from './Logo';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        {/* Company Info / Brand */}
        <div className="footer__brand">
          <Logo size={60} showText={true} style={{ marginBottom: '0.5rem' }} />
          <p className="footer__brand-desc">
            Engineering scalable digital products that help startups launch faster and grow smarter.
            Proudly based in Navi Mumbai, delivering globally.
          </p>
          <div className="footer__socials">
            <span className="footer__social-link" aria-label="LinkedIn">
              <Linkedin size={18} />
            </span>
            <span className="footer__social-link" aria-label="GitHub">
              <Github size={18} />
            </span>
            <span className="footer__social-link" aria-label="Instagram">
              <Instagram size={18} />
            </span>
            <span className="footer__social-link" style={{ width: 'auto', padding: '0 0.75rem', fontSize: '0.8rem', fontWeight: '600' }}>
              Google Reviews
            </span>
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
        <div className="footer__column" style={{ minWidth: '200px' }}>
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
      </div>

      <div className="footer__bottom">
        <div className="footer__copyright">
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} NexusWeb Solutions. All Rights Reserved.</p>
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
