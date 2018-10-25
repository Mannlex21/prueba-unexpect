import VueRouter  from 'vue-router'
import RoutesComponents from './components/routes'


const routes = [].concat(RoutesComponents)

const router = new VueRouter({
  mode: 'history',
  routes
});

// router.beforeEach(authRouter.activePermissionsInRoutes)

export default router;