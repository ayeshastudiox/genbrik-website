'use client'

import { useRef } from 'react'
import type { PointerEvent as ReactPointerEvent, ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Panel wrapper with a pointer-following glass highlight.
 * The highlight is a single absolutely-positioned gradient driven by two CSS
 * variables, so the cost is one composited layer and one style write per frame.
 */
export function Spotlight({
  children,
  className,
  tone = 'dark',
  radius = 420,
  intensity = 0.1,
}: {
  children: ReactNode
  className?: string
  tone?: 'dark' | 'light'
  radius?: number
  intensity?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const frame = useRef(0)

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const element = ref.current
    if (!element || frame.current) return

    const { clientX, clientY } = event
    frame.current = window.requestAnimationFrame(() => {
      frame.current = 0
      const rect = element.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return
      element.style.setProperty('--mx', `${((clientX - rect.left) / rect.width) * 100}%`)
      element.style.setProperty('--my', `${((clientY - rect.top) / rect.height) * 100}%`)
    })
  }

  return (
    <div ref={ref} onPointerMove={handlePointerMove} className={cn('group relative', className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-out-expo group-hover:opacity-100"
        style={{
          background:
            tone === 'light'
              ? `radial-gradient(${radius}px circle at var(--mx, 50%) var(--my, 50%), rgba(25,25,28,${intensity * 0.45}), transparent 62%)`
              : `radial-gradient(${radius}px circle at var(--mx, 50%) var(--my, 50%), rgba(232,233,237,${intensity}), transparent 62%)`,
        }}
      />
      <div className="relative z-[1] h-full">{children}</div>
    </div>
  )
}
