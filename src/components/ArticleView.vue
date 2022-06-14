<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { Item } from "../types";

@Component
export default class ArticleView extends Vue {
  @Prop() item?: Item;
  @Prop({ default: "" }) search?: string;
  @Prop({ required: true, default: true }) viewMode?: boolean;

  truncate(str: string, n: number) {
    return str.length > n ? `${str.substr(0, n - 1)} ...` : str;
  }

  viewMore(id: string, item: any) {
    this.$router.push({
      name: "Article",
      params: { id, item },
    });
  }
}
</script>

<template>
  <el-row type="flex" justify="center" :class="viewMode ? '' : 'block-el-row'">
    <el-col
      :xs="23"
      :sm="22"
      :md="20"
      :lg="viewMode ? 18 : 22"
      :xl="viewMode ? 18 : 22"
      class="post-view"
      v-if="item.title === search || search.length === 0"
    >
      <el-row type="flex" justify="center" class="post-title">
        <el-col :span="viewMode ? 12 : 24">
          <h3 class="title">
            {{ item.title }}
          </h3>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center"
        :class="viewMode ? 'post-subtitle-view' : 'post-subtitle-block'"
      >
        <el-col :span="viewMode ? 5 : 24">
          {{ $t("article.destination-title") }} :
          <strong> {{ item.destination }} </strong>
        </el-col>
        <el-col :span="viewMode ? 5 : 24"
          >{{ $t("article.added-title") }} <strong>{{ item.autor }}</strong>
        </el-col>
        <el-col :span="viewMode ? 5 : 24"> {{ item.postTime }} </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="post-image">
        <el-col :span="viewMode ? 16 : 24"
          ><img :src="item.image" alt="article-image" width="100%" />
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="post-text">
        <el-col :span="viewMode ? 12 : 22"
          ><p>{{ truncate(item.text, 200) }}</p>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="post-control">
        <el-col :span="12"
          ><el-button @click="viewMore(item.id, item)">{{
            $t("article.view-more")
          }}</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.post-view {
  margin-bottom: 40px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &:first-child {
    margin-top: 20px;
  }
  h3 {
    margin: 0;
    font-size: 35px;
    font-weight: bold;
    line-height: 43px;
    text-align: center;
    color: #1e1e1e;
  }
  img {
    width: 100%;
    //height: auto;
  }
}

.post-subtitle {
  margin: 25px 0;
  div {
    text-align: center;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #9b9b9b;
    strong {
      color: #4a4a4a;
    }
  }
}

.post-control {
  margin: 15px 0;
  text-align: center;
}

.block-el-row {
  width: 50%;
  @media (max-width: 480  px) {
    width: 100%;
  }
}

.post-subtitle-view {
}
.post-subtitle-block {
  flex-direction: column;
  div {
    padding: 5px;
  }
}
</style>
