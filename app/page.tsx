import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import { Atmosphere } from '@/components/atmosphere'
import { FlagshipShowcase } from '@/components/flagship-showcase'
import { HeroCore } from '@/components/hero-core'
import { IndustryGrid } from '@/components/industry-grid'
import { Leadership } from '@/components/leadership'
import { Marquee } from '@/components/marquee'
import { MetalSweep } from '@/components/metal-sweep'
import { NodeField } from '@/components/node-field'
import { ProcessSteps } from '@/components/process-steps'
import { Spotlight } from '@/components/spotlight'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { MetalRule } from '@/components/ui/metal-rule'
import { Stagger, StaggerItem, FadeIn } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { processSteps, valueProps } from '@/lib/content'

export const metadata: Metadata = buildMetadata({
  title: 'GENBRIK — Technology we build. Operations we run.',
  absoluteTitle: true,
  description:
    'GENBRIK is an AI and technology company: AI & Future Tech builds generative AI, agents, intelligent automation, software and web platforms; BPO & Professional Services runs medical billing, DME, staffing and back-office operations.',
  path: '/',
})

const marqueeItems = [
  'AI & generative AI',
  'AI agents',
  'Web development',
  'Custom software',
  'Medical billing & RCM',
  'DME services',
  'Medicare & insurance support',
  'Healthcare staffing',
  'Auto insurance BPO',
  'Real estate BPO',
  'Finance & accounting',
  'E-commerce support',
]

