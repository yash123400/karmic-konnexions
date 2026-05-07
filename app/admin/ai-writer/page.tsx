'use client'
import { useState } from 'react'
import { Sparkles, Copy, ExternalLink, Loader2 } from 'lucide-react'

const toneOptions = [
  'professional and authoritative',
  'warm and approachable',
  'data-driven and analytical',
  'thought leadership',
]

export default function AIWriterPage() {
  const [topic, setTopic] = useState('')
  const [keywords, setKeywords] = useState('')
  const [tone, setTone] = useState('professional and authoritative')
  const [draft, setDraft] = useState('')
  const [loading, setLoading] = useState(false)

  const generateDraft = async () => {
    if (!topic.trim()) return
    setLoading(true)
    setDraft('')
    const res = await fetch('/api/admin/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'draft_blog', data: { topic, keywords, tone } }),
    })
    const result = await res.json()
    if (result.error) {
      setDraft(`Error: ${result.error}`)
    } else {
      setDraft(result.draft || 'No content returned.')
    }
    setLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-violet-100 rounded-lg flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-violet-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Blog Writer</h1>
          <p className="text-gray-500 text-sm">Generate a blog draft in seconds. Edit in Sanity, then publish.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Blog topic *</label>
          <input
            value={topic}
            onChange={e => setTopic(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-400"
            placeholder="e.g. Why Indian SMEs are outsourcing HR in 2025"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Target keywords (optional)</label>
          <input
            value={keywords}
            onChange={e => setKeywords(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-400"
            placeholder="e.g. HR outsourcing India, HRO services, cost savings"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Tone</label>
          <div className="flex flex-wrap gap-2">
            {toneOptions.map(t => (
              <button
                key={t}
                onClick={() => setTone(t)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  tone === t
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'border-gray-200 text-gray-600 hover:border-indigo-300'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={generateDraft}
          disabled={loading || !topic.trim()}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
          {loading ? 'Writing...' : 'Generate draft'}
        </button>
      </div>

      {draft && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Generated draft</h2>
            <div className="flex gap-2">
              <button
                onClick={() => navigator.clipboard.writeText(draft)}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 border border-gray-200 rounded-lg px-3 py-1.5 transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                Copy all
              </button>
              <a
                href="/studio/desk/blogPost"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm bg-indigo-600 text-white rounded-lg px-3 py-1.5 hover:bg-indigo-500 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open in Sanity
              </a>
            </div>
          </div>
          <div className="prose prose-sm max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 leading-relaxed bg-gray-50 rounded-lg p-4">
              {draft}
            </pre>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            ✦ AI-generated draft. Review, edit, and add your own insights before publishing.
          </p>
        </div>
      )}
    </div>
  )
}
