import { defineField, defineType } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export default defineType({
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Full name',
      type: 'string',
      validation: r => r.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Title',
      type: 'string',
      validation: r => r.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'bio', title: 'Short bio', type: 'text', rows: 3 }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'email', title: 'Email address', type: 'string' }),
    defineField({
      name: 'order',
      title: 'Display order (1 = first)',
      type: 'number',
      initialValue: 99,
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'order',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
})
