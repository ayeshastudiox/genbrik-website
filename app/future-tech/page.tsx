import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import { Atmosphere } from '@/components/atmosphere'
import { NodeField } from '@/components/node-field'
import { PageHero } from '@/components/page-hero'
import { Spotlight } from '@/components/spotlight'
import { Icon } from '@/components/icon'
import { Badge } from '@/components/ui/badge'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { chipsRoboticsServices, futureTechCategories } from '@/lib/content'
import type { IconName } from '@/lib/content'
import { cn } from '@/lib/utils'

export const metadata: Metadata = buildMetadata({
  title: 'AI & Future Tech',
  description:
    'GENBRIK AI & Future Tech builds AI systems, AI agents, intelligent automation, web applications, custom software, chips, robotics and AI surveillance — alongside AGI and emerging technology work.',
  path: '/future-tech',
})

const stack: Array<{ name: string; detail: string; icon: IconName }> = [
  { name: 'Generative AI', detail: 'Assistants · RAG · documents', icon: 'bot' },
  { name: 'AI agents', detail: 'Multi-step work, human review', icon: 'cpu' },
  { name: 'Intelligent automation', detail: 'Workflows · integrations', icon: 'file-search' },
  { name: 'Software & web', detail: 'Apps, commerce, dashboards', icon: 'layout-dashboard' },
]

const aiPillars = [
  {
    title: 'Generative AI',
    body: 'Custom AI software, LLM integrations, RAG and intelligent document processing built around a real workflow.',
    services: ['Custom AI software', 'LLM integrations', 'RAG systems', 'Document AI'],
  },
  {
    title: 'AI agents',
    body: 'Agents that carry a task through several steps and know when to hand back to a person, with logs and review points.',
    services: ['Custom agents', 'Multi-agent systems', 'Task execution', 'Research assistants'],
  },
  {
    title: 'Intelligent automation',
    body: 'The connective layer: workflows, integrations and business process automation across the tools you already run.',
    services: ['Workflow automation', 'Process automation', 'Integrations', 'Voice & chat'],
  },
]

function CapabilityStack() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div aria-hidden className="glow-orb absolute inset-6 opacity-70" />
      <div aria-hidden className="chrome-arc absolute -right-16 -top-20 h-64 w-64 opacity-40" />

      <div className="relative space-y-3">
        {stack.map((item, index) => (
          <div
            key={item.name}
            className={cn(
              'panel-glass group flex items-center gap-4 rounded-panel px-4 py-4 transition-transform duration-500 ease-out-expo hover:-translate-y-1',
              index === 1 && 'sm:ml-3',
              index === 2 && 'sm:ml-6',
              index === 3 && 'sm:ml-9',
            )}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
              <Icon name={item.icon} className="h-4 w-4 text-silver/80" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[13.5px] text-platinum/90">{item.name}</span>
              <span className="mt-0.5 block text-[11.5px] leading-snug text-silver/40 sm:truncate sm:text-[11px]">{item.detail}</span>
            </span>
            <span aria-hidden className="h-8 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          </div>
        ))}
      </div>

      <div className="relative mt-5 flex items-center justify-between px-1 text-[10.5px] text-silver/30 sm:text-[10px]">
        <span>AI-first engineering</span>
        <span>Scoped to handover</span>
      </div>
    </div>
  )
}

const capabilityChips = [
  'Generative AI',
  'AI agents',
  'Automation',
  'Software',
  'Robotics',
  'Chips',
  'AI Surveillance',
]

