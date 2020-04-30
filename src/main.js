// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
require('typeface-nova-square')
require('typeface-nova-round')
require('typeface-nova-flat')
require('typeface-roboto')

// import global css
import '~/assets/styles.css'

// import katex - for rendering math
import 'katex/dist/katex.min.css'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
