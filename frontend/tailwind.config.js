/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#131212',
        },
        lightBlue: {
          DEFAULT: '#5ABCF3',
        },
        green: {
          DEFAULT: '#44BB6C',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'serif'],
      },
    },
  },
  plugins: [],
};
