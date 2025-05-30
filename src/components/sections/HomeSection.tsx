import Container from '@/components/layout/Container';
import SanityImageBlock from '@/components/utility/SanityImageBlock';
import { extractUrl } from '@/libs/functions';
import type { SanityImage, SanityLink } from '@/sanity/types';
import Link from 'next/link';

interface HomeSectionProps {
  backgroundImage: SanityImage;
  title: string;
  description: string;
  button?: {
    text: string;
    link: SanityLink;
  };
  desktopLayout?: 'full' | 'half' | 'third';
  order?: number;
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
    <section className={`
      relative w-full min-h-[50vh] md:min-h-screen
      col-span-12
      ${desktopLayout === 'half' ? 'md:col-span-6' : ''}
      ${desktopLayout === 'third' ? 'md:col-span-4' : ''}
    `}
    style={{order}}>
      
      {backgroundImage && (
        <SanityImageBlock
          fill
          image={backgroundImage}
          className="z-0 object-cover"
        />
      )}
      <Container className="relative z-10 flex min-h-screen flex-col items-center justify-center py-20">
        <div className="max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-5xl uppercase tracking-wider md:text-6xl">
            {title}
          </h2>
          <p className="mb-8 text-lg md:text-xl">{description}</p>
          {button?.link && (
            <Link
              href={extractUrl(button.link)}
              target={button.link.isNewWindow ? '_blank' : undefined}
              className="inline-block border-2 border-white px-8 py-3 text-sm uppercase tracking-widest transition-colors hover:bg-white hover:text-black"
            >
              {button.text || 'Learn More'}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
