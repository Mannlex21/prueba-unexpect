<template>
    <div class="divPrincipal">
      <h1 class="titulo_h1">CREAR BOTÓN WHATSAPP</h1>
      <p class="texto_p cut-text"><a @click="reedirect">{{linkWhatsapp}}</a></p>
      <div class="wrapper">
        <div class="xl10" style="padding-right:5px;box-sizing: border-box">
          <button class="buttonGenerarLiga" @click="copyToShortcut()">COPIAR LIGA</button>
          <a class="linkEditar" @click="editLiga()">EDITAR</a>
        </div>
        <div class="xl2" >
          <button class="buttonNuevaLiga" @click="nuevaLiga()"><span class="material-icons">add</span></button>
        </div>
      </div>
      
      
      
    </div> 
</template>
<script>
import StoreGeneral from "../../../store"
import Store from "./store"
import StoreHistorial from '../historial/store'
export default {
  data(){
    return{
      
    }
  },
  computed:{
    linkWhatsapp(){
      return Store.state.linkWhatsapp;
    }
  },
  methods:{
    copyToShortcut(){
      var text = (this.linkWhatsapp!="")?this.linkWhatsapp:"No se pudo copiar"
      navigator.clipboard.writeText(text).then(function() {
        // console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        // console.error('Async: Could not copy text: ', err);
      });
    },
    reedirect(){
      window.open(this.linkWhatsapp, "_blank");
    },
    editLiga(){
      var val = {}
      StoreHistorial.state.historialLigas.forEach(element => {
        if(element.id == Store.state.idLiga){
          val = element
        }
      });
      Store.commit('edit',{
        tel:val.tel,
        msg:val.msg,
        id:val.id
      })
      this.$router.push('/liga');
    },
    nuevaLiga(){
      this.$router.push('/liga');
    }
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
.inputLiga{
  display: inline-block;
  padding: 0;
  height: 30px;
  width: 50vw;
  border: 1px rgb(150,150,150) solid;
  margin-right: 10px;
}
.inputTitulo{
  text-align: left;
}
.buttonGenerarLiga{
  width: 100%;
  height: 30px;
  color: white;
  background: darkcyan;
  margin-top: 10px;
  margin-bottom: 10px;
}
.buttonNuevaLiga{
  width: 100%;
  height: 30px;
  color: white;
  background: #F32F52;
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 50px;
}
.divPrincipal{
  display: table;
  margin: 0 auto;
  width: 100%;
}
.titulo_h1{
  font-size:18px;
  color:black;
  font-weight: bold;
}
.texto_p{
  color: blue;
  width: 60vw;
  text-align: center;
  margin: 0 auto;
  word-wrap: break-word;
}
.texto_p:hover{
  color: rgb(40, 129, 254);
  cursor: pointer;
}
.linkEditar{
  display: block;
  color: black;
  text-decoration: underline black;
  width: 30%;
  margin: 0 auto;
}
.linkEditar:hover{
  cursor: pointer;
  color: gray;
  text-decoration: underline gray;
}
.cut-text { 
  text-overflow: ellipsis;
  overflow: hidden; 
  width: 180px; 
  height: 1.2em; 
  white-space: nowrap;
}
.wrapper{
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:wrap;
  flex-wrap:wrap;
  width: 90%;
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
.xl2{
  -ms-flex:0 0 16.666667%;
  flex:0 0 16.666667%;
  max-width:16.666667%;
}
.xl10{
  -ms-flex:0 0 83.333334%;
  flex:0 0 83.333334%;
  max-width:83.333334%;
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
</style>
