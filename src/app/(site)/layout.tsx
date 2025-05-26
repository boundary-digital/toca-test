import type { Metadata } from 'next';
import '@/styles/globals.css';
import FooterWrapper from '@/components/layout/FooterWrapper';
import Header from '@/components/layout/header/Header';
import { brandonGrotesque, cormorant, karlGeoff } from '@/fonts';

export const metadata: Metadata = {
  title: 'Toca Madera',
  description: 'Modern Mexican Steakhouse',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${brandonGrotesque.variable} ${cormorant.variable} ${karlGeoff.variable} antialiased`}>
        <Header />
        <main className='min-h-screen'>{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
