<template>
  <div class="home">
    <!-- 顶部栏 -->
    <div class="nav">
      <span class="iconfont">&#xe692;</span>
      <div class="title">
        <slot></slot>
      </div>
      <span class="iconfont" @click="gotoMe">&#xe64d;</span>
    </div>

    <!-- 轮播 -->
    <carousel :swiperData="swiperData"></carousel>

    <!-- 分类 -->
    <div class="classification">
      <div class="class_top">
        <div
          class="item"
          v-for="(item,index) in classifiData.up"
          :key="index"
          @click="gotoClassify(item)"
        >
          <img v-lazy="item.img" alt />
        </div>
      </div>

      <div class="class_bottom">
        <div class="item" v-for="(item,index) in classifiData.down" :key="index">
          <img v-lazy="item.img" alt />
        </div>
      </div>
    </div>

    <!-- 推荐 -->
    <div class="recommend">
      <div class="title">今日推荐</div>
      <div class="content">
        <div class="item" v-for="(item,index) in recommendData" :key="index">
          <img v-lazy="item.imgurl" :alt="item.title" />
          <div class="item_text">
            <span>{{ item.title }}</span>
            <span>剩 {{ item.endtime }} 天</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/myHeader";
import Carousel from "@/components/Carousel";
import axios from "axios";

let classifiData = {
  up: [
    {
      id: 0,
      img:
        "https://a4.vimage1.com/upload/flow/2018/05/29/106/15275616596915.jpg"
    },
    {
      id: 1,
      img:
        "https://a2.vimage1.com/upload/flow/2018/05/22/138/15269786875124.jpg"
    },
    {
      id: 2,
      img:
        "https://a4.vimage1.com/upload/flow/2018/05/29/100/15275815231657.jpg"
    },
    {
      id: 3,
      img:
        "https://a4.vimage1.com/upload/flow/2018/05/22/190/15269788745661.jpg"
    },
    {
      id: 4,
      img:
        "https://a4.vimage1.com/upload/flow/2018/05/22/110/15269789816830.jpg"
    }
  ],
  down: [
    {
      id: 5,
      img: "https://a3.vimage1.com/upload/flow/2018/05/29/40/15275616172415.jpg"
    },
    {
      id: 6,
      img:
        "https://a2.vimage1.com/upload/flow/2018/05/29/139/15275815452999.jpg"
    },
    {
      id: 7,
      img:
        "https://a3.vimage1.com/upload/flow/2018/05/22/163/15269793276446.jpg"
    },
    {
      id: 8,
      img:
        "https://a4.vimage1.com/upload/flow/2018/05/22/172/15269794028123.jpg"
    },
    {
      id: 9,
      img: "https://a4.vimage1.com/upload/flow/2018/05/22/21/15269794589634.jpg"
    }
  ]
};

let recommendData = [
  {
    imgurl:
      "https://b.vimage1.com/upload/mst/2018/06/27/14/9b74b67ad8d6049035e8178f6c17ab70_604x290_80.jpg",
    title: "运动潮人录取线",
    endtime: 2
  },
  {
    imgurl:
      "https://b.vimage1.com/upload/mst/2018/06/26/189/f43d77bad367edf2cd9721601f90df1a_604x290_80.jpg",
    title: "国潮攻心计",
    endtime: 8
  },
  {
    imgurl:
      "https://a.vimage1.com/upcb/2018/06/05/132/ias_152816727785388_604x290_80.jpg",
    title: "欧美品牌女装与美",
    endtime: 10
  },
  {
    imgurl:
      "https://b.vimage1.com/upload/mst/2018/06/27/14/9b74b67ad8d6049035e8178f6c17ab70_604x290_80.jpg",
    title: "运动潮人录取线",
    endtime: 2
  },
  {
    imgurl:
      "https://b.vimage1.com/upload/mst/2018/06/26/189/f43d77bad367edf2cd9721601f90df1a_604x290_80.jpg",
    title: "国潮攻心计",
    endtime: 8
  },
  {
    imgurl:
      "https://a.vimage1.com/upcb/2018/06/05/132/ias_152816727785388_604x290_80.jpg",
    title: "欧美品牌女装与美",
    endtime: 10
  }
];

let swiperData = [
  "http://a3.vimage1.com/upload/flow/2018/06/21/160/15295761713116.jpg",
  "https://a2.vimage1.com/upload/flow/2018/06/22/40/15296362191561.jpg",
  "https://a3.vimage1.com/upload/flow/2018/06/06/29/15282588215380.jpg",
  "https://a4.vimage1.com/upload/flow/2018/06/21/49/15295697893682.jpg"
];

export default {
  name: "Home",
  components: {
    MyHeader,
    Carousel
  },
  data() {
    return {
      swiperData: swiperData,
      classifiData: classifiData,
      recommendData: recommendData
    };
  },
  mounted() {
    this.getIndexData();
  },
  methods: {
    getIndexData() {
      axios
        .get("http://localhost:8080/static/mock/index.json")
        .then(res => {
          // this.classifiData = res.classifiData;
          // this.recommendData = res.recommendData;
        })
        .catch(error => {
          console.log(error);
        });
    },
    gotoClassify(item) {
      this.$router.push({
        path: "/classify",
        query: {
          id: item.id
        }
      });
    },
    gotoMe(item) {
      this.$router.push({
        path: "/me"
      });
    }
  }
};
</script>

<style lang="less" scoped>
// 这样引入报错
// @import '@/assets/styles/variables.less';

// 需要加一个波浪符
// @import '~@/assets/styles/variables.less';

// 使用相对路劲
// @import "../assets/styles/variables.less";

// 在webpack.base.conf.js中的alias中配置路径
@import "~styles/variables.less";

.home {
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

  .classification {
    .class_top,
    .class_bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      .item {
        img {
          display: block;
          widows: 2rem;
          height: 2.346667rem;
        }
      }
    }
  }

  .recommend {
    .title {
      text-align: center;
      font-size: 0.373333rem;
      padding: 0.266667rem;
      background: #ffffff;
      margin: 0.133333rem 0;
    }

    .content {
      .item {
        background: #ffffff;
        margin-bottom: 0.133333rem;

        img {
          width: 100%;
          height: 4.8rem;
          display: block;
        }

        img[lazy="loading"] {
          display: block;
          width: 50px;
          height: 50px;
          margin: 0 auto;
        }

        .item_text {
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 0.133333rem;
          font-size: 0.32rem;
        }
      }
    }
  }
}
</style>
