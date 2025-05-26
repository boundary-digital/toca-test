'use client';

import { cn } from '@/libs/functions';
import React from 'react';

export type CardLayoutType = 'single' | 'two-column' | 'three-column' | 'four-column' | 'mixed-1-2' | 'mixed-2-3';
export type CardSpacing = 'tight' | 'normal' | 'relaxed';
export type ContainerWidth = 'full' | 'container' | 'narrow';

interface CardLayoutProps {
  layout?: CardLayoutType;
  spacing?: CardSpacing;
  containerWidth?: ContainerWidth;
  children: React.ReactNode;
  className?: string;
}

const spacingClasses: Record<CardSpacing, string> = {
  tight: 'gap-2.5 md:gap-4',
  normal: 'gap-6 md:gap-8',
  relaxed: 'gap-8 md:gap-10',
};

const containerClasses: Record<ContainerWidth, string> = {
  full: 'w-full',
  container: 'container mx-auto px-5 md:px-10',
  narrow: 'max-w-5xl mx-auto px-5 md:px-10',
};

export default function CardLayout({
  layout = 'single',
  spacing = 'normal',
  containerWidth = 'container',
  children,
  className,
}: CardLayoutProps) {
  const childrenArray = React.Children.toArray(children);

  const renderLayout = () => {
    switch (layout) {
      case 'single':
        return <div className={cn('flex flex-col', spacingClasses[spacing])}>{children}</div>;

      case 'two-column':
        return <div className={cn('grid grid-cols-1 md:grid-cols-2', spacingClasses[spacing])}>{children}</div>;

      case 'three-column':
        return (
          <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3', spacingClasses[spacing])}>
            {children}
          </div>
        );

      case 'four-column':
        return (
          <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4', spacingClasses[spacing])}>
            {children}
          </div>
        );

      case 'mixed-1-2':
        // First card full width, rest in 2 columns
        return (
          <div className={cn('flex flex-col', spacingClasses[spacing])}>
            {childrenArray[0]}
            {childrenArray.length > 1 && (
              <div className={cn('grid grid-cols-1 md:grid-cols-2', spacingClasses[spacing])}>
                {childrenArray.slice(1)}
              </div>
            )}
          </div>
        );

      case 'mixed-2-3':
        // First 2 cards in 2 columns, rest in 3 columns
        return (
          <div className={cn('flex flex-col', spacingClasses[spacing])}>
            {childrenArray.length >= 2 && (
              <div className={cn('grid grid-cols-1 md:grid-cols-2', spacingClasses[spacing])}>
                {childrenArray.slice(0, 2)}
              </div>
            )}
            {childrenArray.length > 2 && (
              <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3', spacingClasses[spacing])}>
                {childrenArray.slice(2)}
              </div>
            )}
          </div>
        );

      default:
        return children;
    }
  };

  return <div className={cn(containerClasses[containerWidth], className)}>{renderLayout()}</div>;
}
