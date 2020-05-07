// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
require('typeface-nova-square')
require('typeface-nova-round')
require('typeface-nova-flat')
require('typeface-roboto')

import formatDate from '~/assets/js/formatdate'

import Title from '~/components/Title.vue'

// for imaze zooming
// import mediumZoom from 'medium-zoom'
// mediumZoom(".content img", {
//   margin: 4
// });

// import global css
import '~/assets/styles.css'

export default function (Vue, {
  router,
  head,
  isClient
}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('rs-title', Title)

  // add formatDate as prototype
  Vue.prototype.$formatDate = formatDate

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css'
  })
}