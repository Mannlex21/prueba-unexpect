<template style="display: inline-block;">
    <div class="divPrincipal">
      <div class="div">
        <input class="inputLogin" type="text" v-model="email">
        <input class="inputLogin" type="password" v-model="email">
        <button class="buttonLogin">Iniciar sesion</button>
        <a class="urlLogin" >Olvidé mi contraseña</a>
      </div>
    </div>    
</template>

<script>
export default {
  data(){
    return{
      email:''
    }
  }
}
</script>
<style scoped>
button,input { border:none; } 
.inputLogin{
  display: block;
  margin-bottom:10px; 
  width: 50vw;
  height: 25px;
  border: 1px rgb(150,150,150) solid;
}
.urlLogin{
  margin: 0 auto;
  display: block;
  text-decoration: underline rgb(100,100,100); 
  color: rgb(100,100,100);
  width: 20vw;
  text-align: center; 
}
.urlLogin:hover{
  cursor: pointer;
  color: black; 
  text-decoration: underline black; 
}
.buttonLogin{
  width: 50vw;
  height: 30px;
  color: white;
  background: red;
  margin-bottom:10px; 
}
.buttonLogin:hover{
  cursor: pointer;
}
.divPrincipal{
  display: table;
  margin: 0 auto;
  margin-top: 15vh;
  width: 95vw;
  height: 85vh;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,c8c8c8+100,969696+100,646464+100 */
  background: #ffffff; /* Old browsers */
  background: -moz-linear-gradient(top, #ffffff 0%, #c8c8c8 100%, #969696 100%, #646464 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #ffffff 0%,#c8c8c8 100%,#969696 100%,#646464 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #ffffff 0%,#c8c8c8 100%,#969696 100%,#646464 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#646464',GradientType=0 ); /* IE6-9 */
}
.div{
  display: table;
  margin: 0 auto;
}
</style>
