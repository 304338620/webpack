<template>
	<div class="goodsInfoContainer">
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swipe :swipeList="swipeList" :isfull="false"></swipe>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<h4 class="mui-ellipsis-2">{{ item.title }}</h4>
					<p class="price"><span>售价：￥{{ item.price }}</span><del>指导价：{{ item.old }}</del></p>
					<p class="num">
						购买数量&nbsp;:&nbsp;&nbsp;<numbox :max="item.num"></numbox>
					</p>
					<p class="mui-text-center"><button class="mui-btn mui-btn-primary mui-btn-outlined">立即购买</button><button class="mui-btn mui-btn-danger mui-btn-outlined" @click="addCart">加入购物车</button></p>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<h4>商品参数</h4>
					<p>商品货号&nbsp;:&nbsp;{{ Math.floor(100000*Math.random()) }}</p>
					<p>库存量&nbsp;:&nbsp;{{ item.num }}</p>
					<p>上架时间&nbsp;:&nbsp;{{ Date.now()|dateFormate }}</p>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import swipe from '../subComponent/swipe.vue'
	import numbox from '../goods/numBox.vue'
	export default {
		data(){
			return {
				swipeList:[],
				id:this.$route.query.id,
				item:{},
				count:1
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
			},
			getProductData(){
				this.$http.get('/src/json/goodsList.json').then(data=>{
					data=data.body.message
					var result=data.filter((item)=>{
						return item.id==this.id
					})
					this.item=result[0]
				})
			},
			addCart(){
				console.log(this.$store)
				var goodsInfo={
					id:this.id,
					count:this.count,
					price:this.item.price,
					selectd:true
				}
				this.$store.commit("addToCart",goodsInfo)
			}
		},
		created(){
			this.getSwipeData()
			this.getProductData()
		},
		components:{
			swipe,
			numbox
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
	.goodsInfoContainer h4{
		line-height: 30px;
	}
</style>