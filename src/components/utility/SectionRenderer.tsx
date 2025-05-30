import type { Page } from '@/sanity/types';
import HomeHeroSection from '../sections/hero/HomeHeroSection'
import HomeSection from '../sections/HomeSection'

export function SectionRenderer({ section }: { section: Page['sections'][number] }) {
  const { _type } = section;

  switch (_type) {
    case 'homeHeroSection':
      return <HomeHeroSection {...(section as React.ComponentProps<typeof HomeHeroSection>)} />
    case 'homeSection':
      return <HomeSection {...(section as React.ComponentProps<typeof HomeSection>)} />
    default:
      console.warn(`No component found for section type: ${_type}`)
      return null
  }
}
