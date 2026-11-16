# Tobias Agossou — Digital Systems Studio
# Design, Engineering & Animation Guidelines

> Synthesized from **Emil Kowalski's Design Engineering & Animation Engine**, **Nutlope's Hallmark Design System**, and **Matt Pocock's Software Engineering Architecture**.
> Governs all visual design, layout composition, animation choreography, interaction polish, and code implementation across the platform.

---

## 1. Architectural Philosophy & Core Axioms

1. **Taste is trained, not innate**: Good taste is not subjective preference. It is a trained instinct: the ability to recognize what elevates work above the baseline. Reverse-engineer animations, audit interactions, inspect the micro-details.
2. **Unseen details compound**: When an interface behaves exactly as physical intuition assumes it should, users never consciously notice. That is the goal. A thousand barely audible voices singing in tune.
3. **Built, not generated (Anti-Slop)**: Every output must look intentionally crafted by human hands, not spit out by a foundation model default. Zero generic AI placeholders, zero purple-blue mesh gradients, zero fake testimonials, zero cards-inside-cards.
4. **Beauty is leverage**: In an era where functional software is commoditized, aesthetic rigor, fluid responsiveness, and tactile polish are decisive differentiators.
5. **Deep Modules & Clean Interfaces**: Every component and module presents a minimal, intuitive public API while encapsulating complex behavior, gesture handling, and state machines behind clean boundaries.

---

## 2. Hallmark Design Engine (Nutlope/hallmark)

### The Floor: 16 Non-Waivable Absolute Rules
The following rules bind every single component, page, and style definition. They cannot be bypassed or waived:

1. **Tokens at `:root`**: Every single color and font-family must pass through a token declared at `:root` (or a declared theme block). No literal color strings (e.g. hex, rgb) or raw `font-family` declarations past the token block.
2. **Never `transition: all`**: Never animate `width`, `height`, `top`, `left`, `margin`, or `padding`. Only animate `transform` and `opacity` (with optical blur and clip-path permitted when GPU-smooth).
3. **No italic anomalies**: Never use a single italic word inside an otherwise roman heading. Either italicize with an intentional system or keep uniform.
4. **Clipping**: `overflow-x: clip` on both `html` and `body`. Never use `overflow-x: hidden` (breaks `position: sticky` and `fixed`), and never use `100vw`.
5. **Robust grid & heading wrapping**: Image-bearing grid tracks must use `minmax(0, 1fr)`. All display headings must carry `overflow-wrap: break-word; min-width: 0`.
6. **Instant `:focus-visible`**: Every interactive element must provide an instant `:focus-visible` ring (contrast ratio >= 3:1), never animated or faded in.
7. **Accessibility & Reduced Motion**: Every keyframe or transform animation must have a `@media (prefers-reduced-motion: reduce)` fallback. Content must remain fully legible and visible with JavaScript disabled.
8. **No fake proof**: Never invent metrics, testimonials, customer quotes, logo walls, or case study figures. Use real client material or place a clean unfilled slot.
9. **No eyebrows or tracked capitals**: No inert category tags or pill labels placed above headings. Labels, captions, table headers, tags, and nav links use the body typeface (or dedicated theme label face) a step smaller, in sentence case or lowercase, untracked (`letter-spacing: normal`).
10. **No template punctuation**: No middle-dot-joined metadata chains (`A · B · C`), no arrows glued to link labels (`Learn more →`), and no decorative pulsating status dots.
11. **Banned visual clichés**: No purple-to-blue gradients, no cards inside cards, no emojis used as icons, and no fake hand-drawn browser or OS window frames.
12. **Hero fold visibility**: The hero headline, one sentence subhead, and primary action must all be visible at 1280 x 800 without scrolling.
13. **Screen word budget**: Approximately 80 words per screen viewport; maximum 450 visible words across an entire marketing page. The hero contains only a headline, one sentence, and actions.
14. **Centered & capped container**: Maximum container width between 1360px and 1520px. At 1920px screen width, gutters expand while grid columns and measure stay fixed.
15. **CSS stamp**: The first lines of CSS must include the design stamp and critique statement.
16. **Sloplint & static gates**: Code must pass static linting against AI defaults before delivery.

---

### Hallmark Craft & Surface Architecture

