<template>
	<div class="imgInfoContainer">
		<h4>{{ imgInfo.title }}</h4>
		<p>
			<span>发表时间：{{imgInfo.add_time | dateFormate }}</span>
			<span>浏览次数:{{ imgInfo.click }}</span>
		</p>
		<div class="img-box">
			<img src="/src/img/001.jpg" @click="showBigImg"/>
			<img src="/src/img/002.jpg" @click="showBigImg"/>
			<img src="/src/img/003.jpg" @click="showBigImg"/>
			<img src="/src/img/004.jpg" @click="showBigImg"/>
		</div>
		<div class="showBigImg" v-show="flag" @click="flag=false">
			<img :src="srcImg" />
		</div>
		<hr />
		<div v-html="imgInfo.content" class="content">
			
		</div>
		<commentInfo></commentInfo>
	</div>
</template>

<script>
	import commentInfo from '../subComponent/comment.vue'
	export default{
		data(){
			return{
				id:this.$route.params.id,
				imgInfo:{},
				flag:false,
				srcImg:''
			}
		},
		methods:{
			getImgInfo(){
				this.$http.get('./src/json/imgInfo.json').then(data=>{
					this.imgInfo=data.body.message[0]
				})
			},
			showBigImg(el,bindding){
				this.flag=true
				console.log(el.srcElement.src)
				this.srcImg=el.srcElement.src.toString()
			}
		},
		components:{
			'commentInfo':commentInfo
		},
		created(){
			this.getImgInfo()
		}
	}
</script>

<style lang="css" scoped>
	.imgInfoContainer h4{
		font-weight: normal;
		text-align: center;
	}
	.imgInfoContainer p{
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		padding:0  5px;
		color: cornflowerblue;
	}
	.imgInfoContainer .img-box{
		padding: 5px 15px;
	}
	.imgInfoContainer .img-box img{
		height: auto;
		width: 30%;
	}
	.imgInfoContainer .content{
		padding: 10px;
	}
	.imgInfoContainer .showBigImg{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0,0,0,.3);
		z-index: 999;
	}
	.imgInfoContainer .showBigImg img{
		width: 100%;
		height: auto;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
</style>