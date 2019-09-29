<template>
  <div class="goods_list">
    <div class="fix_top">
      <!-- 顶部栏 -->
      <my-header>{{ $route.query.name }}</my-header>

      <!-- 筛选 -->
      <div class="filter">
        <div class="filter_item filter_normal">
          <i class="iconfont"></i>
          <span>综合排序</span>
        </div>
        <div class="filter_item filter_num">
          <i class="iconfont">&#xe66c;</i>
          <span>销量</span>
        </div>
        <div class="filter_item filter_price">
          <i class="iconfont">&#xe66c;</i>
          <span>价格</span>
        </div>
        <div class="filter_item filter_multi">
          <i class="iconfont">&#xe634;</i>
          <span>筛选</span>
        </div>
      </div>
    </div>

    <!-- 商品列表 -->
    <div class="goods">
      <div class="goods_item" v-for="(item,index) in goodslist" :key="index" @click="gotoDetail">
        <goods-item
          :img="item.goodsImg"
          :desc="item.desc"
          :price="item.price"
          :discount="item.discount"
        ></goods-item>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/myHeader";
import GoodsItem from "@/components/GoodsItem";

let goodslist = [
  {
    goodsId: 0,
    goodsImg:
      "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/607153/2018/0528/120/5ed543e8-b6dc-4fe3-bcf1-e393816b8d4b_5t.jpg",
    desc: "熙世界V领撞色花边针织女款短袖连衣裙",
    price: 99,
    discount: 809
  },
  {
    goodsId: 1,
    goodsImg:
      "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/17/113/e4c755e3-1663-437e-9dde-a4979363a469_5t.jpg",
    desc: "娜尔思 | NAERSI/娜尔思秋季新品连衣裙",
    price: 929,
    discount: 939
  },
  {
    goodsId: 2,
    goodsImg:
      "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00603727/10000646/2094163692-438051563145240605-438051563145240902-5.jpg",
    desc: "欧时力 | ochirly欧时力新女装拼接荷叶边刺绣网纱无袖连衣裙1JH2084210",
    price: 1119,
    discount: 8199
  },
  {
    goodsId: 3,
    goodsImg:
      "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/17/113/e4c755e3-1663-437e-9dde-a4979363a469_5t.jpg",
    desc: "娜尔思 | NAERSI/娜尔思秋季新品连衣裙",
    price: 929,
    discount: 499
  },
  {
    goodsId: 4,
    goodsImg:
      "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/08/02/34/b2d13309-0796-4408-beff-ce01f6295388_5t.jpg",
    desc: "哥弟 | 气质时尚短袖连衣裙",
    price: 929,
    discount: 8189
  },
  {
    goodsId: 5,
    goodsImg:
      "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/06/07/147/fd624450-a586-4b7f-99aa-dbb8e272c26d_5t.jpg",
    desc: "裂帛 | 立领刺绣七分袖雪纺连衣裙女",
    price: 329,
    discount: 2399
  }
];

export default {
  name: "GoodList",
  components: {
    MyHeader,
    GoodsItem
  },
  data() {
    return {
      goodslist: goodslist
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    // 点击商品块
    gotoDetail() {
      this.$router.push({
        path: "/goodsDetail"
      });
    },
    // 筛选栏点击
    filterClick(idx) {
      this.currentIdx = idx;
    },
  }
};
</script>

<style scoped lang="less">
@import "~styles/variables.less";
.goods_list {
  .fix_top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  // 头部标题
  .header {
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
  // 筛选工具栏
  .filter {
    display: flex;
    flex-direction: row;
    text-align: center;
    border-bottom: 1px solid @bgColor;
    background: #fff;
    .filter_item {
      flex-grow: 1;
      width: 0.96rem;
      height: 38px;
      line-height: 38px;
      font-size: @sizeM;
    }
    .on {
      color: @themeColor;
    }
  }
  // 商品列表
  .goods {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0.213333rem 0.133333rem;
    margin-top: 83px;
    .goods_item {
      margin-bottom: 0.266667rem;
    }
  }
}
</style>
