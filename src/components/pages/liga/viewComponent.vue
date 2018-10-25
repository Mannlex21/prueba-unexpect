<template>
    <div class="divPrincipal">
      <h1 class="titulo_h1">CREAR BOTÓN WHATSAPP</h1>
      <p class="texto_p">Ingresa el número y mensaje que deseas enviar</p>
      <div class="divForm">
        <p class="inputTitulo">Tú número</p>
        <input align="left" type="text" class="inputLiga" v-model="telNumero"/>
        <button class="buttonLiga">GUARDAR</button>
        <span class="botonCancelar">x</span>
      </div>
      <div class="divForm">
        <p class="inputTitulo">Tú mensaje</p>
        <textarea align="left" type="text" class="inputMultilineaLiga" v-model="msg"/>
        <button class="buttonGenerarLiga" @click="generarLiga()">GENERAR LIGA</button>
      </div>
    </div> 
</template>
<script>
import StoreGeneral from "../../../store"
import Store from "./store";
import StoreHistorial from "../historial/store"
export default {
  data(){
    return{
      telNumero:"",
      lada:"521",
      msg:"",
      date:""
    }
  },
  methods:{
    generarLiga(){
      var url = "https://wa.me/"
      var result = "";
      result = url+this.lada+this.telNumero.replace(/\s/g, '')+"?text="+this.msg.replace(/\s/g, '%20').replace(/\r?\n|\r/g, '%20')
      Store.commit("setTelefono",result);
      StoreHistorial.commit("setData",
      {
        tel:this.telNumero.replace(/\s/g, ''),
        msg:this.msg,
        date:this.getDate()
      })
      //this.$router.push('ligaConsulta');
      this.$router.push('historial');
    },
    getDate(){
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();

      if(dd<10) {
          dd = '0'+dd
      } 

      if(mm<10) {
          mm = '0'+mm
      } 

      today = mm + '/' + dd + '/' + yyyy;
      // document.write(today);
      return today;
    }
  },
  beforeCreate() {
    console.log(StoreGeneral.state.login)
    if(StoreGeneral.state.login==false){
      // StoreGeneral.commit("loginChange")
      this.$router.push('login');
    }
  },
}
</script>
<style scoped>
button,input { border:none; } 
.inputLiga{
  
  display: block;
  float: left;
  padding: 0;
  height: 30px;
  width: 60%;
  
  border: 1px rgb(150,150,150) solid;
  margin-right: 1%;
  
  box-sizing: border-box;
}
.inputMultilineaLiga{
  display: block;
  padding: 0;
  width: 100%;
  height: 100px;
  border: 1px rgb(150,150,150) solid;
  margin-right: 10px;
  resize: none;
}
.inputTitulo{
  text-align: left;
}
.buttonLiga{
  box-sizing: border-box;
  width: 30%;
  height: 30px;
  color: white;
  background: darkcyan; 
  margin-right: 1%;
  display: block;
  float: left;
}
.buttonGenerarLiga{
  width: 70%;
  height: 30px;
  color: white;
  background: darkcyan;
  margin-top: 10px;
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
  color: black;
  width: 60vw;
  text-align: center;
  margin: 0 auto;
}
.divForm{
  display: table;
  width: 100%;
}
.botonCancelar{
  display: block;
  float: left;
  width: 8%;
}
</style>
