import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add custom font families
      fontFamily: {
        primary: ['var(--font-audiowide)', 'system-ui', 'sans-serif'],
        secondary: ['var(--font-overlock-sc)', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      // Add text effect utilities for font emphasis
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // Add a plugin for text outline effects (optional)
    function({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
          '-webkit-text-stroke': '1px black',
          'text-stroke': '1px black',
          'color': 'transparent',
        },
        '.text-outline-thin': {
          '-webkit-text-stroke': '0.5px black',
          'text-stroke': '0.5px black',
          'color': 'transparent',
        },
        '.text-outline-white': {
          '-webkit-text-stroke': '1px white',
          'text-stroke': '1px white',
          'color': 'transparent',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

export default config