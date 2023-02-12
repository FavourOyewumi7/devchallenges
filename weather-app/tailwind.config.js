/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", 
  "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    colors: {
      'blue': '#1E213A',
      'deep-blue':'#100E1D',
      'light':'#E7E7EB',
      'gray':'#6E707A;'
    },
    extend: {},
  },
  plugins: [],
}