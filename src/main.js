import Vue from "vue";
import VueRouter  from "vue-router";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Vuex from "vuex";
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
