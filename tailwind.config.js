/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customTomato: 'hsl(4, 100%, 67%)',
        customDarkSlateGrey: 'hsl(234, 29%, 20%)',
        customCharcoalGrey: 'hsl(235, 18%, 26%)',
        customGrey: 'hsl(231, 7%, 60%)',
        customWhite: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        custom: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