#### Color & Surfaces (OKLCH Scale)
- **OKLCH everywhere**: Colors defined via perceptual lightness, chroma, and hue.
- **The 4 Surface Layers**:
  - `Paper`: Light base (L: 92–98%, C: 0.005–0.015 towards anchor hue); Dark base (L: 12–18%, C: 0.008–0.015).
  - `Ink`: High-contrast foreground (Light paper: L 16–24%; Dark paper: L 88–96%, subtle tint).
  - `Neutrals`: 5 to 9 tinted steps between Paper and Ink (never pure gray / zero-chroma).
  - `Accent Signal`: One vibrant accent (Chroma 0.12–0.22) paired with `--color-accent-ink`.
- **Restrained Footprint**: The accent color acts strictly as a **signal** (active indicator, focus ring, primary CTA), covering **under 5%** of any viewport.
- **The Surface Ladder**: Climb different rungs of the ladder across page sections:
  $$\text{Whitespace} \longrightarrow \text{Hairline } (1\text{px rule}) \longrightarrow \text{Tinted Well } (\text{paper-2/3, no border}) \longrightarrow \text{Elevated Card } (\text{border OR shadow, never both})$$
- **No pure absolutes**: Avoid `#000000` or `#ffffff` outside the token definition.

#### Typography System
- **Maximum 2 Families** (Display + Body), plus at most one single-role outlier (e.g. mono for code/metrics, or custom wordmark).
- **Maximum 3 Weights** across the entire page (e.g., 400 regular, 500 medium, 700 bold).
- **Display Typography**:
  - Tracking: `-0.02em` to `-0.04em` on regular width headings; line-height: `1.0` to `1.15`.
  - Always apply `text-wrap: balance` to headings and `text-wrap: pretty` to body prose.
  - Heading measure: constrained via `ch` units (e.g. `max-width: 20ch` on `h1`, `30ch` on `h2`).
  - Body prose: minimum 16px font size, line-height `1.5` to `1.65`, measure `45ch` to `65ch` (max 75ch).
  - Figures and statistics: always apply `font-variant-numeric: tabular-nums`.

#### Section Openings (12 Non-Eyebrow Alternatives)
Instead of defaulting to an eyebrow label above a heading, use one of the 12 authentic openings:
1. **Air above**: Heading flush with clean whitespace.
2. **Heading announces itself**: Subject directly in the first two words.
3. **In-paragraph lead-in**: First words of paragraph set in heavier weight.
4. **Drop cap**: First paragraph only, once per page.
5. **Intentional divider rule**: Hairline, fleuron, or color edge.
6. **Graphic numeral at scale**: Single number set at `clamp(6rem, 16vw, 14rem)` when the number is the offer.
7. **True `<ol>` counter**: Real numbered steps with CSS counters.
8. **Caption below**: Contextual caption beneath the visual rather than above.
9. **Marginalia**: Side-column annotation beside body copy.
10. **Paper shift**: Background color band break defines the boundary.
11. **Running folio**: Subtle persistent header at the page edge.
12. **Persistent anchor**: Sticky section title as content scrolls underneath.

#### Copywriting & Voice Standards
- **Owner's Voice**: Direct, concrete nouns; short, rhythmic sentences; no buzzwords.
- **Banned Words**: *seamless, robust, empower, supercharge, elevate, effortless, unlock, unleash, next-generation, world-class, best-in-class, mission-critical, future-proof, game-changer, journey*.
- **The Swap Test**: If a headline could be copied onto a competitor's website without sounding false, rewrite it. Use the specific domain nouns of Tobias Agossou Digital Systems.
- **3 Tests per Line**: Can the reader picture it? Could it be proven false? Could only this studio say it?

---

## 3. Emil Kowalski Design Engineering & Animation Engine

### The Animation Decision Framework

Before animating any UI element, execute this decision tree:

```
Frequency of Exposure:
├── 100+ times/day (keyboard shortcuts, command palettes, nav tabs) → NO ANIMATION. EVER.
├── Tens of times/day (list rows, frequent hover states)            → Eliminate or drastically reduce (<= 150ms)
├── Occasional (modals, sheets, drawers, notifications)             → Standard polished animation (180–300ms)
└── Rare / First-time (hero entrance, celebration, onboarding)      → Choreographed delight (300–600ms wave)
```

