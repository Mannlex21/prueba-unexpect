import LigaWhatsapp from "./pages/liga/viewComponent.vue";
import LigaWhatsappConsulta from "./pages/liga/viewComponent_Consult.vue";
import Historial from "./pages/historial/viewComponent.vue";
import Login from "./pages/login/viewComponent.vue";
const routes = [
    { path: '/', component: LigaWhatsapp },
    { path: '/login', component: Login },
    { path: '/ligaConsulta', component: LigaWhatsappConsulta },
    { path: '/historial', component: Historial }
];

export default routes