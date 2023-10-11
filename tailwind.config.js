/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.jsx",
    "./src/**/*.jsx",
    "./src/**/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        montserrat: "'Montserrat', sans-serif"
      }
    },
  },
  plugins: [],
}

