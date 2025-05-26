'use client';

import { ReactNode } from 'react';

interface HomePageLayoutProps {
  children: ReactNode;
}

export default function HomePageLayout({ children }: HomePageLayoutProps) {
  return (
    <div className='relative w-full'>
      {/* Hero Section - Full width */}
      <div className='relative'>{children}</div>
    </div>
  );
}
