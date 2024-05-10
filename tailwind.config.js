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
        mediumGray: '#292929',
        highlight: '#1a1a1a',
        press: '#000',
        elevatedBase: '#242424',
        elevatedHighlight: '#2a2a2a',
        elevatedPress: '#000',
        tintedBase: 'hsla(0, 0%, 100%,.07)',
        textGrey: '#A7A7A7',
        blackTransparent: 'rgba(0, 0, 0,.5)',
        whiteTransparent: 'rgba(255, 255, 255,.5)',
        whiteLessTransparent: 'rgba(255, 255, 255, 0.7)',
        tintedHighlight: 'hsla(0, 0%, 100%,.1)',
        tintedPress: 'hsla(0, 0%, 100%,.04)',
        textSubdued: '#6a6a6a',
        blue: '#0d72ea',
        greenBase: '#1ed760',
        greenHighlight: '#1fdf64',
        greenPress: '#169c46',
      },
      backgroundImage: {
        gradientBanner: 'linear-gradient(90deg,#af2896,#509bf5)',
        gradientBg: 'linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%)'
      },
      animation: {
        fade: 'fade 1s ease',
      },
      keyframes: {
        fade: {
          '0%': { 'background-color': '#121212' },
          '50%': { 'background-color': 'transparent' },
          '100%': { 'background-color': '#121212' },
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

