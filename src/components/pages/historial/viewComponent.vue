<template>
    <div class="divPrincipal">
      <h1 class="h1Titulo">HISTORIAL DE LIGAS CREADAS</h1>
      <div v-for="(item) in ligas" :key="item.tel" class="divLigas wrapper">
        <div class="divContent xl4">
          <div class="divLigaInfo">
            <p class="pEtiquetas">Fecha</p>
            <p class="pEtiquetas pValues">{{item.date}}</p>
          </div>
        </div>
        <div class="divContent xl8">
          <div class="divLigaInfo">
            <p class="pEtiquetas">Mensaje</p>
            <p class="pEtiquetas pValues">{{item.msg}}</p>   
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
            <p class="pEtiquetas pValues">14</p>
          </div>
        </div>
        <div class="divContent xl3">
          <div class="divLigaInfo wrapper">
              <div class="xl6" style="position: relative;">
                <button class="btnCopiar "><span style="color:white;" class="material-icons">file_copy</span></button>
              </div>  
              <div class="xl6" style="position: relative;">
                <button class="btnEditar"><span style="color:white;" class="material-icons">edit</span></button>
              </div>
          </div>
        </div>
      </div>
      <button @click="regresar()">regresar</button>
    </div> 
</template>
<script>
import Store from "./store";
export default {
  data(){
    return{
    }
  },
  methods:{
    regresar(){
      this.$router.push('liga');
    }
  },
  computed:{
    ligas(){
      return Store.state.historialLigas;
    }
  }
}
</script>
<style scoped>
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
.divLigaInfo{
  background: rgb(210,210,210);
  width: 100%;
  height: 100%;
}
.divContent{
  padding: 0 1px 2px 1px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
}
.btnCopiar{
  background: #F32F52;
  padding: 0;
  border: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35px;
  height: 35px;
}
.btnEditar{
  background: #3B4F61;
  padding: 0;
  border: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35px;
  height: 35px;
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
</style>
