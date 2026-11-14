import { cn } from '@/lib/utils'

/**
 * Illustrative "glass dashboard" fragment for BPO service categories
 * (spec §2.11.D). It abstracts the interface we work in — claim status, order
 * intake, authorisations, pipelines — without showing invented numbers or live
 * metrics. Every panel is explicitly labelled as an example.
 */

export type OpsVariant = 'billing' | 'dme' | 'insurance' | 'staffing' | 'auto' | 'finance'

const VIEWS: Record<
  OpsVariant,
  { title: string; rows: Array<{ label: string; width: string; muted?: boolean }> }
> = {
  billing: {
    title: 'Claim status',
    rows: [
      { label: 'Submitted', width: '82%' },
      { label: 'In payer review', width: '58%' },
      { label: 'Posted', width: '36%', muted: true },
    ],
  },
  dme: {
    title: 'Order intake',
    rows: [
      { label: 'Intake', width: '76%' },
      { label: 'Eligibility', width: '52%' },
      { label: 'Resupply due', width: '30%', muted: true },
    ],
  },
  insurance: {
    title: 'Authorisations',
    rows: [
      { label: 'Requested', width: '70%' },
      { label: 'Payer review', width: '48%' },
      { label: 'Approved', width: '28%', muted: true },
    ],
  },
  staffing: {
    title: 'Candidate pipeline',
    rows: [
      { label: 'Sourced', width: '80%' },
      { label: 'Screened', width: '54%' },
      { label: 'Interview', width: '32%', muted: true },
    ],
  },
  auto: {
    title: 'Policy admin',
    rows: [
      { label: 'New policy', width: '72%' },
      { label: 'Endorsement', width: '44%' },
      { label: 'Renewal', width: '26%', muted: true },
    ],
  },
  finance: {
    title: 'Month-end',
    rows: [
      { label: 'Accounts payable', width: '78%' },
      { label: 'Accounts receivable', width: '56%' },
      { label: 'Reconciliation', width: '34%', muted: true },
    ],
  },
}

export function OpsDashboard({
  variant,
  className,
}: {
  variant: OpsVariant
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
