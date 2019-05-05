<template>
  <li class="tab" :class="{active: active}"
    @click="handleClick">
    <!-- <span>{{this.label}}</span> 為備用內容，若無 slot 才會顯示 -->
    <slot name="label"><span>{{this.label}}</span></slot>
  </li>
</template>

<script>
export default {
  name: "Tab",
  props: {
    index: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      default: "tab"
    }
  },
  computed: {
    active() {
      return this.$parent.value === this.index;
    }
  },
  mounted() {
    // 將本身實例傳遞到父層 tabs panes data 內
    this.$parent.panes.push(this);
  },
  methods: {
    handleClick() {
      this.$parent.onChange(this.index);
    }
  }
};
</script>

<style scoped>
.tab {
  color: #fff;
  width: 100%;
  padding: 15px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  border-bottom: solid 3px transparent;
}

.tab.active {
  background-color: #05a19c;
  border-bottom: solid 3px #02576c;
  transform: translate(1px, -3px);
  transition: all 0.3s;
}
</style>