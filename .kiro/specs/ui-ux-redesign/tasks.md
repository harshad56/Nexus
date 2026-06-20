# Implementation Plan: UI/UX Redesign

## Overview

This plan refactors the NexusWeb Solutions site at the design-token level first (the root cause of the blank-gap defect and the foundation for every other requirement), then layers on the shared reveal strategy, theming persistence, section-level refinements, conversion-path polish, error/loading robustness, and mobile-first responsiveness. Each task builds on the previous ones and ends by wiring the new tokens/hooks into the components that consume them, so no code is left orphaned.

Verification relies on the existing tooling: `npm run lint` and `npm run build` must pass after changes. No new test framework is introduced (the design has no Correctness Properties section and the change is CSS/markup-driven), so testing sub-tasks use lightweight token-usage audits and lint/build checks rather than a runtime harness.

## Tasks

- [x] 1. Establish the design-token foundation in `src/index.css`
  - [x] 1.1 Add spacing, section-gap, typography, and motion token scales
    - Define a strictly ascending, non-overlapping Spacing_Scale of at least 5 tokens (`--space-2xs` … `--space-xl`) plus a `--section-gap: clamp(3.5rem, 7vw, 6rem)` rhythm token under `:root`
    - Add typography tokens (`--text-body`, `--text-h4`, `--text-h3`, `--text-title`, `--leading-body`) using `clamp()` so each resolves to one value per breakpoint, with `--text-body` flooring ≥14px at ≤480px
    - Add motion tokens (`--motion-fast`, `--motion-base` ≤300ms, `--motion-ease`)
    - _Requirements: 2.1, 2.2, 8.7_

  - [x] 1.2 Refactor the `.section` primitive and reconcile padding overrides to the spacing scale
    - Change `.section` vertical padding from the hard-coded `10rem` to `padding-block: var(--section-gap)` and keep responsive inline padding
    - Reconcile the existing `!important` `.section-padding` overrides in the `@media` (1024/768/480) blocks to the same `--section-gap` scale so there is a single source of truth, keeping inter-section whitespace ≤160px on desktop and ≤96px at ≤480px
    - _Requirements: 1.1, 1.4, 2.1, 8.5_

  - [ ]* 1.3 Audit and verify token foundation
    - Run `npm run lint` and `npm run build`; grep component CSS for hard-coded spacing/typography literals that now have tokens
    - _Requirements: 2.1, 2.2, 2.4_

- [x] 2. Add theme color tokens, contrast fixes, and reduced-motion globals
  - [x] 2.1 Audit and normalize color/radius/shadow tokens for both themes
    - Ensure background, surface, text, and accent color tokens each resolve to exactly one value for `light` and one for `dark`
    - Adjust any body-text or control colors failing WCAG_AA (body text ≥4.5:1, controls ≥3:1) in either theme
    - _Requirements: 2.3, 3.1, 3.2, 3.3_

  - [x] 2.2 Add the global `prefers-reduced-motion` block and `[data-reveal]` visibility fallback
    - Neutralize entrance/looping/parallax animations (including `.bg-glow-blob`) while preserving instantaneous focus/hover feedback
    - Add `[data-reveal] { opacity: 1 !important; transform: none !important; }` under reduced motion so content is never left invisible
    - _Requirements: 7.2, 1.3, 4.5_

  - [ ]* 2.3 Verify contrast and reduced-motion behavior
    - Run `npm run lint` and `npm run build`; spot-check that color tokens have literal `var(--token, fallback)` fallbacks where consumed
    - _Requirements: 2.7, 3.1, 3.2, 3.3_

- [x] 3. Create the shared motion hooks in `src/hooks/`
  - [x] 3.1 Implement `useReducedMotion.js`
    - Wrap Framer Motion's `useReducedMotion` and return a boolean for gating intervals and choosing static vs animated variants
    - _Requirements: 4.5, 7.2_

  - [x] 3.2 Implement `useReveal.js`
    - Return the standard reveal variants + viewport config (`{ once: true, amount: 0.2 }`, `duration: 0.5`, no negative margin) and resolve to final/visible state when reduced motion is requested
    - _Requirements: 1.2, 1.3, 7.4, 7.5_

