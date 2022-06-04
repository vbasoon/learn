<script setup lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class HeaderComponent extends Vue {
  menuIsActive = false;

  menuNav() {
    this.menuIsActive = !this.menuIsActive;
  }
}
</script>

<template>
  <el-header height="auto">
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="12"
        ><div>
          <img
            width="100"
            alt="Vue logo"
            src="@/assets/img/header-logo.png"
          /></div
      ></el-col>
      <el-col :span="12"
        ><div>
          <el-button plain size="mini" class="mobile-nav" @click="menuNav">
            <i class="el-icon-menu"></i>
            <i class="el-icon-close"></i>
          </el-button>

          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            :class="{ '': !menuIsActive, isOpen: menuIsActive }"
          >
            <el-menu-item index="1"
              ><router-link to="/">Home</router-link></el-menu-item
            >
            <el-menu-item index="3"
              ><router-link to="/about">About</router-link></el-menu-item
            >
            <el-menu-item index="4"></el-menu-item>
          </el-menu></div
      ></el-col>
    </el-row>
  </el-header>
</template>

<style lang="scss" scoped>
.el-header {
  background-color: #fff;
  padding: 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  z-index: 1;
}
</style>
