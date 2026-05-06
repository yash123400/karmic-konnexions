import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'

export const metadata: Metadata = {
  title: 'Terms of Service | Karmic Konnexions',
  description: 'Terms of Service for Karmic Konnexions Global Consulting LLP.',
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <main>
      <PageHero
        title="Terms of Service"
        subtitle="Karmic Konnexions Global Consulting LLP"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Terms of Service', href: '/terms' }]}
      />
      <section className="max-w-3xl mx-auto px-6 py-16 prose prose-slate">
        <p className="text-text-muted text-sm mb-8">Last updated: May 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using karmickonnexions.com, you accept and agree to
          be bound by these Terms of Service. If you do not agree, please do
          not use this website.
        </p>

        <h2>2. Use of This Website</h2>
        <p>
          This website is provided for informational purposes about Karmic
          Konnexions Global Consulting LLP&apos;s services. You may not use this
          site for any unlawful purpose or in a way that could damage or impair
          the site&apos;s operation.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content on this website — including text, graphics, logos, and
          images — is the property of Karmic Konnexions Global Consulting LLP
          and is protected by applicable intellectual property laws.
        </p>

        <h2>4. Service Enquiries</h2>
        <p>
          Submitting a contact or proposal form does not constitute a binding
          agreement. All service engagements are subject to a separate written
          agreement signed by both parties.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          Karmic Konnexions Global Consulting LLP shall not be liable for any
          indirect, incidental, or consequential damages arising from your use
          of this website.
        </p>

        <h2>6. Governing Law</h2>
        <p>
          These terms are governed by the laws of India. Any disputes shall be
          subject to the exclusive jurisdiction of courts in Gurgaon, Haryana.
        </p>

        <h2>7. Contact</h2>
        <p>
          For any questions about these terms, contact us at{' '}
          <a href="mailto:karmickonnexions2309@gmail.com" className="text-primary">
            karmickonnexions2309@gmail.com
          </a>.
        </p>
      </section>
    </main>
  )
}
