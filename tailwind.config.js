/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          700: '#2e83cb',
          600: '#379DF1',
        },
        gray: {
          700: '#121214',
          600: '#202024',
          500: '#29292E',
          400: '#323238',
        },
        white: '#FFFFFF',
        red: {
          500: '#F75A68',
        },
      },
    },
  },
  plugins: [],
}
