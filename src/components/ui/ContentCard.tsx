'use client';

import { cn } from '@/libs/functions';
import urlFor from '@/sanity/lib/urlFor';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Button from './Button';

export type CardStyle = 'standard' | 'compact' | 'location';

export interface ContentCardProps {
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
  cardStyle?: CardStyle;
  className?: string;
}

const cardStyleConfig: Record<
  CardStyle,
  {
    height: string;
    imageWidth: number;
    imageHeight: number;
    titleSize: string;
    titleMaxWidth?: string;
    gradients: React.ReactNode;
    defaultLinkText: string;
  }
> = {
  standard: {
    height: 'h-[640px] md:h-[672px]',
    imageWidth: 1360,
    imageHeight: 672,
    titleSize: 'text-[32px] md:text-[40px]',
    titleMaxWidth: 'max-w-[330px] md:max-w-[680px]',
    gradients: (
      <>
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent' />
      </>
    ),
    defaultLinkText: 'LEARN MORE',
  },
  compact: {
    height: 'h-[640px] md:h-[672px]',
    imageWidth: 672,
    imageHeight: 672,
    titleSize: 'text-[32px] md:text-[40px]',
    titleMaxWidth: 'max-w-[330px] md:max-w-[547px]',
    gradients: (
      <>
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent' />
      </>
    ),
    defaultLinkText: 'EXPLORE MENU',
  },
  location: {
    height: 'h-[320px] md:h-[672px]',
    imageWidth: 443,
    imageHeight: 672,
    titleSize: 'text-[32px] md:text-[44px]',
    gradients: (
      <>
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80' />
        <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-70' />
      </>
    ),
    defaultLinkText: 'LEARN MORE',
  },
};

export default function ContentCard({
  heading,
  title,
  backgroundImage,
  link,
  cardStyle = 'standard',
  className,
}: ContentCardProps) {
  const linkHref = link?.linkType === 'external' ? link.externalLink : link?.href || '#';
  const config = cardStyleConfig[cardStyle];

  return (
    <article className={cn('relative w-full overflow-hidden rounded-2xl', config.height, className)}>
      <div className='absolute inset-0'>
        <img
          src={urlFor(backgroundImage).width(config.imageWidth).height(config.imageHeight).url()}
          alt={heading}
          className='h-full w-full object-cover'
        />
      </div>

      {config.gradients}

      <div className='relative flex h-full flex-col items-center justify-between px-5 py-12 md:px-0 md:py-20'>
        <div className='flex flex-col items-center gap-4 md:gap-[30px]'>
          <h2 className='text-rose-gold font-sans text-[13px] font-medium tracking-[0.15em] uppercase md:text-[15px]'>
            {heading}
          </h2>

          <p
            className={cn(
              'text-center font-serif leading-[1.1] tracking-[-0.6px] text-white',
              config.titleSize,
              config.titleMaxWidth
            )}
          >
            {title}
          </p>
        </div>
        {link && (
          <Button href={linkHref || '#'} variant='secondary'>
            {link.title || config.defaultLinkText}
          </Button>
        )}
      </div>
    </article>
  );
}
