'use client'

import { useEffect } from 'react'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  unstable_retry: () => void
}

export default function GlobalError({ error, unstable_retry }: GlobalErrorProps) {
  useEffect(() => {
    console.error('Global error:', error)
  }, [error])

  // global-error MUST include its own <html> and <body> tags
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#FAFBFF' }}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div style={{ maxWidth: '400px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
              Something went wrong
            </h1>
            <p style={{ color: '#6B7280', marginBottom: '32px' }}>
              A critical error occurred. Please try again or contact us at{' '}
              <a href="mailto:karmickonnexions2309@gmail.com" style={{ color: '#4F46E5' }}>
                karmickonnexions2309@gmail.com
              </a>
            </p>
            <button
              onClick={unstable_retry}
              style={{
                padding: '12px 24px',
                background: '#4F46E5',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
