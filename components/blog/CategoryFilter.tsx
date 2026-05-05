'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PostCard from './PostCard'
import { cn } from '@/lib/utils'

interface CategoryFilterProps {
  posts: any[]
}

const CATEGORIES = [
  'All',
  'HR & Payroll',
  'Finance',
  'CRM & Sales',
  'Marketing',
  'E-Learning',
  'Outsourcing',
  'General'
]

export default function CategoryFilter({ posts }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return posts
    return posts.filter(post => post.category === activeCategory)
  }, [posts, activeCategory])

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border",
                activeCategory === cat
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105"
                  : "bg-white border-slate-100 text-slate-400 hover:border-primary/30 hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-20 text-center bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
            <p className="text-slate-400 font-bold">No articles found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
