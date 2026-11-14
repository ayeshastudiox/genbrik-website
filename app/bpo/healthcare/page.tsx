import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import { Atmosphere } from '@/components/atmosphere'
import { PageHero } from '@/components/page-hero'
import { OpsDashboard } from '@/components/ops-dashboard'
import type { OpsVariant } from '@/components/ops-dashboard'
import { Accordion } from '@/components/ui/accordion'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Placeholder } from '@/components/ui/placeholder'
import { Section } from '@/components/ui/section'
import { bpoCategories, healthcareDeepDive } from '@/lib/content'

export const metadata: Metadata = buildMetadata({
  title: 'Healthcare & Medical Billing',
  description:
    'Medical billing and revenue cycle management, DME services, Medicare and insurance support, and healthcare staffing — with compliance status stated plainly rather than assumed.',
  path: '/bpo/healthcare',
})

const complianceItems = [
  '[CONFIRM: HIPAA compliance status — business associate agreements, administrative and technical safeguards]',
  '[CONFIRM: SOC 2 / ISO 27001 status]',
  '[CONFIRM: state licensing or credentialing requirements applicable to billing staff]',
  '[CONFIRM: data residency, retention and deletion commitments]',
]

const cycle = [
  { label: 'Intake', detail: 'referral · order · patient' },
  { label: 'Eligibility', detail: 'benefits · coverage' },
  { label: 'Coding & claim', detail: 'codes · submission' },
  { label: 'Follow-up', detail: 'payers · denials' },
  { label: 'Posting', detail: 'payment · reconciliation' },
]

const otherBpo = bpoCategories.filter(
  (category) =>
    category.id !== 'medical-billing' &&
    category.id !== 'dme' &&
    category.id !== 'medicare-insurance' &&
    category.id !== 'healthcare-staffing',
)

const opsByTab: Record<string, OpsVariant> = {
  'medical-billing': 'billing',
  dme: 'dme',
  medicare: 'insurance',
  staffing: 'staffing',
}

function ClaimFlow() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <div aria-hidden className="glow-orb absolute inset-8 opacity-30" />
      <div className="panel-light relative overflow-hidden rounded-panel">
        <div className="flex items-center justify-between border-b border-hairline-light px-5 py-3">
          <span className="text-[10.5px] text-slate-muted">Revenue cycle</span>
          <span className="text-[10px] text-slate-muted/75">Example flow</span>
        </div>

        <ol className="relative px-5 py-5">
          <span
            aria-hidden
            className="absolute bottom-8 left-[27px] top-8 w-px bg-[linear-gradient(180deg,rgba(25,25,28,0.18),rgba(25,25,28,0.04))]"
          />
          {cycle.map((step, index) => (
            <li key={step.label} className="relative flex items-center gap-4 py-2.5">
              <span className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border border-slate/20 bg-white">
                <span className="h-1.5 w-1.5 rounded-full bg-slate/60" />
              </span>
              <span className="flex flex-1 items-baseline justify-between gap-4">
                <span className="text-[12px] text-slate">{step.label}</span>
                <span className="text-[10px] text-slate-muted/80">{step.detail}</span>
              </span>
              <span className="text-[10px] tabular-nums text-slate-muted/70 sm:text-[9.5px]">
                {String(index + 1).padStart(2, '0')}
              </span>
            </li>
          ))}
        </ol>

        <div className="border-t border-hairline-light px-5 py-3 text-[10px] text-slate-muted/75">
          One cycle, reported monthly
        </div>
      </div>
    </div>
  )
}

