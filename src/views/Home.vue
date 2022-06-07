<template>
  <div class="home">
    <section class="section">
      <h1>This is a Home Page</h1>
      <p>{{ $t("message") }}</p>
      <p>{{ $t("hello", { msg: "hello" }) }}</p>
      <p>{{ $t("hello0", ["Моє ім'я", "hello"]) }}</p>
      <p>{{ $tc("car", 1) }}</p>
      <p>{{ $tc("car", 2) }}</p>
      <p>{{ $tc("apple", 0) }}</p>
      <p>{{ $tc("apple", 1) }}</p>
      <p>{{ $tc("apple", 10, { count: testCount }) }}</p>
      <p>{{ $d(new Date(), "short") }}</p>
    </section>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class Home extends Vue {
  testCount = 20;
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #fff;
  padding: 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  z-index: 1;
}
</style>
