export const colors = {
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

export const buttonStyles = {
  primary: {
    base: 'inline-flex items-center justify-center px-5 py-[13px] text-[14px] font-medium transition-all duration-200 uppercase tracking-[0.1em] rounded-full',
    default: 'bg-rose-gold text-white border border-transparent',
    hover: 'hover:bg-opacity-90',
    focus: 'focus:outline-none focus:ring-2 focus:ring-rose-gold focus:ring-offset-2 focus:ring-offset-dark-gray',
  },
  secondary: {
    base: 'inline-flex items-center justify-center px-5 py-[13px] text-[14px] font-medium transition-all duration-200 uppercase tracking-[0.1em] rounded-full',
    default: 'bg-transparent text-white border border-white/50 backdrop-blur-[20px]',
    hover: 'hover:bg-white/10',
    focus: 'focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-dark-gray',
  },
  tertiary: {
    base: 'inline-flex items-center justify-center text-[18px] font-medium transition-all duration-200',
    default: 'text-rose-gold bg-transparent border-b-[0.5px] border-rose-gold',
    hover: 'hover:opacity-70',
    focus: 'focus:outline-none focus:ring-2 focus:ring-rose-gold focus:ring-offset-2 focus:ring-offset-dark-gray',
  },
} as const;

export const typography = {
  footerLinks: {
    base: 'text-foreground opacity-50 hover:opacity-100 transition-opacity duration-200',
    sections: {
      title: 'font-serif text-lg mb-4',
      link: 'block py-1 text-sm',
    },
  },
} as const;

export const spacing = {
  button: {
    paddingX: '1.5rem',
    paddingY: '0.75rem',
  },
  section: {
    paddingY: '4rem',
    paddingYMobile: '2rem',
  },
} as const;

export const transitions = {
  default: 'transition-all duration-200 ease-in-out',
  slow: 'transition-all duration-300 ease-in-out',
  fast: 'transition-all duration-150 ease-in-out',
} as const;

export const shadows = {
  button: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  buttonHover: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
} as const;

export const borderRadius = {
  button: '0.375rem',
  card: '0.5rem',
  full: '9999px',
} as const;

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
