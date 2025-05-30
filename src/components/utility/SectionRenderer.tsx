import type { Page } from '@/sanity/types';
import HomeHeroSection from '../sections/hero/HomeHeroSection'
import HomeSection from '../sections/HomeSection'

const sections = {
  homeHeroSection: HomeHeroSection,
  homeSection: HomeSection
}

export function SectionRenderer({ section }: { section: Page['sections'][number] }) {
  const { _type } = section;

  const SectionComponent = sections[_type];

  if (!SectionComponent) {
    console.warn(`No component found for section type: ${_type}`);
    return null;
  }

  return <SectionComponent {...section} />;
}
