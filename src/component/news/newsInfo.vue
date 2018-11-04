<template>
	<div class="newsinfo-containner">
		<h4 class="mui-text-center">{{ newsInfo.title }}</h4>
		<p class="subtilte">
			<span >发表时间：{{ newsInfo.add_time | dateFormate }}</span>
			<span >浏览次数：{{ newsInfo.click }}</span>
		</p>
		<hr />
		<div class="news-content" v-html="newsInfo.content">
			
		</div>
		<comment></comment>
	</div>
</template>

<script>
	import comment from '../subcomponent/comment.vue'
	export default {
		data(){
			return{
				id:this.$route.params.id,
				newsInfo:{}
			}
		},
		methods:{
			getNewsInfo(){
				this.$http.get('/src/json/newsInfo.json').then((data)=>{
					this.newsInfo=data.body.message[0]
//					console.log(this.newsInfo)
				})
			}
		},
		components:{
			'comment':comment
		},
		created(){
			this.getNewsInfo()
		}
	}
</script>

<style>
	.newsinfo-containner{
		padding: 5px;
	}
	.newsinfo-containner h4{
		color:red ;
		font-size: 16px;
		margin: 15px 0;
	}
	.newsinfo-containner .subtilte{
		display: flex;
		justify-content: space-between;
	}
	.newsinfo-containner .subtilte span{
		color: royalblue;
	}
</style>