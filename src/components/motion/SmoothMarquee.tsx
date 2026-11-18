'use client';

import { useId } from 'react';
import { clsx } from 'clsx';

export interface SmoothMarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  pauseOnHover?: boolean;
  gap?: number | string;
  fadeEdges?: boolean;
  className?: string;
  trackClassName?: string;
  ariaLabel?: string;
}

export function SmoothMarquee({
  children,
  direction = 'left',
  speed = 40,
  pauseOnHover = true,
  gap = '20px',
  fadeEdges = true,
  className,
  trackClassName,
  ariaLabel = 'Contenu défilant',
}: SmoothMarqueeProps) {
  const instanceId = useId().replace(/:/g, '');
  const animationName = `marquee-${direction}-${instanceId}`;
  const gapValue = typeof gap === 'number' ? `${gap}px` : gap;

  const keyframes =
    direction === 'left'
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
        'relative overflow-hidden w-full select-none',
        fadeEdges && [
          '[mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]',
          '[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]',
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
            : ''
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
        <div
          className="flex shrink-0 items-center"
          style={{ gap: gapValue }}
        >
          {children}
        </div>

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
