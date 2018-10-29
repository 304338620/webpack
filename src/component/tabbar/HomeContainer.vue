<template>
	<div>
		<mt-swipe :auto="4000" :speed="500">
			<!--在组件中使用v-for指令要使用key绑定-->
			<mt-swipe-item v-for="item in swipeList" :key="item.url">
				<img :src="item.url"/>
			</mt-swipe-item>
			
		</mt-swipe>
		
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		    	<router-link to="home/newsList">
		        	<img src="../../img/menu1.png"/>
		    		<div class="mui-media-body">新闻资讯</div>
		    	</router-link>
		    </li>
		 	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		    	<router-link to="home/newslist">
		        	<img src="../../img/menu2.png"/>
		    		<div class="mui-media-body">图片分享</div>
		    	</router-link>
		    </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		    	<router-link to="home/newslist">
		        	<img src="../../img/menu3.png"/>
		    		<div class="mui-media-body">商品购买</div>
		    	</router-link>
		    </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		    	<router-link to="home/newslist">
		        	<img src="../../img/menu4.png"/>
		    		<div class="mui-media-body">留言反馈</div>
		    	</router-link>
		    </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		    	<router-link to="home/newslist">
		        	<img src="../../img/menu5.png"/>
		    		<div class="mui-media-body">视频专区</div>
		    	</router-link>
		    </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		    	<router-link to="home/newslist">
		        	<img src="../../img/menu6.png"/>
		    		<div class="mui-media-body">联系我们</div>
		    	</router-link>
		    </li>
		</ul> 
	</div>
	
</template>

<script>
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return {
				swipeList:null
			}
		},
		methods:{
			getSwipeData(){
				this.$http.get('/src/json/swipeImg.json').then(result=>{
//					if (result.body.status===0) {
//						this.swipeList=result.body.message;
//					} else{
//						Toast('获取数据失败！');
//					}
					this.swipeList=JSON.parse(result.bodyText).message
				})
			}
		},
		created(){
			this.getSwipeData();
		}
	}
</script>

<style lang="less" scoped>
	.mint-swipe{
		height: 240px;
	}
	.mint-swipe-item img{
		width: 100%;
		height: auto;
	}
	.mui-grid-view.mui-grid-9{
		background-color: #FFFFFF;
		border: none;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border: none;
		text-align: center;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell img{
		width: 100%;
		height: auto;
	}
	
</style>