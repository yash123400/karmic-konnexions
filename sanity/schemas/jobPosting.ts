import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
  name: 'jobPosting',
  title: 'Job Postings',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Job title',
      type: 'string',
      validation: r => r.required(),
    }),
    defineField({
      name: 'type',
      title: 'Employment type',
      type: 'string',
      options: {
        list: ['Full-time', 'Part-time', 'Contract', 'Internship'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: ['Gurgaon (On-site)', 'Remote', 'Hybrid', 'Pan-India'],
        layout: 'radio',
      },
    }),
    defineField({ name: 'department', title: 'Department', type: 'string' }),
    defineField({
      name: 'salary',
      title: 'Salary range (optional)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Job description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'applyEmail',
      title: 'Applications email',
      type: 'string',
      initialValue: 'karmickonnexions2309@gmail.com',
    }),
    defineField({
      name: 'active',
      title: 'Active (visible on website)',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'postedAt',
      title: 'Posted date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'type' },
  },
})
