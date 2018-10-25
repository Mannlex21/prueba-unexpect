import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    historialLigas:[]
  },
  mutations: {
    setData(state,newState){
      state.historialLigas.push(newState)
    }
  },
  actions: {}
});