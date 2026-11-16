"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_EDITORIAL } from "@/lib/motion";
import { clsx } from "clsx";

export interface RevealOnScrollProps {
  children: React.ReactNode;
  /** Direction from which the element arrives */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Travel distance in pixels (subtle, 16-28px recommended) */
  distance?: number;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Duration of animation (seconds) */
  duration?: number;
  /** Trigger animation only once */
  once?: boolean;
  /** Viewport root margin before triggering (e.g. "-60px") */
  margin?: string;
  /** Scale entrance (e.g. 0.98 -> 1) */
  scale?: boolean;
  className?: string;
  id?: string;
}

/**
 * RevealOnScroll
 *
 * Viewport-triggered scroll entrance with signature editorial deceleration.
 * Respects prefers-reduced-motion automatically.
 */
export function RevealOnScroll({
  children,
  direction = "up",
  distance = 22,
  delay = 0,
  duration = 0.65,
  once = true,
  margin = "-50px",
  scale = false,
  className,
  id,
}: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, disable transform movements completely
  const initialTransform = React.useMemo(() => {
    if (shouldReduceMotion) return {};
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "none":
      default:
        return {};
    }
  }, [direction, distance, shouldReduceMotion]);

  const initialScale = !shouldReduceMotion && scale ? 0.97 : 1;

  return (
    <motion.div
      id={id}
      className={clsx("will-change-transform", className)}
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
          duration: shouldReduceMotion ? 0.3 : duration,
          delay,
          ease: EASE_EDITORIAL,
        },
      }}
      viewport={{ once, margin: margin as any }}
    >
      {children}
    </motion.div>
  );
}
