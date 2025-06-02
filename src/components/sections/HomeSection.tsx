import SanityImageBlock from '@/components/utility/SanityImageBlock'
import { cn, extractUrl } from '@/libs/functions'
import type { SanityImage, SanityLink } from '@/sanity/types'
import Button from '../ui/Button'
import GradientOverlay from '../ui/GradientOverlay'

interface HomeSectionProps {
  backgroundImage: SanityImage
  title: string
  description: string
  button?: {
    text: string
    link: SanityLink
  }
  desktopLayout?: 'full' | 'half' | 'third'
  order?: number
}

export default function HomeSection({
  backgroundImage,
  title,
  description,
  button,
  desktopLayout = 'full'
}: HomeSectionProps) {
  return (
    <section
      className={cn(
        'h-[640px] lg:h-[672px] p-2 w-full rounded-lg',
        desktopLayout === 'half' && 'md:w-1/2',
        desktopLayout === 'third' && 'md:w-1/3'
      )}
    >
      <article className="relative z-10 flex h-full flex-col justify-between items-center rounded-lg overflow-hidden py-20">
        {!!backgroundImage && (
          <>
            <GradientOverlay direction="to-b" className="absolute from-black/60 inset-0 z-10" />
            <SanityImageBlock fill image={backgroundImage} className="absolute object-cover" />
          </>
        )}
        <div className="relative z-11 max-w-3xl text-center">
          {!!title && (
            <h3 className="mb-6 text-center text-rose-gold font-sans text-[15px] font-normal leading-[100%] tracking-[2.25px] uppercase">
              {title}
            </h3>
          )}
          {!!description && (
            <p className="mb-8 text-center text-white font-serif text-[40px] font-normal leading-[110%] tracking-[-0.6px]">
              {description}
            </p>
          )}
          {button?.link && (
            <Button variant="primary" href={extractUrl(button.link)}>
              {button.text || 'Learn More'}
            </Button>
          )}
        </div>
        <GradientOverlay direction="to-b" className="absolute z-10" />
      </article>
    </section>
  )
}
