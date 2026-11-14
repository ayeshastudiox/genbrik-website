import type { ReactNode } from 'react'
import { Atmosphere } from '@/components/atmosphere'
import { MetalSweep } from '@/components/metal-sweep'
import { Container } from '@/components/ui/container'
import { MetalRule } from '@/components/ui/metal-rule'
import { Stagger, StaggerItem } from '@/components/ui/reveal'
import { cn } from '@/lib/utils'

/**
 * Shared interior-page hero.
 *
 * One composition for every page keeps the brand consistent: atmospheric dark
 * (or paper) field, oversized display title, quiet supporting copy, and an
 * optional right-hand visual. The entrance is a single choreographed sequence.
 */
export function PageHero({
  badge,
  title,
  intro,
  actions,
  meta,
  visual,
  tone = 'dark',
  compact = false,
  sweep = false,
  className,
}: {
  badge?: ReactNode
  title: ReactNode
  intro?: ReactNode
  actions?: ReactNode
  meta?: ReactNode
  visual?: ReactNode
  tone?: 'dark' | 'light'
  compact?: boolean
  sweep?: boolean
  className?: string
}) {
  const dark = tone === 'dark'

  return (
    <section
      data-glow={dark ? true : undefined}
      className={cn(
        'relative overflow-hidden',
        dark ? 'bg-ink text-silver' : 'bg-paper text-slate',
        className,
      )}
    >
      <Atmosphere tone={tone} perspective={dark} />
      {sweep && <MetalSweep className="opacity-40" />}

      <Container className="relative">
        <div
          className={cn(
            'grid grid-cols-12 items-center gap-x-0 gap-y-10 sm:gap-y-12 lg:gap-x-8',
            compact
              ? 'py-11 sm:py-14 md:py-16 lg:min-h-[420px]'
              : 'py-12 sm:py-16 md:py-24 lg:min-h-[600px]',
          )}
        >
          <Stagger
            className={cn('col-span-12', visual ? 'lg:col-span-6' : 'lg:col-span-8')}
            delay={0.05}
            stagger={0.07}
          >
            {badge && <StaggerItem>{badge}</StaggerItem>}

            <StaggerItem>
              <h1
                className={cn(
                  'max-w-[20ch] font-display text-[clamp(2.1rem,4.6vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.034em]',
                  dark ? 'text-platinum' : 'text-slate',
                  badge && 'mt-5 sm:mt-6',
                )}
              >
                {title}
              </h1>
            </StaggerItem>

            {intro && (
              <StaggerItem>
                <p
                  className={cn(
                    'mt-5 max-w-[52ch] text-[15px] leading-[1.6] sm:mt-6 sm:text-[15.5px]',
                    dark ? 'text-silver/55' : 'text-slate-muted',
                  )}
                >
                  {intro}
                </p>
              </StaggerItem>
            )}

            {actions && (
              <StaggerItem>
                <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">{actions}</div>
              </StaggerItem>
            )}

            {meta && <StaggerItem>{meta}</StaggerItem>}
          </Stagger>

          {visual && (
            <Stagger className="col-span-12 lg:col-span-6" delay={0.2}>
              <StaggerItem>{visual}</StaggerItem>
            </Stagger>
          )}
        </div>
      </Container>

      <MetalRule tone={tone} className="relative" />
    </section>
  )
}
