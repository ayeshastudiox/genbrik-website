import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { Atmosphere } from '@/components/atmosphere'
import { PageHero } from '@/components/page-hero'
import { ProcessSteps } from '@/components/process-steps'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { processSteps, webServices } from '@/lib/content'

export const metadata: Metadata = buildMetadata({
  title: 'Web & Software Development',
  description:
    'WordPress and WooCommerce websites, e-commerce stores, custom web applications and internal dashboards — built with a fixed scope, documented handover and support after launch.',
  path: '/future-tech/web-software',
})

const quotePoints = [
  {
    title: 'Fixed scope, fixed price',
    body: 'The proposal lists every page, screen and integration. If it is not listed, it is not assumed.',
  },
  {
    title: 'Changes quoted first',
    body: 'New requests are priced before they are built, so the invoice never arrives as a surprise.',
  },
  {
    title: 'Handover included',
    body: 'Written documentation, a walkthrough and repository access are part of delivery, not an extra.',
  },
]

function SiteMock() {
  return (
    <div className="relative mx-auto w-full max-w-[470px]">
      <div aria-hidden className="glow-orb absolute inset-6 opacity-40" />
      <div className="panel-light relative overflow-hidden rounded-panel">
        <div className="flex items-center gap-2 border-b border-hairline-light px-4 py-2.5">
          <span className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-slate/15" />
            <span className="h-2 w-2 rounded-full bg-slate/10" />
            <span className="h-2 w-2 rounded-full bg-slate/10" />
          </span>
          <span className="ml-2 flex-1 rounded-full border border-hairline-light bg-paper px-3 py-1 text-[9.5px] text-slate-muted/60">
            yourdomain.com
          </span>
        </div>

        <div className="p-4">
          <div className="h-1.5 w-16 rounded-full bg-slate/15" />
          <div className="mt-2 h-2.5 w-44 rounded-full bg-slate/10" />
          <div className="mt-1.5 h-2.5 w-32 rounded-full bg-slate/10" />

          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="col-span-2 h-24 rounded-lg border border-hairline-light bg-[linear-gradient(135deg,#ececef,#fbfbfc)]" />
            <div className="h-24 rounded-lg border border-hairline-light bg-[linear-gradient(160deg,#f4f4f6,#e9e9ec)]" />
          </div>

          <div className="mt-2 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="h-12 rounded-lg border border-hairline-light bg-white"
              />
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span className="h-6 w-20 rounded-md bg-slate" />
            <span className="h-6 w-16 rounded-md border border-slate/15" />
            <span className="ml-auto h-1 w-10 rounded-full bg-slate/15" />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-3 right-2 rounded-full border border-hairline-light bg-white px-3 py-1.5 text-[9.5px] text-slate-muted shadow-sm">
        Handover included
      </div>
    </div>
  )
}

export default function WebSoftwarePage() {
  return (
    <>
      <PageHero
        tone="light"
        title={<>Websites, stores and internal tools your team can actually run.</>}
        intro="Web development from GENBRIK AI & Technology: WordPress and WooCommerce builds, custom web applications, dashboards and internal systems — with the handover that makes them maintainable."
        actions={
          <>
            <ButtonLink href="/contact" size="lg" tone="light">
              Request a consultation
            </ButtonLink>
            <ButtonLink href="/future-tech/ai-automation" size="lg" variant="secondary" tone="light">
              AI &amp; automation
            </ButtonLink>
          </>
        }
        meta={
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {['Websites', 'E-commerce', 'Web apps', 'Dashboards'].map((chip) => (
              <span key={chip} className="chip chip-light">
                {chip}
              </span>
            ))}
          </div>
        }
        visual={<SiteMock />}
      />

      <Section tone="paper">
        <Atmosphere tone="light" glow={false} />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <h2 className="font-display text-h2 font-medium text-slate">The service menu</h2>
                <p className="mt-4 max-w-[36ch] text-[14px] leading-relaxed text-slate-muted">
                  Four ways to work with us. Each is delivered as a project with a defined end
                  state, or as ongoing support if you already have a build in place.
                </p>

                <nav aria-label="Services on this page" className="mt-8 hidden lg:block">
                  <ul className="space-y-2 border-t border-hairline-light pt-4">
                    {webServices.map((service) => (
                      <li key={service.id}>
                        <a
                          href={`#${service.id}`}
                          className="flex items-center gap-2 text-[12px] text-slate-muted transition-colors hover:text-slate"
                        >
                          <span aria-hidden className="dot bg-slate/30" />
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            <div className="lg:col-span-8">
              {webServices.map((service, index) => (
                <section
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-28 border-t border-hairline-light py-10 md:py-12 ${
                    index === 0 ? 'lg:border-t-0 lg:pt-0' : ''
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <h3 className="font-display text-[clamp(1.6rem,2.6vw,2rem)] font-medium leading-[1.08] tracking-[-0.025em] text-slate">
                      {service.name}
                    </h3>
                    <span className="text-[10.5px] text-slate-muted/80">
                      {service.includes.length} inclusions
                    </span>
                  </div>

                  <p className="mt-3 max-w-[60ch] text-[14px] leading-relaxed text-slate-muted">
                    {service.description}
                  </p>

                  <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 border-b border-hairline-light py-2.5 text-[12.5px] leading-snug text-slate"
                      >
                        <span aria-hidden className="mt-[0.55em] h-[3px] w-[3px] shrink-0 rotate-45 bg-slate-muted/50" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <ButtonLink
                    href="/contact"
                    variant="secondary"
                    tone="light"
                    size="sm"
                    className="mt-6"
                  >
                    Discuss a project
                  </ButtonLink>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" border>
        <Atmosphere tone="light" glow={false} />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-h2 font-medium text-slate">How we quote</h2>
              <p className="mt-4 max-w-[36ch] text-[14px] leading-relaxed text-slate-muted">
                Software estimates fail when the scope is vague. These three rules keep the number
                honest in both directions.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-px overflow-hidden rounded-panel border border-hairline-light bg-hairline-light sm:grid-cols-3">
                {quotePoints.map((point) => (
                  <div key={point.title} className="bg-white p-5 md:p-6">
                    <h3 className="font-display text-[16px] font-medium text-slate">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-slate-muted">
                      {point.body}
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
          <div className="max-w-[52ch]">
            <h2 className="font-display text-h2 font-medium text-slate">From first call to support</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-muted">
              The same four steps every web and software project follows.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-shell border border-white/10 bg-[#0B0B0E] p-6 sm:p-7 md:p-10">
            <div aria-hidden className="grid-field absolute inset-0 opacity-40" />
            <div className="relative">
              <ProcessSteps steps={processSteps} tone="dark" />
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
                Have a site, store or internal tool that needs building — or rescuing?
              </h2>
              <p className="mt-3 max-w-[48ch] text-[13.5px] leading-relaxed text-silver/50">
                Send the current state, even if it is a spreadsheet and a domain name.
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
