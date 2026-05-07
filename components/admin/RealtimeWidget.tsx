'use client'
import { useEffect, useState, useCallback } from 'react'
import { Radio, Globe, FileText } from 'lucide-react'

type RealtimeData = {
  activeUsers: number
  activePages: { page: string; users: number }[]
  countries: { country: string; users: number }[]
}

export default function RealtimeWidget() {
  const [data, setData] = useState<RealtimeData | null>(null)
  const [error, setError] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const fetchRealtime = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/analytics/realtime')
      const json = await res.json()
      if (json.error) { setError(true); return }
      setData(json)
      setLastUpdated(new Date())
      setError(false)
    } catch {
      setError(true)
    }
  }, [])

  useEffect(() => {
    fetchRealtime()
    const interval = setInterval(fetchRealtime, 30_000)
    return () => clearInterval(interval)
  }, [fetchRealtime])

  if (error) return null

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <h2 className="font-semibold text-gray-900">Live visitors</h2>
        </div>
        {lastUpdated && (
          <span className="text-xs text-gray-400">
            Updated {lastUpdated.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
        )}
      </div>

      {!data ? (
        <div className="animate-pulse space-y-3">
          <div className="h-12 bg-gray-100 rounded-lg w-24" />
          <div className="h-4 bg-gray-100 rounded w-48" />
        </div>
      ) : (
        <div className="space-y-5">
          {/* Active user count */}
          <div className="flex items-end gap-3">
            <p className="text-5xl font-bold text-gray-900">{data.activeUsers}</p>
            <p className="text-gray-500 mb-1.5 text-sm">active right now</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Active pages */}
            {data.activePages.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <FileText className="w-3.5 h-3.5 text-gray-400" />
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Pages</p>
                </div>
                <div className="space-y-1.5">
                  {data.activePages.map(p => (
                    <div key={p.page} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 truncate max-w-[75%]">{p.page || '/'}</span>
                      <span className="text-gray-900 font-medium tabular-nums">{p.users}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Countries */}
            {data.countries.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Globe className="w-3.5 h-3.5 text-gray-400" />
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Countries</p>
                </div>
                <div className="space-y-1.5">
                  {data.countries.map(c => (
                    <div key={c.country} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{c.country}</span>
                      <span className="text-gray-900 font-medium tabular-nums">{c.users}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {data.activeUsers === 0 && (
            <p className="text-sm text-gray-400 text-center py-2">No active visitors right now</p>
          )}
        </div>
      )}
    </div>
  )
}
