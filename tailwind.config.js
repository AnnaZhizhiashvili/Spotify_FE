/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        base: '#121212',
        baseGray: '#b3b3b3',
        lightGray: '#727272',
        highlight: '#1a1a1a',
        press: '#000',
        elevatedBase: '#242424',
        elevatedHighlight: '#2a2a2a',
        elevatedPress: '#000',
        tintedBase: 'hsla(0, 0%, 100%,.07)',
        tintedHighlight: 'hsla(0, 0%, 100%,.1)',
        tintedPress: 'hsla(0, 0%, 100%,.04)',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

