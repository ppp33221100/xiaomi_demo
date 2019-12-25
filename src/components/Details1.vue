<template>
	<div>
		<div class="position" @click="go">
			<van-icon name="arrow-left" />
		</div>
		<van-swipe :autoplay="3000" indicator-color="white">
  		<van-swipe-item v-for="(item,index) in details1.imgList" :key="index">
  			<img :src="item.img">
  		</van-swipe-item>
		</van-swipe>
		<aside>
			<h2>{{details1.name}}</h2>
			<p class="aside_info">{{details1.info}}</p>
			<p class="aside_price">￥{{details1.price}}</p>
			<div class="PhoNetInfo">
				<p  @click="show(details1)" class="PhoNetInfo_one"><span>已选</span>
							   <span>{{ details1.name }}</span>
					<van-icon name="arrow" />
				</p>
				<p class="PhoNetInfo_two"><span>送至</span><span>{{to}}</span><van-icon name="arrow" /></p>
			</div>
		</aside>
		<div class="poster">
			<img :src="item.img" v-for="item in details1.info_img">
				<van-goods-action>
  				<van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
  				<van-goods-action-icon icon="cart-o" text="购物车" :info="info" @click="onClickIcon" />
  				<van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
  				<van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
				</van-goods-action>
		</div>
		<van-popup v-model="showbase" position="bottom"
  		:style="{ height: '80%' }">
  		<div class="commodity">
  			<img :src="img" alt="">
  			<p>￥{{price}}</p>
  			<p><span>{{details1.name}}{{memory}}{{color}}</span></p>
  		</div>
  		<div class="versions">
  			<p>版本</p>
  			<div v-for="(item,index) in details1.edition" @click="edit1(item,item.color,index)"
  			 :class="{active:num==index}">{{item.Memory}}<span>{{item.edition_price}}元</span></div>
  		</div>
  		<div class="color">
  			<p>颜色</p>
  			<div v-for="(item,index) in colorarr" :class="{active:num2==index}"  @click="edit2(index,item)">{{item.color_list}}</div>
  		</div>
  		<div class="buynum">
  			<p>购买数量</p>
  			<van-stepper v-model="value" />
  		</div>
  		<van-goods-action>
  		<van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
  		<van-goods-action-icon icon="cart-o" text="购物车" :info="info" @click="onClickIcon" />
  		<van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
  		<van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
		</van-goods-action>
  		</van-popup>

	</div>
</template>
<script type="text/javascript">
import  skuData from '../assets/js/data.js';
export default{
	data(){
		return{
			details1:JSON.parse(sessionStorage.getItem("details1")),
			already:"小米8指纹版",
			to:"北京",
			info:Number(localStorage.getItem("info")),
			showbase:false,
			img:"",
			value:0,
			memory:"",
			color:"",
			price:"",
			num:0,
			num2:0,
			colorarr:[],
			str:JSON.parse(localStorage.getItem("com"))||[]
		}
	},
	created(){
		//console.log(this.details1)
		this.img=this.details1.img
		this.colorarr=this.details1.edition[0].color
		this.memory=this.details1.edition[0].Memory
		this.color=this.details1.edition[0].color[0].color_list
		this.price=this.details1.edition[0].edition_price
	},
	methods:{
		go(){
			this.$router.go(-1)
		},
		onClickIcon(){
			this.$router.push("/shoppingcar")
    	},
    	//加入购物车触发的函数
    	onClickButton(){
    		this.info+=this.value
    		localStorage.setItem("info",this.info)
    		this.str.push({memory:this.memory,img:this.img,color:this.color,price:this.price,value:this.value})
    		console.log(this.str)
    		localStorage.setItem("com",JSON.stringify(this.str))
    	},
		show(d){
			this.showbase=true
		},
		//商品规格的函数
		edit1(item,s,i){
			this.colorarr=s
			this.num=i
			this.price=item.edition_price
			this.memory=item.Memory
		},
		edit2(q,item){
			this.num2=q
			this.img=item.img
			this.color=item.color_list
		}
	}
}
</script>
<style lang="less" scoped>
	.van-swipe{
		width:100%;
		height:7.04rem;
		img{
			width:100%;
			height:100%;
		}
	}
	aside h2{
		width:90%;
		margin: 0.2rem auto 0;
		height:0.69rem;
		line-height:0.69rem;
		font-size:0.44rem;
	}
	.aside_info{
		width:90%;
		height:1.12rem;
		margin:auto;
		color:#757575;
	}
	.aside_price{
		width:90%;
		height:0.6rem;
		font-size:0.44rem;
		color:#FF6700;
		margin:auto;
	}
	.PhoNetInfo{
		width: 90%;
		height:1.65rem;
		background:#FAFAFA;
		margin:auto;
		span{
			color:#737373;
			font-size:0.16rem;
		}
		span:nth-of-type(2){
			color:#000;
			margin-left:0.3rem;
		}
	}
	.PhoNetInfo_one{
		width:100%;
		height:0.8rem;
		line-height:0.8rem;
		padding:0rem 0.26rem;
		box-sizing:border-box;
		border-bottom:1px solid #CCCCCC;
	}
	.PhoNetInfo_two{
		width:100%;
		height:0.8rem;
		line-height:0.8rem;
		padding:0rem 0.26rem;
		box-sizing:border-box;
	}
	.PhoNetInfo_two span{
		color:#737373;
		font-size:0.16rem;
	}
	.poster img{
		width:100%;
	}
	.position{
		position:fixed;
		top:0.1rem;
		left:0.2rem;
		width:0.4rem;
		height:0.4rem;
		line-height:0.5rem;
		background:#626262;
		border-radius:100%;
		text-align:center;
		font-size:0.3rem;
		z-index:100;
		opacity:0.8;
	}
	.sku-container{
		width:100%;
		height:8.62rem;
		background:#fff;
		position:fixed;
		top:2.83rem;
		left:0;
	}
	.headers{
		width:100px;
		height:100px;
		background:red;
	}
	.commodity{
		width:5.76rem;
		height:1.8rem;
		margin:0.5rem auto;
		img{
			width:1.8rem;
			height:100%;
			float:left;
		}
		p:first-of-type{
			float:right;
			width:3.6rem;
			font-size:22px;
			margin-top:0.44rem;
		}
		p:nth-of-type(2){
			float:right;
			width:3.6rem;
			font-size:16px;
		}
	}
	.versions{
		width:5.76rem;
		margin:auto;
		div{
			width:100%;
			height:0.6rem;
			margin:0.2rem 0;
			border:1px solid #CCCCCC;
			line-height:0.6rem;
			text-indent:0.2rem;
			color:#CCCCCC;
			span{
				float:right;
				margin-right:0.2rem;
			}
		}
	}
	.color{
		width:5.76rem;
		height:1.79rem;
		margin:auto;
		div{
			width:1.09rem;
			height:0.6rem;
			margin:0.2rem 0.1rem;
			border:1px solid #CCCCCC;
			float:left;
			line-height:0.6rem;
			text-align:center;
			color:#CCCCCC;
			span{
				float:right;
				margin-right:0.2rem;
			}
		}
	}
	.buynum{
		width:5.76rem;
		height:0.7rem;
		margin:auto;
		.van-stepper{
			float:right;
		}
	}
	 .versions .active{
		color:#F56600;
		border-color:#F56600;
	}
	 .color .active{
		color:#F56600;
		border-color:#F56600;
	}
</style>