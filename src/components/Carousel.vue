<template>
  <div class="carousel">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in swiperData" :key="index">
        <img class="swiper_img" v-lazy="item" alt=""/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// require styles
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Carousel",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    swiperData: {
      type: Array,
      default: []
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // this.swiper.slideTo(0, 1000, false);
  },
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        autoplay: {
          delay: 25000,
          disableOnInteraction: false
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style lang="less" scoped>
/* 
  // less里面不能用 >>> 这样写,不用less是这样写
  >>> .swiper-pagination-bullet-active {
            background: #fff;
        } */
.carousel {
  /deep/ .swiper-pagination-bullet-active {
    background: #fff;
  }
  .swiper_img {
    width: 100%;
    height: 4rem;
  }
}
</style>
