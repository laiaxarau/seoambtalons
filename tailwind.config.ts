import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
        colors: {
        coral:   { DEFAULT: '#e8472a', light: '#ff6b4a' },
        sand:    { DEFAULT: '#d4c5b0', dark: '#1a1612' },
        offwhite: '#f5f0eb',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
