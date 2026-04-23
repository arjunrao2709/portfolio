import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-primary': '#FBBF24',
        'accent-bright': '#FDE68A',
        'accent-secondary': '#FBBF24',
        'bg-dark': '#0A0A0A',
        'bg-rich': '#111111',
        'bg-light': '#FFFFFF',
        'bg-card': '#141414',
        'text-primary': '#FFFFFF',
        'text-muted': '#666666',
        'text-dark': '#0A0A0A',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        'pulse-dot': {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
