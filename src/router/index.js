import Vue from 'vue'
import Router from 'vue-router'
import Mine from '../components/Mine.vue'
import Collect from '../components/Collect.vue'
import New from '../components/New.vue'
Vue.use(Router)

export default new Router({
  routes: [
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
