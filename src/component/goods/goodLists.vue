<template>
	<div class="productBox mui-text-center">
		<div class="productItem" v-for="item in goodsList" :key="item.id" @click="toDetail(item.id)">
			<img :src="item.img"/>
			<p class="mui-ellipsis-2">{{ item.title }}</p>
			<p class="price"><span>￥{{ item.price }}</span><del>{{ item.old }}</del></p>
			<p class="num"><span>热卖中</span><span>剩余:{{item.num }}</span></p>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				goodsList:[]
			}
		},
		methods:{
			getGoodsList(){
				this.$http.get('/src/json/goodsList.json').then(data=>{
					this.goodsList=JSON.parse(data.bodyText).message
				})
			},
			toDetail(id){
				this.$router.push("/home/goodsInfo/info?id="+id)
			}
		},
		created(){
			this.getGoodsList()
		}
	}
</script>

<style lang="css" scoped="scoped">
	.productBox .productItem{
		width: 45%;
		display: inline-block;
		padding: 5px;
		margin: 5px;
		box-shadow: 0 0  5px royalblue;
	}
	.productItem img{
		width: 100%;
		display: block;
	}
	.productItem .price{
		text-align: left;
		padding-left: 25px;
	}
	.productItem .price span{
		color: orangered;
		margin-right: 10px;
		font-size: 14px;
	}
	.productItem .price del{
		font-size: 12px;
	}
	.productItem .num{
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		margin: 0;
		padding: 0 25px;
	}
</style>