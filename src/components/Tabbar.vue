<template>
	<div class="tabbar">
		<div class="tabbars"></div>
		<van-tabbar v-model="active">
			  <van-tabbar-item name="home" icon="wap-home-o">首页</van-tabbar-item>
			  <van-tabbar-item name="search" icon="apps-o"><router-link to="/classify">分类</router-link></van-tabbar-item>
			  <van-tabbar-item name="friends" icon="shopping-cart-o">购物车</van-tabbar-item>
			  <van-tabbar-item name="setting" icon="contact">个人</van-tabbar-item>
		</van-tabbar>
	 </div>
</template>
<script>
		export default {
		  data() {
		    return {
		      active: 'home'
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