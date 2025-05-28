# Card Component Architecture

## Overview

We've created a generalized, reusable card system that normalizes content cards across the application. This system consists of:

1. **ContentCard** - A unified card component with image background and content overlay
2. **CardLayout** - A flexible layout component for arranging cards in various configurations
3. **ContentCardsSection** - A section component that combines cards with layouts

## Components

### ContentCard (`src/components/ui/ContentCard.tsx`)

A flexible card component that displays content over a background image with predefined style presets.

**Props:**

- `heading` (string): Small uppercase heading text
- `title` (string): Large main title text
- `backgroundImage` (SanityImageSource): Background image
- `link` (optional): Link configuration with button
- `cardStyle` (optional): Predefined style preset
  - `'standard'`: Full-height cards (640px/672px)
  - `'compact'`: Medium-height cards (400px/500px)
  - `'location'`: Location-style cards with unique gradients
- `className` (optional): Additional CSS classes

### CardLayout (`src/components/layout/CardLayout.tsx`)

A layout component that handles different card arrangements matching the design system.

**Props:**

- `layout`: Layout configuration
  - `'single'`: Single column layout
  - `'two-column'`: Two-column grid
  - `'three-column'`: Three-column grid
  - `'four-column'`: Four-column grid
  - `'mixed-1-2'`: First card full width, rest in 2 columns
  - `'mixed-2-3'`: First 2 cards in 2 columns, rest in 3 columns
- `spacing`: Gap between cards (`'tight'`, `'normal'`, `'relaxed'`)
- `containerWidth`: Container constraint (`'full'`, `'container'`, `'narrow'`)
- `children`: Card components to layout

### ContentCardsSection (`src/components/sections/ContentCardsSection.tsx`)

A complete section component that renders multiple cards with a specified layout.

**Props:**

- `sectionTitle` (optional): Title for the entire section
- `cards`: Array of card data
- `layout`: Layout configuration (same as CardLayout)
- `spacing`: Spacing between cards
- `containerWidth`: Container width constraint

## Sanity Schema

### contentCard Object

```typescript
{
  heading: string;
  title: string;
  backgroundImage: image;
  link?: sanityLink;
  cardStyle?: 'standard' | 'compact' | 'location';
}
```

### contentCardsSection

```typescript
{
  sectionTitle?: string;
  cards: contentCard[];
  layout?: 'single' | 'two-column' | 'three-column' | 'four-column' | 'mixed-1-2' | 'mixed-2-3';
  spacing?: 'tight' | 'normal' | 'relaxed';
  containerWidth?: 'full' | 'container' | 'narrow';
}
```

## Usage Examples

### Single Card

```tsx
<ContentCard
  heading='TOCA TUESDAY'
  title='Elevate Tuesdays with signature tacos, cocktails, and live entertainment.'
  backgroundImage={imageSource}
  link={{ title: 'Learn More', href: '/toca-tuesday' }}
  cardStyle='standard'
/>
```

### Multiple Cards with Layout (matching the design)

```tsx
<CardLayout layout='single'>
  <ContentCard {...tocaTuesdayCard} />
</CardLayout>

<CardLayout layout='two-column'>
  <ContentCard {...ourStoryCard} />
  <ContentCard {...onTheMenuCard} />
</CardLayout>

<CardLayout layout='three-column'>
  <ContentCard {...scottsdaleCard} cardStyle='location' />
  <ContentCard {...lasVegasCard} cardStyle='location' />
  <ContentCard {...houstonCard} cardStyle='location' />
</CardLayout>
```

### Using ContentCardsSection

```tsx
<ContentCardsSection
  cards={[
    {
      heading: 'EXPERIENCE',
      title: 'Scottsdale',
      backgroundImage: scottsdaleImage,
      cardStyle: 'location',
      link: { title: 'Learn More', href: '/locations/scottsdale' },
    },
  ]}
  layout='three-column'
  spacing='normal'
  containerWidth='container'
/>
```

## Benefits

1. **Normalized Data Structure**: Consistent card data model across frontend and backend
2. **Flexible Layouts**: Support for various layout configurations as shown in the design
3. **Type Safety**: Full TypeScript support with normalized types
4. **Reusability**: One component handles all card variations
5. **Content Management**: Easy to manage through Sanity CMS
6. **Responsive Design**: Built-in responsive behavior for all layouts

## Migration from Legacy Sections

The following sections have been refactored to use the new ContentCard:

- `TocaTuesdaySection` → Uses ContentCard with `cardStyle='standard'`
- `OurStorySection` → Uses ContentCard with `cardStyle='standard'`
- `OnTheMenuSection` → Uses ContentCard with `cardStyle='standard'`
- `LocationSection` → Uses ContentCard with `cardStyle='location'`

These can now be replaced with the more flexible `ContentCardsSection` in Sanity.
