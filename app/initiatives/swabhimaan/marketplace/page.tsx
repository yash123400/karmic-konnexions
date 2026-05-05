import { Metadata } from 'next'
import Link from 'next/link'
import { Store, ArrowRight, ArrowLeft } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import RevealSection from '@/components/shared/RevealSection'
import MagneticButton from '@/components/shared/MagneticButton'

export const metadata: Metadata = {
  title: 'Swabhimaan Marketplace | Karmic Konnexions',
  description: 'A platform connecting rural women entrepreneurs to wider markets.'
}

export default function SwabhimaanMarketplacePage() {
  return (
    <main className="pt-16">
      <section className="bg-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <Link href="/initiatives/swabhimaan" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-primary transition-colors mb-12 uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4" />
              Back to Swabhimaan
           </Link>
        </div>
      </section>

      <PageHero
        eyebrow="Initiative Marketplace"
        title="Connecting Talent\nto Markets."
        subtitle="The Swabhimaan Marketplace is a dedicated platform for our rural entrepreneurs to showcase and sell their products."
      />

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="max-w-3xl mx-auto text-center space-y-12">
              <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center mx-auto border border-slate-100">
                <Store className="w-10 h-10 text-slate-300" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-slate-900">Marketplace Launching Soon.</h2>
                <p className="text-xl text-slate-500 leading-relaxed">
                  We are currently onboarding our first batch of entrepreneurs and setting up the digital infrastructure. Check back soon to support grassroots business.
                </p>
              </div>
              <div className="pt-8 flex justify-center gap-6">
                <MagneticButton href="/contact?type=swabhimaan-partner" className="px-10 py-4">
                  Partner with the Marketplace
                </MagneticButton>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </main>
  )
}
