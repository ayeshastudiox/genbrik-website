import { cn } from '@/lib/utils'

/**
 * Illustrative "glass dashboard" fragment for technology pages. It abstracts a
 * system interface — AI runs, robot cells, compute pipelines or monitoring —
 * without showing invented numbers or live metrics. Every panel is explicitly
 * labelled as an example.
 */

export type SystemVariant = 'ai' | 'robotics' | 'chips' | 'surveillance'

const VIEWS: Record<
  SystemVariant,
  { title: string; rows: Array<{ label: string; width: string; muted?: boolean }> }
> = {
  ai: {
    title: 'AI system',
    rows: [
      { label: 'Ingest', width: '82%' },
      { label: 'Retrieve', width: '64%' },
      { label: 'Reason', width: '48%' },
      { label: 'Human review', width: '30%', muted: true },
    ],
  },
  robotics: {
    title: 'Robot cell',
    rows: [
      { label: 'Sense', width: '78%' },
      { label: 'Plan', width: '60%' },
      { label: 'Act', width: '44%' },
      { label: 'Monitor', width: '28%', muted: true },
    ],
  },
  chips: {
    title: 'Compute pipeline',
    rows: [
      { label: 'Compute', width: '80%' },
      { label: 'Memory', width: '62%' },
      { label: 'Interconnect', width: '46%' },
      { label: 'Control', width: '30%', muted: true },
    ],
  },
  surveillance: {
    title: 'Monitoring',
    rows: [
      { label: 'Detect', width: '76%' },
      { label: 'Classify', width: '58%' },
      { label: 'Review', width: '42%' },
      { label: 'Log', width: '26%', muted: true },
    ],
  },
}

export function SystemDashboard({
  variant,
  className,
}: {
  variant: SystemVariant
  className?: string
}) {
  const view = VIEWS[variant]

  return (
    <div aria-hidden className={cn('panel relative overflow-hidden rounded-panel p-4', className)}>
      <div aria-hidden className="grid-field absolute inset-0 opacity-30" />

      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-1.5 text-[10px] text-silver/55 sm:text-[9.5px]">
            <span aria-hidden className="dot bg-platinum/60" />
            {view.title}
          </span>
          <span className="text-[9px] text-silver/25 sm:text-[8px]">illustrative</span>
        </div>

        <div className="mt-3.5 space-y-3">
          {view.rows.map((row) => (
            <div key={row.label}>
              <div className="flex items-baseline justify-between text-[9.5px] text-silver/40 sm:text-[9px]">
                <span>{row.label}</span>
              </div>
              <div className="mt-1 h-[2.5px] w-full overflow-hidden rounded-full bg-white/[0.07]">
                <div
                  className={cn(
                    'h-full rounded-full',
                    row.muted
                      ? 'bg-[linear-gradient(90deg,rgba(205,208,214,0.35),rgba(205,208,214,0.06))]'
                      : 'bg-[linear-gradient(90deg,rgba(232,233,237,0.75),rgba(232,233,237,0.1))]',
                  )}
                  style={{ width: row.width }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3.5 flex items-center justify-between border-t border-white/[0.08] pt-2 text-[9px] text-silver/25 sm:text-[8px]">
          <span>Example view</span>
          <span>Not live data</span>
        </div>
      </div>
    </div>
  )
}
