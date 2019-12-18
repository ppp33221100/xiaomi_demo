<template>
	<div class="box">
		<header class="my">
		   <div class="head">		   	  
		   </div>
		   <h2>zmb17639800185</h2>	
		</header>
		<div class="order">
			<p>我的订单</p>
			<p>全部订单 ></p>
		</div>		
			<van-grid :column-num="3">
				  <van-grid-item icon="shopping-cart-o" text="待付款" />
				  <van-grid-item icon="peer-pay" text="优惠劵" />
				  <van-grid-item icon="star" text="收藏" />
			</van-grid>
		<div class="base">			
			<div class="member">
			   <div class="iss">
			   	<van-icon name="like-o" color="#FF6600" size="40"/>
			   	   <div class="left">					
					 <p>会员中心</p>
					 <h2>></h2>
				  </div>				
			   </div>

			   <div class="iss">
			   	<van-icon name="location-o" color="#FF6600" size="40"/>
			   	   <div class="right" @click="jump">					
					 <p>收货地址</p>
					 <h2>></h2>
				  </div>				
			   </div>									
				
			</div>
			<div class="member">
				<div class="iss">
			   	<van-icon name="idcard" color="#FF6600" size="40"/>
			   	   <div class="left">					
					 <p>我的优惠</p>
					 <h2>></h2>
				  </div>				
			   </div>
			   <div class="iss">
			   	<van-icon name="chat-o" color="#FF6600" size="40"/>
			   	   <div class="right">					
					 <p>我的意见</p>
					 <h2>></h2>
				  </div>				
			   </div>			
			</div>
            <div class="idea1">
            	<div class="iss">
			   	<van-icon name="underway-o" color="#FF6600" size="40"/>
			   	   <div class="queer">					
					 <p>浏览记录</p>
					 <h2>></h2>
				  </div>				
			   </div>		
            </div>
            <div class="idea2">
            	<div class="iss">
			   	<van-icon name="qr" color="#FF6600" size="40"/>
			   	   <div class="queer">					
					 <p>我的名片</p>
					 <h2>></h2>
				  </div>				
			   </div>		
            </div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		methods:{
			jump(){
				this.$router.push('/collect')
			}
		}
	}
</script>

<style type="text/css" scoped>
	.my{
		width: 100%;
		height: 1.35rem;
		background: #F37D0F;
		overflow: hidden;
	}
	.head{
		width: 0.85rem;
		height: 0.85rem;
		border-radius: 50%;
		border: 3px solid #F8B16F;
		margin-left: 0.24rem;
		margin-top: 0.28rem;
		float: left;
	}
	.my h2{
		float: left;
		color: #ffffff;
		margin-top: 0.6rem;
		margin-left: 0.15rem;
		font-weight: bold;
		font-size: 0.23rem;
	}
	.order{
		width: 100%;
		height: 0.82rem;
		background: #FFFFFF;
		border-bottom: 1px solid #D9D9D9;
	}
	.order p:first-of-type{
		float: left;
		line-height: 0.82rem;
        margin-left: 0.23rem;
        color: #212121; 
        font-size: 0.22rem;
        font-weight: bold;
	}
	.order p:last-of-type{
		float: right;
		color: #212121;
		font-size: 0.22rem;
		line-height: 0.82rem;
		margin-right: 0.23rem;
		font-weight: bold;
	}
	.base{
		width: 100%;
		height: 7.32rem;
		background: #F5F5F5;
		display: flex;
		flex-direction:column;
		justify-content:space-around;
	}
	.member{
		width: 100%;
		height: 1.8rem;
		background: #FFFFFF;
	}
	.iss{
		height: 0.6rem;
		margin-left: 0.32rem;
		margin-top: 0.2rem;
	}
	.member .van-icon{
        float: left;
	}
	.iss .right{
       height: 0.6rem;
	   margin-left: 1rem;
	   line-height: 0.6rem;
	}
	.iss .left{
		height: 0.6rem;
		margin-left: 1rem;
		border-bottom:1px solid #D9D9D9; 
	}
	.iss p{
		float: left;
		font-size: 0.3rem;
		font-weight: bold;
	}
	.iss h2{
		float: right;
		margin-right: 0.2rem;
		font-size: 0.3rem;
		font-weight: bold;
	}
	.idea1{
		width: 100%;		
		height: 0.9rem;
		background: #FFFFFF;
	}
	.idea2{
		width: 100%;
		height: 0.9rem;
		background: #FFFFFF;
		margin-bottom: 0.5rem;
	}
	.idea1 .van-icon{
        float: left;
	}
    .idea2 .van-icon{
        float: left;
	}
	.queer{
	   height: 0.6rem;
	   margin-left: 1rem;
	   line-height: 0.6rem;
	}			
</style>