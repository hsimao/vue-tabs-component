import Vue from 'vue'
import App from './App.vue'

import Tabs from '@/components/Tabs'
Vue.use(Tabs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
