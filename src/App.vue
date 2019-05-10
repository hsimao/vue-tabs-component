<template>
  <div id="app">
    <Tabs :value="currentTag" @change="handleTagChange">
      <!-- 使用 slot 自訂 label 內容 -->
      <!-- <Tab index="all">
        <span slot="label" style="color: red;">All</span>
      </Tab> -->

      <!-- 使用樣板 label -->
      <Tab v-for="item in tags" :key="item.id"
        :label="item.tab" :index="item.id">
        <div v-html="item.content"></div>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
// import { Tabs, Tab } from "@/components/Tabs";

export default {
  name: "app",
  // components: {
  //   Tabs,
  //   Tab
  // },
  data() {
    return {
      currentTag: 1,
      tags: [
        {
          id: 1,
          tab: "tab1",
          content:
            "<h1>Tab1 內容</h1><br><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae neque nesciunt tenetur sit sapiente odio, ratione quam, dolore earum pariatur illo obcaecati soluta quisquam magni, adipisci expedita rem! Sapiente, ducimus.</p>"
        },
        {
          id: 2,
          tab: "tab2",
          content:
            "<h1>Tab2 內容</h1><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus aspernatur ad veritatis! Explicabo eligendi perferendis, doloremque in optio mollitia velit id rem tenetur quos, minima architecto laboriosam veniam necessitatibus.</p>"
        },
        {
          id: 3,
          tab: "tab3",
          content:
            "<h1>Tab3 內容</h1><br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure consectetur quas, voluptates asperiores corrupti eum quibusdam veniam, totam perferendis facere aperiam ipsam eius error nesciunt alias id iusto porro. Consequuntur.</p>"
        }
      ]
    };
  },
  methods: {
    handleTagChange(value) {
      this.currentTag = value;
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
