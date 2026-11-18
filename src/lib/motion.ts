import type { Variants } from 'framer-motion';

export const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const;
export const EASE_EDITORIAL_CSS = 'cubic-bezier(0.22, 1, 0.36, 1)';

export const EASE_OUT_UI = [0.23, 1, 0.32, 1] as const;
export const EASE_OUT_UI_CSS = 'cubic-bezier(0.23, 1, 0.32, 1)';

export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;
export const EASE_IN_OUT_CSS = 'cubic-bezier(0.77, 0, 0.175, 1)';

export const EASE_DRAWER = [0.32, 0.72, 0, 1] as const;
export const EASE_DRAWER_CSS = 'cubic-bezier(0.32, 0.72, 0, 1)';

export const SPRINGS = {
  snappy: {
    type: 'spring',
    stiffness: 420,
    damping: 30,
    mass: 0.8,
  } as const,
  smooth: {
    type: 'spring',
    stiffness: 260,
    damping: 24,
    mass: 1,
  } as const,
  gentle: {
    type: 'spring',
    stiffness: 180,
    damping: 24,
    mass: 1.2,
  } as const,
  press: {
    type: 'spring',
    stiffness: 550,
    damping: 28,
  } as const,
  apple: {
    type: 'spring',
    duration: 0.45,
    bounce: 0.12,
  } as const,
  cardHover: {
    type: 'spring',
    stiffness: 340,
    damping: 22,
  } as const,
};

export const TIMING = {
  pressDuration: 0.12,
  hoverDuration: 0.18,
  dropdownDuration: 0.22,
  modalDuration: 0.32,
  revealDuration: 0.65,
  heroDuration: 0.75,
  marqueeSpeedNormal: 38,
  marqueeSpeedSlow: 52,
  staggerDefault: 0.055,
  staggerChildrenDelay: 0.08,
};

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

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};
