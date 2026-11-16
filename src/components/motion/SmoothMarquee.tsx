"use client";

import React, { useRef, useId } from "react";
import { clsx } from "clsx";

export interface SmoothMarqueeProps {
  children: React.ReactNode;
  /** Direction of movement */
  direction?: "left" | "right";
  /** Duration in seconds for one full loop cycle */
  speed?: number;
  /** Whether to pause the marquee when hovered */
  pauseOnHover?: boolean;
  /** Distance between items */
  gap?: number | string;
  /** Subtle left and right edge gradient fades for luxury presentation */
  fadeEdges?: boolean;
  /** Extra container className */
  className?: string;
  /** Extra track className */
  trackClassName?: string;
  /** Accessible label */
  ariaLabel?: string;
}

/**
 * SmoothMarquee
 *
 * Buttery 60/120fps infinite carousel running on the browser compositor layer.
 * Zero layout recalculations, zero dropped frames, seamless loop.
 * Conforms to Emil Kowalski's animation performance guidelines.
 */
export function SmoothMarquee({
  children,
  direction = "left",
  speed = 40,
  pauseOnHover = true,
  gap = "20px",
  fadeEdges = true,
  className,
  trackClassName,
  ariaLabel = "Contenu défilant",
}: SmoothMarqueeProps) {
  const instanceId = useId().replace(/:/g, "");
  const animationName = `marquee-${direction}-${instanceId}`;
  const gapValue = typeof gap === "number" ? `${gap}px` : gap;

  const keyframes =
    direction === "left"
      ? `@keyframes ${animationName} {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }`
      : `@keyframes ${animationName} {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }`;

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className={clsx(
        "relative overflow-hidden w-full select-none",
        fadeEdges && [
          "[mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]",
          "[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]",
        ],
        className
      )}
    >
      <style>{`
        ${keyframes}
        .track-${instanceId} {
          display: flex;
          width: max-content;
          animation: ${animationName} ${speed}s linear infinite;
          will-change: transform;
        }
        ${
          pauseOnHover
            ? `@media (hover: hover) and (pointer: fine) {
                .track-${instanceId}:hover {
                  animation-play-state: paused;
                }
              }`
            : ""
        }
        @media (prefers-reduced-motion: reduce) {
          .track-${instanceId} {
            animation: none !important;
            overflow-x: auto;
            max-width: 100%;
          }
        }
      `}</style>

      <div
        className={clsx(`track-${instanceId}`, trackClassName)}
        style={{ gap: gapValue }}
      >
        {/* Track 1: Original content */}
        <div
          className="flex shrink-0 items-center"
          style={{ gap: gapValue }}
        >
          {children}
        </div>

        {/* Track 2: Seamless duplicate for infinite loop */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center"
          style={{ gap: gapValue }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
