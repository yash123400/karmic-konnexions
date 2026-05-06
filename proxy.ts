import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  // Inject the current pathname so server components (layout.tsx)
  // can read it without needing a client component or params.
  const response = NextResponse.next()
  response.headers.set('x-pathname', req.nextUrl.pathname)
  return response
})

export const config = {
  matcher: ['/admin/:path*'],
}
