'use client';

import urlFor from '@/sanity/lib/urlFor';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';
import Button from '../ui/Button';

interface FooterLink {
  _type: string;
  title?: string;
  href?: string;
  linkType?: string;
  externalLink?: string;
  internalLink?: {
    _ref: string;
    _type: string;
  };
}

interface SocialLink {
  platform: 'instagram' | 'facebook' | 'twitter';
  url: string;
}

interface FooterProps {
  title: string;
  navigationLinks: FooterLink[];
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterLocationPlaceholder: string;
  newsletterButtonText: string;
  socialLinks?: SocialLink[];
  bottomLinks: FooterLink[];
  logo?: SanityImageSource;
}

const socialIcons = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  twitter: FaTwitter,
};

export default function Footer({
  navigationLinks,
  newsletterTitle,
  newsletterDescription,
  newsletterPlaceholder,
  newsletterLocationPlaceholder,
  newsletterButtonText,
  socialLinks,
  bottomLinks,
  logo,
}: FooterProps) {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Newsletter submission:', { email, location });
  };

  const getLinkHref = (link: FooterLink) => {
    return link.linkType === 'external' ? link.externalLink : link.href || '#';
  };

  return (
    <footer className='bg-dark-gray relative w-full'>
      {/* Newsletter Section */}
      <div className='px-5 py-[32px] md:px-10 md:py-[40px]'>
        <div className='mx-auto max-w-[1440px]'>
          <div className='flex flex-col gap-6 md:gap-0'>
            {/* Newsletter Text */}
            <div className='md:mb-4'>
              <h3 className='mb-2 font-serif text-[24px] leading-[1.1] text-white md:text-[28px]'>{newsletterTitle}</h3>
              <p className='font-sans text-[15px] leading-[1.5] tracking-[-0.015em] text-white/60 md:text-[16px]'>
                {newsletterDescription}
              </p>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 md:flex-row md:items-end md:gap-[23px]'>
              <div className='relative flex-1 md:max-w-[220px]'>
                <input
                  type='text'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder={newsletterLocationPlaceholder}
                  className='w-full border-b border-white/50 bg-transparent px-0 py-[11px] pr-8 font-sans text-[16px] leading-[1] text-white placeholder-white/40 transition-colors outline-none focus:border-white md:text-[18px]'
                />
                <IoChevronDown className='absolute top-1/2 right-0 h-[14px] w-[14px] -translate-y-1/2 text-white' />
              </div>
              <div className='flex-1 md:max-w-[220px]'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={newsletterPlaceholder}
                  className='w-full border-b border-white/50 bg-transparent px-0 py-[11px] font-sans text-[16px] leading-[1] text-white placeholder-white/40 transition-colors outline-none focus:border-white md:text-[18px]'
                  required
                />
              </div>
              <Button type='submit' variant='primary' size='default' className='md:ml-auto'>
                {newsletterButtonText.toUpperCase()}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className='px-5 py-[40px] md:px-10 md:py-[60px]'>
        <div className='mx-auto max-w-[1440px]'>
          {/* Navigation Links */}
          <div className='mb-[40px] flex flex-wrap justify-center gap-x-[32px] gap-y-[20px] md:mb-[80px] md:gap-x-[48px] md:gap-y-[24px]'>
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={getLinkHref(link) || '#'}
                className='font-serif text-[22px] leading-[1] tracking-[-0.015em] text-white transition-opacity hover:opacity-50 md:text-[24px]'
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Bottom Section */}
          <div className='flex flex-col items-center gap-[20px] md:flex-row md:justify-between md:gap-4'>
            {/* Bottom Links */}
            <div className='order-2 flex flex-wrap justify-center gap-[10px] md:order-1 md:justify-start md:gap-[32px]'>
              {bottomLinks.map((link, index) => (
                <Link
                  key={index}
                  href={getLinkHref(link) || '#'}
                  className='font-sans text-[10px] leading-[1] tracking-[0.1em] text-white uppercase transition-opacity hover:opacity-50 md:text-[12px]'
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Logo */}
            {logo && (
              <div className='order-3 flex-shrink-0 md:order-2'>
                <img
                  src={urlFor(logo).width(200).height(40).url()}
                  alt='Toca Madera'
                  className='h-[18px] w-auto md:h-[20px]'
                />
              </div>
            )}

            {/* Social Links */}
            {socialLinks && socialLinks.length > 0 && (
              <div className='order-1 flex gap-[10px] md:order-3'>
                {socialLinks.map((social, index) => {
                  const Icon = socialIcons[social.platform];
                  return (
                    <Link
                      key={index}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex h-[20px] w-[20px] items-center justify-center rounded-full border border-white text-white transition-all hover:opacity-50'
                    >
                      <Icon className='h-[13.33px] w-[13.33px]' />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
