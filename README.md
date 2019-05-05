# A Vue component render tabs

## 使用方式 step1 - 引入 Tabs 組件, 檔案位置 /src/components/Tabs

```js
//in your main.js

import Tabs from '@/components/Tabs'
Vue.use(Tabs)
```

## 使用方式 step2 - template

```html
<Tabs :value="currentTag" @change="handleTagChange">
  <Tab label="Tab1" index="1">
    <div>content......</div>
  </Tab>
</Tabs>
```

## 使用方式 step3 - 設定 data

```js
export default {
  data() {
    return {
      currentTag: 1,
    }
  },
}
```

## 使用方式 step4 - 設定 methods

```js
export default {
  methods: {
    handleTagChange(value) {
      this.currentTag = value
    },
  },
}
```

## Demo
