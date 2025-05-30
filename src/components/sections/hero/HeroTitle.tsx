'use client'
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

  // if (!titleLines || titleLines.length === 0) {
  //   const defaultTitle = 'MODERN MEXICAN STEAKHOUSE'
  //   const words = defaultTitle.split(' ')

  //   return (
  //     <h1
  //       ref={titleRef}
  //       className={`uppercase font-serif leading-none tracking-[0.1em] ${className}`}
  //     >
  //       {words.map((word, i) => (
  //         <div key={i} className={i % 2 === 0 ? 'text-left' : 'text-right'}>
  //           {word}
  //         </div>
  //       ))}
  //     </h1>
  //   )
  // }

  return (
    <h1
      ref={titleRef}
      className={`uppercase font-serif leading-none tracking-[0.1em] ${className}`}
    >
      {titleLines.map((line, i) => (
        <div key={i} className={`text-${line.alignment}`}>
          {line.divider === 'before' && <span className="section-divider" />}
          {line.text}
          {line.divider === 'after' && <span className="section-divider" />}
        </div>
      ))}
    </h1>
  )
}
