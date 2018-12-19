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
export const eventBus = new Vue({
  methods: {
    getData() {
      this.$http
        .get("https://vue-lottery.firebaseio.com/attendantList.json")
        .then(res => {
          console.log(Object.values(res.data));
          var attendantsData = Object.values(res.data);
          eventBus.$emit("catchData", attendantsData);

          // attendantsData.forEach(data => {
          //   console.log(data.name);
          //   this.$set(this.attendants.attendantDetail, data.name, data.department);
          // });
        })
        .catch(err => console.log(err));
    }
  },
});
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
