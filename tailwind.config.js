module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#c9bb1e',
          DEFAULT: '#FEF3C7',
        },
        secondary: {
          DEFAULT: '#FF00FF',
          dark: '#fff',
        },
        accent: {
          DEFAULT: '#FF00FF',
          dark: '#fff',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
