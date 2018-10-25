import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users:[{user:"mannlex21",pass:"123456"},{user:"admin",pass:"admin"}]
  },
  mutations: {},
  actions: {}
});