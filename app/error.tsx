'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface ErrorProps {
  error: Error & { digest?: string }
  unstable_retry: () => void
}

export default function Error({ error, unstable_retry }: ErrorProps) {
  useEffect(() => {
    console.error('Page error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 rounded-full bg-accent-tint flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-accent"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-text-primary mb-3">
          Something went wrong
        </h1>
        <p className="text-text-muted mb-8">
          We hit an unexpected error. Our team has been notified.
          Please try again or return to the homepage.
        </p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={unstable_retry}
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-border-color text-text-secondary rounded-lg font-medium hover:bg-primary-tint transition-colors"
          >
            Go home
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left bg-slate-50 rounded-lg p-4 text-xs text-slate-600">
            <summary className="cursor-pointer font-medium mb-2">Error details (dev only)</summary>
            <pre className="whitespace-pre-wrap break-all">{error.message}</pre>
            {error.digest && <p className="mt-2 text-slate-400">Digest: {error.digest}</p>}
          </details>
        )}
      </div>
    </div>
  )
}