- [x] 4. Checkpoint - tokens and hooks in place
  - Ensure `npm run lint` and `npm run build` pass; ask the user if questions arise.

- [x] 5. Apply the shared reveal strategy across Home section components
  - [x] 5.1 Replace per-component `whileInView` settings with `useReveal` in section components
    - Update Services, Portfolio, Process, Testimonials, Pricing, FAQ, Contact (and any other Home sections) to consume `useReveal`, removing the `margin: '-100px'` viewport offset and adding `data-reveal` to revealed wrappers
    - Cap stagger delays (e.g. Process steps from `index * 0.15` to `index * 0.08`) so the last item completes within 1000ms of the section entering view
    - _Requirements: 1.2, 1.3, 7.4, 7.5_

  - [ ]* 5.2 Verify reveal behavior builds and lints clean
    - Run `npm run lint` and `npm run build`
    - _Requirements: 1.2, 7.4_

- [x] 6. Implement theme persistence and storage-failure handling in `ThemeToggle.jsx`
  - [x] 6.1 Read/write theme preference with localStorage and session fallback
    - On load read `localStorage.theme`; apply `light` as default when absent; apply the stored theme before sections become visible; on toggle update `data-theme` immediately (no reload) and persist
    - _Requirements: 3.4, 3.5, 3.6_

  - [x] 6.2 Surface a toast when persistence is unavailable
    - Wrap the storage write in a guard; on failure apply the theme for the session and show a toast via the existing `ToastProvider` that the preference could not be saved
    - _Requirements: 3.7_

  - [ ]* 6.3 Verify theme persistence builds clean
    - Run `npm run lint` and `npm run build`
    - _Requirements: 3.4, 3.7_

- [x] 7. Refine the Hero section (`Hero.jsx`)
  - [x] 7.1 Enforce single h1, above-fold layout, and CTA wiring
    - Ensure the Hero renders the page's single `<h1>`; tune min-height/padding so headline, subheadline, Primary_CTA, secondary action, and the three stat Trust_Signals are visible without scrolling at ≥1024px width and ≥768px height
    - Wire Primary_CTA to the Contact_Flow and the secondary action to `#portfolio`
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 10.1_

  - [x] 7.2 Gate rotating-word and entrance animations on reduced motion
    - Use `useReducedMotion` to skip the rotating-word `setInterval` (rendering a single static word) and resolve entrance variants to final state when reduced motion is requested
    - _Requirements: 4.5_

- [x] 8. Refine trust-signal sections (TrustedBy, Testimonials, Pricing)
  - [x] 8.1 Ensure TrustedBy displays at least 5 trust signals
    - Verify/extend the TrustedBy entries to at least five distinct client/technology signals
    - _Requirements: 5.1_

  - [x] 8.2 Verify Testimonials compliance and tap-target/contrast sizing
    - Confirm each testimonial shows name, role, and integer 1–5 star rating; next/prev wrap-around; 5s auto-advance with pause on pointer-enter and resume on pointer-leave; size nav buttons ≥44px at ≤768px
    - _Requirements: 5.2, 5.3, 5.4, 5.5, 5.6, 8.6_

  - [x] 8.3 Refine Pricing transparency signal, quote CTA, and recommended-card distinction
    - Keep the "No hidden fees" transparency signal; wire each "Get Custom Quote" to the Contact_Flow; ensure exactly one plan is labeled recommended ("MOST POPULAR") with a persistent visual treatment (border/background/elevation) distinct from other cards; ensure equal-width aligned cards with uniform spacing from the Spacing_Scale
    - _Requirements: 5.7, 6.5, 10.3, 10.4_

- [x] 9. Checkpoint - sections and theming
  - Ensure `npm run lint` and `npm run build` pass; ask the user if questions arise.

