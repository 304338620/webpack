<template>
	<div>
		<mt-swipe :auto="4000" :speed="500">
			<!--在组件中使用v-for指令要使用key绑定-->
			<mt-swipe-item v-for="item in swipeList" :key="item.url">
				<img :src="item.url" :class="{'full':isfull}"/>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default {
		props:["swipeList","isfull"]
	}
</script>

<style lang="css" scoped="scoped">
	.mint-swipe{
		height: 230px;
	}
	.mint-swipe-item img{
		display: block;
		width: auto;
		height:100%;
		margin: 0 auto;
	}
	.mint-swipe-item .full{
		width: 100%;
		height: auto;
	}
</style>