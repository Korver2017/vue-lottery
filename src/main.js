// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios';
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.prototype.$http = axios;

/* eslint-disable no-new */
export const eventBus = new Vue();
const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
