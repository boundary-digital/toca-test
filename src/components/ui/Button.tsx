import { cn } from '@/libs/functions';
import Link from 'next/link';
import { type AnchorHTMLAttributes, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  href?: string
}

export default function Button({
  variant = 'primary',
  children,
  className,
  icon,
  iconPosition = 'right',
  href = '#',
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-sans font-medium',
    'transition-all duration-200 uppercase tracking-[0.1em]',
    'cursor-pointer'
  )

  const variantClasses: Record<ButtonVariant, string> = {
    primary: cn(
      'px-5 py-[13px] text-[14px] leading-[1em] min-h-[40px] bg-transparent text-white border border-white/50 backdrop-blur-[20px] rounded-full',
      'hover:bg-white/10',
      'focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-dark-gray'
    ),
    secondary: cn(
      'px-5 py-[13px] text-[14px] leading-[1em] min-h-[40px] bg-transparent text-white border border-white/50 backdrop-blur-[20px] rounded-full',
      'hover:bg-white/10',
      'focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-dark-gray'
    ),
    tertiary: cn(
      'text-rose-gold bg-transparent border-b-[0.5px] border-rose-gold rounded-none px-0 py-0 min-h-0',
      'hover:opacity-70',
      'focus:outline-none focus:ring-2 focus:ring-rose-gold focus:ring-offset-2 focus:ring-offset-dark-gray'
    )
  }

  const isIconOnly = icon && !children

  const renderContent = () => (
    <>
      {icon && iconPosition === 'left' && !isIconOnly && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && !isIconOnly && <span className="ml-2">{icon}</span>}
      {isIconOnly && icon}
    </>
  )

  return (
    <Link
      href={href}
      className={cn(
        baseStyles,
        variant !== 'tertiary',
        variantClasses[variant],
        isIconOnly && 'aspect-square px-0',
        className
      )}
      {...props}
    >
      {renderContent()}
    </Link>
  )
}