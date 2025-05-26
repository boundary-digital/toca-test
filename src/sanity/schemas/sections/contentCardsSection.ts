import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contentCardsSection',
  title: 'Content Cards Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Optional title for the entire section',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'contentCard' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Single Column', value: 'single' },
          { title: 'Two Columns', value: 'two-column' },
          { title: 'Three Columns', value: 'three-column' },
          { title: 'Four Columns', value: 'four-column' },
          { title: 'Mixed (1 + 2)', value: 'mixed-1-2' },
          { title: 'Mixed (2 + 3)', value: 'mixed-2-3' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'single',
      description: 'How the cards should be arranged',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'spacing',
      title: 'Spacing',
      type: 'string',
      options: {
        list: [
          { title: 'Tight', value: 'tight' },
          { title: 'Normal', value: 'normal' },
          { title: 'Relaxed', value: 'relaxed' },
        ],
        layout: 'radio',
      },
      initialValue: 'normal',
      description: 'Spacing between cards',
    }),
    defineField({
      name: 'containerWidth',
      title: 'Container Width',
      type: 'string',
      options: {
        list: [
          { title: 'Full Width', value: 'full' },
          { title: 'Container', value: 'container' },
          { title: 'Narrow', value: 'narrow' },
        ],
        layout: 'radio',
      },
      initialValue: 'container',
      description: 'Width constraint for the section',
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      cards: 'cards',
    },
    prepare({ title, cards }) {
      const cardCount = cards ? cards.length : 0;
      return {
        title: title || 'Content Cards Section',
        subtitle: `${cardCount} card${cardCount !== 1 ? 's' : ''}`,
      };
    },
  },
});
