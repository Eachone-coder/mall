<template>
  <div class="address_edit">
    <!-- 顶部栏 -->
    <div class="nav">
      <span class="iconfont" @click="goBack">&#xe720;</span>
      <div class="title">地址编辑</div>
    </div>
    <!-- 编辑主体 -->
    <div class="content">
      <van-address-edit
        :area-list="areaList"
        :address-info="addressInfo"
        show-postal
        :show-delete="isShowDeleteBtn"
        show-set-default
        @save="onSave"
        @delete="onDelete"
      />
    </div>
  </div>
</template>

<script>
import areaList from "@/assets/js/area";
import { mapMutations } from "vuex";

export default {
  name: "AddressEdit",
  components: {},
  data() {
    return {
      queryIdx: "",
      areaList,
      addressInfo: {},
      isShowDeleteBtn: false
    };
  },
  created() {
    if (this.$route.query.idx >= 0) {
      this.queryIdx = this.$route.query.idx;
      this.addressInfo = this.$store.state.address[this.$route.query.idx];
      this.isShowDeleteBtn = true;
    }
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    // 回退
    goBack() {
      this.$router.go(-1);
    },
    // 保存或修改
    onSave(e) {
      let data = {};
      data.name = e.name;
      data.tel = e.tel;
      data.address = e.province + e.city + e.county + e.addressDetail + "";
      data.addressDetail = e.addressDetail;
      data.areaCode = e.areaCode;
      data.postalCode = e.postalCode;
      data.isDefault = e.isDefault;

      if (this.queryIdx !== "") {
        this.editAddress({ data: data, idx: this.queryIdx });
      } else {
        this.saveAddress(data);
      }

      this.$router.push({
        path: "/address"
      });
    },
    // 删除
    onDelete(e) {
      this.removeAddress(this.idx);
      this.$router.push({
        path: "/address"
      });
    },
    ...mapMutations(["saveAddress", "removeAddress", "editAddress"])
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.address_edit {
}
</style>
