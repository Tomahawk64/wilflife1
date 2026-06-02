import { defineType, defineField } from 'sanity'

export const gallerySchema = defineType({
  name: 'galleryImage',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['wildlife', 'landscape', 'portrait', 'expedition'] } }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number' }),
  ],
  orderings: [{ title: 'Sort Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
})
