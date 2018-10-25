<template>
  <div id="app">
    <div>
      <div class="menu" v-if="showMenu">
        <ul class="menuExpandible">
          <li>
            <a class="active" @click="clickOpcionMenu('/')">
              <span class="material-icons iconMenu">message</span>
              <p class="pMenu">Liga</p>
            </a>
          </li>
          <li>
            <a class="active" @click="clickOpcionMenu('historial')">
              <span class="material-icons iconMenu">history</span>
              <p class="pMenu">Historial</p>
            </a>
          </li>
          <li>
            <a class="active logout" @click="clickOpcionMenu('salir')">
              <span class="material-icons iconMenu">exit_to_app</span>
              <p class="pMenu">Salir</p>
            </a>
          </li>
        </ul>
      </div>
      <ul class="navbar" v-if="login">
          <li style="float:left"><a class="active" @click="clickMenu()"><span style="color:red;" class="material-icons">menu</span></a></li>
      </ul>
      <div :style="showMenu?'width:70vw':'width:100vw'" class="contentPrincipal">
        <router-view></router-view>
      </div>
    </div>
    <!-- <nav-bar v-if="login"></nav-bar> -->
    
  </div>
</template>

<script>
import stylesMaterial         from "./css/icons_material.css";
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/nav-bar/viewComponent.vue";
import Store from "./store";
export default {
  name: "app",
  data() {
    return {
      showMenu:false
    }; 
  },
  methods:{
    clickMenu(){
      this.showMenu = !this.showMenu
    },
    clickOpcionMenu(val){
      if(val=="salir"){
        Store.commit("loginChange")
        this.showMenu = false
      }else{
        this.$router.push(val);
      }
      
    }
  },
  mounted(){    
    Store.watch(Store.getters.getlogin, n => {
      if(!n){
        this.$router.push('login');
      }
    })
  },
  computed:{
    login(){
      return Store.state.login;
    }
  },
  components: {
  }
};
</script>

<style>
.iconMenu{
  color: white;
  display: inline;
  font-size: 20px;
  vertical-align: middle;
  margin-left: 10px;
  margin-right: 5px;
}
.pMenu{
  color: black;
  display: inline;
  font-size: 15px;
}
.contentPrincipal{
  padding: 15px;
  box-sizing: border-box;
  margin:0!important;
  display: inline-block;
}
body{
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
}

.menu{
    background: #b3b2b2;
    width: 30vw;
    max-width: 150px;
    height: 100vh;
    float: left;
}
@media screen and (max-width: 366px) {
  .menu{
    overflow-x: auto;
    white-space: nowrap;
  } 
}
.menuExpandible{
  list-style-type: none;
  margin: 0;
  padding: 0;
  left: 0;
  padding-top: 5.5vh;
  float: left;
}
.menuExpandible li {
  display: block;
}
.menuExpandible li a {
    display: block;
    text-align: left;
    padding: 5px 8px;
    text-decoration: none;
}
.navbar {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: white;
    -webkit-box-shadow: inset 0px -4px 9px -2px rgba(133,130,133,1);
    -moz-box-shadow: inset 0px -4px 9px -2px rgba(133,130,133,1);
    box-shadow: inset 0px -4px 9px -2px rgba(133,130,133,1);
    border-bottom: 1px rgb(150,150,150) solid;
}

.navbar li {
  float: left;
}

.navbar li a {
    display: block;
    text-align: center;
    padding: 5px 8px;
    text-decoration: none;
    border-right: 1px rgb(200,200,200) solid;
}
/* Change the link color to #111 (black) on hover */
.navbar li a:hover {
}
.active{
  cursor: pointer;
}
.logout{
  position: absolute;
  bottom: 30px;
  min-width: 100px;
}
</style>
