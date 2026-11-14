import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Inline marker for a [CONFIRM: ...] placeholder (spec §6).
 * Styled as a dotted underline so it is visible without looking like body copy.
 */
export function Placeholder({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <mark
      className={cn(
        'bg-transparent text-inherit underline decoration-dotted decoration-1 underline-offset-[3px] opacity-90',
        className,
      )}
    >
      {children}
    </mark>
  )
}

/** Block-level version, for paragraphs that are entirely pending confirmation. */
export function PendingNote({
  title = 'Pending confirmation',
  tone = 'light',
  className,
  children,
}: {
  title?: string
  tone?: 'dark' | 'light'
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'rounded-card border border-dashed p-5',
        tone === 'dark' ? 'border-white/20' : 'border-slate/20',
        className,
      )}
    >
      <p
        className={cn(
          'text-[12px] font-medium',
          tone === 'dark' ? 'text-silver/70' : 'text-slate-muted',
        )}
      >
        {title}
      </p>
      <div
        className={cn(
          'mt-2 text-[13.5px] leading-relaxed',
          tone === 'dark' ? 'text-silver/60' : 'text-slate-muted',
        )}
      >
        {children}
      </div>
    </div>
  )
}
