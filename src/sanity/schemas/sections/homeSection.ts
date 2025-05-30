import { defineType } from 'sanity';

const homeSection = defineType({
  name: 'homeSection',
  title: 'Section (Home)',
  type: 'object',
  fields: [
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (rule) => rule.required(),
    },
    {
      name: 'button',
      type: 'object',
      title: 'Button',
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'Button Text',
          initialValue: 'Learn More',
        },
        {
          name: 'link',
          type: 'sanityLink',
          title: 'Button Link',
        },
      ],
    },
    {
      name: 'desktopLayout',
      title: 'Desktop Layout Width',
      type: 'string',
      description: 'How wide should this section be on desktop screens? (All sections are full width on mobile)',
      options: {
        list: [
          { title: 'Full Width', value: 'full' },
          { title: 'Half Width', value: 'half' },
          { title: 'One-Third Width', value: 'third' },
        ],
      },
      initialValue: 'full',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order this section appears on the page (lower numbers appear first)',
      initialValue: 1,
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Section (Home)',
      };
    },
  },
});

export default homeSection;
