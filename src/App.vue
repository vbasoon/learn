<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <HeaderComponent
      v-if="$route.name !== 'Login' && $route.name !== 'page404'"
    />
    <el-main> <router-view></router-view></el-main>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <FooterComponent
      v-if="$route.name !== 'Login' && $route.name !== 'page404'"
    />
  </div>
</template>

<script>
import HeaderComponent from "@/layout/HeaderComponent.vue";
import FooterComponent from "@/layout/FooterComponent.vue";
import "@/assets/styles/global.scss";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
.el-main {
  padding-top: 80px;
}
</style>
