// components/AnimatedLetters.tsx
'use client';

import { motion } from 'framer-motion';

const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.015, // <-- Faster animation
      duration: 0.3,
    },
  }),
};


import { ElementType } from 'react';

export default function AnimatedLetters({ text, className = '', as: Tag = 'h2' }: {
  text: string;
  className?: string;
  as?: ElementType;
}) {
  const letters = Array.from(text);

  return (
    <Tag className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={letterVariant}
          style={{ display: 'inline-block' }} >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </Tag>
  );
  
}
