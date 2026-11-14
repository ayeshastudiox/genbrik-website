import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { Atmosphere } from '@/components/atmosphere'
import { ContactForm } from '@/components/contact-form'
import { PageHero } from '@/components/page-hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Request a consultation with GENBRIK. Tell us what needs building or running — AI & Future Tech or BPO & Professional Services — and we will reply with next steps.',
  path: '/contact',
})

const nextSteps = [
  {
    title: 'We read it properly',
    body: 'Your message goes to the division that fits, not a shared sales queue.',
  },
  {
    title: 'A short call',
    body: 'Usually around 30 minutes, with the person who would own the work.',
  },
  {
    title: 'A written response',
    body: 'Scope and next steps, or a clear no and a pointer in a better direction.',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        compact
        title={<>Request a consultation.</>}
        intro="Tell us what needs building or running. We reply with next steps, not a brochure."
        meta={
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:info@genbrik.com"
              className="inline-flex min-h-11 items-center text-[15px] text-platinum underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white/60 sm:min-h-0"
            >
              info@genbrik.com
            </a>
            <span className="text-[11px] text-silver/25">or use the form</span>
          </div>
        }
      />

      <Section tone="paper">
        <Atmosphere tone="light" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="panel-light rounded-panel p-6">
                <h2 className="font-display text-[16px] font-medium text-slate">What happens next</h2>
                <ol className="mt-4">
                  {nextSteps.map((step, index) => (
                    <li
                      key={step.title}
                      className="flex gap-3 border-t border-hairline-light py-3.5 first:border-t-0 first:pt-0"
                    >
                      <span className="font-display text-[10.5px] tabular-nums text-slate-muted/70">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>
                        <span className="block text-[12.5px] text-slate">{step.title}</span>
                        <span className="mt-0.5 block text-[11.5px] leading-relaxed text-slate-muted">
                          {step.body}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="panel relative mt-4 overflow-hidden rounded-panel p-6">
                <div aria-hidden className="grid-field absolute inset-0 opacity-40" />
                <div className="relative">
                  <h2 className="font-display text-[16px] font-medium text-platinum">
                    Direct contact
                  </h2>
                  <a
                    href="mailto:info@genbrik.com"
                    className="mt-3 flex min-h-11 items-center break-words text-[15px] text-platinum underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white/60 sm:min-h-0"
                  >
                    info@genbrik.com
                  </a>
                  <p className="mt-3 max-w-[32ch] text-[12px] leading-relaxed text-silver/50">
                    For new work, partnerships and anything that does not fit the form.
                  </p>
                  <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-[11px] text-silver/40">
                    <span aria-hidden className="dot bg-silver/50" />
                    We reply by email.
                  </div>
                </div>
              </div>

              <p className="mt-4 max-w-[38ch] text-[11px] leading-relaxed text-slate-muted/80">
                For healthcare engagements, tell us which systems you use — EHR, practice
                management, clearinghouse — and your payer mix. Please do not include patient data.
              </p>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
