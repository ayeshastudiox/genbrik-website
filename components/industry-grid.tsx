import Link from 'next/link'
import { Icon } from '@/components/icon'
import { industries } from '@/lib/content'
import { cn } from '@/lib/utils'

/** Dense industry index used on the home page (spec §4.1, item 5). */
export function IndustryGrid({ className }: { className?: string }) {
  return (
    <div className={cn('grid gap-x-12 md:grid-cols-2', className)}>
      {industries.map((industry) => (
        <Link
          key={industry.id}
          href="/industries"
          className="group flex flex-col gap-3 border-t border-hairline-light py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
        >
          <span className="flex items-start gap-4">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline-light bg-white transition-colors group-hover:border-slate/25">
              <Icon name={industry.icon} className="h-3.5 w-3.5 text-slate-muted" />
            </span>
            <span>
              <span className="block font-display text-[15px] leading-snug text-slate transition-colors group-hover:text-ink">
                {industry.name}
              </span>
              <span className="mt-1 block max-w-[46ch] text-[12px] leading-relaxed text-slate-muted">
                {industry.note}
              </span>
            </span>
          </span>
          <span className="shrink-0 pl-12 text-[10.5px] leading-relaxed text-slate-muted/70 sm:pl-0 sm:pt-1 sm:text-right sm:text-[10px]">
            {industry.technologies.join(' · ')}
          </span>
        </Link>
      ))}
    </div>
  )
}
