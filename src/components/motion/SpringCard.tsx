'use client';

import { useReducedMotion, motion, type HTMLMotionProps } from 'framer-motion';
import { SPRINGS } from '@/lib/motion';
import { clsx } from 'clsx';

export interface SpringCardProps extends HTMLMotionProps<'div'> {
  drift?: 'driftA' | 'driftB' | 'none';
  hoverLift?: number;
  hoverScale?: number;
  tapScale?: number;
  interactive?: boolean;
}

export function SpringCard({
  children,
  drift = 'none',
  hoverLift = -3,
  hoverScale = 1.008,
  tapScale = 0.985,
  interactive = true,
  className,
  style,
  ...rest
}: SpringCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const driftClass =
    !shouldReduceMotion && drift === 'driftA'
      ? 'animate-drift-a'
      : !shouldReduceMotion && drift === 'driftB'
      ? 'animate-drift-b'
      : '';

  return (
    <motion.div
      className={clsx(
        'will-change-transform transform-gpu',
        driftClass,
        className
      )}
      style={style}
      whileHover={
        interactive && !shouldReduceMotion
          ? {
              y: hoverLift,
              scale: hoverScale,
              transition: SPRINGS.cardHover,
            }
          : undefined
      }
      whileTap={
        interactive && !shouldReduceMotion
          ? {
              scale: tapScale,
              transition: SPRINGS.press,
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </motion.div>
  );
}
