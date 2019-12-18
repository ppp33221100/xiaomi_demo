<template>
	<div class="classify">
		<div class="cif_head"></div>
		<header class="cif_header">
			<van-nav-bar title="分类" left-text="返回" left-arrow>
				<van-icon name="search" slot="right" />
			</van-nav-bar>
		</header>
		<div class="cif_con">
			<div class="cif_con_left">
				<ul>
					<li v-for="(item,index) in arr" :class="{cif_click:flag==index}" @click="cif_nav(index)">{{ item }}</li>
				</ul>
			</div>
			<div class="cif_con_right" id="input">
				<div v-for="(item,index) in arr" class="cif_con_list">
					<img src="../assets/img/分类_03.gif" alt="" class="cif_image_top">
					<van-divider 
					:style="{ color: '#000000', borderColor: '#e0e0e0', padding: '0 16px'}">
					  {{ item }}
					</van-divider>
					<ul class="cif_list">
						<li>
							<img src="../assets/img/1.gif" alt="">
							<p>手机</p>
						</li>
						<li>
							<img src="../assets/img/1.gif" alt="">
							<p>手机</p>
						</li>
						<li>
							<img src="../assets/img/1.gif" alt="">
							<p>手机</p>
						</li>
						<li>
							<img src="../assets/img/1.gif" alt="">
							<p>手机</p>
						</li>
					</ul>
					<div class="cif_more">查看更多</div>
					<!-- <img src="../assets/img/分类_06.gif" alt="" class="cif_picture"> -->
				</div>
				<div class="cif_foot"></div>
			</div>

		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				arr:["手机","电视","电脑","家电","路由","出行","出行","智能","灯具","家电","电脑",],
				flag:0,
				// timeId:"",
				t:0,
				// sum:0,
				n:0,
			}
		},
		mounted(){
			var divs = document.querySelectorAll(".cif_con_list");
			this.scrollFunc();
			for(var i = 0;i < this.arr.length;i++){
				this.n += divs[i].clientHeight;
			}
		},
		methods:{
			cif_nav(i){
				this.flag = i;
				clearInterval(this.timeId)
				this.timeId = setInterval(this.fn,1);
			},
			fn(){
				//声明num获取点击事件中的i
				var num = this.flag;
				//获取滚动条距顶部距离
				this.t = document.documentElement.scrollTop || document.body.scrollTop
				var divs = document.querySelectorAll(".cif_con_list");
				//获取点击的导航对应的右侧盒子高
				var h = divs[num].clientHeight;
				//声明一个变量接收上部所有盒子的高度
				var sum = 0;
				//获取点击处上边所有盒子的高度
				for(var i = 0;i < num;i++){
					sum += divs[i].clientHeight;
				}
				console.log(sum);
				if(this.t > sum){
					document.documentElement.scrollTop--;
					if(document.documentElement.scrollTop <= sum){
						clearInterval(this.timeId)
					}
				}else if(this.t < sum){
					document.documentElement.scrollTop++;
					if(document.documentElement.scrollTop >= sum){
						clearInterval(this.timeId)
					}
				}
			},
			scrollFunc(){
				var agent = navigator.userAgent;
				var that  = this;

				document.onmousewheel = function(e) {
					e = e || window.event;
					var wheelDelta = e.wheelDelta;
					var sum = 0;
					var divs = document.querySelectorAll(".cif_con_list");
					var o = that.n-document.documentElement.scrollTop;
					if(wheelDelta > 0) {
						for(var j = that.arr.length-1;j >= 0;j--){
							sum += divs[j].clientHeight;
							if(o >= sum+90){
								that.flag = j-1;
							}
						}
					}else{
						for(var i = 0;i < that.arr.length;i++){
							sum += divs[i].clientHeight;
							if(document.documentElement.scrollTop >= sum-90){
								that.flag = i+1;
							}
						}
					}
				}
			}
		}
	}
</script>


<style lang="less" scoped>
	.cif_header{
		width: 100%;
		position:fixed;
		top:0;
		left: 0;
	}
	.cif_head{
		width: 100%;
		height: 0.8rem;
	}
	.van-ellipsis{
		color: #816866;
	}
	.van-nav-bar__text{
		color: #816866;
	}
	.van-nav-bar__arrow{
		color: #816866;
	}
	.van-icon-search{
		font-size: 0.3rem;
		color: #816866;
	}
	.cif_con_left{
		width: 1.55rem;
		height: 100%;
		background:#fafafa;
		position:fixed;
		top: 0.8rem;
		left:0;
		ul{
			width: 100%;
			li{
				width: 100%;
				height: 0.9rem;
				font-size: 0.32rem;
				color: #666666;
				text-align: center;
				line-height: 0.9rem;
			}
		}
	}
	.cif_con_right{
		width: 4.95rem;
		float: right;
		padding: 0.2rem .25rem 0;
	}
	.cif_image_top{
		width: 4.35rem;
		height: 1.55rem;
	}
	.cif_list{
		display:flex;
		flex-wrap: wrap;
		justify-content: space-between;
		li{
			width: 1.3rem;
			height: 1.3rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 0.2rem;
			img{
				width: 0.65rem;
				height: 0.8rem;
			}
		}
	}
	.cif_more{
		width: 100%;
		height: 0.7rem;
		background:#f9f5e6;
		font-size: 0.32rem;
		color: #aea38d;
		line-height: 0.7rem;
		text-align: center;
		margin-bottom: 0.4rem;
	}
	.cif_picture{
		width: 100%;
		height: 1.35rem;
	}
	.cif_foot{
		width: 100%;
		height: 0.85rem;
	}
	.cif_click{
		background:#fff;
		border-right:0.08rem solid #e02e24;
		color: #e02e24;
	}
</style>