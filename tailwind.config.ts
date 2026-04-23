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
        canvas: '#FFFFFF',
        warm: '#F5F2EB',
        ink: {
          DEFAULT: '#0F0E0C',
          2: '#6A6660',
          3: '#A8A49D',
        },
        accent: {
          DEFAULT: '#1A6B4A',
          dark: '#115038',
          light: '#E5F4EC',
        },
        border: {
          DEFAULT: '#E6E2DB',
          strong: '#C5C1BA',
        },
        // Backward compat — updated values to match new palette
        'accent-primary': '#1A6B4A',
        'bg-dark': '#FFFFFF',
        'bg-light': '#F5F2EB',
        'bg-card': '#F5F2EB',
        'text-primary': '#0F0E0C',
        'text-muted': '#A8A49D',
        'text-dark': '#0F0E0C',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
