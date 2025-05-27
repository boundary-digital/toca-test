'use client';

import urlFor from '@/sanity/lib/urlFor';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Link from 'next/link';
import Button from '../ui/Button';

interface Cocktail {
  name: string;
  image: SanityImageSource;
}

interface SignatureCocktailsSectionProps {
  heading: string;
  subheading: string;
  cocktails: Cocktail[];
  backgroundImage?: SanityImageSource;
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
}

export default function SignatureCocktailsSection({
  heading,
  subheading,
  cocktails,
  backgroundImage,
  link,
}: SignatureCocktailsSectionProps) {
  const linkHref = link?.linkType === 'external' ? link.externalLink : link?.href || '#';

  return (
    <section className='bg-dark-gray relative mt-[88px] w-[100dvw] py-[100px] md:mx-[-2.5rem] md:py-[150px]'>
      {/* Background image with overlay effect */}
      {backgroundImage && (
        <div
          className='absolute inset-0 opacity-50 mix-blend-overlay'
          style={{
            backgroundImage: `url(${urlFor(backgroundImage).url()})`,
            backgroundColor: 'lightgray',
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}

      {/* Background texture overlay */}
      <div className='absolute inset-0 opacity-50 mix-blend-overlay'>
        <div className='h-full w-full bg-[url("/noise.png")] bg-repeat' />
      </div>

      {/* Section Header */}
      <div className='relative z-10 mb-[27px] text-center md:mb-[79px]'>
        <h2 className='text-rose-gold mb-[29px] font-sans text-[13px] font-medium tracking-[0.15em] uppercase md:mb-[33px] md:text-[15px]'>
          {heading}
        </h2>
        <p className='mx-auto max-w-[330px] font-serif text-[32px] leading-[1.1] tracking-[-0.015em] text-white md:max-w-[722px] md:text-[40px]'>
          {subheading}
        </p>
      </div>

      {/* CTA Button */}
      {link && (
        <div className='relative z-10 mb-[66px] text-center md:mb-[80px]'>
          <Link href={linkHref || '#'}>
            <Button variant='secondary' size='default'>
              {link.title || 'LEARN MORE'}
            </Button>
          </Link>
        </div>
      )}

      {/* Cocktails Grid */}
      <div className='relative z-10 mx-auto max-w-[1500px] px-5 md:px-10'>
        <div className='mb-[80px] grid grid-cols-2 gap-x-[20px] gap-y-[40px] md:mb-[100px] md:grid-cols-4 md:gap-x-[20px] md:gap-y-0'>
          {cocktails.map((cocktail, index) => (
            <div key={index} className='group relative'>
              <div className='relative aspect-[300/400] overflow-hidden rounded-[16px] shadow-[0px_20px_60px_rgba(0,0,0,0.3)] md:aspect-[360/480]'>
                <img
                  src={urlFor(cocktail.image).width(360).height(480).url()}
                  alt={cocktail.name}
                  className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
              </div>
              <h3 className='text-rose-gold font-karl relative -translate-y-1/2 text-center text-[64px] leading-[1] md:text-[80px]'>
                {cocktail.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className='from-dark-gray absolute top-0 right-0 left-0 h-[200px] bg-gradient-to-b to-transparent' />
      <div className='from-dark-gray absolute right-0 bottom-0 left-0 h-[200px] bg-gradient-to-t to-transparent' />
    </section>
  );
}
