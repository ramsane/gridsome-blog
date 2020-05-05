module.exports = {
  purge: false, // enabled in config file
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#FFEEE9',
          200: '#FFD5C8',
          300: '#FFBCA7',
          400: '#FF8964',
          500: '#FF5722',
          600: '#E64E1F',
          700: '#993414',
          800: '#73270F',
          900: '#4D1A0A',
        },
        tensorflow: '#FF8000',
        sklearn: '#F19537',
        vuejs: '#41B883',
        django: '#0C4B33'
      },
      translate: {
        '-2/3': '-66%',
        '-1/3': '-33%'
      },
      fontFamily: {
        novasquare: ['Nova Square'],
        novaflat: ['Nova Flat'],
        novaround: ['Nova Round'],
        roboto: ['Roboto']
      }
    }
  },
  variants: {},
  plugins: []
}