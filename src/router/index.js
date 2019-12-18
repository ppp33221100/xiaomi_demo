import Vue from 'vue'
import Router from 'vue-router'
import Classify from '../components/Classify.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/classify',
      name: 'Classify',
      component:Classify 
    }
  ]
})