#### Speed Budgets by Element
| UI Element | Target Duration | Easing Curve |
| :--- | :--- | :--- |
| Button press feedback | **100 – 160ms** | `--ease-out` / instant |
| Tooltips & popovers | **125 – 200ms** | `--ease-out` (`cubic-bezier(0.23, 1, 0.32, 1)`) |
| Selects & dropdowns | **150 – 250ms** | `--ease-out` |
| Drawers & side sheets | **200 – 400ms** | `--ease-drawer` (`cubic-bezier(0.32, 0.72, 0, 1)`) |
| Modals & dialogs | **200 – 350ms** | `--ease-out` |
| Hero group entrance | **400 – 600ms total** | Overlapping non-uniform stagger |

> **Hard Rule**: UI animations must finish under **300ms** (except modals/drawers up to 400ms and deliberate hero entrances). A 180ms dropdown feels responsive; a 400ms dropdown feels broken.

#### Easing Guidelines
- **Entering / Opening**: Always `ease-out` (starts immediately with speed, decelerates gracefully).
- **Moving on-screen**: `ease-in-out` (natural acceleration then deceleration).
- **Exiting**: `ease-in` or accelerated `ease-out`, faster than enter (60–75% of enter duration).
- **NEVER use `ease-in` for entering UI**: It delays the initial movement—the exact millisecond the user is watching.
- **Standard Custom Curves**:
  ```css
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
  ```

---

### Component Polish & Micro-Interactions

1. **Press Feedback (`:active`)**:
   - Every pressable element must scale slightly down on `:active`:
     ```css
     .button {
       transition: transform 160ms var(--ease-out);
     }
     .button:active {
       transform: scale(0.97);
     }
     ```
2. **Never Animate from `scale(0)`**:
   - In the physical world, objects do not appear from absolute nothingness.
   - Start from `scale(0.95)` with `opacity: 0`.
3. **Origin-Aware Popovers**:
   - Popovers, menus, and dropdowns scale from their trigger point:
     ```css
     .popover {
       transform-origin: var(--transform-origin, top left);
     }
     ```
   - *Exception: Modals stay `transform-origin: center`.*
4. **Tooltips: Skip Subsequent Delays**:
   - First tooltip waits 800ms. Once open, adjacent tooltips open instantly (`transition-duration: 0ms`) without re-animating.
5. **Blur to Mask Imperfect Transitions**:
   - Crossfading between complex states causes double-exposure artifacts. Add subtle `filter: blur(2px)` during the swap to blend the visual states seamlessly.
6. **Transitions over Keyframes for Dynamic UI**:
   - CSS Transitions can be smoothly interrupted and redirected. CSS `@keyframes` restart from step zero when interrupted.
7. **Hold-to-Action Pattern**:
   - Slow, deliberate press (`clip-path: inset(...)` 2s linear), instantaneous release (160ms ease-out).

---

### Apple Fluid Motion & Physics Engine

#### 1. Direct Manipulation & Pointer Capture
- Track pointer coordinates 1:1 using `setPointerCapture(e.pointerId)`.
- Respect the initial grab offset: never jump the element's center to the finger.

#### 2. Interruptibility (The Golden Rule)
- An interface is fluid when the user can grab a moving element mid-flight and reverse it without waiting for an animation to complete.
- **Never lock input during a transition**.
- Always animate from the element's **current presentation value** on screen, never from its theoretical target value.
- Reversing animations must blend velocity rather than slamming into a hard stop.

#### 3. Apple Spring Parameters
Apple replaced mass/stiffness/damping with intuitive design parameters:
- **Damping Ratio**:
  - `1.0` = **Critically damped** (zero bounce, smooth settle). **Use this as the default for all UI.**
  - `0.8` = Subtle organic momentum (use *only* when the user flicked or dragged with release velocity).
- **Response**: Settle time constant in seconds (`0.3s` to `0.5s`).
- **Web Mapping (`motion` / `framer-motion`)**:
  ```tsx
  // Critically damped default UI
  <motion.div animate={{ y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} />

  // Flick / drag release with momentum
  <motion.div animate={{ y: target }} transition={{ type: "spring", bounce: 0.2, duration: 0.4 }} />
  ```

