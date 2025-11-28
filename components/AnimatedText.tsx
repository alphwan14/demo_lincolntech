'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedTextProps {
  children: string
  className?: string
  delay?: number
  stagger?: number
}

export default function AnimatedText({ children, className = '', delay = 0, stagger = 0.02 }: AnimatedTextProps) {
  const letters = children.split('')

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * stagger,
            duration: 0.5,
            ease: 'easeOut',
          }}
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  )
}

