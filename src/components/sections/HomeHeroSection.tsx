import type { SanityImage } from '@/sanity/types';
import SanityImageBlock from '../utility/SanityImageBlock';

export default function HomeHeroSection({ backgroundImage }: { backgroundImage: SanityImage }) {
  return (
    <section className='relative mb-[242px] h-[840px] w-full overflow-hidden overflow-visible md:mb-[300px] md:h-[900px]'>
      <SanityImageBlock priority image={backgroundImage} fill className='object-cover' />

      <div className='to-dark-gray absolute inset-0 bg-gradient-to-b from-transparent' />

      {/* Headline Lockup */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-center'>
        <div className='flex flex-col items-center gap-0'>
          <h1 className='font-serif text-[48.85px] leading-[1em] tracking-[0.1em] text-white uppercase md:text-[140px]'>
            Modern
          </h1>
          <h1 className='mt-[-5px] font-serif text-[48.85px] leading-[1em] tracking-[0.1em] text-white uppercase md:mt-[-15px] md:text-[140px]'>
            Mexican
          </h1>
          <h1 className='mt-[-5px] font-serif text-[48.85px] leading-[1em] tracking-[0.1em] text-white uppercase md:mt-[-15px] md:text-[140px]'>
            Steakhouse
          </h1>
        </div>
      </div>
    </section>
  );
}
