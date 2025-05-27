'use client';

import urlFor from '@/sanity/lib/urlFor';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
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

const SectionDivider = () => (
  <div className='flex flex-col items-center justify-center px-8'>
    <div className='relative h-[100px] w-[1px] bg-[#C5A288] md:h-[150px]'></div>
    <svg xmlns='http://www.w3.org/2000/svg' width='7' height='9' viewBox='0 0 7 9' fill='none'>
      <path
        d='M6.6834 2.72862L3.8254 0.27891C3.63815 0.118415 3.36185 0.118415 3.17461 0.27891L0.316605 2.72862C0.133236 2.8858 0.0884199 3.15158 0.210111 3.36019L3.06811 8.25962C3.26105 8.59037 3.73895 8.59037 3.93189 8.25962L6.78989 3.36019C6.91158 3.15158 6.86677 2.8858 6.6834 2.72862Z'
        fill='#C5A288'
      />
    </svg>
  </div>
);

export default function InstagramSection({
  heading,
  subheading,
  instagramHandle,
  instagramLink,
  images,
  backgroundVideo,
}: InstagramSectionProps) {
  return (
    <section className='bg-dark-gray relative h-[720px] w-[100dvw] pt-[20px] pb-0 md:mx-[-2.5rem] md:pt-[50px]'>
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
          <div className='absolute inset-0 bg-gradient-to-b from-black/40 to-black/40' />
        </div>
      )}

      <div className='relative z-10 mb-[27px] text-center md:mb-[45px]'>
        <h2 className='text-rose-gold mb-[29px] font-sans text-[13px] font-medium tracking-[0.15em] uppercase md:mb-[33px] md:text-[15px]'>
          {heading}
        </h2>
        <p className='mx-auto max-w-[330px] font-serif text-[32px] leading-[1.1] tracking-[-0.015em] text-white md:max-w-[497px] md:text-[40px]'>
          {subheading}
        </p>
      </div>

      <div className='relative z-10 mb-[50px] text-center md:mb-[80px]'>
        <Button
          href={instagramLink}
          target='_blank'
          rel='noopener noreferrer'
          variant='secondary'
          size='default'
          icon={<FaInstagram className='h-4 w-4' />}
          iconPosition='left'
        >
          {instagramHandle}
        </Button>
      </div>

      <div className='relative z-10 mb-[40px] flex flex-col items-center md:mb-[60px]'>
        <img src='/symbol.svg' className='h-[40px]' alt='Symbol' />
        <SectionDivider />
      </div>

      <div className='absolute right-0 bottom-0 left-0 z-10'>
        <div className='relative h-[400px] md:h-[500px]'>
          <div className='absolute inset-0 flex items-end justify-center gap-4 overflow-x-auto overflow-y-hidden px-8 md:gap-6 md:overflow-visible'>
            {images.slice(0, 7).map((image, index) => {
              const verticalOffsets = [60, 100, 40, 0, 40, 100, 60];
              const size = 260;

              const translateY = verticalOffsets[index];

              return (
                <div
                  key={index}
                  className='group relative flex-shrink-0 transition-all duration-500 hover:z-30'
                  style={{
                    transform: `translateY(${translateY}px)`,
                    width: `${size}px`,
                    height: `${size}px`,
                  }}
                >
                  <div className='relative h-full w-full overflow-hidden rounded-2xl shadow-[0px_20px_60px_0px_rgba(0,0,0,0.50)]'>
                    <img
                      src={urlFor(image)
                        .width(size * 2)
                        .height(size * 2)
                        .url()}
                      alt={`Instagram post ${index + 1}`}
                      className='h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-90'
                    />
                    <div className='absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='from-dark-gray absolute top-0 right-0 left-0 h-[268px] bg-gradient-to-b to-transparent' />
      <div className='from-dark-gray absolute right-0 bottom-0 left-0 h-[100px] bg-gradient-to-t to-transparent' />
    </section>
  );
}
