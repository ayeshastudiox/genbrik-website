import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import { AgentGraph } from '@/components/agent-graph'
import { Atmosphere } from '@/components/atmosphere'
import { NodeField } from '@/components/node-field'
import { PageHero } from '@/components/page-hero'
import { Badge } from '@/components/ui/badge'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Placeholder } from '@/components/ui/placeholder'
import { Section } from '@/components/ui/section'
import { aiBuildPrinciples, aiUseCases } from '@/lib/content'

export const metadata: Metadata = buildMetadata({
  title: 'AI & Automation',
  description:
    'Custom AI agents, retrieval-augmented generation, document intelligence, workflow automation, voice assistants and enterprise AI integration — scoped around one workflow at a time.',
  path: '/future-tech/ai-automation',
})

const consoleRows = [
  { label: 'Intake', detail: 'email · attachment', width: '86%' },
  { label: 'Retrieve', detail: 'policy library', width: '68%' },
  { label: 'Reason', detail: 'model + rules', width: '54%' },
  { label: 'Human review', detail: 'approve or edit', width: '32%' },
]

function AgentConsole() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <div aria-hidden className="glow-orb absolute inset-4 opacity-60" />
      <div aria-hidden className="chrome-arc absolute -right-14 -top-16 h-52 w-52 opacity-30" />

      <div className="panel-glass relative overflow-hidden rounded-panel">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
          <div className="flex items-center gap-2 text-[11px] text-silver/50">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-platinum" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-platinum" />
            </span>
            Document review
          </div>
          <span className="text-[10px] text-silver/30">Illustrative</span>
        </div>

        <div className="space-y-4 px-5 py-5">
          {consoleRows.map((row, index) => (
            <div key={row.label}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[12px] text-silver/80">{row.label}</span>
                <span className="text-[10px] text-silver/35">{row.detail}</span>
              </div>
              <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-white/[0.07]">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,rgba(232,233,237,0.85),rgba(232,233,237,0.15))]"
                  style={{ width: row.width, transitionDelay: `${index * 80}ms` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-[10px] text-silver/30">
          <span>Example workflow</span>
          <span>Not a live demo</span>
        </div>
      </div>
    </div>
  )
}

export default function AiAutomationPage() {
  return (
    <>
      <PageHero
        badge={<Badge>Deliverable service</Badge>}
        title={<>AI that does a job, not a demo.</>}
        intro="Generative AI, agents and document systems scoped around one workflow at a time — with the evaluation, review points and logging that make them usable in operations."
        actions={
          <>
            <ButtonLink href="/contact" size="lg" tone="dark">
              Request a consultation
            </ButtonLink>
            <ButtonLink href="/future-tech/web-software" size="lg" variant="secondary" tone="dark">
              Web &amp; software
            </ButtonLink>
          </>
        }
        meta={
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {['Agents', 'RAG', 'Document AI', 'Automation', 'Voice'].map((chip) => (
              <span key={chip} className="chip">
                {chip}
              </span>
            ))}
          </div>
        }
        visual={<AgentConsole />}
      />

      <Section tone="void">
        <Atmosphere grid={false} glow={false} />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-h2 font-medium text-platinum">
                What an agent engagement looks like
              </h2>
              <p className="mt-4 max-w-[42ch] text-[13.5px] leading-relaxed text-silver/55">
                Most of the work is deciding what the agent may do, where it must ask for a person,
                and how a reviewer can see exactly what happened.
              </p>
              <p className="mt-4 max-w-[42ch] text-[12.5px] leading-relaxed text-silver/45">
                We start with a written process map and a test set of real cases. The agent is
                measured against that set before it touches live work.
              </p>
            </div>
            <div className="lg:col-span-8">
              <AgentGraph />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ink" border>
        <Atmosphere grid={false} />
        <Container className="relative">
          <div className="relative overflow-hidden">
            <NodeField className="opacity-35" />
            <div className="relative max-w-[56ch]">
              <h2 className="font-display text-h2 font-medium text-platinum">What we build</h2>
              <p className="mt-4 text-[14px] leading-relaxed text-silver/50">
                Five use cases, each scoped as its own engagement. Every one starts with the process,
                not with a model.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10">
            {aiUseCases.map((useCase) => (
              <article key={useCase.id} id={useCase.id} className="scroll-mt-28 border-b border-white/10 py-10 md:py-12">
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-4">
                    <h3 className="max-w-[16ch] font-display text-[clamp(1.45rem,2.2vw,1.8rem)] font-medium leading-[1.1] tracking-[-0.02em] text-platinum">
                      {useCase.title}
                    </h3>
                    <div aria-hidden className="mt-6 hidden h-px w-16 bg-gradient-to-r from-white/30 to-transparent lg:block" />
                  </div>

                  <div className="lg:col-span-7 lg:col-start-6">
                    <p className="max-w-[62ch] text-[14.5px] leading-relaxed text-silver/60">
                      {useCase.description}
                    </p>
                    <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
                      {useCase.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 border-t border-white/[0.07] py-2.5 text-[12.5px] leading-relaxed text-silver/45"
                        >
                          <span aria-hidden className="mt-[0.55em] h-[3px] w-[3px] shrink-0 rotate-45 bg-silver/35" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <ButtonLink
                      href="/contact"
                      variant="secondary"
                      tone="dark"
                      size="sm"
                      className="mt-7"
                    >
                      Request a Consultation
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="dim" border>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-h2 font-medium text-platinum">How we build AI systems</h2>
              <p className="mt-4 max-w-[38ch] text-[13.5px] leading-relaxed text-silver/45">
                The same four checks on every engagement, whether it is a two-week extraction tool or
                a multi-agent workflow.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-px overflow-hidden rounded-panel border border-white/10 bg-white/10 sm:grid-cols-2">
                {aiBuildPrinciples.map((principle) => (
                  <div key={principle.title} className="bg-[#0B0B0E] p-5 md:p-6">
                    <h3 className="font-display text-[16px] font-medium text-platinum">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-silver/45">
                      {principle.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 rounded-panel border border-white/[0.08] bg-ink/60 p-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-[72ch]">
              <h3 className="font-display text-[15px] font-medium text-platinum">Data and compliance</h3>
              <p className="mt-2 text-[12px] leading-relaxed text-silver/35">
                Data handling is agreed per engagement, in writing, before any client data is
                processed. We do not claim certifications we have not been audited for:{' '}
                <Placeholder>
                  [CONFIRM: data-processing terms, retention periods and compliance certifications]
                </Placeholder>
                .
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 text-[12px] text-silver/50 underline decoration-white/15 underline-offset-4 hover:text-platinum"
            >
              Ask a question
            </Link>
          </div>
        </Container>
      </Section>

      <section className="relative overflow-hidden bg-ink py-20 text-silver md:py-28">
        <Atmosphere />
        <Container className="relative">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-[26ch] font-display text-[clamp(1.7rem,2.8vw,2.3rem)] font-medium leading-[1.06] tracking-[-0.03em] text-platinum">
                Start with the workflow you would most like to stop doing manually.
              </h2>
              <p className="mt-3 max-w-[52ch] text-[13.5px] leading-relaxed text-silver/50">
                We will map it, cost it and tell you if a model is the wrong tool.
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
