<template>
	<div class="tabbar">
		<div class="tabbars"></div>
		<van-tabbar v-model="active">
			  <van-tabbar-item name="home" icon="wap-home-o" @click="shoppingcar('/home')">首页</van-tabbar-item>
			  <van-tabbar-item name="search" icon="apps-o">分类</van-tabbar-item>
			  <van-tabbar-item name="friends" icon="shopping-cart-o"  @click="shoppingcar('/shoppingcar')">购物车</van-tabbar-item>
			  <van-tabbar-item name="setting" icon="contact"  @click="shoppingcar('/mine')">个人</van-tabbar-item>
		</van-tabbar>
	 </div>
</template>
<script>
		export default {
		  data() {
		    return {
		      active: 'home'
		    }
		  },
		  methods:{
		  	shoppingcar(a){
		  		this.$router.push(a)
		  	}
		  }
		}
</script>
<style lang = 'less' scoped>
	.tabbar{
		height: .88rem;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.tabbars{
		height: .88rem;
	}
</style>