import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import { Atmosphere } from '@/components/atmosphere'
import { OpsDashboard } from '@/components/ops-dashboard'
import type { OpsVariant } from '@/components/ops-dashboard'
import { PageHero } from '@/components/page-hero'
import { ProcessSteps } from '@/components/process-steps'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Placeholder } from '@/components/ui/placeholder'
import { Section } from '@/components/ui/section'
import { bpoCategories } from '@/lib/content'

export const metadata: Metadata = buildMetadata({
  title: 'BPO & Professional Services',
  description:
    'GENBRIK BPO & Professional Services runs medical billing and RCM, DME services, Medicare and insurance support, healthcare staffing, auto insurance, real estate, finance, e-commerce and back-office operations.',
  path: '/bpo',
})

const ledgerRows = [
  { name: 'Medical billing & RCM', detail: 'Coding → posting' },
  { name: 'DME services', detail: 'Intake → resupply' },
  { name: 'Medicare & insurance', detail: 'Auths → benefits' },
  { name: 'Healthcare staffing', detail: 'Sourcing → onboarding' },
]

const opsViews: Record<string, OpsVariant | undefined> = {
  'medical-billing': 'billing',
  dme: 'dme',
  'medicare-insurance': 'insurance',
  'healthcare-staffing': 'staffing',
  'auto-insurance': 'auto',
  'finance-accounting': 'finance',
}

const engagementSteps = [
  {
    title: 'Process review',
    body: 'We look at volumes, systems, turnaround expectations and where the current process actually breaks.',
  },
  {
    title: 'Supervised pilot',
    body: 'A small team runs the work alongside yours, against written procedures, before volume moves across.',
  },
  {
    title: 'Steady state',
    body: 'Volume moves over with a named owner and a monthly review against the measures agreed at kickoff.',
  },
]

function ServiceLedger() {
  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      <div aria-hidden className="glow-orb absolute inset-8 opacity-30" />
      {/* Stacked sheets: the BPO material metaphor — paper, filed. */}
      <div
        aria-hidden
        className="absolute -left-1.5 -top-1.5 h-full w-full rounded-panel border border-black/[0.06] bg-white/50 sm:-left-3 sm:-top-3"
      />
      <div
        aria-hidden
        className="absolute left-0 top-0 h-full w-full rounded-panel border border-black/[0.06] bg-white/75 sm:-left-1.5 sm:-top-1.5"
      />
      <div className="panel-light relative overflow-hidden rounded-panel">
        <div className="flex items-center justify-between border-b border-hairline-light px-5 py-3">
          <span className="text-[10.5px] text-slate-muted">Service ledger</span>
          <span className="text-[10px] text-slate-muted/75">Healthcare &amp; insurance</span>
        </div>

        {ledgerRows.map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between gap-4 border-b border-hairline-light px-5 py-3.5"
          >
            <span className="text-[12px] text-slate">{row.name}</span>
            <span className="text-[10px] text-slate-muted/80">{row.detail}</span>
          </div>
        ))}

        <div className="flex items-center justify-between bg-paper px-5 py-3 text-[10px] text-slate-muted/60">
          <span>Plus six more categories</span>
          <span aria-hidden className="dot bg-slate/25" />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between px-1 text-[10px] text-slate-muted/75">
        <span>Written procedures</span>
        <span>Monthly review</span>
      </div>
    </div>
  )
}

