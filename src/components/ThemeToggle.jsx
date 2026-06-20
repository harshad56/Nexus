import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from './Toast';
import '../styles/ThemeToggle.css';

const STORAGE_KEY = 'theme';

/** Safely read the persisted theme; returns null if storage is unavailable. */
function readStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

/** Safely persist the theme; returns false if storage is unavailable (Req 3.7). */
function writeStoredTheme(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
    return true;
  } catch {
    return false;
  }
}

function applyTheme(isDark) {
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

export default function ThemeToggle() {
  // Default to light when no stored preference exists (Req 3.6).
  const [isDark, setIsDark] = useState(() => readStoredTheme() === 'dark');
  const addToast = useToast();

  useEffect(() => {
    applyTheme(isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const nextDark = !isDark;
    // Apply immediately (no reload) so the UI updates within 1s (Req 3.4).
    setIsDark(nextDark);
    // Persist; if storage is unavailable the theme still applies for the
    // current session and we notify the visitor it could not be saved (Req 3.7).
    const saved = writeStoredTheme(nextDark ? 'dark' : 'light');
    if (!saved) {
      addToast('Theme preference could not be saved for next time.', 'warning');
    }
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme mode"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'dark' : 'light'}
          className="theme-toggle__icon"
          initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 45, scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
