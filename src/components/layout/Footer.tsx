'use client';

import urlFor from '@/sanity/lib/urlFor';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Link from 'next/link';
import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

interface SanityLink {
  _type: string;
  title?: string;
  isExternal?: boolean;
  isNewWindow?: boolean;
  external?: string;
  internal?: {
    _ref?: string;
    _type?: string;
    slug?: {
      current: string;
    };
  };
}

interface SocialLink {
  platform: 'instagram' | 'facebook' | 'twitter';
  url: string;
}

interface FooterProps {
  title: string;
  navigationLinks: SanityLink[];
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterLocationPlaceholder: string;
  newsletterButtonText: string;
  socialLinks?: SocialLink[];
  bottomLinks: SanityLink[];
  logo?: SanityImageSource;
}

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
    console.log('Newsletter submission:', { email, location });
  };

  const getLinkHref = (link: SanityLink) => {
    if (link.isExternal && link.external) {
      return link.external;
    }
    if (!link.isExternal && link.internal?.slug?.current) {
      return link.internal.slug.current;
    }
    return '#';
  };

  // Dynamically distribute links into 3 columns
  const distributeLinksIntoColumns = (links: SanityLink[]) => {
    const totalLinks = links.length;
    const linksPerColumn = Math.ceil(totalLinks / 3);

    const leftColumn = links.slice(0, linksPerColumn);
    const middleColumn = links.slice(linksPerColumn, linksPerColumn * 2);
    const rightColumn = links.slice(linksPerColumn * 2);

    return { leftColumn, middleColumn, rightColumn };
  };

  const { leftColumn, middleColumn, rightColumn } = distributeLinksIntoColumns(navigationLinks);

  return (
    <footer className='relative w-full overflow-x-hidden bg-black'>
      <div className='bg-[#1a1a1a] px-5 py-10 pt-[70px] md:px-10 md:pt-[160px] md:pb-[50px]'>
        <div className='mx-auto max-w-[1440px]'>
          <div className='mb-10 md:mb-25'>
            <div className='flex flex-col items-center gap-5 text-center md:hidden'>
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={getLinkHref(link)}
                  className='font-serif text-[22px] leading-[1] tracking-[-0.015em] text-white transition-opacity hover:opacity-70'
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <div className='hidden md:flex md:justify-center'>
              <div className='flex w-full max-w-[1040px] justify-between'>
                <div className='flex flex-col gap-12'>
                  {leftColumn.map((link, index) => (
                    <Link
                      key={index}
                      href={getLinkHref(link)}
                      className='text-center font-serif text-[24px] leading-[1] tracking-[-0.015em] text-white transition-opacity hover:opacity-70'
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>

                <div className='flex flex-col gap-12'>
                  {middleColumn.map((link, index) => (
                    <Link
                      key={index}
                      href={getLinkHref(link)}
                      className='text-center font-serif text-[24px] leading-[1] tracking-[-0.015em] text-white transition-opacity hover:opacity-70'
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>

                <div className='flex flex-col gap-12'>
                  {rightColumn.map((link, index) => (
                    <Link
                      key={index}
                      href={getLinkHref(link)}
                      className='text-center font-serif text-[24px] leading-[1] tracking-[-0.015em] text-white transition-opacity hover:opacity-70'
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-auto'>
          <div className='flex flex-col items-center gap-5 md:flex-row md:justify-between md:gap-0'>
            {socialLinks && socialLinks.length > 0 && (
              <div className='order-1 flex md:order-none'>
                {socialLinks
                  .filter((social) => social.platform === 'instagram')
                  .map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group relative h-5 w-5 transition-all'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='21'
                        viewBox='0 0 20 21'
                        fill='none'
                        className='h-full w-full'
                      >
                        <g clipPath='url(#clip0_1605_29327)'>
                          <path
                            d='M14.168 1.8125H5.83464C3.53345 1.8125 1.66797 3.67798 1.66797 5.97917V14.3125C1.66797 16.6137 3.53345 18.4792 5.83464 18.4792H14.168C16.4692 18.4792 18.3346 16.6137 18.3346 14.3125V5.97917C18.3346 3.67798 16.4692 1.8125 14.168 1.8125Z'
                            stroke='white'
                            strokeWidth='1.66667'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='transition-all group-hover:fill-white'
                          />
                          <path
                            d='M13.3337 9.61783C13.4366 10.3114 13.3181 11.0197 12.9952 11.642C12.6723 12.2643 12.1614 12.769 11.5351 13.0842C10.9088 13.3994 10.1991 13.5092 9.5069 13.3978C8.81468 13.2864 8.17521 12.9596 7.67944 12.4638C7.18367 11.968 6.85685 11.3286 6.74546 10.6363C6.63408 9.94412 6.74379 9.23441 7.05901 8.60814C7.37423 7.98187 7.8789 7.47095 8.50123 7.14803C9.12356 6.82511 9.83187 6.70665 10.5254 6.8095C11.2328 6.9144 11.8878 7.24405 12.3935 7.74975C12.8992 8.25545 13.2288 8.91039 13.3337 9.61783Z'
                            stroke='white'
                            strokeWidth='1.66667'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='transition-all group-hover:stroke-black'
                          />
                          <path
                            d='M14.582 5.5625H14.5904'
                            stroke='white'
                            strokeWidth='1.66667'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='transition-all group-hover:stroke-black'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_1605_29327'>
                            <rect width='20' height='20' fill='white' transform='translate(0 0.140625)' />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  ))}
              </div>
            )}

            <div className='order-2 flex flex-wrap justify-center gap-2.5 md:order-none md:flex-nowrap md:gap-8'>
              {bottomLinks.map((link, index) => (
                <Link
                  key={index}
                  href={getLinkHref(link) || '#'}
                  className='font-sans text-[10px] leading-[1] font-light tracking-[0.1em] text-white uppercase transition-opacity hover:opacity-70 md:text-[12px]'
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {logo && (
              <div className='order-3 flex-shrink-0 md:order-none'>
                <img src={urlFor(logo).width(97).height(20).url()} alt='Noble 33' className='h-[18px] w-auto md:h-5' />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='bg-black px-5 py-8 md:px-10'>
        <div className='mx-auto'>
          <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-0'>
            <div className='md:max-w-[430px]'>
              <h3 className='mb-[2px] font-serif text-[24px] leading-[1.1] tracking-[-0.015em] text-white md:text-[28px]'>
                {newsletterTitle}
              </h3>
              <p className='font-sans text-[15px] leading-[1.5] font-light tracking-[-0.015em] text-white/60 md:text-[16px]'>
                {newsletterDescription}
              </p>
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4 md:flex-row md:items-end md:gap-6'>
              <div className='relative w-full md:w-[220px]'>
                <input
                  type='text'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder={newsletterLocationPlaceholder}
                  className='w-full border-b border-white/50 bg-transparent pr-8 pb-[11px] font-sans text-[16px] leading-[1] font-light text-white placeholder-white/40 transition-colors outline-none focus:border-white md:text-[18px]'
                />
                <IoChevronDown className='absolute right-0 bottom-[13px] h-[14px] w-[14px] text-white' />
              </div>

              <div className='w-full md:w-[220px]'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={newsletterPlaceholder}
                  className='w-full border-b border-white/50 bg-transparent pb-[11px] font-sans text-[16px] leading-[1] font-light text-white placeholder-white/40 transition-colors outline-none focus:border-white md:text-[18px]'
                  required
                />
              </div>

              <button
                type='submit'
                className='flex h-10 w-full items-center justify-center border border-white px-5 font-sans text-[13px] font-medium tracking-[0.1em] text-white uppercase transition-all hover:bg-white hover:text-black md:w-auto'
              >
                {newsletterButtonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
