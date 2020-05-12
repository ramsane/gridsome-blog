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
      // for the background-colors
      backgroundColor: {
        'dark': 'var(--dark-background-color)', // bg-dark
        'page': 'var(--page-background-color)', // bg-page
        'content': 'var(--content-background-color)', // bg-content
        'header': 'var(--header-background-color)', // class: `bg-header`
        'card': 'var(--card-background-color)', // bg-card
      },
      textColor: {
        'default': 'var(--default-text-color)', //.text-default
        'secondary': 'var(--secondary-text-color)', // text-secondary - for subtitles etc
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
        'default': '500ms',
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
      },
      animationFillMode: {
        'default': 'forwards'
      },
    },
    animations: {
      'fadeIn': {
        from: {
          opacity: '0'
        },
        to: {
          opacity: '1'
        }
      },
      'fadeIn-from-Bottom': {
        from: {
          opacity: '0',
          transform: 'translateY(1rem)',
        },
        to: {
          opacity: '1',
          transform: 'translateY(0px)'
        }
      },
      'fadeIn-from-Top': {
        from: {
          opacity: '0',
          transform: 'translateY(-1rem)',
        },
        to: {
          opacity: '1',
          transform: 'translateY(0px)'
        }
      },
      'fadeIn-from-Right': {
        from: {
          opacity: '0',
          transform: 'translateX(1rem)'
        },
        to: {
          opacity: '1',
          transform: 'translateX(0rem)'
        }
      },
      'fadeIn-from-Left': {
        from: {
          opacity: '0',
          transform: 'translateX(-1rem)'
        },
        to: {
          opacity: '1',
          transform: 'translateX(0rem)'
        }
      },
      'expand': {
        from: {
          width: '0'
        },
        to: {
          width: '50%'
        }
      }
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
    width: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require('tailwindcss-animations'),
  ],
}