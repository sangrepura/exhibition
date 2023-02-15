const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['var(--poppins-font)', ...fontFamily.sans]
      },
      colors: {
        'deep-sea': '#5f7782',
        'sunburst': '#c78a44',
        'sunset': '#d8b26e',
        'cloud': '#dad5d2',
        'sea': '#b4c1c5', 
        'github': '#28a745',
        'award': '#ff0000'
      },
      boxShadow: {
        'hero': '-3px 3px 30px -5px rgba(216, 178, 110, 0.2)',
        'about': '15px 20px 40px -10px rgba(216, 178, 110, 0.3)',
      },
      dropShadow: {
        'award': '0 0 15px rgba(234,179,8,0.5)'
      },
      animation: {
        'circleload': 'circleload 1.8s ease-in-out',
      },
      keyframes: {
        circleload: {
          '0%': {
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
          },
          '99%': {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          },
          '100%': {
            clipPath: "none",
          }
        },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
  }
  ],
}
