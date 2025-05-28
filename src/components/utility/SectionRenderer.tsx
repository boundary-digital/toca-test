import type { Section } from '@/sanity/types';
import ContentCardsSection from '../sections/ContentCardsSection';
import HomeHeroSection from '../sections/HomeHeroSection';
import InstagramSection from '../sections/InstagramSection';
import SignatureCocktailsSection from '../sections/SignatureCocktailsSection';

export function SectionRenderer({ section }: { section: Section }) {
  switch (section._type) {
    case 'homeHeroSection':
      return <HomeHeroSection {...section} />;
    case 'signatureCocktailsSection':
      return <SignatureCocktailsSection {...section} />;
    case 'instagramSection':
      return <InstagramSection {...section} />;
    case 'contentCardsSection':
      return <ContentCardsSection {...section} />;
    default: {
      const exhaustiveCheck: never = section;
      console.warn(`No component found for section type: ${(exhaustiveCheck as Section)._type}`);
      return null;
    }
  }
}
