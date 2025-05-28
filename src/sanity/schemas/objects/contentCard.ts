import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contentCard',
  title: 'Content Card',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Small uppercase heading (e.g., "TOCA TUESDAY", "EXPERIENCE")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main title text displayed prominently',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'sanityLink',
      description: 'Optional link/button',
    }),
    defineField({
      name: 'cardStyle',
      title: 'Card Style',
      type: 'string',
      options: {
        list: [
          { title: 'Standard', value: 'standard' },
          { title: 'Compact', value: 'compact' },
          { title: 'Location', value: 'location' },
        ],
        layout: 'radio',
      },
      initialValue: 'standard',
      description: 'Visual style preset for the card',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'heading',
      media: 'backgroundImage',
    },
  },
});
