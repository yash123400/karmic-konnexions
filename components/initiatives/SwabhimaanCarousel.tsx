'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { Users } from 'lucide-react'

interface SwabhimaanCarouselProps {
  stories: any[]
}

export default function SwabhimaanCarousel({ stories }: SwabhimaanCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay()])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-8">
        {stories.map((story) => (
          <div key={story._id} className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_33.33%] min-w-0">
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 h-full flex flex-col items-center text-center group hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
              <div className="w-28 h-28 rounded-full bg-slate-100 mb-8 border-4 border-white shadow-xl overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                {story.photo ? (
                  <Image
                    src={story.photo.asset.url}
                    alt={story.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Users className="absolute inset-0 m-auto w-10 h-10 text-slate-200" />
                )}
              </div>
              <div className="space-y-1 mb-6">
                <h4 className="text-2xl font-black text-slate-900 leading-tight">{story.name}</h4>
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{story.location}</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed flex-1 italic mb-8">
                &ldquo;{story.quote}&rdquo;
              </p>
              <div className="pt-6 border-t border-slate-50 w-full">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">
                  Business: {story.businessDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
