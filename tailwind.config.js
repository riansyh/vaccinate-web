module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      pureWhite: '#ffffff',
      white: '#FDFDFF',
      whiteBlue: '#F4FAFF',
      black: '#242424',
      grey: '#3d3d3d',
      greyWhite: '#DCDCDC',
      blue: {
        light: '#78BBEB',
        normal: '#3096E1',
        white: '#CBE6FB',
      },
      green: {
        light: '#8FE2E8',
        normal: '#53D2DB',
      },
    },
    boxShadow: {
      sm: '0 3px 2px 0 rgba(3, 112, 255, 0.123)',
      blueDefault: '0px 41px 68px -44px rgba(48, 150, 225, 0.25)',
      blueHover: '0px 67px 68px -27px rgba(48, 150, 225, 0.21)',
    },
    letterSpacing: {
      xwide: '.5em',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
