(function(t){function e(e){for(var n,o,r=e[0],l=e[1],u=e[2],p=0,v=[];p<r.length;p++)o=r[p],a[o]&&v.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(v.length)v.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var l=s[r];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/prueba-unexpect/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"01f6":function(t,e,s){},"034f":function(t,e,s){"use strict";var n=s("c21b"),a=s.n(n);a.a},"2ff7":function(t,e,s){},"4ad8":function(t,e,s){"use strict";var n=s("6ca4"),a=s.n(n);a.a},"4d7a":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),a=s("8c4f"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",[t.showMenu?s("div",{staticClass:"menu"},[s("ul",{staticClass:"menuExpandible"},[s("li",[s("a",{staticClass:"active",on:{click:function(e){t.clickOpcionMenu("/")}}},[s("span",{staticClass:"material-icons iconMenu"},[t._v("message")]),s("p",{staticClass:"pMenu"},[t._v("Liga")])])]),s("li",[s("a",{staticClass:"active",on:{click:function(e){t.clickOpcionMenu("historial")}}},[s("span",{staticClass:"material-icons iconMenu"},[t._v("history")]),s("p",{staticClass:"pMenu"},[t._v("Historial")])])]),s("li",[s("a",{staticClass:"active logout",on:{click:function(e){t.clickOpcionMenu("salir")}}},[s("span",{staticClass:"material-icons iconMenu"},[t._v("exit_to_app")]),s("p",{staticClass:"pMenu"},[t._v("Salir")])])])])]):t._e(),t.login?s("ul",{staticClass:"navbar"},[s("li",{staticStyle:{float:"left"}},[s("a",{staticClass:"active",on:{click:function(e){t.clickMenu()}}},[s("span",{staticClass:"material-icons",staticStyle:{color:"red"}},[t._v("menu")])])])]):t._e(),s("div",{staticClass:"contentPrincipal",style:t.showMenu?"width:70vw":"width:100vw"},[s("router-view")],1)])])},o=[],r=(s("eef8"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._m(0),s("h3",[t._v("Installed CLI Plugins")]),t._m(1),s("h3",[t._v("Essential Links")]),t._m(2),s("h3",[t._v("Ecosystem")]),t._m(3)])}),l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\n    For guide and recipes on how to configure / customize this project,"),s("br"),t._v("\n    check out the\n    "),s("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),s("li",[s("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),s("li",[s("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),s("li",[s("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],u={name:"HelloWorld",props:{msg:String}},c=u,p=(s("83c9"),s("2877")),v=Object(p["a"])(c,r,l,!1,null,"3b3c6566",null);v.options.__file="HelloWorld.vue";v.exports;var f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.showMenu?s("div",{staticClass:"menu"}):t._e(),s("ul",[s("li",{staticStyle:{float:"left"}},[s("a",{staticClass:"active",on:{click:function(e){t.clickMenu()}}},[s("span",{staticClass:"material-icons",staticStyle:{color:"red"}},[t._v("menu")])])])])])},h=[],m={data:function(){return{showMenu:!1}},methods:{clickMenu:function(){this.showMenu=!this.showMenu}}},g=m,d=(s("5f5c"),Object(p["a"])(g,f,h,!1,null,"65a0b427",null));d.options.__file="viewComponent.vue";d.exports;var _=s("2f62");n["a"].use(_["a"]);var C=new _["a"].Store({state:{login:!1},mutations:{loginChange:function(t,e){t.login=!t.login}},actions:{},getters:{getlogin:function(t){return function(){return t.login}}}}),b={name:"app",data:function(){return{showMenu:!1}},methods:{clickMenu:function(){this.showMenu=!this.showMenu},clickOpcionMenu:function(t){"salir"==t?(C.commit("loginChange"),this.showMenu=!1):this.$router.push(t)}},mounted:function(){var t=this;C.watch(C.getters.getlogin,function(e){e||t.$router.push("login")})},computed:{login:function(){return C.state.login}},components:{}},k=b,w=(s("034f"),Object(p["a"])(k,i,o,!1,null,null,null));w.options.__file="App.vue";var y=w.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divPrincipal"},[s("h1",{staticClass:"titulo_h1"},[t._v("CREAR BOTÓN WHATSAPP")]),s("p",{staticClass:"texto_p"},[t._v("Ingresa el número y mensaje que deseas enviar")]),s("div",{staticClass:"divForm"},[s("p",{staticClass:"inputTitulo"},[t._v("Tú número")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.telNumero,expression:"telNumero"}],staticClass:"inputLiga",attrs:{align:"left",type:"text"},domProps:{value:t.telNumero},on:{input:function(e){e.target.composing||(t.telNumero=e.target.value)}}}),s("button",{staticClass:"buttonLiga"},[t._v("GUARDAR")]),s("span",{staticClass:"botonCancelar"},[t._v("x")])]),s("div",{staticClass:"divForm"},[s("p",{staticClass:"inputTitulo"},[t._v("Tú mensaje")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"inputMultilineaLiga",attrs:{align:"left",type:"text"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),s("button",{staticClass:"buttonGenerarLiga",on:{click:function(e){t.generarLiga()}}},[t._v("GENERAR LIGA")])])])},x=[];s("a481");n["a"].use(_["a"]);var j=new _["a"].Store({state:{linkWhatsapp:"https://wa.me/523111263285?text=lo%20quiero%20ya"},mutations:{setTelefono:function(t,e){t.linkWhatsapp=e}},actions:{}});n["a"].use(_["a"]);var O=new _["a"].Store({state:{historialLigas:[]},mutations:{setData:function(t,e){t.historialLigas.push(e)}},actions:{}}),M={data:function(){return{telNumero:"",lada:"521",msg:"",date:""}},methods:{generarLiga:function(){var t="https://wa.me/",e="";e=t+this.lada+this.telNumero.replace(/\s/g,"")+"?text="+this.msg.replace(/\s/g,"%20").replace(/\r?\n|\r/g,"%20"),j.commit("setTelefono",e),O.commit("setData",{tel:this.telNumero.replace(/\s/g,""),msg:this.msg,date:this.getDate()}),this.$router.push("historial")},getDate:function(){var t=new Date,e=t.getDate(),s=t.getMonth()+1,n=t.getFullYear();return e<10&&(e="0"+e),s<10&&(s="0"+s),t=s+"/"+e+"/"+n,t}},beforeCreate:function(){0==C.state.login&&this.$router.push("login")}},L=M,S=(s("a3d4"),Object(p["a"])(L,E,x,!1,null,"de21fd1c",null));S.options.__file="viewComponent.vue";var $=S.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divPrincipal"},[s("h1",{staticClass:"titulo_h1"},[t._v("CREAR BOTÓN WHATSAPP")]),s("p",{staticClass:"texto_p"},[s("a",{on:{click:t.reedirect}},[t._v(t._s(t.linkWhatsapp))])]),s("button",{staticClass:"buttonGenerarLiga",on:{click:function(e){t.copyToShortcut()}}},[t._v("COPIAR LIGA")]),s("a",{staticClass:"linkEditar"},[t._v("EDITAR")])])},T=[],A={data:function(){return{}},computed:{linkWhatsapp:function(){return j.state.linkWhatsapp}},methods:{copyToShortcut:function(){var t=""!=this.linkWhatsapp?this.linkWhatsapp:"No se pudo copiar";navigator.clipboard.writeText(t).then(function(){},function(t){})},reedirect:function(){window.open(this.linkWhatsapp,"_blank")}},beforeCreate:function(){0==C.state.login&&this.$router.push("login")}},I=A,N=(s("eb5d"),Object(p["a"])(I,P,T,!1,null,"078badee",null));N.options.__file="viewComponent_Consult.vue";var D=N.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divPrincipal"},[s("h1",{staticClass:"h1Titulo"},[t._v("HISTORIAL DE LIGAS CREADAS")]),t._l(t.ligas,function(e){return s("div",{key:e.tel,staticClass:"divLigas wrapper"},[s("div",{staticClass:"divContent xl4"},[s("div",{staticClass:"divLigaInfo"},[s("p",{staticClass:"pEtiquetas"},[t._v("Fecha")]),s("p",{staticClass:"pEtiquetas pValues"},[t._v(t._s(e.date))])])]),s("div",{staticClass:"divContent xl8"},[s("div",{staticClass:"divLigaInfo"},[s("p",{staticClass:"pEtiquetas"},[t._v("Mensaje")]),s("p",{staticClass:"pEtiquetas pValues"},[t._v(t._s(e.msg))])])]),s("div",{staticClass:"divContent xl6"},[s("div",{staticClass:"divLigaInfo"},[s("p",{staticClass:"pEtiquetas"},[t._v("Celular")]),s("p",{staticClass:"pEtiquetas pValues"},[t._v(t._s(e.tel))])])]),t._m(0,!0),t._m(1,!0)])})],2)},W=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divContent xl3"},[s("div",{staticClass:"divLigaInfo"},[s("p",{staticClass:"pEtiquetas"},[t._v("Contador")]),s("p",{staticClass:"pEtiquetas pValues"},[t._v("14")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divContent xl3"},[s("div",{staticClass:"divLigaInfo wrapper"},[s("div",{staticClass:"xl6",staticStyle:{position:"relative"}},[s("button",{staticClass:"btnCopiar "},[s("div",{staticClass:"material-icons",staticStyle:{color:"white"}},[t._v("file_copy")])])]),s("div",{staticClass:"xl6",staticStyle:{position:"relative"}},[s("button",{staticClass:"btnEditar"},[s("div",{staticClass:"material-icons",staticStyle:{color:"white"}},[t._v("edit")])])])])])}],q={data:function(){return{}},methods:{regresar:function(){this.$router.push("liga")}},computed:{ligas:function(){return O.state.historialLigas}},beforeCreate:function(){0==C.state.login&&this.$router.push("login")}},G=q,F=(s("5bc6"),Object(p["a"])(G,R,W,!1,null,"68bf2b7e",null));F.options.__file="viewComponent.vue";var H=F.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divPrincipal"},[s("div",{staticClass:"div"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"inputLogin",attrs:{type:"text"},domProps:{value:t.user},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.user=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],staticClass:"inputLogin",attrs:{type:"password"},domProps:{value:t.pass},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.pass=e.target.value)}}}),s("button",{staticClass:"buttonLogin",on:{click:t.login}},[t._v("Iniciar sesion")]),s("p",{staticClass:"msgError"},[t._v(t._s(t.msgError))]),s("p",{staticClass:"msgOk"},[t._v(t._s(t.msgOk))]),s("a",{staticClass:"urlLogin",on:{click:t.rememberLogin}},[t._v("Olvidé mi contraseña")])])])},B=[];n["a"].use(_["a"]);var J=new _["a"].Store({state:{users:[{user:"mannlex21",pass:"123456"},{user:"admin",pass:"admin"}]},mutations:{},actions:{}}),U={data:function(){return{user:"",pass:"",msgError:"",msgOk:""}},mounted:function(){var t=this;C.watch(C.getters.getlogin,function(e){e&&t.$router.push("/")})},watch:{user:function(t,e){this.msgError="",this.msgOk=""},pass:function(t,e){this.msgError="",this.msgOk=""}},methods:{login:function(){this.msgError="",this.msgOk="";var t=this.user,e=this.pass;if(""!=t&&""!=e){var s=J.state.users.filter(function(s){return s.user==t&&s.pass==e});s.length>0?C.commit("loginChange"):this.msgError="Datos incorrectos"}else this.msgError="Campos vacios"},rememberLogin:function(){this.msgError="",this.msgOk="User:admin. Password:admin"}},beforeCreate:function(){1==C.state.login&&this.$router.push("/")}},z=U,Y=(s("4ad8"),Object(p["a"])(z,V,B,!1,null,"675736f5",null));Y.options.__file="viewComponent.vue";var K=Y.exports,Q=[{path:"/",component:$},{path:"/login",component:K},{path:"/ligaConsulta",component:D},{path:"/historial",component:H}],X=Q,Z=[].concat(X),tt=new a["a"]({mode:"history",routes:Z}),et=tt;n["a"].use(_["a"]),n["a"].use(a["a"]),n["a"].config.productionTip=!1,new n["a"]({store:C,router:et,render:function(t){return t(y)}}).$mount("#app")},"5bc6":function(t,e,s){"use strict";var n=s("01f6"),a=s.n(n);a.a},"5f5c":function(t,e,s){"use strict";var n=s("9549"),a=s.n(n);a.a},"6ca4":function(t,e,s){},"83c9":function(t,e,s){"use strict";var n=s("4d7a"),a=s.n(n);a.a},"85c9":function(t,e,s){},9549:function(t,e,s){},a3d4:function(t,e,s){"use strict";var n=s("2ff7"),a=s.n(n);a.a},c21b:function(t,e,s){},eb5d:function(t,e,s){"use strict";var n=s("85c9"),a=s.n(n);a.a},eef8:function(t,e,s){}});
//# sourceMappingURL=app.827796f9.js.map