/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Great Vibes"', 'cursive'],
        handwriting: ['"Dancing Script"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        blush: {
          50: '#fff5f8',
          100: '#ffe6ee',
          200: '#ffd0de',
          300: '#fba7c1',
          400: '#f6729e',
          500: '#ec437c',
          600: '#d82462',
          700: '#b6164d',
          800: '#971641',
          900: '#7f173b',
        },
        roseGold: {
          light: '#fedee5',
          DEFAULT: '#f3b4c1',
          dark: '#d68397',
        },
        champagne: {
          light: '#fdfbf7',
          DEFAULT: '#faebd7',
          gold: '#e6be8a',
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(236, 72, 153, 0.15)',
        'glass-hover': '0 12px 40px 0 rgba(236, 72, 153, 0.25)',
        'pink-glow': '0 0 25px rgba(244, 114, 182, 0.45)',
        'candle-glow': '0 0 35px rgba(251, 191, 36, 0.65)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.2) rotate(45deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2.5s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'sparkle': 'sparkle 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
