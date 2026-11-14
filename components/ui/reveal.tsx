'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]

/**
 * One orchestrated entrance per page (spec §2.8).
 *
 * The hero and the first visible section share a single <Stagger> timeline:
 * 150–400ms total, fade + rise, ease-out. Lower sections use <FadeIn> instead,
 * which is opacity-only and used sparingly.
 */
export function Stagger({
  children,
  className,
  delay = 0.08,
  stagger = 0.07,
}: {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
}) {
  const reduce = useReducedMotion() ?? false

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  }

  return (
    <motion.div className={className} initial="hidden" animate="show" variants={container}>
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion() ?? false

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.55, ease: EASE_OUT },
    },
  }

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}

/** Single subtle scroll fade for lower sections. No slide. */
export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion() ?? false

  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
