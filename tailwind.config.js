/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        maize: {
          DEFAULT: '#FCC158',
        },
        'pastel-gray': {
          DEFAULT: '#D6D1C6',
        },
        'forest-green': {
          DEFAULT: '#228B22',
          dark: '#186118',
        },
        'pale-silver': {
          light: '#D7D2C8',
          DEFAULT: '#CDC7BA',
          dark: '#C5BEAF',
        },
      },
      flex: {
        core: '1 1 40%',
      },
    },
  },
  plugins: [require('tailwindcss')],
}
