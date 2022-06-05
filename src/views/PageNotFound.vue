<template>
  <div class="container">
    <div class="inner">
      <h1>404</h1>
      <h3>Page not found</h3>
      <el-button type="primary"
        ><router-link to="/">Back to Home Page</router-link></el-button
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 90vh;
}
.inner {
  margin: auto;
}

h1 {
  font-size: 130px;
  letter-spacing: 20px;
  margin: 20px;
}

p {
  font-size: 18px;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
