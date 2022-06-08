<template>
  <el-row type="flex" justify="center" class="article-page">
    <el-col :xs="23" :sm="22" :md="20" :lg="16" :xl="16">
      <h1>
        {{ content.title }}
      </h1>
      <img :src="content.image" alt="article image" />
      <p>{{ content.text }}</p>
      <el-divider></el-divider>
      <el-row type="flex" justify="space-between">
        <el-col :span="12" class="article-info text-left">
          {{ content.autor }}
        </el-col>
        <el-col :span="12" class="article-info text-right">
          {{ content.postTime }}
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="article-control">
        <el-col :span="12">
          <el-button @click="backToList" type="primary">{{
            $t("article.view-back")
          }}</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ArticlePage extends Vue {
  content = "";

  created() {
    this.content = this.$route.params.item;
  }

  backToList() {
    this.$router.go(-1);
  }
}
</script>

<style lang="scss" scoped>
.article-page {
  margin-bottom: 30px;
  //padding: 20px;
  img {
    width: 100%;
  }
}
.article-info {
  //font-size: 14px;
  color: #5c5c5c;
}

.article-control {
  margin-top: 20px;
}
</style>
