/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'slide-up': 'slideUp 0.3s ease-out forwards',
        'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(1.5)',
            opacity: 0,
          },
        }
      },
    },
  },
  plugins: [],
};