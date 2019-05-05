<template>
  <div class="tabs">
    <ul class="tabs__header">
      <slot></slot>
    </ul>
    <TabContent :panes="panes" />
  </div>
</template>

<script>
import TabContent from "./tabContent.vue";

export default {
  name: "Tabs",
  components: {
    TabContent
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      panes: []
    };
  },
  methods: {
    onChange(index) {
      this.$emit("change", index);
    }
  }
};
</script>

<style scoped>
.tabs {
  display: flex;
  flex-flow: column nowrap;
}

.tabs__header {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #02576c;
}
</style>