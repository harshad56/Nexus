# Requirements Document

## Introduction

This feature is a user-experience and visual redesign of the NexusWeb Solutions marketing website (a web & mobile app development agency in Navi Mumbai, India). The goal is to elevate the site to professional business/agency standards so it earns visitor trust and drives conversions (consultation requests and quote inquiries).

The redesign focuses on: a cohesive design system (typography, color palette, spacing rhythm, accessible contrast), a confident hero, clear visual hierarchy, prominent trust signals, frictionless conversion paths, polished and reliable micro-interactions, and mobile-first responsiveness and performance. A specific known defect to resolve is the large blank/empty vertical gaps that appear between several Home sections (Process, Testimonials, Pricing, FAQ, Contact), which degrade the perceived quality of the page.

The redesign operates within the existing stack (React 19, Vite 7, React Router 7, Framer Motion 12, Lucide React, plain per-component CSS in `src/styles/` with design tokens in `index.css`). It preserves existing SEO setup, routing structure, theme toggle (light/dark), and the WhatsApp contact flow unless a requirement states otherwise. No backend, TypeScript, or new external runtime services are introduced.

## Glossary

- **Website**: The NexusWeb Solutions marketing website, a React single-page application served via Vite.
- **Home_Page**: The landing route (`/`) composed of the section components Hero, TrustedBy, Services, Portfolio, Process, Testimonials, Pricing, FAQ, and Contact, in that order.
- **Section**: A top-level vertical content block on a page (e.g., Hero, Services, Pricing) rendered by a single React section component.
- **Design_System**: The shared set of CSS custom properties (design tokens) and reusable style rules defined in `src/index.css` governing color, typography, spacing, radius, shadow, and motion across the Website.
- **Design_Token**: A named CSS custom property (e.g., `--text-primary`, `--accent-blue`, a spacing-scale variable) consumed by component stylesheets.
- **Spacing_Scale**: A defined, finite set of spacing Design_Tokens used for section padding and the vertical gaps between Sections.
- **Theme**: A selectable visual mode of the Website; the supported values are `light` and `dark`, controlled by the `data-theme` attribute on the document root.
- **Scroll_Reveal**: A Framer Motion `whileInView` entrance animation applied to content as it scrolls into the viewport.
- **Primary_CTA**: The main conversion action on the Website ("Book Free Consultation"), which routes the visitor to the contact flow.
- **Contact_Flow**: The mechanism by which a visitor submits an inquiry; currently implemented in `useContactForm.js` and opening WhatsApp with a prefilled message.
- **Trust_Signal**: A visible element that builds credibility (e.g., client logos, testimonials, ratings, project statistics, guarantees).
- **Reduced_Motion**: The user preference expressed by the CSS media query `prefers-reduced-motion: reduce`.
- **Breakpoint**: A defined viewport width at which responsive layout rules change; the established Breakpoints are 1024px, 768px, and 480px.
- **WCAG_AA**: The Web Content Accessibility Guidelines 2.1 Level AA success criteria.

## Requirements

### Requirement 1: Eliminate Blank Gaps Between Home Sections

**User Story:** As a visitor browsing the Home page, I want each section to display its content without large empty gaps, so that the site feels polished and trustworthy.

#### Acceptance Criteria

1. WHEN the Home_Page is rendered at a viewport width of 481px or greater, THE Website SHALL display the content of every Section (Hero, TrustedBy, Services, Portfolio, Process, Testimonials, Pricing, FAQ, Contact) with no empty vertical region taller than 160px between the end of one Section's rendered content and the start of the next Section's rendered content.
2. WHEN at least 10% of a Section's vertical height is within the viewport, THE Website SHALL complete that Section's Scroll_Reveal animation within 1000ms so that all reveal-animated content in that Section reaches 100% opacity.
3. IF a Section's reveal-animated content has not reached 100% opacity within 1000ms of at least 10% of that Section's vertical height entering the viewport, THEN THE Website SHALL render that Section's content at 100% opacity rather than leaving it at less than 100% opacity.
4. WHEN the Home_Page is rendered at a viewport width of 480px or less, THE Website SHALL display each Section's rendered content with no empty vertical region taller than 96px between the end of one Section's rendered content and the start of the next Section's rendered content.

### Requirement 2: Cohesive Design System

**User Story:** As a visitor, I want a consistent visual language across the site, so that the brand feels professional and credible.

#### Acceptance Criteria

1. THE Design_System SHALL define a Spacing_Scale of at least 5 named Design_Tokens whose values are strictly ascending and non-overlapping, and every Section SHALL derive both its top and bottom vertical padding exclusively from Spacing_Scale tokens.
2. THE Design_System SHALL define at least one heading typography Design_Token and at least one body typography Design_Token, each resolving to exactly one value per defined responsive Breakpoint, and every Section SHALL render headings and body copy using those typography Design_Tokens.
3. THE Design_System SHALL define color Design_Tokens for background, surface, text, and accent roles, each resolving to exactly one value for the `light` Theme and exactly one value for the `dark` Theme.
4. WHEN a component requires a color, spacing, radius, shadow, or typography value, THE component SHALL consume the corresponding Design_Token and SHALL NOT use a hard-coded literal value.
5. WHERE a Section displays a heading group, THE Section SHALL render that heading group using the shared `section-header` style structure.
6. WHEN the active Theme changes, THE Design_System SHALL resolve every color Design_Token to the value defined for the newly active Theme.
7. IF a color Design_Token is undefined for the active Theme, THEN THE Website SHALL apply a defined fallback color rather than rendering an invalid or empty color value.

