/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#0E1630',
        primary: '#131b34',

        secondary: '#EB4A4A',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
