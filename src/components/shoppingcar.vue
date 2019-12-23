<template>
	<div class="shoppingcar">
	<van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="returnFn()">
  	<van-icon name="search" slot="right" />
	</van-nav-bar>
	<aside>
		<span>登录后享受更多优惠</span>
		<span>去登陆></span>
	</aside>
	<div class="commodity">
		<ul>
			<li v-for="(item,index) in arr" v-if="tis==0">
				<div class="com_img">
					<img :src="item.img" alt="">
				</div>
				<div class="com_txt">
					<p>{{ item.name }}</p>
					<p>￥{{ item.price }}</p>
					<p><van-stepper v-model="value[index]" button-size="24px"/><van-icon name="delete" /></p>
				</div>
			</li>
		</ul>
	</div>
	<div class="more" v-if="tis!=0">
		<div class="cen">
			<span>购物车还是空的</span>
			<span @click = "goto('/home')">去逛逛</span>
		</div>
	</div>
	
	<content>
		<h1>猜您喜欢</h1>
		<div class="product">
			<div class="content" v-for="item in Phonedata" @click = 'shoppingFn(item)'>
				<img :src="item.img">
				<p>{{item.name}}</p>
				<p>{{item.content}}</p>
				<p>￥{{item.price}}</p>
			</div>
		</div>
	</content>
	<footer class="footer">
		<div class="con">
			<div class="money">
				<p>共{{ number }}件 金额：</p>
				<p><span>{{ prices }}</span>元</p>
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
				value:this.$store.state.pricearr,
				Phonedata:[],
				// arr:[],
				arr:this.$store.state.arr,
				number:0,
				prices:0,
				tis:0
			}
		},
		methods:{
			returnFn(){
				this.$router.go(-1)
			},
			shoppingFn(item){
				sessionStorage.setItem('id',JSON.stringify(item))
				this.$router.push('/details_one')
				// this.$router.push({
				// 	path:'/details_one',
				// 	query:{
				// 		abc:item
				// 	}
				// })
			},
			goto(n){
				this.$router.push(n)
			}
		},
		created(){
			if(this.Phonedata.length!=0){
				this.tis=this.Phonedata.length
			}
			console.log(this.Phonedata.length)
			for(var i = 0;i < this.value.length;i++){
				this.number += Number(this.value[i])
				this.prices += Number(this.arr[i].price)*Number(this.value[i])
				}
			this.$axios.get("https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1")
			.then(res=>{
				this.Phonedata=res.data;
			});
		}
	}
</script>
<style lang="less" scoped>
	.shoppingcar{
		background: #F2F2F2;
	}
	.van-nav-bar{
		background:#F2F2F2;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
	}
	aside{
		width:100%;
		height:1.12rem;
		background:#fff;
		line-height:1.12rem;
		margin-top: 1rem;
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
		height:0.8rem;
		font-size: .26rem;
		text-align:center;
		line-height:0.8rem;
	}
	.product{
		width:100%;
		display:flex;
		justify-content:space-between;
		flex-wrap:wrap;
		padding-top: .15rem;
	}
	.product .content{
		width:48%;
		height:4.44rem;
		margin-bottom:0.2rem;
		img{
			width:100%;
			height:75%;
		}
		p{
			padding:  0 .1rem;
		}
		p:first-of-type{
			font-size:0.26rem;
			line-height: .54rem;
			
		}
		p:nth-of-type(2){
			color:#757575;
			line-height: .32rem;
			font-size: .20rem;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		p:last-of-type{
			color:#EA625B;
			font-size:0.22rem;
			line-height: .34rem;
		}
	}
	.commodity{
		width: 100%;
		margin-top: .2rem;
		ul{
			li{
				width: 100%;
				height: 2.2rem;
				background: #FFF;
				margin-bottom: .2rem;
				padding:  0.14rem  .3rem;
				display: flex;
				justify-content: space-around;
				align-items: center;
				.com_img{
					height: 1.85rem;
					width: 1.85rem;
					margin-right: .2rem;
					img{
					height: 1.85rem;
					width: 1.85rem;
					}
				}
				.com_txt{
					height: 1.85rem;
					width: 100%;
					p{
						font-size: .22rem;
						color: #666666;
						line-height: .46rem;
					}
					p:last-of-type{
						margin-top: .1rem;
						display: flex;
						justify-content: space-between;
						line-height: .3rem;
						.van-icon{
							font-size: 20px;
						}
					}
				}
			}
		}
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