### Requirement 3: Accessible Color Contrast and Theme Support

**User Story:** As a visitor including those with low vision, I want readable text and controls in both light and dark modes, so that I can use the site comfortably.

#### Acceptance Criteria

1. WHILE the `light` Theme is active, THE Website SHALL render body text against its background at a contrast ratio of at least 4.5:1, meeting WCAG_AA for normal-size text.
2. WHILE the `dark` Theme is active, THE Website SHALL render body text against its background at a contrast ratio of at least 4.5:1, meeting WCAG_AA for normal-size text.
3. WHILE either Theme is active, THE Website SHALL render interactive controls (buttons, links, form inputs) and their backgrounds at a contrast ratio of at least 3:1 against immediately adjacent colors, meeting WCAG_AA for non-text contrast.
4. WHEN a visitor changes the Theme, THE Website SHALL apply the selected Theme to every Section within 1 second without requiring a page reload.
5. WHEN a visitor navigates to the Website in a later session and a previously selected Theme exists in persistent storage, THE Website SHALL apply that most recently selected Theme before any Section becomes visible.
6. IF a visitor navigates to the Website and no previously selected Theme exists in persistent storage, THEN THE Website SHALL apply the `light` Theme as the default.
7. IF persistent storage of the selected Theme is unavailable when a visitor changes the Theme, THEN THE Website SHALL apply the selected Theme for the current session and display an indication that the Theme preference could not be saved.

### Requirement 4: Confident Hero Section

**User Story:** As a first-time visitor, I want an immediate, clear understanding of what the agency offers and a way to act, so that I can decide to engage.

#### Acceptance Criteria

1. WHEN the Home_Page finishes loading at a viewport height of 768px or greater and a viewport width of 1024px or greater, THE Website SHALL display the Hero headline, a supporting subheadline, the Primary_CTA, and a secondary action within the initial viewport without requiring scrolling.
2. WHEN the Hero is rendered, THE Hero SHALL display at least three quantified Trust_Signals, each pairing a numeric value with a descriptive label (for example projects delivered, client satisfaction, and service coverage).
3. WHEN a visitor activates the Primary_CTA in the Hero, THE Website SHALL navigate the visitor to the Contact_Flow within 1 second.
4. WHEN a visitor activates the secondary action in the Hero, THE Website SHALL navigate the visitor to the portfolio content within 1 second.
5. WHILE Reduced_Motion is requested, THE Hero SHALL present its content in its final static state with the rotating-word and entrance animations disabled.

### Requirement 5: Prominent Trust Signals

**User Story:** As a prospective client, I want visible proof of credibility, so that I feel confident hiring the agency.

#### Acceptance Criteria

1. WHEN the Home_Page is rendered, THE Home_Page SHALL display at least 5 client or technology Trust_Signals in the TrustedBy Section.
2. WHEN the Home_Page is rendered, THE Home_Page SHALL display client testimonials in the Testimonials Section, each including the reviewer name, the reviewer role, and a star rating expressed as an integer between 1 and 5 inclusive.
3. WHEN a visitor activates the next or previous control in the Testimonials Section AND at least one testimonial exists, THE Website SHALL display the adjacent testimonial, wrapping from the last testimonial to the first and from the first testimonial to the last.
4. WHILE the Testimonials carousel is auto-advancing, THE Website SHALL advance to the next testimonial at an interval of 5 seconds.
5. WHILE the pointer is over the Testimonials carousel, THE Website SHALL pause auto-advancing.
6. WHEN the pointer leaves the Testimonials carousel, THE Website SHALL resume auto-advancing.
7. THE Pricing Section SHALL display a transparency Trust_Signal stating that pricing has no hidden fees.

### Requirement 6: Frictionless Conversion Path

**User Story:** As a visitor ready to inquire, I want an easy and obvious way to contact the agency, so that I can start a project without friction.

#### Acceptance Criteria

1. THE Website SHALL present the Primary_CTA in the persistent navigation bar on every route, positioned within the navigation bar's initial viewport region without requiring scrolling.
2. WHEN a visitor submits the Contact_Flow with all required fields (first name, last name, business email, and project details) completed, THE Website SHALL initiate the inquiry through the configured WhatsApp destination in a new browser tab with a prefilled message containing the submitted values of every completed field.
3. IF a visitor submits the Contact_Flow while any required field (first name, last name, business email, or project details) is empty, THEN THE Website SHALL prevent submission, SHALL retain all values the visitor has already entered, and SHALL indicate each required field that needs input.
4. WHEN the Contact_Flow submission is initiated successfully, THE Website SHALL display a confirmation state to the visitor and SHALL keep that confirmation state visible for at least 5 seconds.
5. WHEN a visitor activates a "Get Custom Quote" action in the Pricing Section, THE Website SHALL navigate the visitor to the Contact_Flow.
6. THE Website SHALL display the agency contact channels (phone number, email address, and location) in the Footer on every route.

