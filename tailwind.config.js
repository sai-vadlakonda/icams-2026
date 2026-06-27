/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#b8d9ff',
          300: '#8ac0ff',
          400: '#559eff',
          500: '#2d7bff',
          600: '#1a5cf2',
          700: '#1547c4',
          800: '#163d99',
          900: '#16357a',
          950: '#0d1f49',
        },
        teal: {
          50: '#eefcfb',
          100: '#d2f6f3',
          200: '#aaeae5',
          300: '#74d8d2',
          400: '#3fbdb8',
          500: '#229f9c',
          600: '#187f7f',
          700: '#166666',
          800: '#155252',
          900: '#144545',
          950: '#072727',
        },
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5d9e2',
          300: '#aeb6c4',
          400: '#828da1',
          500: '#626d83',
          600: '#4d5669',
          700: '#3f4756',
          800: '#272d38',
          900: '#171b22',
          950: '#0b0d12',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'hero-gradient':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(45,123,255,0.35), transparent), radial-gradient(ellipse 60% 50% at 100% 10%, rgba(34,159,156,0.3), transparent)',
      },
      boxShadow: {
        soft: '0 4px 24px -2px rgba(16,42,67,0.08)',
        card: '0 8px 30px -4px rgba(16,42,67,0.12)',
        glow: '0 0 40px rgba(45,123,255,0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
};
