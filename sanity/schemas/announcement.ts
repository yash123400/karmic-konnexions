import { defineField, defineType } from 'sanity'
import { BellIcon } from '@sanity/icons'

export default defineType({
  name: 'announcement',
  title: 'Announcements',
  type: 'document',
  icon: BellIcon,
  fields: [
    defineField({
      name: 'text',
      title: 'Announcement text',
      type: 'string',
      validation: r => r.required().max(120),
    }),
    defineField({ name: 'link', title: 'Link URL (optional)', type: 'url' }),
    defineField({ name: 'linkLabel', title: 'Link button text', type: 'string' }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: { list: ['info', 'success', 'warning'], layout: 'radio' },
      initialValue: 'info',
    }),
    defineField({
      name: 'active',
      title: 'Active (show on website)',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'expiresAt',
      title: 'Expires at (optional)',
      type: 'datetime',
    }),
  ],
  preview: {
    select: { title: 'text', subtitle: 'type' },
  },
})
