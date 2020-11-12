// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from '../node_modules/jquery/dist/jquery.min.js'
// import popperjs from '../node_modules/popper.js/dist/popper.js'
import bootstrap from  '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// For google maps
import VueGeolocation from '../node_modules/vue-browser-geolocation'
import * as VueGoogleMaps from '../node_modules/vue2-google-maps'

// For search autocomplete
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

// For Vuex
import { store } from './store/store'


require('../css/styles.css')

export const bus = new Vue()

Vue.config.productionTip = false
Vue.use(jquery)
// Vue.use(popperjs)
Vue.use(bootstrap)
gsap.registerPlugin(ScrollTrigger)
Vue.use(VueGeolocation)
Vue.use(Autocomplete)

// Vue.use(VueGoogleMaps,  {
//   load: {
//     key: 'AIzaSyBROcxPdX3daa_RnHoRFaWA2raEAiMmDO0'
//   }
// })



/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
