/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A148C',
          dark: '#311B92',
          light: '#7C4DFF'
        },
        accent: {
          DEFAULT: '#FF5722',
          dark: '#E64A19',
          light: '#FF7043'
        }
      }
    },
  },
  plugins: [],
};