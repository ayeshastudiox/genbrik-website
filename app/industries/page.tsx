import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import { Atmosphere } from '@/components/atmosphere'
import { Icon } from '@/components/icon'
import { PageHero } from '@/components/page-hero'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { industries } from '@/lib/content'

export const metadata: Metadata = buildMetadata({
  title: 'Industries',
  description:
    'Industries where GENBRIK applies AI, robotics, chips and AI surveillance — manufacturing and industrial automation, security and surveillance, logistics, smart infrastructure, healthcare technology, semiconductors, research and technology companies.',
  path: '/industries',
})

const matrix = industries.slice(0, 6)

function CoveragePanel() {
  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      <div aria-hidden className="glow-orb absolute inset-8 opacity-50" />
      <div className="panel-glass relative rounded-panel p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-[10px] text-silver/35">
          <span>Technology coverage</span>
          <span>11 industries</span>
        </div>

        <ul>
          {matrix.map((industry) => (
            <li key={industry.id} className="border-b border-white/[0.06] py-2.5">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
                <span className="text-[11.5px] leading-snug text-silver/70">{industry.name}</span>
                <span className="flex flex-wrap justify-end gap-1">
                  {industry.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-1.5 py-0.5 text-[8.5px] text-silver/40"
                    >
                      {technology}
                    </span>
                  ))}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-3 flex items-center justify-between text-[10px] text-silver/25">
          <span>6 of 11 shown</span>
          <span>Applied technology</span>
        </div>
      </div>
    </div>
  )
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title={<>Where AI and robotics are applied.</>}
        intro="Industries where GENBRIK's AI, robotics, chips and intelligent surveillance work is applied — from the factory floor and logistics network to security, infrastructure and research."
        actions={
          <ButtonLink href="/contact" size="lg" tone="dark">
            Ask about your industry
          </ButtonLink>
        }
        meta={
          <p className="mt-8 max-w-[50ch] text-[11.5px] leading-relaxed text-silver/30">
            No case studies or client logos are shown here — none are confirmed yet.{' '}
            <span className="text-silver/20">
              [CONFIRM: approved client references and case studies]
            </span>
          </p>
        }
        visual={<CoveragePanel />}
      />

      <Section tone="paper">
        <Atmosphere tone="light" glow={false} />
        <Container className="relative">
          <div className="hidden grid-cols-12 gap-8 border-b border-hairline-light pb-3 text-[10px] text-slate-muted lg:grid">
            <span className="col-span-4">Industry</span>
            <span className="col-span-5">Where it applies</span>
            <span className="col-span-3 text-right">Technology focus</span>
          </div>

          <ul>
            {industries.map((industry) => (
              <li key={industry.id} className="border-b border-hairline-light">
                <div className="group grid grid-cols-1 gap-3 py-5 transition-colors hover:bg-white/70 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-3">
                  <div className="flex items-center gap-3 lg:col-span-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline-light bg-white transition-colors group-hover:border-slate/25">
                      <Icon name={industry.icon} className="h-3.5 w-3.5 text-slate-muted" />
                    </span>
                    <span className="font-display text-[15px] text-slate">{industry.name}</span>
                  </div>
                  <p className="max-w-[62ch] text-[12.5px] leading-relaxed text-slate-muted lg:col-span-5">
                    {industry.note}
                  </p>
                  <div className="flex flex-wrap gap-1.5 lg:col-span-3 lg:justify-end">
                    {industry.technologies.map((technology) => (
                      <span key={technology} className="chip chip-light">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="max-w-[56ch] text-[12.5px] leading-relaxed text-slate-muted">
              If your industry is not listed, the underlying work usually still applies. Ask and we
              will tell you honestly whether we have relevant experience.
            </p>
            <Link
              href="/contact"
              className="shrink-0 text-[12.5px] text-slate underline decoration-slate/25 underline-offset-4 transition-colors hover:decoration-slate/70"
            >
              Ask about your industry
            </Link>
          </div>
        </Container>
      </Section>

      <Section tone="ink" border>
        <Atmosphere grid={false} />
        <Container className="relative">
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/future-tech"
              className="group relative flex flex-col justify-between overflow-hidden rounded-feature border border-white/10 bg-[#0B0B0E] p-7 transition-transform duration-500 ease-out-expo hover:-translate-y-1 md:p-9"
            >
              <div aria-hidden className="grid-field absolute inset-0 opacity-40" />
              <div className="relative">
                <span className="chip">Build</span>
                <h2 className="mt-6 font-display text-[24px] font-medium text-platinum">
                  AI &amp; Technology
                </h2>
                <p className="mt-2 max-w-[42ch] text-[13px] leading-relaxed text-silver/45">
                  AI systems, agents, intelligent automation and software — applied across research,
                  technology, manufacturing and enterprise systems.
                </p>
              </div>
              <span className="relative mt-8 text-[12.5px] font-medium text-platinum">
                <span className="link-underline">Explore AI &amp; Technology</span>
              </span>
            </Link>

            <Link
              href="/future-tech#chips-robotics-ai-surveillance"
              className="group relative flex flex-col justify-between overflow-hidden rounded-feature border border-white/10 bg-[#0B0B0E] p-7 transition-transform duration-500 ease-out-expo hover:-translate-y-1 md:p-9"
            >
              <div aria-hidden className="grid-field absolute inset-0 opacity-40" />
              <div aria-hidden className="chrome-arc absolute -right-20 -top-20 h-56 w-56 opacity-25" />
              <div className="relative">
                <span className="chip">Apply</span>
                <h2 className="mt-6 max-w-[16ch] font-display text-[24px] font-medium leading-snug text-platinum">
                  Robotics, Chips &amp; Surveillance
                </h2>
                <p className="mt-2 max-w-[42ch] text-[13px] leading-relaxed text-silver/45">
                  Robots, robot chips, AI chips and intelligent monitoring — applied in industrial,
                  logistics, security and infrastructure environments.
                </p>
              </div>
              <span className="relative mt-8 text-[12.5px] font-medium text-platinum">
                <span className="link-underline">Explore robotics &amp; chips</span>
              </span>
            </Link>
          </div>
        </Container>
      </Section>

      <section className="relative overflow-hidden border-t border-white/10 bg-ink py-20 text-silver md:py-28">
        <Atmosphere />
        <Container className="relative">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-[26ch] font-display text-[clamp(1.7rem,2.8vw,2.3rem)] font-medium leading-[1.06] tracking-[-0.03em] text-platinum">
                Not sure where your work fits?
              </h2>
              <p className="mt-3 max-w-[48ch] text-[13.5px] leading-relaxed text-silver/50">
                Describe the problem rather than the service. We will point it at the right
                engineering team.
              </p>
            </div>
            <ButtonLink href="/contact" tone="dark">
              Request a consultation
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
