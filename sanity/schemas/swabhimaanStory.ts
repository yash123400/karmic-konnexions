import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'swabhimaanStory',
  title: 'Swabhimaan Success Story',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Entrepreneur Name', type: 'string' }),
    defineField({ name: 'location', title: 'Village / State', type: 'string' }),
    defineField({ name: 'businessDescription', title: 'Business Description', type: 'string' }),
    defineField({ name: 'quote', title: 'Her Story (short quote)', type: 'text' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Carousel Order', type: 'number' }),
  ],
  preview: { select: { title: 'name', subtitle: 'location', media: 'photo' } },
})
