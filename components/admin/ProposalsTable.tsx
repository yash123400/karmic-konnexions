'use client'
import { useState, useMemo } from 'react'
import { Search, Download, Mail, Phone, Calendar, Filter, Building2 } from 'lucide-react'

type Proposal = {
  id: string
  name: string
  designation?: string
  email: string
  phone?: string
  company_name: string
  industry?: string
  company_size?: string
  location?: string
  services?: string[]
  engagement_model?: string
  preferred_call_time?: string
  referral_source?: string
  notes?: string
  created_at: string
}

export default function ProposalsTable({ proposals }: { proposals: Proposal[] }) {
  const [search, setSearch] = useState('')
  const [serviceFilter, setServiceFilter] = useState('all')
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null)

  const allServices = useMemo(() => {
    const s = new Set(
      proposals.flatMap(p => p.services ?? []).filter(Boolean)
    )
    return Array.from(s)
  }, [proposals])

  const filtered = useMemo(() => proposals.filter(p => {
    const matchesSearch =
      !search ||
      p.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.email?.toLowerCase().includes(search.toLowerCase()) ||
      p.company_name?.toLowerCase().includes(search.toLowerCase())
    const matchesService =
      serviceFilter === 'all' || (p.services ?? []).includes(serviceFilter)
    return matchesSearch && matchesService
  }), [proposals, search, serviceFilter])

  const exportCSV = () => {
    const headers = [
      'Name', 'Designation', 'Email', 'Phone',
      'Company', 'Industry', 'Company Size', 'Location',
      'Services', 'Engagement Model', 'Preferred Call Time',
      'Referral Source', 'Notes', 'Date',
    ]
    const rows = filtered.map(p => [
      p.name,
      p.designation ?? '',
      p.email,
      p.phone ?? '',
      p.company_name,
      p.industry ?? '',
      p.company_size ?? '',
      p.location ?? '',
      (p.services ?? []).join(' | '),
      p.engagement_model ?? '',
      p.preferred_call_time ?? '',
      p.referral_source ?? '',
      (p.notes ?? '').replace(/,/g, ' '),
      new Date(p.created_at).toLocaleDateString('en-IN'),
    ])
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `karmic-proposals-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
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
            {allServices.map(s => <option key={s} value={s}>{s}</option>)}
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
              <th className="text-left px-4 py-3 font-medium text-gray-600">Contact</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Company</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Services Interested</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Size</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Date</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-12 text-gray-400">
                  No proposals found.
                </td>
              </tr>
            ) : filtered.map(p => (
              <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <p className="font-medium text-gray-900">{p.name}</p>
                  {p.designation && <p className="text-xs text-gray-500">{p.designation}</p>}
                  <a
                    href={`mailto:${p.email}`}
                    className="flex items-center gap-1 text-indigo-600 hover:underline text-xs mt-1"
                  >
                    <Mail className="w-3 h-3" />{p.email}
                  </a>
                  {p.phone && (
                    <a
                      href={`tel:${p.phone}`}
                      className="flex items-center gap-1 text-gray-500 hover:underline text-xs mt-0.5"
                    >
                      <Phone className="w-3 h-3" />{p.phone}
                    </a>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-gray-400 flex-shrink-0" />
                    <span className="font-medium text-gray-900">{p.company_name}</span>
                  </div>
                  {p.industry && <p className="text-xs text-gray-500 mt-0.5">{p.industry}</p>}
                  {p.location && <p className="text-xs text-gray-400">{p.location}</p>}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {(p.services ?? []).map(s => (
                      <span key={s} className="inline-block bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full text-xs font-medium">
                        {s}
                      </span>
                    ))}
                    {(!p.services || p.services.length === 0) && (
                      <span className="text-gray-400 text-xs">—</span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 text-xs text-gray-500">
                  {p.company_size ?? '—'}
                </td>
                <td className="px-4 py-3 text-gray-500 text-xs">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(p.created_at).toLocaleDateString('en-IN', {
                      day: 'numeric', month: 'short', year: 'numeric',
                    })}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => setSelectedProposal(p)}
                    className="text-xs text-indigo-600 hover:underline"
                  >
                    View details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail modal */}
      {selectedProposal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProposal(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-xl max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-900">{selectedProposal.name}</h3>
                <p className="text-sm text-gray-500">{selectedProposal.company_name}</p>
              </div>
              <button
                onClick={() => setSelectedProposal(null)}
                className="text-gray-400 hover:text-gray-600 text-lg leading-none"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-3">
                {selectedProposal.industry && (
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Industry</p>
                    <p className="text-gray-700">{selectedProposal.industry}</p>
                  </div>
                )}
                {selectedProposal.company_size && (
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Company Size</p>
                    <p className="text-gray-700">{selectedProposal.company_size}</p>
                  </div>
                )}
                {selectedProposal.engagement_model && (
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Engagement Model</p>
                    <p className="text-gray-700">{selectedProposal.engagement_model}</p>
                  </div>
                )}
                {selectedProposal.preferred_call_time && (
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Preferred Call Time</p>
                    <p className="text-gray-700">{selectedProposal.preferred_call_time}</p>
                  </div>
                )}
                {selectedProposal.referral_source && (
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">How They Found Us</p>
                    <p className="text-gray-700">{selectedProposal.referral_source}</p>
                  </div>
                )}
              </div>

              {selectedProposal.services && selectedProposal.services.length > 0 && (
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Services Interested In</p>
                  <div className="flex flex-wrap gap-1">
                    {selectedProposal.services.map(s => (
                      <span key={s} className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full text-xs font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProposal.notes && (
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Notes</p>
                  <div className="bg-gray-50 rounded-lg p-3 text-gray-700 leading-relaxed">
                    {selectedProposal.notes}
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-5">
              <a
                href={`mailto:${selectedProposal.email}?subject=Re: Your proposal request to Karmic Konnexions`}
                className="flex-1 bg-indigo-600 text-white text-sm font-medium py-2 rounded-lg text-center hover:bg-indigo-500 transition-colors"
              >
                Reply via email
              </a>
              {selectedProposal.phone && (
                <a
                  href={`https://wa.me/${selectedProposal.phone.replace(/\D/g, '')}?text=Hi ${selectedProposal.name}, thank you for your proposal request to Karmic Konnexions!`}
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
