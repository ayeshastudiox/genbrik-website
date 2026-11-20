'use client'

import { Plus } from 'lucide-react'
import { useId, useState } from 'react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type AccordionItem = {
  id: string
  title: string
  subtitle?: string
  content: ReactNode
}

/**
 * Document-like accordion used on technology service deep-dives (spec §4.4).
 * Native buttons, one panel at a time, content unmounted when closed so hidden
 * links are never tabbable.
 */
export function Accordion({
  items,
  defaultOpenId,
}: {
  items: AccordionItem[]
  defaultOpenId?: string
}) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? items[0]?.id ?? null)
  const baseId = useId()

  return (
    <div className="border-t border-hairline-light">
      {items.map((item) => {
        const open = openId === item.id
        const buttonId = `${baseId}-${item.id}-button`
        const panelId = `${baseId}-${item.id}-panel`

        return (
          <div key={item.id} className="border-b border-hairline-light">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="flex items-start gap-4">
                  <span
                    className={cn(
                      'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors duration-300',
                      open
                        ? 'border-slate/40 bg-slate text-platinum'
                        : 'border-slate/15 text-slate-muted group-hover:border-slate/30',
                    )}
                  >
                    <Plus
                      aria-hidden
                      className={cn('h-3 w-3 transition-transform duration-300', open && 'rotate-45')}
                    />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="font-display text-[clamp(1.15rem,1.8vw,1.35rem)] font-medium leading-snug text-slate">
                      {item.title}
                    </span>
                    {item.subtitle && (
                      <span className="text-[12px] text-slate-muted">{item.subtitle}</span>
                    )}
                  </span>
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="pb-8 pl-0 sm:pl-10"
            >
              {open && <div className="animate-fade-in">{item.content}</div>}
            </div>
          </div>
        )
      })}
    </div>
  )
}
