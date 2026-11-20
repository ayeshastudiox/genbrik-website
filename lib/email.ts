import { Resend } from 'resend'
import type { ContactSubmission } from '@/lib/validation'
import { focusLabels } from '@/lib/validation'

/**
 * Transactional email delivery (spec §5.3).
 *
 * The message body is sent as plain text, never HTML, so submitted values can
 * never inject markup into the email. Single-line fields are stripped of
 * newlines before they reach headers.
 */

const DEFAULT_FROM = 'GENBRIK Website <onboarding@resend.dev>'
const DEFAULT_TO = 'info@genbrik.com'

export type SendResult = { ok: true; id: string } | { ok: false; error: string }

function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim()
}

function buildBody(submission: ContactSubmission): string {
  return [
    'New consultation request from the GENBRIK website',
    '',
    `Name: ${oneLine(submission.name)}`,
    `Company: ${oneLine(submission.company) || '—'}`,
    `Email: ${oneLine(submission.email)}`,
    `Phone: ${oneLine(submission.phone) || '—'}`,
    `Area: ${focusLabels[submission.focus]}`,
    '',
    'Message:',
    submission.message,
    '',
    '—',
    `Submitted: ${new Date().toISOString()} (UTC)`,
  ].join('\n')
}

export async function sendContactEmail(submission: ContactSubmission): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const to = (process.env.CONTACT_TO_EMAIL || DEFAULT_TO).trim()
  const from = (process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM).trim()

  const text = buildBody(submission)
  const subject = `Consultation request — ${oneLine(submission.name)}${
    submission.company ? ` (${oneLine(submission.company)})` : ''
  }`

  if (!apiKey) {
    if (process.env.NODE_ENV === 'production') {
      console.error(
        '[contact] RESEND_API_KEY is not configured. The submission was validated but not delivered.',
      )
      return { ok: false, error: 'not_configured' }
    }
    // Development convenience: lets the full form flow (success state included)
    // be tested before an email provider is connected.
    console.info('[contact] RESEND_API_KEY not set — logging submission instead of sending:\n')
    console.info(text)
    return { ok: true, id: 'dev-console' }
  }

  try {
    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: oneLine(submission.email),
      text,
    })

    if (error) {
      console.error('[contact] Resend rejected the message:', error)
      return { ok: false, error: 'delivery_failed' }
    }

    return { ok: true, id: data?.id ?? '' }
  } catch (error) {
    console.error('[contact] Unexpected error while sending email:', error)
    return { ok: false, error: 'delivery_failed' }
  }
}
