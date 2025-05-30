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
  title: string;
  isExternal: boolean;
  isNewWindow: boolean;
  external?: string;
  internal?: Route;
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

export type TitleLine = {
  text: string
  alignment: 'left' | 'right'
  divider: 'none' | 'before' | 'after'
}

type BaseSection = {
  _type: string
  _key: string
}

type HomeHeroSection = BaseSection & {
  _type: 'homeHeroSection'
  backgroundImage: SanityImage
  titleLines: TitleLine[]
}

type HomeSection = BaseSection & {
  _type: 'homeSection'
  backgroundImage: SanityImage
  title: string
  description: string
  button: {
    text: string
    link: SanityLink
  }
  desktopLayout: 'full' | 'half' | 'third'
  order?: number
}

export type Section = HomeHeroSection | HomeSection
