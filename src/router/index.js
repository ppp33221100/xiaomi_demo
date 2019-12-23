import Vue from 'vue'
import Router from 'vue-router'
import Classify from '../components/Classify.vue'

import Shoppingcar from "../components/shoppingcar.vue"
import Home from '../components/Home.vue'
import Details1 from '../components/Details1.vue'
import Mine from '../components/Mine.vue'
import Collect from '../components/Collect.vue'
import New from '../components/New.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'',
      component:Home,
      meta:{
        flag:true
      }
    },
    {
      path: '/classify',
      name: 'Classify',
      component:Classify,
      meta:{
        flag:true
      } 
    },
    {
      path:'/shoppingcar',
      name:'shoppingcar',
      component:Shoppingcar,
      meta:{
      	flag:false
      }
    },
    {
     	path:'/home',
      name:'home',
      component:Home,
       meta:{
      	flag:true
      }
    },
    {
      path:"/details1",
      name:"details1",
      component:Details1,
      meta:{
        flag:false
      }
  	},
  	{
  	path:'/mine',
      name:'Mine',
      component:Mine,
      meta:{
      flag:true
      }
    },
    {
    	path:'/collect',
    	name:'Collect',
    	component:Collect,
    	meta:{
        flag:false
      }
    },
    {
    	path:'/new',
    	name:'New',
    	component:New,
    	meta:{
           flag:false
    	}
    }
  ]
})
