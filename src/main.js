//import Vue from 'vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import app from './app.vue'
import {Header,Button} from 'mint-ui'
import 'mint-ui/lib/style.css'
import './css/index.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
import router from './router.js'
import { Swipe, SwipeItem } from 'mint-ui';
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


var App = new Vue({
	el:'#app',
	render(createElement){
		return createElement(app)
	},
	router:router
})