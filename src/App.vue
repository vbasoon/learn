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
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HeaderComponent,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
