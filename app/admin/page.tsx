import { createClient } from '@supabase/supabase-js'
import { BookOpen, FileText, Users, MessageSquare, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { client as sanityClient } from '@/lib/sanity'

interface Lead {
  id: string
  name: string
  email: string
  service?: string
  created_at: string
}

async function getDashboardStats() {
  let leadsCount = 0
  let proposalsCount = 0
  let recentLeads: Lead[] = []

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (supabaseUrl && supabaseKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey)
      const [leadsRes, proposalsRes, recentRes] = await Promise.all([
        supabase.from('leads').select('*', { count: 'exact', head: true }),
        supabase.from('proposals').select('*', { count: 'exact', head: true }),
        supabase
          .from('leads')
          .select('id, name, email, service, created_at')
          .order('created_at', { ascending: false })
          .limit(5),
      ])
      leadsCount = leadsRes.count ?? 0
      proposalsCount = proposalsRes.count ?? 0
      recentLeads = (recentRes.data ?? []) as Lead[]
    } catch {
      // Supabase unavailable — show zeros
    }
  }

  let blogCount = 0
  let caseStudyCount = 0
  try {
    ;[blogCount, caseStudyCount] = await Promise.all([
      sanityClient.fetch(`count(*[_type == "blogPost"])`),
      sanityClient.fetch(`count(*[_type == "caseStudy"])`),
    ])
  } catch {
    // Sanity unavailable — show zeros
  }

  return { leadsCount, proposalsCount, blogCount, caseStudyCount, recentLeads }
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats()

  const statCards = [
    { label: 'Total Leads', value: stats.leadsCount, icon: Users, color: 'bg-blue-50 text-blue-600', link: '/admin/leads' },
    { label: 'Proposals', value: stats.proposalsCount, icon: FileText, color: 'bg-violet-50 text-violet-600', link: '/admin/proposals' },
    { label: 'Blog Posts', value: stats.blogCount, icon: BookOpen, color: 'bg-emerald-50 text-emerald-600', link: '/studio/desk/blogPost' },
    { label: 'Case Studies', value: stats.caseStudyCount, icon: MessageSquare, color: 'bg-orange-50 text-orange-600', link: '/studio/desk/caseStudy' },
  ]

  const quickActions = [
    { label: 'Write a blog post', href: '/studio/desk/blogPost', icon: BookOpen, description: 'Create and publish a new article', external: true },
    { label: 'Add a case study', href: '/studio/desk/caseStudy', icon: FileText, description: 'Document a client success story', external: true },
    { label: 'Add testimonial', href: '/studio/desk/testimonial', icon: MessageSquare, description: 'Add a client quote', external: true },
    { label: 'View all leads', href: '/admin/leads', icon: Users, description: 'See enquiries from the website', external: false },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back. Here&apos;s what&apos;s happening.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map(card => (
          <a
            key={card.label}
            href={card.link}
            className="bg-white rounded-xl border border-gray-200 p-5 hover:border-indigo-300 hover:shadow-sm transition-all"
          >
            <div className={`inline-flex p-2 rounded-lg ${card.color} mb-3`}>
              <card.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            <p className="text-sm text-gray-500 mt-0.5">{card.label}</p>
          </a>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Quick actions */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Quick actions</h2>
          <div className="space-y-3">
            {quickActions.map(action => (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="flex-shrink-0 w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                  <action.icon className="w-4 h-4 text-indigo-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{action.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{action.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Recent leads */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Recent leads</h2>
            <Link href="/admin/leads" className="text-xs text-indigo-600 hover:underline">
              View all
            </Link>
          </div>
          {stats.recentLeads.length === 0 ? (
            <p className="text-sm text-gray-400 py-4 text-center">No leads yet.</p>
          ) : (
            <div className="space-y-3">
              {stats.recentLeads.map(lead => (
                <div key={lead.id} className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 text-indigo-600 font-semibold text-sm">
                    {lead.name?.[0]?.toUpperCase() ?? '?'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{lead.name}</p>
                    <p className="text-xs text-gray-500 truncate">{lead.email}</p>
                    {lead.service && (
                      <span className="inline-block mt-1 text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">
                        {lead.service}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 flex-shrink-0">
                    {new Date(lead.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
