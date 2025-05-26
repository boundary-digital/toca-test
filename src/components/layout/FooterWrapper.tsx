import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Footer from './Footer';

const footerQuery = groq`
  *[_type == "footer"][0] {
    title,
    navigationLinks[] {
      _type,
      title,
      href,
      linkType,
      externalLink,
      internalLink
    },
    newsletterTitle,
    newsletterDescription,
    newsletterPlaceholder,
    newsletterLocationPlaceholder,
    newsletterButtonText,
    socialLinks[] {
      platform,
      url
    },
    bottomLinks[] {
      _type,
      title,
      href,
      linkType,
      externalLink,
      internalLink
    },
    logo
  }
`;

export default async function FooterWrapper() {
  const footerData = await client.fetch(footerQuery);

  if (!footerData) {
    return null;
  }

  return <Footer {...footerData} />;
}