#### 4. Momentum Projection Function
Calculate where a gesture will naturally land using Apple's exponential scroll decay:
```js
function project(initialVelocity /* px/s */, decelerationRate = 0.998) {
  return (initialVelocity / 1000) * decelerationRate / (1 - decelerationRate);
}

const projectedEndpoint = currentPosition + project(releaseVelocity);
const target = nearestSnapPoint(projectedEndpoint);
animateSpringTo(target, { velocity: releaseVelocity });
```

---

### Motion Choreography & Stagger

1. **One Entrance per Container**:
   - If a modal or drawer panel slides in, the content is **already inside it**.
   - *Never slide a container and then stagger its child items.* That creates two painful waiting layers.
2. **Non-Uniform Stagger**:
   - Uniform delays (`delay: i * 0.1s`) feel mechanical like a metronome.
   - Vary delays organically: Lead element moves first (0ms), Support elements follow in a quick wave (30–60ms intervals), total entrance finishes under 300ms.
3. **Element Casting**:
   | Role | Treatment | Motion |
   | :--- | :--- | :--- |
   | **Lead** | Primary focus (title, active card, hero visual) | Moves first, travels furthest |
   | **Support** | Secondary text, CTA buttons, sibling rows | Shorter distance, follows Lead closely |
   | **Decoration** | Badges, dividers, subtle accents | Pure opacity fade, zero position shift |
   | **Static** | Outer container, backgrounds, structural grids | No animation |
4. **Exits are Fast & Simultaneous**:
   - When closing or dismissing, never reverse-stagger items. Everything leaves together at 60–75% of the entrance duration.
   - Exit in the same direction as the mental model (e.g., entered from right $\rightarrow$ exits to right).

---

### Hardware Acceleration & Performance Rules

- **Only animate `transform` and `opacity`**. Never trigger layout recalculation (`height`, `width`, `top`, `left`, `margin`).
- **Motion 14.2+ Optimization**: With `motion: ^14.14.0`, shorthand values (`x`, `y`, `scale`, `rotate`) are hardware-accelerated. In pure CSS, use `transform: translate3d(x, y, 0)`.
- **CSS Variables in Containers**: Changing custom properties on a parent container causes full style recalculation for all descendants. During fast drag/pointer operations, mutate `element.style.transform` directly rather than setting CSS variables on parent wrappers.
- **Keep animated `blur()` under 20px**: GPU rasterization of large Gaussian blurs degrades frame rates, especially on mobile and WebKit.
- **Touch device guard**:
  ```css
  @media (hover: hover) and (pointer: fine) {
    .card:hover {
      transform: translateY(-2px);
    }
  }
  ```

---

## 4. Matt Pocock Engineering & Architectural Standards

1. **Deep Modules**:
   - Modules provide substantial functionality behind narrow, simple seams.
   - Keep internal state machines, complex math, and gesture handlers private; expose clean, expressive React hooks and component interfaces.
2. **Test-Driven Red-Green-Refactor**:
   - For all data pipelines, utility helpers, calculation engines, and interactive state transitions, write failing test cases first (`tdd`).
3. **Domain Modeling & Single Context**:
   - Domain vocabulary is documented in `GLOSSARY.md`.
   - Architectural decisions are recorded in `docs/adr/`.
   - Issue tickets and engineering tasks are tracked locally under `docs/tickets/`.

---

## 5. Review & Audit Checklist (Mandatory Table Format)

When auditing UI or reviewing PRs, format all findings in an explicit Markdown table:

| Before | After | Why |
| :--- | :--- | :--- |
| `transition: all 300ms` | `transition: transform 160ms var(--ease-out)` | Avoids animating layout properties; tightens duration to responsive budget. |
| `transform: scale(0)` | `transform: scale(0.95); opacity: 0` | Real-world objects do not appear from a pinpoint; scale(0.95) feels physical. |
| `transition-timing-function: ease-in` | `transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1)` | `ease-in` lags initially; strong `ease-out` delivers instant feedback. |
| No active state on button | `transform: scale(0.97)` on `:active` | Confirms the user's touch/click immediately. |
| Eyebrow text above `h2` | Integrated headline opening or editorial folio | Eliminates AI-generated template visual tell (Hallmark Gate 54). |
| Raw `#2952ff` in component | `var(--color-accent)` token | Enforces system tokens at `:root` (Hallmark Gate 48). |
| Staggered items inside sliding drawer | Items mounted instantly with drawer slide | Avoids compounding two layers of entrance animations. |
