'use client';

import { useReducedMotion, motion, type HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { SPRINGS } from '@/lib/motion';

export interface SpringButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export function SpringButton({
  children,
  variant = 'primary',
  href,
  target,
  rel,
  className,
  type = 'button',
  ...props
}: SpringButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const variantStyles = {
    primary:
      'bg-text-main text-surface-2 border border-text-main shadow-sm hover:opacity-90 hover:shadow-md',
    secondary:
      'bg-surface-2 text-text-main border border-border-strong hover:bg-bg-soft',
    ghost:
      'bg-transparent text-text-main border border-border hover:border-text-main hover:bg-surface-2',
  };

  const sharedClasses = clsx(
    'inline-flex items-center justify-center gap-2 font-mono text-[11.5px] font-semibold uppercase tracking-[0.05em] px-5 py-3 rounded-md transition-[background-color,border-color,opacity,box-shadow] duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
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
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        className={sharedClasses}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={sharedClasses}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
}
