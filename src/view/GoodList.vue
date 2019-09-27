<template>
  <div class="good_list">
    <!-- 顶部栏 -->
    <my-header>{{ $route.query.name }}</my-header>

    <!-- 筛选 -->
    <div class="filter">
        <div class="filter_item filter_num">
            <i class="iconfont"></i>
            <span>销量</span>
        </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/myHeader"
export default {
  name: "GoodList",
  components: {
      MyHeader
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {}
};
</script>

<style scoped lang="less">
@import "~styles/variables.less";
.good_list {
  background: @bgColor;
}
</style>
