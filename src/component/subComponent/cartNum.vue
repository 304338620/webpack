<template>
	<div class="mui-numbox">
		<button class="mui-btn mui-btn-numbox-minus" type="button" @click="hadleDown" :disabled="currentValue==this.min">-</button>
		<input id="test" class="mui-input-numbox" type="number" :value="currentValue"/>
		<button class="mui-btn mui-btn-numbox-plus" type="button" @click="hadleUp" :disabled="currentValue==this.max">+</button>
	</div>
</template>

<script>
	export default {
		props:{
		max:{
			type:Number,
			default:Infinity
		},
		min:{
			type:Number,
			default:1
		},
		value:{
			default:1
		},
		id:{
			default:1
		}
	},
	data:function(){
		return {
			currentValue:this.value
		}
	},
	watch:{
		currentValue:function(val){
			this.$emit('input',val)
			this.$emit('on-change',val)
		},
		value:function(val){
			this.updateValue(val)
		}
	},
	methods:{
		updateValue(val){
			val=val>this.max?this.max:val
			val=val<this.min?this.min:val
			this.currentValue=val
		},
		handleChange(e){
			var val=e.target.value.trim()
			val=val>this.max?this.max:val
			val=val<this.min?this.min:val
			this.currentValue=val
		},
		hadleDown(){
			if(this.currentValue<=this.min) return 
			this.currentValue--
			this.$store.commit("updateCount",{id:this.id,count:this.currentValue})
		},
		hadleUp(){
			if(this.currentValue>=this.max) return 
			this.currentValue++
			console.log(this.id)
			this.$store.commit("updateCount",{id:this.id,count:this.currentValue})
		}
	},
	mounted:function(){
		this.updateValue(this.value)
	}
				
	}
</script>

<style>
</style>