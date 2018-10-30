import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    linkWhatsapp:"https://wa.me/523111263285?text=lo%20quiero%20ya",
    telNumero:"",
    msg:"",
    idLiga:null,
    mode:'nuevo'
  },
  mutations: {
    edit(state,newState){
      state.telNumero = newState.tel
      state.msg = newState.msg
      state.idLiga = newState.id
      state.mode = 'edit'
    },
    resetParams(state,newState){
      state.telNumero = ''
      state.msg = ''
      state.mode = 'nuevo'
    },
    setId(state,newState){
      state.idLiga=newState
    },
    setTelefono(state,newState){
      state.linkWhatsapp = newState
    },
    setTel(state,newState){
      state.telNumero=newState
    },
    setMsg(state,newState){
      state.msg=newState
    }
  },
  actions: {}
});