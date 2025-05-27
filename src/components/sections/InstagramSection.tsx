'use client';

import urlFor from '@/sanity/lib/urlFor';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import Button from '../ui/Button';

interface InstagramSectionProps {
  heading: string;
  subheading: string;
  instagramHandle: string;
  instagramLink: string;
  images: SanityImageSource[];
  backgroundVideo?: {
    asset: {
      url: string;
    };
  };
}

export default function InstagramSection({
  heading,
  subheading,
  instagramHandle,
  instagramLink,
  images,
  backgroundVideo,
}: InstagramSectionProps) {
  return (
    <section className='bg-dark-gray relative w-[100dvw] overflow-hidden py-[100px] md:mx-[-2.5rem] md:py-[150px]'>
      {/* Background video */}
      {backgroundVideo?.asset?.url && (
        <div className='absolute inset-0'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-luminosity'
          >
            <source src={backgroundVideo.asset.url} type='video/mp4' />
          </video>
          {/* Gradient overlay */}
          <div className='absolute inset-0 bg-gradient-to-b from-black/40 to-black/40' />
        </div>
      )}

      {/* Background texture overlay */}
      <div className='absolute inset-0 opacity-50 mix-blend-overlay'>
        <div className='h-full w-full bg-[url("/noise.png")] bg-repeat' />
      </div>

      {/* Section Header */}
      <div className='relative z-10 mb-[27px] text-center md:mb-[45px]'>
        <h2 className='text-rose-gold mb-[29px] font-sans text-[13px] font-medium tracking-[0.15em] uppercase md:mb-[33px] md:text-[15px]'>
          {heading}
        </h2>
        <p className='mx-auto max-w-[330px] font-serif text-[32px] leading-[1.1] tracking-[-0.015em] text-white md:max-w-[497px] md:text-[40px]'>
          {subheading}
        </p>
      </div>
      {/* Instagram Handle Button */}

      <div className='relative z-10 mb-[60px] text-center md:mb-[80px]'>
        <Link href={instagramLink} target='_blank' rel='noopener noreferrer'>
          <Button variant='secondary' size='default' icon={<FaInstagram className='h-4 w-4' />} iconPosition='left'>
            {instagramHandle}
          </Button>
        </Link>
      </div>

      {/* Instagram Grid */}
      <div className='relative z-10 mx-auto mb-[60px] w-full overflow-hidden md:mb-[80px]'>
        <div className='animate-scroll flex gap-4'>
          {/* Duplicate images for seamless loop */}
          {[...images.slice(0, 9), ...images.slice(0, 9)].map((image, index) => {
            // Generate deterministic size between 250-360px based on index
            // This ensures the same size is generated on both server and client
            const sizeVariation = [
              280, 310, 340, 290, 320, 350, 270, 300, 330, 260, 340, 310, 290, 320, 280, 350, 300, 270,
            ];
            const size = sizeVariation[index % sizeVariation.length];

            return (
              <div
                key={index}
                className='group relative flex-shrink-0 overflow-hidden rounded-2xl shadow-[0px_20px_60px_0px_rgba(0,0,0,0.30)]'
                style={{ width: `${size}px`, height: `${size}px` }}
              >
                <img
                  src={urlFor(image)
                    .width(size * 2)
                    .height(size * 2)
                    .url()}
                  alt={`Instagram post ${index + 1}`}
                  className='h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-75'
                />
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
              </div>
            );
          })}
        </div>
      </div>
      <div className='from-dark-gray absolute top-0 right-0 left-0 h-[268px] bg-gradient-to-b to-transparent' />
      <div className='from-dark-gray absolute right-0 bottom-0 left-0 h-[200px] bg-gradient-to-t to-transparent' />
    </section>
  );
}
