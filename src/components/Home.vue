<template>
	<div class="home">
		<header>
				<div class="logo"></div>
				<van-search placeholder="请输入搜索关键词" v-model="value" />
		</header>
		<div class="banner">
				<van-swipe :autoplay="3000" indicator-color="white" >
					  <van-swipe-item v-for ="(item,index) in banImg" :key = 'index'>
					  		<img :src="banImg[index].img">
					  </van-swipe-item>
				</van-swipe>
		</div>
		<nav class="nav">
			<van-grid :column-num="5" square>
				  <van-grid-item icon="coupon-o" text="icon1" />
				  <van-grid-item icon="comment-o" text="icon2" />
				  <van-grid-item icon="like-o" text="icon3" />
				  <van-grid-item icon="scan" text="icon4" />
				  <van-grid-item icon="description" text="icon5" />
			</van-grid>
		</nav>
		<content>
			<div class="product">
				<div class="content" v-for="item in Phonedata" @click = 'shoppingFn'>
					<img :src="item.img">
					<p>{{item.name}}</p>
					<p>{{item.content}}</p>
					<p>￥{{item.price}}</p>
				</div>
			</div>
	</content>

	</div>

</template>
<script>
	export default{
		data(){
			return{
				value:'',
				banImg:[],
				Phonedata:[]
			}
		},
		methods:{
			selBan(){
					this.$axios.get('https://shiyaming1994.github.io/mi/static/rotationChart.json')
					.then(res=>{
						this.banImg = res.data
					})
					},
			selHomeCon(){
						this.$axios.get('https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1')
						.then(respans=>{
							this.Phonedata = respans.data
				})
				},
			shoppingFn(){
				
			}

		},
		created(){
			this.selBan()
			this.selHomeCon()

			}
		
	}
</script>
<style lang="less" scoped>
	.home{
		padding-top:1.1rem;
	}
	.home header{
		width: 100%;
		height: 1.1rem;
		position: fixed;
		top: 0;
		left: 0;
		background: #f2f2f2;
		padding: .2rem .36rem;
		display: flex;
		justify-content: space-between;
	}
	.logo{
		width: .7rem;
		height: .7rem;
		background: #87ceeb;
		border-radius: 50%;
	}
	.van-search{
		border: none;
		border-radius: .3rem;
		background: #FFF;
	}
	.van-search__content{
		background: #FFF;
		width: 4rem;
	}
	.banner{
		width: 100%;
		height: 3.2rem;
	}
	.banner img{
		width: 100%;
		height: 3.2rem;
	}
	.nav{
		width: 100%;
		height: 1.3rem;
	}
	.nav i{
		font-size: 20px;
	}
	content {
		width:100%;


	}
	.product{
		width:100%;
		display:flex;
		justify-content:space-between;
		flex-wrap:wrap;
		padding-top: .15rem;
		margin-bottom: 1.1rem;
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


</style>