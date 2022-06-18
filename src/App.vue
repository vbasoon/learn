<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <HeaderComponent
      v-if="$route.name !== 'Login' && $route.name !== 'page404'"
    />
    <el-main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-main>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <FooterComponent
      v-if="$route.name !== 'Login' && $route.name !== 'page404'"
    />
  </div>
</template>

<script lang="ts">
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
  overflow: hidden;
  padding-top: 80px;
}

.fade-enter-active {
  animation: slidePageIn 3s forwards;
  animation-timing-function: cubic-bezier(0.8, -0.49, 0.36, 1);
}

.fade-leave-active {
  animation: slidePageDown 1s forwards;
  animation-timing-function: cubic-bezier(0.8, -0.49, 0.36, 1);
}

@keyframes slidePageIn {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes slidePageDown {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.1;
    transform: translateY(100%);
  }
}
</style>
