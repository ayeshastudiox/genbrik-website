'use client'

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

/**
 * Optional cursor glow (spec §2.11.D): a soft light bloom that follows the
 * pointer only while it is over a dark hero marked with `data-glow`, so light
 * paper sections stay perfectly still. Disabled for touch and reduced motion.
 */
export function CursorGlow() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(false)
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const springX = useSpring(x, { stiffness: 140, damping: 24, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 140, damping: 24, mass: 0.4 })
  const frame = useRef(0)

  useEffect(() => {
    if (reduce) return
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!query.matches) return

    const handleMove = (event: PointerEvent) => {
      if (frame.current) return
      const { clientX, clientY } = event
      frame.current = window.requestAnimationFrame(() => {
        frame.current = 0
        x.set(clientX)
        y.set(clientY)
        const target = document.elementFromPoint(clientX, clientY)
        setActive(Boolean(target && target.closest('[data-glow]')))
      })
    }

    const handleLeave = () => setActive(false)

    window.addEventListener('pointermove', handleMove, { passive: true })
    document.addEventListener('pointerleave', handleLeave)

    return () => {
      window.removeEventListener('pointermove', handleMove)
      document.removeEventListener('pointerleave', handleLeave)
      if (frame.current) window.cancelAnimationFrame(frame.current)
    }
  }, [reduce, x, y])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-30 -ml-40 -mt-40 h-[320px] w-[320px] rounded-full"
      style={{
        x: springX,
        y: springY,
        opacity: active ? 1 : 0,
        background: 'radial-gradient(closest-side, rgba(232,233,237,0.075), transparent 70%)',
        filter: 'blur(22px)',
        transition: 'opacity 400ms ease-out',
      }}
    />
  )
}
