"use client"
import dynamic from 'next/dynamic'

const GlobeScene = dynamic(() => import('./GlobeScene'), {
  ssr: false,
  loading: () => (
    <div className="w-[480px] h-[480px] rounded-full bg-[#EEF2FF] animate-pulse flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-[#4F46E5]/20 animate-ping" />
    </div>
  ),
})

export default GlobeScene