export default function FutureTechPage() {
  return (
    <>
      <PageHero
        sweep
        badge={<Badge>AI &amp; intelligent systems</Badge>}
        title={<>AI systems, agents and software built to run in production.</>}
        intro="AI is the core of this division. We build generative AI, agents and intelligent automation into real workflows — then the software, web platforms and infrastructure around them. Chips, robotics and AI surveillance extend that engineering into physical systems."
        actions={
          <>
            <ButtonLink href="/contact" size="lg" tone="dark">
              Request a consultation
            </ButtonLink>
            <ButtonLink href="/future-tech/ai-automation" size="lg" variant="secondary" tone="dark">
              Explore AI &amp; automation
            </ButtonLink>
          </>
        }
        meta={
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {capabilityChips.map((chip) => (
              <span key={chip} className="chip">
                {chip}
              </span>
            ))}
          </div>
        }
        visual={<CapabilityStack />}
      />

      {/* AI spotlight — the division's centre of gravity */}
      <Section tone="ink" border>
        <Atmosphere grid={false} />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="chip">
                <span aria-hidden className="dot bg-platinum/70" />
                AI at the core
              </span>
              <h2 className="mt-6 max-w-[16ch] font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-medium leading-[1.05] tracking-[-0.03em] text-platinum">
                AI is not a line item. It is how we build.
              </h2>
              <p className="mt-5 max-w-[42ch] text-[14px] leading-relaxed text-silver/50">
                Every engagement starts with the workflow and the decision it needs to improve.
                Models, agents and automation come after that — chosen for the job, not for the
                demo.
              </p>
              <ButtonLink href="/future-tech/ai-automation" tone="dark" className="mt-8">
                AI &amp; automation
              </ButtonLink>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:col-span-7">
              {aiPillars.map((pillar) => (
                <div key={pillar.title} className="panel-glass rounded-panel p-5">
                  <h3 className="font-display text-[16px] font-medium text-platinum">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[11.5px] leading-relaxed text-silver/45">{pillar.body}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3">
                    {pillar.services.map((service) => (
                      <li key={service} className="text-[10.5px] text-silver/35">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="void">
        <Atmosphere grid={false} glow={false} />
        <Container className="relative">
          <div className="relative overflow-hidden">
            <NodeField className="opacity-40" />
            <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-[54ch]">
                <h2 className="font-display text-h2 font-medium text-platinum">
                  Capabilities
                </h2>
                <p className="mt-4 text-[14px] leading-relaxed text-silver/50">
                  Eight service areas, each with a defined deliverable. Project-based engagements
                  end with a handover; retained engagements continue into support.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 text-[12.5px] text-silver/55 underline decoration-white/15 underline-offset-4 transition-colors hover:text-platinum"
              >
                Discuss a scope
              </Link>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10">
            {futureTechCategories.map((category) => (
              <Spotlight key={category.id} className="border-b border-white/10">
                <article id={category.id} className="group scroll-mt-28 py-10 md:py-12">
                  <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-2">
                        <h3 className="max-w-[20ch] font-display text-[clamp(1.45rem,2.2vw,1.85rem)] font-medium leading-[1.1] tracking-[-0.02em] text-platinum">
                          {category.name}
                        </h3>
                      </div>
                      <p className="mt-4 max-w-[46ch] text-[13.5px] leading-relaxed text-silver/45">
                        {category.description}
                      </p>
                      {category.href && (
                        <Link
                          href={category.href}
                          className="mt-6 inline-flex items-center gap-2 text-[12.5px] font-medium text-silver/80 transition-colors hover:text-platinum"
                        >
                          <span className="link-underline">{category.hrefLabel ?? 'Learn more'}</span>
                          <span aria-hidden className="dot bg-platinum/60" />
                        </Link>
                      )}
                    </div>

                    <div className="lg:col-span-7">
                      {category.id === 'chips-robotics-ai-surveillance' ? (
                        <div className="grid gap-3 sm:grid-cols-2">
                          {chipsRoboticsServices.map((service) => (
                            <article
                              key={service.id}
                              id={service.id}
                              className="panel-glass scroll-mt-28 rounded-panel p-5"
                            >
                              <div className="flex items-center justify-between gap-3">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
                                  <Icon
                                    name={service.icon}
                                    className="h-4 w-4 text-silver/80"
                                  />
                                </span>
                                <span className="text-[9px] uppercase tracking-[0.18em] text-silver/25">
                                  GENBRIK
                                </span>
                              </div>
                              <h4 className="mt-4 font-display text-[17px] font-medium leading-snug text-platinum">
                                {service.name}
                              </h4>
                              <p className="mt-2 text-[12px] leading-relaxed text-silver/45">
                                {service.description}
                              </p>
                              <Link
                                href="/contact"
                                className="mt-4 inline-flex min-h-9 items-center text-[11.5px] font-medium text-silver/70 transition-colors hover:text-platinum sm:min-h-0"
                              >
                                <span className="link-underline">Discuss this service</span>
                              </Link>
                            </article>
                          ))}
                        </div>
                      ) : (
                        <ul className="grid gap-x-10 sm:grid-cols-2">
                          {category.services.slice(0, 8).map((service) => (
                            <li
                              key={service}
                              className="flex items-center gap-3 border-b border-white/[0.06] py-2.5 text-[12.5px] leading-snug text-silver/55"
                            >
                              <span
                                aria-hidden
                                className="h-[3px] w-[3px] shrink-0 rotate-45 bg-silver/30"
                              />
                              {service}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </article>
              </Spotlight>
            ))}
          </div>
        </Container>
      </Section>

      <section className="relative overflow-hidden bg-ink py-20 text-silver md:py-28">
        <Atmosphere />
        <Container className="relative">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-[24ch] font-display text-[clamp(1.7rem,2.8vw,2.3rem)] font-medium leading-[1.06] tracking-[-0.03em] text-platinum">
                Bring us the process that keeps breaking.
              </h2>
              <p className="mt-3 max-w-[48ch] text-[13.5px] leading-relaxed text-silver/50">
                We will tell you whether it needs AI, software, a person, or all three.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/contact" tone="dark">
                Request a consultation
              </ButtonLink>
              <ButtonLink href="/future-tech/web-software" variant="secondary" tone="dark">
                Web &amp; software
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
