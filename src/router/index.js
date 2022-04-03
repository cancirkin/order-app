import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import NewOrder from '../views/NewOrder.vue'
import Orders from '../views/Orders.vue'
import Cooking from '../views/Cooking.vue'
import Ready from '../views/Ready.vue'
import Completed from '../views/Completed.vue'
import Login from '../views/Login.vue'
import AppLayout from '../layouts/AppLayout.vue'
import SimpleLayout from '../layouts/SimpleLayout.vue'
import Cookies from 'js-cookie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        name: 'Dashboard',
        path: '',
        component: Dashboard,
      },
      {
        name: 'NewOrder',
        path: 'new-order',
        component: NewOrder,
      },
      {
        name: 'Orders',
        path: 'orders',
        component: Orders,
      },
      {
        name: 'Cooking',
        path: 'cooking',
        component: Cooking,
      },
      {
        name: 'Ready',
        path: 'ready',
        component: Ready,
      },
      {
        name: 'Completed',
        path: 'completed',
        component: Completed,
      },
    ]
    
  },
  {
    path: '/login',
    component: SimpleLayout,
    children: [
      {
        name: 'Login',
        path: '',
        component: Login,
      },
    ]
  }
] 



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  let isAuthenticated = false
  let user = Cookies.get('user')
  if(user !== undefined){
    isAuthenticated = true
  }
  
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  if (to.name === 'Login' && isAuthenticated) next({ name: 'Home' })
  else next()

})



export default router
