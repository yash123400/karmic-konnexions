import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import PageHero from '@/components/shared/PageHero'
import RevealSection from '@/components/shared/RevealSection'

const ProposalForm = dynamic(
  () => import('@/components/proposal/ProposalForm'),
  {
    loading: () => (
      <div className="h-[600px] bg-white rounded-2xl border border-slate-100 animate-pulse" aria-label="Loading proposal form..." />
    ),
  }
)

export const metadata: Metadata = {
  title: 'Get a Proposal | Karmic Konnexions',
  description: 'Tell us about your business and we\'ll send you a tailored outsourcing proposal within 48 hours. No commitment required.'
}

export default function GetProposalPage() {
  return (
    <main className="pt-16 min-h-screen bg-slate-50">
      <PageHero
        eyebrow="Get a Tailored Proposal"
        title={"Tell Us About\nYour Business."}
        subtitle="Fill out this short form and we'll prepare a customised outsourcing proposal — with scope, engagement model, and timelines — within 48 hours."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <ProposalForm />
          </RevealSection>
          
          <div className="mt-20 text-center">
            <p className="text-sm text-slate-400 font-medium">
              Information provided is confidential and used only to prepare your proposal.
            </p>
            <p className="text-xs text-slate-300 mt-2">
              Karmic Konnexions Global Consulting LLP &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
