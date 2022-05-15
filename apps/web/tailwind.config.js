const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{tsx,ts,jsx,js}'],
  theme: {
    fontFamily: {
      body: ['Nunito', 'sans-serif'],
      display: ['Roboto', 'sans-serif'],
    },
    colors: {
      gray: colors.gray,
      black: colors.black,
      white: colors.white,
      primary: '#44D752',
      secondary: '#68C9BA',
      textPrimary: '#212353',
      textSecondary: '#4B5D68',
    },
  },
  plugins: [],
};
