import { cn } from '@/libs/functions';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'default' | 'small';
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function Button({
  variant = 'primary',
  size = 'default',
  children,
  className,
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-medium transition-all duration-200 uppercase tracking-[0.1em] rounded-full';

  const sizeStyles = {
    default: 'px-5 py-[13px] text-[14px] leading-[1em] min-h-[40px]',
    small: 'px-4 py-[10px] text-[13px] leading-[1em] min-h-[32px]',
  };

  const variantStyles = {
    primary: {
      default: 'bg-rose-gold text-white border border-transparent',
      hover: 'hover:bg-opacity-90',
      focus: 'focus:outline-none focus:ring-2 focus:ring-rose-gold focus:ring-offset-2 focus:ring-offset-dark-gray',
    },
    secondary: {
      default: 'bg-transparent text-white border border-white/50 backdrop-blur-[20px]',
      hover: 'hover:bg-white/10',
      focus: 'focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-dark-gray',
    },
    tertiary: {
      default: 'text-rose-gold bg-transparent border-b-[0.5px] border-rose-gold rounded-none px-0 py-0 min-h-0',
      hover: 'hover:opacity-70',
      focus: 'focus:outline-none focus:ring-2 focus:ring-rose-gold focus:ring-offset-2 focus:ring-offset-dark-gray',
    },
  };

  const styles = variantStyles[variant];
  const isIconButton = icon && !children;

  return (
    <button
      className={cn(
        baseStyles,
        variant !== 'tertiary' && sizeStyles[size],
        styles.default,
        styles.hover,
        styles.focus,
        isIconButton && 'aspect-square px-0',
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && !isIconButton && <span className='mr-2'>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && !isIconButton && <span className='ml-2'>{icon}</span>}
      {isIconButton && icon}
    </button>
  );
}
