'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CaseStudyCard from './CaseStudyCard'
import { cn } from '@/lib/utils'
import { Filter, Search } from 'lucide-react'

interface CaseStudyGridProps {
  studies: any[]
}

const INDUSTRIES = ["All", "Logistics", "Manufacturing", "Healthcare", "IT", "BFSI", "Retail", "Startups"]

export default function CaseStudyGrid({ studies }: CaseStudyGridProps) {
  const [activeIndustry, setActiveIndustry] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredStudies = useMemo(() => {
    return studies.filter(study => {
      const matchesIndustry = activeIndustry === "All" || study.industry === activeIndustry
      const matchesSearch = study.headline.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           study.clientDescription.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesIndustry && matchesSearch
    })
  }, [studies, activeIndustry, searchQuery])

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Bar */}
        <div className="mb-20 space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-slate-50/50 p-8 rounded-[2rem] border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Filter className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs">Filter Success Stories</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Refine by industry or keyword</p>
              </div>
            </div>
            <div className="relative group flex-1 max-w-md">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search by client, result or challenge..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all w-full text-sm font-medium"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {INDUSTRIES.map(i => (
              <button 
                key={i}
                onClick={() => setActiveIndustry(i)}
                className={cn(
                  "px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border",
                  activeIndustry === i 
                    ? "bg-primary border-primary text-white shadow-xl shadow-primary/20 scale-105" 
                    : "bg-white border-slate-100 text-slate-400 hover:border-primary/30 hover:text-primary"
                )}
              >
                {i}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                key={study._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <CaseStudyCard study={study} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredStudies.length === 0 && (
          <div className="py-32 text-center bg-slate-50 rounded-[4rem] border border-dashed border-slate-200">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
              <Search className="w-8 h-8 text-slate-200" />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-2">No matches found</h4>
            <p className="text-slate-400 font-bold max-w-sm mx-auto">
              Try adjusting your filters or search terms to find relevant success stories.
            </p>
            <button 
              onClick={() => {setActiveIndustry("All"); setSearchQuery("");}}
              className="mt-8 text-primary font-black text-xs uppercase tracking-widest hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
