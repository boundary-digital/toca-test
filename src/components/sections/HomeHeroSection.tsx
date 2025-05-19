import type { Section } from '@/sanity/types';
import HeroTitle from '@/components/ui/HeroTitle';
import SanityImageBlock from '../utility/SanityImageBlock';
import GradientOverlay from "@/components/ui/GradientOverlay";
import {cn} from "@/libs/functions";

export default function HomeHeroSection({ backgroundImage, title }: Section) {
  return (
    <section className="relative mb-[20%] w-full">
      {!!title && (<HeroTitle className="z-11 absolute left-1/2 bottom-[-20%] transform -translate-x-1/2" title={title}  />) }
      {!!backgroundImage && <SanityImageBlock priority image={backgroundImage} /> }
      <GradientOverlay
        direction='to-t'
        className={cn(
          'absolute inset-0 z-10 from-black to-transparent transition-all duration-300',
        )}
      />
    </section>
  );
}
