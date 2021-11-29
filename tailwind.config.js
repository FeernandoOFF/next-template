module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#fff',
        primary: {
          dark: '#c9bb1e',
          DEFAULT: '#F1F5F9',
        },
        secondary: {
          DEFAULT: '#334155',
          dark: '#fff',
        },
        accent: {
          DEFAULT: '#5E72E4',
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
