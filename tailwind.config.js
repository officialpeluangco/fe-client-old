/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
      },
      animation: {
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        'text-slide': {
          '0%, 12.5%': {
            transform: 'translateY(0%)',
          },
          '14.28%, 25.04%': {
            transform: 'translateY(-12.5%)',
          },
          '28.56%, 37.5%': {
            transform: 'translateY(-25.04%)',
          },
          '42.84%, 50.04%': {
            transform: 'translateY(-37.5%)',
          },
          '53.56%, 62.5%': {
            transform: 'translateY(-50.04%)',
          },
          '67.84%, 75.04%': {
            transform: 'translateY(-62.5%)',
          },
          '78.56%, 87.5%': {
            transform: 'translateY(-75.04%)',
          },
          '92.84%, 100%': {
            transform: 'translateY(-87.5%)',
          },
        },
      },
    },
  },
  plugins: [],
}

