import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__content">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="notfound__code"
        >
          <span className="notfound__4">4</span>
          <span className="notfound__0">0</span>
          <span className="notfound__4">4</span>
        </motion.div>

        <motion.h1
          className="notfound__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="notfound__desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </motion.p>

        <motion.div
          className="notfound__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/" className="notfound__btn notfound__btn--primary">
            <Home size={18} /> Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="notfound__btn notfound__btn--secondary"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </motion.div>
      </div>

      {/* Decorative blobs */}
      <div className="bg-glow-container">
        <div className="bg-glow-blob bg-glow-blob--blue"></div>
        <div className="bg-glow-blob bg-glow-blob--purple"></div>
      </div>
    </div>
  );
}
