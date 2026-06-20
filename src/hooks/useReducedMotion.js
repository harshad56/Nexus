import { useReducedMotion as useFramerReducedMotion } from 'framer-motion';

/**
 * Returns true when the visitor has requested reduced motion
 * (prefers-reduced-motion: reduce).
 *
 * Thin wrapper over Framer Motion's hook so components have a single,
 * project-owned import for gating intervals (e.g. the hero rotating word)
 * and choosing static vs animated variants. (Req 4.5, 7.2)
 *
 * @returns {boolean} whether reduced motion is preferred.
 */
export default function useReducedMotion() {
  return useFramerReducedMotion() ?? false;
}
