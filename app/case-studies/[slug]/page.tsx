import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { 
  ArrowLeft, 
  Target, 
  Zap, 
  TrendingUp, 
  Users, 
  ShieldCheck,
  Quote,
  ArrowRight,
  Trophy
} from 'lucide-react'
import { sanityFetch } from '@/lib/sanity'
import { CASE_STUDY_QUERY } from '@/lib/queries'
import { portableTextComponents } from '@/components/blog/PortableTextComponents'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import RevealSection from '@/components/shared/RevealSection'
import MagneticButton from '@/components/shared/MagneticButton'

export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = await sanityFetch<any>({ query: CASE_STUDY_QUERY, params: { slug: params.slug } })
  if (!study) return { title: 'Case Study Not Found' }

  return {
    title: `${study.headline} | Case Study | Karmic Konnexions`,
    description: study.clientDescription,
  }
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = await sanityFetch<any>({ query: CASE_STUDY_QUERY, params: { slug: params.slug } })

  if (!study) {
    notFound()
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 bg-[#0B0E14] text-white overflow-hidden">
        <div className="absolute inset-0 bg-midnight opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] -mr-96 -mt-96" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealSection>
            <Link 
              href="/case-studies" 
              className="inline-flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-white transition-colors mb-16 uppercase tracking-[0.3em]"
            >
              <ArrowLeft className="w-4 h-4" />
              Success Stories
            </Link>

            <div className="flex flex-wrap gap-4 mb-10">
              <span className="px-5 py-2 rounded-xl bg-primary text-white text-[10px] font-black tracking-widest uppercase shadow-xl shadow-primary/20">
                {study.industry}
              </span>
              <span className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-black text-slate-300 tracking-widest uppercase">
                {study.service}
              </span>
            </div>

            <h1 className="text-4xl md:text-8xl font-black mb-12 leading-[1.05] max-w-5xl tracking-tight">
              {study.headline}
            </h1>
            
            <div className="grid md:grid-cols-3 gap-16 mt-20 pt-20 border-t border-white/10">
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">The Client</p>
                <p className="text-2xl font-bold text-slate-200">{study.clientDescription}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Core Result</p>
                <p className="text-2xl font-bold text-primary">{study.results?.[0]?.value || 'N/A'}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Timeline</p>
                <p className="text-2xl font-bold text-slate-200">Implemented Fast</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-24">
            {/* Left: Main Content */}
            <div className="lg:col-span-2 space-y-32">
              
              {/* Challenge */}
              <RevealSection>
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center border border-orange-100 shadow-sm">
                    <Target className="w-7 h-7 text-orange-500" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">The Challenge</h2>
                </div>
                <div className="prose prose-slate prose-xl max-w-none text-slate-600">
                  <PortableText value={study.challenge} components={portableTextComponents} />
                </div>
              </RevealSection>

              {/* Solution */}
              <RevealSection>
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10 shadow-sm">
                    <Zap className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">The Karmic Solution</h2>
                </div>
                <div className="prose prose-slate prose-xl max-w-none text-slate-600">
                  <PortableText value={study.solution} components={portableTextComponents} />
                </div>
              </RevealSection>

              {/* Impact */}
              <RevealSection>
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center border border-green-100 shadow-sm">
                    <TrendingUp className="w-7 h-7 text-green-500" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">The Impact</h2>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-8 mb-20">
                  {study.results?.slice(0, 2).map((res: any, idx: number) => (
                    <div key={idx} className={`p-12 rounded-[2.5rem] ${idx === 0 ? 'bg-slate-900 text-white' : 'bg-primary text-white'} relative overflow-hidden group`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] group-hover:bg-primary/30 transition-all" />
                      <div className="text-6xl font-black mb-6 flex items-baseline relative z-10">
                        {res.value}
                      </div>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] relative z-10">{res.metric}</p>
                    </div>
                  ))}
                </div>

                {study.quote && (
                  <div className="mt-20 p-16 rounded-[3.5rem] bg-slate-50 border border-slate-100 italic text-2xl text-slate-700 leading-relaxed relative">
                    <Quote className="absolute top-12 left-12 w-16 h-16 text-slate-200" />
                    <p className="relative z-10">
                      &ldquo;{study.quote}&rdquo;
                    </p>
                    <div className="mt-12 not-italic flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-primary font-black shadow-sm uppercase">
                        {study.quoteAttribution?.[0] || 'K'}
                      </div>
                      <div>
                        <p className="font-black text-slate-900 uppercase tracking-widest">{study.quoteAttribution}</p>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Client Feedback</p>
                      </div>
                    </div>
                  </div>
                )}
              </RevealSection>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-12">
              <aside className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 sticky top-32 shadow-xl shadow-slate-200/20">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-10 border-b border-slate-200 pb-4">Key Metrics</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-slate-200 shrink-0 shadow-sm">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Scale</p>
                      <p className="font-bold text-slate-900">Enterprise Ready</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-slate-200 shrink-0 shadow-sm">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Compliance</p>
                      <p className="font-bold text-slate-900">Full Statutory</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-slate-200 shrink-0 shadow-sm">
                      <Trophy className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">ROI Focused</p>
                      <p className="font-bold text-slate-900">High Impact</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16">
                  <MagneticButton 
                    href="/get-proposal" 
                    className="w-full bg-primary text-white py-6 !rounded-2xl flex items-center justify-center gap-4 text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/30"
                  >
                    Get Similar Results
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                  <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest mt-6">Average response time: 2 hours</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
