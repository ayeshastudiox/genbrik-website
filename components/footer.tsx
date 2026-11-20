import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Container } from '@/components/ui/container'
import { MetalRule } from '@/components/ui/metal-rule'
import { chipsRoboticsServices, futureTechCategories } from '@/lib/content'
import { contactEmail } from '@/lib/site'

const aiLinks = [
  ...futureTechCategories
    .filter(
      (category) =>
        category.id !== 'robotics' && category.id !== 'chips-robotics-ai-surveillance',
    )
    .map((category) => ({
      label: category.name,
      href: `/future-tech#${category.id}`,
    })),
  { label: 'AI & Technology overview', href: '/future-tech' },
]

const roboticsLinks = [
  { label: 'Robotics & Humanoid Technology', href: '/future-tech#robotics' },
  ...chipsRoboticsServices.map((service) => ({
    label: service.name,
    href: `/future-tech#${service.id}`,
  })),
  {
    label: 'Robotics & Chips overview',
    href: '/future-tech#chips-robotics-ai-surveillance',
  },
]

const companyLinks = [
  { label: 'About GENBRIK', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
]

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: Array<{ label: string; href: string }>
}) {
  return (
    <nav aria-label={title}>
      <h2 className="text-[11px] font-medium text-slate-muted/60">{title}</h2>
      <ul className="mt-4 space-y-0 sm:space-y-2.5">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="flex min-h-11 items-center text-[13px] leading-snug text-slate-muted transition-colors hover:text-slate sm:min-h-0 sm:text-[12.5px]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/**
 * Four-column footer (spec §3.3) on a paper surface, so the light-background
 * logo variant sits here exactly as §2.4 specifies.
 */
export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-paper text-slate">
      <MetalRule tone="light" className="relative z-10" />
      <div aria-hidden className="surface-paper pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="grid-field-light pointer-events-none absolute inset-0 opacity-70"
      />

      <Container className="relative pb-[calc(2rem_+_env(safe-area-inset-bottom))] pt-14 md:pt-20">
        <div className="flex flex-col gap-8 border-b border-hairline-light pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-[46ch] text-[13.5px] leading-relaxed text-slate-muted">
              Technology we build. Intelligence we engineer. AI, robotics, chips and intelligent
              systems under one roof, with a direct line to the people doing the work.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="chip chip-light">
                <span aria-hidden className="dot bg-slate/40" />
                AI-first
              </span>
              <span className="chip chip-light">Robotics &amp; Chips</span>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-btn border border-slate/20 px-5 text-[13px] font-medium text-slate transition-colors hover:border-slate/40 hover:bg-white"
          >
            Request a Consultation
          </Link>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="AI & Technology" links={aiLinks} />
          <FooterColumn title="Robotics & Chips" links={roboticsLinks} />
          <FooterColumn title="Company" links={companyLinks} />

          <div>
            <h2 className="text-[11px] font-medium text-slate-muted/60">Contact</h2>
            <div className="mt-4 space-y-3">
              <a
                href={`mailto:${contactEmail}`}
                className="flex min-h-11 items-center break-words text-[13px] text-slate transition-colors hover:text-slate-muted sm:min-h-0 sm:text-[12.5px]"
              >
                {contactEmail}
              </a>
              <p className="max-w-[28ch] text-[12px] leading-relaxed text-slate-muted/80">
                For new work, partnerships and general enquiries.
              </p>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center text-[12.5px] font-medium text-slate underline decoration-slate/25 underline-offset-4 transition-colors hover:decoration-slate/70 sm:min-h-9"
              >
                Request a consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hairline-light pt-6 text-[12px] text-slate-muted/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} GENBRIK. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="inline-flex min-h-11 items-center transition-colors hover:text-slate sm:min-h-0"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="inline-flex min-h-11 items-center transition-colors hover:text-slate sm:min-h-0"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
