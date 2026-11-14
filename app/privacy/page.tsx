import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Placeholder } from '@/components/ui/placeholder'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How GENBRIK handles information submitted through this website. Working draft pending legal review.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
}

const sections = [
  {
    title: 'Who we are',
    body: (
      <>
        GENBRIK operates this website. The data controller for information submitted here is{' '}
        <Placeholder>[CONFIRM: registered legal entity name and registration number]</Placeholder>.
        You can reach us about privacy at{' '}
        <a href="mailto:info@genbrik.com" className="underline decoration-slate/25 underline-offset-4">
          info@genbrik.com
        </a>
        .
      </>
    ),
  },
  {
    title: 'What we collect',
    body: (
      <>
        When you submit the consultation form we collect the name, company, email address, phone
        number, division selection and message you provide. The server that delivers this site may
        also record standard request information — such as IP address, browser type and the pages
        requested — for security and reliability. This site does not set analytics or advertising
        cookies.
      </>
    ),
  },
  {
    title: 'How we use it',
    body: (
      <>
        To reply to your enquiry, to provide services you ask for, and to keep the site and our
        systems secure. We do not sell personal information.
      </>
    ),
  },
  {
    title: 'Legal basis',
    body: (
      <>
        Where data-protection law requires a legal basis, we rely on our legitimate interest in
        responding to business enquiries and, where applicable, your consent.{' '}
        <Placeholder>[CONFIRM: whether GDPR, UK GDPR, CCPA or other regimes apply]</Placeholder>
      </>
    ),
  },
  {
    title: 'Who processes it',
    body: (
      <>
        Submissions are delivered by email through Resend, and the site is hosted on Vercel. Both
        process data on our behalf. <Placeholder>[CONFIRM: current sub-processors and their regions]</Placeholder>
      </>
    ),
  },
  {
    title: 'How long we keep it',
    body: (
      <>
        Enquiry emails are kept for as long as needed to respond and to maintain a record of the
        business relationship. <Placeholder>[CONFIRM: retention period and deletion schedule]</Placeholder>
      </>
    ),
  },
  {
    title: 'Your rights',
    body: (
      <>
        You can ask for a copy of the information we hold about you, ask us to correct it, or ask us
        to delete it. Email{' '}
        <a href="mailto:info@genbrik.com" className="underline decoration-slate/25 underline-offset-4">
          info@genbrik.com
        </a>{' '}
        and we will respond within the period required by applicable law.{' '}
        <Placeholder>[CONFIRM: applicable statutory response period and supervisory authority]</Placeholder>
      </>
    ),
  },
  {
    title: 'Changes to this policy',
    body: (
      <>
        If this policy changes materially we will update this page and its effective date.{' '}
        <Placeholder>[CONFIRM: effective date]</Placeholder>
      </>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-hairline-light bg-paper">
        <Container>
          <div className="max-w-[760px] py-16 md:py-20">
            <p className="text-[12.5px] text-slate-muted">Legal</p>
            <h1 className="mt-3 font-display text-[clamp(2rem,3.6vw,2.9rem)] font-semibold leading-[1.08] tracking-[-0.024em] text-slate">
              Privacy Policy
            </h1>
            <div className="mt-6 rounded-card border border-dashed border-slate/25 p-4">
              <p className="text-[12.5px] font-medium text-slate">Working draft — needs legal review</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-muted">
                This page describes how the site actually handles data today, but it has not been
                reviewed by a lawyer.{' '}
                <Placeholder>[CONFIRM: legal review and jurisdiction-specific wording]</Placeholder>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <Container>
          <div className="max-w-[720px]">
            {sections.map((section, index) => (
              <section key={section.title} className="border-t border-hairline-light py-7 first:border-t-0 first:pt-0">
                <div className="flex gap-4">
                  <span className="font-display text-[12px] tabular-nums text-slate-muted/60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="font-display text-[19px] font-medium text-slate">{section.title}</h2>
                    <p className="mt-2 text-[14px] leading-relaxed text-slate-muted">{section.body}</p>
                  </div>
                </div>
              </section>
            ))}

            <p className="mt-10 border-t border-hairline-light pt-6 text-[13px] text-slate-muted">
              Back to{' '}
              <Link href="/" className="text-slate underline decoration-slate/25 underline-offset-4">
                home
              </Link>{' '}
              or{' '}
              <Link href="/contact" className="text-slate underline decoration-slate/25 underline-offset-4">
                contact us
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