### Requirement 7: Polished and Reliable Micro-Interactions

**User Story:** As a visitor, I want smooth, responsive interactions that respect my preferences, so that the experience feels refined and not distracting.

#### Acceptance Criteria

1. WHEN a visitor hovers over an interactive card or button, THE Website SHALL begin a visible hover state transition (an observable change in color, background, scale, or shadow) within 50ms and complete it within 300ms.
2. WHILE Reduced_Motion is requested, THE Website SHALL present entrance, looping, and parallax-animated elements directly in their final static state across all Sections, retaining only instantaneous focus and hover indicators.
3. WHEN a visitor focuses an interactive control using a keyboard, THE Website SHALL display a focus indicator that is visually distinct from both the control's unfocused state and its hover state, and SHALL keep that indicator visible until the control loses focus.
4. WHEN at least 20% of a Section's vertical height enters the viewport, THE Website SHALL trigger that Section's Scroll_Reveal animation exactly once.
5. WHEN a Scroll_Reveal animation has completed for a Section, THE Website SHALL not replay that animation until the page is reloaded or the visitor navigates to a different page.

### Requirement 8: Mobile-First Responsiveness

**User Story:** As a mobile visitor, I want the site to be fully usable and readable on my device, so that I can evaluate and contact the agency from my phone.

#### Acceptance Criteria

1. WHEN the Website is rendered at any viewport width between 320px and 1920px, THE Website SHALL display all content within the viewport width without triggering horizontal page scrolling.
2. WHEN the Website is rendered at any viewport width between 320px and 1920px, THE Website SHALL constrain all images and media elements to a maximum rendered width equal to the viewport width.
3. WHILE the viewport width is 768px or less, THE Website SHALL present the primary navigation in a collapsed state accessed through a single mobile menu control, with the navigation links hidden until the control is activated.
4. WHEN the mobile menu control is activated while the viewport width is 768px or less, THE Website SHALL display the full set of primary navigation links.
5. WHEN the viewport width is on a given side of a defined Breakpoint (1024px, 768px, or 480px), THE Website SHALL apply the layout rules defined for the width range on that side of the Breakpoint.
6. THE Website SHALL render all interactive tap targets at a minimum size of 44px by 44px at viewport widths of 768px or less.
7. WHILE the viewport width is 480px or less, THE Website SHALL render body text at a font size of at least 14px.

### Requirement 9: Performance and Loading Experience

**User Story:** As a visitor on a typical connection, I want the site to load quickly and smoothly, so that I do not abandon it before it appears.

#### Acceptance Criteria

1. WHEN a visitor navigates to a lazy-loaded sub-page route whose component is not yet ready, THE Website SHALL display a loading indicator within 100 milliseconds of the navigation and SHALL keep it visible until that route's component has finished loading.
2. WHEN a visitor navigates to a lazy-loaded sub-page route whose component is already loaded, THE Website SHALL render the route's component without displaying any loading indicator.
3. IF a route component fails to load, THEN THE Website SHALL display an error boundary fallback containing a visible message indicating that the page could not be loaded and a control that lets the visitor retry loading or return to the Home_Page, rather than displaying a blank page.
4. THE Website SHALL provide route-level code splitting for each of the following sub-pages such that each is loaded as a separate bundle: About, Services, CaseStudies, Blog, Contact, the legal pages (Privacy Policy, Terms and Conditions, Refund Policy, Cookie Policy), and the 404 page.
5. WHILE the rendered viewport width is 768 pixels or less, THE Website SHALL prevent decorative animated background effects on the Home_Page from running.
6. WHILE the rendered viewport width is greater than 768 pixels, WHEN the Home_Page is rendered, THE Website SHALL run the decorative animated background effects.

### Requirement 10: Visual Hierarchy and Content Scannability

**User Story:** As a visitor skimming the page, I want a clear visual hierarchy, so that I can quickly find the information I care about.

#### Acceptance Criteria

1. WHEN the Home_Page is rendered, THE Home_Page SHALL render exactly one level-1 heading.
2. THE Website SHALL order heading levels within each page so that, reading the document top to bottom, each heading's level is at most one level deeper than the most recent preceding heading of a shallower level (for example, an `h2` is not followed directly by an `h4` without an intervening `h3`).
3. WHERE a Section presents a list of two or more comparable items (services, pricing plans, or process steps), THE Section SHALL render every item in that list with equal rendered width, top edges aligned to a common horizontal baseline within a tolerance of 2px, the same ordered set of structural elements (for example heading, body text, action), and uniform inter-item spacing derived from the Spacing_Scale.
4. THE Pricing Section SHALL distinguish exactly one recommended pricing plan from the other pricing plans by displaying a visible text label identifying it as recommended AND applying at least one additional persistent visual treatment (a distinct border, background, or elevation) that differs from the treatment of the non-recommended plans.
