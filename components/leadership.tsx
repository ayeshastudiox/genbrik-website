'use client'

import { useEffect, useRef, useState } from 'react'
import { Atmosphere } from '@/components/atmosphere'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'

/**
 * Leadership section.
 *
 * The CEO remains the featured executive. The two supporting profiles use one
 * shared card system: a media panel on one side and an editorial text column on
 * the other at larger widths, collapsing to a single stacked column on phones.
 *
 * The Chairman has no supplied photograph, so his media panel is a designed
 * monogram plate rather than an empty image frame. No biography, qualification,
 * achievement or other personal detail is invented here.
 */

function PortraitFrame({
  src,
  alt,
  initials,
  label,
  className,
  objectPosition = 'center',
}: {
  src: string
  alt: string
  initials: string
  label: string
  className?: string
  objectPosition?: 'center' | 'top'
}) {
  const [failed, setFailed] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth === 0) setFailed(true)
  }, [])

  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden bg-[#0B0B0E]',
        className,
      )}
    >
      {failed ? (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(120%_100%_at_50%_0%,#17181c,#070708)]"
        >
          <span className="chrome-text font-display text-[clamp(3rem,7vw,5rem)] font-semibold tracking-[-0.06em]">
            {initials}
          </span>
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={cn(
            'absolute inset-0 h-full w-full object-cover',
            objectPosition === 'top' ? 'object-top' : 'object-center',
          )}
        />
      )}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(8,8,10,0.9))]"
      />
      <span className="chip absolute left-4 top-4 sm:left-5 sm:top-5">{label}</span>
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <p className="text-[10px] text-silver/40">GENBRIK</p>
      </div>
    </div>
  )
}

export function Leadership() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-silver md:py-28">
      <Atmosphere grid={false} />
      <div
        aria-hidden
        className="chrome-arc pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] opacity-15"
      />

      <Container className="relative">
        {/* CEO — the featured executive, with the existing portrait. */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.92fr)_1.08fr] md:items-center md:gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="mx-auto w-full max-w-[420px] md:mx-0 md:max-w-none lg:col-span-5">
            <div className="relative overflow-hidden rounded-feature border border-white/10 bg-[#0B0B0E]">
              <PortraitFrame
                src="/images/ceo-akash-gill.png?v=2"
                alt="Mr. Akash Gill, Chief Executive Officer of GENBRIK"
                initials="AG"
                label="Leadership"
                objectPosition="top"
                className="aspect-[4/5]"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <span className="chip">Executive leadership</span>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-platinum">
              MR. AKASH GILL
            </h2>
            <p className="mt-3 text-[14px] text-silver/55">Chief Executive Officer (CEO)</p>

            <div className="mt-8 h-px w-28 bg-[linear-gradient(90deg,rgba(232,233,237,0.5),transparent)]" />

            <p className="mt-8 max-w-[46ch] text-[13px] leading-relaxed text-silver/40">
              GENBRIK is led across both divisions — AI &amp; Future Tech and BPO &amp; Professional
              Services — under one standard for how work is scoped, delivered and supported.
            </p>
          </div>
        </div>

        {/* The wider leadership team. */}
        <div className="mt-14 border-t border-white/10 pt-10 md:mt-20 md:pt-12">
          <div className="lg:mx-auto lg:max-w-[880px] xl:max-w-none">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="chip">Leadership team</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-silver/25">
                GENBRIK
              </span>
            </div>

            <div className="mt-6 grid items-stretch gap-5 xl:grid-cols-2">
              {/* Ayesha Adnan */}
              <article className="relative h-full overflow-hidden rounded-feature border border-white/10 bg-[#0B0B0E] md:min-h-[320px] lg:min-h-[380px] xl:min-h-[360px]">
                <div className="grid h-full md:grid-cols-[minmax(0,0.86fr)_1.14fr]">
                  <PortraitFrame
                    src="/images/ayesha-adnan.png?v=1"
                    alt="Ayesha Adnan, Head of AI & Technology at GENBRIK"
                    initials="AD"
                    label="AI & Technology"
                    objectPosition="top"
                    className="aspect-[4/5] border-b border-white/10 sm:aspect-[16/9] md:aspect-auto md:border-b-0 md:border-r"
                  />

                  <div className="flex min-w-0 flex-col justify-center p-5 sm:p-6 lg:p-7">
                    <p className="text-[10.5px] uppercase tracking-[0.2em] text-silver/30">
                      GENBRIK
                    </p>
                    <h3 className="mt-3 font-display text-[clamp(1.5rem,2.4vw,1.8rem)] font-medium leading-tight tracking-[-0.02em] text-platinum">
                      AYESHA ADNAN
                    </h3>
                    <p className="mt-1.5 text-[12.5px] text-silver/55">Head of AI &amp; Technology</p>

                    <div className="mt-5 h-px w-16 bg-[linear-gradient(90deg,rgba(232,233,237,0.5),transparent)]" />

                    <p className="mt-4 max-w-[42ch] text-[13px] leading-relaxed text-silver/45">
                      Responsible for AI innovation, intelligent systems, AI-powered software
                      solutions, automation and technology development.
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-silver/20">
                      <span aria-hidden className="h-px w-6 bg-silver/20" />
                      GENBRIK leadership
                    </span>
                  </div>
                </div>
              </article>

              {/* Abdullah Abbasi — text-led, with the monogram as the media panel. */}
              <article className="relative h-full overflow-hidden rounded-feature border border-white/10 bg-[#0B0B0E] md:min-h-[320px] lg:min-h-[380px] xl:min-h-[360px]">
                <div className="grid h-full md:grid-cols-[minmax(0,0.86fr)_1.14fr]">
                  <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden border-b border-white/10 sm:aspect-[16/9] md:aspect-auto md:border-b-0 md:border-r">
                    <div aria-hidden className="surface-void absolute inset-0" />
                    <div aria-hidden className="grid-field absolute inset-0 opacity-50" />
                    <div
                      aria-hidden
                      className="chrome-arc absolute -right-16 -top-16 h-56 w-56 opacity-30"
                    />
                    <div aria-hidden className="glow-orb absolute inset-10 opacity-30" />

                    <div
                      aria-hidden
                      className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-[rgba(11,11,14,0.6)] shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] md:h-36 md:w-36 xl:h-40 xl:w-40"
                    >
                      <span className="absolute inset-2 rounded-full border border-white/[0.06]" />
                      <span className="chrome-text font-display text-[38px] font-semibold tracking-[-0.08em] md:text-[42px] xl:text-[46px]">
                        AA
                      </span>
                    </div>

                    <span className="chip absolute left-4 top-4 sm:left-5 sm:top-5">Chairman</span>
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                      <p className="text-[10px] text-silver/40">GENBRIK</p>
                    </div>
                  </div>

                  <div className="flex min-w-0 flex-col justify-center p-5 sm:p-6 lg:p-7">
                    <p className="text-[10.5px] uppercase tracking-[0.2em] text-silver/30">
                      GENBRIK
                    </p>
                    <h3 className="mt-3 font-display text-[clamp(1.5rem,2.4vw,1.8rem)] font-medium leading-tight tracking-[-0.02em] text-platinum">
                      ABDULLAH ABBASI
                    </h3>
                    <p className="mt-1.5 text-[12.5px] text-silver/55">Chairman</p>

                    <div className="mt-5 h-px w-16 bg-[linear-gradient(90deg,rgba(232,233,237,0.5),transparent)]" />

                    <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-silver/20">
                      <span aria-hidden className="h-px w-6 bg-silver/20" />
                      GENBRIK leadership
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
