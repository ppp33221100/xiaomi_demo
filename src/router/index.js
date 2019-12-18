import Vue from 'vue'
import Router from 'vue-router'
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
    path:'/shoppingcar',
    name:'shoppingcar',
    component:Shoppingcar,
    meta:{
    	flag:true
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
    component:Details1
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
