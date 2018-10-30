<template>
    <div class="divPrincipal">
      <h1 class="h1Titulo">HISTORIAL DE LIGAS CREADAS</h1>
      <div class="wrapper">
        <div class="xl6" >
          <p class="pEtiquetasFechas">Fecha desde</p>
          <input v-model="dateI"  type="date" class="dateInput"/>
        </div>
        <div class="xl6" >
          <p class="pEtiquetasFechas">Fecha hasta</p>
          <input v-model="dateF" type="date" class="dateInput"/>
        </div>
      </div>
      <div class="divInputBusqueda ">
        <input class="inputBusqueda" placeholder="Buscar..." type="text" v-model="searchValue" v-on:keyup.enter="search"/>
        <span  class="material-icons imgBusqueda" @click="search">search</span>
      </div>
      <div class="pager">
        <button @click="backPage()"><div style="color:black;" class="material-icons">navigate_before</div></button>
        <button v-for="(item) in pages" :key="item.id" @click="selectPage(item)" :class="(item.id==pageSelected)?'activePage':''">{{item.text}}</button>
        <button @click="nextPage()"><div style="color:black;" class="material-icons">navigate_next</div></button>
      </div>
      <div v-for="(item) in ligas" :key="item.id" class="divLigas wrapper">
        <div class="divContent xl4">
          <div class="divLigaInfo">
            <p class="pEtiquetas">Fecha</p>
            <p class="pEtiquetas pValues">{{item.date}}</p>
          </div>
        </div>
        <div class="divContent xl8">
          <div class="divLigaInfo">
            <p class="pEtiquetas">Mensaje</p>
            <p class="pEtiquetas pValues cut-text">{{item.msg}}</p>   
          </div>
        </div>
        <div class="divContent xl6">
          <div class="divLigaInfo">
            <p class="pEtiquetas">Celular</p>
            <p class="pEtiquetas pValues">{{item.tel}}</p>
          </div>
          
        </div>
        <div class="divContent xl3">
          <div class="divLigaInfo">
            <p class="pEtiquetas">Contador</p>
            <p class="pEtiquetas pValues">{{item.contador}}</p>
          </div>
        </div>
        <div class="divContent xl3">
          <div class="divLigaInfo wrapper">
              <div class="xl6" style="position: relative;">
                <button class="btnCopiar " @click="copyToShortcut(item)"><div style="color:white;" class="material-icons">file_copy</div></button>
              </div>  
              <div class="xl6" style="position: relative;">
                <button class="btnEditar" @click="editLiga(item)"><div style="color:white;" class="material-icons">edit</div></button>
              </div>
          </div>
        </div>
      </div>
      <!-- <button @click="regresar()">regresar</button> -->
    </div> 
