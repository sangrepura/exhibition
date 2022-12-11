/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'deep-sea': '#5f7782',
        'sunburst': '#c78a44',
        'sunset': '#d8b26e',
        'cloud': '#dad5d2',
        'sea': '#b4c1c5', 
      }
    },
  },
  plugins: [],
}
