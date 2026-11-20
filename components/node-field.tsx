'use client'

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Decorative node/edge field for AI & Technology heroes and section headers.
 * Static geometry, CSS-only pulses, and a very small pointer parallax.
 * Node count is reduced on small screens.
 */

type Node = { x: number; y: number; r: number }

const nodes: Node[] = [
  { x: 96, y: 84, r: 3 },
  { x: 214, y: 52, r: 2 },
  { x: 318, y: 118, r: 4 },
  { x: 452, y: 66, r: 2.5 },
  { x: 556, y: 132, r: 3 },
  { x: 132, y: 226, r: 2.5 },
  { x: 268, y: 292, r: 3 },
  { x: 396, y: 232, r: 2 },
  { x: 512, y: 318, r: 3.5 },
  { x: 604, y: 246, r: 2 },
  { x: 58, y: 344, r: 2 },
  { x: 342, y: 366, r: 2.5 },
  { x: 462, y: 388, r: 2 },
  { x: 214, y: 152, r: 2 },
]

const edges: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [5, 13],
  [13, 2],
  [6, 11],
  [11, 8],
  [7, 4],
  [10, 5],
  [12, 8],
]

export function NodeField({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 40, damping: 20 })
  const springY = useSpring(y, { stiffness: 40, damping: 20 })
  const translateX = useTransform(springX, (value) => `${value}px`)
  const translateY = useTransform(springY, (value) => `${value}px`)

  // Slow scroll-linked drift so the field feels alive as the section passes.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const drift = useTransform(scrollYProgress, [0, 1], ['-3%', '3%'])

  useEffect(() => {
    if (reduce) return
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!query.matches) return

    let frame = 0
    const onMove = (event: PointerEvent) => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        const element = ref.current
        if (!element) return
        const rect = element.getBoundingClientRect()
        if (rect.width === 0 || rect.height === 0) return
        x.set(((event.clientX - rect.left) / rect.width - 0.5) * 18)
        y.set(((event.clientY - rect.top) / rect.height - 0.5) * 14)
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [reduce, x, y])

  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={{ x: translateX, y: translateY }}
      className={cn('pointer-events-none absolute inset-0', className)}
    >
      <motion.div style={{ y: drift }} className="h-full w-full">
        <svg
          viewBox="0 0 640 420"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          <g stroke="rgba(205,208,214,0.12)" strokeWidth="1">
            {edges.map(([from, to], index) => {
              const start = nodes[from]
              const end = nodes[to]
              if (!start || !end) return null
              return (
                <line
                  key={`edge-${index}`}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  className={index % 3 === 0 ? undefined : 'hidden sm:block'}
                />
              )
            })}
          </g>
          {nodes.map((node, index) => (
            <g key={`node-${index}`} className={index > 9 ? 'hidden sm:block' : undefined}>
              <circle cx={node.x} cy={node.y} r={node.r + 7} fill="rgba(232,233,237,0.035)" />
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill="rgba(232,233,237,0.55)"
                className="animate-pulse-soft"
                style={{ animationDelay: `${(index % 6) * 0.8}s` }}
              />
            </g>
          ))}
        </svg>
      </motion.div>
    </motion.div>
  )
}
