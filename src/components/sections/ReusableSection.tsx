import Link from 'next/link'
import { cn } from '@/libs/functions';
import SanityImageBlock from '../utility/SanityImageBlock';

import type { ReusableSection } from '@/sanity/types';
import GradientOverlay from "@/components/ui/GradientOverlay";

const widthMap = {
  full: 'w-full',
  half: 'md:w-1/2',
  third: 'md:w-1/3',
};


export default function ReusableSection({ backgroundImage, title, width = 'full', eyebrow, buttonCta, buttonText }: ReusableSection) {
  return (
    <section
      className={cn(
        'h-[640px] lg:h-[672px] p-5',
        widthMap[width]
      )}>
      <div className="relative z-10 flex h-full flex-col justify-between items-center rounded-lg overflow-hidden py-20">
        <GradientOverlay
          direction='to-b'
          className={cn(
            'absolute inset-0 z-10 from-black to-transparent transition-all duration-900',
          )}
        />
        {!!backgroundImage && (<SanityImageBlock fill priority image={backgroundImage} className="object-cover absolute" />)}
        <div className='relative z-11 w-full text-center'>
          {eyebrow && (
            <span className="block uppercase font-brandon text-md tracking-widest text-rose-gold mb-5">
              {eyebrow}
            </span>
          )}
          {!!title && <h1 className="text-3xl font-cormorant mb-2 text-foreground">{title}</h1>}
        </div>
        {buttonText && (
          <Link
            className="relative z-11 inline-block border border-foreground rounded-3xl px-4 py-2 text-sm uppercase tracking-wider hover:bg-foreground hover:text-dark-gray transition"
            href={buttonCta || '/'}
          >
            {buttonText}
          </Link>

        )}
      </div>
    </section>
  );
}
