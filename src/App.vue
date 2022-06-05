<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <HeaderComponent />
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import HeaderComponent from "@/layout/HeaderComponent.vue";
import "@/assets/styles/global.scss";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HeaderComponent,
  },
};
</script>

<style></style>
