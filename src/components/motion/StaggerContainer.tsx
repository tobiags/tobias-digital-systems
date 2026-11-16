"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { EASE_EDITORIAL, TIMING } from "@/lib/motion";
import { clsx } from "clsx";

export interface StaggerContainerProps {
  children: React.ReactNode;
  /** Delay between each child animation (seconds) */
  staggerDelay?: number;
  /** Delay before first child begins animating */
  delayChildren?: number;
  /** Trigger animation only once */
  once?: boolean;
  /** Viewport margin */
  margin?: string;
  className?: string;
  as?: React.ElementType;
}

export function StaggerContainer({
  children,
  staggerDelay = TIMING.staggerDefault,
  delayChildren = TIMING.staggerChildrenDelay,
  once = true,
  margin = "-40px",
  className,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  };

  return (
    <motion.div
      className={clsx("w-full", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: margin as any }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerItemProps {
  children: React.ReactNode;
  /** Distance in pixels for translateY */
  distance?: number;
  /** Duration in seconds */
  duration?: number;
  className?: string;
}

export function StaggerItem({
  children,
  distance = 18,
  duration = 0.55,
  className,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.25 : duration,
        ease: EASE_EDITORIAL,
      },
    },
  };

  return (
    <motion.div className={clsx(className)} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
