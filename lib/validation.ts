import { z } from 'zod'

/**
 * Shared validation — the exact same schema runs in the browser (via
 * react-hook-form) and in the API route, so server validation is never a
 * weaker copy of the client rules (spec §5.3).
 */

export const divisionValues = ['future-tech', 'bpo', 'not-sure'] as const

export type Division = (typeof divisionValues)[number]

export const divisionLabels: Record<Division, string> = {
  'future-tech': 'AI & Future Tech',
  bpo: 'BPO & Professional Services',
  'not-sure': 'Not sure yet',
}

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Enter your name.')
    .max(120, 'That name is longer than we can accept.'),
  company: z.string().trim().max(160, 'That company name is longer than we can accept.'),
  email: z
    .string()
    .trim()
    .min(1, 'Enter your email address.')
    .max(200, 'That email address is too long.')
    .email('Enter a valid email address.'),
  phone: z.string().trim().max(40, 'That phone number is longer than we can accept.'),
  division: z.enum(divisionValues, {
    errorMap: () => ({ message: 'Choose one option.' }),
  }),
  message: z
    .string()
    .trim()
    .min(20, 'Please add at least 20 characters so we can respond usefully.')
    .max(4000, 'Please keep the message under 4000 characters.'),
  // Honeypot: real visitors never fill this. The API returns a generic success
  // before validation when it is filled.
  website: z.string().max(0),
})

/** Validated payload produced by the schema (server-side shape). */
export type ContactSubmission = z.infer<typeof contactSchema>

/** Browser form state — division starts empty so nobody is pre-selected. */
export type ContactFormValues = Omit<ContactSubmission, 'division'> & {
  division: Division | ''
}

export type ContactApiError =
  | 'validation'
  | 'rate_limited'
  | 'invalid_json'
  | 'not_configured'
  | 'delivery_failed'
  | 'server_error'

export type ContactApiResponse = { ok: true } | { ok: false; error: ContactApiError }
