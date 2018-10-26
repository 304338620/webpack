<template>
	<div>
		<mt-swipe :auto="4000" :speed="500">
			<!--在组件中使用v-for指令要使用key绑定-->
			<mt-swipe-item v-for="item in swipeList" :key="">
				<img :src="item.img"/>
			</mt-swipe-item>
			<mt-swipe-item>2</mt-swipe-item>
			<mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>
		
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <span class="mui-icon mui-icon-home"></span>
		    <div class="mui-media-body">新闻资讯</div></a></li>
		 	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		       <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		       <div class="mui-media-body">图片分享</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		     	<span class="mui-icon mui-icon-chatbubble"></span>
		        <div class="mui-media-body">商品购买</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <span class="mui-icon mui-icon-location"></span>
		        <div class="mui-media-body">留言反馈</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <span class="mui-icon mui-icon-search"></span>
		        <div class="mui-media-body">视频专区</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <span class="mui-icon mui-icon-phone"></span>
		        <div class="mui-media-body">联系我们</div></a></li>
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
				this.$http.get('http://vue.studyit.io/api/getlunbo').then(result=>{
					if (result.body.status===0) {
						this.swipeList=result.body.message;
					} else{
						Toast('获取数据失败！');
					}
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
		height: 200px;
		/*background-color: pink;*/
		
	}
	.mint-swipe-item{
			background-color: royalblue;
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
	}
</style>