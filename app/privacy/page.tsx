import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy | Karmic Konnexions',
  description: 'Privacy Policy for Karmic Konnexions Global Consulting LLP.',
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        title="Privacy Policy"
        subtitle="Karmic Konnexions Global Consulting LLP"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy', href: '/privacy' }]}
      />
      <section className="max-w-3xl mx-auto px-6 py-16 prose prose-slate">
        <p className="text-text-muted text-sm mb-8">Last updated: May 2026</p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us when you fill out
          our contact or proposal forms — including your name, company name,
          email address, phone number, and the nature of your enquiry.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect solely to respond to your enquiry,
          send you relevant service information, and improve our services.
          We do not sell or share your personal data with third parties for
          marketing purposes.
        </p>

        <h2>3. Data Storage</h2>
        <p>
          Your data is stored securely using Supabase (EU/US region) and is
          accessible only to authorised Karmic Konnexions staff. We retain
          lead data for a maximum of 24 months.
        </p>

        <h2>4. Cookies</h2>
        <p>
          We use Google Analytics 4 to understand aggregate site usage.
          No personally identifiable data is collected via cookies.
          You can opt out via your browser settings.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal
          data at any time by emailing us at{' '}
          <a href="mailto:karmickonnexions2309@gmail.com" className="text-primary">
            karmickonnexions2309@gmail.com
          </a>.
        </p>

        <h2>6. Contact</h2>
        <p>
          Karmic Konnexions Global Consulting LLP<br />
          #106D, J Block, Adani Samsara Vilasa 2.0,<br />
          Sec 63, Maidawas Road, Gurgaon, Haryana – 122011<br />
          <a href="mailto:karmickonnexions2309@gmail.com" className="text-primary">
            karmickonnexions2309@gmail.com
          </a>
        </p>
      </section>
    </main>
  )
}
