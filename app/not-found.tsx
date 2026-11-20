import Link from 'next/link'
import type { Metadata } from 'next'
import { Atmosphere } from '@/components/atmosphere'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you were looking for does not exist on the GENBRIK website.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-silver md:py-32">
      <Atmosphere />
      <div
        aria-hidden
        className="chrome-arc pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] opacity-20"
      />

      <Container className="relative">
        <div className="flex items-center gap-2 text-[11px] text-silver/35">
          <span aria-hidden className="dot bg-silver/40" />
          404
        </div>

        <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.2rem,4.4vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.034em] text-platinum">
          That page is not here.
        </h1>
        <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-silver/55">
          The link may be out of date. Both technology areas are one click away, or you can tell us
          what you were looking for.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="/" size="lg" tone="dark">
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="secondary" tone="dark">
            Contact us
          </ButtonLink>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-[12.5px] text-silver/50">
          <Link href="/future-tech" className="transition-colors hover:text-platinum">
            AI &amp; Technology
          </Link>
          <Link
            href="/future-tech#chips-robotics-ai-surveillance"
            className="transition-colors hover:text-platinum"
          >
            Robotics &amp; Chips
          </Link>
          <Link href="/industries" className="transition-colors hover:text-platinum">
            Industries
          </Link>
          <Link href="/about" className="transition-colors hover:text-platinum">
            About
          </Link>
        </div>
      </Container>
    </section>
  )
}
