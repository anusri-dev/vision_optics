/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        violet: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        lavender: {
          50:  '#faf7ff',
          100: '#f3eeff',
          200: '#e9e0ff',
          300: '#d6c8ff',
          400: '#b89dfc',
          500: '#9b72fa',
        },
        charcoal: {
          900: '#1a1a2e',
          800: '#2d2d44',
          700: '#3f3f5a',
          600: '#55556f',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'violet-sm': '0 1px 3px 0 rgba(109,40,217,0.08)',
        'violet-md': '0 4px 16px 0 rgba(109,40,217,0.12)',
        'violet-lg': '0 8px 32px 0 rgba(109,40,217,0.18)',
        'card': '0 2px 8px 0 rgba(76,29,149,0.07)',
        'card-hover': '0 8px 28px 0 rgba(76,29,149,0.14)',
      },
    },
  },
  plugins: [],
};
