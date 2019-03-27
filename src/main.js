import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "./assets/css/style.css";
Vue.use(VueRouter);
import index from "./components/index.vue";
import cart from "./components/cart.vue";
// Vue.config.productionTip = falses
let routes = [
  { path: "/", component: index },
  { path: "/index", component: index },
  { path: "/cart", component: cart }
];
let router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
