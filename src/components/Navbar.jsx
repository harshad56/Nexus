import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import '../styles/Navbar.css';

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.25,
      ease: 'easeIn'
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 20 } },
  exit: { opacity: 0, y: 15, transition: { duration: 0.15 } }
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`navbar ${isScrolled || isMobileMenuOpen ? 'navbar--scrolled' : ''}`}
      >
        <div className="navbar__container">
          {/* Brand / Logo */}
          <div className="navbar__brand">
            {location.pathname !== '/' && (
              <button
                className="navbar__back-btn"
                onClick={() => navigate(-1)}
                aria-label="Go back"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <Link to="/" className="navbar__logo" onClick={closeMenu}>
              <Logo size={48} showText={true} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="navbar__links" aria-label="Main navigation">
            <ul>
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`navbar__link ${location.pathname === to ? 'navbar__link--active' : ''}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <Link to="/contact">
              <button className="navbar__cta">Start a Project</button>
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            className="navbar__toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={24} color="var(--text-primary)" />
            ) : (
              <Menu size={24} color="var(--text-primary)" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Sidebar Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="navbar__mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Dropdown Card */}
            <motion.div
              className="navbar__mobile"
              initial={{ opacity: 0, scale: 0.95, y: -15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <motion.li variants={itemVariants}>
                  <Link
                    to="/"
                    className={`navbar__mobile-link ${location.pathname === '/' ? 'navbar__mobile-link--active' : ''}`}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </motion.li>
                {navLinks.map(({ to, label }) => (
                  <motion.li key={to} variants={itemVariants}>
                    <Link
                      to={to}
                      className={`navbar__mobile-link ${location.pathname === to ? 'navbar__mobile-link--active' : ''}`}
                      onClick={closeMenu}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div 
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="navbar__mobile-bottom"
              >
                <div className="navbar__mobile-theme-row">
                  <span className="navbar__mobile-theme-label">Theme Mode</span>
                  <ThemeToggle />
                </div>
                <Link to="/contact" onClick={closeMenu} className="navbar__mobile-cta-wrapper">
                  <button className="navbar__mobile-cta">
                    Start a Project
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
