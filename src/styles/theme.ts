import { borderRadius, colors, shadows, spacing, transitions, zIndex } from './constants';

export const theme = {
  colors: {
    primary: colors.roseGold.hex,
    secondary: colors.seaMist.hex,
    accent: colors.ketchup.hex,
    background: colors.darkGray.hex,
    foreground: colors.white.hex,
    muted: colors.blackForest.hex,
    mutedForeground: colors.desertPalm.hex,
  },

  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  fontFamily: {
    sans: 'var(--font-brandon-grotesque)',
    serif: 'var(--font-cormorant)',
    karl: 'var(--font-karl-geoff)',
  },

  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1.1' }],
    '6xl': ['3.75rem', { lineHeight: '1.1' }],
    '7xl': ['4.5rem', { lineHeight: '1.1' }],
    '8xl': ['6rem', { lineHeight: '1.1' }],
    '9xl': ['8rem', { lineHeight: '1.1' }],
  },

  spacing,
  transitions,
  shadows,
  borderRadius,
  zIndex,
} as const;

export type Theme = typeof theme;

export const getColor = (colorName: keyof typeof colors) => {
  return colors[colorName];
};

export const colorClasses = {
  text: {
    primary: 'text-rose-gold',
    secondary: 'text-sea-mist',
    accent: 'text-ketchup',
    muted: 'text-black-forest',
    mutedForeground: 'text-desert-palm',
    inverse: 'text-dark-gray',
  },
  bg: {
    primary: 'bg-rose-gold',
    secondary: 'bg-sea-mist',
    accent: 'bg-ketchup',
    muted: 'bg-black-forest',
    mutedForeground: 'bg-desert-palm',
    dark: 'bg-dark-gray',
  },
  border: {
    primary: 'border-rose-gold',
    secondary: 'border-sea-mist',
    accent: 'border-ketchup',
    muted: 'border-black-forest',
    mutedForeground: 'border-desert-palm',
  },
} as const;
