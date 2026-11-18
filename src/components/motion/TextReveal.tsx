'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_EDITORIAL } from '@/lib/motion';
import { clsx } from 'clsx';

export interface TextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  stagger?: number;
  duration?: number;
  className?: string;
}

export function TextReveal({
  text,
  as: Tag = 'h2',
  delay = 0.1,
  stagger = 0.04,
  duration = 0.65,
  className,
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: '105%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration,
        ease: EASE_EDITORIAL,
      },
    },
  };

  return (
    <Tag className={clsx('inline-block', className)}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.25em]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={containerVariants}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden py-[0.08em]">
            <motion.span
              className="inline-block will-change-transform"
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
