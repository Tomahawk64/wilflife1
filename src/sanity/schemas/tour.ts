import { defineType, defineField } from 'sanity'

export const tourSchema = defineType({
  name: 'tour',
  title: 'Tours & Expeditions',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Tour Title', type: 'string' }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['domestic', 'international'] } }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'duration', title: 'Duration', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'highlights', title: 'Highlights', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number' }),
  ],
  orderings: [{ title: 'Sort Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
})
