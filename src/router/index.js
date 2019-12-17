import Vue from 'vue'
import Router from 'vue-router'
import Shoppingcar from "../components/shoppingcar.vue"
import Home from '../components/Home.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
    path:'/shoppingcar',
    name:'shoppingcar',
    component:Shoppingcar
    },
    {
   	path:'/home',
    name:'home',
    component:Home
    }
  ]
})
