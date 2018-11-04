<template>
	<div>
		<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-segmented-control mui-segmented-control-inverted">
			<div class="mui-scroll">
				<a :class="['mui-control-item',item.id==0?'mui-active':'']" href="#item1mobile" v-for="item in photoList" :key="item.id">
					{{ item.title }}
				</a>
			</div>
		</div>
		<ul class="img-container">
		  <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
		    <img v-lazy="item.img_url" class="imgList">
		    <div class="info">
		    	<h4 class="mui-ellipsis">{{ item.title }}</h4>
		    	<p class="mui-ellipsis-2">{{ item.zhaiyao }}</p>
		    </div>
		  </router-link>
		</ul>
	</div>
</template>

<script>
	import mui from '../../lib/mui/js/mui.min.js'
	export default {
		data(){
			return{
				photoList:[],
				list:[]
			}
		},
		methods:{
			getPhotoListData(){
				this.$http.get('/src/json/getimgcategory.json').then((data)=>{
					this.photoList=data.body.message
					this.photoList.unshift({
						title:'全部',
						id:0
					})
				})
			},
			getList(){
				this.$http.get('/src/json/imgList.json').then(data=>{
					console.log(data.body.message)
					this.list=data.body.message
				})
			}
		},
		created(){
			this.getPhotoListData()
			this.getList()
		},
		mounted(){
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			})
		}
	}
</script>

<style lang="css" scoped="scoped">
	*{
		touch-action: pan-y;
	}
	img[lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
	}
	.imgList{
		width: 100%;
		height: auto;
	}
	.img-container{
		padding: 45px 10px 0 10px;
	}
	.img-container li{
		position: relative;
		margin-bottom: 10px;
		box-shadow: 0 0 10px;
	}
	.img-container li .info{
		position: absolute;
		bottom: 0;
		overflow: hidden;
		width: 100%;
		background-color: rgba(0,0,0,.3);
	}
	.img-container .info h4{
		color: #FFFFFF;
		font-weight: normal;
		font-size: 14px;
		padding: 0 5px;
	}
	.img-container .info p{
		color:cornflowerblue;
		font-size: 12px;
	}
	#sliderSegmentedControl{
		position: fixed;
		background-color: #FFFFFF;
		top: 40px;
	}
</style>