import Tabs from './tabs.vue'
import Tab from './tab.vue'

// export default Vue => {
//   Vue.component(Tabs.name, Tabs)
//   Vue.component(Tab.name, Tab)
// }

// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.component(Tabs.name, Tabs)
//   window.Vue.component(Tab.name, Tab)
// }

const install = function(Vue) {
  Vue.component(Tabs.name, Tabs)
  Vue.component(Tab.name, Tab)
}

const TabsComponent = { Tabs, Tab, install }
export default TabsComponent
export { Tabs, Tab, install }
