/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'main': '#865DFF',
      'secondary': '#E384FF',
      'pink' : '#FFA3FD',
      'orange': '#FC8989',
      'black' : '#000000'
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}