'use client'

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Mouse-reactive brushed-metal light sweep — the single "memorable" design move
 * (spec §2.1, §2.2, §2.8).
 *
 * Rendered only inside the Home hero, the AI & Technology hero and the primary CTA
 * treatment. The specular highlight follows the cursor on fine-pointer devices;
 * touch devices and reduced-motion users get a slow autoplay drift (or a static
 * gradient when motion is reduced).
 */
export function MetalSweep({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduce = useReducedMotion()
  const [autoplay, setAutoplay] = useState(false)

  const pointerX = useMotionValue(0.5)
  const pointerY = useMotionValue(0.42)
  const springX = useSpring(pointerX, { stiffness: 45, damping: 22, mass: 0.7 })
  const springY = useSpring(pointerY, { stiffness: 45, damping: 22, mass: 0.7 })

  const backgroundPositionX = useTransform(springX, (value) => `${15 + value * 70}%`)
  const backgroundPositionY = useTransform(springY, (value) => `${20 + value * 60}%`)

  useEffect(() => {
    if (reduce) {
      setAutoplay(false)
      return
    }

    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    setAutoplay(!query.matches)
    if (!query.matches) return

    let frame = 0
    const handlePointerMove = (event: PointerEvent) => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        const element = ref.current
        if (!element) return
        const rect = element.getBoundingClientRect()
        if (rect.width === 0 || rect.height === 0) return
        pointerX.set(Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)))
        pointerY.set(Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height)))
      })
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [pointerX, pointerY, reduce])

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        autoplay && 'metal-autoplay',
        className,
      )}
    >
      <motion.div
        className="metal-sweep-layer absolute inset-0"
        style={{ backgroundPositionX, backgroundPositionY }}
      />
    </div>
  )
}
