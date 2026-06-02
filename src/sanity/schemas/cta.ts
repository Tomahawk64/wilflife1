import { defineType, defineField } from 'sanity'

export const ctaSchema = defineType({
  name: 'cta',
  title: 'CTA Section',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Ready to Enter the Wild?' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'text', rows: 2 }),
    defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'primaryButtonText', title: 'Primary Button', type: 'string', initialValue: 'Join The Expedition' }),
    defineField({ name: 'secondaryButtonText', title: 'Secondary Button', type: 'string', initialValue: 'Learn Wildlife Photography' }),
  ],
})
