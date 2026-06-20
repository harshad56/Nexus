# Design Document

## Overview

This design specifies the UI/UX redesign of the NexusWeb Solutions marketing website. It refactors the existing React 19 + Vite single-page application to elevate it to professional agency standards: a cohesive design-token system, accessible theming, a confident hero, prominent trust signals, a frictionless conversion path, reliable micro-interactions, mobile-first responsiveness, and robust loading behavior. It also resolves the highest-priority defect — large blank vertical gaps between Home sections.

The work is entirely within the current stack. No backend, TypeScript migration, or new runtime services are introduced. The architecture (BrowserRouter, ErrorBoundary, ScrollToTop, persistent Navbar/Footer/BackToTop, lazy-loaded sub-pages, ToastProvider, Framer Motion page transitions) is preserved. Changes are concentrated in `src/index.css` (design tokens and shared layout primitives) and the per-component CSS/JSX files in `src/components` and `src/styles`.

### Root-Cause Analysis: Blank Gaps (Requirement 1)

Investigation of the live code identified two compounding causes of the empty regions visible between Home sections:

1. **Excessive section padding.** The shared `.section` rule in `index.css` applies `padding: 10rem clamp(1.5rem, 5vw, 6.5rem)`. That is 160px of padding on the top **and** 160px on the bottom of every section, so ~320px of empty space accumulates between the rendered content of adjacent sections. This alone produces the large gaps.
2. **Late-triggering reveal animations.** Section content uses Framer Motion `whileInView` with `initial={{ opacity: 0, ... }}` and `viewport={{ once: true, margin: '-100px' }}`. The `-100px` margin delays the reveal until the element is 100px inside the viewport, and staggered `delay` values (e.g. Process steps at `index * 0.15`) keep later items invisible longer. Combined with the oversized padding, a visitor sees tall empty bands where content has not yet faded in.

The fix replaces the fixed `10rem` padding with a responsive spacing-scale token, removes the negative viewport margin so reveals trigger as content enters the viewport, and adds a guaranteed fallback to full opacity so content is never left invisible if an animation does not fire.

## Architecture

### High-Level Structure (unchanged)

```
main.jsx
└─ ToastProvider
   └─ App.jsx
      └─ BrowserRouter
         └─ ErrorBoundary
            ├─ ScrollToTop
            ├─ Navbar (persistent, holds Primary_CTA + ThemeToggle)
            ├─ main
            │  └─ AnimatedRoutes (Framer Motion page transitions)
            │     ├─ / → Home (Hero, TrustedBy, Services, Portfolio,
            │     │         Process, Testimonials, Pricing, FAQ, Contact)
            │     └─ lazy sub-pages + NotFound
            ├─ Footer (persistent, holds contact channels)
            └─ BackToTop
```

### Design-Token Layer (the core of this redesign)

All visual decisions flow from CSS custom properties defined in `src/index.css` under `:root` (light) and `:root[data-theme="dark"]` (dark). The redesign **extends** the existing token set (which already covers color, shadow, border, hero, logo roles) with two missing scales — **spacing** and **typography** — and consolidates section layout primitives so every component consumes tokens rather than literals.

```
index.css
├─ Color tokens        (exists; audited for contrast — Req 3)
├─ Spacing scale       (NEW — Req 2.1, Req 1)
├─ Typography scale    (NEW — Req 2.2)
├─ Radius / shadow     (exists; normalized)
├─ Motion tokens       (NEW — durations/easing for Req 7)
├─ .section primitive  (refactored to use spacing tokens — Req 1)
├─ .section-header     (exists; reused — Req 2.5, Req 10)
└─ prefers-reduced-motion block (NEW global — Req 7.2)
```

## Components and Interfaces

### 1. Design System (`src/index.css`)

**Spacing scale (Requirement 2.1, 1.1, 1.4).** Introduce a strictly ascending, non-overlapping set of at least five named tokens:

```css
:root {
  --space-2xs: 0.5rem;
  --space-xs:  1rem;
  --space-sm:  1.5rem;
  --space-md:  2.5rem;
  --space-lg:  4rem;
  --space-xl:  6rem;
  --section-gap: clamp(3.5rem, 7vw, 6rem); /* vertical rhythm token */
}
```

The `.section` primitive is refactored to derive vertical padding from `--section-gap` instead of the hard-coded `10rem`:

```css
.section {
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
  padding-block: var(--section-gap);
  padding-inline: clamp(1.5rem, 5vw, 6.5rem);
  position: relative;
}
```

