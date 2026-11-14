'use client'

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import {
  DivisionFragment,
  NodeFragment,
  StatusFragment,
} from '@/components/interface-fragments'
import { cn } from '@/lib/utils'

/**
 * Hero focal object (spec §2.11.B).
 *
 * Banded brushed-metal sphere with a rim light, idle rotation in the banding,
 * cursor-driven tilt/parallax and varied glowing particles on the orbit ring.
 * Three floating interface fragments carry real category content (§2.11.C) and
 * are labelled as examples. Reduced-motion users get the static composition.
 */
const particles = [
  { left: '93%', top: '60%', size: 3, glow: 0.35, blur: false },
  { left: '64%', top: '93%', size: 2, glow: 0.22, blur: false },
  { left: '10%', top: '71%', size: 4, glow: 0.45, blur: true },
  { left: '12%', top: '25%', size: 2.5, glow: 0.2, blur: false },
  { left: '71%', top: '8%', size: 3.5, glow: 0.4, blur: true },
  { left: '88%', top: '32%', size: 1.8, glow: 0.18, blur: false },
]

export function HeroCore({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduce = useReducedMotion()

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 38, damping: 18, mass: 0.7 })
  const springY = useSpring(pointerY, { stiffness: 38, damping: 18, mass: 0.7 })

  const ringsX = useTransform(springX, (value) => value * 9)
  const ringsY = useTransform(springY, (value) => value * 9)
  const coreX = useTransform(springX, (value) => value * -16)
  const coreY = useTransform(springY, (value) => value * -16)
  const chipsX = useTransform(springX, (value) => value * 24)
  const chipsY = useTransform(springY, (value) => value * 24)

  // tilt: a few degrees of real rotation toward the pointer
  const tiltX = useTransform(springY, (value) => value * -7)
  const tiltY = useTransform(springX, (value) => value * 9)

  useEffect(() => {
    if (reduce) return
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
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
        pointerX.set(Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2)))
        pointerY.set(Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2)))
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
      className={cn('relative mx-auto aspect-square w-full', className)}
    >
      {/* Ambient light pool */}
      <div className="glow-orb absolute inset-[6%] opacity-90" />
      <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.12),transparent_70%)] blur-2xl" />

      {/* Instrument rings */}
      <motion.div style={{ x: ringsX, y: ringsY }} className="absolute inset-0">
        <div className="absolute inset-0 rounded-full border border-white/[0.07]" />

        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke="rgba(255,255,255,0.20)"
            strokeWidth="0.28"
            strokeDasharray="0.4 2.6"
            className="animate-spin-slow"
            style={{ transformOrigin: '50% 50%', transformBox: 'fill-box' }}
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="0.2"
            strokeDasharray="2.5 3.5"
            className="animate-spin-reverse"
            style={{ transformOrigin: '50% 50%', transformBox: 'fill-box' }}
          />
          <g stroke="rgba(255,255,255,0.11)" strokeWidth="0.2" strokeDasharray="0.8 1.6">
            <line x1="17" y1="28" x2="50" y2="50" />
            <line x1="83" y1="33" x2="50" y2="50" />
            <line x1="50" y1="88" x2="50" y2="50" />
          </g>
        </svg>

        <div className="chrome-ring absolute inset-[12%] animate-spin-reverse opacity-70" />
        <div className="absolute inset-[27%] rounded-full border border-white/[0.05]" />
      </motion.div>

      {/* Chrome core — banded, rim-lit, tilting toward the pointer */}
      <motion.div style={{ x: coreX, y: coreY }} className="absolute inset-[30%]">
        <div className="h-full w-full animate-float">
          <div className="h-full w-full [perspective:1200px]">
            <motion.div style={{ rotateX: tiltX, rotateY: tiltY }} className="h-full w-full">
              <div className="chrome-sphere h-full w-full">
                <div className="sphere-bands" />
                <div className="chrome-rim" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Ground reflection */}
      <div
        aria-hidden
        className="absolute bottom-[13%] left-1/2 h-[7%] w-[48%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(232,233,237,0.22),transparent)] blur-xl"
      />

      {/* Equatorial ring passing in front of the core */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[21%] w-[86%] -translate-x-1/2 -translate-y-1/2 -rotate-[15deg]">
        <div className="h-full w-full rounded-[50%] border border-white/20 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)] opacity-50" />
      </div>

      {/* Orbit particles — varied size, nearest ones carry a glow */}
      {particles.map((particle) => (
        <span
          key={`${particle.left}-${particle.top}`}
          className={cn(
            'absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-platinum',
            particle.blur ? 'blur-[0.7px]' : '',
          )}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            boxShadow: `0 0 ${particle.size * 6}px ${particle.size}px rgba(232,233,237,${particle.glow})`,
          }}
        />
      ))}

      {/* Floating interface fragments */}
      <motion.div
        style={{ x: chipsX, y: chipsY }}
        className="absolute -right-1 top-[3%] hidden sm:block"
      >
        <NodeFragment className="animate-float" />
      </motion.div>

      <motion.div
        style={{ x: chipsX, y: chipsY }}
        className="absolute -left-2 bottom-[7%] hidden sm:block"
      >
        <StatusFragment className="animate-float" />
      </motion.div>

      <motion.div
        style={{ x: chipsX, y: chipsY }}
        className="absolute -right-2 bottom-[2%] hidden lg:block"
      >
        <DivisionFragment className="animate-float" />
      </motion.div>
    </div>
  )
}
