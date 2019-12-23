<template>
	<div class="details_one">
		<div class="banner">
				<van-swipe :autoplay="3000" indicator-color="white" >
					  <van-swipe-item v-for ="(item,index) in imgList" :key = 'index'>
					  		<img :src="imgList[index].img">
					  </van-swipe-item>
				</van-swipe>
				 <div class="back" @click = "retreatFn">
					  	<van-icon name="arrow-left" />
				 </div>
		</div>
		<section class="section">
				<h1>{{ datas.name }}</h1>
				<p class="details">{{ datas.info }}</p>
				<p class="money">￥{{ datas.price }}</p>
				<div class="version">
						<p @click="newData"><span>已选　　</span>
							   <span> {{ datas.name }}</span>
							   <van-icon name="arrow" />
						</p>
						<p><span>送至　　</span><span>北京</span> <van-icon name="arrow" /></p>
				</div>
				<div  class="info_imgs">
					<img :src="item.img"  v-for="(item,index) in info_img" :key = "index">
				</div>
				<van-goods-action>
					<van-goods-action-icon icon="chat-o" text="客服"/>
					<van-goods-action-icon icon="cart-o" :info=this.$store.state.count text="购物车"/>
					<van-goods-action-button type="warning" text="加入购物车"/>
					<van-goods-action-button type="danger" text="立即购买"/>
				</van-goods-action>
		</section>
		<!-- 显示隐藏区域 -->
		<div class="cover" v-show ="showBase">
		 	<div class="con">
	 			<p class="head"><span @click = "showBase = false">×</span></p>
	 			<!-- 头部 -->
	 			<div class="product">
	 				<div class="proImg"><img :src="imgSrc" alt=""></div>
	 				<div class="proTxt">
	 					<p>￥{{ color.edition_price }}</p>
	 					<p class="phone_model">
	 						<span>{{ datas.name }}</span>
	 						<span>{{ colorType }}</span>
	 						<span>{{ colorTxt }}</span>
	 					</p>
	 				</div>
	 			</div>
	 			<p class="classify">版本</p>
	 			<!-- 版本 -->
	 			<div class="version">
	 				<p class="type" v-for = "(item,index) in datas.edition" @click = "colorFn(item,index)"
	 				 :class="{active:flag1 == index}">
	 					<span>{{ item.Memory }}</span>
	 					<span>{{ item.edition_price }}元</span>
	 				</p>
	 			</div>
	 			<p class="classify">颜色</p>
	 			<!-- 颜色 -->
	 			<p class="color" >
	 				<span v-for="(item,index) in color.color" @click = "imgFn(item,index)" :class="{active:flag2 == index}">{{ item.color_list }}</span>
	 			</p>
	 			<div class="num">
	 				<p>购买数量</p>
	 				<van-stepper v-model="value" integer/>
	 			</div>
	 			<p class="shoppingCar" @click="countFn()">加入购物车</p>
		 	</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				showBase:false,
				flag1:0,
				flag2:0,
				value:localStorage.getItem(this.$store.state.msg.id),
				imgList:[],
				info_img:[],

				datas:this.$store.state.msg,
				// 版本内的数据
				color:this.$store.state.msg.edition[0],
				imgSrc:this.$store.state.msg.img,

				colorType:"请选择内存",
				colorTxt:"请选择颜色"
			}
		},
		methods:{
			//在xuex中储存数据
			countFn(){
				localStorage.setItem(this.datas.id,JSON.stringify(this.value))
				this.$store.commit('COUNT',this.value);
				this.$store.commit('COUNT_obj',JSON.stringify(this.datas));
				this.$store.commit('PRICE',this.value);
			},
			getData(){
				this.info_img = this.datas.info_img;
				this.imgList = this.datas.imgList;
			},
			// 版本内的数据
			colorFn(item,i){
				this.color = item;
				this.flag1 = i;
				if(this.flag2 != -1){
					this.flag2 = 0;
					this.colorTxt = item.color[0].color_list
				}
				this.colorType = item.Memory
			},
			// 颜色内的数据
			imgFn(item,i){
				this.imgSrc = item.img;
				this.flag2 = i;
				this.colorTxt = item.color_list
			},
			// 返回上一级
			retreatFn(){
				this.$router.go(-1)
			},
			onBuyClicked(data) {
		      this.$toast('buy:' + JSON.stringify(data));
		      
		    },
		    onAddCartClicked(data) {
		      this.$toast('add cart:' + JSON.stringify(data));
		    }, 
		    newData(){
		    	this.showBase = true
		    }

		},
		created(){
			this.getData();
		}
	}
