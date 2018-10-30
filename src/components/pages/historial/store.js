import Vue from "vue";
import Vuex from "vuex";
import StoreLiga from '../liga/store'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    historialLigas:[],
    respaldoHistorialLigas:[],
    dateInicial:'',
    dateFinal:''
  },
  mutations: {
    setDateInicial(state,newState){
      state.dateInicial = newState
    },
    setDateFinal(state,newState){
      state.dateFinal = newState
    },
    setData(state,newState){
      if(state.historialLigas.length==0){
        state.historialLigas.push(
          {
            id:1,
            tel:newState.tel,
            msg:newState.msg,
            date:newState.date,
            contador:1
          }
        )
        StoreLiga.commit('setId',1)
      }else{
        var contador = state.historialLigas.filter((i)=>{
          return  i.tel ==  newState.tel
        })
        state.historialLigas.push(
          {
            id:state.historialLigas[state.historialLigas.length-1].id+1,
            tel:newState.tel,
            msg:newState.msg,
            date:newState.date,
            contador:0
          }
        )
        StoreLiga.commit('setId',state.historialLigas[state.historialLigas.length-1].id+1)
        state.historialLigas.forEach(element => {
          if(element.tel==newState.tel){
            element.contador = parseInt(contador.length)+1;
          }
        });
      }
      state.respaldoHistorialLigas=state.historialLigas
    },
    setDataUpdate(state,newState){
      state.historialLigas.forEach(element => {
        if(element.id==newState.id){
          element.tel = newState.tel,
          element.msg = newState.msg,
          element.date = newState.date
        }
      });
      StoreLiga.commit('setId',newState.id)
      var contador = state.historialLigas.filter((i)=>{
        return  i.tel ==  newState.tel
      })
      state.historialLigas.forEach(element => {
        if(element.tel==newState.tel){
          element.contador = parseInt(contador.length);
        }
      });
      
      state.respaldoHistorialLigas=state.historialLigas
    },
    searching(state,newState){
      if(newState!=""){
        state.historialLigas = state.respaldoHistorialLigas
        if(state.dateInicial!='' && state.dateFinal!=''){
          state.historialLigas = state.historialLigas.filter((i)=>{
            var yyyy = i.date.split('/')[2]
            var mm = i.date.split('/')[1]
            var dd = i.date.split('/')[0]
            var date = new Date(yyyy +'-'+mm+'-'+dd)
            return  (date>=state.dateInicial && date <= state.dateFinal && i.tel.match(newState))
          })
        }else{
         
          state.historialLigas = state.historialLigas.filter((i)=>{
            return  i.tel.match(newState) 
          })
        }
        
      }else{
        if(state.dateInicial!='' && state.dateFinal!=''){
          state.historialLigas = state.historialLigas.filter((i)=>{
            var yyyy = i.date.split('/')[2]
            var mm = i.date.split('/')[1]
            var dd = i.date.split('/')[0]
            var date = new Date(yyyy +'-'+mm+'-'+dd)
            return  (date>=state.dateInicial && date <= state.dateFinal)
          })
        }else{
          state.historialLigas = state.respaldoHistorialLigas
        }
        
      }
    }
  },
  actions: {}
});