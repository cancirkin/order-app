import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Cookies from 'js-cookie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
