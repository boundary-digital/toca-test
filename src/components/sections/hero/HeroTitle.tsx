'use client'
import { cn } from '@/libs/functions'
import { useFitty } from '@/hooks'
import { useRef } from 'react'

interface TitleLine {
  text: string
  alignment: 'left' | 'right'
  divider: 'none' | 'before' | 'after'
}

interface HeroTitleProps {
  titleLines: TitleLine[]
  className?: string
}

export default function HeroTitle({ titleLines, className = '' }: HeroTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useFitty(titleRef, {
    minSize: 48,
    maxSize: 140
  })

  return (
    <h1
      ref={titleRef}
      className={cn('uppercase font-serif leading-none tracking-[0.1em]', className)}
    >
      {titleLines.map((line, i)=> (
        <div key={i} className={cn(line.alignment === 'left' ? 'text-left' : 'text-right')}>
          {line.divider === 'before' && <span className="section-divider" />}
          <span>{line.text}</span>
          {line.divider === 'after' && <span className="section-divider" />}
        </div>
      ))}
    </h1>
  )
}
