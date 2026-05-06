import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'clientDescription', title: 'Client Description (no names)', type: 'string',
      description: 'e.g. "300-employee logistics company, Gurgaon"' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'headline' } }),
    defineField({ name: 'headline', title: 'Headline Result', type: 'string',
      description: 'e.g. "60% HR cost reduction in 90 days"', validation: (r) => r.required() }),
    defineField({
      name: 'industry', title: 'Industry', type: 'string',
      options: { list: ['Logistics & Supply Chain', 'Manufacturing & Industrial', 'Healthcare & Pharma',
        'Education & EdTech', 'IT & Technology', 'BFSI & FinTech', 'Retail & D2C', 'Startups & SMEs'] },
    }),
    defineField({
      name: 'service', title: 'Service Used', type: 'string',
      options: { list: ['HR & Payroll Outsourcing', 'Finance & Accounts Outsourcing', 'CRM & Sales Ops',
        'Marketing Services', 'E-Learning & Training', 'Global Workforce Solutions', 'Corporate Apparel', 'Full HRO Bundle'] },
    }),
    defineField({ name: 'challenge', title: 'The Challenge', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'solution', title: 'Our Solution', type: 'array', of: [{ type: 'block' }] }),
    defineField({
      name: 'results', title: 'Key Results (metrics)', type: 'array',
      of: [{
        type: 'object', fields: [
          { name: 'metric', title: 'Metric', type: 'string' },
          { name: 'value', title: 'Value', type: 'string' },
          { name: 'description', title: 'Description', type: 'string' },
        ],
      }],
    }),
    defineField({ name: 'quote', title: 'Client Quote', type: 'text' }),
    defineField({ name: 'quoteAttribution', title: 'Quote Attribution', type: 'string',
      description: 'e.g. "CFO, Logistics Company, 300 Employees" — no real names' }),
    defineField({ name: 'featured', title: 'Featured on homepage/case studies?', type: 'boolean', initialValue: false }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
  ],
  preview: { select: { title: 'headline', subtitle: 'industry' } },
})
