<template>
  <div class="my_header">
    <!-- 顶部栏 -->
    <div class="nav">
      <span class="iconfont" @click="goBack">&#xe720;</span>
      <div class="title">
        <slot></slot>
      </div>
      <span class="iconfont" @click="goHome">&#xe702;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "myHeader",
  data() {
    return {
      msg: "myHeader"
    };
  },
  methods: {
    // 回退
    goBack() {
      this.$router.go(-1);
    },
    // 回到首页
    goHome() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.my_header {
  // 顶部栏
  .nav {
    box-sizing: border-box;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.24rem;
    background: #fff;
    border-bottom: 1px solid @bgColor;
    .title {
      font-size: @sizeL;
    }
    .iconfont {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
