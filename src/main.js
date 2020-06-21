import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/style.css'
import VueTailwind from 'vue-tailwind'
Vue.config.productionTip = false

Vue.use(VueTailwind)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
