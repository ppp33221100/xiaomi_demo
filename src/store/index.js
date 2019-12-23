import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		f:"",
		// 每次点击加入购物车传过来的数量
		n:0,
		//总的购物车数量
		count:JSON.parse(localStorage.getItem("price")),
		//存放单品数量的数组
		// pricenum:[],

		pricearr:[],
		arr:[],
		arr2:[],
		// ppp:"",
		//home页点击进入详情页时存放信息
		msg:JSON.parse(sessionStorage.getItem("message"))
	},
	mutations:{
		MESSAGE(state,val){
			state.msg = val
			sessionStorage.setItem("message",JSON.stringify(state.msg));
		},
		//修改数据 同步
		COUNT(state,val){
			state.n = Number(val);
			state.count += state.n;
			
			localStorage.setItem("price",String(state.count))
		},
		COUNT_obj(state,v){
			var val = JSON.parse(v)
			state.f = state.arr2.includes(val.id);
			state.arr2.push(val.id)
			if(state.f == false){
				state.arr.push(val);
			}else{
				state.arr2.pop();
			}

			

			localStorage.setItem("id",JSON.stringify(state.arr2));
		},
		PRICE(state,val,val2){
			// console.log(val)
			if(state.f == false){
				state.pricearr.push(val);
			}
		}
	},
	actions:{
		//异步
	},
	getters:{
		
	}
})