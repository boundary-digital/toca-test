import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

export type SanityImage = SanityImageObject & {
  alt?: string;
};

export type Navigation = {
  mainNav: SanityLink[];
  secondaryNav: SanityLink[];
};

export type HeaderNav = Navigation & {
  backgroundImage: SanityImage;
};

export type SanityLink = {
  _type: string;
  title?: string;
  isExternal?: boolean;
  isNewWindow?: boolean;
  external?: string;
  internal?: {
    _ref: string;
    _type: string;
    slug?: {
      current: string;
    };
  };
};

export type Route = {
  slug: {
    current: string;
  };
} & (
  | {
      isRedirect: true;
      redirectRoute: Route;
      page?: never;
    }
  | {
      isRedirect: false;
      page: Page;
      redirectRoute?: never;
    }
);

export type Page = {
  title: string;
  sections: Section[];
};

type BaseSection = {
  _type: string;
  _key: string;
};

type HomeHeroSection = BaseSection & {
  _type: 'homeHeroSection';
  backgroundImage: SanityImage;
};

type SignatureCocktailsSection = BaseSection & {
  _type: 'signatureCocktailsSection';
  heading: string;
  subheading: string;
  cocktails: Array<{
    name: string;
    image: SanityImage;
  }>;
  link?: SanityLink;
};

type InstagramSection = BaseSection & {
  _type: 'instagramSection';
  heading: string;
  subheading: string;
  instagramHandle: string;
  instagramLink: string;
  images: SanityImage[];
  backgroundVideo?: {
    asset: {
      url: string;
    };
  };
};

export type ContentCard = {
  _key?: string;
  heading: string;
  title: string;
  backgroundImage: SanityImage;
  link?: SanityLink;
  cardStyle?: 'standard' | 'compact' | 'location';
};

type ContentCardsSection = BaseSection & {
  _type: 'contentCardsSection';
  sectionTitle?: string;
  cards: ContentCard[];
  layout?: 'single' | 'two-column' | 'three-column' | 'four-column' | 'mixed-1-2' | 'mixed-2-3';
  spacing?: 'tight' | 'normal' | 'relaxed';
  containerWidth?: 'full' | 'container' | 'narrow';
};

export type Section = HomeHeroSection | SignatureCocktailsSection | InstagramSection | ContentCardsSection;
