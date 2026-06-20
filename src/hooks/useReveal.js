import useReducedMotion from './useReducedMotion';

/**
 * Shared scroll-reveal configuration for Home section content.
 *
 * Centralizes the reveal behavior so every section animates consistently and
 * reliably:
 *  - viewport: { once: true, amount: 0.2 } — fires once when ~20% of the
 *    element is in view, with NO negative margin (the old `margin: '-100px'`
 *    delayed reveals and contributed to the blank-gap defect). (Req 1.2, 7.4, 7.5)
 *  - transition duration 0.5s keeps reveals within the 1000ms bound. (Req 1.2)
 *  - when reduced motion is requested, variants resolve to the final/visible
 *    state so nothing is left invisible. (Req 1.3, 4.5, 7.2)
 *
 * Apply the `data-reveal` attribute to revealed wrappers as a CSS safety net.
 *
 * @param {object} [options]
 * @param {number} [options.y=30] initial vertical offset in px for the hidden state.
 * @param {number} [options.duration=0.5] reveal transition duration in seconds.
 * @param {number} [options.delay=0] reveal delay in seconds (capped by callers for stagger).
 * @returns {{
 *   initial: string,
 *   whileInView: string,
 *   viewport: { once: boolean, amount: number },
 *   variants: object,
 *   transition: { duration: number, delay: number, ease: number[] },
 *   'data-reveal': string
 * }} props to spread onto a framer-motion element.
 */
export default function useReveal(options = {}) {
  const { y = 30, duration = 0.5, delay = 0 } = options;
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: prefersReducedMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y },
    visible: { opacity: 1, y: 0 },
  };

  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.2 },
    variants,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration, delay, ease: [0.22, 1, 0.36, 1] },
    'data-reveal': '',
  };
}
