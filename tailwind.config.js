/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: '#ff0000', // Customize red for highlights
        black: '#000000', // Black background
      },
    },
  },
  plugins: [],
}