'use client';

import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_EDITORIAL } from '@/lib/motion';
import { clsx } from 'clsx';

export interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  margin?: string;
  scale?: boolean;
  className?: string;
  id?: string;
}

export function RevealOnScroll({
  children,
  direction = 'up',
  distance = 22,
  delay = 0,
  duration = 0.65,
  once = true,
  margin = '-50px',
  scale = false,
  className,
  id,
}: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  const initialTransform = useMemo(() => {
    if (shouldReduceMotion) return {};
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      case 'none':
      default:
        return {};
    }
  }, [direction, distance, shouldReduceMotion]);

  const initialScale = !shouldReduceMotion && scale ? 0.97 : 1;

  return (
    <motion.div
      id={id}
      className={clsx('will-change-transform', className)}
      initial={{
        opacity: 0,
        scale: initialScale,
        ...initialTransform,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0.25 : duration,
          delay,
          ease: EASE_EDITORIAL,
        },
      }}
      viewport={{ once, margin: margin as `${number}px` }}
    >
      {children}
    </motion.div>
  );
}
