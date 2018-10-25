import Vue from "vue";
import VueRouter  from "vue-router";
import App from "./src/App.vue";
import store from "./src/store";
import router from "./src/router";
import Vuex from "vuex";
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
