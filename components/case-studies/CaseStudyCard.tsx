import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'

interface CaseStudyCardProps {
  study: {
    headline: string
    slug: { current: string }
    industry: string
    service: string
    clientDescription: string
    featured: boolean
    results: any[]
  }
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group h-full bg-white rounded-[2rem] p-10 border-b-8 border-primary shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative flex flex-col"
    >
      {study.featured && (
        <div className="absolute -top-4 right-8 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg z-10">
          Featured Success
        </div>
      )}
      
      <div className="flex flex-wrap justify-between items-start gap-4 mb-10">
        <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-primary/5 text-primary border border-primary/10">
          {study.industry}
        </span>
        <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-slate-50 text-slate-400 border border-slate-100">
          {study.service}
        </span>
      </div>

      <Link href={`/case-studies/${study.slug.current}`}>
        <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight group-hover:text-primary transition-colors">
          &quot;{study.headline}&quot;
        </h3>
      </Link>
      
      <div className="flex-1">
        <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
          {study.clientDescription}
        </p>
        
        {study.results?.[0] && (
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-8">
            <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{study.results[0].metric}</p>
            <p className="text-lg font-black text-slate-900">{study.results[0].value}</p>
          </div>
        )}
      </div>

      <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
        <Link 
          href={`/case-studies/${study.slug.current}`}
          className="text-sm font-black text-slate-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2 uppercase tracking-widest"
        >
          Read Case Study
          <ArrowRight className="w-4 h-4 text-primary" />
        </Link>
        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  )
}