export default function HealthcarePage() {
  return (
    <>
      <PageHero
        tone="light"
        title={<>Healthcare operations, handled end to end.</>}
        intro="Medical billing and revenue cycle, DME, Medicare and insurance support, and clinical staffing — run inside your systems, to your procedures."
        actions={
          <>
            <ButtonLink href="/contact" size="lg" tone="light">
              Request a consultation
            </ButtonLink>
            <ButtonLink href="/bpo" size="lg" variant="secondary" tone="light">
              All BPO services
            </ButtonLink>
          </>
        }
        meta={
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {['Billing', 'DME', 'Insurance', 'Staffing'].map((chip) => (
              <span key={chip} className="chip chip-light">
                {chip}
              </span>
            ))}
          </div>
        }
        visual={<ClaimFlow />}
      />

      <Section tone="paper">
        <Atmosphere tone="light" glow={false} />
        <Container className="relative">
          <div className="panel relative overflow-hidden rounded-shell p-6 sm:p-7 md:p-10">
            <div aria-hidden className="grid-field absolute inset-0 opacity-40" />
            <div aria-hidden className="chrome-arc absolute -right-24 -top-24 h-64 w-64 opacity-30" />
            <div className="relative grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <span className="chip">
                  <span className="dot bg-platinum/70" />
                  Compliance
                </span>
                <h2 className="mt-5 font-display text-[clamp(1.4rem,2.2vw,1.8rem)] font-medium leading-tight text-platinum">
                  Compliance and credentialing
                </h2>
                <p className="mt-2 text-[11.5px] leading-relaxed text-silver/35">
                  Read this before sending any patient data.
                </p>
              </div>

              <div className="lg:col-span-8">
                <p className="max-w-[66ch] text-[13px] leading-relaxed text-silver/55">
                  We do not publish certifications we have not been audited for. The items below are
                  open until the founders confirm them, and they are written as placeholders rather
                  than assumed.
                </p>
                <ul className="mt-5 grid gap-2 border-t border-white/10 pt-4 sm:grid-cols-2">
                  {complianceItems.map((item) => (
                    <li key={item} className="text-[11.5px] leading-relaxed text-silver/40">
                      <Placeholder>{item}</Placeholder>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[11px] leading-relaxed text-silver/30">
                  No confidential patient information should be sent through the website contact
                  form.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" border>
        <Atmosphere tone="light" glow={false} />
        <Container className="relative">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-[56ch]">
              <h2 className="font-display text-h2 font-medium text-slate">
                Healthcare services in detail
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-muted">
                Four categories. Open one to see what we handle, what we need from you to start, and
                how the work is reported.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Accordion
              defaultOpenId="medical-billing"
              items={healthcareDeepDive.map((tab) => ({
                id: tab.id,
                title: tab.title,
                content: (
                  <div className="grid gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                      <p className="max-w-[50ch] text-[13.5px] leading-relaxed text-slate-muted">
                        {tab.intro}
                      </p>
                      <div className="mt-6 border-t border-hairline-light pt-4">
                        <p className="text-[10.5px] text-slate-muted/60">Reporting</p>
                        <p className="mt-1.5 max-w-[44ch] text-[12px] leading-relaxed text-slate-muted">
                          A monthly review against the measures agreed at kickoff, plus exception
                          reporting for anything that needs your decision.
                        </p>
                      </div>

                      <OpsDashboard
                        variant={opsByTab[tab.id] ?? 'billing'}
                        className="mt-6"
                      />
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
                      <div>
                        <h4 className="text-[10.5px] text-slate-muted/60">What we handle</h4>
                        <ul className="mt-3">
                          {tab.handles.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2.5 border-b border-hairline-light py-2 text-[12.5px] leading-snug text-slate"
                            >
                              <span aria-hidden className="mt-[0.55em] h-[3px] w-[3px] shrink-0 rotate-45 bg-slate-muted/40" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[10.5px] text-slate-muted/60">What we need from you</h4>
                        <ul className="mt-3">
                          {tab.needs.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2.5 border-b border-hairline-light py-2 text-[12.5px] leading-snug text-slate-muted"
                            >
                              <span aria-hidden className="mt-[0.55em] h-[3px] w-[3px] shrink-0 rotate-45 bg-slate-muted/25" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ),
              }))}
            />
          </div>
        </Container>
      </Section>

      <Section tone="paper" border>
        <Atmosphere tone="light" glow={false} />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-h2 font-medium text-slate">Other BPO services</h2>
              <p className="mt-4 max-w-[36ch] text-[14px] leading-relaxed text-slate-muted">
                The same operating model applied outside healthcare.
              </p>
              <Link
                href="/bpo"
                className="mt-5 inline-flex text-[12.5px] text-slate underline decoration-slate/25 underline-offset-4"
              >
                See all BPO services
              </Link>
            </div>

            <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
              {otherBpo.map((category) => (
                <li key={category.id} className="border-t border-hairline-light">
                  <Link
                    href={`/bpo#${category.id}`}
                    className="flex items-center justify-between gap-4 py-3.5 text-[13px] text-slate transition-colors hover:text-slate-muted"
                  >
                    {category.name}
                    <span aria-hidden className="dot bg-slate/25" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <section className="relative overflow-hidden bg-ink py-20 text-silver md:py-28">
        <Atmosphere />
        <Container className="relative">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-[26ch] font-display text-[clamp(1.7rem,2.8vw,2.3rem)] font-medium leading-[1.06] tracking-[-0.03em] text-platinum">
                Start with one service and one measured pilot.
              </h2>
              <p className="mt-3 max-w-[48ch] text-[13.5px] leading-relaxed text-silver/50">
                Billing, DME, authorisations or recruitment — we will scope the smallest useful
                version first.
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
