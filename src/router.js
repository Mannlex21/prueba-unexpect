import VueRouter  from 'vue-router'
import RoutesComponents from './components/routes'
import LigaWhatsapp from "./components/pages/liga/viewComponent.vue";
import LigaWhatsappConsulta from "./components/pages/liga/viewComponent_Consult.vue";
import Historial from "./components/pages/historial/viewComponent.vue";
import Login from "./components/pages/login/viewComponent.vue";

const routes = [
  { path: '/hello-world',redirect:'/liga', component: LigaWhatsapp },
  { path: '/',redirect:'/login', component: LigaWhatsapp },
  { path: '/liga', component: LigaWhatsapp },
  { path: '/login', component: Login },
  { path: '/ligaConsulta', component: LigaWhatsappConsulta },
  { path: '/historial', component: Historial }
]

const router = new VueRouter({
  routes
});

// router.beforeEach(authRouter.activePermissionsInRoutes)

export default router;