'use client'
import { Fragment, useState, useMemo } from 'react'
import { Search, Download, Mail, Phone, Calendar, Filter } from 'lucide-react'

type Lead = {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message?: string
  created_at: string
}

type AiScore = {
  score: 'hot' | 'warm' | 'cold'
  score_reason: string
  priority_service: string
  suggested_reply: string
}

export default function LeadsTable({ leads }: { leads: Lead[] }) {
  const [search, setSearch] = useState('')
  const [serviceFilter, setServiceFilter] = useState('all')
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [aiResult, setAiResult] = useState<Record<string, AiScore>>({})
  const [aiLoading, setAiLoading] = useState<string | null>(null)

  const services = useMemo(() => {
    const s = new Set(leads.map(l => l.service).filter(Boolean))
    return Array.from(s) as string[]
  }, [leads])

  const filtered = useMemo(() => leads.filter(lead => {
    const matchesSearch =
      !search ||
      lead.name?.toLowerCase().includes(search.toLowerCase()) ||
      lead.email?.toLowerCase().includes(search.toLowerCase()) ||
      lead.company?.toLowerCase().includes(search.toLowerCase())
    const matchesService =
      serviceFilter === 'all' || lead.service === serviceFilter
    return matchesSearch && matchesService
  }), [leads, search, serviceFilter])

  const exportCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Service', 'Message', 'Date']
    const rows = filtered.map(l => [
      l.name,
      l.email,
      l.phone ?? '',
      l.company ?? '',
      l.service ?? '',
      (l.message ?? '').replace(/,/g, ' '),
      new Date(l.created_at).toLocaleDateString('en-IN'),
    ])
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `karmic-leads-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  async function scoreLead(lead: Lead) {
    setAiLoading(lead.id)
    const res = await fetch('/api/admin/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'score_lead', data: lead }),
    })
    const result = await res.json()
    setAiResult(prev => ({ ...prev, [lead.id]: result }))
    setAiLoading(null)
  }

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, email, company..."
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-400"
          />
        </div>

        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <select
            value={serviceFilter}
            onChange={e => setServiceFilter(e.target.value)}
            className="pl-9 pr-8 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-400 bg-white appearance-none"
          >
            <option value="all">All services</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <button
          onClick={exportCSV}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors ml-auto"
        >
          <Download className="w-4 h-4" />
          Export CSV ({filtered.length})
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Name</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Contact</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Service</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Date</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-12 text-gray-400">
                  No leads found.
                </td>
              </tr>
            ) : filtered.map(lead => (
              <Fragment key={lead.id}>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <p className="font-medium text-gray-900">{lead.name}</p>
                    {lead.company && <p className="text-xs text-gray-500">{lead.company}</p>}
                  </td>
                  <td className="px-4 py-3">
                    <a href={`mailto:${lead.email}`} className="flex items-center gap-1 text-indigo-600 hover:underline text-xs">
                      <Mail className="w-3 h-3" />{lead.email}
                    </a>
                    {lead.phone && (
                      <a href={`tel:${lead.phone}`} className="flex items-center gap-1 text-gray-500 hover:underline text-xs mt-1">
                        <Phone className="w-3 h-3" />{lead.phone}
                      </a>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {lead.service ? (
                      <span className="inline-block bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full text-xs font-medium">
                        {lead.service}
                      </span>
                    ) : (
                      <span className="text-gray-400 text-xs">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(lead.created_at).toLocaleDateString('en-IN', {
                        day: 'numeric', month: 'short', year: 'numeric',
                      })}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setSelectedLead(lead)}
                      className="text-xs text-indigo-600 hover:underline"
                    >
                      View message
                    </button>
                    <button
                      onClick={() => scoreLead(lead)}
                      disabled={aiLoading === lead.id}
                      className="text-xs text-violet-600 hover:underline ml-3 disabled:opacity-50"
                    >
                      {aiLoading === lead.id ? 'Scoring...' : '✦ AI Score'}
                    </button>
                  </td>
                </tr>
                {aiResult[lead.id] && (
                  <tr>
                    <td colSpan={5} className="px-4 pb-3 bg-violet-50/50">
                      <div className="flex items-start gap-4 text-xs">
                        <span className={`font-bold ${
                          aiResult[lead.id].score === 'hot' ? 'text-emerald-600' :
                          aiResult[lead.id].score === 'warm' ? 'text-amber-600' : 'text-red-500'
                        }`}>
                          {aiResult[lead.id].score === 'hot' ? '🟢 Hot lead' :
                           aiResult[lead.id].score === 'warm' ? '🟡 Warm lead' : '🔴 Cold lead'}
                        </span>
                        <span className="text-gray-600">{aiResult[lead.id].score_reason}</span>
                        <span className="text-indigo-600">→ {aiResult[lead.id].priority_service}</span>
                      </div>
                      {aiResult[lead.id].suggested_reply && (
                        <div className="mt-2 bg-white border border-violet-200 rounded-lg p-3 text-xs text-gray-700">
                          <p className="font-medium text-violet-700 mb-1">Suggested reply:</p>
                          {aiResult[lead.id].suggested_reply}
                          <button
                            onClick={() => navigator.clipboard.writeText(aiResult[lead.id].suggested_reply)}
                            className="mt-2 text-violet-600 hover:underline block"
                          >
                            Copy to clipboard
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Message modal */}
      {selectedLead && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedLead(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-900">{selectedLead.name}</h3>
                <p className="text-sm text-gray-500">{selectedLead.email}</p>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="text-gray-400 hover:text-gray-600 text-lg leading-none"
              >
                ✕
              </button>
            </div>
            {selectedLead.service && (
              <span className="inline-block bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full text-xs font-medium mb-3">
                {selectedLead.service}
              </span>
            )}
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
              {selectedLead.message || 'No message provided.'}
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href={`mailto:${selectedLead.email}?subject=Re: Your enquiry to Karmic Konnexions`}
                className="flex-1 bg-indigo-600 text-white text-sm font-medium py-2 rounded-lg text-center hover:bg-indigo-500 transition-colors"
              >
                Reply via email
              </a>
              {selectedLead.phone && (
                <a
                  href={`https://wa.me/${selectedLead.phone.replace(/\D/g, '')}?text=Hi ${selectedLead.name}, thank you for reaching out to Karmic Konnexions!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 text-white text-sm font-medium py-2 rounded-lg text-center hover:bg-emerald-500 transition-colors"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
