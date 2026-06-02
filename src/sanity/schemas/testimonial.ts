import { defineType, defineField } from 'sanity'

export const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Student Name', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'avatar', title: 'Avatar', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4 }),
    defineField({ name: 'tourAttended', title: 'Tour / Workshop Attended', type: 'string' }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number' }),
  ],
  orderings: [{ title: 'Sort Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
})
