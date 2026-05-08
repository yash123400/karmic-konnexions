const BASE_URL = 'https://www.karmickonnexions.com'

const ORG_BASE = {
  '@type': 'Organization',
  name: 'Karmic Konnexions Global Consulting LLP',
  url: BASE_URL,
  logo: `${BASE_URL}/logo-full.png`,
  telephone: '+91-9667759894',
  email: 'support@karmickonnexion.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#106D, J Block, Adani Samsara Vilasa 2.0, Sec 63, Maidawas Road',
    addressLocality: 'Gurgaon',
    addressRegion: 'Haryana',
    postalCode: '122011',
    addressCountry: 'IN',
  },
}

export const orgSchema = {
  '@context': 'https://schema.org',
  ...ORG_BASE,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9667759894',
    contactType: 'customer service',
    areaServed: ['IN', 'AE', 'GB', 'ZA', 'SG'],
    availableLanguage: 'English',
  },
  sameAs: [],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Karmic Konnexions Global Consulting LLP',
  image: `${BASE_URL}/logo-full.png`,
  telephone: '+91-9667759894',
  email: 'support@karmickonnexion.com',
  url: `${BASE_URL}/contact`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#106D, J Block, Adani Samsara Vilasa 2.0, Sec 63, Maidawas Road',
    addressLocality: 'Gurgaon',
    addressRegion: 'Haryana',
    postalCode: '122011',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '14:00',
    },
  ],
  priceRange: '₹₹',
}

export function buildServiceSchema({
  name,
  description,
  serviceType,
  url,
}: {
  name: string
  description: string
  serviceType: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    url: `${BASE_URL}${url}`,
    provider: {
      '@type': 'Organization',
      name: 'Karmic Konnexions Global Consulting LLP',
      url: BASE_URL,
    },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  }
}

export function buildBreadcrumbSchema(
  items: { name: string; item: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      ...items.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: crumb.name,
        item: `${BASE_URL}${crumb.item}`,
      })),
    ],
  }
}

export function buildFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }
}

export function buildBlogPostingSchema(post: {
  title: string
  excerpt?: string
  publishedAt?: string
  author?: string
  slug: { current: string }
  coverImage?: { asset: { url?: string } }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt ?? '',
    datePublished: post.publishedAt ?? '',
    author: {
      '@type': 'Person',
      name: post.author ?? 'Karmic Konnexions Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Karmic Konnexions Global Consulting LLP',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo-full.png`,
      },
    },
    url: `${BASE_URL}/blog/${post.slug.current}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug.current}`,
    },
  }
}
