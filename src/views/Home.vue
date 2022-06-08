<template>
  <div class="home">
    <div v-if="articles">
      <ArticleView
        v-for="item in articles"
        :key="item.id"
        :item="item"
      ></ArticleView>
    </div>
    <div v-else>{{ $t("empty-page") }}</div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { short, long } from "../locales/dateTimeFormats.js";
import ArticleView from "../components/ArticleView.vue";

@Component({
  name: "Home",
  components: {
    ArticleView,
  },
})
export default class Home extends Vue {
  articles = [
    {
      id: 1,
      title: "Test",
      destination: "Europe",
      autor: "John Williams Doe",
      postTime: "January 01, 2018",
      image: "https://picsum.photos/600/300?random=1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.",
    },
    {
      id: 2,
      title: "Test2",
      destination: "Europe",
      autor: "John Williams Doe2",
      postTime: "January 01, 2018",
      image: "https://picsum.photos/600/300?random=2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.",
    },
    {
      id: 3,
      title: "Test3",
      destination: "Europe",
      autor: "John Williams Doe 3",
      postTime: "January 01, 2018",
      image: "https://picsum.photos/600/300?random=3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.",
    },
  ];
  data() {
    return {
      name: "Vlad",
      email: "vbasoon@gmail.com",
    };
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
</style>