</template>
<script>
import StoreGeneral from "../../../store"
import Store from "./store";
import StoreLiga from "../liga/store";
export default {
  data(){
    return{
      pageSelected:1,
      searchValue:'',
      lada:"521",
      dateI:'',
      dateF:''
    }
  },
  watch:{
    searchValue(o,r){
      Store.commit('searching',this.searchValue)
    },
    dateI(o,r){
      var yyyy = this.dateI.split('-')[0]
      var mm = this.dateI.split('-')[1]
      var dd = this.dateI.split('-')[2]
      // var d1 = new Date(yyyy +'-'+mm+'-'+dd)
      this.dateInicial = new Date(yyyy +'-'+mm+'-'+dd)
      Store.commit('searchingDate')
    },
    dateF(o,r){
      var yyyy = this.dateF.split('-')[0]
      var mm = this.dateF.split('-')[1]
      var dd = this.dateF.split('-')[2]
      // var d1 = new Date(yyyy +'-'+mm+'-'+dd)
      this.dateFinal = new Date(yyyy +'-'+mm+'-'+dd)
      Store.commit('searching',this.searchValue)
    }
  },
  methods:{
    copyToShortcut(val){
      var t = this.generarLiga(val.tel,val.msg)
      var text = (t!="")?t:"No se pudo copiar"
      navigator.clipboard.writeText(text).then(function() {
        // console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        // console.error('Async: Could not copy text: ', err);
      });
    },
    editLiga(val){
      StoreLiga.commit('edit',{
        tel:val.tel,
        msg:val.msg,
        id:val.id
      })
      this.$router.push('/liga');
    },
    generarLiga(tel,msg){
      if(tel!='' && msg!=''){
        var regexStr = /^[0-9\\-]*$/;
        if(regexStr.test(tel)){
          var url = "https://wa.me/"
          var result = "";
          result = url+this.lada+tel.replace(/\s/g, '')+"?text="+msg.replace(/\s/g, '%20').replace(/\r?\n|\r/g, '%20')
          return result;
        }else{
          return ''
        }
        
      }else{
        return ''
      }
    },
    backPage(){
      if(this.pageSelected>1){
        this.pageSelected--;
      }
    },
    nextPage(){
      if(this.pageSelected<this.round( (Store.state.historialLigas.length)/5)){
        this.pageSelected++;
      }
    },
    selectPage(val){
      this.pageSelected=val.id;
    },
    round(val){
      var r = 0
      if(val % 1  >= 0.5){
        r = val.toFixed(0)
      }else{
        r = (parseInt(val.toFixed(0))+1)
      }
      return r
    },
    search(){
      Store.commit('searching',this.searchValue)
    }
  },
  computed:{
    pages(){
      var r=0;
      var item = []
      if(Store.state.historialLigas.length>0){
        r=this.round(Store.state.historialLigas.length/5)
        for(var i = 1;i<=r;i++){
          item.push({
            id:i,
            text:''+i
          })
        }
      }else{
        r=1;
        item.push({
          id:1,
          text:'1'
        })
      }
      return item;
    },
    ligas(){
      return Store.state.historialLigas.slice(((this.pageSelected*5)-5),(this.pageSelected*5));
    },
    dateInicial: {
      // getter
      get: function () {
        return Store.state.dateInicial
      },
      // setter
      set: function (newValue) {
        Store.commit('setDateInicial',newValue)
      }
    },
    dateFinal: {
      // getter
      get: function () {
        return Store.state.dateFinal
      },
      // setter
      set: function (newValue) {
        Store.commit('setDateFinal',newValue)
      }
    },
  },
  beforeCreate() {
    if(StoreGeneral.state.login==false){
      this.$router.push('/login');
    }
  },
}
</script>
<style scoped>
button,input { border:none; } 
p{
  margin: 0;
}
.h1Titulo{
  font-size:16px;
  background: #F32F52;
  color:white;
  margin: 0;
  height: 30px;
  margin-bottom: 10px;
  line-height: 30px;
  text-align: left;
  padding-left: 5px;
  font-weight: normal;
}
.pEtiquetas{
  text-align: left;
  padding: 5px 0 0 5px;
  color: rgb(50,50,50);
}
.pValues{
  font-weight: bold;
}
.divLigas{
  width: 100%;
  margin-bottom: 15px;
}
.inputBusqueda{
  background: rgb(239, 239, 239);
  width: 90%;
  height: 30px;
  padding-left: 10px;
  box-sizing: border-box
}
.divInputBusqueda{
  background: rgb(239, 239, 239);
  width: 100%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.imgBusqueda{
  width: 10%;
  font-size: 18px;
  color: black;
}
.divLigaInfo{
  background: rgb(239, 239, 239);
  width: 100%;
  height: 100%;
}
.divContent{
  padding: 0 1px 2px 1px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
}
@media screen and (max-width: 366px) {
  .divContent{
    overflow-x: auto;
    white-space: nowrap;
  } 
}
.btnCopiar{
  background: #F32F52;
  padding: 0;
  border: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  max-width: 35px;
  max-height: 35px;
}
.btnEditar{
  background: #3B4F61;
  padding: 0;
  border: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  max-width: 35px;
  max-height: 35px;
}
.wrapper{
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:wrap;
  flex-wrap:wrap;
}
.xl6{
  -ms-flex:0 0 50%;
  flex:0 0 50%;
  max-width:50%
}
.xl8{
  -ms-flex:0 0 66.666667%;
  flex:0 0 66.666667%;
  max-width:66.666667%
}
.xl4{
  -ms-flex:0 0 33.333334%;
  flex:0 0 33.333334%;
  max-width:33.333334%
}
.xl3{
  -ms-flex:0 0 25%;
  flex:0 0 25%;
  max-width:25%
}
.xl5{
  -ms-flex:0 0 41.666667%;
  flex:0 0 41.666667%;
  max-width:41.666667%
}
.sm6{
  -ms-flex:0 0 50%;
  flex:0 0 50%;
  max-width:50%
}
.material-icons {
  font-size: 24px;
}
@media screen and (max-width: 415px) {
  .material-icons {
    font-size: 12px;
  }
}
.activePage{
  background: #F32F52;
  color: white;
}
.pager{
  margin-bottom: 10px;
}
.cut-text { 
  text-overflow: ellipsis;
  overflow: hidden; 
  width: 160px; 
  height: 1.2em; 
  white-space: nowrap;
}
.dateInput{
  background: #3B4F61;
  color:white;
  float: left;
}
.pEtiquetasFechas{
  padding: 0;
  text-align: left;
  font-size: 13px;
}
</style>
