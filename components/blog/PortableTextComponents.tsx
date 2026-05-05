import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { cn } from '@/lib/utils'

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-[400px] my-12 overflow-hidden rounded-2xl border border-slate-100">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Post Image'}
            fill
            className="object-cover"
          />
        </div>
      )
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-black text-slate-900 mt-16 mb-6 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4 leading-tight">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg text-slate-600 leading-relaxed mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-8 py-2 my-10 italic text-2xl text-slate-700 font-medium bg-slate-50 rounded-r-2xl">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a 
          href={value.href} 
          rel={rel}
          className="text-primary font-bold underline decoration-primary/30 hover:decoration-primary transition-all"
        >
          {children}
        </a>
      )
    },
  },
}
