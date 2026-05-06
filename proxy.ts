import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Let the login page through unconditionally
  if (pathname === '/admin/login') return NextResponse.next()

  // NextAuth v5 stores the session token under one of these two cookie names
  // (plain HTTP uses the non-Secure prefix; HTTPS/production uses the __Secure- prefix)
  const hasSession =
    req.cookies.has('authjs.session-token') ||
    req.cookies.has('__Secure-authjs.session-token')

  if (!hasSession) {
    const url = req.nextUrl.clone()
    url.pathname = '/admin/login'
    url.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
