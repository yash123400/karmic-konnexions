'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, FileText, BookOpen, Users,
  MessageSquare, Briefcase, ExternalLink, Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/leads', label: 'Leads & Enquiries', icon: Users, exact: false },
  { href: '/admin/proposals', label: 'Proposals', icon: Briefcase, exact: false },
  { href: '/admin/content', label: 'Content', icon: FileText, exact: false },
  { href: '/admin/ai-writer', label: 'AI Blog Writer', icon: Sparkles, exact: false },
]

const studioLinks = [
  { href: '/studio/desk/blogPost', label: 'Blog Posts', icon: BookOpen },
  { href: '/studio/desk/caseStudy', label: 'Case Studies', icon: FileText },
  { href: '/studio/desk/testimonial', label: 'Testimonials', icon: MessageSquare },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-[#0F172A] min-h-screen flex flex-col flex-shrink-0">
      <div className="px-6 py-5 border-b border-white/10">
        <p className="text-white font-bold text-base">Karmic Konnexions</p>
        <p className="text-indigo-400 text-xs mt-0.5">Staff Portal</p>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider px-3 mb-2">
          Overview
        </p>
        {navItems.map(item => {
          const active = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                active
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              )}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {item.label}
            </Link>
          )
        })}

        <div className="pt-4">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider px-3 mb-2">
            Publish Content
          </p>
          {studioLinks.map(item => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {item.label}
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </a>
          ))}
        </div>
      </nav>

      <div className="px-4 py-4 border-t border-white/10">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-xs transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
          View live website
        </a>
      </div>
    </aside>
  )
}
