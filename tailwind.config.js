/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'helvetica': ['Helvetica', 'sans-serif'],
        'helvetica-light': ['Helvetica Light', 'sans-serif']
      },
      colors: {
        'deep-sea': '#5f7782',
        'sunburst': '#c78a44',
        'sunset': '#d8b26e',
        'cloud': '#dad5d2',
        'sea': '#b4c1c5', 
      },
      boxShadow: {
        'about': '15px 20px 40px -10px rgba(216, 178, 110, 0.4)',
      },
    },
  },
  darkMode: 'media',
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['dark', 'rounded']
  }
}
