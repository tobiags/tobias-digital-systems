"use client";

import React, { useId } from "react";
import { clsx } from "clsx";

export interface FloatingElementProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Drift variation: "A" (drifts upward) or "B" (drifts downward) */
  variant?: "A" | "B";
  /** Drift distance in pixels (default: 7px) */
  distance?: number;
  /** Full cycle duration in seconds (default: 8s) */
  duration?: number;
  /** Pause animation when hovered */
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * FloatingElement
 *
 * Ambient floating drift physics from Tobias's Framer website.
 * Runs 100% on the GPU compositor layer via CSS @keyframes.
 * Zero CPU overhead, zero layout shifts, perfectly buttery.
 */
export function FloatingElement({
  children,
  variant = "A",
  distance = 7,
  duration = 8,
  pauseOnHover = true,
  className,
  style,
  ...rest
}: FloatingElementProps) {
  const instanceId = useId().replace(/:/g, "");
  const animName = `drift-${variant}-${instanceId}`;
  const signedDistance = variant === "A" ? -distance : distance;

  return (
    <div
      className={clsx(`floating-${instanceId} will-change-transform transform-gpu`, className)}
      style={style}
      {...rest}
    >
      <style>{`
        @keyframes ${animName} {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(${signedDistance}px); }
        }
        .floating-${instanceId} {
          animation: ${animName} ${duration}s ease-in-out infinite;
        }
        ${
          pauseOnHover
            ? `@media (hover: hover) and (pointer: fine) {
                .floating-${instanceId}:hover {
                  animation-play-state: paused;
                }
              }`
            : ""
        }
        @media (prefers-reduced-motion: reduce) {
          .floating-${instanceId} {
            animation: none !important;
          }
        }
      `}</style>
      {children}
    </div>
  );
}
