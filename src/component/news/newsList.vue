<template>
	<div>
		<h2>hello</h2>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newsList">
				<router-link :to="'/home/newsinfo/'+item.id">
					<img class="mui-media-object mui-pull-left" src="http://huyaimg.msstatic.com/avatar/1098/da/673ae571c3f6819e483ecb44ce6dd6_180_135.jpg">
					<div class="mui-media-body">
						<h4 class="mui-ellipsis">{{ item.title }}</h4>
						<p class='mui-ellipsis'>
							<span class="mui-pull-left">发表时间：{{ item.add_time | dateFormate }}</span>
							<span class="mui-pull-right">赞：{{ item.click }}</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				newsList:[]
			}
		},
		methods:{
			getNewsListData(){
				this.$http.get('/src/json/newsList.json').then((data)=>{
					this.newsList=data.body.message
					console.log(typeof(this.newsList))
					console.log(this.newsList)
				})
			}
		},
		created(){
			this.getNewsListData()
		}
	}
</script>

<style>
	p.mui-ellipsis span{
		color: royalblue;
	}
</style>