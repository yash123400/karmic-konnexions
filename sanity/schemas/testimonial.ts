import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote Text', type: 'text', validation: (r) => r.required() }),
    defineField({ name: 'attribution', title: 'Attribution', type: 'string',
      description: 'e.g. "CFO, Logistics Company, 300 Employees" — never use real client names' }),
    defineField({
      name: 'service', title: 'Related Service', type: 'string',
      options: { list: ['HR & Payroll', 'Finance & Accounts', 'CRM & Sales Ops', 'Marketing Services',
        'E-Learning', 'Global Workforce', 'Corporate Apparel', 'HRO Bundle'] },
    }),
    defineField({ name: 'featured', title: 'Show on homepage?', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'attribution', subtitle: 'service' } },
})
