import { defineType, defineField } from 'sanity'

export const contactSchema = defineType({
  name: 'contact',
  title: 'Contact Info',
  type: 'document',
  fields: [
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
    defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp Number', type: 'string' }),
    defineField({ name: 'tagline', title: 'Contact Tagline', type: 'string', initialValue: 'Let\'s Walk Into the Wild Together' }),
  ],
})
