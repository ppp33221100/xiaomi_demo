import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		//存储共享数据
		arrMoney:[]
	},
	mutations:{
		ADD(state,val){
			localStorage.setItem("item",val)
		}
	},
	actions:{
		//异步
	},
	getters:{
		
	}
})