import { cn } from '@/lib/utils'

/**
 * Floating "live interface fragments" for hero scenes (spec §2.11.C).
 *
 * They carry real category content and are labelled as examples wherever a
 * state bar could be mistaken for a live metric. No invented numbers.
 */

export function NodeFragment({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('fragment w-[214px] rounded-panel px-3.5 py-3', className)}>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[9.5px] text-silver/55">
          <span aria-hidden className="dot bg-platinum/70" />
          Agent flow
        </span>
        <span className="text-[8.5px] text-silver/25">example</span>
      </div>

      <svg viewBox="0 0 190 64" className="mt-2 w-full" aria-hidden>
        <g stroke="rgba(232,233,237,0.22)" strokeWidth="0.7" fill="none">
          <path d="M24 32 H66" />
          <path d="M100 32 H140" />
          <path d="M54 40 Q54 56 76 56" strokeDasharray="1.6 2.6" />
        </g>
        <g>
          <circle cx="20" cy="32" r="3.4" fill="rgba(232,233,237,0.85)" />
          <circle cx="83" cy="32" r="3.4" fill="rgba(232,233,237,0.55)" />
          <circle
            cx="83"
            cy="32"
            r="7.5"
            fill="none"
            stroke="rgba(232,233,237,0.22)"
            className="animate-pulse-soft"
          />
          <circle cx="144" cy="32" r="3.4" fill="rgba(232,233,237,0.85)" />
          <circle cx="76" cy="56" r="2.2" fill="rgba(232,233,237,0.35)" />
        </g>
      </svg>

      <div className="flex items-center justify-between text-[8.5px] text-silver/30">
        <span>Intake</span>
        <span>Retrieve</span>
        <span>Act</span>
      </div>
    </div>
  )
}

const statusRows = [
  { label: 'Ingest', width: '74%' },
  { label: 'Retrieve', width: '56%' },
  { label: 'Review', width: '34%' },
]

export function StatusFragment({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('fragment w-[206px] rounded-panel px-3.5 py-3', className)}>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[9.5px] text-silver/55">
          <span aria-hidden className="dot bg-silver/70" />
          Agent run
        </span>
        <span className="text-[8.5px] text-silver/25">illustrative</span>
      </div>

      <div className="mt-3 space-y-2.5">
        {statusRows.map((row) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between text-[8.5px] text-silver/40">
              <span>{row.label}</span>
            </div>
            <div className="mt-1 h-[2.5px] w-full overflow-hidden rounded-full bg-white/[0.07]">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,rgba(232,233,237,0.8),rgba(232,233,237,0.12))]"
                style={{ width: row.width }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-2.5 text-[8px] text-silver/25">Example workflow</p>
    </div>
  )
}

export function TechnologyFragment({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('fragment w-[238px] rounded-panel px-4 py-3.5', className)}>
      <p className="text-[9px] text-silver/35">Technology stack</p>
      <div className="mt-2.5 space-y-2">
        <div className="flex items-baseline justify-between gap-4 border-b border-white/[0.07] pb-2">
          <span className="text-[11px] text-platinum/90">AI &amp; Technology</span>
          <span className="text-[8.5px] text-silver/30">Build</span>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <span className="max-w-[15ch] text-[11px] leading-snug text-platinum/90">
            Robotics &amp; Chips
          </span>
          <span className="text-[8.5px] text-silver/30">Apply</span>
        </div>
      </div>
      <p className="mt-2.5 border-t border-white/[0.07] pt-2 text-[8px] text-silver/25">
        One company
      </p>
    </div>
  )
}
