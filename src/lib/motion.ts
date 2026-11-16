/**
 * Motion System & Physics Presets
 * Grounded in Emil Kowalski's animation rules & Tobias Agossou Studio's Framer design language.
 *
 * Rules:
 * - Composite properties only: transform & opacity (GPU-accelerated, 60-120fps)
 * - Never ease-in on UI entrances (delays the exact moment the user is watching)
 * - Deceleration curves: cubic-bezier(0.22, 1, 0.36, 1) for editorial luxury feel
 * - Fast, physical springs for interaction (hover, press, gestures)
 * - Short staggers (30-80ms) - long staggers make users wait
 * - Full reduced-motion and touch-pointer gating
 */

import type { Variants, Transition } from "framer-motion";

// ============================================================================
// 1. EASING CURVES (Strictly calibrated tokens)
// ============================================================================

/**
 * Editorial ease-out: Signature curve from Tobias's original Framer site.
 * Fluid, elegant, perfectly weighted deceleration for text, sections, and cards.
 */
export const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const;
export const EASE_EDITORIAL_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Strong UI ease-out: Emil Kowalski standard for menus, dropdowns, and buttons.
 */
export const EASE_OUT_UI = [0.23, 1, 0.32, 1] as const;
export const EASE_OUT_UI_CSS = "cubic-bezier(0.23, 1, 0.32, 1)";

/**
 * Dynamic ease-in-out: Used for morphing, tab indicator gliding, or continuous loops.
 */
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;
export const EASE_IN_OUT_CSS = "cubic-bezier(0.77, 0, 0.175, 1)";

/**
 * iOS drawer ease: Vaul-like smooth sheet/drawer curve.
 */
export const EASE_DRAWER = [0.32, 0.72, 0, 1] as const;
export const EASE_DRAWER_CSS = "cubic-bezier(0.32, 0.72, 0, 1)";

// ============================================================================
// 2. SPRING PRESETS (Physical, reactive, no artificial delays)
// ============================================================================

export const SPRINGS = {
  /** Snappy & responsive: for toggles, pills, and active tabs */
  snappy: {
    type: "spring",
    stiffness: 420,
    damping: 30,
    mass: 0.8,
  } as const,

  /** Smooth & elegant: for modal entrances, hover lifts, and cards */
  smooth: {
    type: "spring",
    stiffness: 260,
    damping: 24,
    mass: 1,
  } as const,

  /** Gentle & floating: for ambient elements and soft popovers */
  gentle: {
    type: "spring",
    stiffness: 180,
    damping: 24,
    mass: 1.2,
  } as const,

  /** Press feedback: instant compression and bounce-back */
  press: {
    type: "spring",
    stiffness: 550,
    damping: 28,
  } as const,

  /** Apple-style spring: duration & bounce parameters for intuitive feel */
  apple: {
    type: "spring",
    duration: 0.45,
    bounce: 0.12,
  } as const,

  /** Interactive card hover */
  cardHover: {
    type: "spring",
    stiffness: 340,
    damping: 22,
  } as const,
};

// ============================================================================
// 3. MOTION TIMING TOKENS (Milliseconds & seconds)
// ============================================================================

export const TIMING = {
  pressDuration: 0.12,
  hoverDuration: 0.18,
  dropdownDuration: 0.22,
  modalDuration: 0.32,
  revealDuration: 0.65,
  heroDuration: 0.75,
  marqueeSpeedNormal: 38,
  marqueeSpeedSlow: 52,
  staggerDefault: 0.055, // Between 30ms and 80ms (Emil Kowalski golden zone)
  staggerChildrenDelay: 0.08,
};

// ============================================================================
// 4. ANIMATION VARIANTS (Framer Motion / Motion)
// ============================================================================

/**
 * Fade up entrance: subtle 20-24px rise with editorial deceleration.
 */
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? TIMING.revealDuration,
      delay: custom.delay ?? 0,
      ease: EASE_EDITORIAL,
    },
  }),
};

/**
 * Pure opacity fade: for subtle badges and background layers.
 */
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    transition: {
      duration: custom.duration ?? 0.4,
      delay: custom.delay ?? 0,
      ease: EASE_EDITORIAL,
    },
  }),
};

/**
 * Scale-in entrance: starts from 0.96 scale + 0 opacity.
 * (Rule: NEVER scale from 0 - nothing in reality pops out of a singularity).
 */
export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: custom.duration ?? 0.45,
      delay: custom.delay ?? 0,
      ease: EASE_EDITORIAL,
    },
  }),
};

/**
 * Choreographed Stagger Container
 * Animates children sequentially with non-blocking, organic delays.
 */
export const createStaggerContainerVariants = (
  staggerChildren = TIMING.staggerDefault,
  delayChildren = TIMING.staggerChildrenDelay
): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerContainerVariants = createStaggerContainerVariants();

/**
 * Stagger child item variant
 */
export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE_EDITORIAL,
    },
  },
};

/**
 * Interactive button press physics
 */
export const buttonPressVariants = {
  rest: { scale: 1 },
  hover: {
    y: -1.5,
    transition: { duration: 0.16, ease: EASE_OUT_UI },
  },
  tap: {
    scale: 0.97,
    transition: SPRINGS.press,
  },
};

/**
 * Interactive card physics (spring hover & tap)
 */
export const cardInteractiveVariants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -3,
    scale: 1.008,
    transition: SPRINGS.cardHover,
  },
  tap: {
    scale: 0.985,
    transition: SPRINGS.press,
  },
};

// ============================================================================
// 5. REDUCED MOTION SAFE VARIANTS
// ============================================================================

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};
