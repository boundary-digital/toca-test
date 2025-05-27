import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Footer from './Footer';

const footerQuery = groq`
  *[_type == "footer"][0] {
    title,
    navigationLinks[] {
      _type,
      title,
      isExternal,
      isNewWindow,
      external,
      internal->{
        slug
      }
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
      isExternal,
      isNewWindow,
      external,
      internal->{
        slug
      }
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
