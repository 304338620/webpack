//import Vue from 'vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import app from './app.vue'
import {Header,Button} from 'mint-ui'
import 'mint-ui/lib/style.css'
import './css/index.css'
import './lib/mui/css/mui.css'
Vue.component(Header.name,Header)
Vue.component(Button.name,Button)



var router=new VueRouter({
	routes:[
		
	]
})
var App = new Vue({
	el:'#app',
	render(createElement){
		return createElement(app)
	},
	router:router
})