import Container from '@/components/layout/Container';
import SanityImageBlock from '@/components/utility/SanityImageBlock';
import { extractUrl } from '@/libs/functions';
import type { SanityImage, SanityLink } from '@/sanity/types';
import Button from '../ui/Button'

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
  desktopLayout = 'full',
  order = 1
}: HomeSectionProps) {
  return (
    <section
      className={`
      relative w-full min-h-[50vh] md:min-h-screen
      col-span-12
      ${desktopLayout === 'half' ? 'md:col-span-6' : ''}
      ${desktopLayout === 'third' ? 'md:col-span-4' : ''}
    `}
      style={{ order }}
    >
      {backgroundImage && (
        <SanityImageBlock fill image={backgroundImage} className="z-0 object-cover" />
      )}
      <Container className="relative z-10 flex min-h-screen flex-col items-center justify-center py-20">
        <article className="max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-2xl uppercase tracking-wider md:text-3xl">{title}</h2>
          <p className="mb-8 text-4xl md:text-5xl">{description}</p>
          {button?.link && (
            <Button variant="primary" href={extractUrl(button.link)}>
              {button.text || 'Learn More'}
            </Button>
          )}
        </article>
      </Container>
    </section>
  )
}
