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
    fontFamily: {
      'welcome': ['Inter']
    },
    extend: {
      fontSize: {
        '10xl': '16rem',
      },
      colors: {
        'ivory': '#FFFEF2',
        'dark-purple': '#2E1A47',
        'royal-purple': '#663399',
        'lavender': '#BB91E5',
        'blackbg': '#1E1E1E'
      },
      borderRadius: {
        '4xl': '3rem',
        '5xl': '5rem'
      },
      saturate: {
        25: '.25',
        75: '.75',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
        backgroundColor: ['active'],
        borderColor: ['active'],
        textColor: ['active'],
        saturate: ['hover'],
    },
},
}