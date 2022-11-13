const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.tsx',
    './src/components/**/*.tsx',
    './public/index.html',
    './public/**/*.tsx'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ivory': '#FFFEF2',
        'dark-purple': '#2E1A47',
        'royal-purple': '#663399',
        'lavender': '#BB91E5',
      },
      borderRadius: {
        '4xl': '3rem',
        '5xl': '5rem'
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
        backgroundColor: ['active']
    },
},
}