// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 初始化css 引入
import 'styles/reset.css'
import 'styles/border.css'

// 引入字体图标
import 'styles/iconfont.css'

// flexible 引入
import 'lib-flexible/flexible.js'

// 引入vue-lazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: '/static/images/loading.gif'
})

// 引入vant
import { Button, AddressList, AddressEdit, Card } from 'vant';
Vue.use(Button).use(AddressList).use(AddressEdit).use(Card)
// 覆盖Vant组件的样式
import '@/assets/styles/overiride.css'

// 引入vuex
import store from './store'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
