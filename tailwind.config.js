/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        navy: '#142B3B',
        gold: '#D6A85F',
        offwhite: '#F8F8F6',
        charcoal: '#20252B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
