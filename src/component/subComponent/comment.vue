<template>
	<div class="comment-container">
		<h4>发表评论</h4>
		<hr />
		<textarea maxlength="120" placeholder="输入您的评论（最多120字）" v-model="msg"></textarea>
		<button class="mui-btn-primary mui-btn mui-btn-block" @click="postComment">发表</button>
		<ul class="comment">
			<li class="mui-clearfix  mui-row" v-for="item in commentsList" :key="item.add_time">
				<div class="mui-text-center mui-col-xs-3">
					<img  src="http://huyaimg.msstatic.com/avatar/1098/da/673ae571c3f6819e483ecb44ce6dd6_180_135.jpg" class="avator"><br />
					<span class="uname">{{item.user_name}}</span>
				</div>
				<div class="comment-info mui-col-xs-9">
					<p>
					{{ item.content }}
					</p>
					<span class="mui-pull-right">{{ item.add_time | dateFormate }}</span>
				</div>
			</li>
		</ul>
		<button class="mui-btn-danger mui-btn mui-btn-block" @click="getmore">加载更多</button>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				commentsList:[],
				msg:''
			}
		},
		methods:{
			getComments(){
				this.$http.get('/src/json/comments.json').then((data)=>{
					this.commentsList=data.body.message
				}) //+this.id+'?pageindex=1'
			},
			getmore(){
				console.log('hello world!')
			},
			postComment(){
				this.commentsList.unshift({
					content:this.msg,
					add_time:Date.now(),
					user_name:'用户'+Math.ceil(10000*Math.random())
				})
				this.msg=''
			}
		},
		created(){
			this.getComments()
		},
		props:["id"]
	}
</script>

<style>
	p{
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
	}
	.comment{
		padding: 5px 15px;
	}
	.comment .uname{
		color: royalblue;
		text-align: center;
		margin: 0;
		font-size: 10px;
	}
	.comment .avator{
		width: 50px;
	}
	.comment .mui-ellipsis-2{
		padding: 10px 0;
	}
	.comment .comment-info span{
		font-size: 6px;
		color: #C0C0C0;
	}
	.comment-container .mui-btn-block{
		font-size: 16px;
	    display: block;
	    width: 85%;
	    margin: 5px auto;
	    padding: 7px 0;
	}
	.comment-container textarea{
		margin: 5px 0;
	}
</style>