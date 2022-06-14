<template>
  <el-row type="flex" justify="center" class="article-page">
    <el-col :xs="23" :sm="22" :md="20" :lg="16" :xl="16">
      <div>{{ fromApi }}</div>
      <h1>
        {{ articleById.title }}
      </h1>
      <img :src="articleById.image" alt="article image" />
      <p>{{ articleById.text }}</p>
      <el-divider></el-divider>
      <el-row type="flex" justify="space-between">
        <el-col :span="12" class="article-info text-left">
          {{ articleById.autor }}
        </el-col>
        <el-col :span="12" class="article-info text-right">
          {{ articleById.postTime }}
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
import { namespace } from "vuex-class";

const Articles = namespace("Articles");

@Component({ name: "ArticlePage" })
export default class ArticlePage extends Vue {
  @Articles.Getter getById: any;
  @Articles.State fromApi: any;
  @Articles.Action fetchApi: any;

  get articleById() {
    return this.getById(this.$route.params.id);
  }

  backToList() {
    this.$router.go(-1);
  }

  created() {
    this.fetchApi();
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