const divisionServices = {
  futureTech: [
    'Generative AI & LLM systems',
    'AI agents & automation',
    'Software & web platforms',
    'Robotics, AGI & emerging tech',
  ],
  bpo: [
    'Medical billing & RCM',
    'DME & insurance support',
    'Healthcare staffing',
    'Back-office operations',
  ],
}

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero — chrome core, layered depth, one choreographed entrance.    */}
      {/* ---------------------------------------------------------------- */}
      <section data-glow className="relative overflow-hidden bg-ink text-silver">
        <Atmosphere perspective />
        <MetalSweep className="opacity-50" />

        <Container className="relative">
          <div className="grid grid-cols-12 items-center gap-x-0 gap-y-10 py-10 sm:gap-y-14 sm:py-14 md:py-20 lg:min-h-[calc(100svh_-_76px)] lg:gap-x-8 lg:py-16">
            <Stagger className="col-span-12 lg:col-span-6" delay={0.05} stagger={0.07}>
              <StaggerItem>
                <div className="flex items-center gap-2.5 text-[11.5px] text-silver/45">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-platinum" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-platinum" />
                  </span>
                  Two divisions. AI at the core.
                </div>
              </StaggerItem>

              <StaggerItem>
                <h1 className="mt-6 font-display text-hero font-semibold sm:mt-7">
                  <span className="block text-platinum">Technology we build.</span>
                  <span className="chrome-text mt-1 block">Operations we run.</span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.6] text-silver/60 sm:mt-7">
                  GENBRIK is an AI-first technology company. We build AI systems, agents and
                  software — then run the billing, claims and back-office operations around them.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                  <ButtonLink href="/future-tech" size="lg" tone="dark">
                    Explore AI &amp; Future Tech
                  </ButtonLink>
                  <ButtonLink href="/bpo" size="lg" variant="secondary" tone="dark">
                    Explore BPO &amp; Professional Services
                  </ButtonLink>
                </div>
              </StaggerItem>
            </Stagger>

            <Stagger className="col-span-12 lg:col-span-6" delay={0.18} stagger={0.08}>
              <StaggerItem>
                <HeroCore className="max-w-[340px] sm:max-w-[540px] lg:ml-auto lg:max-w-[600px]" />
              </StaggerItem>
            </Stagger>
          </div>
        </Container>

        <MetalRule tone="dark" className="relative" />
      </section>

      <Marquee items={marqueeItems} />

      {/* ---------------------------------------------------------------- */}
      {/* Divisions — dark chrome vs platinum ledger.                       */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="void">
        <Atmosphere grid={false} glow={false} />
        <Container className="relative">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em] text-platinum">
                Two divisions.
                <br />
                Different work, same company.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-[42ch] text-[14px] leading-relaxed text-silver/50">
                Staffed, priced and run separately. Work with either one on its own, or start with
                one and add the second when the work calls for it.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-12">
            {/* AI & Future Tech — chrome and mesh */}
            <div className="lg:col-span-7">
              <Spotlight className="h-full">
                <article className="fragment relative flex h-full min-h-0 flex-col overflow-hidden rounded-feature p-7 sm:min-h-[540px] md:p-9">
                  <NodeField className="opacity-40" />
                  <div
                    aria-hidden
                    className="chrome-arc absolute -right-24 -top-24 h-72 w-72 opacity-40"
                  />
                  <div className="relative flex h-full flex-col">
                    <div className="flex flex-wrap items-center justify-between gap-4 gap-y-1.5">
                      <span className="chip">
                        <span className="dot bg-platinum/70" />
                        AI-first
                      </span>
                      <span className="text-[10.5px] text-silver/30">AI &amp; Future Tech</span>
                    </div>

                    <h3 className="mt-8 max-w-[18ch] font-display text-[clamp(1.7rem,2.6vw,2.15rem)] font-medium leading-[1.06] tracking-[-0.025em] text-platinum sm:mt-10">
                      AI systems, agents and automation, engineered to run.
                    </h3>
                    <p className="mt-4 max-w-[44ch] text-[13.5px] leading-relaxed text-silver/50">
                      Generative AI, agents, automation and the software around them — scoped as
                      projects with a defined end state and a documented handover.
                    </p>

                    <ul className="mt-7 grid gap-x-8 border-t border-white/10 pt-2 sm:mt-8 sm:grid-cols-2">
                      {divisionServices.futureTech.map((service) => (
                        <li
                          key={service}
                          className="flex items-center justify-between gap-3 border-b border-white/[0.06] py-3 text-[12.5px] text-silver/65"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/future-tech"
                      className="mt-auto inline-flex items-center gap-2 pt-7 text-[12.5px] font-medium text-platinum sm:pt-8"
                    >
                      <span className="link-underline">Explore AI &amp; Future Tech</span>
                    </Link>
                  </div>
                </article>
              </Spotlight>
            </div>

            {/* BPO — platinum ledger */}
            <div className="lg:col-span-5 lg:mt-14">
              <Spotlight className="h-full" tone="light">
                <article className="surface-paper relative flex h-full min-h-0 flex-col overflow-hidden rounded-feature border border-black/10 p-7 text-slate sm:min-h-[480px] md:p-9">
                  <div aria-hidden className="grid-field-light absolute inset-0 opacity-70" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex flex-wrap items-center justify-between gap-4 gap-y-1.5">
                      <span className="chip chip-light">
                        <span className="dot bg-slate/40" />
                        Run
                      </span>
                      <span className="text-[10.5px] text-slate-muted/60">
                        BPO &amp; Professional Services
                      </span>
                    </div>

                    <h3 className="mt-8 max-w-[18ch] font-display text-[clamp(1.6rem,2.4vw,2rem)] font-medium leading-[1.08] tracking-[-0.02em] text-slate sm:mt-10">
                      The back office, run to a documented process.
                    </h3>
                    <p className="mt-4 max-w-[42ch] text-[13.5px] leading-relaxed text-slate-muted">
                      Billing, claims, staffing and administrative operations — supervised at the
                      start and reviewed monthly against agreed measures.
                    </p>

                    <ul className="mt-7 border-t border-black/10 sm:mt-8">
                      {divisionServices.bpo.map((service) => (
                        <li
                          key={service}
                          className="flex items-center justify-between gap-3 border-b border-black/10 py-3 text-[12.5px] text-slate"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/bpo"
                      className="mt-auto inline-flex items-center gap-2 pt-7 text-[12.5px] font-medium text-slate sm:pt-8"
                    >
                      <span className="link-underline">Explore BPO &amp; Professional Services</span>
                    </Link>
                  </div>
                </article>
              </Spotlight>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Flagship services — interactive index + preview.                  */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="paper">
        <Atmosphere tone="light" />
        <Container className="relative">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-[56ch]">
              <h2 className="font-display text-h2 font-medium text-slate">
                AI first. Everything else built around it.
              </h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-slate-muted">
                Generative AI, agents and automation lead the practice. Software and operations
                follow the same standard: a defined deliverable, a written scope and a price agreed
                before work starts.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 text-[12.5px] text-slate underline decoration-slate/25 underline-offset-4 transition-colors hover:decoration-slate/70"
            >
              Ask about a service not listed
            </Link>
          </div>

          <div className="mt-10 sm:mt-12">
            <FlagshipShowcase />
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Why GENBRIK — editorial dark spread.                              */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="ink" border>
        <Atmosphere grid={false} />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <h2 className="max-w-[16ch] font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-medium leading-[1.05] tracking-[-0.03em] text-platinum">
                  Why teams choose GENBRIK
                </h2>
                <p className="mt-5 max-w-[38ch] text-[14px] leading-relaxed text-silver/50">
                  Four things that hold across both divisions, whether the work is a build or a
                  managed process.
                </p>

                <div className="relative mt-10 hidden h-[220px] overflow-hidden rounded-panel border border-white/10 lg:block">
                  <div aria-hidden className="surface-void absolute inset-0" />
                  <div aria-hidden className="chrome-arc absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 animate-spin-reverse opacity-30" />
                  <div aria-hidden className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(232,233,237,0.12),transparent_70%)]" />
                  <div className="relative flex h-full flex-col justify-between p-5">
                    <span className="text-[10.5px] text-silver/35">One partner</span>
                    <div className="space-y-2">
                      <p className="font-display text-[15px] text-platinum">Technology + operations</p>
                      <p className="max-w-[30ch] text-[11.5px] leading-relaxed text-silver/40">
                        The handoff between the system and the team running it stays internal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="border-t border-white/10">
                {valueProps.map((prop) => (
                  <div key={prop.title} className="border-b border-white/10 py-7">
                    <h3 className="font-display text-[19px] font-medium leading-snug text-platinum">
                      {prop.title}
                    </h3>
                    <p className="mt-2.5 max-w-[56ch] text-[13.5px] leading-relaxed text-silver/50">
                      {prop.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Industries — dense index.                                         */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="paper" border>
        <Atmosphere tone="light" glow={false} />
        <Container className="relative">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-h2 font-medium text-slate">Industries we work in</h2>
              <p className="mt-4 max-w-[52ch] text-[14.5px] leading-relaxed text-slate-muted">
                Where the two divisions are usually used together, and where one is enough.
              </p>
            </div>
            <Link
              href="/industries"
              className="shrink-0 text-[12.5px] text-slate underline decoration-slate/25 underline-offset-4 transition-colors hover:decoration-slate/70"
            >
              See the full industry map
            </Link>
          </div>
          <IndustryGrid className="mt-10" />
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* How we work — instrument panel.                                   */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="paper" border>
        <Atmosphere tone="light" glow={false} />
        <Container className="relative">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-[52ch]">
              <h2 className="font-display text-h2 font-medium text-slate">How we work</h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-slate-muted">
                The same four steps whether we are building software or taking over a process.
              </p>
            </div>
          </div>

          <FadeIn className="mt-12">
            <div className="relative overflow-hidden rounded-shell border border-white/10 bg-[#0B0B0E] p-6 sm:p-7 md:p-10">
              <div aria-hidden className="grid-field absolute inset-0 opacity-60" />
              <div
                aria-hidden
                className="chrome-arc absolute -right-32 -bottom-32 h-80 w-80 opacity-30"
              />
              <div className="relative">
                <ProcessSteps steps={processSteps} tone="dark" />
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Leadership />

      {/* ---------------------------------------------------------------- */}
      {/* Closing CTA.                                                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden border-t border-white/10 bg-ink py-20 text-silver md:py-28">
        <Atmosphere />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="max-w-[22ch] font-display text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em] text-platinum">
                Tell us what you need to build, or run.
              </h2>
              <p className="mt-4 max-w-[48ch] text-[14px] leading-relaxed text-silver/50">
                A short call is usually enough to know whether we are the right partner. If we are
                not, we will say so.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-4 lg:justify-end">
              <ButtonLink href="/contact" size="lg" tone="dark">
                Request a consultation
              </ButtonLink>
              <ButtonLink href="mailto:info@genbrik.com" size="lg" variant="secondary" tone="dark">
                info@genbrik.com
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
