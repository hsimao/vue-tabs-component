import Tabs from './tabs.vue'
import Tab from './tab.vue'

const install = function(Vue) {
  Vue.component(Tabs.name, Tabs)
  Vue.component(Tab.name, Tab)
}

const TabsComponent = { Tabs, Tab, install }
export default TabsComponent
export { Tabs, Tab, install }
