<template>
	<div> 
	<div>
		<header>
			<van-icon name="arrow-left" size="20" @click="end"/>
			<p>收货地址</p>
			<van-icon name="search" size="20"/>
		</header>
		<div class="site">
			<div class="head">
				<p>诸葛铁牛</p>
				<h2>131****6588 <span>[默认]</span></h2>
				<h2>删除</h2>
			</div>
			<div class="base">
				<p>北京 北京市 顺义区</p>
				<p>居鑫花园1号楼, 1单元, 1201</p>
				<van-icon name="arrow" size="20"/>
			</div> 
			</div>
		</div>
		<div class="site">
			<div class="head">
				<p>欧阳拴住</p>
				<h2>131****2588</h2>
				<h2>删除</h2>
			</div>
			<div class="base">
				<p>北京 北京市 顺义区</p>
				<p>居鑫花园3号楼, 1单元, 1801</p>
				<van-icon name="arrow" size="20"/>
			</div>
		</div>
		<div class="site" v-for="item in arr">
			<div class="head" >
				<p>{{item.name}}</p>
				<h2>{{item.phone}}</h2>
				<h2>删除</h2>
			</div>
			<div class="base">
				<p>{{item.block}}</p>
				<p>{{item.detail}}</p>
				<van-icon name="arrow" size="20"/>
			</div>
		</div>
		<div class="bottom" @click="enter">
			新建地址
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{ 
		data(){
			return{
               arr:JSON.parse(localStorage.getItem("address"))
			}
		},
		created(){
            console.log(this.arr)
		},
		methods:{
			end(){

				this.$router.push('/mine');
			},
			enter(){
				this.$router.push('/new')
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
	.site{
       width: 90%;
       height: 2rem;
       border: 1px solid #EEEEEE;
       margin: auto;
       margin-top: 0.16rem;
       border-radius: 0.03rem;
	}
	.head{
		width: 90%;
		height: 1rem;
		border-bottom:1px solid #EEEEEE;
		margin: auto;
		display: flex;
		flex-direction:row;
		justify-content:space-around;
		line-height: 1rem;
	}
	.head p{
		font-size: 0.25rem;
		color: #FF6B09;
	}
	.head span{
		color:#FF6B09;
	}
	.head h2:last-of-type{
		color:#9D9D9D;
	}
	.base{
		width: 90%;
		height: 1rem;
		margin: auto;
		margin-left: 0.6rem;
		font-size: 0.25rem;	
		position: relative;	
	}
    .base p:first-of-type{
    	width: 4.42rem;
    	margin-top: 0.15rem;
    	font-size: 0.25rem;
    }    
    .base .van-icon{
    	position: absolute;
        right:0.3rem;
        top: 0.15rem;
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