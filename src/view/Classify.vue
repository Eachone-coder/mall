<template>
  <div class="classify">
    <my-header>分类</my-header>

    <!-- 主体 -->
    <div class="main" :style="{height:mainHeight}">
      <!-- 主体左侧 -->
      <div class="mainLeft wrapper" ref="wrapper">
        <div class="content">
          <div
            class="item"
            :class="currentIndex == index ? 'item_on' : ''"
            v-for="(item,index) in navTitle"
            :key="index"
            @click="menuClick(index)"
          >{{ item.name }}</div>
        </div>
      </div>

      <!-- 主体右侧 -->
      <div class="mainRight wrapper" ref="wrapper2">
        <div class="content">
          <!-- 顶部图 -->
          <div class="display_img">
            <img :src="menuDetail.topImg" />
          </div>
          <!-- 内容 -->
          <div class="container" v-for="(item,index) in menuDetail.details" :key="index">
            <div class="title">{{item.title}}</div>
            <div class="content">
              <div
                class="content_item"
                v-for="(item,index) in item.icon"
                :key="index"
                @click="goList(item)"
              >
                <img :src="item.iconImg" />
                <div class="txt">{{item.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let navTitle = [
  {
    id: 4,
    name: "为你推荐"
  },
  {
    id: 0,
    name: "女装"
  },
  {
    id: 2,
    name: "男装"
  },
  {
    id: 7,
    name: "男女内衣"
  },
  {
    id: 12,
    name: "女鞋"
  },
  {
    id: 9,
    name: "男鞋"
  },
  {
    id: 5,
    name: "箱包皮具"
  },
  {
    id: 10,
    name: "手表配饰"
  },
  {
    id: 1,
    name: "护肤彩妆"
  },
  {
    id: 11,
    name: "个人护理"
  },
  {
    id: 3,
    name: "母婴"
  },
  {
    id: 6,
    name: "运动户外"
  },
  {
    id: 8,
    name: "超市"
  },
  {
    id: 13,
    name: "图书"
  },
  {
    id: 14,
    name: "家用电器"
  },
  {
    id: 15,
    name: "手机数码"
  }
];

let content = {
  topImg: "//a.vpimg3.com/upload/flow/2018/08/03/143/15333024199924.jpg",
  details: [
    {
      title: "人气美衣",
      icon: [
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/04/25/92/15246482342239_200x375_80.jpg!75.webp",
          name: "连衣裙"
        },
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/03/06/162/15202998439847_200x375_80.png!75.webp",
          name: "T恤"
        },
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/04/25/120/15246483648144_200x375_80.png!75.webp",
          name: "衬衫"
        },
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/04/25/175/15246483854406_200x375_80.png!75.webp",
          name: "套装"
        },
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/08/02/66/15331749404077_200x375_80.png!75.webp",
          name: "半身裙"
        },
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/07/13/187/15314768565659_200x375_80.png!75.webp",
          name: "卫衣"
        },
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/07/13/142/15314757239317_200x375_80.png!75.webp",
          name: "外套"
        },
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/04/25/57/15246482576945_200x375_80.jpg!75.webp",
          name: "风衣"
        },
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/07/13/152/15314774727187_200x375_80.png!75.webp",
          name: "休闲裤"
        }
      ]
    },
    {
      title: "百搭上衣",
      icon: [
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/06/19/79/15293796345836_200x375_80.png",
          name: "衬衫"
        },
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/06/19/53/15293814458968_200x375_80.png",
          name: "白色T恤"
        },
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/04/25/120/15246483648144_200x375_80.png!75.webp",
          name: "衬衫"
        },
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/04/25/175/15246483854406_200x375_80.png!75.webp",
          name: "套装"
        },
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/08/02/66/15331749404077_200x375_80.png!75.webp",
          name: "半身裙"
        },
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/07/13/187/15314768565659_200x375_80.png!75.webp",
          name: "卫衣"
        },
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/07/13/142/15314757239317_200x375_80.png!75.webp",
          name: "外套"
        },
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/04/25/57/15246482576945_200x375_80.jpg!75.webp",
          name: "风衣"
        },
        {
          iconImg:
            "//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/07/13/152/15314774727187_200x375_80.png!75.webp",
          name: "休闲裤"
        }
      ]
    }
  ]
};

import MyHeader from "@/components/myHeader";
import BScroll from "better-scroll";

export default {
  name: "Classify",
  components: {
    MyHeader
  },
  data() {
    return {
      mainHeight: "",
      currentIndex: 0,
      navTitle: [],
      menuDetail: {}
    };
  },
  created() {
    this.mainHeight = window.innerHeight - 45 + "px";
  },
  mounted() {
    this.getClassify();
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        bounce: false,
        click: true
      });
      this.scroll = new BScroll(this.$refs.wrapper2, {
        bounce: false,
        click: true
      });
    });
  },
  watch: {},
  computed: {},
  methods: {
    getClassify() {
      this.navTitle = navTitle;
      this.menuDetail = content;
    },
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push({
        path: "/"
      });
    },
    goList(item) {
      this.$router.push({
        path: "/goodList",
        query: {
          name: item.name
        }
      });
    },
    // 左侧菜单栏点击
    menuClick(idx) {
      this.currentIndex = idx;
    }
  }
};
</script>

<style scoped lang="less">
@import "~styles/variables.less";

.classify {
  background: @bgColor;
  
  // 主体
  .main {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    // 主体左侧
    .mainLeft {
      width: 2.48rem;
      height: 100%;
      font-size: @sizeM;
      .item {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 1.28rem;
        line-height: 1.28rem;
        text-align: center;
      }
      .item_on::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 0.10667rem;
        height: 1.28rem;
        font-size: 0;
        background-color: #de3d96;
      }
      .item_on {
        background: #fff;
      }
    }
    // 主体右侧
    .mainRight {
      width: 7.52rem;
      height: 100%;
      background: #fff;
      .display_img {
        img {
          box-sizing: border-box;
          display: block;
          width: 100%;
          height: 2.72rem;
          padding: 0.373333rem 0.373333rem 0 0.373333rem;
        }
      }
      .container {
        padding: 0 0.373333rem;
        .title {
          box-sizing: border-box;
          font-size: @sizeS;
          font-weight: bold;
          padding: 0.533333rem 0 0.533333rem 0;
        }
        .content {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          border-bottom: 1px solid @bgColor;

          .content_item {
            padding: 0 0.066667rem;
            img {
              display: block;
              width: 1.653333rem;
              height: 1.653333rem;
            }
            .txt {
              text-align: center;
              font-size: @sizeS;
              padding: 0.293333rem 0 0.666667rem 0;
            }
          }
        }
      }
    }
  }
}
</style>
