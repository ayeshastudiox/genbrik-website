'use client'

import { useEffect, useRef, useState } from 'react'
import { Atmosphere } from '@/components/atmosphere'
import { Container } from '@/components/ui/container'

/**
 * Leadership section (client only so the portrait can fall back gracefully).
 * The photograph is used as supplied at /public/images/ceo-akash-gill.jpg.
 * No biography, qualifications or achievements are invented.
 */
export function Leadership() {
  const [failed, setFailed] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth === 0) setFailed(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-ink py-20 text-silver md:py-28">
      <Atmosphere grid={false} />
      <div
        aria-hidden
        className="chrome-arc pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] opacity-15"
      />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-feature border border-white/10 bg-[#0B0B0E]">
              {failed ? (
                <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 bg-[radial-gradient(120%_100%_at_50%_0%,#17181c,#070708)]">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[22px] text-silver/40">
                    AG
                  </span>
                  <span className="text-[10px] text-silver/25">[CONFIRM: portrait file]</span>
                </div>
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  ref={imgRef}
                  src="/images/ceo-akash-gill.jpg?v=1"
                  alt="Mr. Akash Gill, Chief Executive Officer of GENBRIK"
                  onError={() => setFailed(true)}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              )}

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(8,8,10,0.88))]"
              />
              <span className="chip absolute left-5 top-5">Leadership</span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] text-silver/40">GENBRIK</p>
              </div>
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
      </Container>
    </section>
  )
}
