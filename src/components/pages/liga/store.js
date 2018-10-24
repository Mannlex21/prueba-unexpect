import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    linkWhatsapp:"https://wa.me/523111263285?text=lo%20quiero%20ya"
  },
  mutations: {
    setTelefono(state,newState){
      state.linkWhatsapp = newState
    }
  },
  actions: {}
});