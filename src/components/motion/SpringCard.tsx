"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SPRINGS } from "@/lib/motion";
import { clsx } from "clsx";

export interface SpringCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Floating drift animation from Framer Hero ("driftA" | "driftB" | "none") */
  drift?: "driftA" | "driftB" | "none";
  /** Lift distance in px on hover (default: -3) */
  hoverLift?: number;
  /** Scale on hover (default: 1.008) */
  hoverScale?: number;
  /** Scale on tap/press (default: 0.985) */
  tapScale?: number;
  /** Whether the card is clickable */
  interactive?: boolean;
  className?: string;
}

/**
 * SpringCard
 *
 * Luxury interactive card with Emil Kowalski spring hover & tap feedback.
 * Also supports the ambient floating drift ("driftA" / "driftB") from the original Framer design.
 */
export function SpringCard({
  children,
  drift = "none",
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
    !shouldReduceMotion && drift === "driftA"
      ? "animate-drift-a"
      : !shouldReduceMotion && drift === "driftB"
      ? "animate-drift-b"
      : "";

  return (
    <motion.div
      className={clsx(
        "will-change-transform transform-gpu",
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
      {...(rest as any)}
    >
      {children}
    </motion.div>
  );
}
