import {  defineType } from 'sanity';

const sanityTitleLines = defineType({
  name: 'sanityTitleLines',
  title: 'Hero Title Lines',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'Text',
          validation: (rule) => rule.required(),
        },
        {
          name: 'alignment',
          type: 'string',
          title: 'Alignment',
          options: {
            list: [
              { title: 'Left', value: 'left' },
              { title: 'Right', value: 'right' },
            ],
            layout: 'radio',
          },
          initialValue: 'left',
        },
        {
          name: 'divider',
          type: 'string',
          title: 'Divider Position',
          options: {
            list: [
              { title: 'None', value: 'none' },
              { title: 'Before', value: 'before' },
              { title: 'After', value: 'after' },
            ],
            layout: 'radio',
          },
          initialValue: 'none',
        },
      ],
      preview: {
        select: {
          title: 'text',
          subtitle: 'alignment',
        },
      },
    },
  ],
})

export default sanityTitleLines;
