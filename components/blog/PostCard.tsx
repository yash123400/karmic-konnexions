import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { formatDate } from '@/lib/utils'
import { motion } from 'framer-motion'

interface PostCardProps {
  post: {
    title: string
    slug: { current: string }
    excerpt: string
    category: string
    author: string
    publishedAt: string
    coverImage: any
  }
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full"
    >
      <Link href={`/blog/${post.slug.current}`} className="block relative h-64 overflow-hidden">
        {post.coverImage ? (
          <Image
            src={urlFor(post.coverImage).width(800).height(500).url()}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-slate-100 flex items-center justify-center">
            <span className="text-slate-300 font-bold uppercase tracking-widest text-xs">No Image</span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/20 text-[10px] font-black text-primary uppercase tracking-widest shadow-sm">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="p-8 flex flex-col flex-1">
        <Link href={`/blog/${post.slug.current}`}>
          <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200" />
            <div>
              <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{post.author}</p>
              <p className="text-[10px] text-slate-400 font-bold">{formatDate(post.publishedAt)}</p>
            </div>
          </div>
          <Link 
            href={`/blog/${post.slug.current}`}
            className="text-xs font-black text-primary uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
          >
            Read More
            <span>→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
