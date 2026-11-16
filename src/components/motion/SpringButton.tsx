"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { clsx } from "clsx";
import { SPRINGS } from "@/lib/motion";

export interface SpringButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

/**
 * SpringButton
 *
 * Tactile, reactive button applying Emil Kowalski's physics:
 * - Active: scale(0.97) for immediate tactile response
 * - Hover: -1.5px lift with snappy spring recovery
 * - Explicit transitions: zero "transition: all"
 */
export function SpringButton({
  children,
  variant = "primary",
  href,
  target,
  rel,
  className,
  ...props
}: SpringButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const variantStyles = {
    primary:
      "bg-[var(--text,#111111)] text-[var(--surface-2,#ffffff)] border border-[var(--text,#111111)] shadow-sm hover:opacity-90 hover:shadow-md",
    secondary:
      "bg-[var(--surface-2,#ffffff)] text-[var(--text,#111111)] border border-[var(--border-strong,rgba(17,17,17,0.18))] hover:bg-[var(--bg-soft,#f1ede7)]",
    ghost:
      "bg-transparent text-[var(--text,#111111)] border border-[var(--border,rgba(17,17,17,0.10))] hover:border-[var(--text,#111111)] hover:bg-[var(--surface-2,#ffffff)]",
  };

  const sharedClasses = clsx(
    "inline-flex items-center justify-center gap-2 font-mono text-[11.5px] font-semibold uppercase tracking-[0.05em] px-5 py-3 rounded-md transition-[background-color,border-color,opacity,box-shadow] duration-200 select-none cursor-pointer",
    variantStyles[variant],
    className
  );

  const motionProps = !shouldReduceMotion
    ? {
        whileHover: { y: -1.5, transition: SPRINGS.snappy },
        whileTap: { scale: 0.97, transition: SPRINGS.press },
      }
    : {};

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? (rel || "noopener noreferrer") : rel}
        className={sharedClasses}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={props.type || "button"}
      className={sharedClasses}
      {...motionProps}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
