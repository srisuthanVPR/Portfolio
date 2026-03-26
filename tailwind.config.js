/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        body: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81'
        },
        dusk: {
          900: '#0b1220',
          800: '#0f172a',
          700: '#111827',
          600: '#1f2937',
          500: '#334155'
        }
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.15)',
        glow: '0 0 30px rgba(99, 102, 241, 0.35)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSoft: 'pulseSoft 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

export default config