- [x] 10. Harden the conversion path (`Contact.jsx`, `useContactForm.js`, Navbar, Footer)
  - [x] 10.1 Validate required fields and surface invalid state on submit
    - Guard `handleSubmit` so submission is blocked while firstName, lastName, email, or details is empty; retain entered values; add a visible per-field invalid style alongside native validation
    - _Requirements: 6.3_

  - [x] 10.2 Confirm WhatsApp submission and persistent confirmation state
    - Verify a valid submit opens WhatsApp in a new tab with a prefilled message containing all completed field values, and the "Sent via WhatsApp!" confirmation persists ≥5s
    - _Requirements: 6.2, 6.4_

  - [x] 10.3 Ensure Primary_CTA in Navbar and contact channels in Footer
    - Confirm the Primary_CTA appears in the persistent navbar within the top viewport region on every route (Home: scroll to `#contact`; other routes: navigate to `/contact`); confirm Footer shows phone, email, and location on every route
    - _Requirements: 6.1, 6.6_

- [x] 11. Enhance loading and error robustness (`App.jsx`, `ErrorBoundary.jsx`)
  - [x] 11.1 Verify lazy code splitting and Suspense loader behavior
    - Confirm `React.lazy` route splitting for About, Services, CaseStudies, Blog, Contact, the legal pages, and NotFound, with `Suspense` showing `PageLoader` only for not-yet-loaded chunks
    - _Requirements: 9.1, 9.2, 9.4_

  - [x] 11.2 Enhance the ErrorBoundary fallback with retry/Home control
    - Replace any blank fallback with a visible "page could not be loaded" message and a control to retry loading or return to the Home_Page
    - _Requirements: 9.3_

  - [x] 11.3 Gate decorative background effects by viewport width
    - Ensure decorative animated background runs only at >768px and is prevented at ≤768px, and does not run under reduced motion
    - _Requirements: 9.5, 9.6_

- [x] 12. Apply mobile-first responsiveness and visual hierarchy across components
  - [x] 12.1 Prevent horizontal scroll and constrain media
    - Confirm `overflow-x: hidden` on `html, body, #root`; add `max-width: 100%` to images/media; wrap the map iframe so it cannot exceed viewport width
    - _Requirements: 8.1, 8.2_

  - [x] 12.2 Enforce mobile menu, tap targets, and body-text minimum
    - Confirm primary nav collapses behind a single mobile menu control at ≤768px revealing all links when activated; size interactive tap targets ≥44px at ≤768px; ensure body text ≥14px at ≤480px via the typography tokens
    - _Requirements: 8.3, 8.4, 8.6, 8.7_

  - [x] 12.3 Audit heading order and shared section-header structure
    - Audit each page so heading levels never skip (h1 → h2 eyebrow → h3 title → h4 sub-headings); ensure section heading groups use the shared `section-header` structure; ensure comparable item lists (services, pricing, process) render with equal width, aligned top edges within 2px, the same structural elements, and uniform spacing from the Spacing_Scale
    - _Requirements: 2.5, 10.2, 10.3_

- [x] 13. Final checkpoint - full verification
  - Ensure `npm run lint` and `npm run build` pass; perform the structured DevTools/manual checks from the design (blank gaps at 1440px/375px, contrast in both themes, theme persistence, hero above-fold, reduced motion, responsive sweep 320–1920px, loading/error behavior, heading outline). Ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional verification sub-tasks and can be skipped for a faster MVP.
- Each task references specific requirements clauses for traceability.
- No property-based test tasks are included: the design has no Correctness Properties section and the work is a CSS/markup-driven presentational redesign. Verification is via `npm run lint`, `npm run build`, and the structured manual checks defined in the design's Testing Strategy.
- Checkpoints (tasks 4, 9, 13) ensure incremental validation at natural breaks.
- The token foundation (task 1) is the root-cause fix for the blank-gap defect and the prerequisite for nearly everything else, so it runs first.

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "2.1", "2.2", "3.1", "3.2"] },
    { "id": 2, "tasks": ["1.3", "2.3", "5.1", "6.1", "7.1", "8.1", "8.2", "8.3", "10.1", "11.1", "11.2", "12.1"] },
    { "id": 3, "tasks": ["5.2", "6.2", "7.2", "10.2", "10.3", "11.3", "12.2", "12.3"] },
    { "id": 4, "tasks": ["6.3"] }
  ]
}
```
