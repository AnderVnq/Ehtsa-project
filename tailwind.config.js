/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        'mt17': '68px', // Margen superior de 68px
      },
    },
  },
  plugins: [],
}

