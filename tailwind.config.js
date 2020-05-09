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
      },
      // for tailwind animation
      animationDuration: {
        '100ms': '100ms',
        '200ms': '200ms',
        '300ms': '300ms',
        '400ms': '400ms',
        '500ms': '500ms',
        '600ms': '600ms',
        '700ms': '700ms',
        '800ms': '800ms',
        '900ms': '900ms',
      },
      animationDelay: {
        '100ms': '100ms',
        '200ms': '200ms',
        '300ms': '300ms',
        '400ms': '400ms',
        '500ms': '500ms',
        '600ms': '600ms',
        '700ms': '700ms',
        '800ms': '800ms',
        '900ms': '900ms',
      },
      animationIterationCount: {
        'default': 'once'
      }
    },
    animations: {
      'entranceFromBottom': {
        from: {
          opacity: '0',
          transform: 'translateY(1rem)',
        },
        to: {
          opacity: '1',
          transform: 'translateY(0px)'
        }
      },
      'jump': {
        '0%': {
          transform: 'translateY(0%)',
        },
        '50%': {
          transform: 'translateY(-100%)',
        },
        '100%': {
          transform: 'translateY(0%)',
        },
      },
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'visited'],
    letterSpacing: ['responsive', 'hover', 'focus'],
    // margin: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    cursor: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require('tailwindcss-animations'),
  ],
}