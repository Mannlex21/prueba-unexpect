import VueRouter  from 'vue-router'
import RoutesComponents from './components/routes'
import HelloWorld from './components/HelloWorld'

const routes = [{ path: '/', component: HelloWorld }].concat(RoutesComponents)

const router = new VueRouter({
  mode: 'history',
  routes
});

// router.beforeEach(authRouter.activePermissionsInRoutes)

export default router;