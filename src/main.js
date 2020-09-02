// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from '../node_modules/jquery/dist/jquery.min.js'
// import popperjs from '../node_modules/popper.js/dist/popper.js'
import bootstrap from  '../node_modules/bootstrap/dist/css/bootstrap.min.css'


export const bus = new Vue()

Vue.config.productionTip = false
Vue.use(jquery)
// Vue.use(popperjs)
Vue.use(bootstrap)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
