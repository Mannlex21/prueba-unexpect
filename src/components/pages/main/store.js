import Vuex from 'vuex'
const store = new Vuex.Store({
  state: {
    
  },
  mutations: {
    
  },
  actions: {
    getPlantillaAreaCobranza :({commit},params) => {
      return Configuracion.PlantillaAreaCobranza(params).then(({data}) =>{
        commit('setDatosTablaAreaCobranza', data)
        return data;
      })
      .catch(error =>{
        commit('setLoading', false)
        CatchResponse.catchError(error)
      })
    },
    
  }
})
export default store