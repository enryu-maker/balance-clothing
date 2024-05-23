/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat:"Montserrat"
      },
      colors:{
        Matte:"#28282B",
        Onyx:"#353935"
      }
    },
  },
  plugins: [],
})

