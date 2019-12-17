import Vue from 'vue'
import Router from 'vue-router'
import Shoppingcar from "../components/shoppingcar.vue"
Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: '',
      component: 
    }*/
    {
    path:'/shoppingcar',
    name:'shoppingcar',
    component:Shoppingcar
    }
  ]
})
