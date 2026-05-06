'use client'
import { useEffect, useState } from 'react'
import { Search, ArrowUpRight } from 'lucide-react'

type SCData = {
  queries: { query: string; clicks: number; impressions: number; position: string }[]
  pages: { page: string; clicks: number; impressions: number }[]
  dateRange: string
}

export default function SearchConsoleWidget() {
  const [data, setData] = useState<SCData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/search-console')
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  if (loading || !data || !data.queries) return null

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-emerald-600" />
          <h2 className="font-semibold text-gray-900">Google Rankings</h2>
          <span className="text-xs text-gray-400">({data.dateRange})</span>
        </div>
        <a
          href="https://search.google.com/search-console"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-indigo-600 hover:underline flex items-center gap-1"
        >
          Full report <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Top search queries</p>
          <div className="space-y-2">
            {data.queries?.slice(0, 8).map(q => (
              <div key={q.query} className="flex items-center justify-between text-sm">
                <span className="text-gray-700 truncate max-w-[55%]">{q.query}</span>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{q.clicks} clicks</span>
                  <span className={`font-medium ${
                    parseFloat(q.position) <= 3 ? 'text-emerald-600' :
                    parseFloat(q.position) <= 10 ? 'text-amber-600' : 'text-gray-400'
                  }`}>
                    #{q.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Top pages from Google</p>
          <div className="space-y-2">
            {data.pages?.map(p => (
              <div key={p.page} className="flex items-center justify-between text-sm">
                <span className="text-gray-600 truncate max-w-[60%]">{p.page || '/'}</span>
                <span className="text-gray-900 font-medium text-xs">{p.clicks} clicks</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
