/**
 * Design System Constants
 * Based on the project's style guide
 */

// Color Palette
export const colors = {
  // Primary Colors
  roseGold: {
    hex: '#c5a288',
    rgb: 'rgb(197, 162, 136)',
    cmyk: 'cmyk(23, 36, 46, 0)',
  },
  darkGray: {
    hex: '#161616',
    rgb: 'rgb(22, 22, 22)',
    cmyk: 'cmyk(73, 67, 65, 80)',
  },
  white: {
    hex: '#ffffff',
    rgb: 'rgb(255, 255, 255)',
    cmyk: 'cmyk(0, 0, 0, 0)',
  },

  // Secondary Colors
  seaMist: {
    hex: '#d5c9a7',
    rgb: 'rgb(213, 201, 167)',
    cmyk: 'cmyk(17, 17, 37, 0)',
  },
  blackForest: {
    hex: '#45413e',
    rgb: 'rgb(69, 79, 62)',
    cmyk: 'cmyk(67, 50, 71, 41)',
  },
  desertPalm: {
    hex: '#574735',
    rgb: 'rgb(87, 71, 53)',
    cmyk: 'cmyk(53, 59, 74, 44)',
  },
  ketchup: {
    hex: '#8f3f32',
    rgb: 'rgb(143, 63, 50)',
    cmyk: 'cmyk(29, 82, 81, 27)',
  },
} as const;

// Button Styles
export const buttonStyles = {
  primary: {
    base: 'inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200',
    default: 'bg-rose-gold text-dark-gray hover:opacity-90',
    hover: 'hover:shadow-lg',
    focus: 'focus:outline-none focus:ring-2 focus:ring-rose-gold focus:ring-offset-2 focus:ring-offset-dark-gray',
  },
  secondary: {
    base: 'inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200',
    default: 'bg-transparent text-rose-gold border border-rose-gold',
    hover: 'hover:bg-rose-gold hover:text-dark-gray',
    focus: 'focus:outline-none focus:ring-2 focus:ring-rose-gold focus:ring-offset-2 focus:ring-offset-dark-gray',
  },
  tertiary: {
    base: 'inline-flex items-center justify-center text-sm font-medium transition-all duration-200',
    default: 'text-rose-gold underline underline-offset-4',
    hover: 'hover:text-sea-mist hover:no-underline',
    focus: 'focus:outline-none focus:ring-2 focus:ring-rose-gold focus:ring-offset-2 focus:ring-offset-dark-gray',
  },
} as const;

// Typography
export const typography = {
  // Footer Links
  footerLinks: {
    base: 'text-foreground opacity-50 hover:opacity-100 transition-opacity duration-200',
    sections: {
      title: 'font-serif text-lg mb-4',
      link: 'block py-1 text-sm',
    },
  },
  // Add more typography styles as needed
} as const;

// Spacing
export const spacing = {
  button: {
    paddingX: '1.5rem', // 24px
    paddingY: '0.75rem', // 12px
  },
  section: {
    paddingY: '4rem', // 64px
    paddingYMobile: '2rem', // 32px
  },
} as const;

// Transitions
export const transitions = {
  default: 'transition-all duration-200 ease-in-out',
  slow: 'transition-all duration-300 ease-in-out',
  fast: 'transition-all duration-150 ease-in-out',
} as const;

// Shadows
export const shadows = {
  button: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  buttonHover: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
} as const;

// Border Radius
export const borderRadius = {
  button: '0.375rem', // 6px
  card: '0.5rem', // 8px
  full: '9999px',
} as const;

// Z-Index Scale
export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
} as const;
