import type { ProcessStep } from '@/lib/content'
import { cn } from '@/lib/utils'

/**
 * The one place numbered markers are appropriate: a genuine sequence
 * (spec §2.1, §4.1). Numbers are instrument marks on a connecting rail.
 */
export function ProcessSteps({
  steps,
  tone = 'dark',
  columns = 4,
  className,
}: {
  steps: ProcessStep[]
  tone?: 'dark' | 'light'
  columns?: 3 | 4
  className?: string
}) {
  const dark = tone === 'dark'

  return (
    <ol
      className={cn(
        'relative grid gap-x-8 gap-y-10 md:grid-cols-2',
        columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4',
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          'absolute left-0 right-0 top-[13px] hidden h-px lg:block',
          dark
            ? 'bg-[linear-gradient(90deg,rgba(255,255,255,0.03),rgba(255,255,255,0.22),rgba(255,255,255,0.03))]'
            : 'bg-[linear-gradient(90deg,rgba(0,0,0,0.04),rgba(0,0,0,0.18),rgba(0,0,0,0.04))]',
        )}
      />

      {steps.map((step, index) => (
        <li key={step.title} className="relative">
          <span
            className={cn(
              'relative z-10 flex h-[26px] w-[26px] items-center justify-center rounded-full border text-[10px] tabular-nums',
              dark
                ? 'border-white/15 bg-[#0B0B0E] text-silver/70'
                : 'border-black/10 bg-white text-slate-muted',
            )}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3
            className={cn(
              'mt-5 font-display text-[17px] font-medium leading-snug',
              dark ? 'text-platinum' : 'text-slate',
            )}
          >
            {step.title}
          </h3>
          <p
            className={cn(
              'mt-2 text-[13px] leading-relaxed',
              dark ? 'text-silver/45' : 'text-slate-muted',
            )}
          >
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  )
}
