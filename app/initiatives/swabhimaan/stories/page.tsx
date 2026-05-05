import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Quote, MapPin, Calendar } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import RevealSection from '@/components/shared/RevealSection'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Success Stories | Swabhimaan | Karmic Konnexions',
  description: 'Real stories of transformation from our Swabhimaan entrepreneurs.'
}

const stories = [
  {
    name: "Meera Devi",
    location: "Rural Haryana",
    business: "Sustainable Handicrafts",
    quote: "Karmic Konnexions didn't just give me training; they gave me the confidence to lead my own life.",
    image: "/images/initiatives/story-1.jpg", // Ensure this exists or use a high-quality placeholder
    year: "2023"
  },
  {
    name: "Sita Sharma",
    location: "Western Rajasthan",
    business: "Agro-Processing Unit",
    quote: "With the market access provided by Swabhimaan, our local produce now reaches urban markets at fair prices.",
    image: "/images/initiatives/story-2.jpg",
    year: "2024"
  },
  {
    name: "Anjali Singh",
    location: "Uttar Pradesh",
    business: "Digital Literacy Center",
    quote: "Technology was a dream in our village. Today, I teach 50 children every day using the Swabhimaan resources.",
    image: "/images/initiatives/story-3.jpg",
    year: "2024"
  }
];

export default function SwabhimaanStoriesPage() {
  return (
    <main className="pt-16 min-h-screen bg-white">
      <section className="bg-white pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <Link href="/initiatives/swabhimaan" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-primary transition-colors mb-8 uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4" />
              Back to Swabhimaan
           </Link>
        </div>
      </section>

      <PageHero
        variant="gradient"
        gradient="indigo"
        eyebrow="Voices of Resilience"
        title={"Human Stories\nBehind the Impact."}
        subtitle="Explore the individual journeys of the women entrepreneurs who are redefining what is possible in their communities."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {stories.map((story, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <div className="group flex flex-col h-full bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/5">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div className="absolute inset-0 bg-slate-200 animate-pulse" /> {/* Loading skeleton */}
                    {/* 
                      Note: Using a fallback color div if image isn't found. 
                      In production, these should be real images from Sanity or /public.
                    */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        {story.location}
                      </div>
                      <h3 className="text-2xl font-black text-white">{story.name}</h3>
                      <p className="text-primary font-bold text-sm">{story.business}</p>
                    </div>
                  </div>
                  
                  <div className="p-10 flex-grow flex flex-col justify-between">
                    <div className="relative">
                      <Quote className="w-10 h-10 text-primary/10 absolute -top-4 -left-4" />
                      <p className="text-lg text-slate-600 italic leading-relaxed relative z-10">
                        "{story.quote}"
                      </p>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-slate-200 flex items-center justify-between text-xs font-black text-slate-400 uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Cohort {story.year}
                      </div>
                      <span className="text-primary hover:underline cursor-pointer">Read Full Story</span>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
