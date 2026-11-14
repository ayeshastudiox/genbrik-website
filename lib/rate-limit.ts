/**
 * Simple in-memory rate limiter for the contact endpoint (spec §5.3).
 *
 * Limitation, by design for v1: state lives in a single server process, so on
 * serverless hosting each instance keeps its own counter and cold starts reset
 * it. Replace with a persistent limiter (Upstash Redis, Vercel KV or an edge
 * middleware rule) once traffic justifies it.
 */
type Bucket = { count: number; resetAt: number }

const buckets = new Map<string, Bucket>()

const WINDOW_MS = 10 * 60 * 1000
const parsedMax = Number.parseInt(process.env.CONTACT_RATE_LIMIT_MAX ?? '5', 10)
const MAX_REQUESTS = Number.isFinite(parsedMax) && parsedMax > 0 ? parsedMax : 5

/** Returns true when the request is allowed. */
export function rateLimit(key: string): boolean {
  const now = Date.now()

  // Opportunistic cleanup so the map cannot grow without bound.
  if (buckets.size > 5000) {
    for (const [bucketKey, bucket] of buckets) {
      if (bucket.resetAt <= now) buckets.delete(bucketKey)
    }
  }

  const existing = buckets.get(key)
  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }

  if (existing.count >= MAX_REQUESTS) return false

  existing.count += 1
  return true
}
