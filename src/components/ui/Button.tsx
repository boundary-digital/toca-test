import { cn } from '@/libs/functions';
import { buttonStyles } from '@/styles/constants';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: ReactNode;
  className?: string;
}

export default function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  const styles = buttonStyles[variant];

  return (
    <button className={cn(styles.base, styles.default, styles.hover, styles.focus, className)} {...props}>
      {children}
    </button>
  );
}
