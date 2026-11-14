'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Icon } from '@/components/icon'
import type { FlagshipService } from '@/lib/content'
import { cn } from '@/lib/utils'

function divisionOf(href: string): 'AI & Future Tech' | 'BPO' {
  return href.startsWith('/bpo') ? 'BPO' : 'AI & Future Tech'
}

/**
 * Interactive service index: a quiet list on the left, a live glass preview on
 * the right. Hovering or focusing a row updates the preview; the row itself is
 * the link, so keyboard and screen-reader behaviour stays conventional.
 *
 * The preview is desktop-only; on small screens the list carries the same
 * information inline.
 */
export function ServiceShowcase({ items }: { items: FlagshipService[] }) {
  const [active, setActive] = useState(0)
  const current = items[active] ?? items[0]

  if (!current) return null

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-7">
        <ul className="border-b border-hairline-light">
          {items.map((item, index) => {
            const isActive = index === active
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={cn(
                    'group relative flex items-center gap-4 border-t border-hairline-light px-3 py-5 transition-colors duration-300 sm:px-5',
                    isActive ? 'bg-white' : 'hover:bg-white/70',
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      'absolute left-0 top-0 h-full w-[2px] origin-top bg-slate transition-transform duration-500 ease-out-expo',
                      isActive ? 'scale-y-100' : 'scale-y-0',
                    )}
                  />
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline-light bg-paper transition-colors duration-300 group-hover:border-slate/20">
                    <Icon name={item.icon} className="h-[18px] w-[18px] text-slate/80" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[17px] leading-snug text-slate">
                      {item.name}
                    </span>
                    <span className="mt-0.5 block text-[12.5px] leading-snug text-slate-muted">
                      {item.line}
                    </span>
                  </span>
                  <span className="hidden shrink-0 text-[10.5px] text-slate-muted/60 sm:block">
                    {divisionOf(item.href)}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28">
          <div className="panel-light overflow-hidden rounded-feature">
            <div className="relative overflow-hidden border-b border-hairline-light p-7">
              <div aria-hidden className="grid-field-light absolute inset-0 opacity-70" />
              <div className="relative flex items-center justify-between">
                <span className="chip chip-light">{divisionOf(current.href)}</span>
                <span className="text-[11px] tabular-nums text-slate-muted/60">
                  {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>
              </div>

              <div key={current.id} className="relative mt-12 animate-fade-in">
                <Icon name={current.icon} className="h-8 w-8 text-slate/75" />
                <h3 className="mt-6 font-display text-[27px] font-medium leading-[1.1] text-slate">
                  {current.name}
                </h3>
                <p className="mt-3 max-w-[32ch] text-[14px] leading-relaxed text-slate-muted">
                  {current.line}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 p-5">
              <span className="text-[11.5px] text-slate-muted">Scoped per engagement</span>
              <Link
                href={current.href}
                className="text-[12.5px] text-slate underline decoration-slate/25 underline-offset-4 transition-colors hover:decoration-slate/70"
              >
                Read more
              </Link>
            </div>
          </div>
          <p className="mt-4 text-[11.5px] text-slate-muted/60">
            Hover or focus a service to preview it.
          </p>
        </div>
      </div>
    </div>
  )
}
