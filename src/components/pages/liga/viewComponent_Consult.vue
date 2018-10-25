<template>
    <div class="divPrincipal">
      <h1 class="titulo_h1">CREAR BOTÓN WHATSAPP</h1>
      <p class="texto_p"><a @click="reedirect">{{linkWhatsapp}}</a></p>
      <button class="buttonGenerarLiga" @click="copyToShortcut()">COPIAR LIGA</button>
      <a class="linkEditar">EDITAR</a>
    </div> 
</template>
<script>
import StoreGeneral from "../../../store"
import Store from "./store"
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
    }
  },
  beforeCreate() {
    if(StoreGeneral.state.login==false){
      this.$router.push('login');
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
  width: 90%;
  height: 30px;
  color: white;
  background: darkcyan;
  margin-top: 10px;
  margin-bottom: 10px;
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
</style>
