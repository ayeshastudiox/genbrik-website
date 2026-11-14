import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Badges encode real information only ("AI-first", "Deliverable services") —
 * never decorative eyebrow labels (spec §2.10).
 */
export function Badge({
  children,
  tone = 'dark',
  className,
}: {
  children: ReactNode
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10.5px] font-medium leading-none',
        tone === 'dark'
          ? 'border-white/15 bg-white/[0.04] text-silver/75'
          : 'border-slate/15 bg-black/[0.02] text-slate-muted',
        className,
      )}
    >
      <span aria-hidden className={cn('dot', tone === 'dark' ? 'bg-platinum/60' : 'bg-slate/35')} />
      {children}
    </span>
  )
}
