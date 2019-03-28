import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "./assets/css/style.css";
Vue.use(VueRouter);
import index from "./components/index.vue";
import cart from "./components/cart.vue";
import detail from "./components/detail.vue";
// 导入axios
import axios from "axios";
//将axios设置到Vue的原型上,每个Vue实例都可以访问这个
Vue.prototype.$axios = axios
//设置每个路径默认的基地址 之后的路径不用再写基地址
axios.defaults.baseURL = 'http://111.230.232.110:8899'
//设置为 false 以阻止 vue 在启动时生成生产提示
// Vue.config.productionTip = falses
//导入格式化时间
import moment from 'moment'
//在实例化Vue之前创建全局过滤器
Vue.filter('globalFormatTime',function(value,format){
  if(format){
    return moment(value).format(format)
  }else{

    return moment(value).format('YYYY-MM-DD')
  }
})
let routes = [
  { path: "/", component: index },
  { path: "/index", component: index },
  { path: "/cart", component: cart },
  { path: "/detail/:id", component: detail }
];
let router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
