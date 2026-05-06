'use client'
import { useEffect, useState } from 'react'
import { TrendingUp, Users, Clock, ArrowUpRight } from 'lucide-react'

type AnalyticsData = {
  sessions: number
  users: number
  bounceRate: string
  avgDuration: number
  topPages: { page: string; views: number }[]
  sources: { source: string; sessions: number }[]
}

export default function AnalyticsWidget() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/admin/analytics')
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false) })
      .catch(() => { setError('Could not load analytics'); setLoading(false) })
  }, [])

  if (loading) return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 animate-pulse">
      <div className="h-4 bg-gray-100 rounded w-32 mb-4" />
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map(i => <div key={i} className="h-16 bg-gray-100 rounded" />)}
      </div>
    </div>
  )

  if (error || !data) return null

  const formatDuration = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m}m ${s}s`
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-indigo-600" />
          <h2 className="font-semibold text-gray-900">Website (last 7 days)</h2>
        </div>
        <a
          href="https://analytics.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-indigo-600 hover:underline flex items-center gap-1"
        >
          Full report <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: 'Sessions', value: data.sessions.toLocaleString('en-IN'), icon: TrendingUp },
          { label: 'Users', value: data.users.toLocaleString('en-IN'), icon: Users },
          { label: 'Avg. time', value: formatDuration(data.avgDuration), icon: Clock },
        ].map(m => (
          <div key={m.label} className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-lg font-bold text-gray-900">{m.value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Top pages */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Top pages</p>
        <div className="space-y-1.5">
          {data.topPages?.map(p => (
            <div key={p.page} className="flex items-center justify-between text-sm">
              <span className="text-gray-600 truncate max-w-[70%]">{p.page}</span>
              <span className="text-gray-900 font-medium">{p.views.toLocaleString('en-IN')}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Traffic sources */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Traffic sources</p>
        <div className="space-y-1.5">
          {data.sources?.map(s => (
            <div key={s.source} className="flex items-center justify-between text-sm">
              <span className="text-gray-600">{s.source || 'Direct'}</span>
              <span className="text-gray-900 font-medium">{s.sessions}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
