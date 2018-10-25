<template style="display: inline-block;">
    <div class="divPrincipal">
      <div class="div">
        <input v-on:keyup.enter="login" class="inputLogin" type="text" v-model="user">
        <input v-on:keyup.enter="login" class="inputLogin" type="password" v-model="pass">
        <button class="buttonLogin" @click="login">Iniciar sesion</button>
        <p class="msgError">{{msgError}}</p>
        <p class="msgOk">{{msgOk}}</p>
        <a class="urlLogin" @click="rememberLogin">Olvidé mi contraseña</a>
      </div>
    </div>    
</template>

<script>
import StoreGeneral from "../../../store"
import Store from "./store"
export default {
  data(){
    return{
      user:'',
      pass:'',
      msgError:'',
      msgOk:''
    }
  },
  mounted(){    
    StoreGeneral.watch(StoreGeneral.getters.getlogin, n => {
      if(n){
        this.$router.push('/');
      }
    })
  },
  watch:{
    user(x,y){
      this.msgError=''
      this.msgOk=''
    },
    pass(x,y){
      this.msgError=''
      this.msgOk=''
    }
  },
  methods:{
    login(){
      this.msgError=''
      this.msgOk=''
      var user = this.user;
      var pass = this.pass; 
      if(user!='' && pass!=''){
        
        var r = Store.state.users.filter(el => el.user ==user && el.pass == pass);
        if(r.length>0){
          StoreGeneral.commit("loginChange")
        }else{
          this.msgError='Datos incorrectos'  
        }
      }else{
        this.msgError='Campos vacios'
      }
      // StoreGeneral.commit("loginChange")
    },
    rememberLogin(){
      this.msgError=''
      this.msgOk='User:admin. Password:admin'
    }
  },
  beforeCreate() {
    if(StoreGeneral.state.login==true){
      this.$router.push('/');
    }
  },
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
  width: 100%;
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
.msgError{
  padding: 0;
  margin: 0 auto;
  margin-bottom: 10px;
  color: red;
}
.msgOk{
  padding: 0;
  margin: 0 auto;
  margin-bottom: 10px;
  color: green;
}
</style>
