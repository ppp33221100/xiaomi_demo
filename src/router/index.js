import Vue from 'vue'
import Router from 'vue-router'
import Classify from '../components/Classify.vue'
// import Home from '../components/Home.vue'


Vue.use(Router)

export default new Router({
  routes: [
  	// {
   //    path: '/',
   //    redirect:'/home'
   //    
   //  },
  	// {
   //    path: '/home',
   //    name: 'Home',
   //    component:Home 
   //  },
    {
      path: '/classify',
      name: 'Classify',
      component:Classify 
    },
  ]
})
