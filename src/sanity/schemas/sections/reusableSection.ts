import { defineType } from 'sanity';

const reusableSection = defineType({
  name: 'reusableSection',
  title: 'Reusable Section',
  type: 'object',
  fields: [
    {
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      description: 'Small text above the title (e.g., "Experience", "On the Menu")'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string'
    },
    {
      name: 'width',
      title: 'Width',
      type: 'string',
      options: {
        list: [
          { title: 'Full', value: 'full' },
          { title: '1/2', value: 'half' },
          { title: '1/3', value: 'third' },
        ],
        layout: 'radio'
      },
      initialValue: 'full'
    },
    {
      name: 'buttonCta',
      title: 'Button Link (URL)',
      type: 'url'
    },
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
  ],
  preview: {
    prepare() {
      return {
        title: 'Reusable Section',
        media: 'backgroundImage',
        subtitle: 'eyebrow'
      };
    },
  },
});

export default reusableSection;
