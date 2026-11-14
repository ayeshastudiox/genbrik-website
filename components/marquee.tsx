import { cn } from '@/lib/utils'

/**
 * Slow service marquee. CSS-only (no JS), pauses on hover/focus and stops under
 * prefers-reduced-motion. The list is decorative because the same services are
 * described elsewhere on the page.
 */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const renderGroup = (groupKey: string) => (
    <div key={groupKey} className="flex shrink-0 items-center">
      {items.map((item) => (
        <div key={`${groupKey}-${item}`} className="flex items-center">
          <span className="whitespace-nowrap px-6 text-[12.5px] text-silver/40">{item}</span>
          <span aria-hidden className="h-[3px] w-[3px] rotate-45 bg-silver/25" />
        </div>
      ))}
    </div>
  )

  return (
    <div
      aria-hidden
      className={cn(
        'marquee relative overflow-hidden border-b border-hairline bg-ink/40 py-4',
        className,
      )}
    >
      <div className="marquee-track">
        {renderGroup('a')}
        {renderGroup('b')}
      </div>
    </div>
  )
}
