<template>
  <div class="home">
    <el-row type="flex" justify="end"
      ><el-tooltip effect="dark" :content="$t('tooltip')" placement="top-start">
        <el-button
          type="primary"
          :icon="viewMode ? 'el-icon-s-grid' : 'el-icon-s-unfold'"
          @click="changeView"
        ></el-button> </el-tooltip
    ></el-row>
    <el-row type="flex" justify="center">
      <el-col :span="12" class="articles-control">
        <el-input :placeholder="$t('search')" v-model="searchValue"></el-input>
      </el-col>
    </el-row>
    <div v-if="articles" :class="viewMode ? '' : 'block-view'">
      <ArticleView
        v-for="item in articles"
        :key="item.id"
        :item="item"
        :search="searchValue"
        :viewMode="viewMode"
      ></ArticleView>
    </div>
    <div v-else>{{ $t("empty-page") }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import ArticleView from "../components/ArticleView.vue";

const Articles = namespace("Articles");

@Component({
  name: "Home",
  components: {
    ArticleView,
  },
})
export default class Home extends Vue {
  @Articles.State articles: any;
  searchValue: string = "";
  viewMode: boolean = true;

  changeView() {
    this.viewMode = !this.viewMode;
  }

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
.articles-control {
  .el-input {
    width: 100%;
  }
}
.block-view {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
