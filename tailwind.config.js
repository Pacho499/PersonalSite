/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'main': '#55C7EA',
      'secondary': '#95BDFF',
      'green' : '#DFFFD8',
      'pink': '#F7C8E0',
      'black' : '#3c4141',
      'white': '#b8b8b8'
    },
    screens:{
      'laptop' : '1400px',
      'laptopXS' : '1000px',
      'phone' : '500px',

    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}