export default function BpoPage() {
  return (
    <>
      <PageHero
        tone="light"
        title={<>The back office, run to a documented process.</>}
        intro="GENBRIK BPO & Professional Services runs billing, claims, staffing and administrative operations for healthcare, insurance, real estate and e-commerce teams."
        actions={
          <>
            <ButtonLink href="/contact" size="lg" tone="light">
              Request a consultation
            </ButtonLink>
            <ButtonLink href="/bpo/healthcare" size="lg" variant="secondary" tone="light">
              Healthcare services
            </ButtonLink>
          </>
        }
        meta={
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {['Billing & RCM', 'DME', 'Insurance', 'Staffing', 'Back office'].map((chip) => (
              <span key={chip} className="chip chip-light">
                {chip}
              </span>
            ))}
          </div>
        }
        visual={<ServiceLedger />}
      />

      <Section tone="paper">
        <Atmosphere tone="light" glow={false} />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-h2 font-medium text-slate">How an engagement starts</h2>
              <p className="mt-4 max-w-[36ch] text-[14px] leading-relaxed text-slate-muted">
                Process work is judged on accuracy and turnaround, not on activity. We move volume
                only after the pilot is measured.
              </p>
            </div>

            <div className="lg:col-span-8">
              <ProcessSteps steps={engagementSteps} tone="light" columns={3} />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" border>
        <Atmosphere tone="light" glow={false} />
        <Container className="relative">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-[58ch]">
              <h2 className="font-display text-h2 font-medium text-slate">Services</h2>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-muted">
                Ten categories. The four healthcare services have a dedicated deep dive; the others
                are described in full here.
              </p>
            </div>
            <Link
              href="/bpo/healthcare"
              className="shrink-0 text-[12.5px] text-slate underline decoration-slate/25 underline-offset-4 transition-colors hover:decoration-slate/70"
            >
              Healthcare deep dive
            </Link>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-28 border-t border-hairline-light pt-5">
                <p className="text-[10.5px] text-slate-muted/60">On this page</p>
                <ul className="mt-4 space-y-2.5">
                  {bpoCategories.map((category) => (
                    <li key={category.id}>
                      <a
                        href={`#${category.id}`}
                        className="text-[12px] leading-snug text-slate-muted transition-colors hover:text-slate"
                      >
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-9">
              {bpoCategories.map((category, index) => {
                const ops = opsViews[category.id]

                return (
                  <section
                    key={category.id}
                    id={category.id}
                    className={`scroll-mt-28 border-t border-hairline-light py-9 ${
                      index === 0 ? 'lg:border-t-0 lg:pt-0' : ''
                    }`}
                  >
                    <div className={ops ? 'grid gap-8 lg:grid-cols-12' : ''}>
                      <div className={ops ? 'lg:col-span-8' : ''}>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                          <h3 className="max-w-[34ch] font-display text-[clamp(1.35rem,2.1vw,1.7rem)] font-medium leading-[1.12] tracking-[-0.02em] text-slate">
                            {category.name}
                          </h3>
                          {category.href && (
                            <Link
                              href={category.href}
                              className="shrink-0 text-[12px] font-medium text-slate underline decoration-slate/25 underline-offset-4 transition-colors hover:decoration-slate/70"
                            >
                              {category.hrefLabel ?? 'See full details'}
                            </Link>
                          )}
                        </div>

                        <p className="mt-3 max-w-[66ch] text-[13.5px] leading-relaxed text-slate-muted">
                          {category.description}
                        </p>

                        <ul className="mt-5 grid gap-x-8 sm:grid-cols-2">
                          {category.services.map((service) => (
                            <li
                              key={service}
                              className="flex gap-3 border-b border-hairline-light py-2.5 text-[12.5px] leading-snug text-slate"
                            >
                              <span
                                aria-hidden
                                className="mt-[0.55em] h-[3px] w-[3px] shrink-0 rotate-45 bg-slate-muted/40"
                              />
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>

                        {category.id === 'final-expense' && (
                          <div className="panel-light mt-6 rounded-panel p-5 md:p-6">
                            <div className="flex items-center gap-2">
                              <span className="chip chip-light">
                                <span className="dot bg-slate/40" />
                                Scope
                              </span>
                            </div>
                            <h4 className="mt-4 font-display text-[15px] font-medium text-slate">
                              What this service is, and what it is not
                            </h4>
                            <p className="mt-2 max-w-[72ch] text-[12.5px] leading-relaxed text-slate-muted">
                              GENBRIK is not an insurance provider, underwriter or licensed
                              insurance agency. This work is administrative: customer service, lead
                              and process management, policy administration support, application
                              processing support, claims-related administrative assistance and
                              appointment setting. Nothing on this site is insurance advice or an
                              offer to sell insurance.
                            </p>
                            <p className="mt-3 text-[11.5px] leading-relaxed text-slate-muted/80">
                              <Placeholder>
                                [CONFIRM: exact scope of final expense administrative services, and
                                whether any team members hold insurance licences]
                              </Placeholder>
                            </p>
                          </div>
                        )}
                      </div>

                      {ops && (
                        <div className="lg:col-span-4">
                          <OpsDashboard variant={ops} className="lg:sticky lg:top-28" />
                        </div>
                      )}
                    </div>
                  </section>
                )
              })}
            </div>
          </div>
        </Container>
      </Section>

      <section className="relative overflow-hidden bg-ink py-20 text-silver md:py-28">
        <Atmosphere />
        <Container className="relative">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-[26ch] font-display text-[clamp(1.7rem,2.8vw,2.3rem)] font-medium leading-[1.06] tracking-[-0.03em] text-platinum">
                A process that costs more than it should is worth a second look.
              </h2>
              <p className="mt-3 max-w-[48ch] text-[13.5px] leading-relaxed text-silver/50">
                Tell us the volume, the systems and the turnaround you need. We will tell you what
                it takes.
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
