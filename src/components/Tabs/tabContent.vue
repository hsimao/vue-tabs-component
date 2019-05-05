<script>
export default {
  props: {
    panes: {
      type: Array,
      required: true
    }
  },
  render() {
    //   jxs 寫法，並透過 webpack 編譯
    // 用 tab 內的 slots 將 content 內容取出, active 為 true 才顯示
    const contents = this.panes.map(pane =>
      pane.active ? pane.$slots.default : null
    );
    return <div class="tabContent">{contents}</div>;
  }
};
</script>

<style scoped>
.tabContent {
  background-color: #05a19c;
  padding: 15px;
  color: #fff;
}
</style>