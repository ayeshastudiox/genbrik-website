import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Tone = 'ink' | 'void' | 'paper' | 'dim'

const toneClass: Record<Tone, string> = {
  ink: 'bg-ink text-silver',
  void: 'surface-void text-silver',
  dim: 'bg-[#07070A] text-silver',
  paper: 'bg-paper text-slate',
}

/**
 * Section rhythm: 120px desktop / 72px mobile (spec §2.7).
 * Tone is the only place a page decides its surface colour.
 */
export function Section({
  id,
  tone = 'paper',
  border = false,
  className,
  children,
}: {
  id?: string
  tone?: Tone
  border?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-[72px] sm:py-20 md:py-[120px]',
        toneClass[tone],
        border && (tone === 'paper' ? 'border-t border-hairline-light' : 'border-t border-hairline'),
        className,
      )}
    >
      {children}
    </section>
  )
}
