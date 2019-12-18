<template>
      <div>
      	<header>
			<van-icon name="arrow-left" size="20" @click="end"/>
			<p>新建收货地址</p>
			<van-icon name="search" size="20"/>
		</header>
		  <div class="import">
		  	  <h2>姓名:</h2>
		  	  <input type="text" v-model="name" placeholder="真实姓名">			  
		  </div>
		  <div class="import">
		  	  <h2>手机号码:</h2>
		  	  <input type="text" v-model="phone" placeholder="手机号码">			  
		  </div>
		  <div class="import">
		  	  <h2>所在街区:</h2>
		  	  <input type="text" v-model="block" placeholder="省 市 区 街道信息">			  
		  </div>
		  <div class="import">
		  	  <h2>详细地址:</h2>
		  	  <input type="text" v-model="detail" placeholder="详细地址">			  
		  </div>
		  <div class="import">
		  	  <h2>设置为默认地址:</h2>
		  	  <input type="checkbox" class="mmn">		  	 		  
		  </div>
		  <div class="bottom" @click="save">
			新建地址
		</div>		  
      </div>	
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
               name:"",
               phone:"",
               block:"",
               detail:""
			}
		},
		methods:{
			end(){
				this.$router.go(-1);
			},
			save(){				
				this.$router.push('/collect')
			}			
		}
	}
</script>

<style type="text/css" scoped>
   header{
		height: 0.82rem;
		background: #F2F2F2;

	}
	header .van-icon:first-of-type{
       float: left;
       margin-left: 0.3rem;
       margin-top: 0.3rem;
	}
	header p{
		float: left;
		margin-left: 2.1rem;
		line-height: 0.82rem;
		font-size: 0.28rem;
	}
	header .van-icon:last-of-type{
       float: right;
       margin-right: 0.3rem;
       margin-top: 0.3rem;
	}
	.import{
		height: 1.18rem;
		border-bottom: 1px solid #F5F5F5; 
	}
	.import h2{
		float: left;
		margin-left: 0.52rem;
		line-height: 1.18rem;
		font-size: 0.25rem;
	}
	.import input{
		margin-top: 0.46rem;
		margin-left: 0.5rem;
		width: 4.24rem;
		height: 0.3rem;
		float: left;
		font-size: 0.25rem;
		border:none;
	}
	.import .mmn{
		width: 0.25rem;
		height: 0.25rem;
	}
	.bottom{
        width: 100%;
        height: 0.82rem;
        background: #FF6700;
        border-radius: 3px;
        position: absolute;
        bottom:0;
        left: 0;
        line-height: 0.82rem;
        text-align: center;
        color:#FFFFFF;
        font-size: 0.25rem;
    }	
</style>