# ADR 0001: Architecture & Stack Selection for SEO, Speed, and AI-Friendliness

- **Status**: Accepted
- **Date**: 2026-11-15
- **Deciders**: Tobias Agossou, AI Agent (Matt Pocock Skills discipline)

## Context
The goal is to build the modern web platform for **Tobias Agossou — Digital Systems Studio**.
The requirements explicitly demand:
1. Fastest possible page loads and optimal Core Web Vitals (LCP, FID/INP, CLS).
2. Industry-standard SEO indexing, Rich Snippets (Schema.org JSON-LD), OpenGraph, dynamic sitemap, and semantic HTML.
3. AI-friendly codebase: deep modules, clean seams, strictly typed contracts, easy navigation for both humans and AI agents.
4. Faithful integration of the warm editorial design system (`Tobias Agossou - Site.dc.html`), including custom font pairings (*Bodoni Moda*, *Inter*, *JetBrains Mono*) and micro-animations.
5. Extensible foundation compatible with NestJS architectural patterns (modular controllers, services, validation pipes) for contact management and external automation (n8n, webhook, email).

## Options Considered
1. **Pure NestJS + Server-Side Templates (Handlebars/EJS)**:
   - *Pros*: Single runtime.
   - *Cons*: Poor DX for complex reactive UI and fine-grained micro-interactions; lack of modern component ecosystems for animations and responsive bento grids.
2. **Next.js (App Router, React 19, Tailwind CSS, TypeScript)** with NestJS Modular Service Layer:
   - *Pros*: Best-in-class SEO (static generation, automated metadata, JSON-LD), sub-second TTFB, image optimization (`next/image`), seamless client-side hydration, and clean modular service architecture.
   - *Cons*: Two framework patterns if split, but Next.js App Router easily hosts modular backend Route Handlers with NestJS-style dependency injection and validation.

## Decision
Adopt **Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS** as the primary web application stack, incorporating:
- **Clean Architecture**: Domain services structured under `src/modules/` (e.g. `modules/contact`, `modules/testimonials`, `modules/portfolio`).
- **SEO & Structured Data**: Built-in `generateMetadata()`, Schema.org JSON-LD for `Person` and `ProfessionalService`, semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Animation & Visual Polish**: Tailwind CSS utility tokens aligned with `Tobias Agossou - Site.dc.html`, CSS keyframes for floating drift cards, and intersection observers for scroll reveals.

## Consequences
- Ultra-fast static rendering with perfect Lighthouse scores.
- Codebase remains strictly typed, modular, and instantly accessible to AI agents.
- Future expansion into a standalone NestJS microservice is decoupled and straightforward if backend complexity grows.
