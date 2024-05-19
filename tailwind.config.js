/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        mono: {
          light: '#f7f9fb',
          dark: '#4e42d4',
        },
      },
    },
  },
  plugins: [],
};
