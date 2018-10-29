<template>
	<div class="app-container">
		<mt-header title="Vue-mint">
			<router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<transition>
			<router-view></router-view>
		</transition>
		
		
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/user">
				<span class="mui-icon mui-icon-person"></span>
				<span class="mui-tab-label">个人中心</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/setting">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
</script>

<style>
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
	}
</style>