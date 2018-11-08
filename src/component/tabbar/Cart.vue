<template>
	<div class="Cart">
		<ul class="CartList">
			<li v-for="(item,i) in cartList">
				<div class="mui-checkbox mui-left">
					<label></label>
					<input type="checkbox" checked >
				</div>
				<img :src="item.img"/>
				<div class="info">
					<h4 class="mui-ellipsis">{{item.title}}</h4>
					<p class="opera">
						<span class="price">￥{{ item.price }}</span>&nbsp;&nbsp;&nbsp;<num :max="parseInt(item.num)" v-model="count[i]" :id="item.id"></num>
						<a href="#" class="mui-pull-right">删除</a>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import num from '../subComponent/cartNum.vue'
	export default {
		data(){
			return {
				cartList:[],
				count:[],
			}
		},
		methods:{
			getGoodsList(){
				this.$http.get('/src/json/goodsList.json').then(data=>{
					data=data.body.message
					var idArr=[]
					this.$store.state.cart.forEach(item=>{
						idArr.push(item.id)
					})
					var result=data.filter((item)=>{
						for (var i=0;i<idArr.length;i++) {
							if (item.id==idArr[i]) {
								return item
							}
						}
					})
					this.cartList=result
					console.log(result)
				})
			},
			getCount(){
				this.$store.state.cart.forEach(item=>{
					this.count.push(item.count)
				})
			},
			clickChec(el){
				console.log(el.target)
				el.target.checked=!el.target.checked
			}
		},
		components:{
			num
		},
		created(){
			this.getGoodsList()
			this.getCount()
		}
	}
</script>

<style lang="css" scoped>
	.Cart{
		
	}
	.Cart .CartList{
		
	}
	.Cart .CartList li{
		position: relative;
		padding-left: 40px;
		padding-right: 20px;
		border-bottom: 1px solid #CCCCCC;
	}
	.Cart .CartList li img{
		width: 50px;
		height: 50px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.Cart .CartList .info{
		display: inline-block;
		padding-left: 60px;
		width: 100%;
	}
	.Cart .CartList .info h4{
		margin-bottom: 15px;
		margin-top: 10px;
	}
	.Cart .CartList .mui-checkbox{
		position: absolute;
		top:50%;
		left: -10px;
		transform: translateY(-90%);
	}
	.Cart .price{
		color: orangered;
	}
	.Cart .mui-checkbox label{
		height: 20px;
	}
</style>