export const dynamic = 'force-dynamic'
import { BookOpen, FileText, MessageSquare, Megaphone, Users, Briefcase, Image, ExternalLink } from 'lucide-react'

const contentTypes = [
  {
    title: 'Blog Post',
    description: 'Write an article. Add a featured image, category, and publish instantly.',
    icon: BookOpen,
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
    studioUrl: '/studio/desk/blogPost',
    tips: ['Use a landscape image (1200×630px recommended)', 'Add a meta description for SEO', 'Choose a clear category'],
  },
  {
    title: 'Case Study',
    description: 'Document a client success story with results and images.',
    icon: FileText,
    color: 'bg-violet-50 border-violet-200',
    iconColor: 'text-violet-600',
    studioUrl: '/studio/desk/caseStudy',
    tips: ['Include measurable results', 'Add a client photo or logo if permitted', 'Keep it under 500 words'],
  },
  {
    title: 'Testimonial',
    description: 'Add a client quote. It appears on the homepage and service pages.',
    icon: MessageSquare,
    color: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-600',
    studioUrl: '/studio/desk/testimonial',
    tips: ['Use exact client words only', 'Always include their role and company'],
  },
  {
    title: 'Announcement',
    description: 'Post a banner message on the website (e.g. "New service launched").',
    icon: Megaphone,
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-600',
    studioUrl: '/studio/desk/announcement',
    tips: ['Keep it under 120 characters', 'Set an expiry date so it auto-hides'],
  },
  {
    title: 'Team Member',
    description: 'Add or update a team member on the About page.',
    icon: Users,
    color: 'bg-pink-50 border-pink-200',
    iconColor: 'text-pink-600',
    studioUrl: '/studio/desk/teamMember',
    tips: ['Use a square or portrait photo', 'Add LinkedIn profile URL'],
  },
  {
    title: 'Job Posting',
    description: 'Post a job opening. It appears live on the Careers page.',
    icon: Briefcase,
    color: 'bg-teal-50 border-teal-200',
    iconColor: 'text-teal-600',
    studioUrl: '/studio/desk/jobPosting',
    tips: ['Toggle "Active" off to hide without deleting', 'Include salary range to attract better applicants'],
  },
]

export default function ContentPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Publish Content</h1>
        <p className="text-gray-500 mt-1">
          Choose what to create. The editor will open in a new tab — publish there to go live instantly.
        </p>
      </div>

      {/* Image upload guide */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Image className="w-4 h-4 text-indigo-600" />
          </div>
          <div>
            <h2 className="font-semibold text-indigo-900 mb-2">How to add images to content</h2>
            <ol className="text-sm text-indigo-800 space-y-1 list-decimal list-inside">
              <li>Open any content type below — the editor opens in a new tab</li>
              <li>Click the image field (marked with a camera icon)</li>
              <li>Click &quot;Upload&quot; and choose any photo from your computer</li>
              <li>Drag the crop handles to pick the best part of the image</li>
              <li>Click &quot;Publish&quot; in the top right — the image goes live immediately</li>
            </ol>
            <p className="text-xs text-indigo-600 mt-3">
              Best image sizes: Blog featured image 1200×630px · Team photo 400×400px · Case study 800×500px
            </p>
          </div>
        </div>
      </div>

      {/* Content type grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contentTypes.map(type => (
          <a
            key={type.title}
            href={type.studioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`block rounded-xl border p-5 ${type.color} hover:shadow-md transition-shadow group`}
          >
            <div className="flex items-start justify-between mb-3">
              <type.icon className={`w-6 h-6 ${type.iconColor}`} />
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{type.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{type.description}</p>
            <div className="space-y-1">
              {type.tips.map(tip => (
                <p key={tip} className="text-xs text-gray-500 flex items-start gap-1">
                  <span className="text-gray-400 mt-0.5">•</span> {tip}
                </p>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
