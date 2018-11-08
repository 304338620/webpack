<template>
	<div class="app-container">
		<mt-header title="Vue-mint">
			<router-link to="/" slot="left" v-show="flag">
			    <mt-button icon="back" @click="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<transition>
			<router-view></router-view>
		</transition>
		
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/user">
				<span class="mui-icon mui-icon-person"></span>
				<span class="mui-tab-label">个人中心</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{ $store.state.cart.length }}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/setting">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				flag:true
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		watch:{
			"$route.path":function(val){
				if (val=='/home'){
					this.flag=false
				}else{
					this.flag=true
				}
			}
		},
		created(){
			if (this.$route.path=='/home') {
				this.flag=false
			}
		}
	}
</script>

<style>
	.app-container .mint-header{
		position: fixed;
		top: 0;
		z-index: 99;
		width: 100%;
	}
	.v-enter{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
	}
	.v-enter-active,.v-leave-acive{
		transition: all 0.3s linear;
	}
	.app-container{
		padding-bottom:50px ;
		padding-top: 40px;
	}
	.mui-bar-tab .mui-tab-item1 {
	    display: table-cell;
	    overflow: hidden;
	    width: 1%;
	    height: 50px;
	    text-align: center;
	    vertical-align: middle;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #929292;
	}
	.mui-bar-tab .mui-tab-item1.mui-active {
	    color: #007aff;
	}
	.mui-bar-tab .mui-tab-item1 .mui-icon {
	    top: 3px;
	    width: 24px;
	    height: 24px;
	    padding-top: 0;
	    padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
	    font-size: 11px;
	    display: block;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
</style>