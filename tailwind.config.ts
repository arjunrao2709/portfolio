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
        'accent-primary': '#C27D12',
        'bg-dark': '#FFFFFF',
        'bg-light': '#F7F7F5',
        'bg-card': '#F2F1EE',
        'text-primary': '#111111',
        'text-muted': '#888888',
        'text-dark': '#111111',
      },
      fontFamily: {
        sans: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
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
