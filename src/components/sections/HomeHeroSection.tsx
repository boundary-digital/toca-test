import type { SanityImage } from '@/sanity/types';
import SanityImageBlock from '../utility/SanityImageBlock';

const SectionDivider = () => (
  <div className='flex flex-1 items-center justify-center'>
    <svg xmlns='http://www.w3.org/2000/svg' width='9' height='7' viewBox='0 0 9 7' fill='none'>
      <path
        d='M6.27138 6.6834L8.72109 3.8254C8.88158 3.63815 8.88158 3.36185 8.72109 3.1746L6.27137 0.316604C6.1142 0.133235 5.84842 0.0884197 5.63981 0.21011L0.740382 3.06811C0.409629 3.26105 0.409628 3.73895 0.740381 3.93189L5.63981 6.78989C5.84842 6.91158 6.1142 6.86676 6.27138 6.6834Z'
        fill='#C5A288'
      />
    </svg>
    <div className='relative h-[1px] flex-1 bg-[#C5A288]'></div>
    <svg xmlns='http://www.w3.org/2000/svg' width='9' height='7' viewBox='0 0 9 7' fill='none'>
      <path
        d='M2.72862 0.316604L0.27891 3.1746C0.118415 3.36185 0.118415 3.63815 0.27891 3.82539L2.72862 6.6834C2.8858 6.86676 3.15158 6.91158 3.36019 6.78989L8.25962 3.93189C8.59037 3.73895 8.59037 3.26105 8.25962 3.06811L3.36019 0.21011C3.15158 0.0884194 2.8858 0.133235 2.72862 0.316604Z'
        fill='#C5A288'
      />
    </svg>
  </div>
);
export default function HomeHeroSection({ backgroundImage }: { backgroundImage: SanityImage }) {
  return (
    <section className='relative mb-[242px] h-[840px] w-full overflow-hidden overflow-visible md:mb-[300px] md:h-[900px]'>
      <SanityImageBlock priority image={backgroundImage} fill className='object-cover' />

      <div className='to-dark-gray absolute inset-0 bg-gradient-to-b from-transparent' />

      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-center'>
        <div className='flex flex-col items-center gap-0'>
          <div className='flex w-full items-center gap-[10px] md:gap-[2.5px]'>
            <h1 className='font-serif text-[48.85px] leading-[1em] tracking-[0.1em] text-white uppercase md:text-[140px]'>
              Modern
            </h1>
            <SectionDivider />
          </div>

          <div className='flex w-full items-center gap-[10px] md:gap-[2.5px]'>
            <SectionDivider />
            <h1 className='font-serif text-[48.85px] leading-[1em] tracking-[0.1em] text-white uppercase md:text-[140px]'>
              Mexican
            </h1>
          </div>

          <h1 className='font-serif text-[48.85px] leading-[1em] tracking-[0.1em] text-white uppercase md:text-[140px]'>
            Steakhouse
          </h1>
        </div>
      </div>
    </section>
  );
}
