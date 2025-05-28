'use client';

import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import CardLayout from '../layout/CardLayout';
import { ContentCard } from '../ui';

interface ContentCardData {
  _key?: string;
  heading: string;
  title: string;
  backgroundImage: SanityImageSource;
  link?: {
    _type: string;
    title?: string;
    href?: string;
    linkType?: string;
    externalLink?: string;
    internalLink?: {
      _ref: string;
      _type: string;
    };
  };
  cardStyle?: 'standard' | 'compact' | 'location';
}

interface ContentCardsSectionProps {
  sectionTitle?: string;
  cards: ContentCardData[];
  layout?: 'single' | 'two-column' | 'three-column' | 'four-column' | 'mixed-1-2' | 'mixed-2-3';
  spacing?: 'tight' | 'normal' | 'relaxed';
  containerWidth?: 'full' | 'container' | 'narrow';
}

export default function ContentCardsSection({
  cards,
  layout = 'single',
  spacing = 'normal',
  containerWidth = 'container',
}: ContentCardsSectionProps) {
  if (!cards || cards.length === 0) return null;

  return (
    <section className='bg-dark-gray relative py-[5px] md:py-[8px]'>
      <CardLayout layout={layout} spacing={spacing} containerWidth={containerWidth}>
        {cards.map((card, index) => (
          <ContentCard
            key={card._key || index}
            heading={card.heading}
            title={card.title}
            backgroundImage={card.backgroundImage}
            link={card.link}
            cardStyle={card.cardStyle}
          />
        ))}
      </CardLayout>
    </section>
  );
}
