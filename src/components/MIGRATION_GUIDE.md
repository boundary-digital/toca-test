# Migration Guide: From Legacy Sections to ContentCardsSection

This guide helps you migrate from the old section-specific components to the new generalized ContentCardsSection.

## Overview

The new ContentCardsSection provides a flexible, normalized approach to creating card-based layouts. Instead of having separate components for each section type, you can now use one component with different configurations.

## Migration Examples

### 1. Single Card Layout (e.g., Toca Tuesday)

**Before:**

```tsx
<TocaTuesdaySection
  heading='TOCA TUESDAY'
  subheading='Elevate Tuesdays with signature tacos, cocktails, and live entertainment.'
  backgroundImage={image}
  link={{ title: 'Learn More', href: '/toca-tuesday' }}
/>
```

**After:**

```tsx
<ContentCardsSection
  cards={[
    {
      heading: 'TOCA TUESDAY',
      title: 'Elevate Tuesdays with signature tacos, cocktails, and live entertainment.',
      backgroundImage: image,
      link: { title: 'Learn More', href: '/toca-tuesday' },
      cardStyle: 'standard',
    },
  ]}
  layout='single'
/>
```

### 2. Two-Column Layout (e.g., Our Story + On The Menu)

**Before:**

```tsx
<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
  <OurStorySection {...ourStoryProps} />
  <OnTheMenuSection {...onTheMenuProps} />
</div>
```

**After:**

```tsx
<ContentCardsSection
  cards={[
    {
      heading: 'OUR STORY',
      title: 'Toca Madera is an experience for all of your senses.',
      backgroundImage: ourStoryImage,
      link: { title: 'Learn More', href: '/our-story' },
      cardStyle: 'standard',
    },
    {
      heading: 'ON THE MENU',
      title: 'Our diverse menu is designed to offer something for everyone.',
      backgroundImage: menuImage,
      link: { title: 'Explore Menu', href: '/menu' },
      cardStyle: 'standard',
    },
  ]}
  layout='two-column'
/>
```

### 3. Three-Column Layout (e.g., Locations)

**Before:**

```tsx
<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
  <LocationSection heading='EXPERIENCE' locationName='Scottsdale' {...scottsdaleProps} />
  <LocationSection heading='EXPERIENCE' locationName='Las Vegas' {...vegasProps} />
  <LocationSection heading='EXPERIENCE' locationName='Houston' {...houstonProps} />
</div>
```

**After:**

```tsx
<ContentCardsSection
  cards={[
    {
      heading: 'EXPERIENCE',
      title: 'Scottsdale',
      backgroundImage: scottsdaleImage,
      link: { title: 'Learn More', href: '/locations/scottsdale' },
      cardStyle: 'location',
    },
    {
      heading: 'EXPERIENCE',
      title: 'Las Vegas',
      backgroundImage: vegasImage,
      link: { title: 'Learn More', href: '/locations/las-vegas' },
      cardStyle: 'location',
    },
    {
      heading: 'EXPERIENCE',
      title: 'Houston',
      backgroundImage: houstonImage,
      link: { title: 'Learn More', href: '/locations/houston' },
      cardStyle: 'location',
    },
  ]}
  layout='three-column'
/>
```

## Sanity Schema Migration

### Old Schema Structure

Each section had its own schema:

- `tocaTuesdaySection`
- `ourStorySection`
- `onTheMenuSection`
- `locationSection`

### New Schema Structure

Use the unified `contentCardsSection`:

```javascript
{
  _type: 'contentCardsSection',
  sectionTitle: 'Optional Section Title',
  cards: [
    {
      _type: 'contentCard',
      heading: 'TOCA TUESDAY',
      title: 'Your title text here',
      backgroundImage: { /* image object */ },
      link: { /* sanityLink object */ },
      cardStyle: 'standard' // or 'compact' or 'location'
    }
  ],
  layout: 'single', // or 'two-column', 'three-column', etc.
  spacing: 'normal',
  containerWidth: 'container'
}
```

## Benefits of Migration

1. **Flexibility**: Easily change layouts without code changes
2. **Consistency**: All cards use the same component
3. **Maintainability**: One component to maintain instead of four
4. **Content Management**: Editors can create any card layout combination
5. **Future-proof**: Easy to add new card styles or layouts

## Step-by-Step Migration

1. **Update Sanity Schemas**

   - Keep existing section schemas for backward compatibility
   - Add new `contentCardsSection` to pages
   - Gradually migrate content from old sections to new

2. **Update Frontend Components**

   - The old section components still work (they now use ContentCard internally)
   - For new content, use ContentCardsSection directly
   - Update existing page templates to use ContentCardsSection

3. **Content Migration**
   - Create new contentCardsSection entries in Sanity
   - Copy content from old sections
   - Update page references
   - Delete old section entries once migrated

## Layout Options Reference

- `single`: One card per row
- `two-column`: Two cards per row (responsive)
- `three-column`: Three cards per row (responsive)
- `four-column`: Four cards per row (responsive)
- `mixed-1-2`: First card full width, rest in 2 columns
- `mixed-2-3`: First 2 cards in 2 columns, rest in 3 columns

## Card Style Reference

- `standard`: Full height (640px/672px) - used for feature cards
- `compact`: Medium height (400px/500px) - for smaller cards
- `location`: Special styling for location cards with unique gradients

## Spacing Options

- `tight`: Smaller gaps between cards
- `normal`: Default spacing
- `relaxed`: Larger gaps between cards

## Container Width Options

- `full`: Full viewport width
- `container`: Standard container with padding
- `narrow`: Narrower container for focused content
