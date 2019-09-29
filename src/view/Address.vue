<template>
  <div class="address">
    <!-- 顶部栏 -->
    <div class="nav">
      <span class="iconfont" @click="goBack">&#xe720;</span>
      <div class="title">选择收货地址</div>
    </div>
    <!-- 地址列表内容 -->
    <div class="content">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        add-button-text="新增地址"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Address",
  components: {},
  data() {
    return {
      chosenAddressId: "0",
      list: []
    };
  },
  created() {},
  mounted() {
    let addressList = this.$store.state.address;
    addressList.forEach((element, idx) => {
      element.id = idx + "";
      if (element.isDefault) {
        this.chosenAddressId = element.id;
      }
    });
    this.list = addressList;
  },
  watch: {},
  computed: {},
  methods: {
    // 回退
    goBack() {
      this.$router.push({
        path: "/cart"
      });
    },
    // 地址新增
    onAdd() {
      this.$router.push({
        path: "/addressEdit"
      });
    },
    // 单项编辑
    onEdit(item, index) {
      this.$router.push({
        path: "/addressEdit",
        query: {
          idx: index
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.address {
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
  // 地址列表内容
  .content {
  }
}
</style>
