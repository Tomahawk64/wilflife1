import { defineType, defineField } from 'sanity'

export const aboutSchema = defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'The Eye Behind the Frame' }),
    defineField({ name: 'portrait', title: 'Portrait Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({ name: 'stats', title: 'Stats', type: 'array', of: [
      {
        type: 'object',
        fields: [
          { name: 'value', type: 'string', title: 'Value' },
          { name: 'label', type: 'string', title: 'Label' },
        ],
      }
    ]}),
  ],
})
