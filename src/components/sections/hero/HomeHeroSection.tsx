import type { SanityImage } from '@/sanity/types'
import SanityImageBlock from '../../utility/SanityImageBlock'
import GradientOverlay from '../../ui/GradientOverlay'

export default function HomeHeroSection({ backgroundImage }: { backgroundImage: SanityImage }) {
  // TODO: use HeroTitle component
  const title = 'MODERN MEXICAN STEAKHOUSE'
  const words = title.split(' ')

  return (
    <section className="relative mb-[242px] h-[840px] w-full overflow-hidden overflow-visible md:mb-[300px] md:h-[900px]">
      <SanityImageBlock priority image={backgroundImage} fill className="object-cover" />

      <GradientOverlay />

      <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-white uppercase font-serif text-[clamp(48px,10vw,140px)] leading-none tracking-[14px]">
        {words.map((word, i) => (
          <div key={i} className={i % 2 === 0 ? 'text-left' : 'text-right'}>
            {word}
          </div>
        ))}
      </h1>
    </section>
  )
}
