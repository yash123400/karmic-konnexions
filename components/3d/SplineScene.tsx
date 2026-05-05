"use client"
import Spline from '@splinetool/react-spline'
import { Suspense } from 'react'

// Fallback: animated CSS gradient orb matching the service vertical's accent
function SplineFallback({ color = 'var(--primary)' }: { color?: string }) {
  return (
    <div
      className="w-full h-full rounded-2xl flex items-center justify-center"
      style={{ background: `radial-gradient(circle at 40% 40%, ${color}30, ${color}08)` }}
    >
      <div
        className="w-32 h-32 rounded-full animate-pulse"
        style={{ background: `${color}25` }}
      />
    </div>
  )
}

interface SplineSceneProps {
  url?: string
  fallbackColor?: string
  className?: string
}

export default function SplineScene({ url, fallbackColor, className = '' }: SplineSceneProps) {
  if (!url) return <SplineFallback color={fallbackColor} />

  return (
    <Suspense fallback={<SplineFallback color={fallbackColor} />}>
      <div className={`relative overflow-hidden ${className}`}>
        <Spline scene={url} />
      </div>
    </Suspense>
  )
}
