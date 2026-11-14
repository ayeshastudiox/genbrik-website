import { cn } from '@/lib/utils'

/**
 * Section divider carrying the metallic gradient (spec §2.2).
 * Used between major blocks only, never around every element.
 */
export function MetalRule({
  tone = 'dark',
  className,
}: {
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={cn('h-px w-full', tone === 'dark' ? 'metal-rule-dark' : 'metal-rule-light', className)}
    />
  )
}
