'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]

/**
 * Route-transition progress: a 300–500ms metallic sweep across a thin top bar
 * (spec §2.8). Never a full-screen spinner. Skipped entirely for reduced motion.
 */
export function RouteProgress() {
  const pathname = usePathname()
  const reduce = useReducedMotion() ?? false
  const [visible, setVisible] = useState(false)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (reduce) return

    setVisible(true)
    const timeout = window.setTimeout(() => setVisible(false), 520)
    return () => window.clearTimeout(timeout)
  }, [pathname, reduce])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px]">
      <AnimatePresence>
        {visible && (
          <motion.div
            key="route-progress"
            className="h-full origin-left bg-[linear-gradient(90deg,rgba(232,233,237,0.12),rgba(232,233,237,0.95)_45%,rgba(232,233,237,0.3))]"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              scaleX: { duration: 0.42, ease: EASE_OUT },
              opacity: { duration: 0.18 },
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