This guarantees the inter-section empty region stays under 160px on desktop (Req 1.1) and under 96px at ≤480px (Req 1.4), where `--section-gap` resolves to its `3.5rem` (56px) floor. The existing `!important` overrides in the `@media` blocks for `.section-padding` are reconciled to the same scale so there is a single source of truth.

**Typography scale (Requirement 2.2).** Add heading and body tokens using `clamp()` so each resolves to one value per breakpoint without manual media queries:

```css
:root {
  --text-body:   clamp(0.95rem, 0.9rem + 0.3vw, 1.1rem);
  --text-h4:     clamp(1.1rem, 1rem + 0.6vw, 1.4rem);
  --text-h3:     clamp(1.6rem, 1.2rem + 1.8vw, 2.4rem);
  --text-title:  clamp(2rem, 1.4rem + 3vw, 3.2rem);
  --leading-body: 1.6;
}
```

At ≤480px, `--text-body` floors at `0.95rem` (≈15.2px), satisfying the ≥14px minimum (Req 8.7). Section headings and body copy reference these tokens.

**Motion tokens (Requirement 7.1).** Standardize transition timing:

```css
:root {
  --motion-fast: 0.18s;
  --motion-base: 0.28s;   /* hover transitions complete < 300ms (Req 7.1) */
  --motion-ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```

