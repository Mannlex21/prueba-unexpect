import Main from "./pages/main/viewComponent.vue";
import Login from "./pages/login/viewComponent.vue";
import LigaWhatsapp from "./pages/liga/viewComponent.vue";
import LigaWhatsappConsulta from "./pages/liga/viewComponent_Consult.vue";
const routes = [
    { path: '/main', component: Main },
    { path: '/login', component: Login },
    { path: '/liga', component: LigaWhatsapp },
    { path: '/ligaConsulta', component: LigaWhatsappConsulta }
];

export default routes