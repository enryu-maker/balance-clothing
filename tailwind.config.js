/** @type {import('tailwindcss').Config} */
module.exports = {
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
}

