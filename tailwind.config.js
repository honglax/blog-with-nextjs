module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '320px',
      },
      fontFamily: {
        raleWay: ['Raleway'],
      },
      minWidth: {
        xs: '320px',
      },
      textColor: {
        main: 'var(--colorPrimary)',
        sub: 'var(--colorSecondary)',
      },
      backgroundColor: {
        main: 'var(--backgroundColorPrimary)',
        'code-block': 'var(--backgroundColorSecondary)',
        blockquote: 'var(--backgroundColorThird)',
      },
      borderColor: {
        main: 'var(--colorPrimary)',
      },
      divideColor: {
        main: 'var(--colorPrimary)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
