<template>
	<div>
	<van-nav-bar title="购物车" left-text="返回" left-arrow>
  	<van-icon name="search" slot="right" />
	</van-nav-bar>
	<aside>
		<span>登录后享受更多优惠</span>
		<span>去登陆></span>
	</aside>
	<div class="more">
		<div class="cen">
		<span>购物车还是空的</span>
		<span>去逛逛</span>
		</div>
	</div>
	<content>
		<h1>猜您喜欢</h1>
		<div class="product">
			<div class="content" v-for="item in Phonedata">
				<img :src="item.img">
				<p>{{item.name}}</p>
				<p>{{item.content}}</p>
				<p>￥{{item.price}}</p>
			</div>
		</div>
	</content>
</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				Phonedata:[]
			}
		},
		created(){
			this.$axios.get("https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1")
			.then(res=>{
				this.Phonedata=res.data
			})
		}
	}
</script>
<style lang="less" scoped>
	.van-nav-bar{
		background:#F2F2F2;
	}
	aside{
		width:100%;
		height:1.12rem;
		background:#fff;
		line-height:1.12rem;
	}
	aside span:first-of-type{
		font-size:0.32rem;
		margin-left:0.25rem;
	}
	aside span:last-of-type{
		color:#757575;
		margin-left:2.2rem;
	}
	.more{
		width:100%;
		height:1.12rem;
		background:#EBEBEB;
		line-height:1.12rem;
	}
	.more .cen{
		width:3.32rem;
		color:#ABABAB;
		margin:auto;
	}
	.more .cen span:last-of-type{
		width:1.24rem;
		height:0.43rem;
		color:#000;
		border:1px solid #ababab;
		text-align:center;
	}
	content h1{
		width:100%;
		height:0.5rem;
		text-align:center;
		line-height:0.5rem;
	}
	.product{
		width:100%;
		display:flex;
		justify-content:space-between;
		flex-wrap:wrap;
	}
	.product .content{
		width:48%;
		height:4.44rem;
		margin-bottom:0.2rem;
		img{
			width:100%;
			height:75%;
		}
		p:first-of-type{
			font-size:0.32rem;
			margin:0.06rem;
			font-weight:bolder;
		}
		p:nth-of-type(2){
			color:#757575;
			margin:0rem 0.1rem;
		}
		p:last-of-type{
			color:#EA625B;
			font-size:0.28rem;
			margin:0 0.1rem;
		}
	}
</style>