</script>
<style lang="less" scoped>
	.banner{
		width: 100%;
		height: 7.05rem;
		position: relative;
		img{
			height: 7.05rem;
			width: 100%;
		}
		.back{
			position: fixed;
			top: .2rem;
			left: .2rem;
			background: rgba(0,0,0,0.5);
			width: .5rem;
			height: .5rem;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			.van-icon{
				color: #FFF;
				font-size: .36rem;
			}
		}
	}
	.section{
		width: 100%;
		height: 5.14rem;
		padding: .3rem;
		h1{
			font-size: .4rem;
			line-height: .6rem;
		}
		.details{
			font-size: .22rem;
			line-height: .34rem;
			color: #757575;
		}
		.money{
			color: #ff6700;
			line-height: .6rem;
			font-size: .34rem;
		}
		.version{
			width: 100%;
			height: 1.64rem;
			background: #fafafa;
			border-radius: .3rem;
			margin-bottom: .8rem;
			p:first-of-type{
				border-bottom: 1px solid #cccccc;
				
			}
			p{
				line-height: .82rem;
				padding:0  .2rem;
				span:first-of-type{
					color: #757575;
				}
				span:last-of-type{
					
					
				}
				.van-icon{
					float: right;
					top: .25rem;
				}
			}
		}
	}
	.info_imgs>img{
		width: 100%;
	}
	.demo-sku {
	  .sku-container {
	    padding: 0 15px;
	  }
	}
	.cover{
		width: 100%;
		height: 100vh;
		background: rgba(0,0,0,0.6);
		position: fixed;
		top: 0;
		left: 0;
		.con{
			width: 100%;
			height: 8.5rem;
			position: absolute;
			bottom: 0;
			left: 0;
			background: #FFF;
			border-radius: .2rem .2rem 0 0;
			padding: .3rem .3rem 0 .3rem;
			.head{
				line-height: .5rem;
				display: flex;
				justify-content: flex-end;
				width: 100%;
				span{
					font-size: .4rem;
					display: inline-block;
					float: right;
				}
			}
		}
	}
	.product{
		height: 1.7rem;
		width: 100%;
		display: flex;
		.proImg{
			height: 1.7rem;
			width: 1.7rem; 
			img{
				height: 1.7rem;
			}

		}
		.proTxt{
			width: 100%;
			height: 100%;
			padding: .3rem;
			p:first-of-type{
				font-size: .34rem;
				line-height: .56rem;
			}
			p:last-of-type{
				font-size: .22rem;
				line-height: .46rem;
				color: #212121;
			}
		}
	}
	.classify{
		height: .92rem;
		padding-top: .46rem;
		color: #212121;
		font-size: .2rem;
	}
	.version{
		width: 100%;
		.type{
			width: 100%;
			height: .6rem;
			border:1px solid #CCC;
			line-height: .6rem;
			display: flex;
			justify-content: space-between;
			padding:  0 .2rem;
			margin-bottom: .2rem;
		}
	}
	.color{
		margin: .2rem 0;
		width: 100%;
		padding:  0 .2rem;
		display: flex;
		span{
			display: inline-block;
			margin-right: .2rem;
			padding: .14rem .26rem;
			border:1px solid #CCC;
			font-size: .2rem;
		}
	}
	.num{
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding:  0 .2rem;
		p{
			height: .6rem;
			line-height: .6rem;
		}
	}
	.shoppingCar{
		width: 100%;
		color: #FFF;
		font-size: .25rem;
		background: #ff6700;
		border-radius: .3rem;
		margin-top: .2rem;
		font-size: .3rem;
		height: .66rem;
		line-height: .66rem;
		text-align: center;
	}
	.active{
		border:1px solid #ff6700;
		color: #ff6700
	}
</style>
