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
        'bg-dark': '#0A0A0A',
        'bg-light': '#FFFFFF',
        'bg-card': '#111111',
        'text-primary': '#FFFFFF',
        'text-muted': '#6B6B6B',
        'text-dark': '#0A0A0A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'pulse-dot': {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
