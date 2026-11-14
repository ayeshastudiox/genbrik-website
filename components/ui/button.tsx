import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary'
type Tone = 'dark' | 'light'
type Size = 'md' | 'lg' | 'sm'

const base =
  'group relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-btn text-center font-medium transition-all duration-300 ease-out-expo touch-manipulation sm:min-h-0'

const sizeClass: Record<Size, string> = {
  md: 'px-5 py-3 text-[13.5px]',
  lg: 'px-6 py-3.5 text-[14px]',
  sm: 'px-4 py-2.5 text-[12.5px]',
}

/**
 * Primary = solid platinum fill with dark text, sheen on hover (spec §2.10).
 * On light sections the same control inverts to ink so contrast is preserved.
 * Secondary = 1px outline, transparent fill.
 * No arrow glyphs are appended to labels.
 */
function variantClass(variant: Variant, tone: Tone): string {
  if (variant === 'primary') {
    return tone === 'dark'
      ? 'bg-platinum text-ink shadow-[0_14px_40px_-18px_rgba(232,233,237,0.45)] hover:bg-white'
      : 'bg-slate text-platinum shadow-[0_14px_40px_-20px_rgba(25,25,28,0.6)] hover:bg-ink'
  }
  return tone === 'dark'
    ? 'border border-white/15 bg-white/[0.02] text-platinum backdrop-blur-sm hover:border-white/30 hover:bg-white/[0.06]'
    : 'border border-slate/20 bg-white/40 text-slate backdrop-blur-sm hover:border-slate/40 hover:bg-white'
}

export function buttonClassName({
  variant = 'primary',
  tone = 'dark',
  size = 'md',
  className,
}: {
  variant?: Variant
  tone?: Tone
  size?: Size
  className?: string
} = {}): string {
  return cn(base, sizeClass[size], variantClass(variant, tone), className)
}

/** Metal sheen overlay for primary controls. Render inside a relative parent. */
export function MetalSheen({ tone = 'dark' }: { tone?: Tone }) {
  return (
    <span
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-12deg] transition-transform duration-700 ease-out-expo group-hover:translate-x-[130%]',
        tone === 'light'
          ? 'bg-[linear-gradient(115deg,transparent_35%,rgba(232,233,237,0.22)_50%,transparent_65%)]'
          : 'bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.85)_50%,transparent_65%)]',
      )}
    />
  )
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  tone = 'dark',
  size = 'md',
  className,
  onClick,
}: {
  href: string
  children: ReactNode
  variant?: Variant
  tone?: Tone
  size?: Size
  className?: string
  onClick?: () => void
}) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:')
  const classes = buttonClassName({ variant, tone, size, className })

  const content = (
    <>
      {variant === 'primary' && <MetalSheen tone={tone} />}
      <span className="relative">{children}</span>
    </>
  )

  if (isExternal) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  )
}
