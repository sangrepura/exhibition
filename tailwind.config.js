const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--poppins-font)', ...fontFamily.sans]
      },
      colors: {
        'deep-sea': '#5f7782',
        'sunburst': '#c78a44',
        'sunset': '#d8b26e',
        'cloud': '#dad5d2',
        'sea': '#b4c1c5', 
      },
      boxShadow: {
        'hero': '-3px 3px 30px -5px rgba(216, 178, 110, 0.2)',
        'about': '15px 20px 40px -10px rgba(216, 178, 110, 0.3)',
      },
    },
  },
  darkMode: 'media',
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  variants: {
    scrollbar: ['dark', 'rounded']
  }
}
