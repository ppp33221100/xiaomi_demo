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
  				<van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
  				<van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
  				<van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
				</van-goods-action>
		</div>
		<div class="sku-container">
		        <van-sku
		          v-model="showBase"
		          :sku="skuData.sku"
		          :goods="skuData.goods_info"
		          :goods-id="skuData.goods_id"
		          :quota="skuData.quota"
		          :quota-used="skuData.quota_used"
		          :initial-sku="initialSku"       
		          reset-stepper-on-hide
		          reset-selected-sku-on-hide
		          disable-stepper-input
		          :close-on-click-overlay="closeOnClickOverlay" 
		          @buy-clicked="onBuyClicked"
		          @add-cart="onAddCartClicked"
		        />
		        
      </div> 

	</div>
</template>
<script type="text/javascript">
import  skuData from '../assets/js/data.js';
export default{
	data(){
		return{
			details1:this.$route.query.details1,
			already:"小米8指纹版",
			to:"北京",
				skuData:skuData,
		      	showBase:false,
		      	showCustom: false,
		     	showStepper: false,
		     	showSoldout: false,
		     	closeOnClickOverlay: true,
		     	initialSku:{
		     	    s1: '30349',
		       	 	s2: '1193',
		      	  	selectedNum: 3
		     	 },
		     	  customSkuValidator: () => '请选择xxx!'
		}
	},
	created(){
		// console.log(this.details1)
	},
	methods:{
		go(){
			this.$router.go(-1)
		},
		onClickIcon(){

    	},
    	onClickButton() {
      		this.show=true
    	},
    	onBuyClicked(data) {
		      this.$toast('buy:' + JSON.stringify(data));
		      //console.log(JSON.stringify(data))
		    },
	 onAddCartClicked(data) {
		      this.$toast('add cart:' + JSON.stringify(data));
		    },
		show(d){
		 	this.showBase=true;
		 	// sessionStorage.setItem("id",JOSN.stringify(d)
		 	// this.skuData.sku.tree.v.forEach(function(item) {
		 	// 	item.name="小米"
		 	// })
		 	// console.log(this.skuData.sku.tree.v)
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
</style>