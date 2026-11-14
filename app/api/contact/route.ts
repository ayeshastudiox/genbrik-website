import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'
import { rateLimit } from '@/lib/rate-limit'
import { contactSchema } from '@/lib/validation'

/**
 * Contact form handler (spec §5.3).
 *
 * Order of checks: rate limit → parse → honeypot → server-side validation →
 * email delivery. Never trusts client validation. Returns a typed JSON body the
 * frontend uses to drive the success/error UI.
 */
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]
    if (first) return first.trim()
  }
  return request.headers.get('x-real-ip')?.trim() || 'unknown'
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request)
    if (!rateLimit(ip)) {
      return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })
    }

    let payload: unknown
    try {
      payload = await request.json()
    } catch {
      return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
    }

    const raw =
      payload && typeof payload === 'object' ? (payload as Record<string, unknown>) : {}

    // Honeypot: return a generic success so bots do not learn the trap.
    if (typeof raw.website === 'string' && raw.website.trim().length > 0) {
      return NextResponse.json({ ok: true })
    }

    const parsed = contactSchema.safeParse({
      ...raw,
      website: typeof raw.website === 'string' ? raw.website : '',
    })

    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: 'validation' }, { status: 422 })
    }

    const result = await sendContactEmail(parsed.data)

    if (!result.ok) {
      const status = result.error === 'not_configured' ? 500 : 502
      return NextResponse.json({ ok: false, error: result.error }, { status })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[contact] Unhandled error:', error)
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 })
  }
}

/** Anything other than POST is not a valid contact submission. */
export function GET() {
  return NextResponse.json({ ok: false, error: 'method_not_allowed' }, { status: 405 })
}
