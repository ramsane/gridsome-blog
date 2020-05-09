// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
require('typeface-nova-square')
require('typeface-nova-round')
require('typeface-nova-flat')
require('typeface-roboto')

import formatDate from '~/assets/js/formatdate'

import Title from '~/components/Title.vue'

// for load on scroll for the articles
import InfiniteLoading from 'vue-infinite-loading'

import NProgress from 'nprogress';
import '~/assets/nprogress.css';

// import global css
import '~/assets/styles.css'

export default function (Vue, { router, head, isClient }) {

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('rs-title', Title)

  // for infinite scrolling effect
  Vue.use(InfiniteLoading)

  // add formatDate as prototype
  Vue.prototype.$formatDate = formatDate

  // for progressbar
  NProgress.configure({ showSpinner: false });
  router.beforeEach((to, from, next) => {
    // if (!process.isClient) {
    // browser only code
    if (from.name !== null) {
      NProgress.start()
    }
    // }
    next()
  })
  router.afterEach((to, from) => {
    // if (process.isClient) {
    // browser only code
    NProgress.done()
    // }
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css'
  })
}