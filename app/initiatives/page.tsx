import { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowRight, 
  Heart, 
  Users, 
  Sprout, 
  Globe, 
  HandHeart,
  ChevronRight
} from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import RevealSection from '@/components/shared/RevealSection'
import MagneticButton from '@/components/shared/MagneticButton'

export const metadata: Metadata = {
  title: 'Initiatives | Karmic Konnexions',
  description: 'Karmic Konnexions\' social and community initiatives — including Swabhimaan, our programme for rural women entrepreneurs.'
}

export default function InitiativesHubPage() {
  return (
    <main className="pt-16">
      <PageHero
        eyebrow="Our Initiatives"
        title={"Business with\nPurpose."}
        subtitle="Beyond commercial services, Karmic Konnexions runs initiatives that create impact for communities, entrepreneurs, and underserved populations."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Swabhimaan Featured Card */}
          <RevealSection>
            <div className="group relative rounded-[3rem] overflow-hidden bg-[#0B0E14] text-white p-8 md:p-20 shadow-2xl">
              {/* Background Accents */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] -ml-40 -mb-40" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs font-black text-primary uppercase tracking-[0.2em]">
                    Flagship Initiative
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-black leading-tight">
                    Swabhimaan.
                  </h2>
                  
                  <p className="text-xl text-slate-400 leading-relaxed font-medium italic">
                    &quot;Empowering Rural Women Entrepreneurs&quot;
                  </p>
                  
                  <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                    Swabhimaan is Karmic Konnexions&apos; flagship social initiative — supporting rural women entrepreneurs with skills, resources, and market access to build self-reliant futures.
                  </p>

                  <div className="pt-8">
                    <MagneticButton 
                      href="/initiatives/swabhimaan" 
                      className="bg-primary text-white px-10 py-5 !rounded-2xl flex items-center gap-3 shadow-xl shadow-primary/20"
                    >
                      Learn About Swabhimaan
                      <ArrowRight className="w-5 h-5" />
                    </MagneticButton>
                  </div>
                </div>

                <div className="aspect-[4/3] rounded-[2.5rem] bg-slate-900 border border-white/5 flex items-center justify-center relative group-hover:border-primary/20 transition-colors overflow-hidden">
                   {/* Abstract Pattern Placeholder */}
                   <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                   <div className="relative z-10 text-center p-12">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 border border-primary/20 group-hover:scale-110 transition-transform duration-700">
                        <Sprout className="w-10 h-10 text-primary" />
                      </div>
                      <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Grassroots Impact</p>
                   </div>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Placeholder for future initiatives */}
          {/* <!-- Client to provide: additional initiatives beyond Swabhimaan --> */}
          <div className="mt-32 grid md:grid-cols-2 gap-12">
            <RevealSection delay={0.2}>
              <div className="h-full rounded-[2.5rem] border-2 border-dashed border-slate-100 p-12 flex flex-col items-center justify-center text-center opacity-40 grayscale group hover:opacity-100 hover:grayscale-0 hover:border-primary/20 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                  <Globe className="w-8 h-8 text-slate-300 group-hover:text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-400 mb-2">Future Initiative</h3>
                <p className="text-sm text-slate-300 max-w-xs">
                  We are constantly exploring new ways to use our expertise for social good.
                </p>
              </div>
            </RevealSection>
            
            <RevealSection delay={0.3}>
              <div className="h-full rounded-[2.5rem] border-2 border-dashed border-slate-100 p-12 flex flex-col items-center justify-center text-center opacity-40 grayscale group hover:opacity-100 hover:grayscale-0 hover:border-primary/20 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                  <HandHeart className="w-8 h-8 text-slate-300 group-hover:text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-400 mb-2">Community Support</h3>
                <p className="text-sm text-slate-300 max-w-xs">
                  Details on our local community support programmes will be added here.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <h3 className="text-3xl font-black text-slate-900 mb-6">Partner for Purpose</h3>
            <p className="text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Are you an NGO, social enterprise, or corporate foundation looking to collaborate? Let&apos;s talk about how we can amplify impact together.
            </p>
            <MagneticButton href="/contact?type=partnership" className="px-10 py-4">
              Get in Touch
            </MagneticButton>
          </RevealSection>
        </div>
      </section>
    </main>
  )
}
