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
      <!-- <div class="div">
        <input class="inputLogin" type="text" v-model="email">
        <input class="inputLogin" type="password" v-model="email">
        <button class="buttonLogin">Iniciar sesion</button>
        <a class="urlLogin" >Olvidé mi contraseña</a>
      </div> -->
    </div> 
</template>
<script>
import Store from "./store";
export default {
  data(){
    return{
      telNumero:"",
      lada:"521",
      msg:""
    }
  },
  methods:{
    generarLiga(){
      var url = "https://wa.me/"
      var result = "";
      result = url+this.lada+this.telNumero.replace(/\s/g, '')+"?text="+this.msg.replace(/\s/g, '%20').replace(/\r?\n|\r/g, '%20')
      Store.commit("setTelefono",result);
      this.$router.push('ligaConsulta');
    }
  }
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
.inputMultilineaLiga{
  display: block;
  padding: 0;
  width: 90vw;
  height: 100px;
  border: 1px rgb(150,150,150) solid;
  margin-right: 10px;
  resize: none;
}
.inputTitulo{
  text-align: left;
}
.buttonLiga{
  width: 25vw;
  height: 30px;
  color: white;
  background: darkcyan; 
  margin-right: 10px;
}
.buttonGenerarLiga{
  width: 70vw;
  height: 30px;
  color: white;
  background: darkcyan;
  margin-top: 10px;
}
.divPrincipal{
  display: table;
  margin: 0 auto;
  width: 95vw;
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
  padding:0 0 0 5vw;
}
.botonCancelar{
  width: 25vw;
  margin-left: 4vw;
}
</style>
