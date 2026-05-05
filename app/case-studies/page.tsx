import { sanityFetch } from '@/lib/sanity'
import { ALL_CASE_STUDIES_QUERY } from '@/lib/queries'
import PageHero from '@/components/shared/PageHero'
import CaseStudyGrid from '@/components/case-studies/CaseStudyGrid'
import MagneticButton from '@/components/shared/MagneticButton'
import { ArrowRight } from 'lucide-react'

export const revalidate = 60

export const metadata = {
  title: 'Case Studies | Karmic Konnexions',
  description: 'Real results from real clients. Explore how Karmic Konnexions has helped businesses across 20+ industries save costs and scale efficiently.',
}

export default async function CaseStudiesPage() {
  const studies = await sanityFetch<any[]>({ query: ALL_CASE_STUDIES_QUERY })

  return (
    <main className="pt-16">
      <PageHero
        eyebrow="Client Success Stories"
        title={"Real Businesses.\nMeasurable Results."}
        subtitle="Explore how we've helped organisations across 20+ industries reduce costs, eliminate compliance risk, and scale their operations."
      />

      {studies && studies.length > 0 ? (
        <CaseStudyGrid studies={studies} />
      ) : (
        <section className="py-32 text-center bg-white">
          <div className="max-w-2xl mx-auto px-4">
            <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-10">
              <ArrowRight className="w-10 h-10 text-primary rotate-45" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-6">Documentation in Progress</h3>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed">
              We&apos;re currently documenting our most recent success stories in Logistics, Manufacturing, and IT. Check back soon for detailed metrics and ROI analysis.
            </p>
            <div className="flex justify-center">
              <MagneticButton href="/contact" className="bg-primary text-white px-10 py-5 !rounded-2xl flex items-center gap-3">
                Request a Portfolio
                <span>→</span>
              </MagneticButton>
            </div>
          </div>
        </section>
      )}

      {/* Trust Bar */}
      <section className="py-24 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">The Karmic Impact</p>
          <div className="h-px w-20 bg-primary/20 mx-auto mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <p className="text-4xl font-black text-slate-900 mb-2">500+</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Clients Served</p>
            </div>
            <div>
              <p className="text-4xl font-black text-slate-900 mb-2">20+</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Industries</p>
            </div>
            <div>
              <p className="text-4xl font-black text-slate-900 mb-2">35%</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Avg. Cost Saving</p>
            </div>
            <div>
              <p className="text-4xl font-black text-slate-900 mb-2">Zero</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Compliance Risks</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
