import { defineType, defineField } from 'sanity'

export const mentorshipSchema = defineType({
  name: 'mentorship',
  title: 'Mentorship Section',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Learn to See What Others Miss' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'offerings', title: 'Offerings', type: 'array', of: [
      {
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Title' },
          { name: 'description', type: 'text', title: 'Description' },
          { name: 'icon', type: 'string', title: 'Icon (emoji or text)' },
        ],
      }
    ]}),
  ],
})
