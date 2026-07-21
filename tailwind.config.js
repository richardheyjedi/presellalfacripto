/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#081929', // main dark navy bg requested by user
          900: '#0b2035', // secondary navy bg
          800: '#113252',
          700: '#17426c',
        },
        electric: {
          blue: '#2794FF',
          light: '#5CCBFF',
          deep: '#1649D8',
          cyan: '#00F0FF',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(39, 148, 255, 0.4)',
        'glow-cyan': '0 0 35px -5px rgba(0, 240, 255, 0.3)',
        'glow-btn': '0 0 30px rgba(39, 148, 255, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
}
