'use client';

import { motion } from 'framer-motion';

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up', // 'up', 'down', 'left', 'right', or 'none'
  fullWidth = false,
  className = '',
}) {
  const directionOffset = {
    up: 40,
    down: -40,
    left: 40,
    right: -40,
    none: 0,
  };

  const initialY = direction === 'up' || direction === 'down' ? directionOffset[direction] : 0;
  const initialX = direction === 'left' || direction === 'right' ? directionOffset[direction] : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
