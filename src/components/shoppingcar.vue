<template>
	<div>
	<div @click="go">
	<van-nav-bar title="购物车" left-text="返回" left-arrow >
  	<van-icon name="search" slot="right" />
	</van-nav-bar >
	</div>
	<aside>
		<span>登录后享受更多优惠</span>
		<span>去登陆></span>
	</aside>
	<div class="more">
		<div class="cen" v-if="q==0">
		<span>购物车还是空的</span>
		<span>去逛逛</span>
		</div>
		<div class="allcom" v-if="q!=0" v-for="(item,index) in carbase">
			<div id="commodity">
  			<img :src="item.img" alt="">
  			<p>￥{{item.price}}</p>
  			<p><span>{{item.memory}}{{item.color}}</span></p>
  			<van-stepper v-model="item.value" />
  		</div>
		</div>
	</div>
	<content>
		<h1>猜您喜欢</h1>
		<div class="product">
			<div class="content" v-for="item in Phonedata"  @click = 'shoppingFn(item)'>
				<img :src="item.img">
				<p>{{item.name}}</p>
				<p>{{item.content}}</p>
				<p>￥{{item.price}}</p>
			</div>
		</div>
	</content>
	<footer class="footer" v-if="q!=0">
				<div class="con">
					<div class="money">
						<p>共{{this.allnum}}件 金额：</p>
						<p><span>{{this.allprice}}</span>元</p>
					</div>
					<button>继续购物</button>
					<button>去结算</button>
				</div>
	</footer>
</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				Phonedata:[],
				carbase:JSON.parse(localStorage.getItem("com")),
				value:0,
				q:0,
				allnum:0,
				allprice:0
			}
		},
		created(){
			this.$axios.get("https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1")
			.then(res=>{
				this.Phonedata=res.data
			})
			if(this.carbase.length!=0){
				this.q=this.carbase.length
			}
			this.carbase.forEach((item)=> {
				this.allnum+=item.value	
				this.allprice+=Number(item.value*item.price)

			})
		},
		methods:{
			go(){
				this.$router.go(-1)
			},
			shoppingFn(data){
				this.$router.push({
					path:"/details1",
					query:{
						details1:data
					}
				})
			}
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
		background:#EBEBEB;
		
	}
	.more .cen{
		width:3.32rem;
		line-height:1.12rem;
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
	.allcom{
		width:100%;
		background:#fff;
	}
	#commodity{
		width:5.76rem;
		height:1.8rem;
		margin:0rem auto;
		overflow:hidden;
		img{
			width:1.8rem;
			height:100%;
			float:left;
		}
		p:first-of-type{
			float:right;
			width:3.6rem;
			font-size:22px;
		}
		p:nth-of-type(2){
			float:right;
			width:3.6rem;
		}
	}
	.van-stepper{
		margin-left:2.3rem;
		margin-top:1rem;
	}
	.footer{
		height: .9rem;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #FFF;
		width: 100%;
		.con{
			display: flex;
			height: .9rem;
			width: 100%;
			.money{
			flex-wrap: 1;
			width: 34%;
			}
			button{
		/* 	display: inline-block; */
			flex-wrap: 1;
			width: 33%;
		}
		}	
	}
</style>