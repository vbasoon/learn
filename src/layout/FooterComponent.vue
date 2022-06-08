<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FooterComponent extends Vue {}
</script>

<template>
  <el-footer height="auto">
    <el-row>
      <el-col :span="24">
        <a class="footer-logo" href="/">
          <img
            src="@/assets/img/footer-logo.png"
            alt="footer-logo"
            height="50"
          />
        </a>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="footer-text" :span="24"
        >{{ $t("footer-text") }} &copy; 2022</el-col
      >
    </el-row>
  </el-footer>
</template>
<style lang="scss" scoped>
.el-footer {
  background-color: #9b9b9b;
  padding: 60px 0;
  text-align: center;
  position: relative;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.12);
  z-index: 1;
  @media (max-width: 768px) {
    padding: 60px 0;
  }
}

.footer-logo {
  display: inline-block;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
}

.footer-text {
  font-size: 18px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 14px;
  }
}
</style>
