import { defineType, defineField } from 'sanity'

export const heroSchema = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', initialValue: 'Wildlife Photographer · Mentor · Expedition Leader' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string', initialValue: 'Through the Lens of the Wild' }),
    defineField({ name: 'subheadline', title: 'Sub-headline', type: 'text', rows: 2 }),
    defineField({ name: 'scrollCue', title: 'Scroll Cue Text', type: 'string', initialValue: 'Scroll to explore' }),
  ],
})
