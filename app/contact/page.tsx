import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us | Karmic Konnexions',
  description:
    'Get in touch with Karmic Konnexions Global Consulting LLP. Book a discovery call or send us an enquiry about HRO outsourcing, e-learning, global workforce, or AI automation services.',
  openGraph: {
    title: 'Contact Karmic Konnexions',
    description:
      'Reach out to discuss your outsourcing, training, or AI automation needs. We respond within one business day.',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
