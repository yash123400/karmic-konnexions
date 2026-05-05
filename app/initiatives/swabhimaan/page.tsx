import { Metadata } from 'next'
import { 
  Sprout, 
  Users, 
  Map, 
  Star, 
  Target, 
  CheckCircle2, 
  ArrowRight,
  HandHeart,
  Store,
  BookOpen,
  PieChart
} from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import RevealSection from '@/components/shared/RevealSection'
import MagneticButton from '@/components/shared/MagneticButton'
import SwabhimaanCarousel from '@/components/initiatives/SwabhimaanCarousel'
import { sanityFetch } from '@/lib/sanity'
import { SWABHIMAAN_STORIES_QUERY } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'Swabhimaan | Empowering Rural Women Entrepreneurs',
  description: 'Karmic Konnexions flagship social initiative supporting rural women with skills, resources, and market access.',
}

export const revalidate = 60

export default async function SwabhimaanPage() {
  const stories = await sanityFetch<any[]>({ query: SWABHIMAAN_STORIES_QUERY })

  const structure = [
    {
      icon: BookOpen,
      title: "Skills & Training",
      desc: "Comprehensive business and financial literacy training tailored for rural contexts."
    },
    {
      icon: Store,
      title: "Market Access",
      desc: "Connecting rural entrepreneurs to urban and digital marketplaces for sustainable income."
    },
    {
      icon: HandHeart,
      title: "Community Support",
      desc: "Building a resilient network of women who mentor and support each other's growth."
    },
    {
      icon: PieChart,
      title: "Micro-Resourcing",
      desc: "Providing tools, materials, and small-scale resources to kickstart local ventures."
    }
  ]

  return (
    <main className="pt-16">
      <PageHero
        eyebrow="Swabhimaan Initiative"
        title={"Empowerment\nThrough Enterprise."}
        subtitle="Swabhimaan is our commitment to grassroots economic impact — helping rural women build self-reliant futures through sustainable businesses."
      />

      {/* Mission Statement */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-tight tracking-tight">
              Self-Respect and Self-Reliance.
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              We believe that when a woman in a rural community becomes an entrepreneur, she doesn&apos;t just change her own life — she transforms her entire village. Swabhimaan provides the bridge between potential and prosperity.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <RevealSection delay={0.1}>
              <div className="space-y-4">
                <div className="text-7xl font-black text-primary">500+</div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Women Empowered</p>
              </div>
            </RevealSection>
            <RevealSection delay={0.2}>
              <div className="space-y-4">
                <div className="text-7xl font-black text-white">12</div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">States Reached</p>
              </div>
            </RevealSection>
            <RevealSection delay={0.3}>
              <div className="space-y-4">
                <div className="text-7xl font-black text-white">50+</div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Local Micro-Businesses</p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Programme Structure */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">How Swabhimaan Works.</h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">Our programme is built on four core pillars designed to take rural talent from training to sustainable entrepreneurship.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {structure.map((item, idx) => (
              <RevealSection key={item.title} delay={idx * 0.1}>
                <div className="h-full p-12 bg-white rounded-[2.5rem] border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500 shadow-sm">
                    <item.icon className="w-8 h-8 text-slate-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-widest">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Stories of Impact.</h2>
            <p className="text-xl text-slate-500 font-bold">Real stories of resilience and transformation from across India.</p>
          </div>

          {stories && stories.length > 0 ? (
            <SwabhimaanCarousel stories={stories} />
          ) : (
            <div className="bg-white rounded-[3rem] p-20 border border-slate-100 text-center">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8">
                <Users className="w-10 h-10 text-primary opacity-20" />
              </div>
              <p className="text-slate-400 font-bold italic">Stories are currently being curated for the visual gallery.</p>
            </div>
          )}
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="bg-primary rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group shadow-2xl shadow-primary/30">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:bg-white/20 transition-all duration-700" />
              
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tight">Be Part of the Journey.</h2>
                <p className="text-white/80 text-xl md:text-2xl mb-16 font-medium max-w-2xl mx-auto leading-relaxed">
                  Join us in our mission to create a sustainable ecosystem for rural entrepreneurship. Together, we can amplify impact.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <MagneticButton 
                    href="/contact?type=swabhimaan-partner" 
                    className="bg-white text-primary px-12 py-6 !rounded-2xl flex items-center gap-4 text-sm font-black uppercase tracking-widest shadow-2xl group"
                  >
                    Partner with Us
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </MagneticButton>
                  <MagneticButton 
                    href="/contact?type=swabhimaan-donate" 
                    className="border-white/20 text-white hover:bg-white/10 px-12 py-6 !rounded-2xl text-sm font-black uppercase tracking-widest border-2"
                  >
                    Join the Mission
                  </MagneticButton>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </main>
  )
}
