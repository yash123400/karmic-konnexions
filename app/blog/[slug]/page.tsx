import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Globe, 
  Link as LinkIcon, 
  MessageSquare, 
  Share2,
  ChevronRight,
  ArrowRight
} from 'lucide-react'
import { client, urlFor, sanityFetch } from '@/lib/sanity'
import { POST_QUERY } from '@/lib/queries'
import { formatDate, readingTime } from '@/lib/utils'
import { portableTextComponents } from '@/components/blog/PortableTextComponents'
import RevealSection from '@/components/shared/RevealSection'
import MagneticButton from '@/components/shared/MagneticButton'

export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await sanityFetch<any>({ query: POST_QUERY, params: { slug: params.slug } })
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | Karmic Konnexions`,
    description: post.excerpt,
    openGraph: {
      images: [urlFor(post.coverImage).width(1200).height(630).url()],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await sanityFetch<any>({ query: POST_QUERY, params: { slug: params.slug } })

  if (!post) {
    notFound()
  }

  return (
    <main className="pt-32 pb-24 bg-white">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Meta Row */}
        <RevealSection className="mb-8">
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link href="/blog" className="flex items-center gap-2 text-primary font-black uppercase tracking-widest hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-4 h-4" />
              Blog Home
            </Link>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <span className="px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-slate-400 font-bold">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center gap-2 text-slate-400 font-bold">
              <Clock className="w-4 h-4" />
              {readingTime(post.body)} Min Read
            </div>
          </div>
        </RevealSection>

        {/* Title */}
        <RevealSection className="mb-16">
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] max-w-5xl tracking-tight">
            {post.title}
          </h1>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 relative overflow-hidden">
               {/* Author avatar placeholder */}
               <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                 <User className="w-8 h-8 text-primary" />
               </div>
            </div>
            <div>
              <p className="text-lg font-black text-slate-900 uppercase tracking-widest">{post.author}</p>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Thought Leadership</p>
            </div>
          </div>
        </RevealSection>

        {/* Featured Image */}
        <RevealSection className="mb-24">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[3rem] shadow-2xl">
            <Image
              src={urlFor(post.coverImage).width(1600).height(800).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </RevealSection>

        <div className="grid lg:grid-cols-4 gap-20">
          {/* TOC Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-12">
              <div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 border-b border-slate-100 pb-4">Table of Contents</h4>
                <nav className="space-y-6">
                   {/* Simplified dynamic TOC could go here */}
                  <p className="text-xs font-bold text-slate-400 leading-relaxed italic">
                    Reading through: {post.title}
                  </p>
                </nav>
              </div>

              <div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 border-b border-slate-100 pb-4">Share Insights</h4>
                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/20 transition-all group">
                    <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/20 transition-all group">
                    <LinkIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#25D366] hover:text-white hover:shadow-xl hover:shadow-[#25D366]/20 transition-all group">
                    <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Article Body */}
          <div className="lg:col-span-3">
            <div className="max-w-none">
              <PortableText 
                value={post.body} 
                components={portableTextComponents} 
              />

              {/* Related CTA */}
              <div className="mt-32 p-12 md:p-20 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden group">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-all duration-700" />
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Implement these insights in your business.</h3>
                  <p className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-medium">
                    Our team of specialists can help you implement the strategies discussed in our articles and more.
                  </p>
                  <div className="flex">
                    <MagneticButton 
                      href="/contact" 
                      className="bg-primary text-white px-12 py-6 !rounded-2xl flex items-center gap-4 text-sm font-black uppercase tracking-widest shadow-2xl shadow-primary/40"
                    >
                      Talk to our Specialists
                      <ArrowRight className="w-5 h-5" />
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Suggested Reading Footer */}
      <section className="mt-40 py-32 border-t border-slate-100 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
            <div>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Recommended Reading</h3>
              <p className="text-slate-500 font-bold mt-2">More insights from the Karmic Editorial Team.</p>
            </div>
            <Link href="/blog" className="px-8 py-4 rounded-2xl bg-white border border-slate-200 text-xs font-black text-primary uppercase tracking-widest flex items-center gap-3 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group">
              Explore All Insights
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Placeholder for related articles */}
            <p className="text-slate-400 italic font-bold">More articles coming soon.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
