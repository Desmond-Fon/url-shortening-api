/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'cyan': 'hsl(180, 66%, 49%)',
        'darkVIolet': 'hsl(257, 27%, 26%)',
        'red': 'hsl(0, 87%, 67%)',
        'grayy': 'hsl(0, 0%, 75%)',
        'grayishViolet': 'hsl(257, 7%, 63%)',
        'veryDarkBlue': 'hsl(255, 11%, 22%)',
        'veryDarkViolet': 'hsl(260, 8%, 14%)'
      },
      width: {
        '50px': '50px'
      }
    },
  },
  plugins: [],
}
