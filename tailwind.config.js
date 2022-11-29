/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkCharcoal: {
          100: '#555555',
          200: '#444444',
          300: '#333333',
          400: '#222222',
          500: '#111111',
          600: '#000000',
        },
      },
    },
  },
  plugins: [],
};
