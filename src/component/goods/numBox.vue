<template>
	<div class="mui-numbox" data-numbox-min='1' :data-numbox-max="max" data-numbox-step="1">
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" value="1"/>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>

<script>
	import mui from '../../lib/mui/js/mui.min.js'
	export default {
		props:["max"],
		watch:{
			max(newValue,preValue){
				mui('.mui-numbox').numbox().setOption('max',newValue)
			}
		},
		mounted(){
			mui('.mui-numbox').numbox()
		}
		
	}
</script>

<style>
</style>