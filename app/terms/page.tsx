import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Placeholder } from '@/components/ui/placeholder'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms for using the GENBRIK website. Working draft pending legal review.',
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: true },
}

const sections = [
  {
    title: 'Using this site',
    body: (
      <>
        This website is provided for information about GENBRIK and its services. By using it you
        agree to these terms. If you do not agree, please do not use the site.
      </>
    ),
  },
  {
    title: 'No professional advice',
    body: (
      <>
        Content on this site is general information, not legal, medical, insurance, financial or
        professional advice. Nothing here creates a client relationship, and nothing on this site is
        an offer to sell insurance or a solicitation to buy it.
      </>
    ),
  },
  {
    title: 'Service descriptions',
    body: (
      <>
        Service descriptions indicate what GENBRIK can deliver. Actual scope, price and terms are
        agreed only in a signed proposal or statement of work.
      </>
    ),
  },
  {
    title: 'Intellectual property',
    body: (
      <>
        The GENBRIK name, wordmark and site content are owned by GENBRIK or used with permission.
        You may not copy or republish substantial parts of the site without written permission.{' '}
        <Placeholder>[CONFIRM: trademark registration status and jurisdiction]</Placeholder>
      </>
    ),
  },
  {
    title: 'Accuracy',
    body: (
      <>
        We aim to keep the site accurate but do not warrant that every page is current or complete.
        Details such as contact information and service scope may change.
      </>
    ),
  },
  {
    title: 'Limitation of liability',
    body: (
      <>
        To the extent permitted by law, GENBRIK is not liable for indirect or consequential loss
        arising from use of this website.{' '}
        <Placeholder>[CONFIRM: liability wording, governing law and jurisdiction]</Placeholder>
      </>
    ),
  },
  {
    title: 'Changes',
    body: (
      <>
        We may update these terms. The effective date below will change when we do.{' '}
        <Placeholder>[CONFIRM: effective date]</Placeholder>
      </>
    ),
  },
  {
    title: 'Contact',
    body: (
      <>
        Questions about these terms:{' '}
        <a href="mailto:info@genbrik.com" className="underline decoration-slate/25 underline-offset-4">
          info@genbrik.com
        </a>
        .
      </>
    ),
  },
]

export default function TermsPage() {
  return (
    <>
      <section className="border-b border-hairline-light bg-paper">
        <Container>
          <div className="max-w-[760px] py-16 md:py-20">
            <p className="text-[12.5px] text-slate-muted">Legal</p>
            <h1 className="mt-3 font-display text-[clamp(2rem,3.6vw,2.9rem)] font-semibold leading-[1.08] tracking-[-0.024em] text-slate">
              Terms of Use
            </h1>
            <div className="mt-6 rounded-card border border-dashed border-slate/25 p-4">
              <p className="text-[12.5px] font-medium text-slate">Working draft — needs legal review</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-muted">
                Standard placeholder terms, flagged for review before launch.{' '}
                <Placeholder>[CONFIRM: legal review, governing law and entity details]</Placeholder>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <Container>
          <div className="max-w-[720px]">
            {sections.map((section, index) => (
              <section
                key={section.title}
                className="border-t border-hairline-light py-7 first:border-t-0 first:pt-0"
              >
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
              <Link href="/privacy" className="text-slate underline decoration-slate/25 underline-offset-4">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
