<template>
	<div>
		<div class="goodsInfoContainer">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<router-link class="mui-control-item mui-active" :to="'/home/goodsinfo/info?id='+id">
						商品
					</router-link>
					<router-link class="mui-control-item" :to="'/home/goodsinfo/description?id='+id">
						详情
					</router-link>
					<router-link class="mui-control-item" :to="'/home/goodsinfo/comment?id='+id">
						评价
					</router-link>
				</div>
			</div>
		</div>
		<router-view></router-view>
	</div>
	
</template>

<script>
	import mui from '../../lib/mui/js/mui.js'
	export default {
		data(){
			return{
				id:this.$route.query.id
			}
		},
		mounted(){
			mui('body').on('click','a',function(){document.location.href=this.href;});
		}
	}
</script>

<style lang="css" scoped="scoped">

	.goodsInfoContainer{
		background-color: #eee;
		overflow: hidden;
	}
	.goodsInfoContainer .mui-scroll{
		display: flex;
		width: 100%;
	}
	.goodsInfoContainer .mui-scroll a{
		flex: 1;
	}
	.goodsInfoContainer .price span{
		color: orangered;
		font-size: 16px;
		margin-right: 10px;
	}
	.goodsInfoContainer .price del{
		font-size: 12px;
	}
	.goodsInfoContainer .mui-text-center{
		margin: 0;
	}
	.goodsInfoContainer .mui-text-center button{
		margin: 0 20px;
	}
</style>