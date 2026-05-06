/**
 * Simple in-memory IP rate limiter for Next.js API routes.
 * Limits each IP to maxRequests per windowMs milliseconds.
 * Works per serverless instance — sufficient for low-to-medium traffic.
 */
const ipMap = new Map<string, { count: number; resetAt: number }>()

export function rateLimit(
  ip: string,
  maxRequests = 5,
  windowMs = 60_000
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now()
  const entry = ipMap.get(ip)

  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + windowMs })
    return { allowed: true, remaining: maxRequests - 1, resetAt: now + windowMs }
  }

  entry.count += 1
  const remaining = Math.max(0, maxRequests - entry.count)
  return { allowed: entry.count <= maxRequests, remaining, resetAt: entry.resetAt }
}
