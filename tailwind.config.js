/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Alegreya_Sans: 'Alegreya Sans',
      },
      colors: {
        // primary: '#0E1630',
        primary: '#212737',

        secondary: '#EB4A4A',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
