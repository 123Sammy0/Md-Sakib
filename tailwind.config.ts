import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        richBlack: '#050505',
        cardBlack: '#0D0D0D',
        warmIvory: '#F6F5EA',
        mutedSage: '#5E7773',
        softMist: '#DFE8F3',
        deepOlive: '#272401',
      },
      fontFamily: {
        serifLuxury: ['"Instrument Serif"', 'serif'],
        satoshi: ['"Satoshi"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 12px 40px rgba(0,0,0,0.45), 0 0 80px rgba(94,119,115,0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
