import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/view/Home";
import Classify from "@/view/Classify";
import GoodsList from "@/view/GoodsList";
import GoodsDetail from "@/view/GoodsDetail";
import Cart from "@/view/Cart";
import Address from "@/view/Address";
import AddressEdit from "@/view/AddressEdit";
import Me from "@/view/Me";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Home,
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify,
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: GoodsList,
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: GoodsDetail,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/address',
      name: 'address',
      component: Address,
    },
    {
      path: '/addressEdit',
      name: 'addressEdit',
      component: AddressEdit,
    },
    {
      path: '/me',
      name: 'me',
      component: Me,
    },
  ]
})
