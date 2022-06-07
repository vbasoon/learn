<script setup lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class HeaderComponent extends Vue {
  activeIndex: string = "1";
  menuIsActive: boolean = false;

  lang: string = "ua";

  menuNav() {
    this.menuIsActive = !this.menuIsActive;
  }

  switchLang() {
    this.$i18n.locale = this.lang;
  }
}
</script>

<template>
  <el-header height="auto">
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col class="header-logo" :span="12"
        ><div>
          <img
            width="50"
            alt="Vue logo"
            src="@/assets/img/header-logo.png"
          /></div
      ></el-col>
      <el-col class="header-menu" :span="12">
        <el-button plain size="mini" class="mobile-nav" @click="menuNav">
          <i v-if="menuIsActive" class="el-icon-close"></i>
          <i v-else class="el-icon-menu"></i>
        </el-button>

        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          :class="{ '': !menuIsActive, isOpen: menuIsActive }"
        >
          <el-menu-item index="1"
            ><router-link to="/">{{
              $t("menu.home")
            }}</router-link></el-menu-item
          >
          <el-menu-item index="2"
            ><router-link to="/info">{{
              $t("menu.info")
            }}</router-link></el-menu-item
          >
          <el-menu-item index="3"
            ><router-link to="/about">{{
              $t("menu.about")
            }}</router-link></el-menu-item
          >
        </el-menu>
        <div style="margin-top: 20px">
          <el-radio-group :change="switchLang()" v-model="lang" size="mini">
            <el-radio-button class="isActive" label="ua">Укр</el-radio-button>
            <el-radio-button label="en">En</el-radio-button>
          </el-radio-group>
          <el-button class="logout-btn" type="info" size="mini"
            ><i class="el-icon-upload el-icon-right"
              ><span class="text-block">{{ $t("buttons.btn-logout") }}</span></i
            ></el-button
          >
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  position: relative;
}

.header-menu {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.el-menu--horizontal.el-menu {
  border: none;
  margin-top: 5px;
  .el-menu-item {
    background: transparent;
    a {
      font-size: 16px;
      text-decoration: none;
    }
    &.isActive {
      border: none;
    }
  }
  @media (max-width: 768px) {
    display: none;
    opacity: 0;
    background: #585757;
  }
  &.isOpen {
    position: absolute;
    width: 100%;
    top: 60px;
    display: block;
    opacity: 1;
  }
}

.mobile-nav {
  display: none;
  margin: 20px 10px 0 0;
  font-size: 14px;
  height: 29px;
  padding: 0 5px;
  @media (max-width: 768px) {
    display: block;
    margin-right: 0;
  }
}

.header-logo {
  padding: 8px 10px;
  display: flex;
  align-items: center;
}

.el-radio-group {
  margin-right: 1rem;
  height: 29px;
  @media (max-width: 480px) {
    margin-right: 0;
  }
}

.el-radio-button {
  height: auto;
}

.logout-btn {
  margin-right: 1rem;
  font-size: 14px;
  height: 29px;
  @media (max-width: 480px) {
    margin-right: 0;
    .text-block {
      display: none;
    }
  }
}
</style>
