import Vue from 'vue'
import Router from 'vue-router'
import Mine from '../components/Mine.vue'
Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: '',
      component: 
    }*/
    {
    	path:'/mine',
    	name:'Mine',
    	component:Mine
    }
  ]
})