**Reduced-motion (Requirement 7.2, 4.5).** A global block neutralizes entrance, looping, and parallax animation while preserving instantaneous focus/hover feedback:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
  .bg-glow-blob { animation: none !important; }
}
```

Components additionally read motion preference (see Section 8) so Framer Motion variants resolve to their final static state rather than starting at `opacity: 0`.

**Token fallbacks (Requirement 2.7).** Components consume tokens with a literal fallback, e.g. `color: var(--text-primary, #121214);`, so an undefined token never renders an empty/invalid value.

### 2. Reveal Animation Strategy (`src/index.css` + components) — Requirements 1.2, 1.3, 7.4, 7.5

A single, reliable reveal pattern replaces the inconsistent per-component `whileInView` settings.

- **Trigger threshold.** Use `viewport={{ once: true, amount: 0.2 }}` (≈20% of the element in view — Req 7.4) and **remove** the `margin: '-100px'` offset that delayed reveals.
- **Completion bound.** Reveal transitions use `duration: 0.5` (≤1000ms — Req 1.2). Stagger delays are capped so the last item in any group completes within 1000ms of the section entering view (e.g. Process steps change from `index * 0.15` to `index * 0.08`).
- **Fallback to visible (Req 1.3).** As a safety net independent of Framer Motion, a CSS rule ensures content is never permanently invisible:

```css
@media (prefers-reduced-motion: reduce) {
  [data-reveal] { opacity: 1 !important; transform: none !important; }
}
```

For the non-reduced-motion path, components set `whileInView` with `once: true`; because the threshold is low (20%) and the margin offset is removed, content reveals as soon as it scrolls in. A shared `useReveal` helper (Section 8) centralizes these variant defaults.

### 3. Navbar — Requirements 6.1, 8.3, 8.4

- The **Primary_CTA** ("Book Free Consultation") remains in the persistent navbar on every route, within the top viewport region (Req 6.1).
- At ≤768px the links collapse behind a single mobile menu toggle; activating it reveals the full link set (Req 8.3, 8.4). Toggle and links use ≥44px tap targets (Req 8.6).
- The CTA routes to the Contact_Flow. On the Home route it smooth-scrolls to `#contact`; on other routes it navigates to `/contact`.

### 4. Hero (`Hero.jsx`) — Requirements 4, 10.1

- Renders the single `<h1>` for the Home page (Req 10.1); all other section titles use `<h3>` within their `section-header` (heading order audited in Section under Req 10.2).
- Above-fold layout guarantees headline, subheadline, Primary_CTA, and the "View Our Work" secondary action are visible without scrolling at ≥1024px width and ≥768px height (Req 4.1). The hero min-height and padding are tuned so the three stat Trust_Signals also fit where space allows.
- **Trust_Signals (Req 4.2):** the existing three stats (15+ Projects Delivered, 100% Client Satisfaction, PAN India Service) are retained, each pairing a value with a label.
- Primary_CTA → Contact_Flow; secondary → `#portfolio` (Req 4.3, 4.4).
- **Reduced-motion (Req 4.5):** the rotating-word interval and entrance animations are gated on motion preference; when reduced, a single static word renders and entrance variants resolve to final state.
- The decorative `.bg-glow-container` is already hidden at ≤768px via `display: none` (Req 9.5); the rotating-word `setInterval` is cleared on unmount (already correct) and skipped under reduced motion.

### 5. Trust Signals: TrustedBy, Testimonials, Pricing — Requirement 5

- **TrustedBy (Req 5.1):** displays ≥5 client/technology trust signals. (Verify current marquee count; ensure at least five distinct entries.)
- **Testimonials (`Testimonials.jsx`) — Req 5.2, 5.3, 5.4, 5.5, 5.6:** each testimonial shows name, role, and an integer 1–5 star rating (already implemented). Next/prev controls wrap around (already implemented via modulo). Auto-advance runs every 5s and pauses on pointer-enter, resumes on pointer-leave (already implemented via `isPaused`). This component largely meets requirements; the redesign verifies tap-target sizing (≥44px for nav buttons at ≤768px) and contrast.
- **Pricing (`Pricing.jsx`) — Req 5.7, 6.5, 10.4:** the section header already states "No hidden fees" (Req 5.7). Each card's "Get Custom Quote" routes to the Contact_Flow (Req 6.5). Exactly one plan (`Business Website`) is `recommended` and is distinguished by the "MOST POPULAR" label **and** a persistent visual treatment (distinct border/background/elevation) via `pricing__card--recommended` (Req 10.4). All four cards share an aligned, equal-width grid layout (Req 10.3).

### 6. Conversion Path: Contact (`Contact.jsx`, `useContactForm.js`) — Requirement 6

- Required fields are firstName, lastName, email, details (already marked `required` in the form). HTML5 `required` + a guard in `handleSubmit` prevent submission while any required field is empty, retain entered values, and surface which fields need input (Req 6.3). Native validation messaging is supplemented with a visible per-field invalid style.
- On valid submit, the inquiry opens WhatsApp in a new tab with a prefilled message containing all completed field values (already implemented in `useContactForm.js`) (Req 6.2).
- The success confirmation state ("Sent via WhatsApp!") persists ≥5s (the hook already resets after 5000ms) (Req 6.4).
- Footer displays phone, email, and location on every route (Req 6.6).

### 7. Pages & Sections: Visual Hierarchy and Responsiveness — Requirements 8, 10

- **Heading order (Req 10.2):** audit each page so levels never skip. Current pattern uses `section-header__subtitle` as an `<h2>` eyebrow followed by `section-header__title` as `<h3>`. The eyebrow `<h2>` is styled small; to keep a valid order (h1 → h2 → h3 with no skips) the eyebrow remains `<h2>` and the visible section title remains `<h3>`. Sub-headings within cards use `<h4>`. No level is skipped.
- **No horizontal scroll (Req 8.1):** `html, body, #root { overflow-x: hidden }` is already present; in addition images/media are constrained with `max-width: 100%` (Req 8.2). The embedded map iframe is wrapped so it cannot exceed viewport width.
- **Breakpoints (Req 8.5):** the established 1024/768/480 breakpoints are retained and consolidated against the spacing/typography tokens.
- **Tap targets (Req 8.6):** interactive controls get `min-height/min-width: 44px` at ≤768px.

### 8. Shared Motion Helper (`src/hooks/useReducedMotion.js`, `src/hooks/useReveal.js`) — Requirements 1, 4.5, 7

Two small hooks centralize motion behavior so components stay consistent:

- `useReducedMotion()` — wraps Framer Motion's `useReducedMotion`, returning a boolean used to gate the hero rotating-word interval and to choose static vs animated variants.
- `useReveal()` — returns the standard reveal variant + viewport config (`{ once: true, amount: 0.2 }`, `duration: 0.5`, no negative margin), and resolves to the final/visible state when reduced motion is requested. Components apply it to section content, guaranteeing Req 1.2/1.3/7.4/7.5 uniformly.

### 9. Performance & Loading (`App.jsx`, `ErrorBoundary.jsx`) — Requirement 9

- Route-level code splitting via `React.lazy` for all sub-pages and NotFound is retained (Req 9.4).
- `Suspense` `fallback={<PageLoader />}` shows the loader only while a not-yet-loaded chunk resolves; already-loaded chunks render with no loader (Req 9.1, 9.2).
- `ErrorBoundary` fallback is enhanced to show a visible "page could not be loaded" message plus a control to retry or return Home, instead of a blank page (Req 9.3).
- Decorative animated background runs only >768px (Req 9.5, 9.6) — already enforced by `.bg-glow-container { display: none }` at ≤768px; the redesign keeps this and ensures the blobs' looping animation does not run under reduced motion.

## Data Models

This is a presentational redesign; no persistent data store is introduced. The only structured client data are static content arrays already defined in components and a single persisted preference.

### Theme preference (Requirement 3.4–3.7)

```
ThemePreference:
  storageKey: "theme"            // localStorage
  value:      "light" | "dark"
  default:    "light"            // Req 3.6 when no stored value
  applied via: document.documentElement[data-theme]
```

Behavior: on load, read `localStorage.theme`; if absent, apply `light` (Req 3.6) and respect the document default. On toggle, update the attribute immediately (≤1s, no reload — Req 3.4) and persist. If `localStorage` write fails (e.g. privacy mode), apply for the session and surface a toast that the preference could not be saved (Req 3.7) using the existing `ToastProvider`.

### Content arrays (existing, unchanged shape)

- `Process.steps`: `{ icon, title, desc, duration }`
- `Testimonials.testimonials`: `{ name, role, text, rating (1–5 int), initials }`
- `Pricing.plans`: `{ name, price, desc, features[], recommended (bool) }` — exactly one `recommended: true`
- `Contact.projectTypes`, `Contact.budgetRanges`: string lists

## Error Handling

| Scenario | Handling | Requirement |
|---|---|---|
| Lazy chunk fails to load | ErrorBoundary fallback with message + retry/Home control | 9.3 |
| Required contact field empty on submit | Block submit, retain values, mark invalid field(s) | 6.3 |
| `localStorage` unavailable for theme | Apply theme for session, toast "couldn't save preference" | 3.7 |
| Undefined color token for active theme | CSS literal fallback in `var(--token, fallback)` | 2.7 |
| Reveal animation never fires | Reduced-motion CSS + low 20% threshold guarantee final visible state | 1.3, 7.4 |
| Image/media wider than viewport | `max-width: 100%` constraint prevents horizontal scroll | 8.1, 8.2 |

## Testing Strategy

No test framework currently exists in the project. Because this is a CSS/markup-driven presentational redesign, the strategy emphasizes lightweight automated checks plus structured manual verification rather than introducing a heavy runtime test harness.

### Automated (lint + build)

- `npm run lint` and `npm run build` must pass after changes (existing tooling).
- A token-usage audit: grep component CSS for hard-coded color/spacing literals that should be tokens (supports Req 2.4).

### Manual / DevTools verification (per requirement)

- **Blank gaps (Req 1):** measure inter-section vertical whitespace in DevTools at 1440px (≤160px) and 375px (≤96px); scroll through Home confirming every section's content fades to full opacity.
- **Contrast (Req 3):** run the page through a contrast checker (e.g. browser a11y panel / axe) in both themes; body text ≥4.5:1, controls ≥3:1.
- **Theme persistence (Req 3.4–3.7):** toggle theme, reload, confirm persistence; simulate blocked storage and confirm session-only apply + toast.
- **Hero above-fold (Req 4.1):** at 1024×768 confirm headline/subheadline/CTAs visible without scroll.
- **Reduced motion (Req 4.5, 7.2):** enable OS "reduce motion"; confirm no rotating word, no looping blobs, content renders statically.
- **Responsiveness (Req 8):** sweep widths 320–1920px; confirm no horizontal scroll, mobile menu behavior, 44px tap targets, ≥14px body text at ≤480px.
- **Loading/errors (Req 9):** throttle network to observe loader on first sub-page visit and no loader on revisit; force a chunk error to verify the ErrorBoundary fallback and retry control.
- **Hierarchy (Req 10):** inspect the heading outline (one h1, no skipped levels); confirm pricing recommended card is labeled and visually distinct.

## Design Decisions and Rationale

- **Tokenize spacing and typography rather than patch per-component padding.** The blank-gap defect stems from a shared rule; fixing it at the token/primitive level resolves it everywhere and prevents regressions, directly serving Req 1 and Req 2.
- **Remove the `-100px` reveal margin and lower the threshold to 20%.** This makes reveals trigger predictably as content enters view and, with `once: true`, prevents replay (Req 7.4, 7.5) — addressing the "content stays invisible" half of the gap defect without removing the polish of scroll animations.
- **Keep the WhatsApp contact flow; do not wire EmailJS.** The requirements explicitly preserve the WhatsApp path; `@emailjs/browser` remains unused. Switching channels is out of scope and would change behavior the user did not request.
- **Centralize motion in two small hooks.** Avoids scattering reduced-motion logic across nine section components and guarantees consistent, requirement-compliant behavior.
- **No TypeScript / no new services.** Honors the stated constraint to stay within the existing stack, minimizing risk and review surface.
