
import LigaWhatsappConsulta from "./pages/liga/viewComponent_Consult.vue";
import Historial from "./pages/historial/viewComponent.vue";
import Login from "./pages/login/viewComponent.vue";
import hello from './HelloWorld.vue'
const routes = [
    // { path: '/', component: LigaWhatsapp },
    { path: '/', component: hello },
    { path: '/login', component: Login },
    { path: '/ligaConsulta', component: LigaWhatsappConsulta },
    { path: '/historial', component: Historial }
];

export default routes