import type { SanityImage } from '@/sanity/types'
import SanityImageBlock from '../../utility/SanityImageBlock'
import GradientOverlay from '../../ui/GradientOverlay'
import HeroTitle from './HeroTitle'

interface TitleLine {
  text: string
  alignment: 'left' | 'right'
  divider: 'none' | 'before' | 'after'
}

interface HomeHeroSectionProps {
  backgroundImage: SanityImage
  titleLines: TitleLine[]
}

export default function HomeHeroSection({
  backgroundImage,
  titleLines = []
}: HomeHeroSectionProps) {
  return (
    <section className="relative mb-[242px] h-[840px] w-full overflow-hidden overflow-visible md:mb-[300px] md:h-[900px]">
      <SanityImageBlock priority image={backgroundImage} fill className="object-cover" />

      <GradientOverlay />

      <HeroTitle
        titleLines={titleLines}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-white"
      />
    </section>
  )
}
