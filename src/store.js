import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login:false
  },
  mutations: {
    loginChange(state,newState){
      state.login=!state.login
    }
  },
  actions: {
  },
  getters: {
    getlogin(state){
      return function(){return state.login} 
    } 
  }
});
