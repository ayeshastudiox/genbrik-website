import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import { Atmosphere } from '@/components/atmosphere'
import { Leadership } from '@/components/leadership'
import { PageHero } from '@/components/page-hero'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { PendingNote } from '@/components/ui/placeholder'
import { Section } from '@/components/ui/section'
import { companyFacts, principles } from '@/lib/content'

export const metadata: Metadata = buildMetadata({
  title: 'About GENBRIK',
  description:
    'GENBRIK is an AI and technology company with two divisions: AI & Future Tech (AI, automation, software, web) and BPO & Professional Services (medical billing, DME, insurance support, staffing, back office).',
  path: '/about',
})

function StructureDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      <div aria-hidden className="glow-orb absolute inset-8 opacity-50" />
      <div aria-hidden className="chrome-arc absolute -right-14 -top-16 h-56 w-56 opacity-30" />

      <div className="panel-glass relative rounded-panel p-5">
        <div className="flex items-center justify-between text-[10px] text-silver/35">
          <span>Structure</span>
          <span>GENBRIK</span>
        </div>

        <div className="mt-4 space-y-2">
          <div className="rounded-panel border border-white/10 bg-white/[0.035] p-4">
            <div className="flex flex-wrap items-center justify-between gap-4 gap-y-1.5">
              <span className="text-[13px] text-platinum">AI &amp; Future Tech</span>
              <span className="chip">AI-first</span>
            </div>
            <p className="mt-2 text-[10.5px] text-silver/40">
              AI · agents · automation · software · web
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 py-1">
            <span aria-hidden className="h-5 w-px bg-white/15" />
            <span className="text-[10px] text-silver/25 sm:text-[9.5px]">and</span>
            <span aria-hidden className="h-5 w-px bg-white/15" />
          </div>

          <div className="rounded-panel border border-white/10 bg-white/[0.035] p-4">
            <div className="flex flex-wrap items-center justify-between gap-4 gap-y-1.5">
              <span className="text-[13px] text-platinum">BPO &amp; Professional Services</span>
              <span className="chip">Run</span>
            </div>
            <p className="mt-2 text-[10.5px] text-silver/40">
              Billing · claims · staffing · back office
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] text-silver/30">
          <span>Two divisions</span>
          <span>One company</span>
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={
          <>
            One company,
            <br />
            two disciplines.
          </>
        }
        intro="GENBRIK is an AI and technology company that also runs operations. AI & Future Tech builds AI systems, automation, software and web platforms; BPO & Professional Services runs billing, staffing and back-office work."
        actions={
          <>
            <ButtonLink href="/future-tech" size="lg" tone="dark">
              Explore AI &amp; Future Tech
            </ButtonLink>
            <ButtonLink href="/bpo" size="lg" variant="secondary" tone="dark">
              Explore BPO
            </ButtonLink>
          </>
        }
        visual={<StructureDiagram />}
      />

      <Section tone="paper">
        <Atmosphere tone="light" glow={false} />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <h2 className="font-display text-h2 font-medium text-slate">The two divisions</h2>
              <p className="mt-4 max-w-[36ch] text-[14px] leading-relaxed text-slate-muted">
                GENBRIK exists around a practical observation: the same client often needs a system
                built and the operation around it run. Most suppliers do one. We organised into two
                divisions so either can be bought on its own, and both report to the same place.
              </p>
            </div>

            <div className="grid gap-5 lg:col-span-8 lg:grid-cols-2">
              <article className="panel-light flex flex-col rounded-panel p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[20px] font-medium text-slate">
                    AI &amp; Future Tech
                  </h3>
                  <span className="chip chip-light">AI-first</span>
                </div>
                <p className="mt-4 text-[13.5px] leading-relaxed text-slate-muted">
                  This division designs and builds AI systems, agents, intelligent automation,
                  software, web applications and internal tools. Work is scoped as a project with a
                  defined end state, then supported afterwards.
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-muted/80">
                  Robotics, AGI and emerging technologies are part of the same engineering practice —
                  presented alongside the rest of the technology services.
                </p>
                <Link
                  href="/future-tech"
                  className="mt-auto pt-6 text-[12px] font-medium text-slate underline decoration-slate/25 underline-offset-4"
                >
                  Explore AI &amp; Future Tech
                </Link>
              </article>

              <article className="surface-paper flex flex-col rounded-panel border border-black/10 p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <h3 className="max-w-[16ch] font-display text-[20px] font-medium leading-snug text-slate">
                    BPO &amp; Professional Services
                  </h3>
                  <span className="chip chip-light">Run</span>
                </div>
                <p className="mt-4 text-[13.5px] leading-relaxed text-slate-muted">
                  This division runs processes: medical billing and revenue cycle, DME services,
                  insurance support, healthcare staffing and back-office operations, with a focus
                  on U.S. healthcare and insurance-adjacent work.
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-muted/80">
                  Engagements are documented, supervised at the start and reviewed monthly against
                  measures agreed at kickoff.
                </p>
                <Link
                  href="/bpo"
                  className="mt-auto pt-6 text-[12px] font-medium text-slate underline decoration-slate/25 underline-offset-4"
                >
                  Explore BPO &amp; Professional Services
                </Link>
              </article>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ink" border>
        <Atmosphere grid={false} />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-h2 font-medium text-platinum">
                How we work with clients
              </h2>
              <p className="mt-4 max-w-[34ch] text-[13.5px] leading-relaxed text-silver/45">
                Four working rules that apply to a two-week website and to a multi-year billing
                engagement alike.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-px overflow-hidden rounded-panel border border-white/10 bg-white/10 sm:grid-cols-2">
                {principles.map((principle) => (
                  <div key={principle.title} className="bg-[#0E0E11] p-5 md:p-6">
                    <h3 className="font-display text-[16px] font-medium leading-snug text-platinum">
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
        </Container>
      </Section>

      <Section tone="paper" border>
        <Atmosphere tone="light" glow={false} />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <h2 className="font-display text-h2 font-medium text-slate">Company details</h2>
              <p className="mt-4 max-w-[42ch] text-[13.5px] leading-relaxed text-slate-muted">
                We publish company facts only once they are confirmed. Until then these fields stay
                as placeholders rather than plausible-sounding guesses.
              </p>

              <PendingNote title="Why this is empty" className="mt-8">
                Legal registration, founding date and headcount are not established in the site
                specification. [CONFIRM: company legal and registration details]
              </PendingNote>
            </div>

            <div className="lg:col-span-7">
              <dl className="border-t border-hairline-light">
                {companyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-1 gap-y-1 border-b border-hairline-light py-3.5 sm:grid-cols-12 sm:gap-x-4 sm:gap-y-4"
                  >
                    <dt className="text-[10.5px] leading-relaxed text-slate-muted sm:col-span-4">
                      {fact.label}
                    </dt>
                    <dd className="text-[12.5px] leading-relaxed text-slate sm:col-span-8">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10">
                <h3 className="font-display text-[20px] font-medium text-slate">Leadership</h3>
                <p className="mt-3 max-w-[58ch] text-[13.5px] leading-relaxed text-slate-muted">
                  GENBRIK is led by Mr. Akash Gill, Chief Executive Officer, across both divisions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Leadership />

      <section className="relative overflow-hidden bg-ink py-20 text-silver md:py-28">
        <Atmosphere />
        <Container className="relative">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-[24ch] font-display text-[clamp(1.7rem,2.8vw,2.3rem)] font-medium leading-[1.06] tracking-[-0.03em] text-platinum">
                If either division sounds relevant, start there.
              </h2>
              <p className="mt-3 max-w-[48ch] text-[13.5px] leading-relaxed text-silver/50">
                One conversation is usually enough to place the work correctly.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/contact" tone="dark">
                Request a consultation
              </ButtonLink>
              <ButtonLink href="/industries" variant="secondary" tone="dark">
                See industries
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
