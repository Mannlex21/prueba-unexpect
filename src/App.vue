<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <nav-bar v-if="login"></nav-bar>
    <router-view></router-view>
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
    }; 
  },
  computed:{
    login(){
      return Store.state.login;
    }
  },
  components: {
    HelloWorld,
    NavBar
  }
};
</script>

<style>
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
</style>
