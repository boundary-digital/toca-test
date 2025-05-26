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
}

export default function InstagramSection({
  heading,
  subheading,
  instagramHandle,
  instagramLink,
  images,
}: InstagramSectionProps) {
  return (
    <section className='bg-dark-gray relative w-full py-[100px] md:py-[150px]'>
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
      <div className='relative z-10 mx-auto max-w-[1440px] px-5 md:px-0'>
        <div className='mb-[60px] grid grid-cols-3 gap-0 md:mb-[80px] md:grid-cols-9'>
          {images.slice(0, 9).map((image, index) => (
            <div key={index} className='group relative aspect-square overflow-hidden'>
              <img
                src={urlFor(image).width(400).height(400).url()}
                alt={`Instagram post ${index + 1}`}
                className='h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-75'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
