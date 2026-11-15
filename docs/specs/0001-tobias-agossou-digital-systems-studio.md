# SPEC 0001: Tobias Agossou — Digital Systems Studio Web Platform

## Problem Statement
Potential high-ticket clients, enterprise partners, and founders seeking digital systems architecture, product design, and AI automation consulting need immediate clarity on Tobias Agossou's authority, credibility, methodologies, and past outcomes. The previous fragmented assets need to be unified into an ultra-fast, high-converting, warm editorial web platform with zero layout shift, instantaneous load times, rich social proof (400+ verified reviews), and frictionless booking/contact.

## Solution
An ultra-performant, SEO-optimized web application matching the warm editorial design system of `Tobias Agossou - Site.dc.html`, featuring:
1. High-contrast typography pairing *Bodoni Moda* serif display with *Inter* body and *JetBrains Mono* data labels.
2. Distinctive warm canvas (`#f6f3ee`) and crisp electric cobalt blue accents (`#2952ff`).
3. Hero with portrait, animated floating capability cards (`driftA`, `driftB`), and key social proof statistics (400+ reviews, 508 missions).
4. Philosophy and Values editorial narrative.
5. 4 Core Expertise modules and a 4-step Delivery Process.
6. Featured Realizations showcase with responsive bento-grid layouts.
7. Verified Social Proof and Testimonial cards extracted directly from verified platforms (ComeUp, Fiverr).
8. Frictionless Contact/Consultation form with instant client feedback and robust backend validation.
9. Comprehensive technical SEO: structured JSON-LD data for `Person` and `ProfessionalService`, OpenGraph metadata, sitemap, and robots.txt.

## User Stories
1. As a prospective client, I want to see Tobias Agossou's core value proposition within the first 3 seconds of visiting, so that I immediately understand how he can elevate my company's digital systems.
2. As a visitor browsing on mobile or desktop, I want smooth micro-animations and drifting floating cards that do not jitter or degrade frame rate, so that the experience feels luxurious and responsive.
3. As a prospective client, I want to inspect Tobias's 4-step delivery process (Immersion, Architecture, Conception & Prototypage, Déploiement), so that I know exactly how an engagement proceeds.
4. As an enterprise decision maker, I want to review verified client feedback and metrics (400+ 5-star reviews, 508 completed projects), so that I have complete confidence in the studio's track record.
5. As a prospect ready to initiate a project, I want an accessible, clear contact section with quick actions, so that I can schedule a consultation without friction.
6. As a search engine crawler (Googlebot, Bingbot), I want valid Schema.org JSON-LD microdata, clean semantic HTML (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`), and instant static page responses, so that the site ranks at the top for Tobias Agossou and digital systems engineering queries.
7. As a user with accessibility needs or `prefers-reduced-motion`, I want animations to honor my system preferences, so that the experience is comfortable and universally accessible.

## Implementation Decisions
- **Framework**: Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS.
- **Styling Architecture**: Tailwind configuration extended with exact design tokens from `Tobias Agossou - Site.dc.html`:
  - Canvas colors: `--bg: #f6f3ee`, `--bg-soft: #f1ede7`, `--surface: #fbf8f4`, `--surface-2: #ffffff`.
  - Text colors: `--text: #111111`, `--text-soft: #4b4b4b`, `--text-muted: #777777`.
  - Border colors: `--border: rgba(17,17,17,0.10)`, `--border-strong: rgba(17,17,17,0.18)`.
  - Accent: `--accent: #2952ff`.
  - Fonts: Google Fonts `Bodoni Moda`, `Inter`, `JetBrains Mono`.
- **Component Breakdown**:
  - `Header`: Sticky glassmorphic blur with navigation links and CTA.
  - `Hero`: Headline typography, value statement, dual CTAs, stats row, portrait frame with floating drift cards.
  - `Philosophy & Values`: Asymmetric editorial layout with prominent blockquote and numbered value pills.
  - `Expertises & Process`: Detailed bento cards highlighting Product Design, Web Systems, AI & Automation, and Strategic Advisory, paired with the 4-phase methodology.
  - `Realizations`: Filterable/curated portfolio cards showcasing recent impactful deliveries.
  - `Testimonials / Reviews`: Verified proof carousel/grid integrating Fiverr and ComeUp review screenshots and metrics.
  - `Contact`: Direct contact channel and interactive message form with validation.
  - `SEO`: Meta tags, canonical links, OpenGraph cards, JSON-LD structured data.

## Testing Decisions
- Component rendering tests verifying semantic tag hierarchy, correct attributes, accessibility roles, and responsiveness.
- Contact form validation tests verifying proper validation on invalid inputs and successful submission handling.
- Build and type-checking verification: `npm run build` with zero TypeScript or linting errors.

## Out of Scope
- Full payment gateway processing (initial scope focuses on lead capture and direct booking).
- Multi-language localization (initial scope is focused on French as specified in the reference prototype).

## Further Notes
The reference prototype `Tobias Agossou - Site.dc.html` serves as the pixel-exact target. All asset images from `Système_design_premium_épuré.zip` are directly mirrored into `public/images/`.
