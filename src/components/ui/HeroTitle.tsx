import { cn } from '@/libs/functions';
import SectionDivider from './SectionDivider';

export default function HeroTitle({ title, className }: { title: string, className?: string }) {
  const [first, second, third] = title?.split(' ');
  return (
    <div className={cn('absolute text-foreground py-20 px-4 text-center', className)}>
      <div className="max-w-5xl mx-auto uppercase">
        {!!first && ( <div className="relative flex items-center justify-center my-6">
          <span className="p-1">
            <SectionDivider />
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-[140px] font-serif leading-none">
            {first}
          </h1>
        </div>)
        }

        {!!second && (
          <div className="relative flex items-center justify-center my-6">
            <h1 className="text-6xl md:text-7xl lg:text-[140px] font-serif leading-none">
              {second}
            </h1>
            <span className="p-1">
              <SectionDivider />
            </span>
          </div>
        )}

        {third && ( <h1 className="text-6xl md:text-7xl lg:text-[140px] font-serif leading-none">
          {third}
        </h1>
        )}

      </div>
    </div>
  );
}
