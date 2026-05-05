"use client"
import dynamic from 'next/dynamic'

const SplineScene = dynamic(() => import('./SplineScene'), { ssr: false })

export default SplineScene
